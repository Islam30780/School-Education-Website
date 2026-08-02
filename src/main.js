// dark and light mode

const themeButton = document.querySelector("[data-theme-toggle]");
const savedTheme = localStorage.getItem("theme")

if (savedTheme === "dark"){
    document.documentElement.classList.add("dark");
}
themeButton?.addEventListener("click", ()=>{
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme",isDark? "dark" : "light");
});