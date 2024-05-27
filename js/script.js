// top notification bar 

const closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', function() {
    const notification = document.getElementById('notification-content');
    notification.classList.add('close');
});



// center menu hover display submenu

const miniMenu = document.getElementById('minimenu-btn');
miniMenu.addEventListener('mouseover', function(){
    const miniMenuContainer = document.getElementById('mini-submenu-container');
    miniMenuContainer.classList.add('open');
});

const miniMenuContainerremover = document.getElementById('mini-popper-wrapper');
miniMenuContainerremover.addEventListener('mouseleave', function(){
    const miniMenuContainerclose = document.getElementById('mini-submenu-container');
    miniMenuContainerclose.classList.remove('open');
});

// header button animation start
// Select the button element
const applybutton = document.getElementById('apply-btn');

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // Check if the scroll position is more than 100px
    if (window.scrollY > 100) {
        // Add the 'scrolled' class to the button
        applybutton.classList.add('showBookBtn');
    } else {
        // Remove the 'scrolled' class if the scroll position is less than 100px
        applybutton.classList.remove('showBookBtn');
    }
});



// header button animation end


