/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(st) {
  
const string = st.replace(/[^a-z0-9]/gi, '');

      const str=string.toLowerCase();

    let i=0;
    let j = string.length-1;
    while(i<j){
        if(str[i]!== str[j]){
            return false;
        }
        i++;
        j--;
        
    }
    return true;
}

module.exports = isPalindrome;
