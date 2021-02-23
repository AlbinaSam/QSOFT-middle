const body = document.querySelector(`body`);
const navButton = document.querySelector(`.page-header__nav-button`);
const siteNav = document.querySelector(`.page-header__site-nav`);

if (navButton) {
  navButton.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    body.classList.toggle(`body-locked`);
    siteNav.classList.toggle(`page-header__site-nav--opened`);
  })
}
