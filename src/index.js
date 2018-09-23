module.exports = function solveEquation(equation) {
    var Array = equation.split(' ');
    var VariableA = Array[0];
    var VariableB = null;
    var VariableC = null;
    var Discriminant = null;
    var FirstAnswer = null;
    var SecondAnswer = null;
    var Answear = null;
    VariableB = parseInt(Array[3] + Array[4]);
    VariableC = parseInt(Array[7] + Array[8]);

    Discriminant = (Math.pow(VariableB, 2) - (4 * VariableA * VariableC));

    FirstAnswer = Math.round(((-1 * VariableB) + Math.sqrt(Discriminant)) / (2 * VariableA));
    SecondAnswer = Math.round(((-1 * VariableB) - Math.sqrt(Discriminant)) / (2 * VariableA));

    Answear = [FirstAnswer, SecondAnswer];

    Answear.sort((VariableA, VariableB) => VariableA - VariableB);

    return Answear;

}

