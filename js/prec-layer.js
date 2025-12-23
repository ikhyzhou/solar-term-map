var preccolor=new Array(
  "step",
  ["get", "gridcode"],
  "rgb(224, 234, 251)",
  0,
  "rgb(193, 214, 246)",
  10,
  "rgb(161, 193, 242)",
  20,
  "rgb(126, 170, 237)",
  30,
  "rgb(100, 153, 232)",
  40,
  "rgb(64, 129, 226)",
  50,
  "rgb(64, 129, 226)",
  60,
  "rgb(29, 102, 211)",
  70,
  "rgb(25, 85, 174)",
  80,
  "rgb(20, 71, 148)",
  90,
  "rgb(20, 71, 148)",
  100,
  "rgb(11, 47, 101)",
  110,
  "#ffffff",
);
var preccolor1=new Array( 
  "step",
  ["get", "GRIDCODE"],
  "rgb(224, 234, 251)",
  0,
  "rgb(193, 214, 246)",
  10,
  "rgb(161, 193, 242)",
  20,
  "rgb(126, 170, 237)",
  30,
  "rgb(100, 153, 232)",
  40,
  "rgb(64, 129, 226)",
  50,
  "rgb(64, 129, 226)",
  60,
  "rgb(29, 102, 211)",
  70,
  "rgb(25, 85, 174)",
  80,
  "rgb(20, 71, 148)",
  90,
  "rgb(20, 71, 148)",
  100,
  "rgb(11, 47, 101)",
  110,
  "#ffffff",
);
var preccolor2=new Array(
  "step",
  ["get", "GRIDCODE_1"],
  "rgb(224, 234, 251)",
  0,
  "rgb(193, 214, 246)",
  10,
  "rgb(161, 193, 242)",
  20,
  "rgb(126, 170, 237)",
  30,
  "rgb(100, 153, 232)",
  40,
  "rgb(64, 129, 226)",
  50,
  "rgb(64, 129, 226)",
  60,
  "rgb(29, 102, 211)",
  70,
  "rgb(25, 85, 174)",
  80,
  "rgb(20, 71, 148)",
  90,
  "rgb(20, 71, 148)",
  100,
  "rgb(11, 47, 101)",
  110,
  "#ffffff",
);
function prec_layer() {
  map.addLayer({
    id: "prec0204",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0204立春.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor
    },
  });
  map.addLayer({
    id: "prec0218",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0218雨水.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor
    },
  });
  map.addLayer({
    id: "prec0305",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0305惊蛰.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor
    },
  });
  map.addLayer({
    id: "prec0320",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0320春分.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor
    },
  });
  map.addLayer({
    id: "prec0404",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0404清明.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color":preccolor
    },
  });
  map.addLayer({
    id: "prec0420",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0420谷雨.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor
    },
  });
  map.addLayer({
    id: "prec0505",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0505立夏.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor2
    },
  });
  map.addLayer({
    id: "prec0521",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0521小满.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor1
    },
  });
  map.addLayer({
    id: "prec0605",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0605芒种.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color":preccolor1
    },
  });
  map.addLayer({
    id: "prec0621",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0621夏至.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor1
    },
  });
  map.addLayer({
    id: "prec0707",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0707小暑.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor1
    },
  });
  map.addLayer({
    id: "prec0723",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0723大暑.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor1
    },
  });
  map.addLayer({
    id: "prec0807",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0807立秋.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor
    },
  });
  map.addLayer({
    id: "prec0823",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0823处暑.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor
    },
  });
  map.addLayer({
    id: "prec0907",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0907白露.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor
    },
  });
  map.addLayer({
    id: "prec0923",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0923秋分.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor
    },
  });
  map.addLayer({
    id: "prec1008",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/1008寒露.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color":preccolor
    },
  });
  map.addLayer({
    id: "prec1023",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/1023霜降.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor
    },
  });
  map.addLayer({
    id: "prec1107",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/1107立冬.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color":preccolor1
    },
  });
  map.addLayer({
    id: "prec1122",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/1122小雪.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor1
    },
  });
  map.addLayer({
    id: "prec1207",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/1207大雪.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor1
    },
  });
  map.addLayer({
    id: "prec1222",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/1222冬至.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor1
    },
  });
  map.addLayer({
    id: "prec0105",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0105小寒.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": preccolor1
    },
  });
  map.addLayer({
    id: "prec0120",
    type: "fill",
    source: {
      type: "geojson",
      data: "./降水/0120大寒.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color":preccolor1
    },
  });
}
