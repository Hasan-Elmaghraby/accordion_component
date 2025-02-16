import { GoChevronRight } from "react-icons/go";
import { Accordion } from "./components/Accordion";
function App() {
  const items = [
    {
      id: 1,
      label: "Accordion 1",
      content: <p className="text-2xl">Content 1</p>,
    },
    {
      id: 2,
      label: "Accordion 2",
      content: <p className="text-2xl">Content 2</p>,
    },
    {
      id: 3,
      label: "Accordion 3",
      content: <p className="text-2xl">Content 3</p>,
    },
  ];
  return (
    <div className="m-5">
      <Accordion
        items={items}
        defaultActiveKey={[1]}
        disabledCollapse={[2]}
        icon={
          <div className="text-2xl ">
            <GoChevronRight />
          </div>
        }
      />
    </div>
  );
}

export default App;
