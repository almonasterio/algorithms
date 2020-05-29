function capitalizeFirst(arr) {
    let newArr = [];
    const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
    newArr.push(capitalize(arr[0]))
    if (arr.length > 1) return newArr.concat(capitalizeFirst(arr.slice(1)));

    return newArr
}

function capitalizeFirst2(array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
}

function nestedEvenSum(e) {
    let sum = 0;
    if (typeof e === "object") {
        for (const property in e) {
            sum += nestedEvenSum(e[property])
        }
    } else if (typeof e === "number" && e % 2 == 0) sum += e;
    return sum;
}

function nestedEvenSum2(obj, sum = 0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
}

function capitalizeWords(arr) {
    const capitalizeStr = (str) => str.toUpperCase();
    let newArr = [];
    let strCaps = capitalizeStr(arr[0]);
    if (arr.length > 1) newArr = [strCaps].concat(capitalizeWords(arr.slice(1)))
    else newArr.push(strCaps);

    return newArr

}

function capitalizeWords2(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length - 1)[0].toUpperCase());
    return res;

}

function stringifyNumbers(e) {
    if (typeof e === "object") {
        for (let key in e) {
            e[key] = (typeof e[key] === "number") ? e[key].toString() : e[key];
            stringifyNumbers(e[key]);
        }
    }
    return e
}

function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

function collectStrings(e) {
    let array = [];
    for (let key in e) {
        if (typeof e[key] === 'object') {
            return array.concat(collectStrings(e[key]))
        } else if (typeof e[key] === 'string') {
            array.push(e[key]);
        }
    }
    return array;
}

function collectStrings2(obj) {
    var stringsArr = [];

    function gatherStrings(o) {
        for (var key in o) {
            if (typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            } else if (typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }

    gatherStrings(obj);

    return stringsArr;
}

