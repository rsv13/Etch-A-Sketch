console.log("Etch A Sketch");

const resizeBtn = document.querySelector("#resizeBtn");
const modeSelect = document.querySelector("#modeSelect");
const container = document.querySelector("#container");

// Function to create a grid using flexbox
function createGrid(size) {
  container.innerHTML = "";
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("gridBox");

    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    // Track hover count (0-10)
    div.dataset.hoverCount = 0;

    // Store base color for both modes
    div.dataset.baseColor = "";

    div.addEventListener("mouseover", () => {
      const mode = modeSelect.value;
      let hoverCount = Number(div.dataset.hoverCount);

      // Assign a random light color if not set
      if (!div.dataset.baseColor) {
        const r = 155 + Math.floor(Math.random() * 101);
        const g = 155 + Math.floor(Math.random() * 101);
        const b = 155 + Math.floor(Math.random() * 101);
        div.dataset.baseColor = `${r},${g},${b}`;
      }

      let [r, g, b] = div.dataset.baseColor.split(",").map(Number);

      if (hoverCount < 10) hoverCount++;
      div.dataset.hoverCount = hoverCount;

      if (mode === "random") {
        // Gradually brighten to full color
        const factor = hoverCount / 10;
        const newR = Math.round(r + (255 - r) * factor);
        const newG = Math.round(g + (255 - g) * factor);
        const newB = Math.round(b + (255 - b) * factor);
        div.style.backgroundColor = `rgb(${newR},${newG},${newB})`;

        // Reset to new light color after max brightness
        if (hoverCount === 10) {
          div.dataset.hoverCount = 0;
          div.dataset.baseColor = "";
        }
      } else if (mode === "darken") {
        // Gradually darken toward black
        const factor = (10 - hoverCount) / 10;
        const newR = Math.round(r * factor);
        const newG = Math.round(g * factor);
        const newB = Math.round(b * factor);
        div.style.backgroundColor = `rgb(${newR},${newG},${newB})`;
      }
    });

    container.appendChild(div);
  }
}

// Resize grid
resizeBtn.addEventListener("click", () => {
  let newGridSize = Number(prompt("Enter the grid size (max 100):"));
  if (!newGridSize || newGridSize < 1) return;
  if (newGridSize > 100) newGridSize = 100;
  createGrid(newGridSize);
});

// Reset grid on mode change
modeSelect.addEventListener("change", () => {
  const currentSize = Math.sqrt(container.children.length) || 16;
  createGrid(currentSize);
});

// Initialize 16x16 grid
createGrid(16);
