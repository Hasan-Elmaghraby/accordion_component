import { Accordion } from "./components/Accordion";
import type { AccordionProps } from "./components/AccordionProps";

const text = "Hello world!";

function App() {
  const items: AccordionProps["items"] = [
    {
      id: "1",
      label: "Accordion 1",
      content: <p className="text-2xl">{text}</p>,
    },
    {
      id: "2",
      label: "Accordion 2",
      content: <p className="text-2xl">{text}</p>,
    },
    {
      id: "3",
      label: "Accordion 3",
      content: <p className="text-2xl">{text}</p>,
    },
  ];
  return <Accordion items={items} defaultActiveKeys={["1", "2"]} />;
}

export default App;
