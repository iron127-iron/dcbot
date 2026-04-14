export const variables = {
  userName: "",
  userId: "",
  serverName: "",
  points: 0
};

export function setVar(key, value) {
  variables[key] = value;
}

export function getVar(key) {
  return variables[key];
}