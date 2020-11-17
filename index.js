function findMinAndRemoveSorted(array){
    return parseInt(array.splice(0, 1))
}

function merge(firstHalf, secondHalf){
    let sortedArray = []
    let minimum;
    while(firstHalf.length > 0 && secondHalf.length > 0){
        if(firstHalf[0] < secondHalf[0]){
            minimum = findMinAndRemoveSorted(firstHalf)
            sortedArray.push(minimum)
        } else if
        (secondHalf[0] < firstHalf[0]){
            minimum = findMinAndRemoveSorted(secondHalf)
            sortedArray.push(minimum)
        }
    }
  return sortedArray.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array){
   let median = Math.floor((array.length)/ 2)
   let firstHalf = array.slice(0, median).sort((a,b) => a < b ? - 1 : 1)
   let secondHalf = array.slice(median).sort((a,b) => a < b ? - 1 : 1)
   return merge(firstHalf, secondHalf)
}