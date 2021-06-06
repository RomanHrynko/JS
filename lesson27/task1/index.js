localStorage.setItem('person', JSON.stringify({ name: 'Tom' }));
localStorage.setItem('age', JSON.stringify(17));
console.log(Object.entries(localStorage));
const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch {
      newValue = value;
    }
    return { ...acc, [key]: newValue };
  }, {});
};

console.log(getLocalStorageData());
