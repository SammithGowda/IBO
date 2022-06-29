/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

// const listOfProducts = [{
//     productName: "TV",
//     quantity: 10,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 5,
//     description: "air conditioner"
//   },
//   {
//     productName: "TV",
//     quantity: 10,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 5,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//     description: "Ceiling Fan"
//   }
// ];

*/

let product = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

function getUniquePrducts(product) {
  const result = product.reduce((unique, current) => {
    const obj = unique.find((e) => e.productName === current.productName);
    obj ? (obj.quantity += current.quantity) : unique.push(current);
    return unique;
  }, []);
  return result;
}

console.log(getUniquePrducts(product));

function getUniqueProductCount(product) {
  let bucket = {};
  let finalans = [];
  for (let i = 0; i < product.length; i++) {
    let char = product[i].productName;
    if (bucket[char] === undefined) {
      bucket[char] = 1;
    } else {
      bucket[char] = bucket[char] + 1;
    }
  }
  finalans.push(bucket);
  return finalans;
}

console.log(getUniqueProductCount(product));
