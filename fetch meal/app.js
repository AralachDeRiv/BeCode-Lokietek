const formIngredient = document.getElementById("form-ingredient");
const ingredientInput = document.getElementById("ingredient");
const tempMeal = document.getElementById("meal-temp");
const mealContainer = document.getElementById("meal-container");
const body = document.querySelector("body");
const modalWindow = document.querySelector(".modal-card");

const getMeal = async (ingredient) => {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
  const response = await fetch(url + ingredient);
  const data = await response.json();
  return data.meals;
};

const displayMeal = (data) => {
  mealContainer.innerHTML = "";
  data.forEach((meal) => {
    mealContainer.innerHTML += `<div id="${meal.idMeal}" class="card meal"><img src="${meal.strMealThumb}"/><p>${meal.strMeal}</p></div>`;
  });
  addEventForCardMeal();
};

const displayError = (err) => {
  mealContainer.innerHTML = `<div class="card"><img src="error.png" /><p>${err.message}</p></div>`;
};

formIngredient.addEventListener("submit", (e) => {
  e.preventDefault();
  let ingredient = ingredientInput.value;
  getMeal(ingredient)
    .then((data) => displayMeal(data))
    .catch((err) => displayError(err));
});

const getMealById = async (idOfMeal) => {
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const response = await fetch(url + idOfMeal);
  const data = await response.json();
  return data.meals[0];
};

const displayModal = (meal) => {
  body.classList.add("noscroll");
  modalWindow.innerHTML = `<button id="remove-modal">X</button><h2>${meal.strMeal}</h2>
      <p>
        ${meal.strInstructions}
      </p>`;
  modalWindow.style.display = "flex";
  const removeBtn = document.getElementById("remove-modal");
  removeBtn.addEventListener("click", removeModal);
};

const removeModal = (event) => {
  body.classList.remove("noscroll");
  modalWindow.style.display = "none";
};

const addEventForCardMeal = () => {
  const meals = document.querySelectorAll(".meal");
  meals.forEach((meal) =>
    meal.addEventListener("click", (event) => {
      const idOfMeal = meal.id;
      getMealById(idOfMeal).then((data) => displayModal(data));
    })
  );
};
