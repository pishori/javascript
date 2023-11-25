function forecast(arr) {
  let newArr = arr.slice(2,4)

  return newArr;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));