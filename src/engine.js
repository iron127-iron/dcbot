import { getVar, setVar } from "./variables";

export function runLogic(nodes, interaction) {
  let output = "";

  for (const n of nodes) {
    const label = n.data.label;

    if (label.includes("slash")) {
      if (interaction.isChatInputCommand()) {
        if (interaction.commandName === "ping") {
          output = "Pong 🏓";
        }
      }
    }

    if (label.includes("button")) {
      if (interaction.isButton()) {
        if (interaction.customId === "add_point") {
          setVar("points", getVar("points") + 1);
          output = "+1 point";
        }
      }
    }

    if (label.includes("if")) {
      if (getVar("points") > 10) {
        output = "VIP";
      } else {
        output = "NORMAL";
      }
    }
  }

  return output;
}
