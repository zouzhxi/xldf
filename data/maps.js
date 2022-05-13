﻿var markers = [
    { position: [113.915393, 22.486754], title: '旗舰店', type: '梦工厂', tel: '18118790666', online: true,Pos:1035, address: '广东省深圳市南山区招商街道振兴大厦B座(工业三路)小荔饺子梦工场' },
    { position: [113.921846, 22.490016], title: '招商店', type: '生活馆', tel: '18126208763', online:true,Pos:1003, address: '广东省深圳市南山区蛇口街道招商路185-1' },
    { position: [113.906764, 22.51154], title: '前海店', type: '生活馆', tel: '18123621530', online:true, address: '广东省深圳市南山区南山街道山水情家园' },
    { position: [113.925851, 22.520431], title: '南光店', type: '生活馆', tel: '15338744226', online:false, address: '广东省深圳市南山区南山区南山街道南光社区海德二道392-1号' },
    { position: [113.905529, 22.535599], title: '龙海家园店', type: '生活馆', tel: '18165751283', online: true, address: '广东省深圳市南山区南头街道龙海家园龙海商业广场' },
    { position: [113.922536, 22.517725], title: '亿利达店', type: '生活馆', tel: '18118750317', online:true, address: '广东省深圳市南山区南山街道创业路3117号亿利达大厦' },
    { position: [113.924974, 22.485158], title: '南海玫瑰园店', type: '生活馆', tel: '18123706925', online: true, address: '广东省深圳市南山区蛇口街道南海玫瑰花园一期' },
    { position: [113.904054, 22.572883], title: '中洲花园店', type: '生活馆', tel: '18118768915', online:true, address: '广东省深圳市宝安区新安街道创北三巷中洲·中央公园' }, //中洲花园店
    { position: [113.934759, 22.499335], title: '半岛花园店', type: '生活馆', tel: '17722533090', online: true, address: '广东省深圳市南山区海月路11附近' },
    { position: [114.094361, 22.542626], title: '玮鹏店', type: '生活馆', tel: '18028765192', online:true, address: '广东省深圳市福田区华强北街道振中路41号玮鹏花园' }, //玮鹏店
    { position: [113.854153, 22.567844], title: '富通城店', type: '生活馆', tel: '17727959342', online: true, address: '广东省深圳市宝安区西乡街道碧海富通城(五期)碧海富通城5期' },
    { position: [114.030576, 22.631074], title: '金地梅陇店', type: '生活馆', tel: '13316958207', online: true, address: '广东省深圳市龙华区民治街道金地梅陇镇' }, //金地梅陇店
    { position: [114.055368, 22.599107], title: '民乐店', type: '生活馆', tel: '18018742305', online: true, address: '广东省深圳市龙华区民治街道非常公寓民乐花园' }, //民乐店
    { position: [114.101722, 22.552471], title: '园东花园店', type: '生活馆', tel: '18123835449', online:true, address: '广东省深圳市福田区园岭街道园东花园天阶1号' }, //园东花园
    { position: [114.008981, 22.6394], title: '曼海宁店', type: '生活馆', tel: '15361047487', online: true, address: '广东省深圳市龙华区和平路潜龙曼海宁花园(南区)2栋115号' }, //曼海宁店
    { position: [113.914001, 22.513409], title: '阳光科创店', type: '生活馆', tel: '19925379209', online:true, address: '广东省深圳市南山区南新路阳光科创中心二期110号' },
    { position: [114.140252, 22.549064], title: '深业东岭店', type: '生活馆', tel: '18002576151', online: true, address: '广东省深圳市罗湖区黄贝街道深南东路1002号深业东岭2栋1层113号商铺' }, //深业东岭
    { position: [114.044083, 22.5222], title: '新洲店', type: '生活馆', tel: '13342997373', online:true, address: '广东省深圳市福田区新洲三街52号' },
    { position: [114.171298, 22.561435], title: '莲塘店', type: '生活馆', tel: '18002541989', online: true, address: '广东省深圳市罗湖区莲塘街道莲塘路聚福花园(莲塘路)' },
    { position: [113.949686, 22.567861], title: '冠铭雅苑店', type: '生活馆', tel: '19926694290', online:true, address: '广东省深圳市南山区沙河西路与茶光路交汇处西南侧冠铭雅苑一期E007' }, //冠铭雅苑店
    { position: [113.85544, 22.611089], title: '领航城店', type: '生活馆', tel: '19129501839', online: true, address: '广东省深圳市宝安区航城街道宝东路领航城领秀花园' },
    { position: [114.141022, 22.611766], title: '桂芳园店', type: '生活馆', tel: '13392832372', online: true, address: '广东省深圳市龙岗区南湾街道中翠路68号东大街佳纷天地' },
    { position: [113.928489, 22.542787], title: '缤纷年华店', type: '生活馆', tel: '13302464056', online: true, address: '广东省深圳市南山区南头街道缤纷年华缤纷商业中心' },
    { position: [113.882146, 22.562148], title: '金成时代店', type: '生活馆', tel: '18123658743', online:true, address: '广东省深圳市宝安区新安街道金成时代金成时代家园' },
    { position: [114.106386, 22.552594], title: '松园店', type: '生活馆', tel: '18124503826', online: true, address: '广东省深圳市罗湖区桂园街道怡正发大厦' }, //松园店
    { position: [114.261057, 22.585717], title: '山海城店', type: '生活馆', tel: '18938942881', online: true, address: '盐田街道佳兆业山海城家园（一期）1栋119-120小荔饺子生活馆' }, //山海城店
    { position: [113.995087, 22.589683], title: '宝能城店', type: '生活馆', tel: '18902432291', online:true, address: '广东省深圳市南山区桃源街道宝能城西区2栋38号商铺' }, //宝能城店
    { position: [113.927726, 22.547821], title: '汇金家园店', type: '生活馆', tel: '18028740497', online: true, address: '广东省深圳市南山区艺园路109号' },

    { position: [113.949065, 22.52486], title: '滨福世纪广场店', type: '会员店', tel: '18138449581', online: true, address: '广东省深圳市南山区粤海街道高新南社区健康服务中心滨福世纪广场' },
    { position: [113.933333, 22.512076], title: '育德佳园店', type: '会员店', tel: '18129976391', online: true, address: '广东省深圳市南山区粤海街道育德佳园1栋13号铺小荔饺子会员店' },
    { position: [114.229916, 22.549842], title: '副食大厦店/沙盐路店', type: '会员店', tel: '19928785416', online: true, address: '沙头角街道桥东社区沙盐路3135号副食品公司大楼沙盐路3127号小荔饺子会员店' }, //沙盐路店/副食大厦店
    { position: [113.889552, 22.558124], title: '富通城好旺角店', type: '会员店', tel: '18902478341', online:true, address: '广东省深圳市宝安区新安街道海围一街富通好旺角2期小荔饺子会员店' },
    { position: [114.008303, 22.548923], title: '天健公馆店', type: '会员店', tel: '13352946054', online: true, address: '广东省深圳市福田区香蜜湖街道侨香四道天健公馆小荔饺子会员店' }, //天健公馆店
    { position: [114.041919, 22.599546], title: '玖龙玺店', type: '会员店', tel: '18124131479', online: true, address: '广东省深圳市龙华区民治街道赤公坑路龙光·玖龙玺小荔饺子会员店' }, //玖龙玺店
    { position: [114.131616, 22.571282], title: '太安路店/新港鸿豪苑店', type: '会员店', tel: '18124146834', online: true, address: '广东省深圳市罗湖区翠竹街道太安路新港鸿花园' }, //新港鸿豪苑店//大安路店
    { position: [114.064033, 22.571318], title: '两岸大厦店/凯丰路店', type: '会员店', tel: '19924581521', online: true, address: '广东省深圳市福田区梅林街道银海苑两岸大楼小荔饺子会员店'}, //凯丰路店//两岸大厦店
    { position: [114.107073, 22.534686], title: '鹿丹村店', type: '会员店', tel: '17722699244', online: true, address: '广东省深圳市罗湖区桂园街道滨河大道1005号中海鹿丹名苑小荔饺子会员店' }, //鹿丹村店
    { position: [113.832238, 22.642887], title: '星航华府店', type: '会员店', tel: '17727888641', online: true, address: '深圳宝安机场东面星航华府三期1C13-1C14号铺小荔饺子会员店' },
    { position: [114.032604, 22.557563], title: '七街公馆店/哈尔滨大厦店', type: '会员店', tel: '18923436147', online:true, address: '广东省深圳市福田区莲花街道哈尔滨大厦七街公馆' }, //哈尔滨大厦店//七街公馆店
    { position: [113.970854, 22.691023], title: '汇邦名都店', type: '会员店', tel: '18124170449', online: true, address: '广东省深圳市宝安区石岩街道民瑞路汇邦名都花园西区1F层1019号商铺小荔饺子会员店' },
    { position: [114.031027, 22.654287], title: '丹凤雅苑店', type: '会员店', tel: '17796366471', online: true, address: '广东省深圳市龙华区龙华街道丹枫雅苑111号铺小荔饺子会员店' },	 //丹凤雅苑店
    { position: [113.933467, 22.744792], title: '玖龙台店', type: '会员店', tel: '18924652543', online: true, address: '广东省深圳市光明区凤凰街道光源六路龙光·玖龙台一期2栋1-075号小荔饺子会员店' }, //玖龙台店
    { position: [113.929194, 22.736889], title: '光明1号店', type: '会员店', tel: '17796365847', online: true, address: '凤凰街道塘家社区盛迪嘉光明壹号花园8号楼半地下层68号小荔饺子会员店' }, //光明1号店
    { position: [113.960051, 22.570623], title: '珠光店', type: '会员店', tel: '', online: true, address: '深圳市南山区桃源街道龙联社区珠光路239号所在楼栋华润万家1层小荔饺子会员店' }, //珠光店
    { position: [113.945715, 22.674727], title: '羊台苑店', type: '会员店', tel: '18194028645', online: true, address: '深圳市宝安区羊台苑一期一8B号小荔饺子会员店' },
    { position: [114.04906, 22.508367], title: '桂花苑店', type: '会员店', tel: '18194056824', online:true, address: '广东省深圳市福田区福保街道红花路86号福保桂花苑' },
    { position: [114.076522, 22.659995], title: '中央广场店/佳兆业店', type: '会员店', tel: '', online: true, address: '广东省深圳市龙岗区坂田街道新爱婴早教中心佳兆业·中央广场2期' },
    { position: [114.245633, 22.712852], title: '万科天誉店', type: '会员店', tel: '18194058461', online: true, address: '深圳市龙岗区龙岗街道万科天誉花园2期8栋147号小荔饺子会员店' },
    { position: [114.262513, 22.683584], title: '金地名峰店', type: '会员店', tel: '18194056854', online: true, address: '深圳市龙岗区金地名峰花园8栋A022小荔饺子会员店' }, //金地名峰店
    { position: [114.305983, 22.600746], title: '大梅沙店', type: '会员店', tel: '18194005455', online: true, address: '深圳市盐田区梅沙街道东海岸社区艺海路1号云顶天海2号楼艺海路5号小荔饺子会员店' }, //大梅沙店
    { position: [114.124912, 22.593154], title: '锦绣园店', type: '会员店', tel: '18194054807', online: true, address: '深圳市龙岗区信义假日名城锦绣圆B栋商铺S108小荔饺子会员店' }, //锦绣园店	
    , { position: [114.083392,22.632174], title: "上品雅园店", type: '会员店2', tel: "18128848923", online: true, address: "深圳市龙岗区坂田街道上品雅园4栋商铺5" }
    , { position: [114.022628,22.62665], title: "中航天逸店", type: '会员店2', tel: "18148531570", online: true, address: "龙华区区民治街道中航天逸花园B栋1052" }
    , { position: [114.144769, 22.585262], title: "湖景花园店", type: '会员店2', tel: "18148531517", online: true, address: "罗湖区东湖街道翠荫路276号淘金山湖景花园大门左边首铺" }
    , { position: [113.84891, 22.603215], title: "香格丽湾店/万象新天店", type: '会员店2', tel: "19166215144", online: true, address: "宝安区西乡街道航城大道南侧香格丽湾园6栋34号" }
    , { position: [113.98271,22.560003], title: "俊峰丽舍店", type: '会员店2', tel: "18165747586", online: true, address: "南山区龙珠大道与龙珠七路交汇处俊峰丽舍花园3栋102" }
    , { position: [113.863042, 22.614769], title: "桃源居店", type: '会员店2', tel: "19166215034", online: true, address: "宝安桃源居东11区37号" }
    , { position: [113.914659, 22.721819], title: "正大城店", type: '会员店2', tel: "19166218634", online: true, address: "光明区正大城勤诚达" }
    , { position: [114.031938,22.646873], title: "壹城中心店", type: '会员店2', tel: "19128453765", online: true, address: "龙华区东环一路旁壹城中心一期3栋113号" }

    , { position: [113.998871,22.54695], title: "深康店", type: '会员店2', tel: "19129353275", online: true, address: "深圳市福田区深康村2栋C座一楼109-4号" }
    , { position: [114.251038,22.711384], title: '金地龙城店/龙城中央店', type: '会员店2', tel: '17722596508', online: true, address: '深圳市龙岗区龙岗街道金地凯旋广场1栋D单元130' }
    , { position: [114.067098, 22.64574], title: '万科城店', type: '会员店2', tel: '19129356518', online: true, address: '深圳市龙岗雪岗工业区万科城一期C1商铺D106' }
    , { position: [114.070806, 22.613606], title: '第五园店', type: '会员店2', tel: '19129355837', online: true, address: '深圳市龙岗区坂田街道万科第五园12栋首层南点北味旁'}//
    
, { position: [114.059876, 22.624434], title: '四季花城店', type: '会员店2.0', tel: '17722660527', online: true, address: '深圳市龙岗区坂田街道万科四季花城杜鹃苑B09' }
,{ position: [113.927102,22.521322], title: '鸿瑞花园店', type: '会员店2.0', tel: '',online:true,address: '' }

    //,{ position: [113.832243, 22.642879], title: '。', type: '', tel: '',online:true,address: '' }
];
