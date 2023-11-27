function sliceArray(anim, beginSlice, endSlice) {
 let newArray = [];
 newArray = anim.slice(beginSlice, endSlice);
 return newArray;
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);