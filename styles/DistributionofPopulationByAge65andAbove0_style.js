var size = 0;
var ranges_DistributionofPopulationByAge65andAbove0 = [[0.000000, 830.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,252,245,1.0)'})
    })]],
[830.000000, 2220.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(202,234,195,1.0)'})
    })]],
[2220.000000, 4000.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(123,200,124,1.0)'})
    })]],
[4000.000000, 8410.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(42,146,74,1.0)'})
    })]],
[8410.000000, 14350.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,68,27,1.0)'})
    })]]];
var styleCache_DistributionofPopulationByAge65andAbove0={}
var style_DistributionofPopulationByAge65andAbove0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("AgeGroup2015_AGE_ELDERLY");
    var style = ranges_DistributionofPopulationByAge65andAbove0[0][2];
    for (i = 0; i < ranges_DistributionofPopulationByAge65andAbove0.length; i++){
        var range = ranges_DistributionofPopulationByAge65andAbove0[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if (feature.get("SUBZONE_N") !== null) {
        var labelText = String(feature.get("SUBZONE_N"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_DistributionofPopulationByAge65andAbove0[key]){
        var text = new ol.style.Text({
              font: '5.525px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_DistributionofPopulationByAge65andAbove0[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_DistributionofPopulationByAge65andAbove0[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};