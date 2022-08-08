const returnLastObject = (keysSequence, objectVariety) => {
  const keysArray = keysSequence.split(".");
  let tempObj = objectVariety;
  for (key of keysArray) {
    if (tempObj[key]) {
      tempObj = tempObj[key];
    } else {
      console.log(undefined)
      return undefined;
    }

  }
  console.log(tempObj)
  return tempObj;
}

returnLastObject("hallo.hey.privet.ego", {hallo: {
  hey: {
    c: {},
    privet: []
  }
}})