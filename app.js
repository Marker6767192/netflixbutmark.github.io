const grid = document.getElementById("grid");

const items = [
  { name: "doors", link: "doors/" },
  { name: "boysepisoderecap", link: "boysepisoderecap/" },
  { name: "wonderlandvrhorror", link: "wonderlandvrhorror/" },
  { name: "helloneighbor", link: "helloneighbor/" },
  { name: "rageteachsmartcreate", link: "rageteachsmartcreate/" },
  { name: "donicrashsun", link: "donicrashsun/" },
  { name: "kryvssup", link: "kryvssup/" },
  { name: "bloxtalechapthree", link: "bloxtalechapthree/" },
  { name: "delivermail", link: "delivermail/" },
  { name: "thebrokenscript", link: "thebrokenscript/" }
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
