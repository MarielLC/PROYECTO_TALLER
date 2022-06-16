// // //----------------------------para el tema eoscuro o claro --------------------------------
// const lightTheme = {
//   '--font-family':' "Quicksand", sans-serif',
//   '--card-width': '12.5rem',
//   '--card-height': '18.75rem',
//  ' --card-transition-duration':'800ms',
//  ' --card-transition-easing': 'ease',
//   '--white':'#ffffff',
// };
// const darkTheme = {
//   '--font-family': '"Quicksand", sans-serif',
//   '--card-width': '12.5rem',
//   '--card-height': '18.75rem',
//   '--card-transition-duration': '800ms',
//   '--card-transition-easing':'ease',
//   '--white':'#ffffff',
// };
// //--------------------boton de modo dia noche abajo ---------------------------
// const boton = document.querySelector(".bubbly-button");
// //detecta si el sistema tiene el modo dark o nigh
// let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
// const addTheme = (theme) => {
//   const styles = document.documentElement.style;
//   const customStyles = Object.keys(theme);
//   for (const style of customStyles) {
//     styles.setProperty(style, theme[style]);
//   }
// };

// const sun = document.querySelector("#sol");
// const moon = document.querySelector("#luna");

// if (darkMode == true) {
//   sun.classList.add('active')
//   moon.classList.remove('active')
// } else {
//   sun.classList.remove('active')
//   moon.classList.add('active')
// }
// boton.addEventListener("click", () => {
//   darkMode = !darkMode;
//   // darkMode ? addTheme(darkTheme) : ;
//   if (darkMode) {
//     addTheme(darkTheme)
//     sun.classList.add('active')
//     moon.classList.remove('active')
//   } else {
//     addTheme(lightTheme)
//     sun.classList.remove('active')
//     moon.classList.add('active')
//   }
// });


//-------------------------efecto del header que se esconde al scrolear---------------
var position = 0;
$(window).scroll(function (e) {
  let $element = $('.header');
  var scrollTop = $(this).scrollTop();
  // let $aside= $('.aside')
  if (scrollTop <= 0) {
    $element.removeClass('hide').removeClass('scrolling');
    // btn_aside.classList.remove('active')
  } else if (scrollTop < position) {
    $element.removeClass('hide');

    // $aside.removeClass('active')
    // btn_aside.classList.remove('active')

  } else if (scrollTop > position) {
    $element.addClass('scrolling');

    // $aside.removeClass('active')
    // btn_aside.classList.remove('active')

    if (scrollTop + $(window).height() >= $(document).height() - $element.height()) {
      $element.removeClass('hide');
      // btn_aside.classList.remove('active')
    } else if (Math.abs($element.position().top) < $element.height()) {
      $element.addClass('hide');
    }
  }
  position = scrollTop;
})

//----------------------------accion boton menu---------------------------------------
// formulario- para buscar(lupa)
let searchForm =document.querySelector(".search-form");
document.querySelector("#search-btn").onclick =()=>{
  searchForm.classList.toggle("active");

shoppingCart.classList.remove("active");
loginForm.classList.remove("active");
navbar.classList.remove("active");
}
// carta de precio
let shoppingCart=document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick =()=>{
shoppingCart.classList.toggle("active");
  // se desactiva
searchForm.classList.remove("active");
loginForm.classList.remove("active");
navbar.classList.remove("active");
}
// usuario-cuenta
let loginForm=document.querySelector(".login-form");
document.querySelector("#login-btn").onclick =()=>{
  loginForm.classList.toggle("active");
  // se desactiva
searchForm.classList.remove("active");
shoppingCart.classList.remove("active");
navbar.classList.remove("active");

}

let navbar = document.querySelector(".navbar");
let btnMenu = document.querySelector(".toggle-button");
const toggleElement = (element, nameClass) => {
	element.classList.toggle(nameClass)
}
btnMenu.addEventListener('click', () => {
  toggleElement(navbar, 'active')
  toggleElement(btnMenu, 'active')
  // se desactivsa
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
})
// 
window.onscroll = () =>{
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
}

const subMenuBtn = document.querySelectorAll(".submenu-btn");
let children=document.querySelector(".menu-item-has-children");
for(let i= 0; i< subMenuBtn.length;i++){
  subMenuBtn[i].addEventListener("click", function(){
    toggleElement(children, 'active')
    if(window.innerWidth <700){
      const subMenu = this.nextElementSibling;
      const height =subMenu.scrollHeight;
      if(subMenu.classList.contains("desplegar")){
        subMenu.classList.remove("desplegar");
        subMenu.removeAttribute("style");

      }else{
        subMenu.classList.add("desplegar");
        subMenu.style.height =height + "px";
      }
    }
  });
}



//--------------------------primer slider automatico--------------------------------
const $sliders1 = document.querySelectorAll('.img')
const nextSlider1 = (sliders1) => {
	const totalSliders1 = sliders1.length - 1
	let indice
	sliders1.forEach((slider1, i) => {
		if (slider1.classList.contains('active')) {
			slider1.classList.remove('active')
			indice = i + 1
			if (indice > totalSliders1) indice = 0
		}
	})
	sliders1[indice].classList.add('active')
}

const prevSlider1 = (sliders1) => {
	const totalSliders1 = sliders1.length - 1
	let indice
	// bloqueo 
	sliders1.forEach((slider1, i) => {
		// if (slider1.classList.contains('active')& i>0) {//bloqueado remplaza por el de abajo
      if (slider1.classList.contains('active')) {
			slider1.classList.remove('active')
			indice = i - 1
			if (indice < 0) indice = totalSliders1
		}
	})
	sliders1[indice].classList.add('active')
}
// izquierda
// $prev1.addEventListener('click', () => {
// 	clearInterval(runSlider)

// 	nextSlider1($sliders1)

// 	runSlider = setInterval(() => {
// 		nextSlider1($sliders1)
// 	}, 5000)
// })
// // derecha
// $next1.addEventListener('click', () => {
// 	nextSlider1($sliders1)
// })

//tiempo del slider automatico
let runSlider = setInterval(() => {
	nextSlider1($sliders1)
}, 5000)
document.onload = runSlider

//--------------------para el segundo slider que usa librerias---------------
