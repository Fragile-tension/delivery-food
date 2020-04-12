const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

//по клику на Корзину модальному окну присваивается класс "is-open"

cartButton.addEventListener("click", function (event) {
	modal.classList.add("is-open");
});

//по клику на крестик класс "is-open" убирается
close.addEventListener("click", function (event) {
	modal.classList.remove("is-open"); 
});
