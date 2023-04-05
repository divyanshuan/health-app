const checkbtn = document.querySelector(".btn_check");

checkbtn.addEventListener("click", () => {
  console.log("hii ");
});
var loadFile = function (e) {
  var image = document.getElementById("output");
  image.style.display = "flex";
  document.querySelector(".imggg").style.display = "none";
  image.src = URL.createObjectURL(e.target.files[0]);
};
