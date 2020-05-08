(function ($) {
    'use strict';
    try {
        var file_input_container = $('.js-input-file');
        if (file_input_container[0]) {
            file_input_container.each(function () {
                var that = $(this);
                var fileInput = that.find(".input-file");
                var info = that.find(".input-file__info");
                fileInput.on("change", function () {
                    var fileName;
                    fileName = $(this).val();
                    if (fileName.substring(3,11) == 'fakepath') {
                        fileName = fileName.substring(12);
                    }
                    if(fileName == "") {
                        info.text("No file chosen");
                    } else {
                        info.text(fileName);
                    }
                })
            });
        }  
    }
    catch (e) {
        console.log(e);
    }
})

function showDates(dates){
    var myTable = "<div class='table-wrapper-scroll-y my-custom-scrollbar'><table class='table table-bordered table-striped mb-0'>";
    myTable += "<thead><tr><th scope='col' class='col-3'>Dates</th>";
    myTable += "<th scope='col' class='col-3'>Count</th></tr></thead><tbody>";
    for (var key in dates){
        myTable += "<tr><td class='col-3'>" + key + "</td>";
        myTable += "<td class='col-3'>" + dates[key] + "</td></tr>";
    }
    myTable += "</tbody></table></div><br>";
    document.getElementById('showtable').innerHTML = myTable;
}

function showTrademarks(trademarks){
    var myTable = "<div class='table-wrapper-scroll-y my-custom-scrollbar'><table class='table table-bordered table-striped mb-0'>";
    myTable += "<thead><tr><th scope='col' class='col-3'>Trademarks</th>";
    myTable += "<th scope='col' class='col-3'>Count</th></tr></thead><tbody>";
    for (var key in trademarks){
        myTable += "<tr><td class='col-3'>" + key + "</td>";
        myTable += "<td class='col-3'>" + trademarks[key] + "</td></tr>";
    }
    myTable += "</tbody></table></div><br>";
    document.getElementById('showtable').innerHTML = myTable;
}

function showDurations(durations){
    var myTable = "<div class='table-wrapper-scroll-y my-custom-scrollbar'><table class='table table-bordered table-striped mb-0'>";
    myTable += "<thead><tr><th scope='col' class='col-3'>Duration Type</th>";
    myTable += "<th scope='col' class='col-3'>Amount</th>";
    myTable += "<th scope='col' class='col-3'>Duration Days</th>";
    myTable += "<th scope='col' class='col-3'>Result</th>";
    myTable += "<th scope='col' class='col-3'>Count</th></tr></thead><tbody>";
    for (var i = 0; i< durations.length; i++){
        myTable += "<tr><td class='col-3'>" + durations[i][0][0] + "</td>";
        myTable += "<td class='col-3'>" + durations[i][0][1] + "</td>";
        myTable += "<td class='col-3'>" + durations[i][0][2] + "</td>";
        myTable += "<td class='col-3'>" + durations[i][0][3] + "</td>";
        myTable += "<td class='col-3'>" + durations[i][1] + "</td></tr>";
    }
    myTable += "</tbody></table></div><br>";
    document.getElementById('showtable').innerHTML = myTable;
}

function showGeoentities(geoentities){
    var myTable = "<div class='table-wrapper-scroll-y my-custom-scrollbar'><table class='table table-bordered table-striped mb-0'>";
    myTable += "<thead><tr><th scope='col' class='col-3'>Entity</th>";
    myTable += "<th scope='col' class='col-3'>Count</th></tr></thead><tbody>";
    for (var key in geoentities){
        myTable += "<tr><td class='col-3'>" + key + "</td>";
        myTable += "<td class='col-3'>" + geoentities[key] + "</td></tr>";
    }
    myTable += "</tbody></table></div><br>";
    document.getElementById('showtable').innerHTML = myTable;
}

function showPercents(percents){
    var myTable = "<div class='table-wrapper-scroll-y my-custom-scrollbar'><table class='table table-bordered table-striped mb-0'>";
    myTable += "<thead><tr><th scope='col' class='col-3'>Unit Type</th>";
    myTable += "<th scope='col' class='col-3'>Amount</th>";
    myTable += "<th scope='col' class='col-3'>Total</th>";
    myTable += "<th scope='col' class='col-3'>Result</th>";
    myTable += "<th scope='col' class='col-3'>Count</th></tr></thead><tbody>";
    for (var i = 0; i< percents.length; i++){
        myTable += "<tr><td class='col-3'>" + percents[i][0][0] + "</td>";
        myTable += "<td class='col-3'>" + percents[i][0][1] + "</td>";
        myTable += "<td class='col-3'>" + percents[i][0][2] + "</td>";
        myTable += "<td class='col-3'>" + percents[i][0][3] + "</td>";
        myTable += "<td class='col-3'>" + percents[i][1] + "</td></tr>";
    }
    myTable += "</tbody></table></div><br>";
    document.getElementById('showtable').innerHTML = myTable;
}

function showCurrency(currency){
    var myTable = "<div class='table-wrapper-scroll-y my-custom-scrollbar'><table class='table table-bordered table-striped mb-0'>";
    myTable += "<thead><tr><th scope='col' class='col-3'>Amount</th>";
    myTable += "<th scope='col' class='col-3'>Currency</th>";
    myTable += "<th scope='col' class='col-3'>Result</th>";
    myTable += "<th scope='col' class='col-3'>Count</th></tr></thead><tbody>";
    for (var i = 0; i< currency.length; i++){
        myTable += "<tr><td class='col-3'>" + currency[i][0][0] + "</td>";
        myTable += "<td class='col-3'>" + currency[i][0][1] + "</td>";
        myTable += "<td class='col-3'>" + currency[i][0][2] + "</td>";
        myTable += "<td class='col-3'>" + currency[i][1] + "</td></tr>";
    }
    myTable += "</tbody></table></div><br>";
    document.getElementById('showtable').innerHTML = myTable;
}

function showParties(parties){
    var myTable = "<div class='table-wrapper-scroll-y my-custom-scrollbar'><table class='table table-bordered table-striped mb-0'>";
    myTable += "<thead><tr><th scope='col' class='col-3'>Name</th>";
    myTable += "<th scope='col' class='col-3'>Type</th>";
    myTable += "<th scope='col' class='col-3'>Type abbr</th>";
    myTable += "<th scope='col' class='col-3'>Type label</th>";
    myTable += "<th scope='col' class='col-3'>Type desc</th>";
    myTable += "<th scope='col' class='col-3'>Count</th></tr></thead><tbody>";
    for (var i = 0; i< parties.length; i++){
        myTable += "<tr><td class='col-3'>" + parties[i][0][0] + "</td>";
        myTable += "<td class='col-3'>" + parties[i][0][1] + "</td>";
        myTable += "<td class='col-3'>" + parties[i][0][2] + "</td>";
        myTable += "<td class='col-3'>" + parties[i][0][3] + "</td>";
        myTable += "<td class='col-3'>" + parties[i][0][4] + "</td>";
        myTable += "<td class='col-3'>" + parties[i][1] + "</td></tr>";
    }
    myTable += "</tbody></table></div><br>";
    document.getElementById('showtable').innerHTML = myTable;
}

function showAmounts(amounts){
    var myTable = "<div class='table-wrapper-scroll-y my-custom-scrollbar'><table class='table table-bordered table-striped mb-0'>";
    myTable += "<thead><tr><th scope='col' class='col-3'>Amount</th>";
    myTable += "<th scope='col' class='col-3'>Result</th>";
    myTable += "<th scope='col' class='col-3'>Count</th></tr></thead><tbody>";
    for (var i = 0; i< amounts.length; i++){
        myTable += "<tr><td class='col-3'>" + amounts[i][0][0] + "</td>";
        myTable += "<td class='col-3'>" + amounts[i][0][1] + "</td>";
        myTable += "<td class='col-3'>" + amounts[i][1] + "</td></tr>";
    }
    myTable += "</tbody></table></div><br>";
    document.getElementById('showtable').innerHTML = myTable;
}