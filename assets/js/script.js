//------------------SideBar-------------------

//svg Hamburger
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  });
});
///


//Hamburger
function dropDown(x) {
  x.classList.toggle("change");
}


//sidebar
let sidebar = document.getElementById("sidebar");
let overlay = document.getElementById("overlay");

function showSidebar() {
  sidebar.classList.toggle("show");
  overlay.classList.toggle("showit");
}
function hideSidebar() {
  sidebar.classList.remove("show");
  overlay.classList.remove("showit");
}



//-------------------Progress Bar Animation-----------------------------

document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.getElementById("skills");
  let animationsTriggered = false;

  function startCountingAnimation() {
    document.querySelectorAll(".sk-num").forEach(function (element) {
      var ln = Number(element.textContent);
      var el = element;
      animateCounting(el, ln);
    });
  }

  function animateCounting(element, target) {
    let val = 0;
    const duration = 1200;
    const interval = 2.5;

    const animation = setInterval(function () {
      if (val >= target) {
        clearInterval(animation);
      } else {
        val++;
        element.textContent = Math.floor(val);
      }
    }, duration / (target / interval));
  }

  function startProgressBarAnimation() {
    const progressBarElements = document.querySelectorAll(".progress");
    progressBarElements.forEach(function (progressBar) {
      const targetWidth = progressBar.getAttribute("data-percent");
      animateProgressBar(progressBar, targetWidth);
    });
  }

  function animateProgressBar(progressBar, targetWidth) {
    let width = 0;
    const duration = 500;
    const interval = 3;

    const animation = setInterval(function () {
      if (width >= parseInt(targetWidth)) {
        clearInterval(animation);
      } else {
        width++;
        progressBar.style.width = `${width}%`;
      }
    }, duration / (parseInt(targetWidth) / interval));
  }

  function handleScroll() {
    const rect = skillsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible && !animationsTriggered) {
      startCountingAnimation();
      startProgressBarAnimation();
      animationsTriggered = true; // Set to true once animations are triggered
    }
  }

  // Listen for scroll events on the window
  window.addEventListener("scroll", handleScroll);

  // Trigger animations when the page loads (in case the section is already in view)
  handleScroll();
});



//------------------Mouse Follower -----------------------
// let cursor = document.querySelector(".cursor");
// document.addEventListener("mousemove", function (e) {
//   cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
// });

//-------------------Service Cards-----------------------------
let serCards = document.getElementById("serviceCards");



let generateCards = () => {
  return (serCards.innerHTML = serviceCardData.map((x) => {
    let { icon, title, price, desc } = x
    return `<div class="ser-card flex-row" data-aos="fade-up">
<div class="ser-card-cont">
    <div class="ser-card-left">
    <i class="bi ${icon}"></i>
    </div>
    <div class="ser-card-right flex-col">
        <h1>${title}</h1>
        <p>Starts from <b>$ ${price}</b></p>

        <div class="ser-card-p">
            <p>${desc}</p>
        </div>
        <div class="ser-card-btn flex">
            <a href="#contact">Contact Now</a>
        </div>
    </div>
</div>
</div>`;
  }).join(''));
};
generateCards();


//-------------------Portfolio Cards-----------------------------
let portCards = document.getElementById("port-cards");

let generatePortCards = () => {
  return (portCards.innerHTML = portCardData.map((x) => {
    let { img, title, subtitle } = x
    return ` <div class="pcard" data-aos="fade-up">
    <div class="hover-label">
        <img src="${img}" alt="err">
        <div class="hover-anime hover-zoom-in flex">
            <div class="caption-cont flex-col">
                <h5>${title}</h5>
                <p>${subtitle}</p>
                <!-- <a href=""><i class="fas fa-search-plus" aria-hidden="true"></i></a>
                <a href=""><i class="fas fa-link" aria-hidden="true"></i></a> -->
            </div>
        </div>
    </div>
</div>`;
  }).join(''));
};
generatePortCards();


//-------------------Testimonials  Cards-----------------------------
let testiCards = document.getElementById("cards-con");

let generateTestiCards = () => {
  return (testiCards.innerHTML = testiCardData.map((x) => {
    let { name, role, img, desc } = x
    return ` <div class="t-card flex" data-aos="fade-up">
    <div class="t-card-content flex-col">
        <div class="t-card-p">
            <p>${desc}</p>
        </div>
        <div class="t-card-details flex-row">
            <div class="t-card-img flex">
                <img src="${img}">
            </div>
            <div class="t-card-client">
                <h1>${name}</h1>
                <h3>${role}</h3>
            </div>
        </div>
    </div>
</div>`;
  }).join(''));
};
generateTestiCards();





// Form Styling

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});




