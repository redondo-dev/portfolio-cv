const link = document.querySelector(".link");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");

const formations = document.querySelector(".formations");
const experiences = document.querySelector(".experiences");
const centre = document.querySelector(".centre");

link.addEventListener("mousemove", () => {
    formations.style.display ="none";

})
link.addEventListener("mouseleave", () => {
    formations.style.display ="block";

})
link1.addEventListener("mousemove", () => {
    experiences.style.display ="none";

})
link1.addEventListener("mouseleave", () => {
    experiences.style.display ="block";

})
link2.addEventListener("mousemove", () => {
    centre.style.display ="none";

})
link2.addEventListener("mouseleave", () => {
    centre.style.display ="bloc";

})