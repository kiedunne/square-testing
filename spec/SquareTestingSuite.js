
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
    throw console.log("Equal failed!", { type: "Test Failed", details: { actual: actual, expected: expected} });
  } else {
    console.log("Equal passed!", { type: "Test passed", details: {actual: actual, expected: expected} })
  }
};

const before = function(beforeFunc) {
  try {
    beforeFunc();
  } catch {
    console.error("Function has an exception in before");
  }
};
