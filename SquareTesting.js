
var assertEqual = function(actual, expected) {
  if(actual !== expected) {
    throw console.log("Failed!", { type: "Test Failed", details: { actual: actual, expected: expected} })
  } else {
    console.log("Passed!", { type: "Test passed", details: {actual: actual, expected: expected} })
  }
};


assertEqual(true, true)
assertEqual(true, false)
