const numbers = [1, 2, 3, 4, 5]

const includesPlus = (arr, el) => {
    // By for
    // let result = false
    // By for
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === el) {
    //         result = true
    //         break
    //     }
    // }
    // return result

    //By for of
    for (const item of arr) {
        if (item === el) {
            return  true
        }
    }
    return false
}

console.log(includesPlus(numbers, 9))

