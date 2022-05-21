const openNavMenu = document.querySelector("header #open");
const navigationMenu = document.querySelector("header #header-left");
const menuOverlay = document.querySelector("header #menu-overlay");
const closeNavMenu = document.querySelector("header #close");
const WINDOW_SIZE = 1000;

openNavMenu.addEventListener("click", toggleNavigation);
closeNavMenu.addEventListener("click", toggleNavigation);
navigationMenu.addEventListener("click", navigateOnMenu);
menuOverlay.addEventListener("click", toggleNavigation);

/* ---we need to close our navigation bar and remove le black overlay when we expand--- */
window.addEventListener("resize", () => {
  if (window.innerWidth > WINDOW_SIZE) {
    resizeFix();
  }
});

function toggleNavigation() {
  navigationMenu.classList.toggle("open");
  menuOverlay.classList.toggle("active");
}

function navigateOnMenu(event) {
  if (event.target.hasAttribute("data-toggle")) {
    event.preventDefault();
  }

  const listMenuHasChildren = event.target.parentElement;
  const subMenu = listMenuHasChildren.querySelector(".sub-menu ul");

  if (
    event.target.hasAttribute("data-toggle") &&
    window.innerWidth <= WINDOW_SIZE
  ) {
    if (listMenuHasChildren.classList.contains("list-nav-has-children")) {
      if (subMenu.style.maxHeight) {
        subMenu.style.maxHeight = null;
      } else {
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  }
}

function resizeFix() {
  /* closing the navigation menu and removing the overlay  */
  if (navigationMenu.classList.contains("open")) {
    toggleNavigation();
  }

  /* closing the sub-menu inside of the navigation */
  const listMenuHasChildrens = document.querySelectorAll(
    "header #header-left .list-nav-has-children .sub-menu ul"
  );
  listMenuHasChildrens.forEach((child) => {
    if ((child.style.maxHeight = child.scrollHeight + "px")) {
      child.style.maxHeight = null;
    }
  });
}
