function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(array1, array2) {
  const mergedArray = [];
  while (array1.length && array2.length) {
    mergedArray.push(
      array1[0] < array2[0]
        ? findMinAndRemoveSorted(array1)
        : findMinAndRemoveSorted(array2)
    );
  };
  return mergedArray.concat(array1).concat(array2);
}

function mergeSort(unsortedArray) {
  if (unsortedArray.length < 2) {
    return unsortedArray;
  } else {
    const median = unsortedArray.length/2;
    const firstHalf = unsortedArray.slice(0, median);
    const secondHalf = unsortedArray.slice(median, unsortedArray.length);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}
