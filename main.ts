// compiling and variables
const a: string = "hey Im bob";
console.log(a);
const obj = {
  x: 5
};

interface MyObj {
  x: number;
  y: number;
  z?: number; // - ? optional
}

const obj1: MyObj = {
  x: 123,
  y: "Fdasf"
};

// functions

type AddFunc = (x: number, y: number) => number;

const add: AddFunc = (x: number, y: number) => x + y;

add(123, "obj2");

const add2 = (nums: { a: number; b: number }) => nums.a + nums.b;

// unions

let maybeNum: number | string = 5; //number or string
maybeNum = "a string";

interface Dog {
  bark: string;
}

interface Cat {
  purr: string;
}

type DogCat = Dog & Cat;

const dogCat: DogCat = {
  bark: "gogo",
  purr: "pur"
};

if (typeof dogCat === "string") {
  console.log("you are string");
}

// casting

add(dogCat as any, dogCat as any); // Cast to some other type that makes sense

// any

const doesAnything = (x: any) => {
  // When hard to get the type right
  console.log(x);
};

doesAnything(() => 5);
