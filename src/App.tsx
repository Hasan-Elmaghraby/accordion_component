import { Accordion } from "./components/Accordion";
import { AccordionITem } from "./components/AccordionITem";
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
      <Accordion items={items} />
      <Accordion items={items} />
      <AccordionITem
        item={{
          id: 1,
          label: "SingleAccordion",
          content: "Content of SingleAccordion",
        }}
      />
    </div>
  );
}

export default App;
