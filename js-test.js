const getValueOfLastNestedObject = (keysSequence, nestedObject) => {
  const keysArray = keysSequence.split(".");
  let lastNestedObject = nestedObject;
  for (key of keysArray) {
    if (lastNestedObject[key]) {
      lastNestedObject = lastNestedObject[key];
    } else {
      return undefined;
    }
  }
  return lastNestedObject;
}

