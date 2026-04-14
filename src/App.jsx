import { useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { runLogic } from "./engine";

export default function App() {
  const [nodes, setNodes] = useState([
    { id: "1", data: { label: "slashCommand" }, position: { x: 200, y: 100 } }
  ]);

  const [code, setCode] = useState("");

  const generateCode = () => {
    setCode(`// Logic Engine Enabled\n// Variables + IF/ELSE supported`);
  };

  const testRun = () => {
    const fakeInteraction = {
      isChatInputCommand: () => true,
      commandName: "ping",
      isButton: () => false,
      user: { username: "TestUser" }
    };

    const result = runLogic(nodes, fakeInteraction);
    setCode(result);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: 300 }}>
        <button onClick={generateCode}>Generate</button>
        <button onClick={testRun}>Test Run</button>
        <pre>{code}</pre>
      </div>

      <div style={{ flex: 1 }}>
        <ReactFlow nodes={nodes} fitView />
      </div>
    </div>
  );
}