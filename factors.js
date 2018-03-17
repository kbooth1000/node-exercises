//  #######  FACTOR A NUMBER  ######
// Write a function factors which is given a number
// and returns an array containing all its factors.

var factors = function (num) {
    var factorsListLower = [1];
    var factorsListUpper = [num];
    var factorsList = [];
    for (i = 1; i <= num; i++) {
        if (i * 2 == num) {
            factorsListLower.push(i);
        }
        if (num % i == 0) {
            if (factorsListLower[i - 1] == factorsListUpper[i]) {
                factorsListLower[i] = i;
                console.log('That\'s it!');
                break;
            }
            factorsListLower[i] = i;
            factorsListUpper[i] = num / i;
            console.log('Factors: ' + factorsListLower[i] + ', ' + factorsListUpper[i]);
        }
        if ((factorsListLower[i - 1] == factorsListUpper[i])) {
            break;
        }

    }
    factorsListUpperR = factorsListUpper.reverse();
    factorsList = factorsListLower.concat(factorsListUpperR);
    factorsList.pop();
    factorsList.shift();
    factorsListUnique = [];
    for (j = 0; j <= factorsList.length; j++) {
        if (factorsListUnique.indexOf(factorsList[j]) == -1 && factorsList[j] != undefined) {
            console.log('## ' + factorsList[j])
            factorsListUnique.push(factorsList[j]);
        }
    }
    return factorsListUnique.join();
}

module.exports = factors;