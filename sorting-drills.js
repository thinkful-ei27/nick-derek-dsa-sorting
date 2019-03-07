'use strict';

const datastring = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
// const datastring = '2 3 1';

const dataset = datastring.split(' ').map(num => Number(num));

// Quick sort
const qSort = (array, start = 0, end = array.length, steps = 0) => {
  steps++;
  // console.log('qSort Ran!', steps);
  const obj = { array, steps };
  if (start >= end) {
    return obj;
  }

  const middle = partition(array, start, end);
  let left = qSort(array, start, middle, steps);
  obj.array = left.array;
  obj.steps = left.steps;
  let right = qSort(array, middle + 1, end, obj.steps);
  obj.array = right.array;
  obj.steps = right.steps;
  return obj;
};

const partition = (array, start, end) => {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
};

const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

// console.log(qSort(dataset));

// Merge Sort
const mSort = (array, steps = 0) => {
  steps++;
  // console.log('mSort Ran!', steps);
  if (array.length <= 1) {
    return { array, steps };
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left, steps);
  right = mSort(right, left.steps);
  return { array: merge(left.array, right.array, array), steps: right.steps };
};

const merge = (left, right, array) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
};

// console.log(mSort(dataset));

// Bucket sort
// const bucketNumbers = [10, 4, 3, 2, 6, 8, 7, 9, 1];
//const max = 10;
//const min = 1;

const bSort = (array, min, max) => {
  const tempArray = [];
  for(let i = 0; i <= max; i++){
      tempArray.push('x');
  }
  for(let i = 0; i < array.length; i++){
      tempArray[array[i]] = 'y'; 
  }
  const sortedArray = [];
  for(let i = 0; i < tempArray.length; i++){
    if(tempArray[i] === 'y'){
      sortedArray.push(i);
    }
  }
  return sortedArray;
}

//console.log(bSort(dataset, 0, 98));

//Sort in place/step in time/random

const rSort = (array) => {
  const max = array.length;
  for(let i = 0; i < array.length; i++){
    swap(array, Math.floor(Math.random()*(max)), Math.floor(Math.random()*(max)));
  }
  return array;
}

console.log(rSort(dataset));
console.log(rSort([1, 2, 3, 4, 5]));
/*const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}; */