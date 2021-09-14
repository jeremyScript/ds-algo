const mergeSort = (arr) => {
  const len = arr.length;
  if (len < 2) return arr;

  const halfLen = Math.floor(len / 2);
  const arrA = arr.slice(0, halfLen);
  const arrB = arr.slice(halfLen);

  const arr1 = mergeSort(arrA);
  const arr2 = mergeSort(arrB);

  const merged = [];

  while (arr1.length || arr2.length) {
    if (arr1[0] < arr2[0] || !arr2.length) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }

  return merged;
};

const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    if (val < pivot) {
      left.push(val);
    } else {
      right.push(val);
    }
  }

  return [...quickSort(right), pivot, ...quickSort(left)];
};

const quickSelect = (arr, k) => {
  if (k > arr.length)
    throw new Error(
      "The value of k cannot be greater than the length of the array"
    );

  if (k < 1) throw new Error("The value of k cannot be less than 1");

  if (arr.length < 2) return arr;

  const r = Math.floor(Math.random() * arr.length);
  const pivot = arr[r];

  const arrA = [];
  const arrB = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === r) continue;
    const val = arr[i];
    if (val > pivot) {
      arrA.push(val);
    } else if (val < pivot) {
      arrB.push(val);
    }
  }

  if (k <= arrA.length) {
    return quickSelect(arrA, k);
  } else if (k > arr.length - arrB.length) {
    return quickSelect(arrB, k - (arr.length - arrB.length));
  } else {
    return pivot;
  }
};
