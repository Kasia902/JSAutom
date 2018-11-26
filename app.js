 let Promise1 = new Promise((resolve, reject) => 
setTimeout(() => {
    console.log(`1st step`);
    resolve();
  })).then(() => {
        console.log(`2nd step`);
  });

let Promise2 = new Promise((resolve, reject) => 
  setTimeout(() => {
      console.log(`3rd step`);
      resolve();
    }, 3000)).then(() => {
          console.log(`4th step`);
    });

let doPromises = Promise1.then(function() {
        return Promise2;
       });
console.log(doPromises); 