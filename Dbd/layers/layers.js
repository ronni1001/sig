var wms_layers = [];
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
var format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.format.GeoJSON();
var features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.readFeatures(json_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.addFeatures(features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0);var lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
                style: style_LapakGIScomBatas_Kecamatan_BIG_PPBW_0,
    title: '[LapakGIS.com] Batas_Kecamatan_BIG_PPBW<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_0.png" />  24348.0000 - 38009.6000 <br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_1.png" />  38009.6000 - 51671.2000 <br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_2.png" />  51671.2000 - 65332.8000 <br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_3.png" />  65332.8000 - 78994.4000 <br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_4.png" />  78994.4000 - 92656.0000 <br />'
        });var format_Dbd_1 = new ol.format.GeoJSON();
var features_Dbd_1 = format_Dbd_1.readFeatures(json_Dbd_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dbd_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Dbd_1.addFeatures(features_Dbd_1);var lyr_Dbd_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dbd_1, 
                style: style_Dbd_1,
                title: '<img src="styles/legend/Dbd_1.png" /> Dbd'
            });

lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.setVisible(true);lyr_Dbd_1.setVisible(true);
var layersList = [baseLayer,lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0,lyr_Dbd_1];
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Data Pendk': 'Data Pendk', });
lyr_Dbd_1.set('fieldAliases', {'DBD': 'DBD', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Data Pendk': 'TextEdit', });
lyr_Dbd_1.set('fieldImages', {'DBD': 'TextEdit', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Data Pendk': 'no label', });
lyr_Dbd_1.set('fieldLabels', {'DBD': 'no label', });
lyr_Dbd_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});