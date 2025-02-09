const categoriesListEl = document.querySelector("#categories");
const categoriesArr = [...categoriesListEl.children];
const numberOfCategories = categoriesArr.length;
console.log("Number of categories: ", numberOfCategories);

categoriesArr.forEach((element) => {
  const categoryName = element.querySelector("h2").textContent;
  const numberOfElems = element.querySelector("ul").children.length;
  console.log("Category: ", categoryName);
  console.log("Elements:", numberOfElems);
});
