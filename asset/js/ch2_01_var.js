var i=5;
j=6;
function aa(){
    var i=10;
    j=60;
    return i+j;
}
console.log(aa()); //70
console.log(i); //5
console.log(j); //60

//j在直接命名後直接賦予新值
//i因重新宣告，所以在該Function裡面有作用 未有繼承關係