console.log("Etch A Sketch");

// Select the resize button
const resizeBtn = document.querySelector("#resizeBtn");

// Select the container div from HTML
const container = document.querySelector("#container");

// Function to create a grid using flexbox
function createGrid(size) {
  container.innerHTML = ""; // Clear existing grid

  // Calculate size of each square
  const squareSize = 960 / size; // Container is 960px

  // Create each square
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("gridBox");

    // Set width and height dynamically
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    // Add hover effect: assign a random RGB color
    div.addEventListener("mouseover", (e) => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

    container.appendChild(div);
  }
}

// Handle resize button click
resizeBtn.addEventListener("click", () => {
  let newGridSize = prompt("Enter the grid size (max 100):");
  newGridSize = Number(newGridSize);

  // Ignore invalid inputs
  if (!newGridSize || newGridSize < 1) return;

  // Limit to max 100 to prevent performance issues
  if (newGridSize > 100) newGridSize = 100;

  // Create the new grid
  createGrid(newGridSize);
});

// Initialize with 16x16 grid
createGrid(16);
