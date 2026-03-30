const numbers = [1, 2, 3, 4]

const popPlus = (arr) => {
    const lastElement = arr[arr.length - 1];
    arr.length = arr.length - 1
    return lastElement
}

console.log(popPlus(numbers))
console.log(numbers)