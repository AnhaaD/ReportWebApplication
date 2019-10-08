
var markers = [
    [5, 48.937639, 89.136286],
];

function getCount(data,value) {
    let i = 0;
    data.forEach(function (element) {
        if (element.category4 == value) {
            i++;
        }
    });
    return i;
}

function getMultiCount(data, value, value2) {
    let i = 0;
    data.forEach(function (element) {
        if (element.category4 == value || element.category4 == value2) {
            i++;
        }
    });
    return i;
}

function initializeMaps(map, data) {

    var markers = [
        // Архангай
        [getCount(data, 'Цэнхэр'), 47.4389969, 101.7525358],
        // Баян-Өлгий
        [getCount(data, 'Өлгий /төв/'), 48.9706758, 89.9678382],
        [getMultiCount(data, 'Цэнгэл', 'Цэнгэл сум'), 48.937639, 89.136286],
        [getCount(data, 'Алтанцөгц сум'), 49.0631331, 90.4566047],
        // Баянхонгор
        [getCount(data, 'Өлзийт сум'), 46.064446, 100.821748],
        [getCount(data, 'Баянцагаан'), 45.004714, 98.944140],
        // Увс
        [getCount(data, 'Улаангом'), 49.9811096, 92.0666733],
        [getCount(data, 'Хяргас'), 49.6678108, 93.7822875],
        [getCount(data, 'Цагаанхайрхан'), 49.405244, 94.251751],
        // Говь-Алтай
        [getCount(data, 'Говь-Алтай сум /төв/'), 44.6183507, 94.9195154],
        [getMultiCount(data, 'Тонхил','Тонхил сум'), 46.308891, 93.903065],
        [getCount(data, 'Цээл'), 45.550894, 95.854683],
        // Хөвсгөл
        [getCount(data, 'Төмөрбулаг'), 49.296622, 100.259178],
        [getCount(data, 'Хатгал'), 50.317751, 100.031098],
        [getCount(data, 'Мөрөн'), 49.670133, 100.200306],
        [getCount(data, 'Чандмана-Өндөр'), 50.507510, 100.821233],
        // Өмнөговь
        [getCount(data, 'Гурвантэс'), 43.230286, 101.049628],
        [getCount(data, 'Даланзадгад /төв /'), 43.571704, 104.425950],
        [getCount(data, 'Цогтцэций сум'), 43.842001, 105.891368],
        // Сэлэнгэ
        [getCount(data, 'Зүүнхараа'), 48.851919, 106.458969],
        // Орхон / Эрдэнэт / 
        [getCount(data, 'Эрдэнэт'), 49.027512, 104.044785],
        // Дундговь 
        [getCount(data, 'Дэлгэрцогт'), 46.242382, 106.235659],
        // Хэнтий
        [getCount(data, 'Биндэр сум'), 48.655509, 110.572125],
        // Ховд 
        [getCount(data, 'Булган сум'), 45.914840, 91.218283],
        [getCount(data, 'Чандмань'), 47.709841, 92.945240],
        // Дорноговь 
        [getCount(data, 'Даланжаргалан'), 46.002068, 108.929977],
        [getCount(data, 'Замын-Үүд'), 43.718594, 111.907030],
        // Дорнод
        [getCount(data, 'Цагаан-Овоо'), 48.568318, 113.234537],
        [getMultiCount(data, 'Чойбалсан /төв /', 'ЧОЙБАЛСАН СУМ /төв/'), 48.436430, 114.882103],
        // Дархан-Уул
        [getMultiCount(data, 'ДАРХАН СУМ', 'Дархан хот'), 49.463448, 105.974945]
    ];
 
    var bounds = new google.maps.LatLngBounds();

    markers.forEach(function (point) {
        if (point[0] !== 0) {
            generateIcon(point[0], function (src) {
                var pos = new google.maps.LatLng(point[1], point[2]);

                bounds.extend(pos);

                var mapMarker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    icon: src,
                });

            });
        }
    });

}

var generateIconCache = {};

function generateIcon(number, callback) {
    if (generateIconCache[number] !== undefined) {
        callback(generateIconCache[number]);
    }

    var fontSize = 16,
        imageWidth = imageHeight = 35;

    if (number >= 1000) {
        fontSize = 10;
        imageWidth = imageHeight = 55;
    } else if (number < 1000 && number > 100) {
        fontSize = 14;
        imageWidth = imageHeight = 45;
    }

    var svg = d3.select(document.createElement('div')).append('svg')
        .attr('viewBox', '0 0 54.4 54.4')
        .append('g')

    var circles = svg.append('circle')
        .attr('cx', '27.2')
        .attr('cy', '27.2')
        .attr('r', '21.2')
        .style('fill', '#66cc00');

    var path = svg.append('path')
        .attr('d', 'M27.2,0C12.2,0,0,12.2,0,27.2s12.2,27.2,27.2,27.2s27.2-12.2,27.2-27.2S42.2,0,27.2,0z M6,27.2 C6,15.5,15.5,6,27.2,6s21.2,9.5,21.2,21.2c0,11.7-9.5,21.2-21.2,21.2S6,38.9,6,27.2z')
        .attr('fill', '#FFFFFF');

    var text = svg.append('text')
        .attr('dx', 27)
        .attr('dy', 32)
        .attr('text-anchor', 'middle')
        .attr('style', 'font-size:' + fontSize + 'px; fill: #FFFFFF; font-family: Arial, Verdana; font-weight: bold')
        .text(number);

    var svgNode = svg.node().parentNode.cloneNode(true),
        image = new Image();

    d3.select(svgNode).select('clippath').remove();

    var xmlSource = (new XMLSerializer()).serializeToString(svgNode);

    image.onload = (function (imageWidth, imageHeight) {
        var canvas = document.createElement('canvas'),
            context = canvas.getContext('2d'),
            dataURL;

        d3.select(canvas)
            .attr('width', imageWidth)
            .attr('height', imageHeight);

        context.drawImage(image, 0, 0, imageWidth, imageHeight);

        dataURL = canvas.toDataURL();
        generateIconCache[number] = dataURL;

        callback(dataURL);
    }).bind(this, imageWidth, imageHeight);

    image.src = 'data:image/svg+xml;base64,' + btoa(encodeURIComponent(xmlSource).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}



function setMarkerClickHandler(map, marker, markerTitle, markerData) {

    var m_date = "";
    var m_callphone = "";

    for (i = 0; i < markerData.length; i++) {

        m_date += markerData[i].p_date.toLocaleString() + "<br>";
        m_callphone += markerData[i].p_callphoneno + "<br>";
    }

    var contentString = '<div id="content">' +
        '<h4 id="firstHeading" class="firstHeading">' + markerTitle + '</h4>' +
        '<div id="bodyContent">' +
        '<p><b>' + markerTitle + '</b> : Нийт гомдлын тоо - <b> ' + markerData.length + '</b> <br>' +

        '<div class="container-fluid">' +
        '<div class="row">' +
        '<div class="col-sm-6">' + '<b>Огноо</b><br>' +
        m_date
        +
        '</div>' +
        '<div class="col-sm-6">' + '<b>Залгасан дугаар</b><br>' +
        m_callphone
        +
        '</div>' +
        '</div>' +
        '</div>' +

        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    infowindow.open(map, marker);

}
