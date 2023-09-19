let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

  var x = document.getElementById("login-form");
  var y = document.getElementById("register-form");
  var z = document.getElementById("pointer-btn");
  var l = document.getElementById("login");
  var r = document.getElementById("register");
  var ac = document.getElementById("action_title");

		function register(){
      x.style.left = "-450px";
			y.style.left = "25px";
			z.style.left = "215px";
			l.style.color = "#848484";
			r.style.color = "#6a0f86";
			ac.textContent = "Registro";
		}

		function login(){
			x.style.left = "25px";
			y.style.left = "450px";
			z.style.left = "30px";
			l.style.color = "#6a0f86";
			r.style.color = "#848484";
			ac.textContent = "Inicio";
		}		
