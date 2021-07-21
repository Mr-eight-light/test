let result = [];
var arr = [2, [1,2,3,[4]],9,[5,[8],6],7];
function flatArray(arr) {
    for(let i = 0; i < arr.length; i++){
        let item = arr[i];
        if (Array.isArray(arr[i])){
            flatArray(item);
        } else {
            result.push(item);
        }
    }
}
flatArray(arr);
console.log(result);