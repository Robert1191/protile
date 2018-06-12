
$(document).ready(function(){
    var staticLink = "../static/MainWebApp/";

    var screenWidth = $( document ).width();
    var isHiddenMenuOpen = false;
    $('#hiddenMenuButton').on( "click", function(e) {
        if(!isHiddenMenuOpen){
            openHiddenMenu();
        }else{
            closeHiddenMenu();
        }
    });

    $('#hiddenLayer').on( "click", function(e) {
            closeHiddenMenu();
    });

    $('#closeMenuButton').on( "click", function(e) {
         if(isHiddenMenuOpen){
            closeHiddenMenu();
        }
    });

    function openHiddenMenu(){
        isHiddenMenuOpen = true;
        $('.responsiveMainMenuBar').css("left", 0);
        $('.mainContent').css("position", "fixed");
        $('#hiddenLayer').css("visibility", "visible");
    }

    function closeHiddenMenu(){
        $('.responsiveMainMenuBar').css("left", -screenWidth);
        $('.mainContent').css("position", "absolute");
        $('#hiddenLayer').css("visibility", "hidden");
        isHiddenMenuOpen = false;
    }

  /* Set selected side bar button*/
    var i;

    for (i = 0; i < $(".buttonSection").children().length; i++) {
        var className = (($(".buttonSection").children()[i]).className).replace("Selected","");
        ($(".buttonSection").children()[i]).className = className;
        if($($(".buttonSection").children()[i]).attr('href') == $.trim($("#hiddenCurrentUrl").text())){
            ($(".buttonSection").children()[i]).className = className + "Selected";
        }
    }

   /* Switch page function*/
    switch ($.trim($("#hiddenCurrentUrl").text())) {
        case '/':
          index();
          break;

        case '/about/':
          about();
          break;

        case '/contact/':
          contact();
          break;

        case '/service/':
          service();
          break;
    }

    function changePageTitle(name){
        document.title = name;
    }

    /* Index page function*/
    function index(e){

        /* Change page titles and background*/
        changePageTitle("Home - Protile");

        createSlideshowIndicatorsGallery("Gallery of works", 1 , 3);
    }

    /* About page function*/
    function about(e){

        /* Change page titles and background*/
        changePageTitle("About - Protile");

    }


    /* Contact page function*/
    function contact(e){

        /* Change page titles and background*/
        changePageTitle("Contact - Protile")

    }

    $('#emailContact form').submit(function() {
            $('.loadingBackground').css("visibility", "visible");
            $.ajax({
                data: $(this).serialize(),
                type: 'POST',
                url: '/contact/',
                success: function(response) {
                    $('.loadingBackground').css("visibility", "hidden");
                    if (response == "success"){
                        createPopUpMessage("accepted","Message sent successfully","Thank you very much for getting in touch with us.\nWe are trying to get back to you as soon as possible.");
                    }else{
                        createPopUpMessage("failed","Message failed to send","We are sorry that we can not process your message right now.\nPlease try again later.");
                    }
                }
            });
            return false;
     });


    /* Service page function*/
    function service(e){

        /* Change page titles and background*/
        changePageTitle("Service - Protile")

        createSlideshowIndicatorsGallery("Gallery of works", 1 , 3);
    }


    /*Create Functions*/

    function createSlideshowIndicatorsGallery(title, min, max){

        if(title == ""){
            $('.galleryTitle').css("display", "none");
        }else{
            $('.galleryTitle')[0].innerHTML = '<h1 class="h1 galleryTitle">' + title + '</h1>';
        }

        for (i = min; i <= max; i++) {
            var display = ' ';
            var indicatorClassName = "indicatorItem'";
             if(i == currentGalleryItemSelected){
                display = display + 'style="display:block;"';
                indicatorClassName = "indicatorItemSelected'" ;
             }
             indicatorClassName = indicatorClassName + " onclick='refreshGalleryView(" + i + ")'" ;
             $( ".galleryList" ).append( "<img class='slideshowIndicatorsGalleryItem' src='"+ staticLink +"images/Works/" + i + ".jpg'"+ display +" />" );
             $( ".indicatorSection" ).append("<span class='" + indicatorClassName + " ></span>");
        }
    }

    function createPopUpMessage(typeOfMessage, title, message){

         $(".messagePopUp").css("display", "block");
         switch (typeOfMessage) {
            case 'accepted':
              $('.messagePopUp-header')[0].innerHTML = "<h2>" + title + "</h2>";
              $('.messagePopUp-body')[0].innerHTML = "<p>" + message.replace("\n", "</p><p>") + "</p>";
              $('.messagePopUp-header').css("background-color", "#44A19F");
              break;
            case 'failed':
              $('.messagePopUp-header')[0].innerHTML = "<h2>" + title + "</h2>";
              $('.messagePopUp-body')[0].innerHTML = "<p>" + message.replace("\n", "</p><p>") + "</p>";
              $('.messagePopUp-header').css("background-color", "#D95456");
              break;
        }
    }


    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('#scrollTopBtn').css("visibility","visible");
        }else {
            $('#scrollTopBtn').css("visibility","hidden");
        }
    });

    $('#scrollTopBtn').click(function(e){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});



