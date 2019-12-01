function onSuccess() {
  console.log("success");
}
function onError() {
  console.log("error");
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

promise.then(onSuccess());
promise.catch(onError());
