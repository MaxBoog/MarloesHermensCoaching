// hamburger icon animation

const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
	nav.classList.toggle('active');
});

$(document).on("click", "nav", function (e) {
	if ($(e.target).is("a")) {
		nav.classList.toggle('active')
	}
});

// get in touch social button

const floating_btn = document.querySelector('.floating-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});


// particles

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/assets/particles.json', function() {
	console.log('callback - particles.js config loaded');
  });


// jquery easing

jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",easeOutExpo:function(e,n,u,a,s){return n==s?u+a:a*(1-Math.pow(2,-10*n/s))+u}});

$(document).ready(function () {

	$("a").on("click", function (event) {
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			$("html, body").animate(
				{ scrollTop: $(hash).offset().top },
				{
					duration: 800,
					easing: "easeOutExpo",
					queue: false,
					complete: function () {
						window.location.hash = hash;
					}
				}
			);
		}
	});
});

// slides

