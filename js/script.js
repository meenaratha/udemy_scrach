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

// mobile notification start


      const mobileNotifywrapper = document.querySelector('.mobile-notify-wrapper');
    const notifyBtn = document.getElementById('mobile-notify-btn');
    const mobilenotifyCont = document.getElementById('mobile-notify-container');
    notifyBtn.addEventListener('mouseover' , function(){
        mobilenotifyCont.classList.add('show');
    });
    mobileNotifywrapper.addEventListener('mouseleave' , function(){
        mobilenotifyCont.classList.remove('show');
    });

// mobile notification end 


// mobile sidebar menu start
const mobileToggle = document.querySelector('.mobile-toggle-icon');
const mobileMenuContainer = document.querySelector('.mobile-overlay');
const mobileMenuCloseBtn = document.querySelector('.mobile-close') ;

const mobileNaviLevelOne = document.getElementById('mobile-levelone-container');
const mobileNaviLevelTwo = document.getElementById('mobile-leveltwo-container');
const mobileNaviLevelThree = document.getElementById('mobile-levelthree-container');
const mobileLevelOneLink = document.querySelectorAll('#mobile-levelone-link');
const mobileLevelTwoLink = document.querySelectorAll('#mobile-leveltwo-link');

const backLevelOne = document.querySelector('#back-levelone');
const backLevelTwo = document.getElementById('back-leveltwo'); 

mobileToggle.addEventListener('click', function(){
    mobileMenuContainer.classList.add('overlay-open');
    mobileMenuCloseBtn.classList.add('close-zoom');
    mobileNaviLevelTwo.classList.add('hidden');
    mobileNaviLevelTwo.classList.add('side-menu-show');
    mobileNaviLevelThree.classList.add('hidden');
    mobileNaviLevelThree.classList.add('side-menu-hide');
});

mobileMenuCloseBtn.addEventListener('click', function(){
    mobileMenuContainer.classList.remove('overlay-open');
    mobileNaviLevelOne.classList.remove('hidden');
    mobileNaviLevelOne.classList.remove('side-menu-hide');


});

// open mobile level 2 container
mobileLevelOneLink.forEach((levelOneLink)=>{
    levelOneLink.addEventListener('mouseover' ,function(){
        mobileNaviLevelTwo.classList.remove('hidden');
        mobileNaviLevelTwo.classList.add('side-menu-show');
        mobileNaviLevelOne.classList.add('side-menu-hide');
        mobileNaviLevelOne.classList.add('hidden');
    
    });
});

// open mobile level3 container
mobileLevelTwoLink.forEach((levelTwoLink)=>{
    levelTwoLink.addEventListener('mouseover' ,function(){
        mobileNaviLevelThree.classList.remove('hidden');
        mobileNaviLevelThree.classList.remove('side-menu-hide');
        mobileNaviLevelTwo.classList.add('hidden');
        mobileNaviLevelTwo.classList.add('side-menu-show');
        mobileNaviLevelOne.classList.add('side-menu-hide');
        mobileNaviLevelOne.classList.add('hidden');
        
    
    });
});

// back level one 
backLevelOne.addEventListener('mouseover',function(){
    mobileNaviLevelOne.classList.remove('side-menu-hide');
    mobileNaviLevelOne.classList.remove('hidden');
    mobileNaviLevelTwo.classList.add('side-menu-hide');
    mobileNaviLevelTwo.classList.add('hidden');
    mobileNaviLevelThree.classList.add('side-menu-hide');
    mobileNaviLevelThree.classList.add('hidden');
});
backLevelTwo.addEventListener('mouseover',function(){
    mobileNaviLevelOne.classList.add('side-menu-hide');
    mobileNaviLevelOne.classList.add('hidden');
    mobileNaviLevelTwo.classList.remove('side-menu-hide');
    mobileNaviLevelTwo.classList.remove('hidden');
    mobileNaviLevelThree.classList.add('side-menu-hide');
    mobileNaviLevelThree.classList.add('hidden');
});

// mobile sidebar menu end
