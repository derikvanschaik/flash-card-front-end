// In javascript, taking a negative module modulo over a value results in a negative number
// this will override that and always give a positive number... 
// For more info see: 
// https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
function mod(n, m) {
    return ((n % m) + m) % m;
}

module.exports = {mod}