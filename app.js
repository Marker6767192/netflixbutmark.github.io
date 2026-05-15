const grid = document.getElementById("grid");

const items = [
  { name: "tung god", link: "tung_god/" },
  { name: "pope", link: "pope/" },
  { name: "neighbor", link: "neighbor/" }
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
