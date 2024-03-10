// hasOddNumber

function hasOddNumber(arr) {
    return arr.some(function(val) {
        return val % 2 !== 0;
    });
    return newArr;
}

//const result = hasOddNumber([1,2,2,2,2,2,4])
//console.log(result)

//const result = hasOddNumber([2,2,2,2,2,4])
//console.log(result)


// hasAZero

function hasAZero(num) {
    return num.toString().split('').some(function(val) {
        return val === '0';
    })
    return newNum;
}

//const result = hasAZero([121212])
//console.log(result)

//const result = hasAZero([33321232131012])
//console.log(result)


// hasOnlyOddNumbers

function hasOnlyOddNumbers(arr) {
    return arr.every(function(val) {
        return val % 2 !== 0;
    })
}

//const result = hasOnlyOddNumbers([3, 5, 7, 9])
//console.log(result)

//const result = hasOnlyOddNumbers([1,2,3,5,7])
//console.log(result)


// hasNoDuplicates

function hasNoDuplicates(arr) {
    return arr.every(function(val) {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
}

//const result = hasNoDuplicates([1, 2, 3, 1, 5, 5])
//console.log(result)

//const result = hasNoDuplicates([1,2,3])
//console.log(result)


// hasCertainKey

function hasCertainKey(arr, key) {
    return arr.every(function(val) {
        return key in val
    })
}

var arr = [
        {title: "Instructor", first: 'Elie', last: "Schoppik"},
        {title: "Instructor", first: 'Tim', last: "Garcia", isCatOwner: true},
        {title: "Instructor", first: 'Matt', last: "Lane"},
        {title: "Instructor", first: 'Colt', last: "Steele", isCatOwner: true}
    ]

    //const result = hasCertainKey(arr, 'first')
    //console.log(result)

    //const result = hasCertainKey(arr, 'isCatOwner')
    //console.log(result)

// hasCertainValue

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(value) {
        return key in value && value[key] === searchValue;
    });
}

var arr = [
    {title: "Instructor", first: 'Elie', last: "Schoppik"},
    {title: "Instructor", first: 'Tim', last: "Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last: "Lane"},
    {title: "Instructor", first: 'Colt', last: "Steele", isCatOwner: true}
]

//const result = hasCertainValue(arr, 'title', 'Instructor')
//console.log(result)

//const result = hasCertainValue(arr, 'first', 'Elie')
//console.log(result)

