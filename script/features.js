const tabList = document.querySelectorAll(".feature-tab");
const featureList = document.querySelectorAll(".feature");
const classToRevealTab = "active-tab";
const classToRevealFeature = "feature-display";

function disablePreviousState() {
  let activeTab = document.getElementsByClassName(classToRevealTab)[0];
  activeTab.classList.remove(classToRevealTab);

  let activeFeature = document.getElementsByClassName(classToRevealFeature)[0];
  activeFeature.classList.remove(classToRevealFeature);
}

tabList.forEach((tab, index) => {
  tab.addEventListener("mouseover", () => {
    disablePreviousState(index);

    // // Enable new one
    featureList[index].classList.add(classToRevealFeature);
    tab.classList.add(classToRevealTab);
  });
});
