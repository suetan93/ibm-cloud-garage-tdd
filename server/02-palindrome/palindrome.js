const palindrome = (str) => {
    let start = 0;
    let end = str.length -1;

    while(start < end) {
        if(str[start].toLowerCase() !== str[end].toLowerCase()) return false;
        start++;
        end--;
    }
    return true;
}

module.exports = { palindrome }