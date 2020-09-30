var x = () => {
    console.log("person 1 got ticket");
    console.log("person 2 got ticket");
    
    var getticket = new Promise((resolve, reject) => {
      setInterval(() => {resolve("ticket")}, 3000);
    });
    var getpopcorn = getticket.then((x) => {
        console.log(`Wife : ${x} bought`);
        console.log(`Husband : Okay honey let's go IN`);
        console.log(`Wife : Baby I want popcorn`);
        return new Promise((resolve, reject) => {
            resolve(`${x}, popcorn`);
        });
    })
    var getwater = getpopcorn.then((x) => {
        console.log("Husband : Okay I'll get, Come love let's go");
        console.log("Wift : Sorry Honey, get some water");
        return new Promise((resolve, reject) => {
            resolve(`${x} and water`);
        });
    })
    
    getwater.then((x) => console.log(`${x} is ready and they both went IN`))
    getwater.finally(() => console.log("Finally they both enjoyed the happy romantic movie"));
    
    
    
    console.log("person 4 got ticket");
    console.log("person 5 got ticket");
    };
    x();