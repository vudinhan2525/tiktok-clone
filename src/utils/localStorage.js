const saveToStorage = (name, value) => {
  return localStorage.setItem(name, JSON.stringify(value));
};
const getFromStorage = (name) => {
  return JSON.parse(localStorage.getItem(name)) || false;
};
export { saveToStorage, getFromStorage };
