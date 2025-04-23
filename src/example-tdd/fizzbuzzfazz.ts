export const fizzBuzzFazz = (num: number) => {
    let result = '';
    let resultNumber = num;
    if (num % 3 === 0) {
        result += 'Fizz'
        resultNumber = 0;
    };
    if (num % 5 === 0) {
        result += 'Buzz'
        resultNumber = 0;
    };
    if (num % 7 === 0) {
        result += 'Fazz'
        resultNumber = 0;
    }
    return resultNumber === 0 ? result : resultNumber.toString();
}