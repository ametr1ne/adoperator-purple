burgerHandler();

function burgerHandler() {
  if (document.body.clientWidth <= 1250) {
    document.querySelector(".header-burger").addEventListener("click", function () {
      document.body.classList.toggle("opened");
    });
  }
}

const nav_links = document.querySelectorAll(".header-menu__item");

nav_links.forEach(function (item, index) {
  item.addEventListener("click", function () {
    document.body.classList.remove("opened");
  });
});

window.addEventListener("resize", function () {
  burgerHandler();
});
