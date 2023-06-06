const obj = { 
  x: 10, 
  y: 20, 
  inner: { 
      x: 20, 
      z: 30 
  }, 
      foo2: { 
          k: 23, 
          p: 13 
      } 
  }


  function getFlattenObject(obj, newObj = {}) {
    
    for (const key in obj) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        getFlattenObject(obj[key], newObj);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }

  console.log(getFlattenObject(obj)); 








  

//CORRECT VARIANT

// function copyObject(obj) {
//   const newObj = {};
  
//   for (let key in obj) {
//   if(typeof obj[key] === 'object') {
//       Object.assign(newObj, copyObject(obj[key]));
//   } else {
//     newObj[key] = obj[key];
//   }
// }
//   return newObj;
// }

// console.log(copyObject(obj)); 

//or
// const result = copyObject(obj);
// console.log(result);