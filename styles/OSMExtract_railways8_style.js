var size = 0;
function categories_OSMExtract_railways8(feature, value) {
                switch(value) {default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(174,217,120,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })];
                    break;
case 'BLUE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(63,74,221,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
    })];
                    break;
case 'GREEN':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(19,203,102,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
    })];
                    break;
case 'PURPLE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(226,38,226,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
    })];
                    break;
case 'RED':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,58,58,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
    })];
                    break;
case 'YELLOW':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,74,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
    })];
                    break;}};
var styleCache_OSMExtract_railways8={}
var style_OSMExtract_railways8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("MRT_Lines_LINE_COLOUR");
    var style = categories_OSMExtract_railways8(feature, value);
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_OSMExtract_railways8[key]){
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
        styleCache_OSMExtract_railways8[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_OSMExtract_railways8[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};