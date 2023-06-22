const header = document.querySelector('#nav1');
const header2 = document.querySelector('#nav2');
const header3 = document.querySelector('#nav3');
const myList = document.querySelector('.mobile-navbar-nav');

const items = myList.children;

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('is-scrolled');
        header2.classList.add('is-scrolled');
        header3.classList.add('is-scrolled');
        
        for (let i = 0; i < items.length; i++) {
            myList.children[i].firstElementChild.classList.add('is-scrolled');
        }
    } else {
        header.classList.remove('is-scrolled');
        header2.classList.remove('is-scrolled');
        header3.classList.remove('is-scrolled');
        for (let i = 0; i < items.length; i++) {
            myList.children[i].firstElementChild.classList.remove('is-scrolled');
        }
    }
});

// $(document).ready(function(){
// 	$(".wish-icon i").click(function(){
// 		$(this).toggleClass("fa-heart fa-heart-o");
// 	});
// });	

var splide = new Splide('#slide_new_arrivals', {
    type: 'loop',
    perPage: 4,
    rewind: true,
});

splide.mount();

var splide = new Splide('#slide_category', {
    // type: 'loop',
    perPage: 8,
    rewind: true,
});

splide.mount();

// var splide2 = new Splide('.splide', {
//     type: 'loop',
//     perPage: 8,
// });

// splide2.mount();