//Object of Projects details for modal



var projectDetails = [
	{
		id: "0",
		name: "Piknix",
		heading: "Software Developer (full time) <br> Javascript, NodeJs, ExpressJs,HTML5, MySql, Bootstrap 4, Sequelize, Passport, Nginx, Visual Code, Digital Ocean, Docker, GoDaddy",
		description: "Piknix is an e-commerce marketplace for shopping local groceries online. It allows local merchants to register and sell their products. I am working as a software developer with a team of 2.<br>-> Contributed in all phases of the development lifecycle <br>-> Designed and developed views/templates on top of javascript, using the ejs template engine <br>-> Web page development from design to test and up to production deployment. <br>-> Worked on design(database schema) and implementation of various REST API's using ice factory pattern <br>-> Created and implemented a custom CSS grid system, with CSS media queries for mobile responsiveness. <br>-> Created HTML email templates and newsletters for e-mail marketing campaigns.<br>-> Integrated PayPal payment gateway, google API's, passport authentication and authorization, i18n localization, send grid email API, Twilio SMS API <br>-> Worked with Express MVC framework for NodeJS to create the routes required for delivering data to the front end. <br>-> Created docker image for configuration simplifications <br>-> Server setup using nginx as web server and added SSL certificates <br>-> Building service components and complex business logic <br>-> Used MySQL for database and Sequelize ORM <br>-> Did on site SEO implementations to increase traffic to client websites <br>-> Analyzed traffic and made necessary changes for a better user experience",
		demo: "https://www.piknix.com",
		code: "https://www.piknix.com",
		image: "piknix.png",
		isVisitAvailable: true,
		isCodeAvailable: false,
	},
	{
		id: "1",
		name: "ReactMania",
		heading: "Website | ReactJs, react-hooks, javaScript, bootstrap, vs Code, npm",
		description: "ReactMania is a fully responsive web app developed using famous javaScript framework ReactJs. It consists of pool of small to medium size projects developed utilizing react-hooks functions.	<br>CSS framework Bootstrap 4 is used for developing responsive layouts(Bootstrap Grid System) and  mobile- first website. ",
		demo: "https://optimistic-wing-69cbaa.netlify.app/",
		code: "https://github.com/Gilpix/ReactMania",
		image: "react_mania.png",
		isVisitAvailable: true,
		isCodeAvailable: true,
	},

	{
		id: "2",
		name: "Sani Amigo",
		heading: "Freelance Project from 4S Innovative Solutions Inc. <br> Javascript, HTML5, Bootstrap 4, NodeJs, Express, Nginx, VisualCode, Docker, GoDaddy",
		description: "saniamigo.com is a promotional website for a smart personal device that dispenses sanitizer named Sani-Amigo by 4S Innovative Solutions Inc. <br>- Design and developed responsive application using mobile first design approach <br>- Created HTML email templates and newsletters for e-mail marketing campaigns <br>- Server setup using nginx as webserver and added Let's Encrypt SSL certificates <br>- Web page development from design to test and up to production deployment.",
		demo: "https://saniamigo.com/",
		code: "https://saniamigo.com/",
		image: "saniamigo.png",
		isVisitAvailable: true,
		isCodeAvailable: false,
	},

	{
		id: "3",
		name: "Yelp Camp",
		heading: "Website | Javascript, NodeJs, ExpressJs, MongoDb, AWS Cloud9, NPM, Mongoose",
		description: "Responsive web design to display list of campgrounds to the users <br>User authentication (Login/Register/Logout) using passport tool <br> User authorization for adding/updating/deleting campground or comments <br>Restful routing according to REST standards <br>AWS Cloud9 IDE along with MongoDb for development and data storage <br>Backend implementation with expressJs, NodeJs and mongoose.",
		demo: "https://gilpix.github.io/My-Portfolio/",
		code: "https://github.com/Gilpix/YelpCamp",
		image: "yelpcamp.png",
		isVisitAvailable: false,
		isCodeAvailable: true,
	},
	{
		id: "4",
		name: "Search Engine",
		heading: "Website | ReactJs, NodeJS, Rest API, Bootstrap, Javascript, html5, css3, VS Code, NPM",
		description: "Fullstack web app (React, Express, NodeJS) providing a persistent search engine for searching any word from any type of text file(small or big file). It comprises two parts, a web-based user interface(using ReactJs) and a server component(using NodeJS) that exposes a REST API that provides search results retrieved from a corpus of text..",
		demo: "https://optimistic-wing-69cbaa.netlify.app/",
		code: "https://github.com/Gilpix/FullStackWebDeveloperChallenge",
		image: "search_engine.png",
		isVisitAvailable: false,
		isCodeAvailable: true,
	},
	{
		id: "5",
		name: "RESTful Blog",
		heading: "Website : Javascript, NodeJs, ExpressJs, Sementic UI, MongoDb, AWS Cloud9",
		description: "A RESTful routes blog for creating, reading, updating and deleting blog post <br>Responsive web design using semantic ui <br>AWS Cloud9 IDE and MongoDb for development and data storage. ",
		demo: "https://gilpix.github.io/My-Portfolio/",
		code: "https://github.com/Gilpix/RESTFulBlog",
		image: "RestFul Blog.png",
		isVisitAvailable: false,
		isCodeAvailable: true,
	},
	{
		id: "6",
		name: "My Portfolio",
		heading: "Kuldeep Singh Software Developer Portfolio Website",
		description: "KulArtist is an software developer portfolio static website for me(Kuldeep Singh). Designed and written in html, css and javascript. Used two famous librearies <strong>Bootstrap  4.0</strong> and <strong>jQuery</strong> for more effects and designing.",
		demo: "https://gilpix.github.io/My-Portfolio/",
		code: "https://github.com/Gilpix/My-Portfolio",
		image: "myportfolio.png",
		isVisitAvailable: true,
		isCodeAvailable: true,
	},
	{
		id: "7",
		name: "Tekhub",
		heading: "Website : TekHub | Html, Css, Javascript, jQuery, Bootstrap 4",
		description: "It is a front-end design of product lending system  used by the students of CEGEP de la gaspesie to borrow devices  like laptops, lan cables, etc. from the college.<br>Responsive web design for students to borrow item from college <br> Forms(signIn, signUp) validation <br> jQuery and bootstrap libraries included for better design and effects. ",
		demo: "https://gilpix.github.io/TekHub-Lending-Web-Application/",
		code: "https://github.com/Gilpix/TekHub-Lending-Web-Application",
		image: "tekhubweb.png",
		isVisitAvailable: true,
		isCodeAvailable: true,
	},
	{
		id: "8",
		name: "Tekhub",
		heading: "Android Lending App : TekHub | Android, Java, WebApi, AmazonRDS MySql",
		description: "TekHub application is  used by the students of CEGEP de la gaspesie to borrow devices  like laptops, lan cables, etc. from the college.<br>Achieved login validation, registration of user and admin<br>Web calls for data exchange between app and AmazonRDS Mysql database<br>Database connectivity between AmazonRDS - Netbeans(webcall) - Android<br>Added features to add item in waiting list, borrow items, filter items list, give feedback/ratings and updatethe database accordingly.<br>Used Agile methodology-SCRUM to develop the app and created SRS documentation. <br><br><strong>Check</strong> : <a class='modal-res-links' target='_blank' href='assets/res/LendSystemIteration3.pdf' download>SRS-Document</a>  |  <a class='modal-res-links' target='_blank' href='assets/res/TekhubFinalPresentation.pdf' download>Presentation</a>  |  <a class='modal-res-links' target='_blank' href='https://github.com/Gilpix/TekHub-WebCalls' download>Web-Api</a>",
		demo: "https://github.com/Gilpix/TekHub",
		code: "https://github.com/Gilpix/TekHub",
		image: "tekhubmobile.png",
		isVisitAvailable: false,
		isCodeAvailable: true,
	},
	{
		id: "9",
		name: "Food Buddy",
		heading: "Android App : FoodBuddy | Android, Java, Firebase, Xampp, MySql",
		description: "The FoodBuddy application will provide its user the ability to select a restaurant and search for a buddy/partner who can join him/her for food.<br>Developed new user registration along with reset password functionality.<br> Displayed list of available users in recycler view from mysql db using xampp server and phpMyadmin web application. <br>Send invitation(notification) to other user using Firebase Cloud Messaging(FCM) service. <br> Developed SRS document for app development. <br><br><strong>Check</strong> : <a class='modal-res-links' target='_blank' href='assets/res/foodbuddySrs.pdf' download>SRS-Document</a>",
		demo: "https://github.com/Gilpix/Food-Buddy",
		code: "https://github.com/Gilpix/Food-Buddy",
		image: "foodbuddy.png",
		isVisitAvailable: false,
		isCodeAvailable: true,
	},
	{
		id: "10",
		name: "Car Market",
		heading: "Website design - html | css",
		description: "Car Market is a front-end design of car selling web application.<br>Fully designed website includes home page, contact page, signIn/signUp page and car display page.",
		demo: "https://gilpix.github.io/CarMarket/index.html",
		code: "https://github.com/Gilpix/CarMarket",
		image: "carmarket.png",
		isVisitAvailable: true,
		isCodeAvailable: true,
	},
	{
		id: "11",
		name: "Traffic Road Sign Canada",
		heading: "Android Traffic Road Sign Canada App | Android, Google Play+Console",
		description: "It is a theory and quiz based android app for users to prepare for Canadian driving test. <br> Uploaded on Google play store for better understanding of the insights of app and users using Google developer play console. ",
		demo: "https://play.google.com/store/apps/details?id=com.vid_lancer.trafficroadsignscanada",
		code: "https://github.com/Gilpix/TrafficRoadSignsCanada",
		image: "traffic.png",
		isVisitAvailable: true,
		isCodeAvailable: true,
	},
	{
		id: "12",
		name: "Color Guessing Game",
		heading: "Web Application | javascript, css, bootstrap4, html",
		description: "Web application using Javascript CSS HTML - Wher user can select any color square from the given squares depending on the RGB color value shown. If user guesses right color square, user wins else the selected square will dissappear and now user can guess from the remaining squares. Ther will be two mode easy mode with just there squares and hard mode with six squares.",
		demo: "https://gilpix.github.io/ColorGuessingGame/",
		code: "https://github.com/Gilpix/ColorGuessingGame",
		image: "colorguess.png",
		isVisitAvailable: true,
		isCodeAvailable: true,
	}, {
		id: "13",
		name: "To Do List",
		heading: "Web Application | jQuery, CSS, HTML",
		description: "Resposive web application ToDoList using jQuery, CSS and HTML, where user can add item to list, remove item from list or mark completed items.",
		demo: "https://gilpix.github.io/ToDoList/",
		code: "https://github.com/Gilpix/ToDoList",
		image: "todolist.png",
		isVisitAvailable: true,
		isCodeAvailable: true,
	},
	{
		id: "14",
		name: "Travel With Us",
		heading: "Android App Design | Prototype : JustInmind software",
		description: "Travel With Us is an android application screens design and prototype for bus booking system.<br>It is benificial for two type of travellers Intercity and Intracity. User can easily book tickets and can also cancel them if needed.<br>Intercity Bus Booking : In this category user can use this app to travel within the city.<br>Intracity Bus Booking : In this category user can use this app to travel from one city to another.   <br><br><strong>Check</strong> : <a class='modal-res-links' target='_blank' href='assets/res/travelWithUs.docx' download>Screen-Flow</a>",
		demo: "https://gilpix.github.io/TekHub-Lending-Web-Application/",
		code: "https://github.com/Gilpix/TekHub-Lending-Web-Application",
		image: "travel.png",
		isVisitAvailable: false,
		isCodeAvailable: false,
	},
	{
		id: "15",
		name: "Share Expenses",
		heading: "Android App Design | Prototype : Justinmind software",
		description: "Share Expenses is an android application design which is used to calculate expenses for single user and split expenses between two or more users.<br><strong>Features :</strong><br>Calculate weekly/monthly/yearly expenses of single user<br>Split expenses between users<br>Remind other users to clear out their dues<br>Receive notification for any updation/creation/deletion of bill<br>Add new friends or create new groups easily<br>Can add bills when offline  <br><br><strong>Check</strong> : <a class='modal-res-links' target='_blank' href='assets/res/Share Expense ScreenFlowDiagram.pdf' download>Screen-Flow</a>  |  <a class='modal-res-links' target='_blank' href='assets/res/ShareExpensesPresentation.pdf' download>Presentation</a>",
		demo: "https://gilpix.github.io/TekHub-Lending-Web-Application/",
		code: "https://github.com/Gilpix/TekHub-Lending-Web-Application",
		image: "shareexpenses.png",
		isVisitAvailable: false,
		isCodeAvailable: false,
	},
	{
		id: "16",
		name: "Pro Quiz",
		heading: "Android Quiz application | Android programming, xml, google play store",
		description: "Pro Quiz is a free game to let you enjoy guessing lots of question, picture and audio from different categories like sports, logos, music, nature, monuments etc. Pro Quiz is a simple game based on the users general knowledge and on the basis of user knowledge, user is divided into for groups Poor, Average, Good and Excellent.",
		demo: "https://play.google.com/store/apps/details?id=com.gilpix.test",
		code: "https://github.com/Gilpix/ProQuiz",
		image: "proquiz.png",
		isVisitAvailable: true,
		isCodeAvailable: true,
	}
];


var tekHubResource = "<br><br><strong>Check</strong> : <a class='modal-res-links' target='_blank' href='assets/res/LendSystemIteration3.pdf' download>SRS-Document</a>  |  <a class='modal-res-links' target='_blank' href='assets/res/TekhubFinalPresentation.pdf' download>Presentation</a>";


//Get value for selected project from ProjectDetails object
function showModal(no) {
	$(".card-button").click(function () {
		let id = projectDetails[no].id,
			name = projectDetails[no].name,
			shortDesc = projectDetails[no].heading,
			description = projectDetails[no].description,
			demo = projectDetails[no].demo,
			code = projectDetails[no].code,
			image = projectDetails[no].image,
			isVisitAvailable = projectDetails[no].isVisitAvailable,
			isCodeAvailable = projectDetails[no].isCodeAvailable,
			isActive = projectDetails[no].isActive;
		// console.log("isVisitAvailable 1 : " + isVisitAvailable)

		modal(id, name, shortDesc, description, demo, code, image, isVisitAvailable, isCodeAvailable, isActive);
	})
}

//Show Modal for selected project
function modal(id, name, shortDesc, description, demo, code, image, isVisitAvailable, isCodeAvailable, isActive) {
	$(".modal-heading").text(name);
	$(".modal-short-text").html(shortDesc);
	$(".modal-desc-text").html(description);
	$(".project-demo").attr("href", demo);
	$(".project-code").attr("href", code);
	$(".modal-image").attr("src", "assets/res/" + image);

	if (!isVisitAvailable && !isCodeAvailable) {
		$(".project-code").addClass("hide-cards");
		$(".project-demo").addClass("hide-cards");
	}
	else if (!isVisitAvailable) {
		$(".project-code").removeClass("hide-cards");
		$(".project-demo").addClass("hide-cards");

	}
	else if (!isCodeAvailable) {
		$(".project-demo").removeClass("hide-cards");
		$(".project-code").addClass("hide-cards");
	}
	else {
		$(".project-code").removeClass("hide-cards");
		$(".project-demo").removeClass("hide-cards");
	}
	$(".myModal").modal('show');
}


//Object of Projects Card details
var projectInfo = [

	{
		id: "0",
		title: "piknix",
		languages: "Software Developer at piknix",
		category: "web",
		icon: "<i class='fas fa-2x fa-shopping-bag'></i><br>",
		cardImage: "card-img-web",
		isActive: true
	},
	{
		id: "1",
		title: "ReactMania",
		languages: "reactJS/css3/html5",
		category: "web",
		icon: "<i class='fab fa-2x fa-react'></i><br>",
		cardImage: "card-img-web",
		isActive: true
	},
	{
		id: "2",
		title: "Sani Amigo",
		languages: "Project by 4S Innovative Solutions Inc.",
		category: "web",
		icon: "<i class='fas fa-2x fa-wine-bottle'></i><br>",
		cardImage: "card-img-web",
		isActive: true
	},

	{
		id: "3",
		title: "Yelp Camp",
		languages: "mongoDb/expressJs/nodeJs",
		category: "web",
		icon: "<i class='fa fa-2x fa-campground'></i><br>",
		cardImage: "card-img-web",
		isActive: true
	},
	{
		id: "4",
		title: "Search Engine",
		languages: "reactJs/expressJs/nodeJs",
		category: "web",
		icon: "<i class='fas fa-2x fa-search'></i><br>",
		cardImage: "card-img-web",
		isActive: true
	},

	{
		id: "5",
		title: "RESTful Blog",
		languages: "mongoDb/expressJs/nodeJs",
		category: "web",
		icon: "<i class='fab fa-2x fa-blogger'></i><br>",
		cardImage: "card-img-web",
		isActive: true
	},
	{
		id: "6",
		title: "My Portfolio",
		languages: "html/css/jQuery",
		category: "web",
		icon: "<i class='far fa-2x fa-address-card'></i><br>",
		cardImage: "card-img-web",
		isActive: true
	},
	{
		id: "7",
		title: "TekHub",
		languages: "html/css/javascript",
		category: "web",
		icon: "<i class='fas fa-2x fa-shopping-basket'></i><br>",
		cardImage: "card-img-web",
		isActive: true
	},
	{
		id: "8",
		title: "TekHub",
		languages: "java/android/mysql",
		category: "mobile",
		icon: "<i class='fas fa-2x fa-utensils'></i><br>",
		cardImage: "card-img-mobile",
		isActive: true
	},
	{
		id: "9",
		title: "Food Buddy",
		languages: "android/xml/mysql",
		category: "mobile",
		icon: "<i class='fas fa-2x fa-shopping-basket'></i><br>",
		cardImage: "card-img-mobile",
		isActive: true
	},

	{
		id: "10",
		title: "Car Market",
		languages: "html/css",
		category: "web",
		icon: "<i class='fas fa-2x fa-car-side'></i><br>",
		cardImage: "card-img-web",
		isActive: false
	},
	{
		id: "11",
		title: "Traffic Road Sign",
		languages: "java/android/xml",
		category: "mobile",
		icon: "<i class='fas fa-2x fa-traffic-light'></i><br>",
		cardImage: "card-img-mobile",
		isActive: true
	},
	{
		id: "12",
		title: "Color Guess",
		languages: "html/css/javascript",
		category: "web",
		icon: "<i class='fas fa-2x fa-gamepad'></i><br>",
		cardImage: "card-img-web",
		isActive: true
	},
	{
		id: "13",
		title: "ToDo List",
		languages: "jQuery/css/html",
		category: "web",
		icon: "<i class='fas fa-2x fa-list-ul'></i><br>",
		cardImage: "card-img-web",
		isActive: true
	},
	{
		id: "14",
		title: "Travel with us",
		languages: "justinmind/design/prototype",
		category: "other",
		icon: "<i class='fas fa-2x fa-bus'></i><br>",
		cardImage: "card-img-others",
		isActive: true
	},
	{
		id: "15",
		title: "Share Expenses",
		languages: "justinmind/ui design",
		category: "other",
		icon: "<i class='fas fa-2x fa-hand-holding-usd'></i><br>",
		cardImage: "card-img-others",
		isActive: true
	},
	{
		id: "16",
		title: "Pro Quiz",
		languages: "java/android/play-store",
		category: "mobile",
		icon: "<i class='far fa-2x fa-question-circle'></i><br>",
		cardImage: "card-img-mobile",
		isActive: true
	}

];


//create card for each project dynamically
$.each(projectInfo, function (i) {
	let index = parseInt(projectInfo[i].id);
	var temp = "<div class='" + projectInfo[index].category + " all col-sm-12 col-md-6 col-lg-4 px-2 py-2'> <div class='card " + projectInfo[index].cardImage + "'>"
		+ "<p class='text-center project-title'>" + projectInfo[index].icon + projectInfo[index].title + "</p>"
		+ "<div id='card3' class='card-img-overlay pt-5'> <div class='text text-center text-content-card'>"
		+ "<p class='card-titlee'>" + projectInfo[index].title + "</p>"
		+ "<p class='card-texte mb-5'>" + projectInfo[index].languages + "</p>"
		+ " <a href='#/' class='card-button' onclick='showModal(" + index + ")' >Learn More</a>" + "</div>" + "</div>" + "</div>"
	if (projectInfo[i].isActive)
		$("#myProject").append(temp);

	$(".card-button").on("click", function () {
		if (projectInfo[index].isActive) {
			console.log(i + " - INDEX : " + index);
			showModal(index);
		}


	});
});

// Hide/Stop scrolling when Modal is open
$(".myModal").on("show", function () {
	$("body").addClass("modal-open");
}).on("hidden", function () {
	$("body").removeClass("modal-open")
});


//Navbar navigation control
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}

//Add active class to current Navigation Link
$("#navbar a").click(function () {
	$("a").removeClass("active");
	$(this).addClass("active");
});
$(".all-projects-container a div").click(function () {
	$("div").removeClass("active-projects");
	$(this).addClass("active-projects");
});



$(document).ready(function () {

	//Move Profile Image horizontally	
	// $("#profile-image").click(function () {
	// 	$("#profile-image").effect("shake", { times: 2, distance: 180 }, 8000);
	// });

	//add shock wave effect
	$("#profile-image").click(function () {
		$("#profile-image").toggleClass("is-active");
	});

	//Show and hide content of Home Page using effects
	// $("#start").click(function () {
	// 	$("#cont").toggle("fade", { times: 3 }, "slow", function () {
	// 		$("#cont2").delay(200).toggle("fade", { times: 3 }, "slow");
	// 		$("#cont3").delay(1000).toggle("drop", "slow");

	// 	});
	// });

	//Move Profile Image Vertically
	// $('#let').click(function () {
	// 	$("#profile-image").effect("bounce", { times: 19, distance: 90 }, 8000);
	// });
});



//Filter Projects 
$("#all-projects").click(function () {
	$(".web").removeClass("hide-cards");
	$(".mobile").removeClass("hide-cards");
	$(".other").removeClass("hide-cards");
});

$("#web-projects").click(function () {
	$(".web").removeClass("hide-cards");
	$(".mobile").addClass("hide-cards");
	$(".other").addClass("hide-cards");
});

$("#mobile-projects").click(function () {
	$(".mobile").removeClass("hide-cards");
	$(".web").addClass("hide-cards");
	$(".other").addClass("hide-cards");
});

$("#other-projects").click(function () {
	$(".other").removeClass("hide-cards");
	$(".mobile").addClass("hide-cards");
	$(".web").addClass("hide-cards");
});

$('modal').on('shown.bs.modal', function () {
	$('.modal').trigger('focus')
})


//hide project overlay and show lear more button with effect
$(".card-img-overlay").each(function () {
	$(this).hover(function () {
		$(this).addClass("card-background");
		$(this).find(".text").removeClass("text-content-card");
	},
		function () {
			$(this).removeClass("card-background");
			$(this).find(".text").addClass("text-content-card");
		}
	);
});

$(".card-img-overlay").each(function () {
	$(this).hover(function () {
		$(this).find(".card-titlee").slideDown('slow', function () {
			$(this).addClass("card-background");
			$(this).find(".text").removeClass("text-content-card");
		});
	},
		function () {
			$(this).find(".card-titlee").slideUp('slow', function () {
				$(this).removeClass("card-background");
				$(this).find(".text").removeClass("text-content-card");
			});
		});
});


$(".mobile-nav-toggle").click(function (e) {
	$("body").toggleClass("mobile-nav-active");
	$(this).toggleClass("bx-menu");
	$(this).toggleClass("bx-x");
});


  /**
   * Home text type effect
   */
  var typed = document.querySelectorAll(".typed")[0];
  console.log(typed)
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }