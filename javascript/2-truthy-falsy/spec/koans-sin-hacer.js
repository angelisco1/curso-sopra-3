context = describe;

describe("the JavaScript language", function () {

  describe("has different types and operators that", function () {
    it("considers numbers to be equal to their string representation", function () {
      expect(1 == "1").toBeTruthy();// Truthy or Falsy
      expect(1 != "1").toBeFalsy();// Truthy or Falsy
    });

    it("knows that numbers and strings are not exactly the same", function () {
      expect(1 === "1").toBeFalsy();// Truthy or Falsy
      expect(1 !== "1").toBeTruthy();// Truthy or Falsy
    });

    it("joins parts as string when using the plus operator", function () {
      expect(1 + "a").toEqual("1a");
    });

    it("operates integers before joining the string", function () {
      expect(1 + 1 + "2").toEqual('22');
    });

    it("knows the type of the variable", function () {
      var x = 1;
      expect(typeof (x)).toEqual('number');
    });

    it("considers an empty string to be falsy", function () {
      expect("" == false).toBeTruthy();// Truthy or Falsy
      expect("" === false).toBeFalsy();// Truthy or Falsy
    });

    it("considers zero to be falsy", function () {
      expect(0 == false).toBeTruthy();// Truthy or Falsy
      expect(0 === false).toBeFalsy();// Truthy or Falsy
    });

    it("considers nulls to be falsy", function () {
      var x = null;
      var result;
      if (x) {
        result = true;
      }
      else {
        result = false;
      }

      expect(result == false).toBeTruthy();// Truthy or Falsy
    });

    it("knows the type of a function", function () {
      function x() { }

      expect(typeof (x)).toBe('function');
      expect(typeof (xxx)).toBe('undefined');
    });

  });
});


// FALSY -> false, 0, '', null, undefined
// TRUTHY -> Lo que no está en el Falsy (true,  numeros != 0, strings != '', [], {})