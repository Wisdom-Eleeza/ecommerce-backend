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
}