const sections = [
    {
        selectors: ['.aboutanimation']
    },
    {
        selectors: ['.servicesanimation']
    },
    {
        selectors: ['.menuanimation']
    },
    {
        selectors: ['.testimonialsanimation']
    },
    {
        selectors: ['.contactanimation']
    }
];

window.addEventListener('scroll', () => {
    const scrollY = window.innerHeight;
    //console.log(scrollY);
    sections.forEach(section => {
        // if (scrollY >= section.range.min && scrollY <= section.range.max) {
        // }
        section.selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach((el) =>{ 
                if(el.getBoundingClientRect().top < scrollY - 100)
                el.classList.add('active')
                el.style.transitionDelay=el.dataset.transition
                
            });
        });
    });
});
