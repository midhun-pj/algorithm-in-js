/**
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the char
 * in the second string,
 */

// 'hello' and 'hello workd' true
// abc acb  false

function isSubsequence(str1, str2) {
    let i= 0;
    let j= 0;
    if (!str1) return true

    while(j < str2.length) {
        if (str2[j] === str1[i]) i++
        if (i === str1.length) return true
        j++
        
    }

    return false
}

console.log(isSubsequence('hello', 'hello sadsd'));
