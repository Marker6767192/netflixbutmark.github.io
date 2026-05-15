const grid = document.getElementById("grid");

const items = [
  { name: "cinema", link: "cinema/" },
  { name: "get out hello neighbor", link: "get-out-hello-neighbor/" }
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
