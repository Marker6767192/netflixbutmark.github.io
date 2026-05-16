const grid = document.getElementById("grid");

const items = [
  { name: "doors", link: "doors/" },
  { name: "boysepisoderecap", link: "boysepisoderecap/" },
  { name: "wonderlandvrhorror", link: "wonderlandvrhorror/" },
  { name: "helloneighbor", link: "helloneighbor/" },
  { name: "helloneighbor", link: "helloneighbor/" }
];

items.forEach(item => {
  const div = document.createElement("div");
  div.className = "item";
  div.innerText = item.name;

  div.onclick = () => {
    window.location.href = item.link;
  };

  grid.appendChild(div);
});
