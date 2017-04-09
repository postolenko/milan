$(document).ready(function() {


    var slideIndex = 0;
    var slideCount = $(".slide-discount").length - 1;

    // -----------------------------------------------

    var slidePhoto;
    var coorsSlidePhoto;
    var topCoor;
    var leftCoor;
    var rightCoor;
    var bottomCoor;
    var slideImgWidth;
    var slideImgHeight;

    // -----------------------------------------------

    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ----------------------------

        getDiscountSize();

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    // -------------------------

    $(function() {

        slideIndex = 0;

        $(".promo-slider .slide-discount").each(function() {

            $(this).appendTo($(".promo-slider-box .discounts"));

            if( $(".promo-slider .slide:eq("+ slideIndex +")").hasClass("slick-active") ) {

                $(".promo-slider-box .discounts .slide-discount:eq("+ slideIndex +")").fadeIn(200);

            }

            slideIndex++;

        });

        getDiscountSize();

    });

    // ---------------------------

    $(function() {

        slidePhoto = document.getElementsByClassName("photo_img_box")[0];

        coorsSlidePhoto = slidePhoto.getBoundingClientRect();

        topCoor = coorsSlidePhoto.top;
        leftCoor = coorsSlidePhoto.left;
        rightCoor = coorsSlidePhoto.right;
        bottomCoor = coorsSlidePhoto.bottom;

        slideImgWidth = rightCoor - leftCoor;
        slideImgHeight = bottomCoor - topCoor;

        $(".photo_img_box img").css({
            "min-width" : slideImgWidth + "px",
            "min-height" : slideImgHeight + "px"
        });

        $(".photo_img_box img").offset({ left:leftCoor, top:topCoor });

    });

    // ---------------------------


    function getDiscountSize() {

        slideIndex = 0;

        slideCount = $(".slide-discount").length - 1;

        for( slideIndex = 0; slideIndex <= slideCount; slideIndex++ ) {

            if( $(".slide-discount:eq("+ slideIndex +")").width() > $(".slide-discount:eq("+ slideIndex +")").height()) {

                $(".slide-discount:eq("+ slideIndex +")").css({
                    "width" : $(".slide-discount:eq("+ slideIndex +")").outerWidth() + "px",
                    "height" : $(".slide-discount:eq("+ slideIndex +")").outerWidth() + "px"
                });

            } else if( $(".slide-discount:eq("+ slideIndex +")").width() <  $(".slide-discount:eq("+ slideIndex +")").height() ) {

                $(".slide-discount:eq("+ slideIndex +")").css({
                    "width" : $(".slide-discount:eq("+ slideIndex +")").outerHeight() + "px",
                    "height" : $(".slide-discount:eq("+ slideIndex +")").outerHeight() + "px"
                });

            }

            $(".slide-discount:eq("+ slideIndex +") p").css({
                "height" : $(".slide-discount:eq("+ slideIndex +")").height() + "px"
            });

        }

    }


});
