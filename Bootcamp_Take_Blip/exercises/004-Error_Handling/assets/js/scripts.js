(() => {
  function verifyArray(arr, length) {
    try {
      if (!arr || length === undefined)
        throw new ReferenceError("The function expect a array and a number");

      if (typeof arr !== "object")
        throw new TypeError("First Param must be an array");

      if (typeof length !== "number")
        throw new TypeError("Expect second Param to be a number");

      if (arr.length !== length)
        throw new RangeError(
          "Expect array length to be equals to the number sent as the second param"
        );
    } catch (error) {
      console.error(error);
    }
  }

  verifyArray([], 3);
})();
