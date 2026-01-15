//external .js file includes variable(s), 
// a function(s), 
// and an event listener that changed something on an HTML webpage based on some user interaction.


const zone = document.querySelector(".zone1");
const previewImage = document.getElementById("previewImage");

function showPreview() {
  previewImage.src = zone.dataset.image;

  // position preview near the red box
  const zoneRect = zone.getBoundingClientRect();
  const mapRect = zone.parentElement.getBoundingClientRect();

  previewImage.style.left = (zoneRect.left - mapRect.left + zoneRect.width + 5) + "px";
  previewImage.style.top = (zoneRect.top - mapRect.top) + "px";

  previewImage.style.display = "block";
}

function hidePreview() {
  previewImage.style.display = "none";
}

zone.addEventListener("mouseenter", showPreview);
zone.addEventListener("mouseleave", hidePreview);
