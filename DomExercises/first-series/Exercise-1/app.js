const bold = document.querySelector("b");
bold.parentElement.parentElement.parentElement.parentElement.style.backgroundColor =
  "beige";
bold.style.color = "red";
bold.parentElement.parentElement.style.cssText =
  "background-color: darkblue; color: white;";
bold.parentElement.nextElementSibling.style.color = "pink";

bold.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.lastElementChild.style.color =
  "orange";

Array.from(
  bold.parentElement.parentElement.parentElement.parentElement.firstElementChild
    .firstElementChild.lastElementChild.children
).forEach((element) => {
  element.firstElementChild.style.color = "green";
});

bold.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.style.cssText =
  "text-transform: uppercase";
