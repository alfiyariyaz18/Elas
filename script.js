var loader = document.getElementById("preloader");
window.addEventListener('load', function () {
  loader.style.display = 'none';
})


function revealOnScroll() {
  const elements = document.querySelectorAll('.slide-down');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


const sections = document.querySelectorAll('.slide');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5
});

sections.forEach(section => {
  observer.observe(section);
});




window.onscroll = function () { scrollFunction() };

const navs = document.querySelectorAll('.nav-items-new a');
console.log(navs);

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("nav").style.backgroundColor = "#fff";
    document.querySelector('nav').style.boxShadow = '0px 1px 3px rgb(201, 201, 201)';
    document.querySelector(".logo").setAttribute('src', './img/logo.png');
    for (let i = 0; i < navs.length; i++) {
      navs[i].style.color = 'rgb(19, 44, 82)'
      navs[i].addEventListener('mouseover', function () {
        navs[i].style.color = '#b68f2e'
      })

      navs[i].addEventListener('mouseout', function () {
        navs[i].style.color = 'rgb(19, 44, 82)';
      })

      document.querySelector('.active').addEventListener('mouseout', function () {
        document.querySelector('.active').style.color = '#b68f2e';
      })
    }

    document.querySelector('.active').style.color = "#b68f2e";
  }
  else {
    document.querySelector("nav").style.backgroundColor = "transparent";
    document.querySelector("nav").style.boxShadow = "0px 0px 0px";
    for (let i = 0; i < navs.length; i++) {
      navs[i].style.color = '#fff';
      navs[i].addEventListener('mouseover', function () {
        navs[i].style.color = '#b68f2e'
      })

      navs[i].addEventListener('mouseout', function () {
        navs[i].style.color = 'rgba(255, 255, 255, 1)';
      })


    }
    document.querySelector(".logo").setAttribute('src', './img/logo-white.png');
  }

  document.querySelector('.active').style.color = "#b68f2e";
}


