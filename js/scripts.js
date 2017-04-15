$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // -----------------------------------------------

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

    var indexCoiceBox;
    var coiseBoxCount = $(".coice-box").length - 1;
    var coiceBoxActive;
    var coiceBoxHeight;
    var coiceBoxHoverHeight;
    var visibleItems;
    var coiceBoxTopCoor;
    var coiceTopCoor;

    // -----------------------------------------------

    var countNumMarkLists = $("ol.num-mark").length - 1;
    var markNumListsIndex;
    var markNumListsItemIndex;
    var countNumItemsList;

    // -----------------------------------------------

    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ----------------------------

        getCoiceBoxHoverHeight(indexCoiceBox, coiseBoxCount);

        // ----------------------------

        $(".inner-menu").css({"min-width" : $(".header .row").width() + "px"});

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

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

    $(function() {

        $("ol.num-mark li").prepend("<span class='num-item'></span>");

        countNumMarkLists = $("ol.num-mark").length - 1;

        // var markNumListsIndex;
        // var markNumListsItemIndex;
        // var countNumItemsList;

        for( markNumListsItemIndex = 0; markNumListsItemIndex <= countNumMarkLists; markNumListsItemIndex++ ) {

            countNumItemsList = $("ol.num-mark:eq("+ markNumListsItemIndex +") li").length - 1;

            for( markListsItemIndex = 0; markListsItemIndex <= countNumItemsList; markListsItemIndex++) {

                $("ol.num-mark:eq("+ markNumListsItemIndex +") li:eq("+ markListsItemIndex +") .num-item").text( (markListsItemIndex + 1 ) );

            }

        }

    });

    // --------------------------------------------------------------

    $(function() {

        $(".main-nav > ul > li > a").bind({
          mouseenter: function() {

            $(this).parent("li").addClass("active-menu");

            $(".active-menu .inner-menu").css({
                "min-width" : $(".header .row").width() + "px",
                "top" : $(this).height() + 8 + "px"
            });

            $(".active-menu .inner-menu").offset({left : $(".main-nav").offset().left });

          },
          mouseleave: function() {
           
            $(this).parent("li").removeClass("active-menu");

          }

        });

        $(".respmenubtn").click(function() {

            if( $(".main-nav").is(":hidden") ) {

                $(".main-nav").fadeIn(400);

                $(this).addClass("active");

            } else {

                $(".main-nav").fadeOut(400);

                $(this).removeClass("active");

            }

        });


        $(".show-menu-btn").click(function() {

            var activeClass = "menu_item_" + $(".show-menu-btn").index(this);

            $(this).parent("li").addClass( activeClass );

            var activeMenuBox = $(".main-nav li." + activeClass + " .inner-menu");

            var activeMenuList = $(".main-nav li." + activeClass + " .inner-menu-list");

            var activeHeight = activeMenuList.outerHeight();

            if(activeMenuBox.height() > 0) {

                activeMenuBox.animate({
                    "height" : 0 + "px"
                }, 500);

                $(this).removeClass("top");

            } else {

                activeMenuBox.animate({
                    "height" : activeHeight + "px"
                }, 500);

                $(this).addClass("top");

                setTimeout(function() {

                    activeMenuBox.css({"height" : "auto"});

                },600);

            }

        });

    });

    // --------------------------------------------------------------

    $(".search-resp-btn").click(function() {

        if($(".search-box").is(":hidden")) {

            $(".search-box").fadeIn(300);

        } else {

            $(".search-box").fadeOut(300);

        }

    });

    $(document).mouseup(function (e){

        if(bodyWidth <= 1024 ) {

            hide_element = $('.search-box');

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                hide_element.fadeOut(300);
            }

        }

    });

    $(function() {

        $(this).keydown(function(eventObject){
            if (eventObject.which == 27) {

                 $('.search-box, .main-nav').fadeOut(300);
                 $(".respmenubtn").removeClass("active");

             }
        });

    });

    // --------------------------------------------------------------

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


});
