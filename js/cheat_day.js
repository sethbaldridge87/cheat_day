$(document).ready(function(){
	// Index
	$("#greeter_slide span").animate({opacity:'1',left:'-100px'}, 1000);
	$("#greeter_slide img").animate({opacity:'1',left:'420px'}, 1000);
	$("#greeter_slide p").animate({opacity:'1', top: '200px'}, 2000);
	// Image Gallery
	$("#image_gallery img").attr('data-toggle','modal');
	$("#image_gallery img").attr('data-target','#gallery_modal');
	$("#image_gallery img").click(function(){
		var source = $(this).attr('src');
		$('#gallery_modal img').attr('src',source);
	});
	// Slick Carousel
	$('#slick_slide').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true
				}
			}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});
	
	var deserts = ["Cupcakes ", " Brownies ", "Cakes", "Cookies", "Bundt Cake", "Blondies", "Cream Cheese Frosting", "Chocolate Frosting", "Coconut Frosting"];
                var queryURL = "https://api.edamam.com/search?q=" + deserts + "&app_key=f104c4b979a95ae85e141313a0e2cc82&app_id=797b9472";
                var search = "";
                $(document).ready(function () {
                    showButtons();
                    // Function for displaying movie data
                    function showButtons() {
                        // Deleting the movies prior to adding new movies
                        // (this is necessary otherwise you will have repeat buttons)
                        $("#buttons-view").empty();
                        // Looping through the array of foods at cheatday
                        for (var i = 0; i < deserts.length; i++) {
                            // Creates  button tag
                            var button = $("<button>");
                            // Adding a class to our arrays buttons
                            button.addClass("array-btn");
                            // Adding a data-attribute
                            button.attr("data-name", deserts[i]);
                            // Providing the initial button text
                            button.text(deserts[i]);
                            // Adding the button to the buttons-view div
                            $("#buttons-view").append(button);
                        }
                    };
                    //console.log(deserts);
                    //console.log(queryURL);
                    $(document).on("click", "button", function () {
                        food = $(this).attr("data-name");
                        var queryURL = "https://api.edamam.com/search?q=" + food + "&app_id=797b9472&app_key=f104c4b979a95ae85e141313a0e2cc82&from=0&to=2"
                        $.ajax({
                            url: queryURL,
                            method: "GET"
                            // store data
                        }).then(function (response) {
                            var firstResult = response.hits[0];
                            var calories = firstResult.recipe.calories;
                            var yield = firstResult.recipe.yield;
                            var serving = Math.round(calories / yield);
                            $("#buttons").html('Calories =' + "<div>" + serving + "</div>")
                            picture();
                            //console.log(serving);
                            //console.log(calories);
                            //console.log(response);
                            //console.log(firstResult);
                        })
                        //console.log(search);
                        //console.log(cheatDay);
                    })
                })
});	