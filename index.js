const navPosition = document.getElementById("nav-position");

const monitorNavposition = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        let prevElem = entry.target.previousElementSibling;
        prevElem.classList.toggle('sticky', !entry.isIntersecting)
    })
})

monitorNavposition.observe(navPosition);

document.querySelector(".dropdown").addEventListener("click", () => {
    document.querySelector(".dropdown-list").classList.toggle("shw-menu");
})
