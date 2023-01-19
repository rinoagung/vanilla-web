// Navbar responsive
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('nav ul');
const garisToggle = document.querySelectorAll('.toggle > span');

const drop = document.querySelectorAll("#content > aside > div > h5");
const isi = document.querySelector("#content > aside > div > h5 > p");

const readMore = document.querySelector(".read-more");
const textMore = document.querySelector(".text-more");

toggle.addEventListener("click", function () {
    garisToggle[0].classList.toggle("togglesatu");
    garisToggle[1].classList.toggle("toggledua");
    garisToggle[2].classList.toggle("toggletiga");
    nav.classList.toggle("slide");
})

// Akhir Navbar responsive

// Aside dropdown
const headers = document.querySelectorAll("aside h5")
headers.forEach(header => {
    header.onclick = function () {
        header.nextElementSibling.classList.toggle("hilang")
        header.nextElementSibling.classList.toggle("muncul")
        header.querySelector("svg").classList.toggle("hilang");
    }
})
// Akhir aside dropdown

// Read more
readMore.addEventListener("click", function () {
    textMore.style.display = "inline";
    readMore.style.display = "none";
})
// Akhir read more

// Active scrolling
const li = document.querySelectorAll(".nav-link");
const sec = document.querySelectorAll(".page");

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 180 < sec[len].offsetTop) { }
    li.forEach((ltx) => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);
// Akhir aktif scrolling
