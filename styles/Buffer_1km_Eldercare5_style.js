var size = 0;

var styleCache_Buffer_1km_Eldercare5={}
var style_Buffer_1km_Eldercare5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.882353)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(195,165,31,0.882353)'})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Buffer_1km_Eldercare5[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_Buffer_1km_Eldercare5[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Buffer_1km_Eldercare5[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};