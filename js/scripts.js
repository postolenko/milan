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

    // var goodCartIndex;
    // var goodCartTopRowHeight;
    // var goodCartContentBlockHeight;

    // -----------------------------------------------

    var indexCoiceBox;
    var coiseBoxCount = $(".coice-box").length - 1;
    var coiceBoxActive;
    var coiceBoxHeight;
    var coiceBoxHoverHeight;
    var visibleItems;
    var coiceBoxTopCoor;
    var coiceTopCoor;

    // -----------------------------------------------

    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ----------------------------

        getCoiceBoxHoverHeight(indexCoiceBox, coiseBoxCount);

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

        // var indexCoiceBox = 0;
        // var coiseBoxCount = $(".coice-box").length - 1;
        // var coiceBoxActive;
        // var coiceBoxHeight;
        // var coiceBoxHoverHeight;
        // var visibleItems;
        // var coiceBoxTopCoor;
        // var coiceTopCoor;

        getCoiceBoxHoverHeight(indexCoiceBox, coiseBoxCount);

        $(".more-link").click(function() {

            coiceBoxActive = $(this).prev($(".coice-box"));

            coiceBoxHeight = coiceBoxActive.children($(".hover-block")).height();

            coiceBoxHoverHeight = parseInt( coiceBoxActive.attr("data-hover-height") );

            if( coiceBoxActive.height() > coiceBoxHoverHeight ) {

                coiceBoxActive.animate({"height" : coiceBoxHoverHeight + "px"}, 500);

                $(this).text("Еще");

            } else {

                coiceBoxActive.animate({"height" : coiceBoxHeight + "px"}, 500);

                $(this).text("Скрыть");

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

    function getCoiceBoxHoverHeight(indexCoiceBox, coiseBoxCount) {

        indexCoiceBox = 0;

        for (indexCoiceBox = 0; indexCoiceBox <= coiseBoxCount; indexCoiceBox++) {

            visibleItems = parseInt( $(".coice-box:eq("+ indexCoiceBox +")").attr("data-visible-items") );

            if(visibleItems) {

                coiceBoxTopCoor = $(".coice-box:eq("+ indexCoiceBox +")").offset().top;
                coiceTopCoor = $(".coice-box:eq("+ indexCoiceBox +") .checkbox-block:eq("+ visibleItems +")").offset().top;

                coiceBoxHoverHeight = coiceTopCoor - coiceBoxTopCoor;

                $(".coice-box:eq("+ indexCoiceBox +")").attr("data-hover-height", coiceBoxHoverHeight);

                $(".coice-box:eq("+ indexCoiceBox +")").css({"height" : coiceBoxHoverHeight + "px"});

            }

        }

    }

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
