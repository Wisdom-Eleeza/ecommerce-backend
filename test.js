function cal (a, b){
    const dummy = []
    let start = 0
    let end = 0

    while(start < a.length && end < b.length){
        if(a[start] < b[end]){
            dummy.push(start[a])
            start++
        } else {
            dummy.push(end[b])
            end++
        }
    }
    while(start < a.length) {
        dummy.push(a[start])
        a++
    }
    while(end < b.length) {
        dummy.push(b[start])
        b++
    }

    return dummy
}

// example
const sortedArrayA = [1, 3, 5, 7]
const sortedArrayB = [2, 4, 6, 8]

const mergedSortedArray = mergedSortedArray(sortedArrayA, sortedArrayA)
console.log(mergedSortedArray)