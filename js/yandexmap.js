var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
// Создание экземпляра карты и его привязка к контейнеру с
// заданным id ("map").
    myMap = new ymaps.Map('map', {
// При инициализации карты обязательно нужно указать
// её центр и коэффициент масштабирования.
        center: [52.96892594281623,36.062632297424045], // Москва
        zoom: 18,
        controls: [ 'zoomControl' ]
    }, {
        suppressMapOpenBlock: true, zoomControlSize: "small", zoomControlPosition: { right: 35 , top:  181}, minZoom: 15, maxZoom: 20
    });




    var myGeoObject = new ymaps.GeoObject({
        // Определение геометрии" Point".
        geometry: {
            type: "Point",
            coordinates: [52.96892594281623,36.062632297424045]
        },
        // Определение данных геообъекта.
        properties: {
            iconCaption: 'ул. Брестская, д. 12, пом. 47',

        }
    }, {
        // Установка предустановки для метки с точкой и без содержимого.
        preset: "islands#blueAutoCircleIcon",
        iconColor: '#ff3030',

    });
// Добавление геообъекта на карту.

    myMap.geoObjects.add(myGeoObject);






}
