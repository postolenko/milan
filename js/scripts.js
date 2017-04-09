$(document).ready(function() {


    var slideIndex = 0;
    var slideCount = $(".slide-discount").length - 1;


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
