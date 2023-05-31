const indicatorTemplate = document.querySelector("#indicatorTemplate");
const indicatorWrapper = document.querySelector("[data-indicator-container]");
fetch("data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    jsonData.forEach((indicatorData) => {
      let indicator = indicatorTemplate.content.cloneNode(true);
      indicator
        .querySelector(".indicator")
        .classList.add(indicatorData.category.toLowerCase());
      indicator
        .querySelector("[data-image]")
        .setAttribute("src", indicatorData.icon);
      indicator
        .querySelector("[data-image]")
        .setAttribute("alt", indicatorData.category);
      indicator.querySelector("[data-category]").textContent =
        indicatorData.category;
      indicator.querySelector(
        "[data-result]"
      ).innerHTML = `${indicatorData.score} <span>/ 100</span>`;
      indicatorWrapper.appendChild(indicator);
    });
  })
  .catch((error) => {
    console.log("Error:", error);
  });
