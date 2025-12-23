
//隐藏气温图层
function tempHide() {
  for (const id of tempLayerIds) {
    map.setLayoutProperty(id, "visibility", "none");
  }
}

//隐藏降水图层
function precHide() {
  for (const id of precLayerIds) {
    map.setLayoutProperty(id, "visibility", "none");
  }
}

//点击气温图层按钮
document.getElementById("button1").addEventListener("click", (e) => {
  map.setLayoutProperty(tempLayerIds[0], "visibility", "visible");
  type = "temp";
  document.getElementById("month").textContent = months[varmonth];
  const clickedLayer = filterBy1(varmonth, type);
  tempHide();
  precHide();
  map.setLayoutProperty(clickedLayer, "visibility", "visible");
  document.getElementById("legend1").style.display = "inline";
  document.getElementById("legend2").style.display = "none";
});

//点击降水图层按钮
document.getElementById("button2").addEventListener("click", (e) => {
  type = "prec";
  document.getElementById("month").textContent = months[varmonth];
  const clickedLayer = filterBy1(varmonth, type);
  tempHide();
  precHide();
  map.setLayoutProperty(clickedLayer, "visibility", "visible");
  document.getElementById("legend2").style.display = "inline";
  document.getElementById("legend1").style.display = "none";
});

//点击节气图层按钮
document.getElementById("button3").addEventListener("click", (e) => {
  tempHide();
  precHide();
  type = "term";
  document.getElementById("legend2").style.display = "none";
  document.getElementById("legend1").style.display = "none";
});

//点击节气简介的简介
document.getElementById("index1").addEventListener("click", (e) => {
  document.getElementById("map-overlay4").style.display = "block";
  let html=filterBy3(varmonth);
  addhtml(html[0]);
});

//点击节气简介的星象
document.getElementById("index2").addEventListener("click", (e) => {
  document.getElementById("map-overlay4").style.display = "block";
  let html=filterBy3(varmonth);
  addhtml(html[1]);
});

//点击节气简介的气象
document.getElementById("index3").addEventListener("click", (e) => {
  document.getElementById("map-overlay4").style.display = "block";
  let html=filterBy3(varmonth);
  addhtml(html[2]);
});

//点击节气简介的诗词
document.getElementById("index4").addEventListener("click", (e) => {
  document.getElementById("map-overlay4").style.display = "block";
  let html=filterBy3(varmonth);
  addhtml(html[3]);
});

//点击节气简介的养生
document.getElementById("index5").addEventListener("click", (e) => {
  document.getElementById("map-overlay4").style.display = "block";
  let html=filterBy3(varmonth);
  addhtml(html[4]);
});

//点击节气简介的农事
document.getElementById("index6").addEventListener("click", (e) => {
  document.getElementById("map-overlay4").style.display = "block";
  let html=filterBy3(varmonth);
  addhtml(html[5]);
});

//点击关闭简介的icon
document.getElementById("iconClose").addEventListener("click", (e) => {
  document.getElementById("map-overlay4").style.display = "none";
  clearhtml();
});

map.on("load", () => {
  console.log("-----------------begin----------------");
  prec_layer();
  temp_layer();
  addicon();
  console.log("-----------------load-layers----------------");
  document.getElementById("month").textContent = months[0];

  document.getElementById("slider").addEventListener("input", (e) => {
    const month = parseInt(e.target.value, 10); //可以提取选择了哪个点
    varmonth = month;
    const clickedLayer = filterBy1(month, type);
    const clickedIcon = filterBy2(month);
    tempHide();
    precHide();
    IconHide();
    map.setLayoutProperty(clickedLayer, "visibility", "visible");
    for (const id of clickedIcon) {
      map.setLayoutProperty(id, "visibility", "visible");
    }
  });

});

