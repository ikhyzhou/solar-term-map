var type;
var varmonth = 0;
const months = [
  "立春",
  "雨水",
  "惊蛰",
  "春分",
  "清明",
  "谷雨",
  "立夏",
  "小满",
  "芒种",
  "夏至",
  "小暑",
  "大暑",
  "立秋",
  "处暑",
  "白露",
  "秋分",
  "寒露",
  "霜降",
  "立冬",
  "小雪",
  "大雪",
  "冬至",
  "小寒",
  "大寒",
];
//筛选时间轴对应的节气图层
function filterBy1(month, type) {
  document.getElementById("month").textContent = months[month];
  let clickedLayer;
  if (type == "temp") {
    switch (month) {
      case 0:
        clickedLayer = "temp0204";
        break;
      case 1:
        clickedLayer = "temp0218";
        break;
      case 2:
        clickedLayer = "temp0305";
        break;
      case 3:
        clickedLayer = "temp0320";
        break;
      case 4:
        clickedLayer = "temp0404";
        break;
      case 5:
        clickedLayer = "temp0420";
        break;
      case 6:
        clickedLayer = "temp0505";
        break;
      case 7:
        clickedLayer = "temp0521";
        break;
      case 8:
        clickedLayer = "temp0605";
        break;
      case 9:
        clickedLayer = "temp0621";
        break;
      case 10:
        clickedLayer = "temp0707";
        break;
      case 11:
        clickedLayer = "temp0723";
        break;
      case 12:
        clickedLayer = "temp0807";
        break;
      case 13:
        clickedLayer = "temp0823";
        break;
      case 14:
        clickedLayer = "temp0907";
        break;
      case 15:
        clickedLayer = "temp0923";
        break;
      case 16:
        clickedLayer = "temp1008";
        break;
      case 17:
        clickedLayer = "temp1023";
        break;
      case 18:
        clickedLayer = "temp1107";
        break;
      case 19:
        clickedLayer = "temp1122";
        break;
      case 20:
        clickedLayer = "temp1207";
        break;
      case 21:
        clickedLayer = "temp1222";
        break;
      case 22:
        clickedLayer = "temp0105";
        break;
      case 23:
        clickedLayer = "temp0120";
        break;
    }
  } else if (type == "prec") {
    switch (month) {
      case 0:
        clickedLayer = "prec0204";
        break;
      case 1:
        clickedLayer = "prec0218";
        break;
      case 2:
        clickedLayer = "prec0305";
        break;
      case 3:
        clickedLayer = "prec0320";
        break;
      case 4:
        clickedLayer = "prec0404";
        break;
      case 5:
        clickedLayer = "prec0420";
        break;
      case 6:
        clickedLayer = "prec0505";
        break;
      case 7:
        clickedLayer = "prec0521";
        break;
      case 8:
        clickedLayer = "prec0605";
        break;
      case 9:
        clickedLayer = "prec0621";
        break;
      case 10:
        clickedLayer = "prec0707";
        break;
      case 11:
        clickedLayer = "prec0723";
        break;
      case 12:
        clickedLayer = "prec0807";
        break;
      case 13:
        clickedLayer = "prec0823";
        break;
      case 14:
        clickedLayer = "prec0907";
        break;
      case 15:
        clickedLayer = "prec0923";
        break;
      case 16:
        clickedLayer = "prec1008";
        break;
      case 17:
        clickedLayer = "prec1023";
        break;
      case 18:
        clickedLayer = "prec1107";
        break;
      case 19:
        clickedLayer = "prec1122";
        break;
      case 20:
        clickedLayer = "prec1207";
        break;
      case 21:
        clickedLayer = "prec1222";
        break;
      case 22:
        clickedLayer = "prec0105";
        break;
      case 23:
        clickedLayer = "prec0120";
        break;
    }
  } else if (type == "term") {
    clickedLayer = null;
  }
  return clickedLayer;
}

//气温图层
const tempLayerIds = [
  "temp0204",
  "temp0218",
  "temp0305",
  "temp0320",
  "temp0404",
  "temp0420",
  "temp0505",
  "temp0521",
  "temp0605",
  "temp0621",
  "temp0707",
  "temp0723",
  "temp0807",
  "temp0823",
  "temp0907",
  "temp0923",
  "temp1008",
  "temp1023",
  "temp1107",
  "temp1122",
  "temp1207",
  "temp1222",
  "temp0105",
  "temp0120",
];

//降水图层
const precLayerIds = [
  "prec0204",
  "prec0218",
  "prec0305",
  "prec0320",
  "prec0404",
  "prec0420",
  "prec0505",
  "prec0521",
  "prec0605",
  "prec0621",
  "prec0707",
  "prec0723",
  "prec0807",
  "prec0823",
  "prec0907",
  "prec0923",
  "prec1008",
  "prec1023",
  "prec1107",
  "prec1122",
  "prec1207",
  "prec1222",
  "prec0105",
  "prec0120",
];

//筛选时间轴对应的习俗点图层
function filterBy2(month) {
  document.getElementById("month").textContent = months[month];
  let clickedIcon;
  switch (month) {
    case 0:
      clickedIcon = ["0204-01", "0204-02","0204-03", "0204-04","0204-05"];
      break;
    case 1:
      clickedIcon = ["0218-03","0218-05"];
      break;
    case 2:
      clickedIcon = [ "0305-01","0305-02","0305-03","0305-05"];
      break;
    case 3:
      clickedIcon = [ "0321-01","0321-02","0321-03","0321-04","0321-05",];
      break;
    case 4:
      clickedIcon = ["0404-01","0404-02","0404-03","0404-04","0404-05",];
      break;
    case 5:
      clickedIcon = ["0420-01","0420-02","0420-03","0420-04","0420-05",];
      break;
    case 6:
      clickedIcon = ["0505-01","0505-02","0505-03","0505-05",];
      break;
    case 7:
      clickedIcon = ["0521-01","0521-02",];
      break;
    case 8:
      clickedIcon = ["0606-01","0606-02","0606-03",];
      break;
    case 9:
      clickedIcon = ["0621-01","0621-02","0621-03",]
      break;
      case 10:
        clickedIcon = ["0707-01","0707-02"];
        break;
      case 11:
        clickedIcon = ["0722-01","0722-02","0722-03",];
        break;
    case 12:
      clickedIcon = [ "0807-01","0807-02","0807-03",];
      break;
    case 13:
      clickedIcon = ["0823-01","0823-02","0823-04",];
      break;
    case 14:
      clickedIcon = ["0907-01","0907-02",];
      break;
    case 15:
      clickedIcon = ["0923-01","0923-02","0923-03",];
      break;
    case 16:
      clickedIcon = ["1008-02","1008-03","1008-05",];
      break;
    case 17:
      clickedIcon = [ "1023-01","1023-02","1023-03",];
      break;
    case 18:
      clickedIcon = ["1107-01","1107-02","1107-03","1107-05",];
      break;
    case 19:
      clickedIcon = ["1122-02",];
      break;
    case 20:
      clickedIcon = ["1207-02","1207-03",];
      break;
    case 21:
      clickedIcon = ["1222-01","1222-02","1222-03",];
      break;
    case 23:
      clickedIcon = ["0105-01","0105-02","0105-03","0105-04",];
      break;
    case 23:
      clickedIcon = ["0120-01","0120-02",];
      break;
  }
  return clickedIcon;
}

var varhtml = "";
//筛选时间轴对应的节气简介
function filterBy3(month) {
  document.getElementById("month").textContent = months[month];
  let html;
  switch (month) {
    case 0:
      html = html_0204;
      break;
    case 1:
      clickedIcon = html_0218;
      break;
  }
  return html;
}
