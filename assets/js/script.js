// Get references to the icon and the popup container
const openPopupIcon = document.querySelector(".openPopupIcon");
const popupContainer = document.querySelector(".popup-container");

// Add a click event listener to the icon
openPopupIcon.addEventListener("click", function () {
  // Toggle the visibility of the popup container
  if (popupContainer.style.display === "block") {
    popupContainer.style.display = "none";
  } else {
    popupContainer.style.display = "block";
  }
});

// Get references to all the icons and popup containers
const openPopupIcons = document.querySelectorAll(".open-popup-icon");
const popupContainers = document.querySelectorAll(".open-menu");

// Add a click event listener to each icon
openPopupIcons.forEach((icon, index) => {
  icon.addEventListener("click", function () {
    // Toggle the visibility of the corresponding popup container
    if (popupContainers[index].style.display === "block") {
      popupContainers[index].style.display = "none";
    } else {
      popupContainers[index].style.display = "block";
    }
  });
});


const popup = document.getElementById("right-q-popup");
const showPopup = document.getElementById("open-menu")
popup.addEventListener('click', function () {
 
  if (showPopup.style.display === "block") {
      showPopup.style.display = "none";
  } else {
    showPopup.style.display = "block"
  }
})


function openDetail(){
  var homePage = document.querySelector(".music-container");
  var singlePage = document.querySelector(".single-container")
 
  if(homePage){
    homePage.style.display = "none";
    singlePage.classList.add("show")
  }
}


