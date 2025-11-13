const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination', clickable: true, bulletClass: 'swiper-pagination-bullet',
  }, slidesPerView: 'auto', spaceBetween: 16, watchOverflow: true, slidesOffsetBefore: 16, slidesOffsetAfter: 16,


});

window.addEventListener("resize", event => {
  if (window.innerWidth >= 768) swiper.destroy(true, true)
})

window.addEventListener("load", event => {
  if (window.innerWidth >= 768) swiper.destroy(true, true)
})

let brands_container = document.querySelector(".brands");
let brands_button = document.querySelector("#brands_button");
let brands_arrow = brands_button.querySelector(".arrows");
let brands_text = brands_button.querySelector("span");
let brands_degs = 0;
brands_button.addEventListener("click", () => {
  brands_container.classList.toggle("opened");
  brands_text.textContent = brands_container.classList.contains("opened") ? "Скрыть" : "Показать все";
  brands_arrow.style.transform = `rotate(${(brands_degs += 180)}deg)`;
});
