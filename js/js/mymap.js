// ---------------------------------------
// // GMap 3 - Set Address on line 79
// ---------------------------------------

var styles = [
    {
      "featureType":"landscape",
      "stylers":[
          {"saturation":-100},
          {"lightness":100},
          {"visibility":"on"}
          ]
        },
      {
        "featureType":"poi",
        "stylers":[
            {"saturation":-100},
            {"lightness":51},
            {"visibility":"simplified"}
            ]
          },
      {
        "featureType":"road.highway",
        "stylers":[
            {"saturation":-100},
            {"visibility":"simplified"}
            ]
          },
      {
        "featureType":"road.arterial",
        "stylers":[
            {"saturation":-100},
            {"lightness":30},
            {"visibility":"on"}
            ]
          },
      {
          "featureType":"road.local",
          "stylers":[
            {"saturation":-100},
            {"lightness":40},
            {"visibility":"on"}
            ]
          },
      {
          "featureType":"transit",
          "stylers":[
            {"saturation":-100},
            {"visibility":"simplified"}
            ]
          },
      {
          "featureType":"administrative.province",
          "stylers":[{"visibility":"on"}
            ]
          },
      {
          "featureType":"water",
          "elementType":"labels",
          "stylers":[
            {"visibility":"on"},
            {"lightness":-25},
            {"saturation":-100}
            ]
          },
      { 
          "featureType":"water",
          "elementType":"geometry",
          "stylers":[
            {"hue":"#ffff00"},
            {"lightness":-25},
            {"saturation":-97}
            ]
          }
      ];

$("#mymap").gmap3({
    marker:{
        address: '795 Folsom Ave, San Francisco, CA 94107', 
        data:"Here I am", 
        options:{icon: "http://maps.google.com/mapfiles/marker_green.png"},
        events:{
            mouseover: function(marker, event, context){
            var map = $(this).gmap3("get"),
                infowindow = $(this).gmap3({get:{name:"infowindow"}});
                if (infowindow){
                    infowindow.open(map, marker);
                    infowindow.setContent(context.data);
                } else {
                $(this).gmap3({
                    infowindow:{
                    anchor:marker, 
                    options:{content: context.data}
                    }
                });
                }
            },
            mouseout: function(){
                var infowindow = $(this).gmap3({get:{name:"infowindow"}});
                if (infowindow){
                    infowindow.close();
                }
            }
        }
    },
    map:{
      options:{
          styles: styles,
            zoom: 14,
            scrollwheel: false,
            draggable: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
                },
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: false,
            streetViewControl: false
        }
    }
});

