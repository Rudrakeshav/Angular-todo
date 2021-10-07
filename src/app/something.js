const promise = new Promise((res) => res(2));

promise
  .then((v) => {
    console.log(v + " one");

    return v * 2;
  })

  .then((v) => {
                  console.log(v + " two");





    return v * 2;
  })

  .then((v) => {
    console.log(v + " four");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally((v) => {
    console.log(v + " three (finally)");

    return v * 2;
  });
