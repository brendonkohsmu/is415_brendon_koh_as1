var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_DistributionofPopulationByAge65andAbove0 = new ol.format.GeoJSON();
var features_DistributionofPopulationByAge65andAbove0 = format_DistributionofPopulationByAge65andAbove0.readFeatures(geojson_DistributionofPopulationByAge65andAbove0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_DistributionofPopulationByAge65andAbove0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DistributionofPopulationByAge65andAbove0.addFeatures(features_DistributionofPopulationByAge65andAbove0);var lyr_DistributionofPopulationByAge65andAbove0 = new ol.layer.Vector({
                source:jsonSource_DistributionofPopulationByAge65andAbove0, 
                style: style_DistributionofPopulationByAge65andAbove0,
                title: "Distribution of Population By Age 65 and Above"
            });var format_EldercareServices1 = new ol.format.GeoJSON();
var features_EldercareServices1 = format_EldercareServices1.readFeatures(geojson_EldercareServices1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_EldercareServices1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EldercareServices1.addFeatures(features_EldercareServices1);var lyr_EldercareServices1 = new ol.layer.Vector({
                source:jsonSource_EldercareServices1,
minResolution:0.280044661523,
 maxResolution:70.0111653807,

                style: style_EldercareServices1,
                title: "Eldercare Services"
            });var format_Hospitals2 = new ol.format.GeoJSON();
var features_Hospitals2 = format_Hospitals2.readFeatures(geojson_Hospitals2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Hospitals2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Hospitals2.addFeatures(features_Hospitals2);var lyr_Hospitals2 = new ol.layer.Vector({
                source:jsonSource_Hospitals2,
minResolution:0.280044661523,
 maxResolution:70.0111653807,

                style: style_Hospitals2,
                title: "Hospitals"
            });var format_RegisteredPharmacies3 = new ol.format.GeoJSON();
var features_RegisteredPharmacies3 = format_RegisteredPharmacies3.readFeatures(geojson_RegisteredPharmacies3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_RegisteredPharmacies3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RegisteredPharmacies3.addFeatures(features_RegisteredPharmacies3);var lyr_RegisteredPharmacies3 = new ol.layer.Vector({
                source:jsonSource_RegisteredPharmacies3,
minResolution:0.280044661523,
 maxResolution:70.0111653807,

                style: style_RegisteredPharmacies3,
                title: "Registered Pharmacies"
            });var format_MRTStations4 = new ol.format.GeoJSON();
var features_MRTStations4 = format_MRTStations4.readFeatures(geojson_MRTStations4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_MRTStations4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MRTStations4.addFeatures(features_MRTStations4);var lyr_MRTStations4 = new ol.layer.Vector({
                source:jsonSource_MRTStations4,
minResolution:0.280044661523,
 maxResolution:70.0111653807,

                style: style_MRTStations4,
                title: "MRT Stations"
            });var format_Buffer_1km_Eldercare5 = new ol.format.GeoJSON();
var features_Buffer_1km_Eldercare5 = format_Buffer_1km_Eldercare5.readFeatures(geojson_Buffer_1km_Eldercare5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Buffer_1km_Eldercare5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Buffer_1km_Eldercare5.addFeatures(features_Buffer_1km_Eldercare5);var lyr_Buffer_1km_Eldercare5 = new ol.layer.Vector({
                source:jsonSource_Buffer_1km_Eldercare5,
minResolution:0.280044661523,
 maxResolution:70.0111653807,

                style: style_Buffer_1km_Eldercare5,
                title: "Buffer_1km_Eldercare"
            });var format_Buffer_1km_Hospitals6 = new ol.format.GeoJSON();
var features_Buffer_1km_Hospitals6 = format_Buffer_1km_Hospitals6.readFeatures(geojson_Buffer_1km_Hospitals6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Buffer_1km_Hospitals6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Buffer_1km_Hospitals6.addFeatures(features_Buffer_1km_Hospitals6);var lyr_Buffer_1km_Hospitals6 = new ol.layer.Vector({
                source:jsonSource_Buffer_1km_Hospitals6,
minResolution:0.280044661523,
 maxResolution:70.0111653807,

                style: style_Buffer_1km_Hospitals6,
                title: "Buffer_1km_Hospitals"
            });var lyr_PopulationDensityAge7 = new ol.layer.Image({
                            opacity: 1,
                            title: "PopulationDensityAge",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PopulationDensityAge7.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [725, 500],
                                imageExtent: [11533759.904807, 130836.765491, 11583133.743180, 165116.857071]
                            })
                        });var format_OSMExtract_railways8 = new ol.format.GeoJSON();
var features_OSMExtract_railways8 = format_OSMExtract_railways8.readFeatures(geojson_OSMExtract_railways8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_OSMExtract_railways8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_OSMExtract_railways8.addFeatures(features_OSMExtract_railways8);var lyr_OSMExtract_railways8 = new ol.layer.Vector({
                source:jsonSource_OSMExtract_railways8, 
                style: style_OSMExtract_railways8,
                title: "OSM-Extract_railways"
            });

lyr_DistributionofPopulationByAge65andAbove0.setVisible(false);lyr_EldercareServices1.setVisible(false);lyr_Hospitals2.setVisible(false);lyr_RegisteredPharmacies3.setVisible(false);lyr_MRTStations4.setVisible(false);lyr_Buffer_1km_Eldercare5.setVisible(false);lyr_Buffer_1km_Hospitals6.setVisible(false);lyr_PopulationDensityAge7.setVisible(false);lyr_OSMExtract_railways8.setVisible(false);
var layersList = [baseLayer,lyr_DistributionofPopulationByAge65andAbove0,lyr_EldercareServices1,lyr_Hospitals2,lyr_RegisteredPharmacies3,lyr_MRTStations4,lyr_Buffer_1km_Eldercare5,lyr_Buffer_1km_Hospitals6,lyr_PopulationDensityAge7,lyr_OSMExtract_railways8];
lyr_DistributionofPopulationByAge65andAbove0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'PopDen': 'PopDen', 'AgeGroup2015_ZONE_N': 'AgeGroup2015_ZONE_N', 'AgeGroup2015_ZONE_C': 'AgeGroup2015_ZONE_C', 'AgeGroup2015_SUBZONE_N': 'AgeGroup2015_SUBZONE_N', 'AgeGroup2015_ALL_AGE': 'AgeGroup2015_ALL_AGE', 'AgeGroup2015_AGE0-4': 'AgeGroup2015_AGE0-4', 'AgeGroup2015_AGE5-9': 'AgeGroup2015_AGE5-9', 'AgeGroup2015_AGE10-14': 'AgeGroup2015_AGE10-14', 'AgeGroup2015_AGE15-19': 'AgeGroup2015_AGE15-19', 'AgeGroup2015_AGE20-24': 'AgeGroup2015_AGE20-24', 'AgeGroup2015_AGE25-29': 'AgeGroup2015_AGE25-29', 'AgeGroup2015_AGE30-34': 'AgeGroup2015_AGE30-34', 'AgeGroup2015_AGE35-39': 'AgeGroup2015_AGE35-39', 'AgeGroup2015_AGE40-44': 'AgeGroup2015_AGE40-44', 'AgeGroup2015_AGE45-49': 'AgeGroup2015_AGE45-49', 'AgeGroup2015_AGE50-54': 'AgeGroup2015_AGE50-54', 'AgeGroup2015_AGE55-59': 'AgeGroup2015_AGE55-59', 'AgeGroup2015_AGE60-64': 'AgeGroup2015_AGE60-64', 'AgeGroup2015_AGE65-69': 'AgeGroup2015_AGE65-69', 'AgeGroup2015_AGE70-74': 'AgeGroup2015_AGE70-74', 'AgeGroup2015_AGE75-79': 'AgeGroup2015_AGE75-79', 'AgeGroup2015_AGE80-84': 'AgeGroup2015_AGE80-84', 'AgeGroup2015_AGE85': 'AgeGroup2015_AGE85', 'AgeGroup2015_AGE_ELDERLY': 'AgeGroup2015_AGE_ELDERLY', });
lyr_EldercareServices1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADDRESSBLO': 'ADDRESSBLO', 'ADDRESSBUI': 'ADDRESSBUI', 'ADDRESSPOS': 'ADDRESSPOS', 'ADDRESSSTR': 'ADDRESSSTR', 'ADDRESSTYP': 'ADDRESSTYP', 'DESCRIPTIO': 'DESCRIPTIO', 'HYPERLINK': 'HYPERLINK', 'LANDXADDRE': 'LANDXADDRE', 'LANDYADDRE': 'LANDYADDRE', 'NAME': 'NAME', 'PHOTOURL': 'PHOTOURL', 'ADDRESSFLO': 'ADDRESSFLO', 'ADDRESSUNI': 'ADDRESSUNI', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', });
lyr_Hospitals2.set('fieldAliases', {'HOSP_NAME': 'HOSP_NAME', 'ADDRESS': 'ADDRESS', 'CATEGORY': 'CATEGORY', 'POSTCODE': 'POSTCODE', 'X-COR': 'X-COR', 'Y-COR': 'Y-COR', 'field_7': 'field_7', 'field_8': 'field_8', });
lyr_RegisteredPharmacies3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'POSTAL_COD': 'POSTAL_COD', 'BUILDING_N': 'BUILDING_N', 'UNIT_NO': 'UNIT_NO', 'LEVEL_NO': 'LEVEL_NO', 'ROAD_NAME': 'ROAD_NAME', 'HOUSE_BLK_': 'HOUSE_BLK_', 'PHARMACY_N': 'PHARMACY_N', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', });
lyr_MRTStations4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STN_NAME': 'STN_NAME', 'STN_NO': 'STN_NO', });
lyr_Buffer_1km_Eldercare5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADDRESSBLO': 'ADDRESSBLO', 'ADDRESSBUI': 'ADDRESSBUI', 'ADDRESSPOS': 'ADDRESSPOS', 'ADDRESSSTR': 'ADDRESSSTR', 'ADDRESSTYP': 'ADDRESSTYP', 'DESCRIPTIO': 'DESCRIPTIO', 'HYPERLINK': 'HYPERLINK', 'LANDXADDRE': 'LANDXADDRE', 'LANDYADDRE': 'LANDYADDRE', 'NAME': 'NAME', 'PHOTOURL': 'PHOTOURL', 'ADDRESSFLO': 'ADDRESSFLO', 'ADDRESSUNI': 'ADDRESSUNI', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', });
lyr_Buffer_1km_Hospitals6.set('fieldAliases', {'HOSP_NAME': 'HOSP_NAME', 'ADDRESS': 'ADDRESS', 'CATEGORY': 'CATEGORY', 'POSTCODE': 'POSTCODE', 'X-COR': 'X-COR', 'Y-COR': 'Y-COR', 'field_7': 'field_7', 'field_8': 'field_8', });
lyr_OSMExtract_railways8.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'MRT_Lines_LINE_COLOUR': 'MRT_Lines_LINE_COLOUR', });
lyr_DistributionofPopulationByAge65andAbove0.set('fieldImages', {'OBJECTID': 'TextEdit', 'SUBZONE_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'TextEdit', 'CA_IND': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'PLN_AREA_C': 'TextEdit', 'REGION_N': 'TextEdit', 'REGION_C': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'PopDen': 'TextEdit', 'AgeGroup2015_ZONE_N': 'TextEdit', 'AgeGroup2015_ZONE_C': 'TextEdit', 'AgeGroup2015_SUBZONE_N': 'TextEdit', 'AgeGroup2015_ALL_AGE': 'TextEdit', 'AgeGroup2015_AGE0-4': 'TextEdit', 'AgeGroup2015_AGE5-9': 'TextEdit', 'AgeGroup2015_AGE10-14': 'TextEdit', 'AgeGroup2015_AGE15-19': 'TextEdit', 'AgeGroup2015_AGE20-24': 'TextEdit', 'AgeGroup2015_AGE25-29': 'TextEdit', 'AgeGroup2015_AGE30-34': 'TextEdit', 'AgeGroup2015_AGE35-39': 'TextEdit', 'AgeGroup2015_AGE40-44': 'TextEdit', 'AgeGroup2015_AGE45-49': 'TextEdit', 'AgeGroup2015_AGE50-54': 'TextEdit', 'AgeGroup2015_AGE55-59': 'TextEdit', 'AgeGroup2015_AGE60-64': 'TextEdit', 'AgeGroup2015_AGE65-69': 'TextEdit', 'AgeGroup2015_AGE70-74': 'TextEdit', 'AgeGroup2015_AGE75-79': 'TextEdit', 'AgeGroup2015_AGE80-84': 'TextEdit', 'AgeGroup2015_AGE85': 'TextEdit', 'AgeGroup2015_AGE_ELDERLY': 'TextEdit', });
lyr_EldercareServices1.set('fieldImages', {'OBJECTID': 'TextEdit', 'ADDRESSBLO': 'TextEdit', 'ADDRESSBUI': 'TextEdit', 'ADDRESSPOS': 'TextEdit', 'ADDRESSSTR': 'TextEdit', 'ADDRESSTYP': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'HYPERLINK': 'TextEdit', 'LANDXADDRE': 'TextEdit', 'LANDYADDRE': 'TextEdit', 'NAME': 'TextEdit', 'PHOTOURL': 'TextEdit', 'ADDRESSFLO': 'TextEdit', 'ADDRESSUNI': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', });
lyr_Hospitals2.set('fieldImages', {'HOSP_NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'CATEGORY': 'TextEdit', 'POSTCODE': 'TextEdit', 'X-COR': 'TextEdit', 'Y-COR': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', });
lyr_RegisteredPharmacies3.set('fieldImages', {'OBJECTID': 'TextEdit', 'POSTAL_COD': 'TextEdit', 'BUILDING_N': 'TextEdit', 'UNIT_NO': 'TextEdit', 'LEVEL_NO': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'HOUSE_BLK_': 'TextEdit', 'PHARMACY_N': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', });
lyr_MRTStations4.set('fieldImages', {'OBJECTID': 'TextEdit', 'STN_NAME': 'TextEdit', 'STN_NO': 'TextEdit', });
lyr_Buffer_1km_Eldercare5.set('fieldImages', {'OBJECTID': 'TextEdit', 'ADDRESSBLO': 'TextEdit', 'ADDRESSBUI': 'TextEdit', 'ADDRESSPOS': 'TextEdit', 'ADDRESSSTR': 'TextEdit', 'ADDRESSTYP': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'HYPERLINK': 'TextEdit', 'LANDXADDRE': 'TextEdit', 'LANDYADDRE': 'TextEdit', 'NAME': 'TextEdit', 'PHOTOURL': 'TextEdit', 'ADDRESSFLO': 'TextEdit', 'ADDRESSUNI': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', });
lyr_Buffer_1km_Hospitals6.set('fieldImages', {'HOSP_NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'CATEGORY': 'TextEdit', 'POSTCODE': 'TextEdit', 'X-COR': 'TextEdit', 'Y-COR': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', });
lyr_OSMExtract_railways8.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'MRT_Lines_LINE_COLOUR': 'TextEdit', });
lyr_DistributionofPopulationByAge65andAbove0.set('fieldLabels', {'OBJECTID': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'header label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'no label', 'Y_ADDR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'PopDen': 'no label', 'AgeGroup2015_ZONE_N': 'no label', 'AgeGroup2015_ZONE_C': 'no label', 'AgeGroup2015_SUBZONE_N': 'no label', 'AgeGroup2015_ALL_AGE': 'no label', 'AgeGroup2015_AGE0-4': 'no label', 'AgeGroup2015_AGE5-9': 'no label', 'AgeGroup2015_AGE10-14': 'no label', 'AgeGroup2015_AGE15-19': 'no label', 'AgeGroup2015_AGE20-24': 'no label', 'AgeGroup2015_AGE25-29': 'no label', 'AgeGroup2015_AGE30-34': 'no label', 'AgeGroup2015_AGE35-39': 'no label', 'AgeGroup2015_AGE40-44': 'no label', 'AgeGroup2015_AGE45-49': 'no label', 'AgeGroup2015_AGE50-54': 'no label', 'AgeGroup2015_AGE55-59': 'no label', 'AgeGroup2015_AGE60-64': 'no label', 'AgeGroup2015_AGE65-69': 'no label', 'AgeGroup2015_AGE70-74': 'no label', 'AgeGroup2015_AGE75-79': 'no label', 'AgeGroup2015_AGE80-84': 'no label', 'AgeGroup2015_AGE85': 'no label', 'AgeGroup2015_AGE_ELDERLY': 'no label', });
lyr_EldercareServices1.set('fieldLabels', {'OBJECTID': 'no label', 'ADDRESSBLO': 'no label', 'ADDRESSBUI': 'no label', 'ADDRESSPOS': 'no label', 'ADDRESSSTR': 'no label', 'ADDRESSTYP': 'no label', 'DESCRIPTIO': 'no label', 'HYPERLINK': 'no label', 'LANDXADDRE': 'no label', 'LANDYADDRE': 'no label', 'NAME': 'no label', 'PHOTOURL': 'no label', 'ADDRESSFLO': 'no label', 'ADDRESSUNI': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'no label', 'Y_ADDR': 'no label', });
lyr_Hospitals2.set('fieldLabels', {'HOSP_NAME': 'no label', 'ADDRESS': 'no label', 'CATEGORY': 'no label', 'POSTCODE': 'no label', 'X-COR': 'no label', 'Y-COR': 'no label', 'field_7': 'no label', 'field_8': 'no label', });
lyr_RegisteredPharmacies3.set('fieldLabels', {'OBJECTID': 'no label', 'POSTAL_COD': 'no label', 'BUILDING_N': 'no label', 'UNIT_NO': 'no label', 'LEVEL_NO': 'no label', 'ROAD_NAME': 'no label', 'HOUSE_BLK_': 'no label', 'PHARMACY_N': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'no label', 'Y_ADDR': 'no label', });
lyr_MRTStations4.set('fieldLabels', {'OBJECTID': 'no label', 'STN_NAME': 'no label', 'STN_NO': 'no label', });
lyr_Buffer_1km_Eldercare5.set('fieldLabels', {'OBJECTID': 'no label', 'ADDRESSBLO': 'no label', 'ADDRESSBUI': 'no label', 'ADDRESSPOS': 'no label', 'ADDRESSSTR': 'no label', 'ADDRESSTYP': 'no label', 'DESCRIPTIO': 'no label', 'HYPERLINK': 'no label', 'LANDXADDRE': 'no label', 'LANDYADDRE': 'no label', 'NAME': 'no label', 'PHOTOURL': 'no label', 'ADDRESSFLO': 'no label', 'ADDRESSUNI': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'no label', 'Y_ADDR': 'no label', });
lyr_Buffer_1km_Hospitals6.set('fieldLabels', {'HOSP_NAME': 'no label', 'ADDRESS': 'no label', 'CATEGORY': 'no label', 'POSTCODE': 'no label', 'X-COR': 'no label', 'Y-COR': 'no label', 'field_7': 'no label', 'field_8': 'no label', });
lyr_OSMExtract_railways8.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'MRT_Lines_LINE_COLOUR': 'no label', });
lyr_OSMExtract_railways8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});