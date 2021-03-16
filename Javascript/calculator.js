let input_ref = document.getElementById("input_ref");
console.log("input:", input_ref);

let btn_ref = document.getElementsByClassName("key"); //array
let equal_ref = document.getElementById("equal");
let result = "";
// btn_ref.forEach(function (element) {
//   console.log(element);
// });
for (let i = 0; i < btn_ref.length; i++) {
  btn_ref[i].addEventListener("click", function (event) {
    console.log("event:", event.target.name);
    result = result + event.target.name;
    console.log("result:", result);
    input_ref.value = result;
  });
}

equal_ref.addEventListener("click", function (ev) {
  console.log("result:", result);
  result = eval(result);
  input_ref.value = result;
});

// btn_ref.addEventListener("click", function (event) {
//   console.log("event:", event);
// });
