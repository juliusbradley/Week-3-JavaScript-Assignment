// Question 1

class Hash {
    constructor(hash) {
        this.hash = hash;
    }

    isEmpty() {
            if (Object.values(this.hash).length === 0) {
                return true
            } else {
                return false;
            }
    }

      merge(newHash){
        return new Hash(Object.assign(this.hash, this.newHash));
    }

    hasKey(key){
      for (let i in this.hash){
        if (i === key){
          return true;
        }else{
          return false;
        }
      }
    }

    invert(){
      let result = {};
      for(let items in this.hash){
         result[this.hash[items]] = items;
      }
      return result;
    }

    inspect(){
      let result = "{";
      for(let items in this.hash){
        console.log((this.hash)[items])
        result = result += `${items} => ${this.hash[items]} `
      }
      return result + "}"
    }

    keys (){
      let result = [];
      for(let keys in this.hash){
        result.push(keys);
      }
      return result;
    }

    values(){
      let result = [];
      for (let items in this.hash){
        result.push(this.hash[items]);
      }
      return result;
    }
  }

let emptyHash = new Hash({});
let hash = new Hash({a: 1, b: 2, c: 3});

console.log(hash.isEmpty()) // returns false
console.log(emptyHash.isEmpty()) // returns true

    let merged = hash.merge(new Hash({
        bob: 'yo',
        jane: 'ya'
    }));
    // returns Hash {a: 1, b: 2, c: 3, bob: 'yo', jane: 'ya'}
    // should not mutate original hash

    console.log(merged !== hash) // should be true

    console.log(hash.hasKey('a')) // returns true
    console.log(hash.hasKey('bob')) // returns false
    console.log(merged.hasKey('bob')) // returns true

    // Values will have to made into strings
    console.log(hash.invert()) // returns Hash {'1':'a', '2':'b', '3':'c'}
    console.log(hash.inspect()) // returns "{'a' => 1, 'b' => 2, 'c' => 3}"
    console.log(hash.keys()) // returns ['a', 'b', 'c']
    console.log(hash.values()) // returns [1, 2, 3]




//------------------------------------

//Question 2

// In a stack the last data that comes in is the first data that comes out.
// In a Queue the first data that comes in is the first data out.

class Queue {
      constructor(str) {
          this.str = str;
      }
        add (element){
        this.str =  this.str.concat(element);
      }

        remove (){
        delete this.str;
        this.str
      }
    }


      const Stack = function(stackStr){
          this.stackStr = stackStr;
        };

       Stack.prototype.add = function(element) {
        this.stackStr =  this.stackStr.concat(element);
      };

        Stack.prototype.remove = function (){
        delete this.stackStr;
        this.stackStr;
      };


const stack = new Stack("hi");
stack.add("hello");
console.log(stack);
stack.add("bonjour");
console.log(stack);
stack.remove();
console.log(stack);

const queue = new Queue("how");
console.log(queue);
queue.add("are");
queue.add("you");
console.log(queue);
queue.remove();
console.log(queue);

//-----------------------------------------------

  // Question 3

    //1, 2, 4, 8, 16, 22, 26, 38, 62

//recursion

function formula(number){
  let result = [];
  let arr = number.toString()
  arr.split("");
  if(arr.length === 1){
    result = parseInt(arr[0])*2;
  }else{
  result = number + parseInt(arr[0]) * parseInt(arr[1]);
  }
  return result;
}
    function digitProduct(n , sequenceNum) {
      if (n === 1) {
        return sequenceNum;
      } else {
        if (sequenceNum < 10) {
         sequenceNum = sequenceNum + sequenceNum;
         return digitProduct(n-1, sequenceNum);
        } else {
          return digitProduct(n-1, formula(sequenceNum));
        }
      }
    }

      digitProduct(9,1); //62


      //iteration


 function formula(number){
  let result = [];
  let arr = number.toString()
  arr.split("");
  if(arr.length === 1){
    result = parseInt(arr[0])*2;
  }else{
  result = number + parseInt(arr[0]) * parseInt(arr[1]);
  }
  return result;
}



     function digitProduct(n){
      let sequenceNum = 1;
      if(n === 1){
        return 1;
      }else{
        for (let i = 0; i < n-1; i++) {
          sequenceNum = formula(sequenceNum);
        }
        return sequenceNum;
      }
    }

    digitProduct(9,1); //62
