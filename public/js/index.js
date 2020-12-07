$(document).ready(function() {

	async function updateFavorite(action, imageUrl, keyword) {
		let url = `/api/updateFavorites?action=${action}&imageUrl="${imageUrl}&keyword=${keyword}`;
		await fetch(url);
	};

	$(".favoriteIcon").on("click", function() {

		let queryString = window.location.search;
		let urlParams = new URLSearchParams(queryString);
		let keyword = urlParams.get("keyword");

		let imageUrl = $(this).prev().attr("src");

		console.log("Event entered");

		if ($(this).attr("src") == "img/favorite.png") 
		{
			$(this).attr("src", "img/favorite_on.png");
			updateFavorite("add", imageUrl, keyword);
		}
		else
		{
			$(this).attr("src", "img/favorite.png");
			console.log("Unfavored");
			updateFavorite("delete", imageUrl);
		}
	
	}); // favoriteIcon

	//Event for dynamic content generated when clicking on a keyword    
	$("#favorites").on("click", ".favoriteIcon", function(){
					
		let favorite = $(this).prev().attr("src");
				
		if ($(this).attr("src") == 'img/favorite.png'){             
		$(this).attr("src","img/favorite_on.png");
		updateFavorite("add",favorite, $("#keywordSelected").val());
	} else {               
		$(this).attr("src","img/favorite.png");
		updateFavorite("delete",favorite);
		}
	});//.favoriteIcon event listener
  

	$(".keywordLink").on("click", async function(){

		let keyword =  $(this).html().trim(); 
		$("#keywordSelected").val(keyword);
		let response = await  fetch(`/api/getFavorites?keyword=${keyword}`);
		let data = await response.json();
	  
		$("#favorites").html("");
		let htmlString = "";
	 
	 
		data.forEach(function(row){
		 htmlString += "<img class='image' src='"+row.imageUrl+"' width='200' height='200'>";
		 htmlString += "<img class='favoriteIcon' src='img/favorite_on.png' width='20'>";
	  });
	 
	 
	  $("#favorites").append(htmlString);
	  
	 });//keywordLink
	 

});