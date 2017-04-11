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

    var goodCartIndex;
    var goodCartTopRowHeight;
    var goodCartContentBlockHeight;

    // -----------------------------------------------

    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ----------------------------

        // getDiscountSize();

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

        // getDiscountSize();

    });

    // ---------------------------

    $(function() {

        slidePhoto = document.getElementsByClassName("photo_img_box")[0];

        if(slidePhoto) {

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

            $(".photo_img_box img").offset({ left:leftCoor});

        }

    });

    // ----------------------------------------------------------------

    $(function() {

        // var goodCartIndex;
        // var goodCartTopRowHeight;
        // var goodCartContentBlockHeight;

        $(".good-cart").bind({
          mouseenter: function() {

            goodCartIndex = $(".good-cart").index(this);

            goodCartTopRowHeight = $( this ).height();
            goodCartContentBlockHeight = $(".content-block:eq("+ goodCartIndex +")").height();

            $(this).prepend("<div class='for_coor'></div>");

            $(".for_coor").height( goodCartTopRowHeight + goodCartContentBlockHeight );

          },
          mouseleave: function() {

            $(".for_coor").remove();

          }
        });

    });

    // ----------------------------------------------------------------

        $(function() {

            $(".count-goods button").click(function() {

                countElementsInputIndex = $(this).parent(".count-goods").index(".count-goods");

                countElementsVal = $(".count-goods:eq("+ countElementsInputIndex +") .count-val").val();

                if( countElementsVal <=  -1 ) {

                    $(".count-val:eq("+ countElementsInputIndex +")").val(0);

                }

                if( $(this).hasClass("minus") && countElementsVal > 0 ) {

                    countElementsVal--;

                } else if( $(this).hasClass("plus") ) {

                    countElementsVal++;

                }

                $(".count-goods:eq("+ countElementsInputIndex +") .count-val").val(countElementsVal);

            });

        });

    // ---------------------------------------------------------------


    // function getDiscountSize() {

    //     slideIndex = 0;

    //     slideCount = $(".slide-discount").length - 1;

    //     for( slideIndex = 0; slideIndex <= slideCount; slideIndex++ ) {

    //         if( $(".slide-discount:eq("+ slideIndex +")").width() > $(".slide-discount:eq("+ slideIndex +")").height()) {

    //             $(".slide-discount:eq("+ slideIndex +")").css({
    //                 "width" : $(".slide-discount:eq("+ slideIndex +")").outerWidth() + "px",
    //                 "height" : $(".slide-discount:eq("+ slideIndex +")").outerWidth() + "px"
    //             });

    //         } else if( $(".slide-discount:eq("+ slideIndex +")").width() <  $(".slide-discount:eq("+ slideIndex +")").height() ) {

    //             $(".slide-discount:eq("+ slideIndex +")").css({
    //                 "width" : $(".slide-discount:eq("+ slideIndex +")").outerHeight() + "px",
    //                 "height" : $(".slide-discount:eq("+ slideIndex +")").outerHeight() + "px"
    //             });

    //         }

    //         $(".slide-discount:eq("+ slideIndex +") p").css({
    //             "height" : $(".slide-discount:eq("+ slideIndex +")").height() + "px"
    //         });

    //     }

    // }


});
