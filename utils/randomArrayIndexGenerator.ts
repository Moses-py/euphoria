export function randomizeArray<T>(arr: T[]) {
  const randomArrayIndexes: number[] = [];
  const randomArray: T[] = [];
  let counter = 0;

  while (counter < arr.length) {
    let index = getRand(arr.length);
    while (randomArrayIndexes.includes(index)) {
      // if the current randomly generated index is already in use, generate a new one
      index = getRand(arr.length);
    }
    randomArrayIndexes.push(index);
    counter++;
  }

  for (let index of randomArrayIndexes) {
    randomArray.push(arr[index]);
  }

  return randomArray;
}

const getRand = (length: number) => {
  const index = Math.floor(Math.random() * length - 1) + 1;
  return index;
};
