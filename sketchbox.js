console.log("Etch A Sketch");

//Select the container div from the HTML
const container = document.querySelector("#container");

//Set the initial grid size at 16*16
let startGrid = 16;

//Loop to create all grid squares
for (let i=0; i< startGrid * startGrid; i++) {
  const div = document.createElement("div");
  div.classList.add("gridBox");
  container.appendChild(div);

  //Add hover effect to change color on mouseover
  div.addEventListener("mouseover", (e) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    //Apply random color to the hovered div
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b} )`;
})
}



