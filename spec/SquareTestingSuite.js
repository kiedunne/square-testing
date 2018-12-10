function PushResults() {
  this.results = "null"
};

  const before = function(beforeFunc) {
    try {
      beforeFunc();
    } catch {
      throw stackTrace("Function has an exception in before");
      this.results.push("Test Failed");
    }
  };

  const describe = function(msg, testFunc) {
    try {
      testFunc();
    } catch {
      throw stackTrace('Function has exception at describe');
    }
  };

  const it = function(msg, testFunc) {
    try {
      testFunc();
    } catch {
      throw stackTrace('Function has exception at it');
    }
  };

  const equal = function(actual, expected) {
    if(expected != actual) {
      throw stackTrace("Equal failed!");
      console.log("Equal failed!", { type: "Test Failed", details: { actual: actual, expected: expected} });
      this.results = "Test Failed";
    } else {
      console.log("Equal passed!", { type: "Test passed", details: {actual: actual, expected: expected} });
      this.results = "Test passed";
    }
  };

  function stackTrace(msg) {
    var err = new Error(msg);
    return err.stack;
  };
