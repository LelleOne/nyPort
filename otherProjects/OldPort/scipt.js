
const handleOnMouseMove = e => {
    const { curentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    target.style.SetProperty("--mouse-x", `${x}px`);
}

for(const card of document.querySelectorAll(".card") && screen.width < 1180) {
  card.onmousemove = e => handleOnMouseMove(e);
}