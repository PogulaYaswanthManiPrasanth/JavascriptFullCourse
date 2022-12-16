var myMap = new Map();

myMap.set(1,"Apple");
myMap.set(2,"Ball");
myMap.set(3,"Camel");
myMap.set(4,"Dog");
myMap.set(5,"Elephant");

console.log(myMap);

// Classic way to use maps in forOf loop

for (let key of myMap.keys()) {
    console.log(key);
}


for (let values of myMap.values()) {
    console.log(values);
}


// If i want both key and values then

for (let [key,values] of myMap){
    console.log(`key is ${key} and value is ${values}`)
}


//Here confusion begins by using ForEach ------> here we are getting only values if run with keys also because 
// forEach method is designed such a way that modified only value but keys 


myMap.forEach((value,key) => {
    console.log(`${value} and the key is ${key}`);
});



myMap.delete(1);
console.log(myMap)
