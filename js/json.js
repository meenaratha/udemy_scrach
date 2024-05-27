const menuList = [
    {
        linktext: "Development",
        href: "www.google.com",
        svg: '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        levelTwo: [
            {
                linktext: "Web Development",
                href: "#",
                svg: '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                levelThree: [
                    { linktext: "Javascript", href: "#" },
                    { linktext: "ReactJS", href: "#" },
                    { linktext: "Angular", href: "#" },
                    { linktext: "Next JS", href: "#" },
                    { linktext: "CSS", href: "#" },
                    { linktext: "HTML", href: "#" },
                    { linktext: "ASP.NET Core", href: "#" },
                    { linktext: "Node js", href: "#" },
                ]
            },
            {
                linktext: "Data Science",
                href: "#",
                levelThree: [
                    { linktext: "Machine Learning", href: "#" },
                    { linktext: "Deep Learning", href: "#" },
                    { linktext: "Python", href: "#" },
                    { linktext: "Artificial Intelligence (AI)", href: "#" },
                    { linktext: "Natural Language Processing (NLP)", href: "#" },
                    { linktext: "LangChain", href: "#" },
                    { linktext: "Data Analysis", href: "#" },
                    { linktext: "R (Programming Language)", href: "#" },
                ]
            },
            {
                linktext: "Mobile Development",
                href: "#",
                levelThree: [
                    { linktext: "Google Flutter", href: "#" },
                    { linktext: "Android Development", href: "#" },
                    { linktext: "iOS Development", href: "#" },
                    { linktext: "React Native", href: "#" },
                    { linktext: "Dart (Programming Languages)", href: "#" },
                    { linktext: "Swift", href: "#" },
                    { linktext: "Kotlin", href: "#" },
                    { linktext: "Mobile App Development", href: "#" },
                    { linktext: "SwiftUI", href: "#" },
                ]
            },
        ]
    },
    {
        linktext: "Business",
        href: "#",
        svg: '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        levelTwo: [
            {
                linktext: "Entrepreneurship",
                href: "#",
                svg: '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                levelThree: [
                    { linktext: "Business Fundamentals", href: "#" },
                    { linktext: "Entrepreneurship Fundamentals", href: "#" },
                    { linktext: "Business Strategy", href: "#" },
                    { linktext: "Freelancing", href: "#" },
                    { linktext: "Online Business", href: "#" },
                    { linktext: "ChatGPT", href: "#" },
                    { linktext: "Startup", href: "#" },
                    { linktext: "Business Plan", href: "#" },
                    { linktext: "Instagram Marketing", href: "#" },
                ]
            },
            {
                linktext: "Communication",
                href: "#",
                levelThree: [
                    { linktext: "Communication Skills", href: "#" },
                    { linktext: "Presentation Skills", href: "#" },
                    { linktext: "Public Speaking", href: "#" },
                    { linktext: "Writing", href: "#" },
                    { linktext: "Fiction Writing", href: "#" },
                    { linktext: "Business Communication", href: "#" },
                    { linktext: "Business Writing", href: "#" },
                    { linktext: "Assertiveness", href: "#" },
                    { linktext: "Email Writing & Etiquette", href: "#" },
                ]
            },
        ]
    },
];

// Show the menu container on hover
document.getElementById('popper-btn').addEventListener('mouseover', function() {
    const poppermenu = document.getElementById('popper-menu-container');
    poppermenu.classList.add('popper-open');
});

// Hide the menu container on mouse leave
document.getElementById('popper-menu-container').addEventListener('mouseleave', function() {
    const poppermenu = document.getElementById('popper-menu-container');
    poppermenu.classList.remove('popper-open');
});

// Function to remove the 'active' class from all links
function removeActiveClasses() {
    document.querySelectorAll('.popper-link, .popper-link-two, .popper-link-three').forEach(link => {
        link.classList.remove('active');
    });
}

// Function to handle adding the 'active' class to the clicked link
function handleActiveClass(event) {
    removeActiveClasses();
    event.currentTarget.classList.add('active');
}


const navLevelOneLinks = document.getElementById('popper-menu-one');
navLevelOneLinks.innerHTML = "";

// Create the level one menu
menuList.forEach((navLevelOne, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'popper-link';
    a.id = `level1-${index}`; // Assigning unique ID
    const span = document.createElement('span');
    a.href = navLevelOne.href;
    span.innerHTML = navLevelOne.linktext;
    a.appendChild(span); // Append the span to the a element
    li.appendChild(a); // Append the a element to the li
    navLevelOneLinks.appendChild(li); // Append the li element to the ul

    if (navLevelOne.svg) {
        const svgContainer = document.createElement('svg');
        svgContainer.innerHTML = navLevelOne.svg;
        a.appendChild(svgContainer);
    }

    // Handle mouseover event to show level 2 menu
    a.addEventListener('mouseover', function() {
        const popperTwo = document.getElementById('popper-menu-two');
        popperTwo.classList.add('popper-open');
        const popperMenuTwo = document.getElementById('popper-menu-list-two');
        popperMenuTwo.innerHTML = ""; // Clear previous level 2 menu

        if (navLevelOne.levelTwo) {
            navLevelOne.levelTwo.forEach((navLevelTwo, subIndex) => {
                const li2 = document.createElement('li');
                const a2 = document.createElement('a');
                a2.className = 'popper-link popper-link-two';
                a2.id = `level2-${index}-${subIndex}`;
                const span2 = document.createElement('span');
                a2.href = navLevelTwo.href;
                span2.innerHTML = navLevelTwo.linktext;
                a2.appendChild(span2);
                li2.appendChild(a2);
                popperMenuTwo.appendChild(li2);
                 // Add event listener for active class
                 a2.addEventListener('mouseover', handleActiveClass);

                if (navLevelTwo.svg) {
                    const svgContainer2 = document.createElement('svg');
                    svgContainer2.innerHTML = navLevelTwo.svg;
                    a2.appendChild(svgContainer2);
                }

                // Handle mouseover event to show level 3 menu
                a2.addEventListener('mouseover', function() {
                   
                   const popperThree =  document.getElementById('popper-menu-three');
                   popperThree.classList.add('popper-open');
                  
                    const popperMenuThree = document.getElementById('popper-menu-list-three');
                    popperMenuThree.innerHTML = ""; // Clear previous level 3 menu

                    if (navLevelTwo.levelThree) {
                        navLevelTwo.levelThree.forEach((navLevelThree, subSubIndex) => {
                            const li3 = document.createElement('li');
                            const a3 = document.createElement('a');
                            // li3.className = 'placeholder';
                            a3.className = 'popper-link popper-link-three placeholder';
                            a3.id = `level3-${index}-${subIndex}-${subSubIndex}`;
                            const span3 = document.createElement('span');
                            a3.href = navLevelThree.href;
                            span3.innerHTML = navLevelThree.linktext;
                            a3.appendChild(span3);
                            li3.appendChild(a3);
                            popperMenuThree.appendChild(li3);

                            const placeholderbg = document.querySelectorAll('.placeholder');
                            setTimeout(function getBgRemove() {
                                placeholderbg.forEach(bg => 
                                    bg.classList.remove('placeholder')
                                );
                            }, 500);

                             // Add event listener for active class
                             a3.addEventListener('mouseover', handleActiveClass);
                        });
                    }
                });
            });
        }

        // Show the level 2 menu
        popperMenuTwo.classList.add('popper-open');
         // Add event listener for active class
         a.addEventListener('mouseover', handleActiveClass);
    });
});

// when i click the level2 menus show level3 menus
document.querySelectorAll('.popper-link-two').forEach(link =>{
    link.addEventListener('mouseover', function(){
        const poppermenuthree =document.getElementById('popper-menu-three');
        poppermenuthree.classList.add('popper-open');
      
       
    });
    document.getElementById('popper-menu-three').addEventListener('mouseover', function(){
        const poppermenuthree =document.getElementById('popper-menu-three');
        poppermenuthree.classList.add('popper-open');
    });
    document.getElementById('popper-menu-two').addEventListener('mouseleave', function(){
        const poppermenuthree =document.getElementById('popper-menu-three');
        poppermenuthree.classList.remove('popper-open');
    });
});