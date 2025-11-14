let text = document.querySelector(".section__container__text");
let moreButton = document.querySelector(".section__container__button");
let moreButtonText = moreButton.querySelector("span");
let moreButtonArrows = moreButton.querySelector(".button-arrows");
let degs = 0;
moreButton.addEventListener("click", () => {
  moreButtonArrows.style.transform = `rotate(${(degs += 180)}deg)`;

  if (text.style.maxHeight == "550px") {
    text.style.maxHeight = "";
    moreButtonText.textContent = "Читать далее";
  } else {
    text.style.maxHeight = "550px";
    moreButtonText.textContent = "Скрыть";
  }
});


let swiper;
const swiperContainer = document.querySelector('.swiper');

function initSwiper() {
  if (window.innerWidth < 768 && (!swiper || swiper.destroyed)) {
    swiper = new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
      },
      slidesPerView: 'auto',
      spaceBetween: 16,
      watchOverflow: true,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
    });
    swiperContainer.style.display = 'block';
  } else if (window.innerWidth >= 768 && swiper && !swiper.destroyed) {

    swiperContainer.style.display = 'none';
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);


let brands_container = document.querySelector(".brands");
let brands_button = document.querySelector("#brands_button");
let brands_arrow = brands_button.querySelector(".button-arrows");
let brands_text = brands_button.querySelector("span");
let brands_degs = 0;
brands_button.addEventListener("click", () => {
  brands_container.classList.toggle("opened");
  let text = brands_container.classList.contains("opened") ? "Скрыть" : "Показать все";
  brands_text.textContent = text;
  brands_arrow.style.transform = `rotate(${(brands_degs += 180)}deg)`;
});


let equipment_container = document.querySelector(".equipment");
let equipment_button = document.querySelector("#equipment_button");
let equipment_arrow = equipment_button.querySelector(".button-arrows");
let equipment_text = equipment_button.querySelector("span");
let equipment_degs = 0;
equipment_button.addEventListener("click", () => {
  equipment_container.classList.toggle("opened");
  let text = equipment_container.classList.contains("opened") ? "Скрыть" : "Показать все";
  equipment_text.textContent = text;
  equipment_arrow.style.transform = `rotate(${(equipment_degs += 180)}deg)`;
});


const blur = document.querySelector(".blur");
let burger_button = document.querySelector(".button.button-burger");
let chat_buttons = document.querySelectorAll(".button.button-chat");
let phone_buttons = document.querySelectorAll(".button.button-call");
let close_menu_button = document.querySelector("#menu-close");
let close_feedback_button = document.querySelector("#feedback-close");
let close_phone_button = document.querySelector("#call-close");
let menu = document.querySelector(".burger-menu");
let feedback = document.querySelector("#feedback1");
let phone = document.querySelector("#call");

burger_button.addEventListener("click", () => {
  openMenu();
});

for (let chat of chat_buttons) {
  chat.addEventListener("click", () => {
    openFeedback();
    closeMenu();
  });
}
for (let phone_button of phone_buttons) {
  phone_button.addEventListener("click", () => {
    openPhone();
    closeMenu();
  });
}

close_menu_button.addEventListener("click", () => {
  closeMenu(true);
});

close_feedback_button.addEventListener("click", () => {
  closeFeedback(true);
});

close_phone_button.addEventListener("click", () => {
  closePhone(true);
});

blur.addEventListener("click", () => {
  if (menu.style.left == "0px") {
    closeMenu(true);
  } else if (feedback.style.right == "0px") {
    closeFeedback(true);
  }else if (phone.style.right == "0px") {
    closePhone(true);
  }
});

function closeMenu(_blur = false) {
  menu.style.left = "";
  menu.style.top = "";
  if (_blur) blur.style.display = "none";
}

function closeFeedback(_blur = false) {
  feedback.style.right = "";
  feedback.style.top = "";
  if (_blur) blur.style.display = "none";
  blur.style.zIndex = "";
}

function openMenu() {
  if (window.innerWidth >= 768) {
    menu.style.left = "0";
    blur.style.display = "block";
  } else {
    menu.style.top = "0";
  }
}

function openFeedback() {
  feedback.children[1].children[0].focus()
  if (window.innerWidth >= 768) {
    feedback.style.right = "0px";
    blur.style.display = "block";
    blur.style.zIndex = "14";
  } else {
    feedback.style.top = "0";
  }
}

function openPhone() {
  phone.children[1].children[0].focus()
  if (window.innerWidth >= 768) {
    phone.style.right = "0px";
    blur.style.display = "block";
    blur.style.zIndex = "14";
  } else {
    phone.style.top = "0";
  }
}

function closePhone(_blur = false) {
  phone.style.right = "";
  phone.style.top = "";
  if (_blur) blur.style.display = "none";
  blur.style.zIndex = "";
}
