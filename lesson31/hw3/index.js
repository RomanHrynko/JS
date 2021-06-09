const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Done');
    }, ms);
  });
};

delay(3000).then(value => console.log(value));
