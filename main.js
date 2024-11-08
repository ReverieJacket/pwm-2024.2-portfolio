const dots = document.querySelectorAll(".scroll-indicator a");

const removeActiveClass = () => {
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });
};


const addActiveClass = (entries, observer) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            let currentDot = document.querySelector(`.scroll-indicator a[href='#${entry.target.id}']`);
            removeActiveClass();
            currentDot.classList.add("active");
        }
    })
};

const options = {
    threshold: 0.9,
};

const observer = new IntersectionObserver(addActiveClass, options);
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    observer.observe(section);
});

var revealer = document.querySelectorAll('.revealer span');

window.onmousemove = function (e) {

    for (var i = 0; i < revealer.length; i++) {
        var tooltipImage = revealer[i].querySelector('img');
            if (tooltipImage.id === 'eisen') {
                x = (e.clientX + -300) + 'px';
                y = (e.clientY + -200) + 'px';
            } else if (tooltipImage.id === 'savesite') {
                x = (e.clientX + -650) + 'px';
                y = (e.clientY + -150) + 'px';
            } 
        revealer[i].style.top = y;
        revealer[i].style.left = x;
    }
};

