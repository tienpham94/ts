// compiling and variables
var a = "hey Im bob";
console.log(a);
var obj = {
    x: 5
};
var obj1 = {
    x: 123,
    y: "Fdasf"
};
var add = function (x, y) { return x + y; };
add(123, "obj2");
var add2 = function (nums) { return nums.a + nums.b; };
// unions
var maybeNum = 5; //number or string
maybeNum = "a string";
var dogCat = {
    bark: "gogo",
    purr: "pur"
};
if (typeof dogCat === "string") {
    console.log("you are string");
}
// casting
add(dogCat, dogCat); // Cast to some other type that makes sense
// any
var doesAnything = function (x) {
    // When hard to get the type right
    console.log(x);
};
doesAnything(function () { return 5; });
