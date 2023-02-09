function fizzbuzz(num) {
    if (typeof num != 'number'){
        return ("Error, the argument must be a number");
    }
    if (num == 0) {
        return (0);
    }

    if ((num % 3 == 0) && (num % 5 == 0)) {
        return ('fizzbuzz');
    }
    if (num % 3 == 0) {
        return ('fizz');
    }
    if (num % 5 == 0) {
        return ('buzz');
    }

    return (num);
}

function print(num){
    for(let i=0; i<= num; i++){
        console.log(`${i} : ${fizzbuzz(i)}`);
    }
}

print(100);

module.exports = fizzbuzz;