const reversePlus = (arr) => {
    for (let i = 0; i <= arr.length / 2; i++) {
        const temp = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = temp;
    }

    return arr
}

console.log(reversePlus([1, 2, 3]))