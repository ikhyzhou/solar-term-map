function addicon() {
  map.loadImage(
    "https://i.postimg.cc/T293p50D/jisi-icon.png",
    (error, image) => {
      /*if (error) throw error;*/
      map.addImage("祭祀", image);
    }
  );
  map.loadImage(
    "https://i.postimg.cc/RZ7BDNFR/image.png",
    (error, image) => {
      /*if (error) throw error;*/
      map.addImage("玩乐", image);
    }
  );
  map.loadImage(
    "https://i.postimg.cc/YSRtjJfw/image.png",
    (error, image) => {
      /*if (error) throw error;*/
      map.addImage("艺术", image);
    }
  );
  map.loadImage(
    "https://i.postimg.cc/658txNx8/tea-icon-jpg.png",
    (error, image) => {
      /*if (error) throw error;*/
      map.addImage("茶文化", image);
    }
  );
  map.loadImage(
    "https://i.postimg.cc/LXXF5DVC/image.png ",
    (error, image) => {
      /*if (error) throw error;*/
      map.addImage("饮食", image);
    }
  );

  map.addSource("0204-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">迎春</strong><br><img class="picture" src="图标\\0204立春\\迎春.png" width="200px" height="150px" alt="" ><p>迎春是立春的重要活动，须事先做好准备，进行预演，俗称“演春”，目的是把春天和句（gōu）芒神接回来。句芒为古代民间神话中的春神，即草木神，也是主宰生命生长之神。</p>在浙江衢州九华立春祭活动中，迎春仪式是一项重要内容。迎春祭祀前，要预备“迎春接福”案桌，将案桌放置在梧桐祖殿大门外正中位，在案桌前披上写有“迎春接福”字样的红纸（锦），案桌中间放饭甑，盛得尖满，甑后置一杯清茶，左右放置香炉、烛台、梅花、松柏、竹枝等，象征洁净、长青和富足。在交春时刻前，主殿开门迎春；交春时刻，鸣放鞭炮，焚香行祭礼迎春。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [118.855449, 29.052044],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">打春牛</strong><br><img class="picture" src="图标\\0204立春\\打春牛.jpg" width="200px" height="150px" alt="" ><p>打春牛是流行于河南省南阳市内乡县世代传承的立春节气习俗。春季万物复苏，打春牛预示农耕活动的开始，有规劝农事、鼓励春耕的含义。立春日打春牛表示劝农春耕和祈求丰收，具有浓厚的农耕文明特色，其从官、民共享的习俗到民俗的演变过程，具有历史研究价值；围绕打春牛习俗，当地流传有众多的传说故事、谚语歌谣等，涉及到剪纸、春鸡、社火等，具有较高的文学、艺术价值；该项目是群众掌握时间节令、气候变化规律而形成的知识体系和社会实践，具有科学价值。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [111.823369, 33.071416],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">班春劝农</strong><br><img class="picture" src="图标\\0204立春\\班农劝春.png" width="200px" height="150px" alt="" ><p>是浙江省遂昌县保留的传统农业文明中的迎春文化表现形式。“班”同“颁”，“班春”即颁布春令，“劝农”以劝农事，策励春耕。自古以来在遂昌任职的县级长官都要在春耕来临之际，举行鞭春礼仪，颁布春令、劝农耕作，名曰“班春劝农”。明代著名文学家汤显祖（1500—1616）于万历二十一年（1593）任遂昌知县时，向邑人颁布“春耕令”，并作《班春二首》。其戏曲名著《牡丹亭·劝农》的民俗背景就取材于遂昌。民国后，官方劝农活动停办，民间劝农活动依然举行。城乡民众在立春日，家家备香烛、祭天地（神）、插梅花、鸣鞭炮，以示“迎春接福”。此俗一直延续至今。当地民众视“立春”如大年。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [119.281569, 28.607843],
          },
        },
      ],
    },
  });
  map.addSource("0204-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">咬春</strong><br><img class="picture" src="图标\\0204立春\\咬春1.png" width="200px" height="150px" alt="" ><p>咬春是指立春日吃春盘、吃春饼、吃春卷、嚼萝卜之俗，一个“咬”字，道出节令的众多食俗。咬春之俗还有嚼吃萝卜。《燕京岁时记》中云：“是日，富家多食春饼，妇女等多买萝卜而食之，曰‘咬春’。谓可以却春困也。”北方人多爱吃生萝卜，尤以心里美和小红萝卜为最佳。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.39622, 39.923568],
          },
        },
      ],
    },
  });
  map.addSource("0204-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">戴春鸡</strong><br><img class="picture" src="图标\\0204立春\\戴春鸡.png" width="200px" height="150px" alt="" ><p>戴春鸡是陕西铜川一带的古老风俗。每年立春日，母亲用布制作一个约3厘米长的公鸡，缝在小孩帽子的顶端，表示祝愿春吉（鸡）</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [108.936593, 34.901927],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">佩燕子</strong><br><img class="picture" src="图标\\0204立春\\佩燕子.jpg" width="200px" height="150px" alt="" ><p>佩燕子是关中一带的习俗。燕子是候鸟，是春的使者，也是幸福吉利的象征，向阳人家都喜欢在自己院落房舍里，招惹燕子繁衍生息。每年立春日，人们喜欢在胸前佩戴用彩绸剪成的燕子，特别是儿童，戴在胸前，燕子翻飞、兴高采烈。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [108.83, 34.071407],
          },
        },
      ],
    },
  });
  map.addSource("0204-04", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">说春</strong><br><img class="picture" src="图标\\0204立春\\说春.jpg" width="200px" height="150px" alt="" ><p>石阡说春是贵州民俗。说春一般在每年春节或立春时开始，春分时结束。说春词实际是唱，有简单的曲调，各地不一。“说春”分为“说正春”及“说野春”。“说正春”有固定春词，其内容主要是说“二十四个农事节气”、“渔樵耕读”，内容涵盖历史、地理、人文等方面。“说野春”又称为“说耍耍春”、“说花花春”，内容丰富、灵活多变、不拘一格。“春官”手端春牛，所到人家，均要散发一张农历、一张财神春贴，意在劝农春耕并祝福主人吉祥如意。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [108.231612, 27.518954],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">扬州剪纸</strong><br><img class="picture" src="图标\\0204立春\\扬州剪纸.png" width="200px" height="150px" alt="" ><p>扬州是中国剪纸流行最早的地区之一，唐宋时期就有“剪纸报春”的习俗。扬州人在立春之日剪纸为花，做成春蝶、春线、春胜等样式，“或悬于佳人之首，或缀于花下”，观以为乐。另外还剪制纸钱、纸马等，专门用于祭奠。至清代，扬州商业兴盛，剪纸艺人亦数量大增，嘉、道年间的著名剪纸有艺人包钧等，技艺超群，有“神剪”之誉。扬州的剪纸艺人还根据需要创作绣品底样，大至门帘帐沿、被服枕套，小至镜服香囊、绢帕笔袋，有绣花必有纸样，扬州人称剪纸样的艺人为“剪花样的”。</p><p>扬州剪纸线条清秀流畅，构图精巧雅致，形象夸张简洁，技法变中求新，形成了特有的“剪味纸感”和艺术魅力，为中国南方民间剪纸艺术的代表之一。其用纸以安徽手抄宣为主，厚薄适中，无色染，质地平整。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [119.42546, 32.40092],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">大鼓舞</strong><br><img class="picture" src="图标\\0204立春\\大鼓舞.jpg" width="200px" height="150px" alt="" ><p>大鼓舞流传于云南省西双版纳傣族自治州景洪市基诺山基诺族乡的基诺族村寨。基诺族跳大鼓舞是为了感谢传说中用大鼓拯救了基诺人的创世女神阿嫫腰白。跳大鼓舞以过“特懋克节”时最为隆重，时间是在立春后三天。跳大鼓舞有一套完整的仪式：舞前，寨老们要先杀一头乳猪、一只鸡，供于鼓前，由七位长老磕头拜祭，其中一人念诵祭词，祈祷大鼓给人们带来吉祥平安。祭毕，由一人双手执鼓槌边击边舞，另有若干击、击镲、伴舞伴歌者，跳大鼓舞时的唱词称“乌悠壳”，歌词多为基诺人的历史、道德和习惯等内容，舞蹈动作有“拜神灵”、“欢乐跳”、“过年调”等。大鼓是基诺族的礼器、重器和神物，只能挂在卓巴（寨老）家的神柱上，制造大鼓要遵循很严格的程序。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [101.011163, 22.042443],
          },
        },
      ],
    },
  });
  map.addSource("0204-05", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">茶祀祭祖</strong><br><img class="picture" src="图标\\0204立春\\茶祀祭祖.jpg" width="200px" height="150px" alt="" ><p>茶祭是茶俗中重要内容。我国古代茶祭通常有3种形式：一是用干茶做祭品；二是以茶水祭祀；三是用茶壶、茶盅象征茶叶祭祀。民间有 “三茶六酒”（三杯茶、六杯酒）和 “清茶四果” 作为祭品的习惯。</p><p>我国北方，在辽宁、内蒙古等地区，人们以茶祭祖，祈求一年五谷丰登。我国南方，江西地区的人们在迎春祭祀活动中，有供茶的习俗，并配上水果、五谷种子来接春。在江西婺源，人们还会在堂屋正中供上米、大豆、茶叶等，一是供奉先人，二是祈祷农作物的丰收。茶农还会在自家祭祀的主神前摆放茶水、水果等供品，祈愿有一个好年头。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [112.741067, 27.250915],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">品茶迎春</strong><br><img class="picture" src="图标\\0204立春\\品茶迎春.jpg" width="200px" height="150px" alt="" ><p>我国南方很多地区在立春时节不仅会吃春卷、喝春酒，还有饮春茶的习俗。比如浙江温州人有煨春茶的习惯。旧时，温州人的春茶颇为考究，将柚子切开，加上白豆（或黑豆）放在茶中饮食。后来便将一些食材放在 “汤罐” 中煨得烂熟。煨好春茶后，温州人先敬祖先，后供家人、邻居们分食，共同迎接春天的到来 。在江西，还有喝青果茶的习俗，即在绿茶中放一颗青橄榄，口感清香甘甜，具有祈愿生活甜美的寓意。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.706191, 28.002362],
          },
        },
      ],
    },
  });
  map.addSource("0305-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">蒙鼓皮</strong><br><img class="picture" src="图标\\0305惊蛰\\蒙鼓皮.jpg" width="200px" height="150px" alt="" ><p>根据《周礼》卷四十《挥人》篇所记：“凡冒鼓必以启蛰之日”。惊蛰是由雷声引起的。古人想象雷神是位长了翅膀鸟嘴人身的大神，一手持捶，一手连击环绕周身的多面天鼓，发出隆隆的雷声。惊蛰这天，天庭里雷神击天鼓，人间也利用这个时机来蒙鼓皮。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [113.880838, 23.112166],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">祭白虎</strong><br><img class="picture" src="图标\\0321春分\\祭白虎.jpg" width="200px" height="150px" alt="" ><p>根据民间传说，白虎是口舌、是非之神，每年都会在这天出来觅食，开口噬人，犯白虎会导致百般不顺。人们为了自保，便在惊蛰之时祭白虎。拜祭用纸绘制的老虎，虎口画有一对獠牙。拜祭时用猪血猪肉，寓意白虎吃饱后不再出口伤人，化解是非。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [110.465976, 22.938139],
          },
        },
      ],
    },
  });
  map.addSource("0305-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃梨</strong><br><img class="picture" src="图标\\0305惊蛰\\吃梨.jpg" width="200px" height="150px" alt="" ><p> 民间惊蛰吃梨的习俗由来已久。“梨”与“离”谐音，据传有不忘先祖、离家创业的意思；或说吃梨寓意虫害远离庄稼，保障全年好收成。从节气养生来看，此时万物复苏，气候比较干燥，很容易外感咳嗽。生梨性寒味甘，吃梨确也有润肺止咳、滋阴清热的功效。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [103.836787, 36.078302],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃炒虫</strong><br><img class="picture" src="图标\\0321春分\\吃炒虫.jpg" width="200px" height="150px" alt="" ><p>惊蛰雷动，百虫“惊而出走”，或殃害庄稼，或滋扰生活。浙江宁波地区的农家视惊蛰为“扫虫节”，人们会拿着扫帚到田里举行扫虫仪式。闽西古汀州地区的客家人，或在热水中煮带皮毛的芋子，或炒豆子、炒米谷，认为这样可以消灭多种小虫。在江西上犹、崇义以及吉安遂川客家，惊蛰日上午，农家将谷种、豆种、南瓜和向日葵的种子等取一小撮放入锅中干炒，谓之“炒虫”，炒熟后分给自家或邻居小孩食之，据说可保五谷丰收，不受虫害。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [114.623801, 26.082418],
          },
        },
      ],
    },
  });
  map.addSource("0305-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">打小人</strong><br><img class="picture" src="图标\\0305惊蛰\\打小人.png" width="200px" height="150px" alt="" ><p>春雷响、蛰虫惊，冬眠的蛇虫鼠蚁，家中的爬虫走蚁此时都会出来觅食。据记载，人们在惊蛰这天把石灰洒在门槛外，石灰原本具有杀虫的功效，人们相信这样做虫蚁不敢上门，虫害可以杜绝。古人会燃香、艾草，熏室内四角，驱虫除霉，久而久之，演变成拍打“小人”和驱赶霉运的习俗。作为旧时的民间习俗，“打小人”的用意在于通过拍打代表“小人”的纸公仔，驱赶身边的瘟神，宣泄内心的不满，抒发个人的不忿，以求新的一年事事如意。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [114.110527, 22.642235],
          },
        },
      ],
    },
  });
  map.addSource("0305-05", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">喊山祭茶</strong><br><img class="picture" src="图标\\0305惊蛰\\喊山祭茶.png" width="200px" height="150px" alt="" ><p>位于江西与福建交界处的武夷山，在惊蛰这一天有“喊山”的习俗，“喊山”是一种祭茶仪式。在古代，惊蛰时节，在武夷山茶区内，地方的官员带领着众人进行击鼓鸣锣，大喊“茶发芽”，寓意催茶发芽、采摘到好茶。清代高士奇在《天禄识馀·喊山》描述了这一场景：“宋御茶园在武夷第四曲，中有喊山台。每岁惊蛰日，有司为文致祭。祭毕，鸣金扬鼓，同喊曰：‘茶发芽！’谓之喊山。”宋人赵汝砺在《北苑别录》中，也描述了惊蛰喊山之盛况，引人神往：“春虫震蛰，千夫雷动，一时之盛，诚为壮观。”</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [117.963042, 27.668108],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">宜饮白茶</strong><br><img class="picture" src="图标\\0305惊蛰\\饮白茶.jpg" width="200px" height="150px" alt="" ><p>惊蛰节气春暖花开，也是病毒和细菌活跃的时期。这一时节属肝病的高发季节，养生宜顺应阳气升发、万物始生的特点，应开始疏肝健脾，可多吃新鲜蔬菜及蛋白质丰富的食物，比如春笋、菠菜、芹菜等，增强体质，抵御病菌；如果偶感风寒，有些咳嗽，可食莲子、枇杷、罗汉果等，有止渴功效的养生之物。此时，喝白茶也是不错的选择。因为白茶毫香清鲜，汤色黄亮清澈，滋味鲜醇，茶性清凉，含有二氢杨梅素等黄酮类物质，能够起到明目清心、保肝护肝的作用</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.226613, 27.32924],
          },
        },
      ],
    },
  });
  map.addSource("0321-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">祭日</strong>v<br><img class="picture" src="图标\\0321春分\\祭日.jpg" width="200px" height="150px" alt="" ><p>春分也是节日和祭祀庆典的日子。根据史书记载，古代帝王有春分祭日，秋分祭月的仪式，历代相传。古代帝王的祭日场所多设在京郊，北京的日坛又叫朝日坛，是明、清两代皇帝祭祀大明神（太阳）的地方。朝日定在春分的卯刻（日出时），每逢甲、丙、戊、庚、壬年份，皇帝亲自祭祀，其余的年岁由官员代祭。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [119.928709, 32.474566],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">祭祖</strong><br><p>早春二月，在山东、浙江、贵州以及大部分客家地区，人们开始扫墓祭祖，也叫春祭。扫墓前先在祠堂举行隆重的祭祖仪式，杀猪、宰羊，请鼓手吹奏，请人念祭文，行三献礼。全族和全村参加，扫祭开基祖和远祖坟墓，规模很大，有时多达几百甚至上千人。其后，分房扫祭各房祖先坟墓，最后各家扫祭家庭私墓。大部分客家地区春季祭祖扫墓，都从春分或更早开始，最迟清明结束。民间有一种说法，清明后墓门关闭，去世的祖先就无法受用后人的祭奠了。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [117.107643, 36.685277],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">社日酬神</strong><br><img class="picture" src="图标\\0321春分\\社日酬神.jpg" width="200px" height="150px" alt="" ><p>春分前后是春社日，官府及民间皆祭社神祈求丰年。社神就是土地神。南方各地在这一天要演戏酬神，称为社戏。鲁迅的小说《社戏》描写的就是这个事儿。　</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.604377, 23.548698],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">犒劳耕牛、祭祀百鸟</strong><br><img class="picture" src="图标\\0321春分\\犒劳耕牛、祭祀百鸟.jpg" width="200px" height="150px" alt="" ><p>春分前后是春社日，官府及民间皆祭社神祈求丰年。社神就是土地神。南方各地在这一天要演戏酬神，称为社戏。鲁迅的小说《社戏》描写的就是这个事儿。　</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [119.432359, 32.400432],
          },
        },
      ],
    },
  });
  map.addSource("0321-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃春菜</strong><br><img class="picture" src="图标\\0321春分\\吃春菜.png" width="200px" height="150px" alt="" ><p>春分是踏青活动的开始，野外挑野菜是村民的一项重要活动。南北各地生长的野菜不尽相同。岭南“春菜”是一种野苋菜。采回的春菜一般与鱼片“滚汤”，名曰“春汤”，正如俗语所说：“春汤灌脏，洗涤肝肠。阖家老少，平安健康。”</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [108.395751, 22.828996],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">竖蛋</strong><br><img class="picture" src="图标\\0321春分\\竖蛋.jpg" width="200px" height="150px" alt="" ><p>俗话说“春分到，蛋儿俏”。“竖蛋”的做法是：选择一只新鲜鸡蛋，在桌子上竖起来。竖蛋成功的解释可能有三：和此时地球地轴与地球绕太阳公转的轨道平面的平衡状态有关；蛋壳表面凹凸不平，与桌面接触的部位可以有三个点；蛋黄的下沉会降低蛋的重心，选择初生四五天的鸡蛋，此时的蛋黄素带松弛，蛋黄下沉，鸡蛋重心下降，有利于鸡蛋的竖立。这项游戏般的古老习俗，其实正是人们对春天来临的一种庆祝。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [107.273515, 32.632901],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">粘雀子嘴</strong><br><img class="picture" src="图标\\0321春分\\粘雀子嘴.jpg" width="200px" height="150px" alt="" ><p>春分前后是春社日，官府及民间皆祭社神祈求丰年。社神就是土地神。南方各地在这一天要演戏酬神，称为社戏。鲁迅的小说《社戏》描写的就是这个事儿。　</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [118.282761, 34.916025],
          },
        },
      ],
    },
  });
  map.addSource("0321-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">诺茹孜节</strong><br><img class="picture" src="图标\\0321春分\\诺茹孜节.jpg" width="200px" height="150px" alt="" ><p>在哈萨克族（新疆维吾尔自治区塔城地区）信仰伊斯兰教之前就已形成，流传至今。据说已有上千年的历史。哈萨克人把一年的第一个月称为“诺茹孜”。哈历一月正是公历3月，公历的3月21日或22日是春分，白天与黑夜持平，哈萨克人把这一天作为新的一年的开始，称之为“诺茹孜节”。</p><p>诺茹孜节传统的过法为期两周。为了辞旧迎新，预示丰收，各家各户都要用小麦、小米、大米、肉、奶疙瘩、盐、水7种食品做成“诺茹孜”饭，还要食用储藏过冬的熏马肠、熏肉等。在这一天，人们成群结队地从一个阿乌勒（牧村）到另一个阿乌勒，走家串户，吃“纳吾鲁孜”饭，唱“纳吾鲁孜”歌，互相拥抱，祝贺新年，并把冬天宰杀牲畜时留下的羊头奉献给老人。老人口念祝词（巴塔），祝福“家人平安，牲畜满圈，奶食丰盛”。</p><p>在节日期间，牧民们聚集在一起开展各种文娱体育活动，娱乐活动形式多种多样，主要分三类：第一类属文娱表演性质的，如铁力麦、唱歌、跳舞、阿依特斯、演唱史诗等；第二类属运动锻炼性质的，如赛马、摔跤、姑娘追、叼羊等运动;第三类属于趣味游戏活动，如绕口令、猜谜语、圆梦等活动。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [82.982346, 46.75312],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">放风筝</strong><br><img class="picture" src="图标\\0321春分\\竖蛋.jpg" width="200px" height="150px" alt="" ><p>俗话说“春分到，蛋儿俏”。“竖蛋”的做法是：选择一只新鲜鸡蛋，在桌子上竖起来。竖蛋成功的解释可能有三：和此时地球地轴与地球绕太阳公转的轨道平面的平衡状态有关；蛋壳表面凹凸不平，与桌面接触的部位可以有三个点；蛋黄的下沉会降低蛋的重心，选择初生四五天的鸡蛋，此时的蛋黄素带松弛，蛋黄下沉，鸡蛋重心下降，有利于鸡蛋的竖立。这项游戏般的古老习俗，其实正是人们对春天来临的一种庆祝。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.285505, 35.975052],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">戒火草</strong><br><img class="picture" src="图标\\0321春分\\戒火草.jpg" width="200px" height="150px" alt="" ><p>此习俗类似今天的插防火旗于屋顶、树梢等，以为警示。“春分日，民并种戒火草于屋上”，这样就整年不必担心有火灾发生了。旧时民俗可以反映当时人们对防备火患的重视和人们对生活美好、家宅平安的愿望。各地风俗又有差异，如江苏泰州，人们认为黄杨辟火；赣东北的民俗是开水塘、种樟树以防火灾；有些地方，在门前插柳以防火患。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [119.928709, 32.474566],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">烧太阳钱粮</strong><br><img class="picture" src="图标\\0321春分\\烧太阳钱粮.png" width="200px" height="150px" alt="" ><p>在北方一些地区，春分这天民间还有一项比较特殊的民俗活动，叫“烧太阳钱粮”。老百姓会在春分这天把春节期间所贴的“福”字撕下来，然后迎着太阳烧掉。这是一种吉祥的处理方式，有“烧福得福”的说法。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.359094, 39.963985],
          },
        },
      ],
    },
  });
  map.addSource("0321-04", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">送春牛</strong><br><img class="picture" src="图标\\0321春分\\送春牛.png" width="200px" height="150px" alt="" ><p>春分时节民间也有挨家送春牛图的习俗。“春牛图”是把二开红纸或黄纸印上全年农历节气及农夫耕田图样。送图者都是些能言善唱者，主要说些春耕不违农时的吉祥话，每到一家就即兴说唱，言词有韵动听，说到主人欢喜付钱为止，俗称“说春”，说春人便叫“春官”。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.193951, 30.260818],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">安仁赶分社</strong><br><img class="picture" src="图标\\0321春分\\安仁赶分社.jpg" width="200px" height="150px" alt="" ><p>是湖南省安仁县民众于每年农历春分社日时例行举办的传统祭神祈谷的盛大节令文化空间。安仁县地处郴州市北部,与炎陵县接壤。传说炎帝神农在这一带发明农具、开田教耕、始尝百草、造福百姓。安仁因以得风气之先,遂有春分社日祭祀神农之俗。春分是二十四节气之一，农谚说“春分麦起身，一刻值千金。”安仁赶分社的“分”，即春分，“社”即“春社、社日”。春分、社日期间，祭神农、祈谷丰、兴药市，是安仁世代相袭的民间传统，同治《安仁县志》卷四·风土·节序载：“祀社神以祈谷，是日，宜雨。”</p><p>活动时间集中在春分前后3天，延续半个月。主要内容有：一、祀神祈谷。社日当天，在县城神农殿举行。二、集会演出。百姓，交流农事经验、养生之道。民间艺人唱社戏，民众表演踩高跷、渔鼓、玩杂耍、走旱船、布袋皮影戏、龙狮舞，晚上放河灯，其热烈程度媲美春节。三、赶场交易。在县城南门洲上进行农耕工具及日常生活用品、中草药材的交易，形成湘南最大规模的墟场。四、吃药开耕。百姓按民间土方配成药膳，食药而后下田开耕。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [113.290518, 26.737238],
          },
        },
      ],
    },
  });
  map.addSource("0321-05", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">茶饮</strong><br><img class="picture" src="图标\\0321春分\\茶饮.jpg" width="200px" height="150px" alt="" ><p>从春分至芒种时节，大多数人会选择喝绿茶。春夏容易上火燥热，身体容易感到疲累。而饮绿茶，可达到生津止渴，消食化痰，去热败火，补充精神的效果。</p><p>绿茶，又称不发酵茶，是以适宜茶树的新梢为原料，经过杀青、揉捻、干燥等工艺制成的茶叶。由于干茶的色泽和冲泡后的茶汤、叶底均以绿色为主调，所以称为“绿茶”。绿茶是我国产量很大、分布区域很广的茶类。其中以浙江、安徽、江西三省为我国绿茶生产的主要基地，其他地区也多有种植，各具特色。我国绿茶中，名品丰富，如西湖龙井、洞庭碧螺春、黄山毛峰、信阳毛尖等。从春分开始，到谷雨时节恰是采摘春茶的好时机。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [117.48967, 27.946203],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">采茶戏</strong><br><img class="picture" src="图标\\0321春分\\采茶戏.jpg" width="200px" height="150px" alt="" ><p>采茶戏是我国以茶命名的戏种，是在茶农创作茶歌、茶舞的基础上，不断丰富内容和唱腔，吸收其他当地不同的剧种，逐渐形成“两旦一丑”或“生、旦、丑”三人的表演形式，又被称为“三角班”。</p><p>“茶歌”以 “十二月采茶调”为主，“采茶调”是我国南方的民间小调。不同地区的采茶调歌词内容不同，每小节之间的故事有着内在联系，把十二个月的内容连在一起是一首叙事长诗，一月一唱，一月一节。后来逐渐发展并融入茶农的生活情节。到了明末清初便形成了富有乡土特色的、以茶舞来演绎故事的采茶戏。采茶戏的种类丰富，根据地区可划分为江西采茶戏、闽西采茶戏，湖北采茶戏、粤北采茶戏、桂南采茶戏等。它们保留着鲜明的地方特色和浓郁的生活气息。采茶戏的传统剧目有很多，比如《四姐下凡》、《乌金记》、《菜刀记》、《私情记》等。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [114.939071, 25.835436],
          },
        },
      ],
    },
  });
  map.addSource("0404-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">石壁客家祭祖</strong><br><img class="picture" src="图标\\0405清明\\清明\\石壁客家祭祖.png" width="200px" height="150px" alt="" ><p>石壁客家祭祖习俗是在福建省宁化县客家人中存续的传统祭祖礼仪活动。我国历史上几次重大的北人南迁，形成华夏民族一个独特的客家民系。客家人南迁均以宁化作为集聚地，因此被海内外称为“客家祖地”，视为“客家摇篮”、“客家朝圣中心”，民谚云“北有大槐树，南有石壁村”。石壁客家祭祖始于明洪武年间。石壁客家各宗族聚居地建造的宗祠、家庙至今还保留二百余座，遍及全县16个乡镇，是祭祖的中心场所。客家祭祖沿袭古礼，分为春秋两祭。春祭在清明节，又称清明祭；秋祭在农历八月初一，又称秋清明。公祭（或称官祭）规模盛大。族祭（或称私祭、家祭）由同一姓氏后裔共同举办，或在祠堂祠祭，或在祖茔墓祭，敬祖穆宗，慎终追远。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.661858, 26.270807],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">轩辕氏祭典</strong><br><img class="picture" src="图标\\0405清明\\清明\\石壁客家祭祖.png" width="200px" height="150px" alt="" ><p>轩辕氏祭典是至今存续在浙江省缙云县的一种以黄帝为祭祀对象的中华始祖崇拜礼俗。轩辕氏是上古黄帝的别称。缙云是黄帝的一种官名，也是黄帝的别号。缙云县始建于武周万岁登封元年（696），以境内有古缙云山而得名。缙云祭祀轩辕氏活动，最早可以追溯到汉朝。东晋年间缙云山建起了“缙云堂”，唐天宝年间，唐玄宗敕改“缙云堂”为“黄帝祠宇”。缙云是中国南方祭祀轩辕黄帝的唯一场所。世代传承至今的缙云轩辕氏祭祀，分春（清明）秋（重阳）二祭，形式分黄帝祠宇大殿祭拜、各地宗祠祭拜或自家“道坛”（民居四合院的天井）祭拜等多种。规模较大的祭祀是在黄帝祠宇举行，祭拜人员分主祭、陪祭、参祭等。祭祀礼仪设击鼓、撞钟、恭读祭文、献三牲五谷、献黄酒鲜花、献祭乐祭舞等，气氛庄重热烈。祭典期间，钢叉、板（布）龙、板狮、竹马、旱船、秧歌、腰鼓、铜钿鞭、哑背疯等各种地方民间表演活动丰富多彩。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.097195, 28.666482],
          },
        },
      ],
    },
  });
  map.addSource("0404-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">青团子</strong><br><img class="picture" src="图标\\0405清明\\清明\\青团子.jpg" width="200px" height="150px" alt="" ><p>清明时节，江南一带有吃青团子的风俗习惯。青团子是用一种名叫“浆麦草”的野生植物捣烂后挤压出汁，接着取用这种汁同晾干后的水磨纯糯米粉拌匀揉和，然后开始制作团子。团子的馅心是用细腻的糖豆沙制成，在包馅时，另放入一小块糖猪油。团坯制好后，将它们入笼蒸熟，出笼时用毛刷将熟菜油均匀地刷在团子的表面，这便大功告成了。</p> <p>青团子油绿如玉，糯韧绵软，清香扑鼻，吃起来甜而不腻，肥而不腴。青团子还是江南一带人用来祭祀祖先必备食品，正因为如此，青团子在江南一带的民间食俗中显得格外重要。我国南北各地清明节有吃馓子的食俗。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [118.792648, 32.061959],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">馓子</strong><br><img class="picture" src="图标\\0405清明\\清明\\馓子.jpg" width="200px" height="150px" alt="" ><p>“馓子”为一油炸食品，香脆精美，古时叫“寒具”。寒食节禁火寒食的风俗在我国大部分地区已不流行，但与这个节日有关的馓子却深受世人的喜爱。现在流行于汉族地区的馓子有南北方的差异：北方馓子大方洒脱，以麦面为主料；南方馓子精巧细致，多以米面为主料。在少数民族地区，馓子的品种繁多，风味各异，尤以维吾尔族、东乡族和纳西族以及宁夏回族的馓子最为有名。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [111.59842, 28.914793],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">欢喜团</strong><br><img class="picture" src="图标\\0405清明\\清明\\欢喜团.jpg" width="200px" height="150px" alt="" ><p>四川成都一带有以炒米作团，用线穿之，或大或小，各色点染，名曰“欢喜团”。旧时，在成都北门外至“欢喜庵”一路摆卖。清人《绵城竹枝词》有诗云：“"欢喜庵"前欢喜团，春郊买食百忧宽。村醪戏比金生丽，偏有多人醉脚盆。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [104.085681, 30.571283],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">枣糕</strong><br><img class="picture" src="图标\\0405清明\\清明\\枣糕.png" width="200px" height="150px" alt="" ><p>枣糕又叫“子推饼”，北方一些地方用酵糟发面，夹枣蒸食。他们还习惯将枣饼制成飞燕形，用柳条串起挂在门上，可以冷食，以纪念介子推不求名利的高尚品质。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [112.534204, 35.499354],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">清明螺</strong><br><img class="picture" src="图标\\0405清明\\清明\\清明螺.jpg" width="200px" height="150px" alt="" ><p>清明时节，正是采食螺蛳的最佳时令，因这个时节螺蛳还未繁殖，最为丰满、肥美，故有“清明螺，抵只鹅”之说。螺蛳食法颇多，可与葱、姜、酱油、料酒、白糖同炒；也可煮熟挑出螺肉，可拌、可醉、可糟、可炝，无不适宜。若食法得当，真可称得上“一味螺蛳千般趣，美味佳酿均不及”了。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.607935, 31.306774],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">薄饼蒸朴籽粿</strong><br><img class="picture" src="图标\\0405清明\\清明\\食薄饼蒸朴籽粿.png" width="200px" height="150px" alt="" ><p>潮汕人过清明节，具有浓厚的地方色彩。食薄饼：清明食薄饼在潮汕很盛行，几乎每家每户都不例外。薄饼分皮。馅两部份，皮是用面粉拌水搅成粘糊状，在热壤中烙成一张张圆形的熟面皮，其薄如纸。馅分咸、甜两种，由蛋、肉、肝类、腊味。香菇以及豆芽、韭菜等熟料混合成馅的称咸馅；用糖和麦芽糖经过特殊加工成为“糖葱”的为甜馅。食时用薄饼皮卷成圆筒状就食。蒸朴籽粿。潮汕有一种树叫朴籽树(又叫朴丁树，属榆科)，叶椭圆形，果实大如绿豆，味甘甜。传说先人在饥荒年，采此树叶充饥度荒。清明时节，气候转暖，草木荫茂，朴籽树叶满丛嫩绿。后人为不忘过去，便在清明节采此树叶，和米舂捣成粉，发酵配糖，用陶模蒸制成朴籽粿，有梅花型及桃型两种，也有叫碗酵桃的。粿品呈浅绿色，味甚甘甜，据说吃了还可解积热，除疾病。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.628666, 23.661129],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">润饼菜</strong><br><img class="picture" src="图标\\0405清明\\清明\\润饼菜.jpg" width="200px" height="150px" alt="" ><p>每到清明时节，泉州人有吃“润饼菜”的食俗。据说，这是古时寒食节食俗之遗风。“润饼菜”的正名应该是春饼。清明吃润饼，不仅是泉州独有的，厦门人也喜好之。相传开这种吃法之先河的，是明朝总督云贵湖广军务的同安人蔡复一。当时同安属泉州府辖，因此这种吃法便流传开来，在闽南成了家常名品。不过，闽南各地的春饼形式相同，内容却有很大不同。泉州的“润饼菜”是以面粉为原料擦制烘成薄皮，俗称“润饼”或“擦饼”，食时铺开饼皮，再卷胡萝卜丝、肉丝、蚵煎、芜荽等混锅菜肴，制食皆简单，吃起来甜润可口。晋江的“润饼菜”却复杂许多，那包“润饼菜”的主料肯定是要多种多样，摆了满满一桌的。有这么一些主料菜肴：豌豆、豆芽、豆干、鱼丸片、虾仁、肉丁、海蛎煎、萝卜菜。还有一些配料：油酥海苔、油煎蛋丝、花生敷、芜荽、蒜丝。吃的时候必须两张“润饼皮”才能保证其不被丰富的内容所撑破。这种脆嫩甘美、醇香可口的美味，一般人2卷足矣。不过，据我所知，晋江的“润饼菜”并不是最复杂的；论复杂，应该是厦门为最。晋江用的主料厦门都有，此外还要加上笋、鱼、油酥扁鱼干、油炒韭，再蘸上芥辣、辣酱、甜酱，这才叫地道的厦门“薄饼”。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [118.683306, 24.876018],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">乌稔饭</strong><br><img class="picture" src="图标\\0405清明\\清明\\乌稔饭.jpg" width="200px" height="150px" alt="" ><p>关于清明食俗，不能不提到畲家的“乌稔饭”，因为闽东是畲族聚居地。每年三月初三，畲族人家家户户煮“乌稔饭”，并馈赠汉族的亲戚朋友，久而久之，当地的汉族人民也有了清明时食“乌稔饭”的习俗。特别是枯荣县民间，每年都须用“乌稔饭”祭祀，可见我国自古以来就是一个民族和睦相处的大家庭。据畲族民间传说：唐总章二年，畲族英雄雷万兴率领畲军抗击官兵，被围困山中，时值严冬粮断。畲军只得采摘乌稔果充饥，雷万兴遂于农历三月初三日率众下山，冲出重围。从这以后，每到“三月三”，雷万兴总要召集兵将设宴庆贺那次突围胜利。并命畲军士兵采回乌稔叶，让军厨制成“乌稔饭”，让全军上下饱食一顿，以志纪念。这“乌稔饭”的制作方法并不繁杂，将采摘下来的乌稔树叶洗净，放入清水中煮沸，捞掉树叶，然后，将糯米浸泡在乌稔汤中，浸泡9小时后捞出，放在蒸煮笼里蒸煮，熟时即可食用。制好的“乌稔饭”，单从外表来看，不甚美观，颜色乌黑，然而米香扑鼻与一般糯米饭相比，别有一番风味。而畲族人民为纪念民族英雄，此后每年的“三月三”都要蒸“乌稔饭”吃，日久相沿，就成为畲家风俗。又因闽东一带，畲汉杂居，人民历代友好相处，婚嫁频繁，遂使食“乌稔饭”也成了闽东各地各民族共同拥有的清明食俗。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [118.615891, 26.122773],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">枣锢飞燕</strong><br><img class="picture" src="图标\\0405清明\\清明\\枣锢飞燕.jpg" width="200px" height="150px" alt="" ><p>宋朝的清明节，除了街市上所卖的稠饧、麦糕、乳酪、乳饼等现成的食品之外，人家也自制一种燕子形的面食，称为“枣锢飞燕”，据说是从前用来祭拜介子推的祭品。明朝人还会留下一部分的枣锢飞燕，到了立夏，用油煎给家中的孩童吃，据说吃了以後，可以不蛀夏。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [114.322492, 34.808755],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">青精饭</strong><br><img class="picture" src="图标\\0405清明\\清明\\青精饭.jpg" width="200px" height="150px" alt="" ><p>陈元靓的《岁时广记》卷十五引《零陵总记》记载了另一种寒食节食品“青精饭”：“杨桐叶、细冬青，临水生者尤茂。居人遇寒食采其叶染饭，色青而有光，食之资阳气。谓之杨桐饭，道家谓之青精饭，石饥饭。”寒食清明染青饭的习俗似乎在南方较为流行。郎瑛(一四八七─~一五六六以後，杭州人)的《七修类稿》卷四三就提到寒食节时吃的“青白团子”。这种青团子是在糯米中加入雀麦草汁舂合而成，馅料则多为枣泥或豆沙。放入蒸茏之前，先以新芦叶垫底，蒸热後色泽翠绿可爱，又带有芦叶的清香，是很受欢迎的清明节食品。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [111.607956, 26.427417],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">菠菠粿</strong><br><img class="picture" src="图标\\0405清明\\清明\\菠菠粿.png" width="200px" height="150px" alt="" ><p>扫墓的供品并不复杂，只有光饼、豆腐和面点等，但有一主味是绝对少不了的，即福州特制的“菠菠粿”，也叫“清明粿”。是福州特有的清明节供品，是用菠菠菜(生长于南方的一种野菜，可食，味甘，性凉，捣烂压成汁呈青绿色)压榨成汁，渗入米浆内揉成粿皮，以枣泥、豆沙、萝卜丝等为馅捏制而成的。造型比较简单，菠菠菜的青绿色赋予菠菠粿以春天的绿意。清明节前后，福州家家户户都要做菠菠粿，如今，街上“米时”粿店也大量出售菠菠粿。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [119.283635, 26.087957],
          },
        },
      ],
    },
  });
  map.addSource("0404-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">溱潼会船</strong><br><img class="picture" src="图标\\0405清明\\清明\\溱潼会船.png" width="200px" height="150px" alt="" ><p>又称“水上清明节”，至今已有八百多年的历史。每年的清明时节，江苏省姜堰市溱潼镇及周边两百多个村庄家家户户都要祭奠自己的祖先。清明第二天，各家撑船划桨前往乱坟地祭祀无名阵亡将士，而后千余只供船、龙船、篙船、划船、拐妇船汇聚溱湖，共同参加表演、竞技活动，参与者和闻风而来的观众多达十万人。活动由多个环节组成，其程序依次为选船、试水、铺船、祭祀、赴会、赛船、水上文艺表演、送头篙、酒会、唱夜戏等。</p><p>溱潼会船起源于南宋时期，据史料记载，南宋名将岳飞及义民张荣、贾虎曾多次在溱湖大败金兵，激战之下，宋兵也是伤亡惨重，由此时起，每年清明的第二天当地百姓都要祭奠阵亡将士，天长日久，逐渐演变成会船习俗。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.08903, 32.648453],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">洪洞走亲</strong><br><img class="picture" src="图标\\0405清明\\清明\\洪洞走亲.png" width="200px" height="150px" alt="" ><p>山西省洪洞县的羊獬和历山两地流传着尧舜神话的次一级传说，认为地处汾河东岸河谷盆地的羊獬是尧的故乡，也就是娥皇、女英的娘家；而位于汾河西岸丘陵山区的历山是舜的故乡，同时也是两位女神的婆家。两地及沿途的居民因而互称“亲戚”，并由此引发出奇特的“接姑姑迎娘娘”走亲习俗。</p><p>每年清明前的农历三月初二，以男性为主的羊獬村民走亲队伍以隆重的仪式从本村神庙中抬出娥皇、女英两位女神的神轿“驾楼”，然后鸣锣开道，走出村庄，在仪仗的护持和喧天动地的“威风锣鼓”及震耳欲聋的铳炮之声伴随下越过汾河，涌上历山。第二天即农历三月初三，羊獬走亲队伍以更加隆重的仪式从历山神庙中请出两位女神的神像，一路趱行，迤逦回到羊獬，往返途中先后要经过二十多个村庄。四月二十八尧王生日时，历山人到羊獬给尧王拜寿，再将两位女神迎回历山，途中热闹一如三月三。走亲活动以后，进入农忙季节，两地农民开始全身心地投入农业生产。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [111.668654, 36.24899],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">龙华庙会</strong><br><img class="picture" src="图标\\0405清明\\清明\\龙华庙会.png" width="200px" height="150px" alt="" ><p>上海龙华庙会是华东地区著名的庙会之一，其产生时间可以追溯到唐代。龙华寺相传为弥勒菩萨的道场，每逢弥勒菩萨化身布袋和尚的涅日，龙华寺都会举行隆重的纪念法会，以众姓水陆道场为主。至明代，龙华庙会由单一的礼佛庙会发展为兼容商贸、娱乐的综合性庙会。清代，庙会更与赏桃花的习俗结合起来，正日由农历三月初三推至三月十五，规模和影响进一步扩大，娱乐内容也有所增加，庙会进入全盛时期。20世纪20年代以后，龙华庙会由乡村庙会向都市庙会转化。新中国成立后，政府参与组织龙华庙会，使庙会结束自发状态，进入新兴阶段。</p><p>龙华庙会具有都市性、商贸性和娱乐性的基本特征。商贸活动是庙会的重要内容，这不仅缘于与长三角地区重商的传统和商业发达的背景，也与庙会的时间有关。龙华庙会一般在清明前后举行，此时正是春播时间，需要农具、种子等物品，因此庙会就成了这些农用物品最好的交易场所。饮食是庙会商贸习俗的一个重要方面，龙华羊肉、龙华五香豆、龙华豆腐干、龙华素斋等都是龙华庙会上常见的特色食品，与当地食俗和生活方式有着密切的关系。娱乐活动也同样是龙华庙会的重要内容，庙会期间，人们愉快地踏青赏桃花、观赏皮影戏、花鼓戏、舞龙舞狮和荡湖船等表演，使龙华庙会成为了上海新春时节最为欢快的节日。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [121.459259, 31.17969],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">浇花节</strong><br><img class="picture" src="图标\\0405清明\\清明\\浇花节.jpg" width="200px" height="150px" alt="" ><p>是德昂族一年一度的传统佳节，主要流传于云南省德宏傣族景颇族自治州的德昂族民众中。浇花节从清明节后第七天开始，前后历时三天。节日的第一天，德昂族群众都会穿起节日盛装，背上从井里打来的清水，带着早已准备好的食物，手捧鲜花，汇集到本寨的奘房中。节日仪式由寨内的长老主持，仪式过程中，男青年敲响象脚鼓，女青年和着鼓点跳起“堆沙舞”，其他群众则身背精致的小花篮，手捧竹水筒举过头顶，依次往水龙槽里倒水，为佛像冲浴，以祈来年风调雨顺。仪式过后，人们将带来的食物摆到佛像前的供盘中，齐声朗诵祭词，然后尽情品尝各种食物。食毕排成长队，以象脚鼓队为前导，翻山越岭来到井旁或泉边取水。每次取水都很讲究，要举行取水供物仪式，男女青年还要进行传烟、对歌、赛舞等文艺表演。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [98.588769, 24.446696],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">都江堰放水节</strong><br><img class="picture" src="图标\\0405清明\\清明\\都江堰放水节.jpg" width="200px" height="150px" alt="" ><p>都江堰市位于四川省中部成都平原西北边沿，地处岷江上游和中游接合部的岷江出山口，公元前256年李冰治理岷江，修筑都江堰水利工程，彻底根治了岷江水患，使成都平原成为“水旱从人”的“天府之国”。人们为了纪念李冰，每年都举行一系列相关活动，包括官方祭祀和群众祭祀活动。官祭活动首先由主祭官宣读祭文，并献帛，献爵，献花，然后瞻仰二王庙。群众祭祀活动主要是拜谒二王庙，祈愿一年风调雨顺，五谷丰登，六畜兴旺。放水节最为重要的活动内容是在都江堰渠首鱼嘴分水工程处举行砍断连接杩槎的竹索、外江水流入经岁修后的内江的开水仪式。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [103.644621, 30.995494],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">傣族泼水节</strong><br><img class="picture" src="图标\\0405清明\\清明\\傣族泼水节.png" width="200px" height="150px" alt="" ><p>又名“浴佛节”，傣语称为“比迈”（意为新年），西双版纳德宏地区的傣族又称此节日为“尚罕”和“尚键”，两名称均源于梵语，意为周转、变更和转移，指太阳已经在黄道十二宫运转一周开始向新的一年过渡。阿昌、德昂、布朗、佤等族过这一节日。柬埔寨、泰国、缅甸、老挝等国也过泼水节。</p><p>泼水节一般在傣历六月中旬(即农历清明前后十天左右)举行，是西双版纳最隆重的传统节日之一。其内容包括民俗活动、艺术表演、经贸交流等类别，具体节日活动有泼水、赶摆、赛龙舟、浴佛、诵经、章哈演唱和孔雀舞、白象舞表演等。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [100.813504, 22.01923],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">踏青</strong><br><img class="picture" src="图标\\0405清明\\清明\\踏青.jpg" width="200px" height="150px" alt="" ><p>踏青古时叫探春、寻春等，即春游之意。清明时节，春回大地，万物萌生，正是郊游的大好时光，我国民间长期保持着清明踏青的习惯。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.98709, 35.584086],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">荡秋千</strong><br><p>荡秋千是我国古代清明节习俗。秋千的历史很古老，最早叫千秋，后来由于避讳，改为秋千。古时的秋千多用树枝为架，再栓上彩带做成。后来逐步发展为用两根绳索加上踏板的秋千。打秋千不仅可以增进健康，而且可以培养勇敢精神，至今为儿童所喜爱。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [111.199415, 41.213751],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">蹴鞠</strong><br><img class="picture" src="图标\\0405清明\\清明\\蹴鞠.jpg" width="200px" height="150px" alt="" ><p>鞠是一种皮球，球皮用皮革做成，球内用毛塞紧。蹴鞠，就是踢球。这是古代清明节时的一种游戏，相传是黄帝发明的，最初目的是用来训练武士。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [118.317121, 36.832294],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">植树</strong><br><p>清明植树最早源于清明戴柳、插柳。清明扫墓、踏青时，妇女和儿童会把刚发芽的柳条编成环戴在头上，成为应节的点缀。柳在中国人心中有辟邪保平安的功用。佛教认为柳可以驱鬼，早年民间求雨时也戴柳条。清明时节是柳树发芽抽枝之际，柳树的生命力非常顽强，正所谓“无心插柳柳成荫”，后来逐渐形成了清明植树的习俗。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [110.132803, 26.900051],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">射柳</strong><br><img class="picture" src="图标\\0405清明\\清明\\射柳.jpg" width="200px" height="150px" alt="" ><p>射柳是一种练习射箭技巧的游戏。据明朝人的记载，就是将鸽子放在葫芦里，然后将葫芦高挂于柳树上，弯弓射中葫芦，鸽子飞出，以飞鸽飞的高度来判定胜负。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [114.217003, 40.156895],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">斗鸡</strong><br><img class="picture" src="图标\\0405清明\\清明\\斗鸡.jpg" width="200px" height="150px" alt="" ><p>古代清明盛行斗鸡游戏，斗鸡由清明开始，斗到夏至为止。我国最早的斗鸡记录，见于《左传》。到了唐代，斗鸡成风，不仅是民间斗鸡，连皇上也参加斗鸡。如唐玄宗最喜斗鸡。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [113.630312, 34.748226],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">拔河</strong><br><img class="picture" src="图标\\0405清明\\清明\\拔河.png" width="200px" height="150px" alt="" ><p>早期叫“牵钩”“钩强”，唐朝始叫“拔河”。它发明于春秋后期，开始盛行于军中，后来流传于民间。唐玄宗时曾在清明时举行大规模的拔河比赛。从那时起，拔河成为清明习俗的一部分。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [112.112723, 32.024839],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">放风筝</strong><br><img class="picture" src="图标\\0405清明\\清明\\放风筝.jpg" width="200px" height="150px" alt="" ><p>每逢清明时节，人们不仅白天放风筝，夜间也放。夜里放的风筝挂着彩色的小灯笼，如同星光闪烁，被称为“神灯”。过去，有的人把风筝放上天空后，剪断牵线，任凭清风把它们送往天涯海角，这样做意在除病消灾，给自己带来好运。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.713197, 35.813485],
          },
        },
      ],
    },
  });
  map.addSource("0404-04", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">扫蚕花地</strong><br><img class="picture" src="图标\\0405清明\\清明\\扫蚕花地.png" width="200px" height="150px" alt="" ><p>扫蚕花地是清末至民国时期广泛流传于湖嘉地区的一种蚕俗，它起源于浙江省德清县，仪式的主要表演者都集中在德清一带。清末至民国年间，德清蚕农为祈求蚕桑生产丰收，于每年春节、元宵、清明期间请职业或半职业艺人到家中养蚕的场所举行扫蚕花地仪式，后逐渐流变为歌舞表演。举行扫蚕花地仪式时，通常由一化装女子边唱边舞，而以小锣在旁伴奏。唱词内容多是对蚕茧丰收的祝愿和对蚕桑生产全过程的叙述，与此相配合，表演者往往会做出扫地、糊窗、掸蚕蚁、采桑叶、喂蚕、捉蚕换匾、上山、采茧等一系列与养蚕生产有关的动作。</p><p>“蚕花”是德清人民心目中最吉祥的事物，扫蚕花地表演因而深受当地蚕农的欢迎。扫蚕花地是蚕桑生产习俗中重要的一环，每年寒食清明时节，“关蚕房门”生产以前，蚕农都要请艺人到家演出，以消除一切灾难晦气，祈愿蚕桑丰收，扫蚕花地表演由此呈现出一定的仪式性，成为浙江蚕桑生产的一种象征性反映，具有较高的民俗学研究价值。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [119.973408, 30.551862],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">含山轧蚕花</strong><br><img class="picture" src="图标\\0405清明\\清明\\含山轧蚕花.png" width="200px" height="150px" alt="" ><p>桐乡地处浙江北部，是江南蚕桑的主要产地，这里的乡间流传着丰富的蚕乡习俗，其中以祭拜蚕神的含山轧蚕花庙会最具代表性。含山当地流传着蚕神发祥或降临的传说，因此有“蚕花圣地”之称。含山轧蚕花庙会又叫“蚕花庙会”，大约起源于宋代，明清以来日趋兴盛。庙会时间分头清明、二清明、三清明几个阶段，从开始到结束前后延续十来天。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.561484, 30.638548],
          },
        },
      ],
    },
  });
  map.addSource("0404-05", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">茶饮</strong><br><img class="picture" src="图标\\0405清明\\清明\\茶饮.png" width="200px" height="150px" alt="" ><p>清明前后天气多变，时阴时晴，寒气尚未完全退散，时常伴有雨水，寒湿之气并存。此时，品一杯热茶，有利于保护体内阳气正常滋长，驱除寒气，是清除身心淤堵的好时节。</p><p>安吉白茶茶叶叶白脉绿，经水冲泡后汤色清澈透亮，香气高而持久，白、活、香、鲜、清是其最佳写照。炒制过程主要包括：采摘、摊放、杀青理条、初烘、摊凉、复烘、收灰干燥等7道工序。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [119.686563, 30.644425],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">茶祭</strong><br><img class="picture" src="图标\\0405清明\\清明\\茶祭.png" width="200px" height="150px" alt="" ><p>茶祭中以茶供佛体现了茶文化与佛教文化的互动、相通。僧人以茶助修、以茶待客，以茶供佛，体现了对茶的崇尚，对佛的虔诚，将茶文化中的“礼敬”与佛教文化倡导的“敬供养”相契合。人们用茶礼敬佛祖，达到护持佛法、祈福求安的作用。</p><p>在唐代，高僧怀海在《百丈清规》中将茶供“三宝”（佛、法、僧）纳入佛教仪轨中。每逢圣节、佛降诞节、佛戒道日、涅槃等重要的佛教活动时，必以茶汤供养。王敷的《茶酒论》中说“名僧大德，幽隐禅林。饮之语话，能去昏沉。供养弥勒，奉献观音。”也可以看到茶作为供养品的作用。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.59994, 30.065535],
          },
        },
      ],
    },
  });
  //0218雨水
  map.addSource("0218-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">回娘家</strong><br><img class="picture" src="图标\\0218雨水\\回娘家.jpg" width="200px" height="150px" alt="" ><p>“雨水节，回娘家”是流行于川西一带的汉族节日习俗。到了雨水节气，出嫁的女儿纷纷带上礼物回娘家拜望父母。生育了子女的妇女，须带上罐罐肉、藤椅等礼物，回家感谢父母的养育之恩。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [100.468033, 31.009296],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">接寿</strong><br><img class="picture" src="图标\\0218雨水\\接寿.jpg" width="200px" height="150px" alt="" ><p>雨水节上，女婿送节的礼品通常是一丈二尺长的红棉带，称为“接寿”，祈求岳父母长命百岁。女儿炖好猪脚、鸡汤，用红纸、红绳封了罐口，由女婿给岳父母送去，表示感恩。如果是新婚女婿送节，岳父母还要回赠雨伞，意在为出门奔波的女婿遮风挡雨，祝福女婿人生旅途顺利平安。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [103.58099, 30.84862],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">拉保保</strong><br><img class="picture" src="图标\\0218雨水\\拉保保.png" width="200px" height="150px" alt="" ><p>“拉保保”也是四川一些地区的习俗。旧时人们为儿女求神问卦，看自己的儿女好不好养，更怕独子夭折，一定要拜个干爹，即“保保”。此举年复一年，传承至今，取雨露滋润、保护生长之意。也有不择时间地点，如在寺院山门前或道路上“拜拉路干爹”、“上门拜干爹”的。要拉干爹的父母手提装好酒菜、香蜡、纸钱的竹篮，带着孩子在人群中找准干爹对象。一旦有人被拉着当“干爹”，大都爽快应允，认为这是对自己的信任，也是双方联络感情，共同关心子女成长，祝福美好生活的体现。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [100.468033, 31.009296],
          },
        },
      ],
    },
  });
  map.addSource("0218-05", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">茶文化</strong><br><img class="picture" src="图标\\0218雨水\\茶文化.png" width="200px" height="150px" alt="" ><p>南方的茶山上，茶农们正在争抢第一拨春茶，山谷幽幽，茶香袅袅，春风和和，鸟鸣啾啾。雨水节气的饮食原则是少酸多甘、健脾抑肝。春二三月，此谓发陈，天地俱生，万物以荣，是启陈发新的季节，此时人要顺应天地，让体内的阳气顺应春天的气息生发出来，重点在疏通肝木之气，肝亦属木，是春的脏象，肝木的性质就是要疏达，不能郁结。芳香宜助阳气发。芳香类物质有通窍之功，适宜饮香气高雅的凤凰单丛、花茶、茉莉香片等。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [121.550357, 29.874556],
          },
        },
      ],
    },
  });

  //0420谷雨
  map.addSource("0420-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">祭仓颉</strong><br><img class="picture" src="图标\\0420谷雨\\祭仓颉.jpg" width="200px" height="150px" alt="" ><p>清明祭黄帝，谷雨祭仓颉，是自汉代以来流传千年的民间传统。据《淮南子》记载，黄帝于春末夏初发布诏令，宣布仓颉造字成功，当天下了一场谷子雨。仓颉死后，人们把他安葬在他的家乡——白水县史官镇北，墓门刻了一副对联：“雨粟当年感天帝，同文永世配桥陵。”每年的谷雨，“仓颉庙会”都会在陕西白水县如期举行。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [109.610457, 35.185412],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">祭海</strong><br><img class="picture" src="图标\\0420谷雨\\祭海.jpg" width="200px" height="150px" alt="" ><p>谷雨节也叫做渔民出海捕鱼的“壮行节”。在中国北方沿海一带，渔民们过谷雨节已有两千多年的历史。海祭时刻一到，渔民便抬着供品到海神庙、娘娘庙前摆供祭祀，有的则将供品抬至海边，敲锣打鼓，燃放鞭炮，面海祭祀，场面十分隆重，这一习俗在今天胶东荣成一带仍然流行。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.029848, 36.273373],
          },
        },
      ],
    },
  });
  map.addSource("0420-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃春</strong><br><img class="picture" src="图标\\0420谷雨\\吃春.jpg" width="200px" height="150px" alt="" ><p>谷雨前后，香椿醇香爽口营养价值高，故有“雨前香椿嫩如丝”之说。人们把春天采摘、食用香椿说成是“吃春”。香椿一般分为紫椿芽、绿椿芽，尤以紫椿芽最佳。鲜椿芽中含丰富的蛋白质、胡萝卜素和大量的维生素C，其叶、芽、根、皮和果实均可入药，具有健胃理气，止泻润肤等多种功效。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [118.796877, 32.060255],
          },
        },
      ],
    },
  });
  map.addSource("0420-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">赏牡丹</strong><br><img class="picture" src="图标\\0420谷雨\\赏牡丹.jpg" width="200px" height="150px" alt="" ><p>“谷雨三朝看牡丹”，牡丹花被称为谷雨花、富贵花，谷雨时节赏牡丹已绵延千年，民间有“谷雨三朝看牡丹”的说法。谷雨节气的花信是“一候牡丹、二候荼蘼、三候楝花。”。清顾禄《清嘉录》曰：“神祠别馆筑商人，谷雨看花局一新。不信相逢无国色，锦棚只护玉楼春。”至今，山东菏泽、河南洛阳都会在谷雨时节举行牡丹花会，供人们观赏游玩。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [112.47121, 34.628779],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">走谷雨</strong><br><img class="picture" src="图标\\0420谷雨\\走谷雨.jpg" width="200px" height="150px" alt="" ><p>古时有“走谷雨”的风俗，谷雨这天青年妇女走村串亲，有的到野外走一圈就回来。寓意与自然相融合，强身健体。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [122.486658, 37.16516],
          },
        },
      ],
    },
  });
  map.addSource("0420-04", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">谷雨贴</strong><br><img class="picture" src="图标\\0420谷雨\\谷雨贴.jpg" width="200px" height="150px" alt="" ><p>谷雨贴，禁杀五毒，谷雨以后气温升高，病虫害进入高繁衍期，为了减轻病虫害对作物及人的伤害，农家一边进田灭虫，一边张贴谷雨贴，进行驱凶纳吉的祈祷。这一习俗在山东、山西、陕西一带十分流行。清乾隆六年《夏津县志》记：“谷雨，朱砂书符禁蝎。”“禁蝎”的民俗反应了人们驱除害虫及渴望丰收平安的心情。谷雨贴，属于年画的一种，上面刻绘神鸡捉蝎、天师除五毒形象或道教神符，有的还附有诸如“太上老君如律令，谷雨三月中，蛇蝎永不生”、“谷雨三月中，老君下天空，手持七星剑，单斩蝎子精”等文字说明，寄托人们查杀害虫、盼望丰收、安宁的心理。谷雨是春种春播的大忙时节。在长江流域稻作区，人们将谷种均匀地撒到平整的育秧田里。在华北平原地区，人们对田间的冬小麦进行管理，并开始种瓜点豆。谷雨前后，气温升高，害虫开始活跃。在北方地区，人们以谷雨日作为除蝎的重要时期，在山东、山西、陕西等地区，人们会在墙上贴禁蝎帖，表达人们趋利避害的愿望。我国江南地区从谷雨开始，蚕农人家忙于采桑育桑，而且在江南蚕乡有“关蚕门”的习俗，意思是说家家户户会闭门谢客，放下一切活动，精心养护春蚕。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [112.562398, 37.873531],
          },
        },
      ],
    },
  });
  map.addSource("0420-05", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">喝谷雨茶</strong><br><img class="picture" src="图标\\0420谷雨\\喝谷雨茶.jpg" width="200px" height="150px" alt="" ><p>谷雨有喝茶的习俗。谷雨茶也就是雨前茶，是谷雨时节采制的春茶，又叫二春茶。谷雨茶就是谷雨这天采的鲜茶叶制成的茶叶，而且要上午采的。谷雨茶色泽翠绿，叶质柔软，富含多种维生素和氨基酸，香气宜人。传说谷雨这天的茶喝了会清火、辟邪、明目等。所以谷雨这天不管是什么天气，人们都会去茶山摘一些新茶回来喝。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.210048, 30.265809],
          },
        },
      ],
    },
  });

  //0505立夏
  map.addSource("0505-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">迎夏</strong><br><img class="picture" src="图标\\0505立夏\\迎夏.png" width="200px" height="150px" alt="" ><p>“立夏”的“夏”是“大”的意思，是指春天播种的植物已经直立长大了。廿四节气反映了四时“气”的变化，气的变化关系到自然节律变化，立夏阳气渐长，万物随阳气上升而茁壮成长。古代，人们非常重视立夏的礼俗，在立夏的这天，古代人们有举行迎夏仪式。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.18101, 30.34976],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">立夏秤人</strong><br><img class="picture" src="图标\\0505立夏\\立夏秤人.png" width="200px" height="150px" alt="" ><p>立夏吃罢中饭还有秤人的习俗。人们在村口或台门里挂起一杆大木秤，秤钩悬一根凳子，大家轮流坐到凳子上面秤人。司秤人一面打秤花，一面讲着吉利话。立夏秤人会对阿斗带来福气，人们也祈求上苍给他们带来好运。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.18101, 30.34976],
          },
        },
      ],
    },
  });
  map.addSource("0505-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">尝新</strong><br><img class="picture" src="图标\\0505立夏\\尝新.png" width="200px" height="150px" alt="" ><p>江南的立夏习俗里有所谓的“见三新”，就是吃些这个时节长出来的鲜嫩物儿。在江浙一带有“立夏尝新”的风俗。苏州地方有“立夏见三新”的谚语。“三新”指新熟的樱桃、青梅和麦子。人们先以这“三新”祭祖，然后人们尝食。同时，苏州立夏还要吃海蛳、面筋、白笋、荠菜、咸鸭蛋、青蚕豆，各家酒店立夏这天对进店的老顾客奉送酒酿、烧酒，不取分文，因此也把立夏叫做“馈节”。无锡民间历来有“立夏尝三鲜”的习俗。在常熟，人们立夏尝新，食品更为丰富，有“九荤十八素”的说法。浙江、江苏、湖北、湖南、江西、安徽等地，人们仍然保留着立夏吃乌米饭的古老习俗，乌米饭是一种紫黑色的糯米饭，是采集野生植物乌桕树的叶子煮汤，用此汤将糯米浸泡半天，然后捞出放入木甑里蒸熟而成。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.619585, 31.299379],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">食粥度立夏</strong><br><img class="picture" src="图标\\0505立夏\\食粥度立夏.png" width="200px" height="150px" alt="" ><p>北京市海淀区苏家坨镇“食粥度立夏”的习俗，流传至今已百年有余。2009年，“苏家坨立夏习俗”被列为海淀区非物质文化遗产项目。2023年初，苏家坨立夏习俗成功入选第一批全国“一县一品”特色文化艺术典型案例。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.329519, 39.972134],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃立夏饭</strong><br><img class="picture" src="图标\\0505立夏\\吃立夏饭.png" width="200px" height="150px" alt="" ><p>立夏吃“立夏饭”的习俗寓意着五谷丰登，流传于我国南方。相传吃“立夏饭”的习俗起源于战国时期，立夏饭的食材为雷笋、豌豆、蚕豆、苋菜等，非常丰富，而且配色好看，让人胃口大开。除了寓意五谷丰登，吃“立夏饭”还有身体健康的含义。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.153576, 30.287459],
          },
        },
      ],
    },
  });
  map.addSource("0505-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">斗蛋</strong><br><img class="picture" src="图标\\0505立夏\\斗蛋.png" width="200px" height="150px" alt="" ><p>“立夏蛋，满街甩”，斗蛋通常是小孩子们的游戏，主要流传于江浙一带。要用熟鸡蛋，一般是用白水带壳煮的囫囵蛋（蛋壳不能破损），经冷水浸过，然后装在用彩色丝线或绒线编成的网兜里，让孩子挂在脖子上。斗蛋的规则挺简单，说白了就是“比比谁的蛋壳硬”：大家各自手持鸡蛋，尖者为头，圆处为尾，蛋头撞蛋头，蛋尾击蛋尾，一个一个斗过去，斗破了壳的，认输，然后把蛋吃掉，而最后留下的那个斗不破的小强，被尊为“蛋王”。至于为什么要斗蛋，民间的说法是：“立夏胸挂蛋，小人疰夏难”。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.864608, 32.016212],
          },
        },
      ],
    },
  });
  map.addSource("0505-05", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">茶文化</strong><br><img class="picture" src="图标\\0505立夏\\茶文化.png" width="200px" height="150px" alt="" ><p>“不饮立夏茶，一夏苦难缠”，立夏有饮茶的习俗，用以“消夏”。从立夏到小满前采摘的茶都称为“立夏茶”。入夏后，温度升高，植物光合作用增强，嫩茶积累的养分就多。现在，浙江和江苏地区有饮“七家茶”的习俗，说的是立夏这一天，各家各户都会煮新茶，配上丰富的果品，与亲戚、朋友、邻居一同饮用。在品茶消暑的过程中，和谐人际关系，敦亲睦邻，彼此亲近。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [121.550357, 29.874556],
          },
        },
      ],
    },
  });

  //0521小满
  map.addSource("0521-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">祭车神</strong><br><img class="picture" src="图标\\0521小满\\祭车神.png" width="200px" height="150px" alt="" ><p>小满节气雨量大，江河至此小得盈满。所谓“小满动三车”，这里的三车指的是水车、油车和丝车。此时，农田里的庄稼需要充裕的水分，农民们便忙着踏水车翻水。旧时水车车水排灌为农村大事，水车照例于小满时节启动。古人信仰万物有灵，“三神”对应“三车”即为水车车神、油车车神和丝车车神。祭车神是南方一些农村地区古老的小满习俗。还有传说认为，“车神”为白龙，农家在车水前于车基上放好鱼肉、香烛等祭拜，祭品中有白水一杯，祭时泼入田中，有祝水源涌旺之意。这些习俗，充分表示人们对水利排灌的重视。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.582112, 29.997117],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">祈蚕节</strong><br><img class="picture" src="图标\\0521小满\\祈蚕节.png" width="200px" height="150px" alt="" ><p>小满为蚕神诞辰，因此江浙一带在小满节气期间有一个祈蚕节。中国农耕文化以“男耕女织”为典型。女织的原料北方以棉花为主，南方以蚕理为主。蚕丝需靠养蚕结茧抽丝而得，所以中国南方农村养蚕极为兴盛，尤其是江浙一带。《清嘉录》中记载：“小满乍来，蚕妇煮茧，治车缫丝，昼夜操作”。可见，古时小满节气时新丝已行将上市，丝市转旺在即，蚕农丝商无不满怀期望，等待着收获的日子快快到来。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [121.71615, 29.94893],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">抢水</strong><br><img class="picture" src="图标\\0521小满\\抢水.png" width="200px" height="150px" alt="" ><p>时至小满，南方降水开始增多、雨水充沛。古时灌溉的工具主要是水车，“抢水”是小满节气时民间举行的农事习俗，水车车水排灌为农村大事，谚云：“小满动三车(三车指的是丝车、油车、水车)。”水车例于小满时启动。流传于浙江海宁一带，举行这种仪式时，多由年长执事者召集各户，在确定好的日期的黎明时分燃起火把，在水车基上吃麦糕、麦饼、麦团，待执事者以鼓锣为号，群人以击器相和，踏上小河汉上事先装好的水车，数十辆一齐踏动，把河水引灌人田，至河水干方止。小满时节容易出现干旱天气，对农作物非常不利，旧时农民就会用水车车水排灌，以缓解旱情。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.98074, 31.38464],
          },
        },
      ],
    },
  });
  map.addSource("0521-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">食野菜</strong><br><img class="picture" src="图标\\0521小满\\食野菜.png" width="200px" height="150px" alt="" ><p>食野菜也是小满的风俗之一，苦菜是中国人最早食用的野菜之一，旧时民间有吃野菜、苦菜的习俗，可以清热去火。春风吹，苦菜长，荒滩野地是粮仓。医学上多用苦苦菜来治疗热症，古人还用它醒酒。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [106.055706, 38.114322],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">捕鱼采香蕉</strong><br><img class="picture" src="图标\\0521小满\\采香蕉.png" width="200px" height="150px" alt="" ><p>小满节气台湾彰化附近的海域可捕获黑鲳，东北部的苏奥及南部海域可捕获到飞鱼。高雄县的旗山、美浓等地的香蕉已经进入盛产期。台湾是有名的香蕉出产地，每年都有很多香蕉外销到世界各地。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [121.520076, 25.030724],
          },
        },
      ],
    },
  });

  //0606芒种
  map.addSource("0606-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">送花神</strong><br><img class="picture" src="图标\\0606芒种\\送花神.png" width="200px" height="150px" alt="" ><p>农历二月二花朝节上迎花神。芒种已近五月间，百花开始凋残、零落，民间多在芒种日举行祭祀花神仪式，饯送花神归位，同时表达对花神的感激之情，盼望来年再次相会。此俗今已不存，但从著名小说家曹雪芹的《红楼梦》第二十七回中可窥见一斑：“（大观园中）那些女孩子们，或用花瓣柳枝编成轿马的，或用绫锦纱罗叠成千旄旌幢的，都用彩线系了。每一棵树上，每一枝花上，都系了这些物事。满园里绣带飘飘……”“千旄旌幢”中“千”即盾牌；旄，旌，幢，都是古代的旗子，旄是旗杆顶端缀有牦牛尾的旗，旌与旄相似，但不同之处在于它由五彩折羽装饰，幢的形状为伞状。由此可见大户人家芒种节为花神饯行的热闹场面。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [115.909228, 28.675696],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">安苗</strong><br><img class="picture" src="图标\\0606芒种\\安苗.png" width="200px" height="150px" alt="" ><p>安苗是皖南的农事习俗活动，始于明初。每到芒种时节，种完水稻，为祈求秋天有个好收成，各地都要举行安苗祭祀活动。家家户户用新麦面蒸发包，把面捏成五谷六畜、瓜果蔬菜等形状，然后用蔬菜汁染上颜色，作为祭祀供品，祈求五谷丰登、村民平安。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [118.757995, 30.945667],
          },
        },
      ],
    },
  });
  map.addSource("0606-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">煮梅</strong><br><img class="picture" src="图标\\0606芒种\\煮梅.png" width="200px" height="150px" alt="" ><p>在南方，每年五、六月是梅子成熟的季节，三国时有“青梅煮酒论英雄”的典故。青梅含有多种天然优质有机酸和丰富的矿物质，具有净血、整肠、降血脂、消除疲劳、美容、调节酸碱平衡，增强人体免疫力等独特营养保健功能。但是，新鲜梅子大多味道酸涩，难以直接入口，需加工后方可食用，这种加工过程便是煮梅。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [118.767413, 32.041544],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃君踏菜</strong><br><img class="picture" src="图标\\0606芒种\\吃君踏菜.png" width="200px" height="150px" alt="" ><p>在宁波地区，芒种时节还有吃君踏菜的习俗。君踏菜是南方地区芒种节气前后的一种季节性蔬菜。当地人认为君踏菜具有清热解毒的功效，夏季吃君踏菜后不会出痱子。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [121.54754, 29.81614],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">晒虾皮</strong><br><img class="picture" src="图标\\0606芒种\\晒虾皮.png" width="200px" height="150px" alt="" ><p>在这时候，沿海一带的渔民即忙于晒毛虾。因到了芒种季节，毛虾正值产卵期，体质正肥，肉质正实，营养价值更好。人们将芒种期间晒成的虾皮称之“芒种皮”。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.699366, 27.994267],
          },
        },
      ],
    },
  });
  map.addSource("0606-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">打泥巴仗</strong><br><img class="picture" src="图标\\0606芒种\\打泥巴仗.png" width="200px" height="150px" alt="" ><p>贵州东南部一带的侗族青年男女，每年芒种前后都要举办打泥巴仗节。当天，新婚夫妇由要好的男女青年陪同，集体插秧，边插秧边打闹，互扔泥巴。活动结束，检查战果，身上泥巴最多的，就是最受欢迎的人。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [106.70741, 26.598194],
          },
        },
      ],
    },
  });

  //0621夏至
  map.addSource("0621-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">祭神祀祖</strong><br><img class="picture" src="图标\\0621夏至\\祭神祀祖.png" width="200px" height="150px" alt="" ><p>夏至是“四时八节”之一，民间自古以来有在此时庆祝丰收、祭祀祖先之俗，以祈求消灾年丰。古代农耕社会的人们在安居乐业之余择日拜神祭祖便有了各种定期节日，拜神祭祖丰盛祭贡品发展出节日宴饮活动，也渐渐形成一些约定俗成的庆祝方式，即所谓节庆民俗，至宋朝时，百官可以放假三天，至明清两朝更是修了地坛，也就是如今北京市东城区安定门外的地坛公园。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.416357, 39.928353],
          },
        },
      ],
    },
  });
  map.addSource("0621-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">北京 冬至饺子夏至面</strong><br><img class="picture" src="图标\\0621夏至\\北京吃面.png" width="200px" height="150px" alt="" ><p>好吃的北京人在夏至这天讲究吃面。按照老北京的风俗习惯，每年一到夏至节气就可以大啖生菜、凉面了，因为这个时候气候炎热，吃些生冷之物可以降火开胃，又不至于因寒凉而损害健康。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.388056, 39.9075],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">绍兴 蒲丝饼</strong><br><img class="picture" src="图标\\0621夏至绍兴蒲丝饼.png" width="200px" height="150px" alt="" ><p>旧时，在浙江绍兴地区，人们不分贫富，夏至日皆祭其祖，俗称“做夏至”，除常规供品外，特加一盘蒲丝饼。而绍兴地区龙舟竞渡因气候故，明、清以来多不在端午节，而在夏至，此风俗至今尚存。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.582112, 29.997117],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">无锡吃馄饨</strong><br><img class="picture" src="图标\\0621夏至\\无锡吃馄饨.png" width="200px" height="150px" alt="" ><p>夏至这天，无锡人早晨吃麦粥，中午吃馄饨，取混沌和合之意。有谚语说：“夏至馄饨冬至团，四季安康人团圆。”吃过馄饨，为孩童秤体重，希望孩童体重增加更健康。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.301663, 31.574729],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">山东吃凉面</strong><br><img class="picture" src="图标\\0621夏至\\山东凉面.png" width="200px" height="150px" alt="" ><p>夏至这天山东各地普遍要吃凉面条，俗称过水面，有“冬至饺子夏至面”的谚语。莱阳一带夏至日荐新麦，黄县(今龙口市)一带则煮新麦粒吃，儿童们用麦秸编一个精致的小笊篱，在汤水中一次一次地向嘴里捞，既吃了麦粒，又是一种游戏，很有农家生活的情趣。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [117.000923, 36.675807],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">陕西吃粽子</strong><br><img class="picture" src="图标\\0621夏至\\陕西吃粽子.png" width="200px" height="150px" alt="" ><p>陕西地区在夏至这天有吃粽子的习俗，因为有观点认为端午节源自夏至节。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [108.954239, 34.265472],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">湘南 夏至蛋</strong><br><img class="picture" src="图标\\0621夏至\\湘南夏至蛋.jpg" width="200px" height="150px" alt="" ><p>我国的衡阳、郴州、永州和湘西吃夏至蛋。在夏至日，把鸡蛋煮熟，剥了蛋壳之后加入红枣煮汤来吃。在湘南一带，主要是桂阳、嘉禾，夏至当天早上起床，把鸡蛋煮熟，然后用红色染料染红，之后用小网装上，再系在儿童的胸前，一直挂到中午或者下午再吃掉鸡蛋。在民间，认为夏至吃鸡蛋可以强身健胃，行走有劲。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [112.734176, 25.754167],
          },
        },
      ],
    },
  });
  map.addSource("0621-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">消夏避伏</strong><br><img class="picture" src="图标\\0621夏至\\消夏避伏.png" width="200px" height="150px" alt="" ><p>夏至日，妇女们即互相赠送折扇、脂粉等什物。《酉阳杂俎•礼异》：“夏至日，进扇及粉脂囊，皆有辞。”“扇”，借以生风;“粉脂”，以之涂抹，散体热所生浊气，防生痱子。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [114.468664, 38.037057],
          },
        },
      ],
    },
  });

  //0707小暑
  map.addSource("0707-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">食新</strong><br><img class="picture" src="图标\\0707小暑\\食新.png" width="200px" height="150px" alt="" ><p>在过去，中国南方民间有小暑“食新”的习俗，“食新”是将新打的米、麦等磨成粉，制成各种面饼、面条，邻居乡亲分享来吃，表达对丰收的祈愿，同时这些新货也要准备一份祭祀祖先，恳请保佑风调雨顺。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [119.295144, 26.100779],
          },
        },
      ],
    },
  });
  map.addSource("0707-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃饺子</strong><br><img class="picture" src="图标\\0707小暑\\吃饺子.png" width="200px" height="150px" alt="" ><p>在中国北方地区有“头伏饺子二伏面，三伏烙饼摊鸡蛋”的说法。头伏吃饺子是传统习俗，伏日人们食欲不振，往往比常日消瘦，俗谓之苦夏，而饺子在传统习俗里正是开胃解馋的食物。饺子长期以来都是北方广大地区老百姓最爱的吃食。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [108.95, 34.26667],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃藕</strong><br><img class="picture" src="图标\\0707小暑\\吃藕.png" width="200px" height="150px" alt="" ><p>在我国很多地方，也有“小暑吃藕”的习俗。据说这个习俗开始自清朝咸丰年间，藕一方面与“偶”谐音，有成双双对合合满满的寓意，另外在文人墨客笔下，藕也因出淤泥而不染被赋予了高洁的品行。而从食物本身来说，藕也有健脾开胃的作用，适合夏天食用。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.153576, 30.287459],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃三宝</strong><br><img class="picture" src="图标\\0707小暑\\吃三宝.png" width="200px" height="150px" alt="" ><p>“小暑大暑，上蒸下煮”，小暑的到来，意味着即将进入三伏天。此时，天气炎热，人体出汗多，消耗大，养生保健一定要注意补充体力，解热防暑。民间在这个时节素有吃三宝——黄鳝、蜜汁藕、绿豆芽的习俗。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.582112, 29.997117],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">封斋</strong><p>在我国的湘西苗族的封斋日在每年小暑前的辰日到小暑后的巳日。这段时期,禁食鸡、鸭、鱼、鳖、蟹等物。据说误食了要招灾祸,但仍可吃猪、牛、羊肉。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [109.73917, 28.311947],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">舐牛</strong><br><img class="picture" src="图标\\0707小暑\\山东舐牛.png" width="200px" height="150px" alt="" ><p>在山东临沂地区，每到小暑，人们有给牛改善饮食的习俗。伏日煮麦仁汤给牛喝，据说牛喝了身子壮，能干活，不淌汗，民谣有“春牛鞭，舐牛汉，麦仁汤，舐牛饭，舐牛喝了不淌汗，熬到六月再一遍。”所以就有了这样的习俗。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [118.326443, 35.065282],
          },
        },
      ],
    },
  });

  //0722大暑
  map.addSource("0722-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">送大暑船</strong><br><img class="picture" src="图标\\0722大暑\\送大暑船.png" width="200px" height="150px" alt="" ><p>送“大暑船”是浙江沿海地区，特别是台州市椒江葭芷一带的民间习俗，清同治年间，葭沚一带常有病疫流行，尤以大暑节前后为甚。葭沚地处椒江口附近，沿江渔民居多，为保一方平安，遂决定在大暑节集体供奉“五圣”，并用渔船将供品沿江送至椒江口外，以表虔诚之心。此为送大暑船之初衷。送大暑船活动以后逐渐演变成葭沚附近一带的节日盛会。大暑节到来之前，各方人士就开始准备，一时间葭沚街头人来人往，熙熙攘攘，煞是热闹。“大暑船”完全按照旧时的三桅帆船缩小比例后建造，船内载各种祭品。活动开始后，50多名渔民轮流抬着“大暑船”在街道上行进，鼓号喧天，鞭炮齐鸣，街道两旁站满祈福人群。“大暑船”最终被运送至码头，进行一系列祈福仪式。随后，这艘“大暑船”被渔船拉出渔港，然后在大海上点燃，任其沉浮，以此祝福人们五谷丰登，生活平安健康。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [121.428599, 28.661378],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">烧伏香</strong><br><img class="picture" src="图标\\0722大暑\\烧伏香.png" width="200px" height="150px" alt="" ><p>伏香，大暑节气气温最高，农作物生长最快，大部分地区的旱、涝、风灾也最为频繁，抢收抢种，抗旱排涝防台和田间管理等任务很重;因此百姓烧香祈福，祈求风调雨顺，百谷丰登;还有一种说法接近于中医的灸，在伏天里用药香熏烤特定的穴位，可以治疗多种顽固的疾病。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [113.665412, 34.757975],
          },
        },
      ],
    },
  });
  map.addSource("0722-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">晒伏姜</strong><br><img class="picture" src="图标\\0722大暑\\晒伏姜.png" width="200px" height="150px" alt="" ><p>伏姜源自中国山西、河南等地，三伏天时人们会把生姜切片或者榨汁后与红糖搅拌在一起，装入容器中蒙上纱布，于太阳下晾晒。充分融合后食用，对老寒胃，伤风咳嗽等有奇效，并有温暖保健的功效。伏姜中的姜辣素能有效地治疗吃寒凉食物过多而引起的腹胀、腹痛、腹泻、呕吐等。喝过伏姜后，人会有身体发热的感觉，这是因为它能使血管扩张，血液循环加快，促使身上的毛孔张开，这样不但能把多余的热带走，同时还把体内的病菌、寒气一同带出。当身体吃了寒凉之物，受了雨淋或在空调房间里呆久后，喝杯伏姜能及时消除因肌体寒重造成的各种不适。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [112.562398, 37.873531],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">喝伏茶</strong><br><img class="picture" src="图标\\0722大暑\\喝伏茶.png" width="200px" height="150px" alt="" ><p>伏茶，顾名思义，是三伏天喝的茶。免费供应伏茶时间一般从农历六月初到八月末。这种由金银花、夏枯草、甘草等十多味中草药煮成的茶水，有清凉祛暑的作用。古时候，很多地方的农村都有个习俗，就是村里人会在村口的凉亭里放些茶水，免费给来往路人喝。如今，这样的凉亭很少见到了，不过在温州，这个几百年前的习俗却被一直保留了下来。每个凉亭里都有专人全天煮茶，保证供应。这种茶在温州有个专门的称呼，叫做“伏茶”。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.699366, 27.994267],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">过大暑</strong><br><img class="picture" src="图标\\0722大暑\\过大暑.png" width="200px" height="150px" alt="" ><p>在大暑节那天，莆田人家有吃荔枝、羊肉和米糟的习俗，叫做“过大暑”。在大暑节那天，亲友之间，常以荔枝、羊肉为互赠的礼品。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [119.007777, 25.454084],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃凤梨</strong><br><img class="picture" src="图标\\0722大暑\\吃凤梨.png" width="200px" height="150px" alt="" ><p>大暑节台湾周围的海域大多布满暖水鱼群，东北海域有鱿鱼，基隆外海有小卷、赤宗、彰化海域则有黄鳍鲷等。台湾民谚：大暑吃凤梨，说的是这个时节的凤梨最好吃。另外六月十五日是“半年节”，由於农历六月十五日是全年的一半，所以在这一天拜完神明后全家会一起吃“半年圆”，半年圆是用糯米磨成粉再和上红面搓成的，大多会煮成甜食来品尝，象征意义是团圆与甜蜜。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [121.520076, 25.030724],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">喝暑羊</strong><br><img class="picture" src="图标\\0722大暑\\喝暑羊.png" width="200px" height="150px" alt="" ><p>华北地区有在大暑这一天喝暑羊（即喝羊肉汤）的习俗。经过紧张的夏收劳动，人们非常疲倦，应该好好休息一下了。于是，全家聚在一起，每人吃一个香喷喷的新麦馍馍，喝一碗味道鲜美的羊肉汤。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [114.502461, 38.045474],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">半年节</strong><br><img class="picture" src="图标\\0722大暑\\半年圆.png" width="200px" height="150px" alt="" ><p>农历六月十五日为全年的一半，正值大暑节气，叫“半年节”。一家人在这一天拜完神明后，会聚在一起吃“半年圆”。半年圆是用糯米磨成粉再和上红面搓成的，大多会煮成甜食来品尝，象征着团圆与甜蜜。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [118.067778, 24.446111],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃仙草</strong><br><img class="picture" src="图标\\0722大暑\\吃仙草.png" width="200px" height="150px" alt="" ><p>大小暑时节，天气酷热，福建、广东和台湾等地方有在大暑前后有吃仙草消暑解毒的习俗。仙草又名凉粉草、仙人草，唇形科仙草属草本植物，是重要的药食两用植物资源。由于其神奇的消暑功效，被誉为“仙草”。茎叶晒干后可以做成烧仙草，广东一带叫凉粉，是一种消暑的甜品。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [113.280637, 23.125178],
          },
        },
      ],
    },
  });
  map.addSource("0722-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">斗蟋蟀</strong><br><img class="picture" src="图标\\0722大暑\\斗蟋蟀.png" width="200px" height="150px" alt="" ><p>大暑是乡村田野蟋蟀最多的时节，中国很多地区的人们有茶余饭后斗蟋蟀取乐的风俗。大人会先带着小孩到田野里抓蟋蟀，然后到大树底下玩起斗蟋蟀的游戏，可有趣了。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [121.006725, 29.144079],
          },
        },
      ],
    },
  });
  //从此处开始秋季部分

  /*0807立秋
  01祭祀：祭祀土地神
  02饮食：啃秋、贴秋膘
  03玩乐：晒秋
  */

  //0807立秋，01祭祀，内容：祭祀土地神
  map.addSource("0807-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">祭祀土地神</strong><p>从文字角度来看，“秋”字由禾与火字组成，是禾谷成熟的意思。在西周时期，天子亲率三公六卿诸侯大夫，到西郊迎秋，并举行祭祀少嗥（即白帝，他的父亲是太白金星）、蓐收（古代传说中的秋神）的仪式。</p>到了唐朝，虽然西周的仪式还在，但还增加了祭祀五帝。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [128.709716, 48.242156],
          },
        },
      ],
    },
  });
  //0807立秋，02饮食，内容：啃秋，贴秋膘
  map.addSource("0807-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">啃秋</strong><br><img class="picture" src="图标\\0807立秋\\2习俗啃秋.jpg" width="200px" height="150px" alt="" ><p>“啃秋”，就是咬住秋天的意思，在我国南方又称为“立秋啃秋瓜”。</p>秋季天气干燥，人体往往会不适应，容易得秋燥，在我国古代，每年立秋，家家户户为了防止秋燥发生，都会在这天买一个西瓜回家，全家围着啃，久而久之，就形成了啃秋的习俗。</p>在我国民国时期出版的《首都志》中也有记载：“立秋前一日，食西瓜，谓之啃秋。”讲得正是啃秋的习俗。慢慢地，啃秋在我国农村中又发展成了另外一种样子，每年立秋节气，农人们三五成群，席地而坐，抱着红瓤西瓜啃，抱着绿瓤香瓜啃，抱着白生生的山芋啃，抱着金黄黄的玉米棒子啃。把啃秋的习俗又升华成为了一种丰收的喜悦，一种迎接秋天到来之意。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [127.345877, 44.219972],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">贴秋膘</strong><br><img class="picture" src="图标\\0807立秋\\3习俗贴秋膘.jpg" width="200px" height="150px" alt="" ><p>“啃秋”，就是咬住秋天的意思，在我国南方又称为“立秋啃秋瓜”。</p>秋季天气干燥，人体往往会不适应，容易得秋燥，在我国古代，每年立秋，家家户户为了防止秋燥发生，都会在这天买一个西瓜回家，全家围着啃，久而久之，就形成了啃秋的习俗。</p>在我国民国时期出版的《首都志》中也有记载：“立秋前一日，食西瓜，谓之啃秋。”讲得正是啃秋的习俗。慢慢地，啃秋在我国农村中又发展成了另外一种样子，每年立秋节气，农人们三五成群，席地而坐，抱着红瓤西瓜啃，抱着绿瓤香瓜啃，抱着白生生的山芋啃，抱着金黄黄的玉米棒子啃。把啃秋的习俗又升华成为了一种丰收的喜悦，一种迎接秋天到来之意。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [122.56258, 40.172763],
          },
        },
      ],
    },
  });
  //0807立秋，03玩乐，内容：晒秋
  map.addSource("0807-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">晒秋</strong><br><img class="picture" src="图标\\0807立秋\\4习俗晒秋.jpg" width="200px" height="150px" alt="" ><p>晒秋是一种典型的农俗现象，具有极强的地域特色。在湖南、广西、安徽、江西等生活在山区的村民，由于地势复杂，村庄平地极少，只好利用房前屋后及自家窗台屋顶架晒、挂晒农作物，久而久之就演变成一种传统农俗现象。',
          },
          geometry: {
            type: "Point",
            coordinates: [118.883121, 35.986568],
          },
        },
      ],
    },
  });

  /*0823处暑
  01祭祀：祭祖，放河灯，开渔节，拜土地爷
  02饮食：吃鸭子
  04艺术：祝融神话
  */

  //0823处暑，01祭祀，内容：祭祖，放河灯，开渔节，拜土地爷
  map.addSource("0823-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">祭祖</strong><p>处暑前后，民间会有庆赞中元、普渡布施的民俗活动，俗称“作七月半”或“中元节”。《易经》:“反复其道，七日来复，天行也。”</p>七是阳数、天数，天地之间的阳气绝灭之后，经过七天可以复生，这是天地运行之道，阴阳消长循环之理，民间选择在七月十四(二七)祭祖与“七”这复生数有关。七月半是民间初秋庆贺丰收、酬谢大地的节日，有若干农作物成熟，民间按例要祀祖，用新稻米等祭供，向祖先报告秋成。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [119.83978, 31.184897],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">放河灯</strong><br><img class="picture" src="图标\\0823处暑\\4习俗放河灯.jpg" width="200px" height="150px" alt="" ><p>河灯也叫“荷花灯”，一般是在底座上放灯盏或蜡烛，中元夜放在江河湖海之中，任其漂泛。放河灯是为了普渡水中的落水鬼和其他孤魂野鬼。</p>萧红《呼兰河传》中的一段文字，是这种习俗的最好注解：“七月十五是个鬼节；死了的冤魂怨鬼，不得托生，缠绵在地狱里非常苦，想托生，又找不着路。这一天若是有个死鬼托着一盏河灯，就得托生。”',
          },
          geometry: {
            type: "Point",
            coordinates: [119.692602, 27.707425],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">开渔节</strong><p>对于沿海渔民来说，处暑以后便是渔业收获的时节。</p>每年处暑期间，在浙江省沿海都要举行一年一度的隆重的开渔节，决定在东海休渔结束的那一天，举行盛大的开渔仪式，欢送渔民开船出海。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.528267, 25.791502],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">拜土地爷</strong><p>处暑节气正值农作物收成时刻，农家纷纷举行各种仪式来拜谢土地爷。有的杀牲口到土地庙祭拜，有的把旗幡插到田中央表示感恩，还有的这一天从田里干活回家不洗脚，恐把到手的丰收洗掉。</p>七月十五，民间还盛行祭祀土地和庄稼。将供品撒进田地。烧纸以后，再用剪成碎条的五色纸，缠绕在农作物的穗子上。传说可以避免冰雹袭击，获得大秋丰收。一些地方同时还要到后土庙进行祭祀。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [111.892148, 23.843762],
          },
        },
      ],
    },
  });
  //0823处暑，02饮食，内容：吃鸭子
  map.addSource("0823-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃鸭子</strong><br><img class="picture" src="图标\\0823处暑\\2习俗吃鸭子.jpg" width="200px" height="150px" alt="" ><p>民间有处暑吃鸭子的习俗，鸭肉味甘性凉，有滋补养胃之效，做法也花样繁多，有盐水鸭、酱鸭、白切鸭、柠檬鸭、子姜鸭、烤鸭、荷叶鸭、核桃鸭等。俗语有云，处暑送鸭，无病各家。',
          },
          geometry: {
            type: "Point",
            coordinates: [104.901175, 24.586197],
          },
        },
      ],
    },
  });
  //0823处暑，04艺术，内容：祝融神话
  map.addSource("0823-04", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">祝融神话</strong><br><img class="picture" src="图标\\0823处暑\\3神话祝融.jpg" width="200px" height="150px" alt="" ><p>祝融是炎帝的儿子，精卫的长兄，以“光照万方”深得部族内外的爱戴。最初，精卫因贪玩，东海溺亡，炎帝悲伤过度，无心政务，逐渐把部族权力交给了祝融。</p>黄帝部族与炎帝部族合并后，祝融被封为火神，又称火正，主理夏季，成为炎黄部族最主要的大臣之一。</p>在黄帝其他大臣的配合赞襄下，祝融威信日渐昌隆。水神共工嫉恨祝融，心中不平——“水火都是人们离不了的，为什么人们亲近祝融，而无视我的存在？”于是共工公开向祝融挑战。两人各使神通，杀得天昏地暗，共工战败逃奔，撞倒了擎天柱不周山，致使天塌地陷，尸横遍野。</p>水神和火神的这一场战争，让大地上的人们一下子陷入到水深火热之中。黄帝迫于部族长老的压力，含泪下令处死祝融，祝融也深悔自己的鲁莽给天下带来的灾祸，于是请求黄帝留存自己的魂魄，寄托于莲花之上，沿河漂流，召领死难的亡灵，以赎罪孽，黄帝应允。</p>因祝融主理夏暑季节，所以处死祝融的这天就被称为“处暑”。处暑当日，人们到河边燃放“河灯”，恭请祝融魂魄于莲花之上，寄托对故去亲人的思念。',
          },
          geometry: {
            type: "Point",
            coordinates: [85.105684, 32.566411],
          },
        },
      ],
    },
  });

  /*0907白露
  01祭祀：祭禹王
  02饮食：十样白，白露酒，龙眼，番薯
  */

  //0907白露，01祭祀，内容：祭禹王
  map.addSource("0907-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">祭禹王</strong><br><img class="picture" src="图标\\0907白露\\3习俗祭禹王.jpg" width="200px" height="150px" alt="" ><p>大禹疏通三江，使得“震泽底定”，其中震泽即为太湖的古称，因而在每年白露时节，太湖渔家便有祭拜大禹的传统，人们会赶往位于太湖中央小岛上的禹王庙进香，祈祷神灵的保佑。</p>据清乾隆年间《太湖备考》所载，禹王香期一般为七天，前三天祭拜，后三天酬神，最后一天还有送神的仪式。在祭拜时，人们许愿将把秋冬之际捕捞的第一条肥鱼献给禹王。',
          },
          geometry: {
            type: "Point",
            coordinates: [126.757164, 46.298597],
          },
        },
      ],
    },
  });
  //0907白露，02饮食，内容：十样白，白露酒，龙眼，番薯
  map.addSource("0907-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">十样白</strong><p>十样白，指的便是十种带“白”字的草药，如白芍、白莲、白茅根、白茯苓参，以与“白露”字面上相应。</p>在苍南、平阳等地，人们会在白露这天采集“十样白”，与乌骨白毛鸡、鸭子或猪肘子一齐煨制，据说食后可滋补身体，驱除风气。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.43043, 27.536137],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">白露酒</strong><br><img class="picture" src="图标\\0907白露\\2习俗白露酒.jpg" width="200px" height="150px" alt="" ><p>白露时节，人体常会感觉“秋燥”，适宜吃营养丰富、容易消化的食物滋补身体，俗称“补露”。各地“补露”方式不尽相同。比如南京人尤爱一口“白露茶”，当地人常讲“春茶苦，夏茶涩，要好喝，秋白露”。</p>“秋白露”说的正是白露茶，较之春夏两季的茶叶，白露茶胜在平和醇厚。白露茶是对白露前后采摘茶叶的统称。若论及具体品种，则以乌龙茶最佳，性介于绿茶与红茶之间，不寒不热，润肺、除燥、清热、生津，有利于秋季的身体保健。</p>说到白露酒，最有名的莫过于湖南的程酒。程酒取当地程江水，于白露日酿造，古为贡酒。当地人用白露米酒兑土制烧酒，酿成后入坛密封，埋于地下十几年甚至几十年。</p>开封时酒色褐红，入口香甜，后劲十足，有“酿可千日，至家而醉”之说。南朝《梁书·刘杳传》中记载了文学家刘杳与任昉谈酒的故事。</p>任昉认为世上并无“千日醉”的酒。刘杳提醒他说，桂阳程乡有一种“千里酒”，喝了以后回家即醉，与“千日醉”也差不多。可见程酒成名甚早。',
          },
          geometry: {
            type: "Point",
            coordinates: [118.806734, 32.06098],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃龙眼</strong><p>福建福州有个传统习俗叫“白露必吃龙眼”。民间的意思是，在白露这一天吃龙眼有大补身体的奇效。</p>因为龙眼本身就有益气补脾、养血安神、润肤美容等多种功效，还可以治疗贫血、失眠、神经衰弱等多种疾病。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [119.310082, 26.080689],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃番薯</strong><p>民间认为白露吃番薯可使饭后不会发胃酸，故旧时农家在白露节以吃番薯为习。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [111.892148, 23.843762],
          },
        },
      ],
    },
  });

  /*0923秋分
  01祭祀：秋祭月，拜神
  02饮食：吃秋菜，雀子嘴
  03玩乐：竖蛋，送秋牛
  */

  //0923秋分，01祭祀，内容：秋祭月，拜神
  map.addSource("0923-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">秋祭月</strong><br><img class="picture" src="图标\\0923秋分\\2习俗秋祭月.jpg" width="200px" height="150px" alt="" ><p>秋分曾是传统的“祭月节”。如古有“春祭日，秋祭月”之说。现在的中秋节则是由传统的“祭月节”而来。</p>据考证，最初“祭月节”是定在“秋分”这一天，不过由于这一天在农历八月里的日子每年不同，不一定都有圆月。而祭月无月则是大煞风景的。所以，后来就将“祭月节”由“秋分”调至中秋。</p>据史书记载，早在周朝，古代帝王就有春分祭日、夏至祭地、秋分祭月、冬至祭天的习俗。其祭祀的场所称为日坛、地坛、月坛、天坛。分设在东南西北四个方向。我国各地至今遗存着许多“拜月坛”、“拜月亭”、“望月楼”的古迹。</p>民间的祭月习俗因地区不同仪式各异。',
          },
          geometry: {
            type: "Point",
            coordinates: [124.027254, 51.206609],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">拜神</strong><br><img class="picture" src="图标\\0923秋分\\3习俗拜神.jpg" width="200px" height="150px" alt="" ><p>秋分前后的民俗节日有二月十五日开漳圣王诞辰：开漳圣王又称“陈圣王”，为唐代武进士陈元光，对漳洲有功，死后成为漳洲守护神。</p>二月十九日观世音菩萨诞辰，每逢诞辰，信徒多茹素齐，前往各观音寺庙祭拜。</p>二月二十五日三山国王祭日：三山国王是指广东省潮州府揭阳县的独山、明山、巾山三座山的山神，早年由潮州客家移民秋为守护神，因此信徒以客籍人士为主。</p>二月十九日观世音菩萨诞辰，每逢诞辰，信徒多茹素齐，前往各观音寺庙祭拜。',
          },
          geometry: {
            type: "Point",
            coordinates: [128.884141, 46.348107],
          },
        },
      ],
    },
  });
  //0923秋分，02饮食，内容：吃秋菜，雀子嘴
  map.addSource("0923-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃秋菜</strong><br><img class="picture" src="图标\\0923秋分\\6饮食吃秋菜.jpg" width="200px" height="150px" alt="" ><p>在岭南地区，昔日四邑的开平苍城镇的谢姓，有个不成节的习俗，叫做“秋分吃秋菜”。“秋菜”是一种野苋菜，乡人称之为“秋碧蒿”。逢秋分那天，全村人都去采摘秋菜。</p>在田野中搜寻时，多见是嫩绿的，细细棵，约有巴掌那样长短。采回的秋菜一般家里与鱼片“滚汤”，名曰“秋汤”。有顺口溜道：“秋汤灌脏，洗涤肝肠。阖家老少，平安健康。”',
          },
          geometry: {
            type: "Point",
            coordinates: [123.732898, 41.457044],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">雀子嘴</strong><br><img class="picture" src="图标\\0923秋分\\7饮食雀子嘴.jpg" width="200px" height="150px" alt="" ><p>秋分这一天农民都按习俗放假，每家都要吃汤圆，而且还要把不用包心的汤圆十多个或二三十个煮好，用细竹叉扦着置于室外田边地坎，名曰粘雀子嘴，免得雀子来破坏庄稼。',
          },
          geometry: {
            type: "Point",
            coordinates: [115.932444, 37.112978],
          },
        },
      ],
    },
  });
  //0923秋分，03玩乐，内容：竖蛋，送秋牛
  map.addSource("0923-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">竖蛋</strong><br><img class="picture" src="图标\\0923秋分\\4习俗竖蛋.jpg" width="200px" height="150px" alt="" ><p>民谚有“秋分到，蛋儿俏”的说法，说的是秋分这一天，谁能将新鲜的鸡蛋竖起来，这一年都会有好运。这一传统习俗早在4000年前就有了。',
          },
          geometry: {
            type: "Point",
            coordinates: [118.287298, 33.986324],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">送秋牛</strong><br><img class="picture" src="图标\\0923秋分\\5习俗送秋牛.jpg" width="200px" height="150px" alt="" ><p>秋牛图是把二开红纸或黄纸印上全年农历节气，还要印上农夫耕田图样。送图者都是些民间善言唱者，主要说些秋耕和吉祥不违农时的话，每到一家更是即景生情，见啥说啥，说得主人乐而给钱为止。</p>言词虽随口而出，却句句有韵动听。俗称“说秋”，说秋人便叫“秋官”。',
          },
          geometry: {
            type: "Point",
            coordinates: [116.079622, 25.52277],
          },
        },
      ],
    },
  });

  /*1008寒露
  02饮食：花糕，芝麻
  03玩乐：赏红叶，赏菊花，登高，钓虾，斗蟋蟀
  05茶文化：菊花茶
  */

  //1008寒露，02饮食，内容：花糕，芝麻
  map.addSource("1008-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">花糕</strong><br><img class="picture" src="图标\\1008寒露\\2饮食花糕.jpg" width="200px" height="150px" alt="" ><p>九九登高，还要吃花糕，因“高”与“糕”谐音，故应节糕点谓之“重阳花糕”，寓意“步步高升”。</p>花糕主要有“糙花糕”、“细花糕”和“金钱花糕”。粘些香菜叶以为标志，中间夹上青果、小枣、核桃仁之类的干果：细花糕有3层、2层不等，每层中间都夹有较细的蜜饯干果，如苹果脯、桃脯、杏脯、乌枣之类；</p>金钱花糕与细花糕基本同样。但个儿较小，如同“金钱”一般，多是上层府第贵族的食品。',
          },
          geometry: {
            type: "Point",
            coordinates: [124.027254, 51.206609],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">菊花茶</strong><br><img class="picture" src="图标\\1008寒露\\3饮食菊花茶.jpg" width="200px" height="150px" alt="" ><p>寒露与重阳节接近，此时菊花盛开，为除秋燥，某些地区有饮“菊花酒”的习俗，这一习俗与登高一起，渐渐移至重阳节。</p>菊花酒是由菊花加糯米、酒曲酿制而成，古称“长寿酒”，其味清凉甜美，有养肝、明目、健脑、延缓衰老等功效。',
          },
          geometry: {
            type: "Point",
            coordinates: [128.884141, 46.348107],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">芝麻</strong><br><img class="picture" src="图标\\1008寒露\\4饮食吃芝麻.jpg" width="200px" height="150px" alt="" ><p>寒露到，天气由凉爽转向寒冷。根据中医“春夏养阳，秋冬养阴”的养生理论，这时人们应养阴防燥、润肺益胃。</p>于是，民间就有了“寒露吃芝麻”的习俗。芝麻，在《神农本草经》和《本草纲目》等医药学专著里都享有很高的评价，可广泛应用于食疗。</p>还有谚语说：“芝麻绿豆糕，吃了不长包。”这道出芝麻与绿豆都具有排毒的功能。</p>用芝麻榨取的香油，不仅是热菜和凉拌菜的调味佳品，也广泛用于食疗解毒。',
          },
          geometry: {
            type: "Point",
            coordinates: [123.732898, 41.457044],
          },
        },
      ],
    },
  });
  //1008寒露，03玩乐，内容：赏红叶，赏菊花，登高，钓虾，斗蟋蟀
  map.addSource("1008-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">赏红叶</strong><br><img class="picture" src="图标\\1008寒露\\5娱乐赏红叶.jpg" width="200px" height="150px" alt="" ><p>寒露时节，很多地方有赏枫叶的习俗，“霜叶红于二月花”说的也是这个季节。适合寒露观红叶的是北方地区，尤其是黄河以北。</p>北京地区观赏红叶的时期是10月中旬至11月上旬，其中最佳时期是10月15日至30日。</p>香山堪称是中国国内最具口碑的赏红叶地点，寒露时节，秋风飒飒，层林尽染，漫山红叶如霞似锦、如诗如画。',
          },
          geometry: {
            type: "Point",
            coordinates: [115.932444, 37.112978],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">赏菊花</strong><br><img class="picture" src="图标\\1008寒露\\6娱乐赏菊花.jpg" width="200px" height="150px" alt="" ><p>寒露到来的农历九月又称菊月，是菊花的月份。和大多数春夏盛开的花不同，菊花是反季节的花，越是霜寒露重，越是开得艳丽。</p>寒露三候中的“菊始黄华”，指的正是菊花此时普遍开放。菊花为寒露时节最具代表性的花卉，处处可见到它的踪迹。',
          },
          geometry: {
            type: "Point",
            coordinates: [118.287298, 33.986324],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">登高</strong><br><img class="picture" src="图标\\1008寒露\\7娱乐登高.jpg" width="200px" height="150px" alt="" ><p>由于重阳节在寒露节气前后，寒露节气宜人的气候又十分适合登山，重阳节登高的习俗也逐渐成了寒露节气的习俗。</p>登高寓意“步步高升”、“高寿”。古时登高源于“避祸”。',
          },
          geometry: {
            type: "Point",
            coordinates: [116.079622, 25.52277],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">钓虾</strong><br><img class="picture" src="图标\\1008寒露\\7娱乐钓虾.jpg" width="200px" height="150px" alt="" ><p>在江南地区，还有吃螃蟹、钓鱼的习俗。每到寒露时节，气温快速下降，深水处太阳已经无法晒透，鱼儿便都向水温较高的浅水区游去，便有了人们所说的“秋钓边”。寒露前后，虾蟹繁多。',
          },
          geometry: {
            type: "Point",
            coordinates: [108.720703, 23.231127],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">斗蟋蟀</strong><br><img class="picture" src="图标\\1008寒露\\8娱乐斗蟋蟀.jpg" width="200px" height="150px" alt="" ><p>白露、秋分和寒露，是老北京人斗蟋蟀儿的高潮期。蟋蟀儿也叫促织，一般听见蟋蟀儿叫就意味着入秋了，天气渐凉，提醒人们该准备过冬的衣服了，故有“促织鸣，懒妇惊”之说。</p>据记载，斗蟋蟀儿始于唐朝天宝年间，南宋权相贾似道，“少时游博无行”，掌权后尤喜促织之戏，还专门写了一本书《促织经》。</p>明朝宣德皇帝也爱斗蟋蟀儿，致使一只好蟋蟀儿价至数十金，上有所好，下必甚之，北京人玩蟋蟀儿，大概也始于明朝吧。',
          },
          geometry: {
            type: "Point",
            coordinates: [101.214606, 24.987362],
          },
        },
      ],
    },
  });
  //1008寒露，05茶文化，内容：菊花茶
  map.addSource("1008-05", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">菊花茶</strong><br><img class="picture" src="图标\\1008寒露\\3饮食菊花茶.jpg" width="200px" height="150px" alt="" ><p>寒露与重阳节接近，此时菊花盛开，为除秋燥，某些地区有饮“菊花酒”的习俗，这一习俗与登高一起，渐渐移至重阳节。</p>菊花酒是由菊花加糯米、酒曲酿制而成，古称“长寿酒”，其味清凉甜美，有养肝、明目、健脑、延缓衰老等功效。',
          },
          geometry: {
            type: "Point",
            coordinates: [128.884141, 46.348107],
          },
        },
      ],
    },
  });

  /*1023霜降
  01祭祀：送芋鬼，祭祖
  02饮食：柿子，进补，萝卜，鸭子，牛肉
  03玩乐：赏菊，登高
  */

  //1023霜降，01祭祀，内容：送芋鬼，祭祖
  map.addSource("1023-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">送芋鬼</strong><br><img class="picture" src="图标\\1023霜降\\9祭祀芋头.jpg" width="200px" height="150px" alt="" ><p>在广东高明地区,霜降前有“送芋鬼”的习俗。</p>霜降时节,人们会用瓦片堆砌成河内塔,在塔里面放入干柴点燃,火烧得越旺越好,直至瓦片烧红,再将河内塔推倒,</p>用烧红的瓦片热垠芋头,这在当地称为“打芋煲”, 最后把瓦片丢到村外,这就是“送芋鬼”。人们以这样的方式,辟凶迎祥。',
          },
          geometry: {
            type: "Point",
            coordinates: [112.903214, 22.907148],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">祭祖</strong><br><img class="picture" src="图标\\1023霜降\\11祭祀祭祖.jpg" width="200px" height="150px" alt="" ><p>古时候,霜降时节有扫墓祭祖的习俗。</p>据《清通礼》中说: 岁寒食及霜降节 ,拜扫扩荃,届期素服诣墓,具酒撰及菱剪草木之器:周服封树,剪除荆草,故称扫墓。',
          },
          geometry: {
            type: "Point",
            coordinates: [124.027254, 51.206609],
          },
        },
      ],
    },
  });
  //1023霜降，02饮食，内容：柿子，进补，萝卜，鸭子，牛肉
  map.addSource("1023-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃柿子</strong><br><img class="picture" src="图标\\1023霜降\\2饮食柿子.jpg" width="200px" height="150px" alt="" ><p>在中国的一些地方,霜降时节要吃红柿子,在当地人看来,这样不但可以御寒保暖,同时还能补筋骨,是非常不错的霜降食品。</p>泉州老人对于霜降吃柿子的说法是:霜降吃丁柿,不会流鼻涕。有些地方对于这个习俗的解释是:霜降这天要吃柿子,不然整个冬天嘴唇都会裂开。</p>住在农村的人们到了这个时候,则会爬上一棵棵高大的柿子树,摘几个光鲜香甜的柿子吃。',
          },
          geometry: {
            type: "Point",
            coordinates: [128.884141, 46.348107],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">进补</strong><br><img class="picture" src="图标\\1023霜降\\3饮食进补.jpg" width="200px" height="150px" alt="" ><p>民间有“补冬不如补霜降”的讲法。霜降时节,天气越发寒冷,民间食俗也非常有特色。</p>人们认为先“补重阳”后“补霜降”, 而且“秋补”比“冬补”更要紧。</p>因此，霜降时节,民间有“煲羊肉”“煲羊头” “迎霜兔肉” 的食俗。',
          },
          geometry: {
            type: "Point",
            coordinates: [123.732898, 41.457044],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">萝卜</strong><p>在山东地区,有句农谚：“处暑高粱,白露谷,霜降到了拔萝卜”, 所以山东人霜降喜食萝卜。</p>农谚有“霜降萝卜”一说，是指霜降以后早晚温差大,露地萝卜不及时收获将出现冻皮等情况，影响萝卜品质和收成。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [117.116195, 36.669185],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃鸭子</strong><br><img class="picture" src="图标\\1023霜降\\5饮食鸭子.png" width="200px" height="150px" alt="" ><p>闽南台湾的民间在霜降的这一天,要进食补品,也就是我们北方常说的“贴秋膘”。在闽南有一句谚语,叫做“一年补通通,不如补霜降”。</p>从这句句小小的谚语就充分的表达出闽台民间对霜降这一节气的重视。因此,每到霜降时节,闽台地区的鸭子就会卖的非常火爆,有时还会出现脱销、供不应求的情况。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.361906, 24.010401],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃牛肉</strong><br><img class="picture" src="图标\\1023霜降\\6饮食牛肉.png" width="200px" height="150px" alt="" ><p>不少地方都有霜降吃牛肉的习俗。例如广西玉林,这里的居民习惯在霜降这天,早餐吃牛河炒粉,午餐或晚餐吃牛肉炒萝卜,或是牛腩煲之类的来补充能量,祈求在冬天里身体暖和强健。</p>除牛肉外,羊肉与兔肉也与霜降相宜。',
          },
          geometry: {
            type: "Point",
            coordinates: [110.198811, 22.651239],
          },
        },
      ],
    },
  });
  //1023霜降，03玩乐，内容：赏菊，登高
  map.addSource("1023-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">赏菊</strong><br><img class="picture" src="图标\\1023霜降\\7娱乐赏菊.jpg" width="200px" height="150px" alt="" ><p>古有“霜打菊花开”之说，所以登高山,赏菊花,也就成为了霜降这一节令的雅事。南朝梁代吴均的《续齐谐记》上有记载。“霜降之时 ,唯此草盛茂”, 因此菊被古人视为“候时之草”,成为生命力的象征。霜降时节正是秋菊盛开的时候,我国很多地方在这时要举行菊花会，赏菊饮酒,以示对菊花的崇敬和爱戴。古人眼里,菊花有着不寻常的文化意义,被认为是“延寿客”、不老草。《杂五行书》说:在屋舍旁种白杨、茱萸三根,增年益寿,除患害也。侵害身体的晚秋寒气在古代常被视为鬼魅恶气,菊花能驱风逐邪祛寒的茱萸,民间作驱病疗疾之用。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [85.613698, 31.498886],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">登高</strong><br><img class="picture" src="图标\\1023霜降\\8娱乐登高.jpg" width="200px" height="150px" alt="" ><p>古时霜降时节有登高远眺的习俗。登高能使人的肺通气量和肺活量明显增加,血液循环增强,脑血流量增加,达到增强体质、防病治病的目的，而且,登高还可以培养人的意志,陶冶情操。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [101.214606, 24.987362],
          },
        },
      ],
    },
  });
  map.addSource("1107-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">辽宁祭祀</strong><br><img class="picture" src="图标\\1107立冬\\祭祀.png" width="200px" height="150px" alt="" ><p>辽宁本溪地区满族八旗和汉军八旗有烧香祭祖的节气习俗。祭祖典礼完了以后，还会大摆宴席，招待前来祭祖的各路宗亲。大家开怀畅饮，互诉亲情。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [124.12741, 41.30059],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">迎冬</strong><br><img class="picture" src="图标\\1107立冬\\迎冬.png" width="200px" height="150px" alt="" ><p>早在汉魏时期，立冬日，皇帝有出郊迎冬的仪式，此习俗一直沿袭到宋朝，称为 “贺冬” ，亦称 “拜冬” 。立冬与立春、立夏、立秋合称“四立”，在古代社会中是个重要的节日，皇帝有出郊迎冬的仪式，并赐群臣冬衣，抚恤孤寡。立冬前三日，掌管历法祭祀的官员会告诉皇帝立冬日期，皇帝便开始沐浴斋戒。立冬当天，皇帝率领三公九卿到北郊六里处迎冬，回来后还要大加赏赐，以安社稷。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [112.45404, 34.619682],
          },
        },
      ],
    },
  });
  map.addSource("1107-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃甘蔗、炒香饭</strong><br><img class="picture" src="图标\\1107立冬\\甘蔗.png" width="200px" height="150px" alt="" ><p>汕头地区在立冬日少不了吃甘蔗，潮汕有句民间谚语说：“立冬食蔗不会齿痛”，意思是说在这天吃了甘蔗，可以保护牙齿，起到滋补的功效。除了甘蔗以外，岭南有些地方还有吃“炒香饭”的习俗，所谓炒香饭，就是用花生、蘑菇、板栗、虾仁、红萝卜等做成的香饭，深受百姓喜爱。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.708463, 23.37102],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃饺子</strong><br><img class="picture" src="图标\\1107立冬\\吃饺子.png" width="200px" height="150px" alt="" ><p>北方在立冬有吃饺子的节气习俗，在这一天，家家户户都吃饺子。因为饺子的形状类似耳朵，所以吃饺子的寓意，就是补补耳朵，以免在寒冷的冬天冻伤。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.403694, 39.949459],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃咸肉菜饭</strong><br><img class="picture" src="图标\\1107立冬\\吃咸肉菜饭.png" width="200px" height="150px" alt="" ><p>江南的苏州地区到了立冬，家家户户就要烧上几次咸肉菜饭尝鲜，大家对咸肉菜饭的热爱程度，仅次于端午节的粽子。咸肉菜饭，是用正宗的霜打厚德苏州大青菜以及肥瘦兼有的咸肉，还有苏州的白米精制而成，风味独特，令人胃口大开，欲罢不能。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.619585, 31.299379],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">腌菜</strong><br><img class="picture" src="图标\\1107立冬\\腌菜.png" width="200px" height="150px" alt="" ><p>到了立冬，是制作腌菜的最佳时期，因为冬天的蔬菜比较少，所以民间都习惯把菜腌起来，以备整天冬天食用。在我们北方，冬天最常腌的菜，就是白萝卜，再就是韭菜花，小时候经常吃。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [114.508772, 38.083783],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃糕</strong><br><img class="picture" src="图标\\1107立冬\\吃糕.png" width="200px" height="150px" alt="" ><p>陕北、山西一带特别盛行在立冬节气里吃糕。在山西有句俗语：“三十里莜面，四十里糕”，意思是说糕这种东西，吃了特别管事，特别耐饿，因为这种食物方便储藏，所以成为农村冬季必不可少的食物。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [112.595453, 37.858034],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃倭瓜</strong><br><img class="picture" src="图标\\1107立冬\\吃倭瓜.png" width="200px" height="150px" alt="" ><p>天津一带，历来有在立冬节气吃倭瓜饺子的习俗。倭瓜就是南瓜，也称窝瓜、番瓜、饭瓜和北瓜，是在北方经常看到的一种蔬菜，本身性味甘温，有健脾消食、洗涤肠胃的功效。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [117.286764, 39.001295],
          },
        },
      ],
    },
  });
  map.addSource("1107-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">冬泳</strong><br><img class="picture" src="图标\\1122小雪\\冬泳.jpg" width="200px" height="150px" alt="" ><p>今天有些地方以富有新意的方式庆祝立冬。在哈尔滨、商丘、宜春、武汉等地，立冬之日，冬泳爱好者用游泳的方式迎接冬天的到来。冬泳时，人的身体受到冷水刺激后，全身血液循环和新陈代谢就会加强，很多血液被吸入内脏器官及深部组织，这样一些重要脏器的血管就开始扩张；而人的身体为了御冷，皮肤血管很快又扩张，致使大量血液又从内脏流向体表。这样有规律的一张一缩，从而使血管得到锻炼，增强了血管弹性，所以冬泳也被称为“血管体操”。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [126.522207, 45.801617],
          },
        },
      ],
    },
  });
  map.addSource("1107-05", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">茶文化</strong><br><img class="picture" src="图标\\1107立冬\\茶文化.png" width="200px" height="150px" alt="" ><p>天气渐寒，茶的选择宜苦涩甘滑津平衡。红茶、熟普、陈年的乌龙茶、老白茶、老六堡、多年的老生普，汤色橙红明艳，给人身心皆温暖之感。特别是温润的老茶，可以煮饮，亦可以先泡后煮，冬日暖阳，一杯茶，临窗望远。另有红茶，可文火慢煮调制不同口感风味的奶茶，捧在手心里，暖暖的很贴心。冬日进补多温热内火时，可以品饮应季的菊花茶，清凉去内热，亦可观赏花姿养眼怡情。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [114.741211, 27.994401],
          },
        },
      ],
    },
  });

  map.addSource("1122-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃糍粑</strong><br><img class="picture" src="图标\\1122小雪\\吃糍粑.png" width="200px" height="150px" alt="" ><p>南方有农历十月吃糍粑的习俗。糍粑是南方传统的节日祭品，最早是农民用来祭献牛神的供品，即俗语所说：“十月朝（农历十月初一），糍粑碌碌烧”。“碌碌烧”是客家语言，“碌”是像轱辘那样滚动，指用筷子卷起糯米粉团，前后左右滚动粘上芝麻、花生、砂糖；“烧”，即热气腾腾。吃糍粑讲究一热、二玩、三斗（比较），从中可以体味到农家的乐趣。糍粑有做成圆形的，寓意丰收、喜庆和团圆；有做成长方形的，称为“年糕”，寓意吉祥如意、年丰寿高。有用纯糯米或小米做的，也有糯米与小米或玉米一起打成的。吃糍粑可以用油煎，还可以和青菜煮食，或和腊肉一起炒着吃。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [117.861328, 25.244696],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">晒鱼干</strong><br><img class="picture" src="图标\\1122小雪\\晒鱼干.png" width="200px" height="150px" alt="" ><p>小雪时节，台湾中南部的渔民开始晒鱼干、储存干粮。乌鱼群会在小雪前后来到台湾海峡，另外还有旗鱼、沙鱼等。台湾俗谚说：“十月豆，肥到不见头”，是指在嘉义县西南沿海一带，到了农历十月可以捕到“豆仔鱼”。晒鱼干一般要选大鱼。买回鱼后，把鱼去鳞、去内脏；清理干净后，将炒好的调料均匀抹在鱼的内外两侧，之后将其平放在较大的容器里面，在阴凉处晾置；四五天后，将鱼上下翻个，以便调料均匀吸收，再过四五天，便可将鱼挂在阴凉通风处。一般情况下，晾晒两三个月后便可取下切段，封存后等待食用。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [121.591732, 25.034634],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">做腊肉</strong><br><img class="picture" src="图标\\1122小雪\\做腊肉.png" width="200px" height="150px" alt="" ><p>民间有：“冬腊风腌，蓄以御冬”的习俗。小雪时节气温急剧下降，天气变得干燥，是加工腊肉的好时候。小雪时节气温急剧下降，天气变得干燥，是加工腊肉的好时候。民间有“冬腊风腌，蓄以御冬”的习俗。南方很多人对腊味食品情有独钟。此时，一些农家开始动手做香肠、腊肉，做好后正是春节，可以做年货。小雪至立春前，农家杀猪宰羊，除了过年用的鲜肉外，其余的用食盐，配以一定比例的花椒、大茴、八角、桂皮、丁香等香料，腌入缸中；七到十五天后，用绳索串挂起来，晾干；一个月左右，便可食用。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [102.568359, 31.128199],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃刨汤</strong><br><img class="picture" src="图标\\1122小雪\\吃刨汤.png" width="200px" height="150px" alt="" ><p>小雪前后，土家族群众又开始了一年一度的“杀年猪，迎新年”的民俗活动，给寒冷的冬天增添热烈气氛。吃“刨汤”，是土家族的风俗习惯，也是我国大西南农村地区历史悠久的一种民间习俗。土家人所说的“刨汤肉”，指的是猪刚刚宰杀后，人们在猪肉还没完全冷却变成僵硬的肉块前，趁着热呼、绵软劲儿，烹制而成的各种鲜肉大餐，也有人管这叫“吃活肉”或者“吃活食”。“刨汤”，则是用猪内杂、肥肉等剁细后拌糯米饭、猪血及少量香料调制，灌进洗净的小肠，再放入锅中煮制而成。若刨汤里再添些生猪血、猪骨、肥瘦肉、蔬菜之类，用山泉水合锅而煮，就做成了刨汤火锅。三分猪血七分水，待到火锅水沸时，刨汤鲜美香浓的真味就出来了。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [109.089301, 27.79187796],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">酿新酒</strong><br><img class="picture" src="图标\\1122小雪\\酿新酒.webp.jpg" width="200px" height="150px" alt="" ><p>很多地区冬季都有酿酒的习俗，因为冬季的水比较清澈，浙江长兴的人们通常在小雪后酿酒，称之为小雪酒，将酒储存到第二年，酒香浓烈，酒色清澈。在此时酿酒也是因为小雪时节的水足以和雪水媲美，更加清澈。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [119.90238, 31.026666],
          },
        },
      ],
    },
  });

  map.addSource("1207-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">腌肉</strong><br><img class="picture" src="图标\\1207大雪\\腌肉.jpg" width="200px" height="150px" alt="" ><p>老南京有句俗语，叫做“小雪腌菜，大雪腌肉”。大雪节气一到，南方很多人家忙着腌制“咸货”。大雪节气天气寒冷，在不易保鲜的古时，人们发现此时腌制肉类食品不易变质，于是大雪节气一到，家家户户就忙着腌制咸肉，以迎接新年。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [118.806152, 32.063956],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">腌雪菜</strong><br><img class="picture" src="图标\\1207大雪\\腌雪菜.jpg" width="200px" height="150px" alt="" ><p>大雪节气前后，有些地方的老人会腌一些雪菜过冬食用。雪菜又叫雪里蕻，属于性温、味甘辛的蔬菜，还含有胡萝卜素和食用纤维素。从养生的角度看，雪菜有助于增加大脑中氧含量，起到醒脑提神的作用。在寒冷的冬季，来一碗热气腾腾的雪菜面或雪菜豆腐，应该是很温暖的吧！</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [117.949219, 32.546813],
          },
        },
      ],
    },
  });
  map.addSource("1207-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">观赏封河</strong><br><img class="picture" src="图标\\1207大雪\\观赏封河.jpg" width="200px" height="150px" alt="" ><p>“小雪封地，大雪封河”，北方有“千里冰封，万里雪飘”的自然景观，南方也有“雪花飞舞，漫天银色”的迷人图画。到了大雪节气，河里的冰都冻住了，人们可以尽情地滑冰嬉戏。 </p>',
          },
          geometry: {
            type: "Point",
            coordinates: [129.462891, 46.316584],
          },
        },
      ],
    },
  });

  map.addSource("1222-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">祭祀</strong><br><img class="picture" src="图标\\1222冬至\\祭祀.jpg" width="200px" height="150px" alt="" ><p>宋以后，冬至逐渐成为祭祀祖先和神灵的节庆活动。古人认为自冬至起，天地阳气渐强，下一轮循环即将到来，是大吉之日。民间素有“冬至大如年”的说法，说明冬至的重要性。现今，很多地区仍保持着冬至祭天祭祖的习俗，如江浙、闽南一带，在冬至这天要过节庆贺。潮汕人家在冬至时会备足猪、鸡、鱼等三牲和果品，上祠堂祭拜祖先，一般都在中午祭拜完毕，午餐时家人团聚。沿海地区如饶平县海山一带，渔民则在清晨出海捕鱼之前祭祖，意为请神明和祖先保佑渔民出海平安。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [119.707031, 31.578535, 115.488281, 23.261534],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">三门祭冬</strong><br><img class="picture" src="图标\\1222冬至\\三门祭冬：老人宴.jpg" width="200px" height="150px" alt="" ><p>每年12月冬至前夕，浙江台州市三门县亭旁镇杨家村历时3天的祭冬大典就开始受到广大民众和媒体的关注。三门祭冬历史悠久，它以节气为表，以“敬畏天地、感恩祖宗、敬老爱老、扬义涵德”为核心内容，在慎终追远的传统中，完成“春祈秋报”中感恩天地祖先的礼仪。三门祭冬已作为“农历二十四节气”的扩展项目入选国家级非物质文化遗产名录。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [121.35053, 29.03815],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">台湾祭祖</strong><p>在我国台湾还保存着冬至用九层糕祭祖的传统，用糯米粉捏成鸡、鸭、龟、猪、牛、羊等象征吉祥中意福禄寿的动物，然后用蒸笼分层蒸成，用以祭祖，以示不忘老祖宗。同姓同宗者于冬至或前后约定之早日，集到祖祠中照长幼之序，一一祭拜祖先，俗称"祭祖"。祭典之后，还会大摆宴席，招待前来祭祖的宗亲们。大家开怀畅饮，相互联络久别生疏的感情，称之为"食祖。"冬至节 祖先，在台湾一直世代相传，以示不忘自己的"根"。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [121.025391, 23.885838],
          },
        },
      ],
    },
  });
  map.addSource("1222-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">广东烧腊与姜饭</strong><br><img class="picture" src="图标\\1222冬至\\烧腊与姜饭.jpg" width="200px" height="150px" alt="" ><p>广东人冬至吃烧腊与姜饭，冬至这天，大多数广东人都有“加菜”吃冬至肉的风俗。潮汕一带有“冬节丸，一食就过年”的民谚，俗称“添岁”。客家人认为，冬至时的水味最醇，所以，客家人冬至酿酒已成为习俗。 </p>',
          },
          geometry: {
            type: "Point",
            coordinates: [115.070801, 22.988738],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">杭州年糕</strong><br><img class="picture" src="图标\\1222冬至\\年糕.jpg" width="200px" height="150px" alt="" ><p>杭州人冬至吃年糕，吃年糕从明末清初直到今杭州人在冬至都喜吃年糕。在每逢冬至做三餐不同风味的年糕，冬至吃年糕，年年长高，图个吉利。在四川却是冬至吃羊肉汤，羊肉是冬日可谓冬日滋补之首。湖南湖北一带，在冬至那一天一定要吃上赤豆糯米饭。 </p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.146484, 30.297018],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">北方饺子</strong><br><img class="picture" src="图标\\1222冬至\\饺子.png" width="200px" height="150px" alt="" ><p>在我国北方许多地区，每年冬至日，有吃饺子的习俗。相传医圣张仲景告老还乡时看到受冻的百姓，便用羊肉和一些驱寒药材以及面皮，包成像耳朵的样子，做成一种叫“驱寒娇耳汤”的药物，施舍给百姓吃。后来，每逢冬至，人们便模仿做着吃，形成了习俗。我国北方大部分地区在这一天要吃饺子也因为饺子有“消寒”之意，至今民间还流传着“冬至不端饺子碗，冻掉耳朵没人管”的民谚。 </p>',
          },
          geometry: {
            type: "Point",
            coordinates: [117.861328, 41.640078],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">山东滕州羊肉汤</strong><br><img class="picture" src="图标\\1222冬至\\羊肉汤.jpg" width="200px" height="150px" alt="" ><p>冬至吃羊肉的习俗据说是从汉代开始的。相传，汉高祖刘邦在冬至这一天吃了樊哙煮的羊肉，觉得味道特别鲜美，赞不绝口。从此在民间形成了冬至吃羊肉的习俗。人们纷纷在冬至这一天，吃羊肉以及各种滋补食品，以求来年有一个好兆头。现山东滕州一带，这天被称作数九，节前会给长辈送诸如羊肉等礼品，数九家家都要喝羊肉汤，对个人对长辈对家庭都为图个好兆头。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [117.161636, 35.113169],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">江南赤豆糯米饭</strong><br><img class="picture" src="图标\\1222冬至\\赤豆糯米饭.jpeg" width="200px" height="150px" alt="" ><p>在江南水乡，有冬至之夜全家欢聚一堂共吃赤豆糯米饭的习俗。相传，共工氏有不才子，作恶多端，死于冬至这一天，死后变成疫鬼，继续残害百姓。但是，这个疫鬼最怕赤豆，于是，人们就在冬至这一天煮吃赤豆饭，用以驱避疫鬼，防灾祛病。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [119.750977, 31.466154],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">番薯汤果</strong><br><img class="picture" src="图标\\1222冬至\\番薯汤果.jpg" width="200px" height="150px" alt="" ><p>在宁波的传统习俗中，番薯汤果是冬至必吃的美食之一。“番”和“翻”同音，在宁波人的理解中，冬至吃番薯，就是将过去一年的霉运全部“翻”过去。汤果，跟汤团类似，但个头要小得多，而且里面没有馅。汤果也被叫做圆子，取其“团圆”、“圆满”之意。老宁波也有“吃了汤果大一岁”的说法。宁波人在做番薯汤果时，习惯加酒酿。在宁波话中，酒酿也叫“浆板”，“浆”又跟宁波话“涨”同音，取其“财运高涨”、“福气高涨”的好彩头。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [121.604919, 29.856128],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">台湾糯糕</strong><br><img class="picture" src="图标\\1222冬至\\台湾糯糕.jpeg" width="200px" height="150px" alt="" ><p>在我国台湾还保存着冬至用九层糕祭祖的传统，用糯米粉捏成鸡、鸭、龟、猪、牛、羊等象征吉祥中意福禄寿的动物，然后用蒸笼分层蒸成，用以祭祖，以示不忘老祖宗。同姓同宗者于冬至或前后约定之早日，集到祖祠中照长幼之序，一一祭拜祖先，俗称“祭祖”。祭典之后，还会大摆宴席，招待前来祭祖的宗亲们。大家开怀畅饮，相互联络久别生疏的感情，称之为“食祖。”冬至节　祖先，在台湾一直世代相传，以示不忘自己的“根”。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [121.102295, 23.976215],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">擂圆</strong><br><img class="picture" src="图标\\1222冬至\\擂圆.jpg" width="200px" height="150px" alt=""><p>浙江台州人好美食，冬至是一年中重要节气，在这一天要做些特色菜肴和食物，首先要祭奠祖先，祈祷祖先保佑全家人来年一切平安如意。然后全家人欢乐地聚在一起喝酒吃菜。其中吃“冬至圆”（擂圆，又叫硬擂圆、翻糙圆）是台州的老传统，擂圆取圆圆润润、团圆之意。擂圆是冬至的重头戏，“圆”意味着“团圆”“圆满”，与平日里吃的汤圆相比，临海人的冬至圆不但内容丰富、形式各异，而且意味深长。擂圆是用糯米粉做的，先把糯米粉和温水揉成面团，再摘成醋碟大小的圆子揉圆，煮熟后放在豆黄粉里滚拌，因为这个过程临海的方言叫“擂”，所以冬至圆起名叫“擂圆”，而豆黄粉是用黄豆炒熟后磨成粉再拌入红糖，味道香甜浓郁，配上糯米圆的细腻糯软，令人食欲大增。夹一个粘满豆粉的擂圆，趁热咬上一口，香喷喷、甜滋滋、暖烘烘、软绵绵，一股幸福的滋味油然而生。除了经典的甜圆，也有很多家里喜欢咸的冬至圆，咸圆就是在糯米团里放馅，包类似猪肉、豆腐干、冬笋、香菇、红萝卜、白萝卜等细丁，可蒸可煮，鲜香多汁，另有一番滋味。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [121.411285, 28.656851],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">酿酒</strong><br><img class="picture" src="图标\\1222冬至\\冬酿酒.jpeg" width="200px" height="150px" alt=""><p>姑苏地区对冬至这一节气非常重视，姑苏地区有俗语云：“冬至如大年”。传统的姑苏人家，会在冬至夜喝冬酿酒，冬酿酒是一种米酒，加入桂花酿造，香气宜人。姑苏百姓在冬至夜畅饮冬酿酒的同时，还会配以卤牛肉、卤羊肉等各式各样的卤菜。在寒冷的冬天，冬酿酒不仅能够驱寒，更是寄托了姑苏人对生活的一种美好的祈愿。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.584564, 31.306715],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">麻糍</strong><br><img class="picture" src="图标\\1222冬至\\麻糍.jpeg" width="200px" height="150px" alt=""><p>麻糍，是浙江，江西的特产，也是福建人的传统小吃、福建人祭祀时的供品。麻糍阴干后蒸、煎、火烤、砂炒皆宜。麻糍也是闽南著名小吃，其中又以南安英都出产最为出名，其原料为上好糯米、猪油、芝麻、花生仁、冰糖等。麻糍香甜可口，食后耐饿，有着甜、滑的口感，且软韧、微冰。成品色泽鲜白，滑韧透明。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [115.839844, 27.527758],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">冬至面</strong><br><img class="picture" src="图标\\1222冬至\\冬至面.jpeg" width="200px" height="150px" alt=""><p>“吃了冬至面，一天长一线”。在安徽合肥，冬至吃面的风俗与节气、气候、农事有关。冬至过后即是数九寒天，每隔九天数作一九。在滴水成冰的严冬，吃一碗热腾腾的鸡蛋挂面，才算是过了一个冬至。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [117.217255, 31.821565],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">汤圆</strong><br><img class="picture" src="图标\\1222冬至\\汤圆2.jpeg" width="200px" height="150px" alt=""><p>潮汕地区汉族民谚云：“冬节大如年”、“冬节没返没祖宗”。意思是外出的人，到冬至这一天无论如何要赶回家敬拜祖宗，否则就是没有祖家观念。海峡两岸的同胞，都很看重冬至，把冬至当作团圆节。潮汕的人们吃了冬节圆后，还要在家宅的门、窗、桌、橱、梯、床等显眼处粘附两粒冬节圆，甚至渔家的船首，农户耕牛的牛角，果农种植的果树也不例外。现代台湾著名学者林再复在《闽南人》一书中描述台湾冬节（闽南语称冬至为冬节）之日“家家户户清晨要以冬至圆仔致祭祖先……从大门、小门、窗门、仓门、床、柜、桌、井、厕、牛舍、猪舍都得以冬至圆一二粒在上面，祭告一番，以求保佑一家大小平安”。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.674805, 24.607069],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">桂圆烧蛋</strong><br><img class="picture" src="图标\\1222冬至\\桂圆烧蛋.jpeg" width="200px" height="150px" alt=""><p>冬至古代为大节日，嘉兴重冬至，俗谚“冬至大似年”，保留古风。据《嘉兴府志》 (卷34·风俗) 记载：“冬至祀先，冠盖相贺，如元旦仪”。民间崇尚冬至进补，有赤豆糯米饭、人参汤；白木耳、核桃仁炖酒、桂圆煮鸡蛋等。 至今，嘉兴仍然传承冬至吃“桂圆烧蛋”的习俗，老人们说因为一年中冬至夜晚最长，不吃的话会冻一晚上，半夜还会肚子饿。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.750732, 30.760719],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">南瓜饼</strong><br><img class="picture" src="图标\\1222冬至\\南瓜饼.jpg" width="200px" height="150px" alt=""><p>冬至过了眼看年，合肥人到了冬至都要吃南瓜饼，大街小巷弥漫着南瓜饼的香味，并且还有一句谚语叫做“吃了冬至面，一天长一线”，就是说过了冬至，就会夜短日长了。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [117.224121, 31.821565],
          },
        },
      ],
    },
  });
  map.addSource("1222-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">九九消寒图 </strong><br><img class="picture" src="图标\\1222冬至\\九九消寒图.jpg" width="200px" height="150px" alt=""><p>“九九消寒图”是一种游戏。明末《帝京景物略》里记载：“冬至日人家画素梅一枝，为瓣八十有一，日染一瓣，瓣尽而九九出，则春深矣，曰‘九九消寒图’。”另一种消寒图是一幅描红书法，上有繁体的“庭前垂柳珍重待春風”九字，每字九画，共八十一画。冬至开始，每天按笔画顺序填充一笔，每过“一九”填充好一个字。“九九”之后，春回大地。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [118.795166, 32.063956],
          },
        },
      ],
    },
  });

  map.addSource("0105-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">腊祭</strong><br><img class="picture" src="图标\\0105小寒\\腊祭.jpg" width="200px" height="150px" alt=""><p>　“小寒”是腊月的节气，由于古人会在十二月份举行合祀众神的腊祭，因此把腊祭所在的十二月叫腊月。腊的木义是“接”，取新旧交接之意。腊祭为我国古代祭祀习俗之一，远在先秦时期就已形成。“腊祭”含意取其有三，一是表示不忘记自己及其家族的本源，表达对祖先的崇敬与怀念。二是祭百神，感谢他们一年来为农业所作出的贡献。三是人们终岁劳苦，此时农事己息，借此游乐一番。自周代以后，“腊祭”之俗历代沿习，从天子、诸侯到平民百姓，人人都不例外。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [108.713837, 34.335498],
          },
        },
      ],
    },
  });
  map.addSource("0105-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">涮羊肉、糖炒栗子、烤白薯等</strong><br><img class="picture" src="图标\\0105小寒\\糖炒栗子.png" width="200px" height="150px" alt="" ><p>饮食上，吃涮羊肉、糖炒栗子、烤白薯等是北方地区冬季较有代表性的食俗。俗话说“三九补一冬，来年无病痛”，说的就是冬令食羊肉调养身体的做法。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.849609, 41.442726],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃菜饭</strong><br><img class="picture" src="图标\\1222冬至\\年糕.jpg" width="200px" height="150px" alt="" ><p>南京人逢小寒喜吃菜饭。菜饭的样式颇多，其中一种是将矮脚黄青菜同咸肉片、香肠片或是板鸭丁与糯米同煮，里面还会剁些生姜粒。这样煮出的菜饭，味道鲜香可口。热气腾腾吃下一碗，周身便暖了起来。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [118.850098, 32.082575],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">糯米饭</strong><br><img class="picture" src="图标\\0105小寒\\糯米饭.jpg" width="200px" height="150px" alt=""><p>在广东，则会在小寒的清晨吃糯米饭。当地人认为食用糯米可快速补充能量，有利于驱寒。传统的腊味糯米饭食材除糯米、腊肉、腊肠和花生外，还可添加香菇、虾米、叉烧等。“小寒吃羊肉，大寒吃萝卜。”</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [117.861328, 41.640078],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">吃羊肉</strong><br><img class="picture" src="图标\\0105小寒\\煮羊肉.jpg" width="200px" height="150px" alt=""><p>羊肉同样是小寒节气中常吃的食物。若是将羊肉与当归、山药、胡萝卜同煮，不仅可以增添暖意，还不易上火。围坐在燃着炭火的铜锅旁，一起热腾腾地涮羊肉，也是不错的选择。时光、故土、记忆、信念……种种与饮食的羁绊，为人们口中的食物，添上了更为深沉厚重的滋味。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.191406, 40.245992],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">腊八粥</strong><br><img class="picture" src="图标\\0105小寒\\腊八粥.jpg" width="200px" height="150px" alt="" ><p>小寒节气正值农历腊月，我国不少地方流行在腊月初八喝“腊八粥”。同是腊八粥，因地区不同，南北有异。北方的腊八粥有黄米、红米、白米、小米、栗子、红豆、枣泥等，也有的地方另加桃仁、杏仁、瓜子、花生、松子、葡萄干等用以点缀。而南方的腊八粥，则加入了莲子和桂圆。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [123.75, 47.15984],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">黄芽菜</strong><br><img class="picture" src="图标\\0105小寒\\黄芽菜.jpg" width="200px" height="150px" alt="" ><p>据《津门杂记》记载，旧时天津地区有小寒吃黄芽菜的习俗。黄芽菜是天津特产，它是用白菜芽制作而成。冬至后将白菜割去茎叶，只留菜心，离地6厘米左右，以粪肥覆盖，勿透气，半月后取食，脆嫩无比。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [117.333984, 39.095963],
          },
        },
      ],
    },
  });
  map.addSource("0105-03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">冰嬉 </strong><br><img class="picture" src="图标\\0105小寒\\冰嬉.png" width="200px" height="150px" alt=""><p>也叫“冰戏”。古代冰上活动的泛称。明清时期，冰嬉成为皇家冬季的体育、军事训练项目和游戏项目。比如故宫博物院所藏的清代乾隆时期著名画家金廷标所绘的《冰戏图》轴，描绘了活泼好动的孩童在结冰池塘边的嬉戏场景。冰嬉活动多在春节期间集中进行表演，如冰上舞龙、舞狮、跑旱船、滑冰、冰雕、冬泳等活动，受到广泛欢迎。在漫长的历史进程中，人们不仅学会了抵御冰雪的严寒，更学会了利用冰雪、观赏冰雪，在冰雪中找到乐趣。在我国北方各省，入冬后冰期十分长久。三九寒天，冰面特别厚的地区，大多设有供人玩耍的天然冰场。开展冰上运动是北方主要的室外活动，滑冰、溜冰、滑冰车等不一而足。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [124.628906, 44.087585],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">爆竹</strong><br><img class="picture" src="图标\\0105小寒\\爆竹.jpg" width="200px" height="150px" alt=""><p>燃放爆竹，最早是为了吓跑山神、保佑家庭平安和不受病魔侵害。现在社会上采取禁放爆竹等新的管理措施，以避免爆竹燃放过多而污染环境、引发火灾。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [108.105469, 38.891033],
          },
        },

        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">探梅</strong><br><img class="picture" src="图标\\0105小寒\\探梅.jpg" width="200px" height="150px" alt=""><p>此时腊梅已开，红梅含苞待放，选一处梅花盛开的绝佳风景地，细细赏玩，幽香萦鼻，神智也会为之清爽振奋。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [104.501953, 28.613459],
          },
        },
      ],
    },
  });
  map.addSource("0105-04", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">春联</strong><br><img class="picture" src="图标\\0105小寒\\春联.jpg" width="200px" height="150px" alt=""><p>是中国特有的文学形式，采取对仗、平仄等创作方法，用简明、精巧的文字语言，抒发美好、吉祥的愿望。每逢春节，家家户户都贴上一副大红的春联。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [110.302734, 38.959409],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">年画</strong><br><img class="picture" src="图标\\0105小寒\\年画.png" width="200px" height="150px" alt=""><p>中国早期的年画，与驱凶避邪、祈福迎祥的主题密切相关。民间年画的主角，从最早的桃符、苇索、金鸡、神虎，到神荼、郁垒，再到关羽、赵云、尉迟恭、秦叔宝等武将，以及钟馗、天师、东方朔等神仙，寄托了民间百姓祈求平安的美好愿望。当今的桃花坞木版画、杨柳青年画、潍坊年画、绵竹年画、朱仙镇木版年画、佛山年画等，画风古朴，各呈异彩，深受人们的喜爱。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [120.613655, 31.320883],
          },
        },
      ],
    },
  });

  map.addSource("0120-01", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">尾牙祭</strong><br><img class="picture" src="图标\\0120大寒\\尾牙祭.jpg" width="200px" height="150px" alt=""><p>尾牙源自于拜土地公做“牙”的习俗，在中国福建沿海、台湾等地仍保留着尾牙祭的传统。所谓农历二月二为“头牙”，以后每逢初二和十六都要做“牙”，到了农历十二月十六日正好是尾牙。尾牙与头牙一样，吃春饼（南方叫润饼），这一天生意人要设宴，白斩鸡为宴席上不可缺少的一道菜。据说鸡头朝谁，就表示老板明年要解雇谁。因此现在有些老板一般将鸡头朝向自己，以使员工们能放心地享用佳肴，回家后也能过个安稳年。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [118.564453, 25.324167],
          },
        },
      ],
    },
  });
  map.addSource("0120-02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">消寒糕</strong><br><img class="picture" src="图标\\0120大寒\\消寒糕.jpeg" width="200px" height="150px" alt="" ><p>是年糕的一种，其糯米比大米含糖量高，食用后全身感觉暖和，在寒冬季节有温散风寒、润肺健脾胃的功效，还有“年高”之意，带着吉祥如意、年年平安、步步高升的好彩头。在老北京的习俗中，大寒这天，一家人分吃年糕，既带着吉祥味，也能驱散身上寒意，所以称为“消寒糕”。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [116.411133, 39.97712],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">糯米饭</strong><br><img class="picture" src="图标\\0120大寒\\糯米饭.jpg" width="200px" height="150px" alt="" ><p>岭南民谚有云：“小寒大寒，无风自寒。”在传统节气中极冷的一天，广东民间形成吃糯米饭的习俗。如今在广东，常见这样的情景：大寒来临前，家家户户煮上一锅香喷喷的糯米饭，拌入腊味、虾米、干鱿鱼、冬菇等，以迎接传统节气中最冷的一天。糯米味甘、性温，食之具有御寒滋补功效。又因为大寒与立春相交接，讲究的人家在饮食上也顺应季节的变化。大寒进补的食物量逐渐减少，多添加些具有升散性质的食物，以适应春天万物的升发。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [110.039063, 21.534847],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">腊八粥 </strong><br><img class="picture" src="图标\\0120大寒\\腊八粥.jpg" width="200px" height="150px" alt=""><p>至今，每逢农历腊月初八，民间仍保留着吃腊八粥的风俗（有的地方是吃腊八饭）。进入腊月，天气虽然寒冷，但春天已近，不会像大雪到冬至期间那样酷寒。人们开始忙着除旧布新，置办年货，其间还有一个对北方人来说非常重要的日子，即农历腊月初八。腊八粥是这一天人们不可或缺的一道主食，用多种食材熬制而成，包括五谷杂粮和花生、栗子、红枣、莲子等。吃腊八粥的食俗，有说是古代蜡祭的遗存（《礼记·郊特牲》），含祝祷之意，也有驱寒祈福、庆祝丰收的用意。“腊八节”也是宗教节日。传说佛教的创始者释迦牟尼在腊月初八悟道成佛，因此佛教寺院每年都要予以纪念。《东京梦华录》记：“诸大寺作浴佛会，并送七宝五味粥与门徒，谓之腊八粥。都人是日各家亦以果子杂料煮粥而食也。又称佛粥。”有些信众认为，腊八供养佛陀的粥吉祥，于是年复一年，寺院做腊八粥的传统便广泛传播到民间。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [125.595703, 47.635784],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">炸春卷</strong><br><img class="picture" src="图标\\0120大寒\\炸春卷.jpg" width="200px" height="150px" alt=""<p>安徽安庆有大寒炸春卷的做法。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [117.103271, 30.535059],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong class="text">喝鸡汤</strong><br><img class="picture" src="图标\\0120大寒\\鸡汤.jpeg" width="200px" height="150px" alt="" ><p>南京有大寒炖鸡喝鸡汤的食俗。</p>',
          },
          geometry: {
            type: "Point",
            coordinates: [118.795166, 32.073266],
          },
        },
      ],
    },
  });

  map.addLayer({
    id: "0204-01",
    type: "symbol",
    source: "0204-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "visible",
    },
  });
  map.addLayer({
    id: "0204-02",
    type: "symbol",
    source: "0204-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "visible",
    },
  });
  map.addLayer({
    id: "0204-03",
    type: "symbol",
    source: "0204-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "visible",
    },
  });
  map.addLayer({
    id: "0204-04",
    type: "symbol",
    source: "0204-04",
    layout: {
      "icon-image": "艺术",
      "icon-size": 0.1,
      visibility: "visible",
    },
  });
  map.addLayer({
    id: "0204-05",
    type: "symbol",
    source: "0204-05",
    layout: {
      "icon-image": "茶文化",
      "icon-size": 0.1,
      visibility: "visible",
    },
  });
  map.addLayer({
    id: "0305-01",
    type: "symbol",
    source: "0305-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0305-02",
    type: "symbol",
    source: "0305-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0305-03",
    type: "symbol",
    source: "0305-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0305-05",
    type: "symbol",
    source: "0305-05",
    layout: {
      "icon-image": "茶文化",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0321-01",
    type: "symbol",
    source: "0321-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0321-02",
    type: "symbol",
    source: "0321-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0321-03",
    type: "symbol",
    source: "0321-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0321-04",
    type: "symbol",
    source: "0321-04",
    layout: {
      "icon-image": "艺术",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0321-05",
    type: "symbol",
    source: "0321-05",
    layout: {
      "icon-image": "茶文化",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0404-01",
    type: "symbol",
    source: "0404-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0404-02",
    type: "symbol",
    source: "0404-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0404-03",
    type: "symbol",
    source: "0404-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0404-04",
    type: "symbol",
    source: "0404-04",
    layout: {
      "icon-image": "艺术",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0404-05",
    type: "symbol",
    source: "0404-05",
    layout: {
      "icon-image": "茶文化",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  //0218雨水
  map.addLayer({
    id: "0218-03",
    type: "symbol",
    source: "0218-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0218-05",
    type: "symbol",
    source: "0218-05",
    layout: {
      "icon-image": "茶文化",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  //0420谷雨
  map.addLayer({
    id: "0420-01",
    type: "symbol",
    source: "0420-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0420-02",
    type: "symbol",
    source: "0420-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0420-03",
    type: "symbol",
    source: "0420-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0420-04",
    type: "symbol",
    source: "0420-04",
    layout: {
      "icon-image": "艺术",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0420-05",
    type: "symbol",
    source: "0420-05",
    layout: {
      "icon-image": "茶文化",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  //0505立夏
  map.addLayer({
    id: "0505-01",
    type: "symbol",
    source: "0505-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0505-02",
    type: "symbol",
    source: "0505-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0505-03",
    type: "symbol",
    source: "0505-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0505-05",
    type: "symbol",
    source: "0505-05",
    layout: {
      "icon-image": "茶文化",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  //0521小满
  map.addLayer({
    id: "0521-01",
    type: "symbol",
    source: "0521-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0521-02",
    type: "symbol",
    source: "0521-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  //0606芒种
  map.addLayer({
    id: "0606-01",
    type: "symbol",
    source: "0606-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0606-02",
    type: "symbol",
    source: "0606-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0606-03",
    type: "symbol",
    source: "0606-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  //0621夏至
  map.addLayer({
    id: "0621-01",
    type: "symbol",
    source: "0621-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0621-02",
    type: "symbol",
    source: "0621-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0621-03",
    type: "symbol",
    source: "0621-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  //0707小暑
  map.addLayer({
    id: "0707-01",
    type: "symbol",
    source: "0707-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0707-02",
    type: "symbol",
    source: "0707-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  //0722大暑
  map.addLayer({
    id: "0722-01",
    type: "symbol",
    source: "0722-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0722-02",
    type: "symbol",
    source: "0722-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0722-03",
    type: "symbol",
    source: "0722-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  //此处开始秋季部分

  /*0807立秋
 01祭祀：祭祀土地神
 02饮食：啃秋、贴秋膘
 03玩乐：晒秋
 */

  map.addLayer({
    id: "0807-01",
    type: "symbol",
    source: "0807-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0807-02",
    type: "symbol",
    source: "0807-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0807-03",
    type: "symbol",
    source: "0807-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  /*0823处暑
  01祭祀：祭祖，放河灯，开渔节，拜土地爷
  02饮食：吃鸭子
  04艺术：祝融神话
  */
  map.addLayer({
    id: "0823-01",
    type: "symbol",
    source: "0823-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0823-02",
    type: "symbol",
    source: "0823-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0823-04",
    type: "symbol",
    source: "0823-04",
    layout: {
      "icon-image": "艺术",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  /*0907白露
  01祭祀：祭禹王
  02饮食：十样白，白露酒，龙眼，番薯
  */
  map.addLayer({
    id: "0907-01",
    type: "symbol",
    source: "0907-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0907-02",
    type: "symbol",
    source: "0907-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  /*0923秋分
  01祭祀：秋祭月，拜神
  02饮食：吃秋菜，雀子嘴
  03玩乐：竖蛋，送秋牛
  */
  map.addLayer({
    id: "0923-01",
    type: "symbol",
    source: "0923-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0923-02",
    type: "symbol",
    source: "0923-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0923-03",
    type: "symbol",
    source: "0923-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  /*1008寒露
  02饮食：花糕，芝麻
  03玩乐：赏红叶，赏菊花，登高，钓虾，斗蟋蟀
  05茶文化：菊花茶
  */
  map.addLayer({
    id: "1008-02",
    type: "symbol",
    source: "1008-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "1008-03",
    type: "symbol",
    source: "1008-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "1008-05",
    type: "symbol",
    source: "1008-05",
    layout: {
      "icon-image": "茶文化",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  /*1023霜降
  01祭祀：送芋鬼，祭祖
  02饮食：柿子，进补，萝卜，鸭子，牛肉
  03玩乐：赏菊，登高
  */
  map.addLayer({
    id: "1023-01",
    type: "symbol",
    source: "1023-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "1023-02",
    type: "symbol",
    source: "1023-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "1023-03",
    type: "symbol",
    source: "1023-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "1107-01",
    type: "symbol",
    source: "1107-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "1107-02",
    type: "symbol",
    source: "1107-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "1107-03",
    type: "symbol",
    source: "1107-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  map.addLayer({
    id: "1107-05",
    type: "symbol",
    source: "1107-05",
    layout: {
      "icon-image": "茶文化",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  map.addLayer({
    id: "1122-02",
    type: "symbol",
    source: "1122-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  map.addLayer({
    id: "1207-02",
    type: "symbol",
    source: "1207-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "1207-03",
    type: "symbol",
    source: "1207-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  map.addLayer({
    id: "1222-01",
    type: "symbol",
    source: "1222-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "1222-02",
    type: "symbol",
    source: "1222-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "1222-03",
    type: "symbol",
    source: "1222-03",
    layout: {
      "icon-image": "娱乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  map.addLayer({
    id: "0105-01",
    type: "symbol",
    source: "0105-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0105-02",
    type: "symbol",
    source: "0105-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0105-03",
    type: "symbol",
    source: "0105-03",
    layout: {
      "icon-image": "玩乐",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0105-04",
    type: "symbol",
    source: "0105-04",
    layout: {
      "icon-image": "艺术",
      "icon-size": 0.1,
      visibility: "none",
    },
  });

  map.addLayer({
    id: "0120-01",
    type: "symbol",
    source: "0120-01",
    layout: {
      "icon-image": "祭祀",
      "icon-size": 0.1,
      visibility: "none",
    },
  });
  map.addLayer({
    id: "0120-02",
    type: "symbol",
    source: "0120-02",
    layout: {
      "icon-image": "饮食",
      "icon-size": 0.1,
      visibility: "visible",
    },
  });
}

const IconLayersIds = [
  "0204-01",
  "0204-02",
  "0204-03",
  "0204-04",
  "0204-05",
  "0218-03",
  "0218-05",
  "0305-01",
  "0305-02",
  "0305-03",
  "0305-05",
  "0321-01","0321-02",
  "0321-03",
  "0321-04",
  "0321-05",
  "0404-01",
  "0404-02",
  "0404-03",
  "0404-04",
  "0404-05",
  "0420-01",
  "0420-02",
  "0420-03",
  "0420-04",
  "0420-05",
  "0505-01","0505-02","0505-03","0505-05",
  "0521-01","0521-02",
  "0606-01","0606-02","0606-03","0621-01","0621-02","0621-03",
  "0707-01","0707-02","0722-01","0722-02","0722-03",
  "0807-01","0807-02","0807-03",
  "0823-01","0823-02","0823-04",
  "0907-01","0907-02",
  "0923-01","0923-02","0923-03",
  "1008-02","1008-03","1008-05",
  "1023-01","1023-02","1023-03",
  "1107-01","1107-02","1107-03","1107-05",
  "1122-02",
  "1207-02","1207-03",
  "1222-01","1222-02","1222-03",
  "0105-01","0105-02","0105-03","0105-04",
  "0120-01","0120-02",
];

function IconHide() {
  for (const id of IconLayersIds) {
    map.setLayoutProperty(id, "visibility", "none");
  }
}

for (const id of IconLayersIds) {
  map.on("click", id, (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup().setLngLat(coordinates).setHTML(description).addTo(map);
  });

  map.on("mouseenter", id, () => {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", id, () => {
    map.getCanvas().style.cursor = "";
  });
}
