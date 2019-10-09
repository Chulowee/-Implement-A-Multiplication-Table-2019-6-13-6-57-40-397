const functionList = require('../MultiplicationTable');

it ('should Start Num is smaller than End Num', () => {
    const startNum = 2;
    const endNum = 4;

    const result = functionList.isStartNumSmallerThanEndNum(startNum,endNum);
    expect(result).toBe(true);
});

it ('should output be invalid when Start Num is greater than End Num', () => {
    const startNum = 4;
    const endNum = 2;

    const result = functionList.isStartNumSmallerThanEndNum(startNum,endNum);
    expect(result).toBe(null);
});

it ('should Start Num and End Num in range', () => {
    const startNum = 2;
    const endNum = 4;

    const result = functionList.areStartNumAndEndNumInRange(startNum,endNum);
    expect(result).toBe(true);
});

it ('should output be invalid Num and End Num in out of range', () => {
    const startNum = -2;
    const endNum = 4;

    const result = functionList.areStartNumAndEndNumInRange(startNum,endNum);
    expect(result).toBe("Inputs are invalid! Out of range!");
});

it ('should compute numbers and give list of products', () => {
    const startNum = 2;
    const endNum = 4;

    const result = functionList.computeNumbers(startNum,endNum);
    expect(result).toStrictEqual(["2*2=4", "2*3=6", "3*3=9", "2*4=8", "3*4=12", "4*4=16"]);
});

it ('should generate string representaion', () => {
    const startNum = 2;
    const endNum = 4;

    const result = functionList.generateStringRepresentation(startNum,endNum);
    const expectedResult = 
        "2*2=4\n" +
        "2*3=6 3*3=9\n"+
        "2*4=8 3*4=12 4*4=16";
    expect(result).toBe(expectedResult);
});