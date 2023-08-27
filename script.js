const navBtn = document.querySelector(".ang-con");
const nav = document.querySelector(".nav");
const con = document.querySelector(".container");
const ang = document.querySelector("#angles");

let typed = new Typed('#typing', {
    strings : ["Wellcome", "I'am DimasAi", "Enjoy It..!"],
    typeSpeed : 50,
    backSpeed : 50,
    loop : true,
});

navBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  navBtn.classList.toggle("active");
  con.classList.toggle("small");
  ang.classList.toggle("active");
});

con.addEventListener("click", () => {
  nav.classList.remove("active");
  navBtn.classList.remove("active");
  con.classList.remove("small");
  ang.classList.remove("active");
});
