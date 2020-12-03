const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Create Selectors to point to data - big sections
const navMenu = document.querySelectorAll('nav a');

const navMenu0 = navMenu[0].textContent = siteContent['nav']['nav-item-1']
const navMenu1 = navMenu[1].textContent = siteContent['nav']['nav-item-2']
const navMenu2 = navMenu[2].textContent = siteContent['nav']['nav-item-3']
const navMenu3 = navMenu[3].textContent = siteContent['nav']['nav-item-4']
const navMenu4 = navMenu[4].textContent = siteContent['nav']['nav-item-5']
const navMenu5 = navMenu[5].textContent = siteContent['nav']['nav-item-6']


// Cta section
const ctaH1 = document.querySelector('h1');
ctaH1.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('button')
ctaButton.textContent = siteContent['cta']['button'];

const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']['img-src'];



// Main content section
const mainH4 = document.querySelectorAll('h4');
console.log(mainH4);

const mainH40 = mainH4[0].textContent = siteContent['main-content']['features-h4'];
const mainH41 = mainH4[1].textContent = siteContent['main-content']['about-h4'];
const mainH42 = mainH4[2].textContent = siteContent['main-content']['services-h4'];
const mainH43 = mainH4[3].textContent = siteContent['main-content']['product-h4'];
const mainH44 = mainH4[4].textContent = siteContent['main-content']['vision-h4'];

const mainP = document.querySelectorAll('p');

const mainP0 = mainP[0].textContent = siteContent['main-content']['features-content']
const mainP1 = mainP[1].textContent = siteContent['main-content']['about-content']
const mainP2 = mainP[2].textContent = siteContent['main-content']['services-content']
const mainP3 = mainP[3].textContent = siteContent['main-content']['product-content']
const mainP4 = mainP[4].textContent = siteContent['main-content']['vision-content']

const mainImg = document.getElementById('middle-img');
mainImg.src = siteContent['main-content']['middle-img-src'];


// tContent.forEach(h4 => (siteContent) {if (h4 == )})

// const featH4 = tContent.querySelector('h4');
// const featP = tContent.querySelector('p');

// featH4.textContent = "Features";
// featP.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";







const contact = document.querySelector('.contact');
console.log('contact', contact);



const footer = document.querySelector('footer');
console.log('footer', footer);
footer.textContent = "Copyright Great Idea! 2018";

//

