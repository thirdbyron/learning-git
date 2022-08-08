const getValueOfLastNestedObject = (keysSequence, nestedObject) => {
  const keysArray = keysSequence.split(".");
  let tempObj = nestedObject;
  for (key of keysArray) {
    if (tempObj[key]) {
      tempObj = tempObj[key];
    } else {
      return undefined;
    }
  }
  return tempObj;
}

