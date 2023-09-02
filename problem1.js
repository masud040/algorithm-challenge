function arrayReplace(inputArr, elementReplace, subtractionElem) {
  inputArr.forEach((element, index) => {
    if (element === elementReplace) {
      inputArr[index] = subtractionElem;
    }
  });
  console.log(inputArr);
}

arrayReplace([1, 2, 3], 1, 3);
