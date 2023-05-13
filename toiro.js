//navbar toggle buttom from hamburger to X

const toggleButton = document.querySelector(".toggle-button")
const navbarLinks= document.querySelector(".navbar-links")
const toggleTopBar= document.querySelector(".top-bar")
const toggleBottomBar= document.querySelector(".bottom-bar")
const toggleMiddleBar= document.querySelector(".middle-bar")

function toggleClass (){
  toggleTopBar.classList.toggle("active");
  toggleBottomBar.classList.toggle("active");
  toggleMiddleBar.classList.toggle("active");
  navbarLinks.classList.toggle("active");
}

toggleButton.addEventListener("click", toggleClass);
navbarLinks.addEventListener("click", toggleClass);


//navbar2
const toggleButton2 = document.querySelector(".toggle-button-2")
const navbarLinks2= document.querySelector(".navbar-links-2")
const toggleTopBar2= document.querySelector(".top-bar-2")
const toggleBottomBar2= document.querySelector(".bottom-bar-2")
const toggleMiddleBar2= document.querySelector(".middle-bar-2")

function toggleClass2 (){
  toggleTopBar2.classList.toggle("active");
  toggleBottomBar2.classList.toggle("active");
  toggleMiddleBar2.classList.toggle("active");
  navbarLinks2.classList.toggle("active");
  toggleButton2.classList.toggle("active");
  }
  
toggleButton2.addEventListener("click", toggleClass2);
navbarLinks2.addEventListener("click", toggleClass2);

//change toggle-button-2 color at about & shop section  by adding button-color class
const aboutSection = document.querySelector('#about').offsetTop;
const beanSection = document.querySelector('#beans').offsetTop;
const shopSection = document.querySelector('#shop').offsetTop;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset - (window.innerHeight * 0.95);
  if (currentScroll < beanSection) {
    toggleButton2.classList.add("button-color");
  } 
  else if (currentScroll >= shopSection) {
    toggleButton2.classList.add("button-color");
  }
  else {
    toggleButton2.classList.remove("button-color");
  }
});


//split title letters into span

const titles= document.querySelectorAll(".title");

titles.forEach(title => {
  title.innerHTML = title.textContent.replace(/\S/g, "<span>$&</span>");
});

//title animation

const titleObserver= new IntersectionObserver(titleAnimation
) ;

titles.forEach(title => {
    titleObserver.observe(title)
})

function titleAnimation(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
           // console.log(entry.intersectionRatio)
    anime({
        targets: '.title span',
        translateY:[-60,0],
        delay: anime.stagger(50),
        opacity:[0,1],
        easing:'easeInCubic',
        duration: 600
        //autoplay:false
        })
}})}


//add .anime to all element with class animation
const animation= document.querySelectorAll(".animation")

const animationobserver= new IntersectionObserver(entries=>{
    entries.forEach((entry) => {
        entry.target.classList.toggle("anime", entry.isIntersecting)
      // if(entry.isIntersecting) animationobserver.unobserve(entry.target)
    })
}
) 

animation.forEach(anime => {
    animationobserver.observe(anime)
})


//beans - description change with onclick

const originList = document.querySelectorAll('.origin li');

// Add event listener to each origin li element
originList.forEach((item) => {
  item.addEventListener('click', () => {
    const originName = item.getAttribute('data-origin');
    beanSlider(originName);
  });
});

function beanSlider(originName) {
  // Remove active class from other detail-image elements only when if there is any active class exist
  const activeDetailImage = document.querySelector('.detail-image.active');
  if (activeDetailImage) {
    activeDetailImage.classList.remove('active');
  }
  // Add active class to selected detail-image element
  const imageClass = document.querySelector("." + originName);
  imageClass.classList.add('active');
}


//cursor for bean section
const cursor=document.querySelector(".cursor");
document.addEventListener('mousemove', (event) => {
  cursor.style.display="flex";    //show cursor on PC 
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});


//shop circular animation
const shopToggle= document.querySelector(".shop-toggle");
const shopWrapper= document.querySelector(".shop-wrapper");
shopToggle.onclick= () => {
  shopWrapper.classList.toggle("active");
} ;




