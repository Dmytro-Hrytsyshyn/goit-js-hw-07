const categoriesList = document.getElementById("categories");
const items = categoriesList.querySelectorAll(".item");
console.log(`Categories: ${items.length}`);
items.forEach(item => {
  const title = item.querySelector("h2").textContent;
  
  const itemCount = item.querySelectorAll("ul li").length;
  
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemCount}`);
});


