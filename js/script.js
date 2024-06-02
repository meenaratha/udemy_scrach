// top notification bar 

const closeBtn = document.getElementById('close-btn');
const notification = document.getElementById('notification-content');

closeBtn.addEventListener('click', function() {
    notification.classList.add('close');
});

window.addEventListener('scroll', function() {
    // Check if the scroll position is more than 100px
    if (window.scrollY > 10) {
        // Add the 'scrolled' class to the button
        notification.classList.add('close');
    } else {
        // Remove the 'scrolled' class if the scroll position is less than 100px
        notification.classList.remove('close');

    }
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
    if (window.scrollY > 600) {
        // Add the 'scrolled' class to the button
        applybutton.classList.add('showBookBtn');
    } else {
        // Remove the 'scrolled' class if the scroll position is less than 100px
        applybutton.classList.remove('showBookBtn');
        applybutton.classList.remove('close');

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

const backLevelOne = document.querySelectorAll('#back-levelone');
const backLevelTwo = document.getElementById('back-leveltwo'); 

mobileToggle.addEventListener('click', function(){
    mobileMenuContainer.classList.add('overlay-open');
    mobileMenuCloseBtn.classList.add('close-zoom');
    mobileNaviLevelTwo.classList.add('hidden');
    mobileNaviLevelTwo.classList.add('side-menu-hide');
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
        mobileNaviLevelTwo.classList.add('side-menu-hide');
        mobileNaviLevelOne.classList.add('side-menu-hide');
        mobileNaviLevelOne.classList.add('hidden');
        
    
    });
});

// back level one 
backLevelOne.forEach((mainmenu)=>{
    mainmenu.addEventListener('mouseover',function(){
        mobileNaviLevelOne.classList.add('side-menu-show');
        mobileNaviLevelOne.classList.remove('hidden');
        mobileNaviLevelTwo.classList.add('side-menu-hide');
        mobileNaviLevelTwo.classList.add('hidden');
        mobileNaviLevelThree.classList.add('side-menu-hide');
        mobileNaviLevelThree.classList.add('hidden');
    });
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


// sticky desktop header start
const headerContent = document.querySelector('.nav-wrapper');
window.onscroll = function(){
    stickyHeader();
};

function stickyHeader(){
    if(window.scrollY > 600 ){
        headerContent.classList.add('fixed');
    }
    else{
        headerContent.classList.remove('fixed');
    }
}
// sticky desktop header end

// main slider start
let SliderPosition = 0;
const mainSliders = document.querySelectorAll('.main-slide-item');
const totalSlider = mainSliders.length;
const mainPrevBtn = document.querySelector('#main-arrow-left');
const mainNxtBtn = document.querySelector('#main-arrow-right');

mainPrevBtn.addEventListener('click', function(){
    PrevSlider();
});

mainNxtBtn.addEventListener('click', function(){
    NextSlider();
});

function updatePosition(){
    mainSliders.forEach((slider)=>{
        slider.classList.add('slide-hidden');
        slider.classList.remove('slide-active');
    });
    mainSliders[SliderPosition].classList.add('slide-active');
    mainSliders[SliderPosition].classList.remove('slide-hidden');
}
function PrevSlider(){
    if(SliderPosition ===0){
        SliderPosition  =totalSlider-1;
      }else{
        SliderPosition--;
      }
    updatePosition();
}
function NextSlider(){
  if(SliderPosition == totalSlider-1){
    SliderPosition  = 0;
  }else{
    SliderPosition++;
  }
    updatePosition();
}
// Initialize the first slide as active
updatePosition();


// Auto-slide functionality
const slideInterval = 4000; // Set the interval time (3000ms = 3 seconds)
let autoSlide = setInterval(NextSlider, slideInterval);

// Pause auto-slide on mouse hover
mainSliders.forEach((slider) => {
    slider.addEventListener('mouseover', () => {
        clearInterval(autoSlide);
    });

    slider.addEventListener('mouseout', () => {
        autoSlide = setInterval(NextSlider, slideInterval);
    });
});
// main slider end

// maion category start
var mainCatContainer = document.querySelector('.main-category-wrapper') ;
var mainCatItems = document.querySelectorAll('.main-category-item');
var mainCatLeftArrow = document.querySelector('.main-category-left-arrow');
var mainCatRightArrow = document.querySelector('.main-category-right-arrow');

let mainCatIndex = 0;

function getMainCatItemWidth() {
    return mainCatItems[0].offsetWidth;
}

function mainCatShowSlide(mainCatIndex) {
    const mainCatItemWidth = getMainCatItemWidth();
    const itemsToShow = mainCatVisibleItems();
    mainCatContainer.style.transition = 'transform 0.5s ease-in-out';
    mainCatContainer.style.transform = `translateX(${-mainCatIndex * mainCatItemWidth}px)`;
}

// function mainCatArrowVisibility() {
//     mainCatLeftArrow.style.display = (mainCatIndex === 0) ? 'none' : 'flex';
//     mainCatRightArrow.style.display = (mainCatIndex >= mainCatItems.length - mainCatVisibleItems()) ? 'none' : 'flex';
// }

function mainCatVisibleItems() {
    const mainCatContainerWidth = document.querySelector('.main-category-wrapper').clientWidth;
    const mainCatItemWidth = getMainCatItemWidth();
    return Math.floor(mainCatContainerWidth / mainCatItemWidth);
}

// Initialize the slider
mainCatShowSlide(mainCatIndex);
// mainCatArrowVisibility();

mainCatLeftArrow.addEventListener('click', () => {
    if (mainCatIndex > 0) {
        mainCatIndex--;
        mainCatShowSlide(mainCatIndex);
        // mainCatArrowVisibility();
    }
});

mainCatRightArrow.addEventListener('click', () => {
    if (mainCatIndex < mainCatItems.length - mainCatVisibleItems()) {
        mainCatIndex++;
        mainCatShowSlide(mainCatIndex);
        // mainCatArrowVisibility();
    }
});

// Adjust the slider on window resize
window.addEventListener('resize', () => {
    mainCatShowSlide(mainCatIndex);
    mainCatArrowVisibility();
});

// main category end

// sub category slider
var subCatContainer = document.querySelector('.sub-category-wrapper');
var subCatItems = document.querySelectorAll('.sub-category-item');
var subCatLeftArrow = document.querySelector('.sub-category-left-arrow');
var subCatRightArrow = document.querySelector('.sub-category-right-arrow');                    

let subCatIndex = 0;

function getSubCatSliderWidth() {
    return subCatItems[0].offsetWidth; // corrected from innerWidth to offsetWidth
}

function subCatShowSlide(subCatIndex) {
    const subCatSlideWidth = getSubCatSliderWidth();
    subCatContainer.style.transition = 'transform 0.5s ease-in-out';
    subCatContainer.style.transform = `translateX(${-subCatIndex * subCatSlideWidth}px)`;
}

function subCatArrowVisibility() {
    subCatLeftArrow.style.display = (subCatIndex === 0) ? 'none' : 'flex';
    subCatRightArrow.style.display = (subCatIndex >= subCatItems.length - subCatvisibleItems()) ? 'none' : 'flex';
}

function subCatvisibleItems() {
    const subCatContainerWidth = subCatContainer.clientWidth;
    const subCatItemWidth = getSubCatSliderWidth(); // corrected function name
    return Math.floor(subCatContainerWidth / subCatItemWidth);
}

// Initialize the slider
subCatShowSlide(subCatIndex);
subCatArrowVisibility();

subCatLeftArrow.addEventListener('click', () => {
    if (subCatIndex > 0) {
        subCatIndex--;
        subCatShowSlide(subCatIndex);
        subCatArrowVisibility();
    }
});

subCatRightArrow.addEventListener('click', () => {
    if (subCatIndex < subCatItems.length - subCatvisibleItems()) {
        subCatIndex++;
        subCatShowSlide(subCatIndex);
        subCatArrowVisibility();
    }
});

// sub category slider end

// sub category content slider

var subCatContentContainer = document.querySelector('.sub-cat-content-wrapper');
var subCatContent = document.querySelector('.sub-cat-content');
var subCatContentItems = document.querySelectorAll('.sub-cat-content-item');
var subCatContentLeftArrow = document.querySelector('.sub-category-cont-left-arrow');
var subCatContentRightArrow = document.querySelector('.sub-category-cont-right-arrow');

let subCatContSliderIndex = 0;
let autoScrollInterval;


function getSubContSlideWidth() {
    return subCatContentItems[0].clientWidth;
}

function subCatContShowSlide(index) {
    const slideWidth = getSubContSlideWidth();
    subCatContentContainer.style.transition = 'transform 0.5s ease-in-out'; // Add smooth transition
    subCatContentContainer.style.transform = `translateX(${-index * slideWidth}px)`;
}

function updateArrowVisibility() {
    subCatContentLeftArrow.style.display = (subCatContSliderIndex === 0) ? 'none' : 'flex';
    subCatContentRightArrow.style.display = (subCatContSliderIndex >= subCatContentItems.length - visibleItems()) ? 'none' : 'flex';
}

function visibleItems() {
    const containerWidth = subCatContentContainer.clientWidth;
    const itemWidth = getSubContSlideWidth();
    return Math.floor(containerWidth / itemWidth);
}

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        subCatContSliderIndex = (subCatContSliderIndex < subCatContentItems.length - visibleItems()) ? subCatContSliderIndex + 1 : 0;
        subCatContShowSlide(subCatContSliderIndex);
        updateArrowVisibility();
    }, 5000); // Change slides every 5 seconds
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Initialize the slider
subCatContShowSlide(subCatContSliderIndex);
updateArrowVisibility();
startAutoScroll();

subCatContentLeftArrow.addEventListener('click', () => {
    if (subCatContSliderIndex > 0) {
        subCatContSliderIndex--;
        subCatContShowSlide(subCatContSliderIndex);
        updateArrowVisibility();
    }
});

subCatContentRightArrow.addEventListener('click', () => {
    if (subCatContSliderIndex < subCatContentItems.length - visibleItems()) {
        subCatContSliderIndex++;
        subCatContShowSlide(subCatContSliderIndex);
        updateArrowVisibility();
    }
});

window.addEventListener('resize', () => {
    subCatContShowSlide(subCatContSliderIndex);
    updateArrowVisibility();
});

// Stop auto-scrolling on mouseover
subCatContentContainer.addEventListener('mouseover', stopAutoScroll);

// Restart auto-scrolling when mouse leaves
subCatContentContainer.addEventListener('mouseout', startAutoScroll);

// Dragging functionality
