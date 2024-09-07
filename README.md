# HashMap
HashMap is another data structure that we learned here in The Odin Project (TOP) that is a mixed between an array an a linked list where value of single array become a linked list

## Functions 
1. Hash(key), Take the given argument then return a number that been hash and will become an index for the buckets inside the hash map
2. set(key, value), function that will take two argument, hash the key and put the key with it value on buckets with hashed number from before
3. get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.

4. has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.

5. remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.

6. length() returns the number of stored keys in the hash map.

7. clear() reset the hash map

8. keys() returns an array containing all the keys inside the hash map.

9. values() returns an array containing all the values.

10. entries() returns an array that contains each key, value pair. Example: [firstKey: firstValue, secondKey: secondValue, etc]

## How it's work
You can fork the repo and clone it to your local machine, and run nodemon in your terminal and make sure you have nodemon installed on your local