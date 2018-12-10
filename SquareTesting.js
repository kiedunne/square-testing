
const describe = function(msg, testFunc) {
  try {
    testFunc();
  } catch {
    console.error("Function has an exception in describe");
  }
};

const it = function(msg, testFunc) {
  try {
    testFunc();
  } catch {
  console.error("Function has an exception in it");
  }
};

const equal = function(actual, expected) {
  if(expected != actual) {
    throw console.log("Equal failed");
  } else {
    console.log("Equal passed!")
  }
};

const before = function(beforeFunc) {
  try {
    beforeFunc();
  } catch {
    console.error("Function has an exception in before");
  }
};


  // describe(function() {
  //   equal(true, true);
  //   equal(true, false);
  // });
  //


// var assertEqual = function(actual, expected) {
//   if(actual !== expected) {
//     throw console.log("Failed!", { type: "Test Failed", details: { actual: actual, expected: expected} })
//   } else {
//     console.log("Passed!", { type: "Test passed", details: {actual: actual, expected: expected} })
//   }
// };
//
// assertEqual(true, true)
// assertEqual(true, false)
