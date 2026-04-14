import { getVar, setVar } from "./variables";

export function runLogic(nodes, interaction) {
  let output = "";

  nodes.forEach((n) => {

    // Slash Command
    if (n.data.label.includes("slash")) {
      if (interaction.isChatInputCommand()) {

        // IF / ELSE LOGIC
        if (interaction.commandName === "ping") {
          output = "Pong! 🏓";
        } else if (interaction.commandName === "hello") {
          output = "Hello " + interaction.user.username;
        }
      }
    }

    // BUTTON
    if (n.data.label.includes("button")) {
      if (interaction.isButton()) {
        if (interaction.customId === "add_point") {
          setVar("points", getVar("points") + 1);
          output = "+1 point";
        }
      }
    }

    // IF NODE
    if (n.data.label.includes("if")) {
      if (getVar("points") > 10) {
        output = "You are rich!";
      } else {
        output = "Not enough points";
      }
    }

  });

  return output;
}