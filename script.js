let navMenu = document.querySelector(".header-navigation-menu");
let headerMenu = document.querySelector(".header-menu");
let micon = document.querySelector(".header-navigation-menu>i");
navMenu.addEventListener("click", () => {
    headerMenu.classList.toggle("showMenu");
})
navMenu.addEventListener("click", () => {
    micon.classList.toggle("fa-bars");
    micon.classList.toggle("fa-close");
})


// FAQ SECTION

let faqAllQustion = document.querySelectorAll(".faq-mid-items-main-heading h4");

// console.log(faqAllQustion);

faqAllQustion.forEach((h4Element, index) => {
    h4Element.addEventListener("click", () => {
        console.log(index);

        let iTag = h4Element.lastElementChild;

        faqAllQustion.forEach((heading, i) => {
            if (index != i) {
                heading.nextElementSibling.classList.remove("showFaqPara");
                iTag.classList.remove("fa-angle-up");
                // iTag.classList.add("fa-angle-down");
            }
        });




        if (iTag.classList.contains("fa-angle-down")) {
            iTag.classList.remove("fa-angle-down");
            iTag.classList.add("fa-angle-up");
        } else {
            iTag.classList.remove("fa-angle-up")
            iTag.classList.add("fa-angle-down");
        }

        h4Element.nextElementSibling.classList.toggle("showFaqPara");
    })
})