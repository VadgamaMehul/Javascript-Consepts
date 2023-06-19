/**
 * In JavaScript, "maps" refer to the built-in data structure called "Map". A Map is a collection of key-value
 * pairs in which each key can only appear once in the collection.
 * 
 * Maps can be created using the Map constructor or by using the Map literal syntax. Here's an example of 
 * creating a Map using the constructor:
 * 
 *     const myMap = new Map();
 * 
 * You can also initialize a Map with key-value pairs using an array of arrays, 
 * where the first element of each sub-array is the key and the second element is the value:
 * 
 *       const myMap = new Map([ ["key1", "value1"], 
 *                               ["key2", "value2"], 
 *                               ["key3", "value3"] 
 *                            ]);
 * 
 * Maps provide methods for adding, getting, and deleting key-value pairs, as well as for iterating over 
 * the keys or values. Here are some examples:
 *
 *  // Adding key-value pairs
 *  myMap.set("key4", "value4");
 *  
 *  // Getting values by key
 *  const value = myMap.get("key2");
 *  
 *  // Deleting key-value pairs
 *  myMap.delete("key3"); 
 *  
 *  // Iterating over keys
 *  for (const key of myMap.keys()) {
 *    console.log(key);
 *  }
 *  
 *  // Iterating over values
 *  for (const value of myMap.values()) {
 *    console.log(value);
 *  }
 *  
 *  // Iterating over key-value pairs
 *  for (const [key, value] of myMap) {
 *    console.log(`${key} = ${value}`);
 *  }
 *  
 *  Maps can be useful in many situations where you need to store and retrieve data by a unique identifier, such as a user ID or a product code.
 * 
 */