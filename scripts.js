function showAlert() {
  const projectWrap = document.querySelectorAll(".projects-wrap>div");
  projectWrap.forEach((el) => {
    el.addEventListener("click", (event) => {
      alert("The project is currently being built.");
    });
  });
}

showAlert();