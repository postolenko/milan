ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){     
    myMap = new ymaps.Map("map", {
        center: [55.733677, 37.587874],
        zoom: 16
    });

    myPlacemark = new ymaps.Placemark([55.733670, 37.587874], { 
        hintContent: 'Mila Italia', 
        balloonContent: 'Магазин мебели' 
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [102, 85],
        iconImageOffset: [-36, -76]
    });

     myMap.behaviors
    .disable(['scrollZoom', 'rightMouseButtonMagnifier']);

    myMap.geoObjects.add(myPlacemark);
}