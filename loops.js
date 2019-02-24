function incrementVariable(i) {
  i = i + 1;
  return i;
}

function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    k = i
    array[i] = `"I am ${k} strange loop${k === 0 ? '' : 's'}."`;
  }
  return array;
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.");
    num = incrementVariable(num);
  } while (incrementVariable() < num)
}
