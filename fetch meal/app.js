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
  data.forEach((meal, index) => {
    console.log(index);
    const mealCard = document.createElement("div");
    mealCard.id = meal.idMeal;
    mealCard.className = "card meal";
    mealCard.innerHTML = `<img src="${meal.strMealThumb}"/><p>${meal.strMeal}</p>`;
    mealContainer.appendChild(mealCard);

    // for style effect

    setTimeout(() => {
      mealCard.style.opacity = 1;
      mealCard.style.transform = "translateX(0)";
    }, 300 * index);
  });

  addEventForCardMeal();
};

const displayError = (err) => {
  mealContainer.innerHTML = `<div id="error"><img src="error.png" /><p>${err.message}</p></div>`;
  const errorCard = document.getElementById("error");
  setTimeout(() => {
    errorCard.style.opacity = 1;
  }, 200);
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

const getIngredientsFromMeal = (meal) => {
  return Object.entries(meal)
    .filter((x) => x[0].indexOf("strIngredient") !== -1)
    .filter((x) => x[1] !== "" && x[1] !== null)
    .map((x) => `<li>${x[1]}</li>`);
};

const displayModal = (meal) => {
  body.classList.add("noscroll");
  let listIngredient = getIngredientsFromMeal(meal).join("");

  modalWindow.innerHTML = `<button id="remove-modal">X</button>
  <h2>${meal.strMeal}</h2>
  <h3>Ingredient :</h3>
      <ol>${listIngredient}
      </ol>
      <h3>Recept :</h3>
      <p>
        ${meal.strInstructions}
      </p>`;
  modalWindow.style.display = "flex";
  const removeBtn = document.getElementById("remove-modal");
  removeBtn.addEventListener("click", removeModal);
  setTimeout(() => {
    modalWindow.style.opacity = 1;
    modalWindow.style.transform = "translate(-50%, -50%)";
  }, 300);
};

const removeModal = (event) => {
  body.classList.remove("noscroll");

  modalWindow.style.opacity = 0;
  modalWindow.style.transform = "translate(50%, -50%)";
  setTimeout(() => {
    modalWindow.style.display = "none";
  }, 400);
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
