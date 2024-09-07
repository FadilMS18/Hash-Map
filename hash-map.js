import { Helper, Node } from "./other";

function hash(key, bucketSize) {
  let hashCode = 0;
  let prime = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = prime * hashCode + key.charCodeAt(i);
  }
  return hashCode % bucketSize;
}

class HashMap {
  static loadFactor = 0.75;
  static occupied = 0;

  constructor() {
    this.buckets = new Array();
  }

  isBucketEmpty(index) {
    if (this.buckets[index] == undefined) return true;
    return false;
  }

  bucketSize() {
    return this.buckets.length;
  }

  expand() {
    if (this.bucketSize * HashMap.loadFactor >= HashMap.occupied) {
      this.bucketSize *= 2;
    }
  }

  set(key, value = key) {
    this.expand(); // Expand the hashMap if the estimated length is passed
    let index = hash(key, this.bucketSize);
    if (this.isBucketEmpty) {
      this.buckets[index] = new Node(key, value);
      HashMap.occupied += 1;
    } else {
      let keyInBucket = Helper.takeKey(this.buckets[index]);
      if (key == keyInBucket) {
        // If key in bucket is equal to given key then change the value
        this.buckets[index][key] = value;
      } else {
        while (bucket !== null) {
          bucket = bucket.next;
        }
        bucket = new Node(key, value); // If Not follow the head and make a linked list
      }
    }
  }

  get(key){
    let hashCode = hash(key, this.bucketSize)
    let bucket = this.buckets[hashCode]
    if(!bucket) return null // If bucket is empty then return null
    else if(Helper.takeKey(bucket) == key) return bucket[key]; // If head key is equal to then return value
    else{
        while(bucket !== null){
            bucket = bucket.next
            if(Helper.takeKey(bucket) == key ) return bucket[key]
        }
    }
    return null
  }

  has(key){
    let hashCode = hash(key, this.bucketSize)
    let bucket = this.buckets[hashCode]
    if(!bucket) return false;
    else if(Helper.takeKey(bucket) == key) return true
    else{
        while(bucket !== null ){
            bucket = bucket.next
            if(Helper.takeKey(bucket) == key) return true
        }
    }
    return false
  }

  remove(key){
    let hashCode = hash(key, this.bucketSize)
    let bucket = this.buckets[hashCode]
    if(!bucket) return false
    else if(Helper.takeKey(bucket) == key){
        this.buckets[hashCode] = bucket.next
    }else{
        while(bucket.next !== null){
            if(Helper.takeKey(bucket.next) == key){
                bucket.next = bucket.next.next
            return true
            }
                bucket = bucket.next
        }
    }
    return false
  }

  length(){
    let total = 0
    this.buckets.forEach((bucket)=>{
        if(typeof(bucket) == 'object'){
            while(bucket !== null){
                total += 1
                bucket = bucket.next
            }
        }
    })
    return total
  }
}
