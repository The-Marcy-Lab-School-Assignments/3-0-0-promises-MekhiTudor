const resolvedWrapper = (input) => {
  const promise = new Promise((resolve, reject) => {
    resolve(input);
  });
  return promise;
};

const rejectedWrapper = (input) => {
  const promise = new Promise((resolve, reject) => {
    reject(new Error(`${input}`));
  });
  return promise;
};

const handleResolvedPromise = (promise) => {
  return promise.then((promise) => {
    console.log(promise);
    return promise;
  });
};

const handleResolvedOrRejectedPromise = (promise) => {
  return promise
    .then((promise) => {
      console.log(promise);
      return promise;
    })
    .catch((error) => {
      console.error(`Your error message was: ${error.message}`);
      return null;
    });
};

const pauseForMs = (num) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, num);
  });
  return promise;
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
