var wms_layers = [];


        var lyr_Argenmaps_0 = new ol.layer.Tile({
            'title': 'Argenmaps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_Hitos_MalvinasArgentinas_22185_1 = new ol.format.GeoJSON();
var features_Hitos_MalvinasArgentinas_22185_1 = format_Hitos_MalvinasArgentinas_22185_1.readFeatures(json_Hitos_MalvinasArgentinas_22185_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hitos_MalvinasArgentinas_22185_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hitos_MalvinasArgentinas_22185_1.addFeatures(features_Hitos_MalvinasArgentinas_22185_1);
var lyr_Hitos_MalvinasArgentinas_22185_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hitos_MalvinasArgentinas_22185_1, 
                style: style_Hitos_MalvinasArgentinas_22185_1,
                popuplayertitle: 'Hitos_MalvinasArgentinas_22185',
                interactive: true,
                title: '<img src="styles/legend/Hitos_MalvinasArgentinas_22185_1.png" /> Hitos_MalvinasArgentinas_22185'
            });

lyr_Argenmaps_0.setVisible(true);lyr_Hitos_MalvinasArgentinas_22185_1.setVisible(true);
var layersList = [lyr_Argenmaps_0,lyr_Hitos_MalvinasArgentinas_22185_1];
lyr_Hitos_MalvinasArgentinas_22185_1.set('fieldAliases', {'qc_id': 'qc_id', 'nombre': 'Hito', });
lyr_Hitos_MalvinasArgentinas_22185_1.set('fieldImages', {'qc_id': 'Hidden', 'nombre': 'TextEdit', });
lyr_Hitos_MalvinasArgentinas_22185_1.set('fieldLabels', {'nombre': 'no label', });
lyr_Hitos_MalvinasArgentinas_22185_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});