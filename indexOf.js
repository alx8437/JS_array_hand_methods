const arr = [1, 2, 3, 4, 5]

const indexOfPlus = (arr, el, fromIndex = 0) => {
    if (fromIndex < arr.length) {
        fromIndex < 0 && (fromIndex = arr.length - Math.abs(fromIndex))
        for (let i = fromIndex; i < arr.length; i++) {
            if (arr[i] === el) {
                return i
            }
        }
    }
    return -1
}


console.log(indexOfPlus(arr, 4))
