var contactsLink = document.querySelector(".contacts-btn");
var smallMapLink = document.querySelector(".map-small");
var overlay = document.querySelector(".modal-overlay");
var popup = document.querySelectorAll(".modal");
var popupWriteUs = document.querySelector(".modal-write-us");
var popupMap = document.querySelector(".modal-map");
var closeWriteUs = popupWriteUs.querySelector(".modal-close");
var closeMap = popupMap.querySelector(".modal-close");
var formWriteUs = popupWriteUs.querySelector(".write-us-form");
var formWriteUsName = popupWriteUs.querySelector("#write-us-name");
var formWriteUsMail = popupWriteUs.querySelector("#write-us-email");
var formWriteUsText = popupWriteUs.querySelector("#write-us-text");

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

smallMapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

closeWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal-show");
  popupWriteUs.classList.remove("modal-error");
  overlay.classList.remove("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

formWriteUs.addEventListener("submit", function (evt) {
  if (!formWriteUsName.value || !formWriteUsMail.value || !formWriteUsText.value) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal-error");
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupWriteUs.classList.contains("modal-show") || popupMap.classList.contains("modal-show") || overlay.classList.contains("modal-show")) {
      popupWriteUs.classList.remove("modal-show");
      popupWriteUs.classList.remove("modal-error");
      popupMap.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    }
  }
});

overlay.addEventListener("click", function () {
  popupWriteUs.classList.remove("modal-show");
  popupMap.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});
