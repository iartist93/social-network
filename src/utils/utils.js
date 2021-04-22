export const generateID = () =>
  Math.floor(Math.random() * 100000) +
  new Date().toLocaleTimeString().replaceAll(":", "-").replaceAll(" ", "-");
