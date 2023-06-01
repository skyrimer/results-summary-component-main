const indicatorTemplate = document.querySelector("#indicatorTemplate");
const indicatorWrapper = document.querySelector("[data-indicator-container]");
fetch("data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    let scoreSum = 0;
    jsonData.forEach((indicatorData) => {
      scoreSum += indicatorData.score;
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
        "[data-score]"
      ).innerHTML = `${indicatorData.score} <span>/ 100</span>`;
      indicatorWrapper.appendChild(indicator);
    });
    document.querySelector("[data-result]").textContent =
      trunc(scoreSum / jsonData.length);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
