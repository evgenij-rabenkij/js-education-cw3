"use strict";

//Delay with setTimeout
async function delay(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

delay(5000).then(() => console.log("Delayed"));


//Load an array sequentially
let chain = Promise.resolve();
let results = [];
let urls = [
    "user.json",
    "guest.json",
    "admin.json",
];

urls.forEach(function(url) {
    chain = chain
    .then(() => getObjectFromURL(url))
    .then((result) => {
      results.push(result);
    });
});

function getObjectFromURL(url){
    return url.replace(".json", "_object");
}

chain.then(() => {
  console.log(results);//"user_object", "guest_object", "admin_object"
});