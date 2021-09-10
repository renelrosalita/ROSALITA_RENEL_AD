var num = 10;
var product;
for (var x = 1; x <= num; x++) {
    var str = '';
    for (var y = 1; y <= num; y++) {
        product = x * y;
        str = str + product + '\t';
    }
    console.log(str);
}