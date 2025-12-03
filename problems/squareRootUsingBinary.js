function square(input) {
    let start = 0
    let end = input
    let ans;

    while (start <= end) {
        const mid = Math.floor( start + ( (end - start)/2));

        if (mid*mid === input) {
            return mid;
        }
        else if (mid*mid < input) {
            ans = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return ans;
}

const result  = square(256)
console.log(result);
