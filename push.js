

const numbers = [1, 2, 3]

function pushPlus(arr, ...rest) {
    // By for
    // for (let i = 0; i < rest.length; i++) {
    //    arr[arr.length] = rest[i]
    // }

    // By for of
    for (const el of rest) {
        arr[arr.length] = el
    }

    return arr.length
}


console.log(pushPlus(numbers, 7, 8))
console.log(numbers)
