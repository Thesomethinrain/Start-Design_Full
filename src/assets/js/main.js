$(document).ready(function() {
  /* Preload
========================================================================== */

  $("#status").fadeOut(); // will first fade out the loading animation
  $("#preloader")
    .delay(350)
    .fadeOut("slow"); // will fade out the white DIV that covers the website.
  $("body")
    .delay(350)
    .css({ overflow: "visible" });

  /* Affix Nav
========================================================================== */

  $(window).scroll(function() {
    //Au scroll dans la fenetre on déclenche la fonction
    if ($(this).scrollTop() > 50) {
      //si on a défilé de plus de 300px du haut vers le bas
      $("#navfix, #navfix-bottom").addClass("affix"); //on ajoute la classe "fixNavigation" à <div id="navigation">
    } else {
      $("#navfix, #navfix-bottom").removeClass("affix"); //sinon on retire la classe "fixNavigation" à <div id="navigation">
    }
  });

  /* Affix Nav
========================================================================== */

  $("a#video").fancybox({
    titleShow: false, // Legende presente ou non
    titlePosition: "over", // Position de la legende
    transitionIn: "fade", // Type de transition a l'ouverture
    transitionOut: "fade", // Type de transition apres fermeture
    speedIn: 600, // Duree de l'ouverture
    speedOut: 200, // Duree de la fermeture
    overlayShow: true // apparition du voile noire ou non
  });

  $("a.ligne3").fancybox({
    titlePosition: "over",
    transitionIn: "fade",
    transitionOut: "fade",
    speedIn: 600,
    speedOut: 200,
    overlayShow: true // voile noir ou non
  });

  /* Link Down
========================================================================== */

  $(".link-down, .link-up").on("click", function() {
    // Au clic sur un élément
    var page = $(this).attr("href"); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $("html, body").animate({ scrollTop: $(page).offset().top }, speed); // Go
    return false;
  });

  /* FancyBox
========================================================================== */

  $("[data-fancybox]").fancybox({
    buttons: ["slideShow", "fullScreen", "thumbs", "close"],
    //animationEffect : "zoom",
    transitionEffect: "slide",
    transitionDuration: 366
  });

  /* Mobile Nav
========================================================================== */

  $("#burger").click(function(e) {
    e.preventDefault();
    $("body").toggleClass("navOpen");
  });

  /* Parralaxe
========================================================================== */

  $("#wrap").parallax("center", 0.6, 0.5, true);
  //$('#section-2').parallax("center", 0.7, 2, true);
  //$('#section-3').parallax("center", -0.7, 0.8, true);
  //$('#section-4').parallax("center", 0.9, 0.1, true);

  /* Masonry
========================================================================== 

$('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      //columnWidth: 200,
      gutter: 15
    });
*/
  /* Isotope
   ========================================================================== */

  // cache container
  var $container = $(".masonry-container");
  // initialize isotope
  $container.isotope({
    masonry: {
      itemSelector: "article",
      //columnWidth: 200,
      gutter: 15
    }
  });

  // filter items when filter link is clicked
  $("#filters li").click(function() {
    var selector = $(this).attr("data-filter");
    $container.isotope({ filter: selector });
    return false;
  });

  /* Fade Gallery Actu 
========================================================================== */

  //$('.fade-effect')
  //#section-2 .grid-item main

  $("a .box, a .flatbox, .link-down, .link-bottom")
    //.fadeTo(100, 0.6)

    .mouseenter(function() {
      $(this).fadeTo("fast", 0.6);
    })

    .mouseleave(function() {
      $(this).fadeTo("slow", 1);
    });

  /* Modal
========================================================================== */

  //$('.modal h2').hide();
  // $('.modal p').hide();
  $(".modal").hide();

  $(".news, .info-date").each(function() {
    $(this).click(function() {
      $modal = $(this).find(".modal");
      $modal.show();
      //$(".modal h2").delay(500).fadeIn(200, function(){
      //$(".modal p").fadeIn(200);
      //});
    });
  });
  $(".modal").click(function() {
    $(".modal").fadeOut();
  });

  /* Accordeon
========================================================================== */

  var titre = $("#accordeon-jquery li.titre");
  var contenu = $("#accordeon-jquery li.contenu");

  //titre.first().addClass('active').next().slideDown('normal');

  //titre.on('click', function(){
  titre.click(function() {
    if ($(this).attr("class") != "titre active") {
      contenu.slideUp(1000, "easeOutBack");
      $(this)
        .next()
        .stop(true, true)
        .slideDown(1000, "easeOutBack");
      titre.removeClass("active");
      $(this).addClass("active");
    } else {
      $(this)
        .next()
        .stop(true, true)
        .slideUp(1000, "easeOutBack");
      $(this).removeClass("active");
    }
  });
});
