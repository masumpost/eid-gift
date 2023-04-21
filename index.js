const hoverArea = document.getElementById("hover-area");
const emoji = document.createElement("span");
emoji.innerText = " 😊";
emoji.style.display = "none";

hoverArea.addEventListener("mouseover", () => {
  emoji.style.display = "inline";
});

hoverArea.addEventListener("mouseout", () => {
  emoji.style.display = "none";
});

hoverArea.appendChild(emoji);
