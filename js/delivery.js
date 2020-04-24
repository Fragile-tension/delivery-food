const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const cancel = document.querySelector(".cancel");

//по клику на Корзину модальному окну присваивается класс "is-open"

cartButton.addEventListener("click", function (event) {
	modal.classList.add("is-open");
});

//по клику на крестик класс "is-open" убирается
close.addEventListener("click", function (event) {
	modal.classList.remove("is-open"); 
});

//по клику на кнопку Отмена класс "is-open" убирается
cancel.addEventListener("click", function (event) {
	modal.classList.remove("is-open"); 
});

