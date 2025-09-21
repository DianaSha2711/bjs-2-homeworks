function getArrayParams(...arr) {
  if (!arr.length){
    return 0;
  }
  let min = Infinity, max = -Infinity;
  let summ = 0;
  for (const it of arr ){
    min = Math.min(min, it);
    max = Math.max(max,it);
    summ += it;
  }
  const avg = summ/arr.length;
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let summ = 0;
  for (const it of arr ){
    summ += it;
  }
  return summ;
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length){
    return null;
  }
  let min = Infinity, max = -Infinity;
  for (const it of arr ){
    min = Math.min(min, it);
    max = Math.max(max,it);
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
 if (!arr.length){
    return null;
  }
  let summEvenElement = 0;
  let summOddElement = 0;

  for(let i = 0; i < arr.length; i++){
    if(i%2){
      summOddElement += arr[i];
    } else {
      summEvenElement += arr[i]; 
    }
  }
  return summEvenElement - summOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length){
    return null;
  }
  let summ = 0;
  for (const it of arr ){
    summ += it;
  }
  return summ/arr.length;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(const arr of arrOfArr){
    const result = func(...arr);
    if (result !== null){
       maxWorkerResult = Math.max(maxWorkerResult, result);
    }
  }
}
