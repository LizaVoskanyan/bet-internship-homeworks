function findingName(str) {
    if (str.includes('[object ')) {
        return str.substring(8, str.length - 1);
    } else {
        return "somthing goes wrong";
    }
}
console.log(findingName('[someobject anun]'));
console.log(findingName('[object anun]'));
