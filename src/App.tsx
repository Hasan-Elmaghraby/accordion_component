import { Accordion } from "./components/Accordion";
function App() {
  const items = [
    {
      id: 1,
      label: "Accordion 1",
      content: "Content 1",
    },
    {
      id: 2,
      label: "Accordion 2",
      content: "Content 2",
    },
    {
      id: 3,
      label: "Accordion 3",
      content: "Content 3",
    },
  ];
  return (
    <div className="m-5">
      <Accordion items={items} />
    </div>
  );
}

export default App;
