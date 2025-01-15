const trail = [];
const brightColor = "rgb(255, 0, 0)"; // Single bright color

document.addEventListener("mousemove", function (e) {
  // Create a new trail dot at the mouse position
  const dot = document.createElement("div");
  dot.style.position = "absolute";
  dot.style.borderRadius = "50%";
  dot.style.width = "10px"; // Smaller size for the dot
  dot.style.height = "10px"; // Smaller size for the dot
  dot.style.pointerEvents = "none"; // Prevents interference with other elements

  // Set the fixed bright color
  dot.style.backgroundColor = brightColor;

  // Apply a box-shadow to create the smoke effect
  dot.style.boxShadow = `0 0 5px 5px ${brightColor}, 0 0 10px 10px ${brightColor}`;

  // Initial position at the mouse cursor
  dot.style.left = `${e.pageX - 5}px`; // Offset to center the dot at the mouse position
  dot.style.top = `${e.pageY - 5}px`;

  // Append the dot to the body
  document.body.appendChild(dot);

  // Push the dot to the trail array
  trail.push(dot);

  // Fade and move the dots
  setTimeout(() => {
    dot.style.transition = "all 0.7s ease-out"; // Adjust the time to make it stay longer
    dot.style.transform = "scale(0)"; // Makes the dot shrink to 0
    dot.style.opacity = "0"; // Fades it out
  }, 50);

  // Remove the dot after it fades out
  setTimeout(() => {
    document.body.removeChild(dot);
  }, 700); // Match the time with the transition duration
});
