import React from "react";
import { Collapse, Panel } from "./components/accordion/Accordion";

const App: React.FC = () => {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Custom Accordion</h2>
      <Collapse accordion tabIndex={1}>
        <Panel header="Panel 1">
          <p>This is the content of Panel 1.</p>
        </Panel>
        <Panel header="Panel 2">
          <p>This is the content of Panel 2.</p>
        </Panel>
        <Panel header="Panel 3">
          <p>This is the content of Panel 3.</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default App;
