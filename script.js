const preview = document.getElementById("preview");
const colorInputsContainer = document.getElementById("color-inputs");
const addColorBtn = document.getElementById("add-color");
const removeColorBtn = document.getElementById("remove-color");
const generateBtn = document.getElementById("generate-gradient");
const gradientCode = document.getElementById("gradient-code");

var hexColor = "#ffffff";

addColorBtn.addEventListener("click", addColorInput);
removeColorBtn.addEventListener("click", removeColorInput);
generateBtn.addEventListener("click", randomGradient);



function addColorInput() {
  const colorInputContainer = document.createElement("div");
  colorInputContainer.className = "color-input";

  const colorPreview = document.createElement("div");
  colorPreview.className = "color-preview";

  const colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.className = "color";
  colorInput.oninput = generateGradient;

  colorInputContainer.appendChild(colorPreview);
  colorInputContainer.appendChild(colorInput);
  colorInputsContainer.appendChild(colorInputContainer);
  removeColorBtn.style.display = "block";

  updateColorPreviews();
  generateGradient();
}

function removeColorInput() {
  const colorInputContainers =
    document.getElementsByClassName("color-input");
  if (colorInputContainers.length > 2) {
    colorInputsContainer.removeChild(
      colorInputContainers[colorInputContainers.length - 1]
    );
    updateColorPreviews();
    removeColorBtn.style.display = "block";
  } else if (colorInputContainers.length <= 2) {
    removeColorBtn.style.display = "none";
  }
  generateGradient();
}

function updateColorPreviews() {
  const colorInputs = document.getElementsByClassName("color");

  Array.from(colorInputs).forEach((input, index) => {
    const colorPreview = input.parentNode.querySelector(".color-preview");
    colorPreview.style.backgroundColor = input.value;
  });
}

function generateGradient() {
  const colorInputs = document.getElementsByClassName("color");
  const colors = Array.from(colorInputs).map((input) => input.value);

  const gradient = `linear-gradient(to right, ${colors.join(", ")})`;
  preview.style.background = gradient;
  gradientCode.textContent = gradient;
  updateColorPreviews();
}

function randomGradient() {
  const colorInputs = document.getElementsByClassName("color");
  const colorInputContainers =
    document.getElementsByClassName("color-input");

  const colors = Array.from(colorInputs).map((input) => randomColor());
  for (let i = 0; i < colorInputs.length; i++) {
    colorInputs[i].value = colors[i];
  }

  const gradient = `linear-gradient(to right, ${colors.join(", ")})`;
  preview.style.background = gradient;
  gradientCode.textContent = gradient;
  updateColorPreviews();
}

function randomColor() {
  var randomNumber = Math.floor(Math.random() * 16777215);
  var hexColor = "#" + randomNumber.toString(16).padStart(6, "0");
  return hexColor;
}
generateGradient();
updateColorPreviews();























































