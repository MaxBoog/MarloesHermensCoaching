
$(document).on("click", ".navbar-collapse.in", function (e) {
	if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
		$(this).collapse("hide");
	}
});

// function to make navbar smaller when scrolling

$(window).scroll(function () {
	if ($(document).scrollTop() > 50) {
		$("nav").addClass("shrink");
	} else {
		$("nav").removeClass("shrink");
	}
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
