const checkbtn = document.querySelector(".btn_check");
const image = document.getElementById("file-input");

const URLL = "https://teachablemachine.withgoogle.com/models/xr97Ebrkv/"; // Replace with the URL where the model and metadata files are located
let model, labelContainer, maxPredictions;

// Load the model and metadata files
async function init() {
  const modelURL = URLL + "model.json";
  const metadataURL = URLL + "metadata.json";

  try {
    model = await tmImage.load(modelURL, metadataURL);
  } catch (e) {
    console.error("Error loading the model:", e);
    return;
  }

  maxPredictions = model.getTotalClasses();

  // labelContainer = document.getElementById("label-container");
  // if (!labelContainer) {
  //   console.error("Label container not found");
  //   return;
  // }

  // for (let i = 0; i < maxPredictions; i++) {
  //   labelContainer.appendChild(document.createElement("div"));
  // }
}

checkbtn.addEventListener("click", async () => {
  console.log("Image loaded:", image.files[0]);
  const reader = new FileReader();
  reader.readAsDataURL(image.files[0]);
  reader.onload = async () => {
    const pridictimage = document.createElement("img");
    pridictimage.src = reader.result;
    pridictimage.onload = async () => {
      await predict(pridictimage);
    };
  };
  const imgurl = reader.result;
});

var loadFile = function (e) {
  console.log(image.value);
  var imageout = document.getElementById("output");
  imageout.style.display = "flex";
  document.querySelector(".imggg").style.display = "none";
  imageout.src = URL.createObjectURL(e.target.files[0]);
};

async function predict(image) {
  if (!model) {
    console.error("Model not loaded");
    return;
  }

  const prediction = await model.predict(image);
  console.log("Prediction:", prediction);
  if (prediction[0].probability > prediction[1].probability) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
init();
