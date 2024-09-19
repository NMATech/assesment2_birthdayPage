const handleButton = () => {
  alert("Happy Birthday!");
};

const btn = document.getElementById("btn_surprise");

btn.addEventListener("click", () => {
  handleButton();
});
