var fillcolor=new Array("match",
    ["get", "GRIDCODE"],
    -40,
    "rgb(8, 106, 186)",
    -36,
    "rgb(15, 89, 174)",
    -32,
    "rgb(17, 106, 208)",
    -28,
    "rgb(7, 123, 218)",
    -24,
    "rgb(10, 130, 209)",
    -20,
    "rgb(55, 216, 241)",
    -16,
    "rgb(19, 201, 246)",
    -12,
    "rgb(24, 224, 247)",
    -8,
    "rgb(50, 245, 242)",
    -4,
    "rgb(242, 251, 147)",
    0,
    "rgb(236, 201, 126)",
    4,
    "rgb(245, 218, 97)",
    8,
    "rgb(247, 201, 110)",
    12,
    "rgb(248, 146, 63)",
    16,
    "rgb(243, 88, 88)",
    20,
    "rgb(241, 70, 70)",
    24,
    "rgb(239, 52, 52)",
    28,
    "rgb(235, 20, 20)",
    30,
    "rgb(206, 18, 18)",
    32,
    "rgb(186, 18, 18)",
    36,
    "rgb(157, 12, 12)",
    "#ffffff",
)
var fillcolor1=new Array("match",
    ["get", "gridcode"],
    -40,
    "rgb(8, 106, 186)",
    -36,
    "rgb(15, 89, 174)",
    -32,
    "rgb(17, 106, 208)",
    -28,
    "rgb(7, 123, 218)",
    -24,
    "rgb(10, 130, 209)",
    -20,
    "rgb(55, 216, 241)",
    -16,
    "rgb(19, 201, 246)",
    -12,
    "rgb(24, 224, 247)",
    -8,
    "rgb(50, 245, 242)",
    -4,
    "rgb(242, 251, 147)",
    0,
    "rgb(236, 201, 126)",
    4,
    "rgb(245, 218, 97)",
    8,
    "rgb(247, 201, 110)",
    12,
    "rgb(248, 146, 63)",
    16,
    "rgb(243, 88, 88)",
    20,
    "rgb(241, 70, 70)",
    24,
    "rgb(239, 52, 52)",
    28,
    "rgb(235, 20, 20)",
    30,
    "rgb(206, 18, 18)",
    32,
    "rgb(186, 18, 18)",
    36,
    "rgb(157, 12, 12)",
    "#ffffff",
)
function temp_layer() {
    map.addLayer({
        id: "temp0204",
        type: "fill",
        source: {
          type: "geojson",
          data: "./气温/0204立春.json",
        },
        layout: {
          visibility: "none",
        },
        paint: {
          "fill-opacity": 0.4,
          "fill-color": fillcolor,
        },
      });
    map.addLayer({
        id: "temp0218",
        type: "fill",
        source: {
          type: "geojson",
          data: "./气温/0218雨水.json",
        },
        layout: {
          visibility: "none",
        },
        paint: {
          "fill-opacity": 0.4,
          "fill-color": fillcolor
        },
      });
    map.addLayer({
        id: "temp0305",
        type: "fill",
        source: {
          type: "geojson",
          data: "./气温/0305惊蛰.json",
        },
        layout: {
          visibility: "none",
        },
        paint: {
          "fill-opacity": 0.4,
          "fill-color": fillcolor
        },
      });
      map.addLayer({
        id: "temp0320",
        type: "fill",
        source: {
          type: "geojson",
          data: "./气温/0320春分.json",
        },
        layout: {
          visibility: "none",
        },
        paint: {
          "fill-opacity": 0.4,
          "fill-color": fillcolor
        },
      });
    map.addLayer({
        id: "temp0404",
        type: "fill",
        source: {
          type: "geojson",
          data: "./气温/0404清明.json",
        },
        layout: {
          visibility: "none",
        },
        paint: {
          "fill-opacity": 0.4,
          "fill-color": fillcolor
        },
      });
    map.addLayer({
    id: "temp0420",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/0420谷雨.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color":fillcolor
    },
  });
  map.addLayer({
    id: "temp0505",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/0505立夏.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": fillcolor
    },
  });
  map.addLayer({
    id: "temp0521",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/0521小满.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": fillcolor
    },
  });
  map.addLayer({
    id: "temp0605",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/0605芒种.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": fillcolor
    },
  });
  map.addLayer({
    id: "temp0621",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/0621夏至.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color":fillcolor
    },
  });
  map.addLayer({
    id: "temp0707",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/0707小暑.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": fillcolor
    },
  });
  map.addLayer({
    id: "temp0723",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/0723大暑.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": fillcolor
    },
  });
  map.addLayer({
    id: "temp0807",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/0807立秋.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color":fillcolor
    },
  });
  map.addLayer({
    id: "temp0823",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/0823处暑.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": fillcolor
    },
  });
  map.addLayer({
    id: "temp0907",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/0907白露.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": fillcolor
    },
  });
  map.addLayer({
    id: "temp0923",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/0923秋分.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": fillcolor
    },
  });
  map.addLayer({
    id: "temp1008",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/1008寒露.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color":fillcolor1
    },
  });
  map.addLayer({
    id: "temp1023",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/1023霜降.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": fillcolor1
    },
  });
  map.addLayer({
    id: "temp1107",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/1107立冬.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color":fillcolor1
    },
  });
  map.addLayer({
    id: "temp1122",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/1122小雪.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": fillcolor1
    },
  });
  map.addLayer({
    id: "temp1207",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/1207大雪.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color":fillcolor1
    },
  });
  map.addLayer({
    id: "temp1222",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/1222冬至.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": fillcolor1
    },
  });
  map.addLayer({
    id: "temp0105",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/0105小寒.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color": fillcolor1
    },
  });
  map.addLayer({
    id: "temp0120",
    type: "fill",
    source: {
      type: "geojson",
      data: "./气温/0120大寒.json",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.4,
      "fill-color":fillcolor1
    },
  });
}
