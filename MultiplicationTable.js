function isStartNumSmallerThanEndNum (startNum, endNum) {
    if (startNum<endNum) {
        return true;
    } else {
        return null;
    }
}

function areStartNumAndEndNumInRange(startNum, endNum) {
    if (startNum>1 && endNum<1000) {
        return true;
    }else{
        return "Inputs are invalid! Out of range!"
    }
}

function generateStringRepresentation(startNum, endNum){
    const productList = computeNumbers(startNum,endNum);
    let stringRepresentation="";

    let rowsOfItem = 1;
    let limiter = 1;
    productList.forEach(product=>{
        if (rowsOfItem<limiter) {
            stringRepresentation += String(product);
            stringRepresentation+=" ";

            rowsOfItem++;
        } else{
            stringRepresentation += String(product);
            stringRepresentation+="\n";

            limiter++;
            rowsOfItem=1;
        }
    });
    return stringRepresentation.trim();
}

function computeNumbers(startNum, endNum){
    let productList = [];
    for(row = startNum; row <= endNum; row++ ){
        for(column = startNum; column<=row; column++){
            let toPush = String(column)+"*"+String(row)+"="+String(row*column);
            productList.push(toPush);
        }
    }
    return productList;
}

module.exports = {
    isStartNumSmallerThanEndNum : isStartNumSmallerThanEndNum,
    areStartNumAndEndNumInRange : areStartNumAndEndNumInRange,
    computeNumbers : computeNumbers,
    generateStringRepresentation :generateStringRepresentation
};