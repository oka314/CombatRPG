//別のファイルで定義しなおす。
let ENEMIS_DATA = [

  //適正レベル10まで
  {name: "スライム",  hp:10, attack:4, deffence:1,exp:2,gold:2},
  {name: "オオカミ",  hp:20, attack:5, deffence:3,exp:7,gold:4},
  {name: "コウモリ",  hp:25, attack:5, deffence:3,exp:6,gold:6},

  //適齢レベル10~20
  {name: "デモン", hp:120,attack:15,deffence:8,exp:25,gold:10},
  {name: "ナイト", hp:160,attack:20,deffence:10,exp:30,gold:13},
  {name: "バード", hp:200,attack:25,deffence:15,exp:35,gold:18},

  //適正レベル20~30
  {name: "フォルラン", hp:250,attack:30,deffence:25,exp:50,gold:21},
  {name: "スピピピン", hp:290,attack:37,deffence:29,exp:45,gold:24},
  {name: "リフィップ", hp:300,attack:40,deffence:32,exp:48,gold:27},

  //適正レベル30~40
  {name: "ナルキソン", hp:380,attack:43,deffence:35,exp:64,gold:36},
  {name: "トルンキー", hp:400,attack:46,deffence:36,exp:68,gold:39},
  {name: "ピピンピー", hp:420,attack:45,deffence:38,exp:65,gold:43},

  //適正レベル40~50
  {name: "ジャッン", hp:1000,attack:54,deffence:42,exp:76,gold:59},
  {name: "フィスン", hp:480, attack:58,deffence:45,exp:73,gold:60},
  {name: "セミウス", hp:500, attack:60,deffence:48,exp:75,gold:65},

  //適正レベル50~60
  {name: "ファラム", hp:600,attack:68,deffence:50,exp:80,gold:70},
  {name: "セビィン", hp:690,attack:75,deffence:55,exp:79,gold:80},
  {name: "セビィン", hp:700,attack:72,deffence:60,exp:90,gold:89},

  //ラスボス Lv60になったら出現する
  {name: "ラーン＝デゴス",hp:1000,attack:90,deffence:80,exp:0,gold:0},
];


//最大HPを追加するためにfor文で回す
for( let i = 0; i < ENEMIS_DATA.length; i++)
{
  ENEMIS_DATA[i]['maxhp'] = ENEMIS_DATA[i]['hp'];
};



//敵出現のランダム関数
function EnemyRandom(num)
{
  return ENEMY_DATA = ENEMIS_DATA[Math.floor(Math.random()*3)+num];
};

//敵のステータス表示
function enemyStatus(){
  textDisplay('enemyName',ENEMY_DATA['name']);
  textDisplay('currentEnemyHp',ENEMY_DATA['hp']);
  textDisplay('maxEnemyHp',ENEMY_DATA['maxhp']);

};

function hpGaugeRecovery()
{
  ENEMY_HP_GAUGE.style.width = '100%'
}

function appearEnemey()
{   
   //プレイヤーレベルに合わせた敵の出現
   if(PLAYER_DATA["lv"] <= 10)
  { 
    //敵の出現をランダムで
    EnemyRandom(0);
    //敵のHPとHPバーを初期化
     ENEMY_DATA["hp"] = ENEMY_DATA['maxhp'];
     hpGaugeRecovery()
    //敵の出現
    addHpGageBar();
    //敵のステータス表示
    enemyStatus();

  }else if(PLAYER_DATA["lv"] >=10 && PLAYER_DATA["lv"] <= 20 ){
    EnemyRandom(3);
    ENEMY_DATA["hp"] = ENEMY_DATA['maxhp'];
    hpGaugeRecovery()
    addHpGageBar();
    enemyStatus();

  }else if(PLAYER_DATA["lv"] >=20 && PLAYER_DATA["lv"] <= 30 ){
    EnemyRandom(6);
    ENEMY_DATA["hp"] = ENEMY_DATA['maxhp'];
    hpGaugeRecovery()
    addHpGageBar();
    enemyStatus();

  }else if(PLAYER_DATA["lv"] >=30 && PLAYER_DATA["lv"] <= 40 ){
    EnemyRandom(9);
    ENEMY_DATA["hp"] = ENEMY_DATA['maxhp'];
    hpGaugeRecovery()
    addHpGageBar();
    enemyStatus();

  }else if(PLAYER_DATA["lv"] >=40 && PLAYER_DATA["lv"] <= 50 ){
    EnemyRandom(12);
    ENEMY_DATA["hp"] = ENEMY_DATA['maxhp'];
    hpGaugeRecovery()
    addHpGageBar();
    enemyStatus(); 

  }else if(PLAYER_DATA["lv"] >=50  && PLAYER_DATA["lv"] < 60){
    EnemyRandom(15);
    ENEMY_DATA["hp"] = ENEMY_DATA['maxhp'];
    hpGaugeRecovery()
    addHpGageBar();
    enemyStatus();
  } else {
    ENEMY_DATA = ENEMIS_DATA[18];
    ENEMY_DATA["hp"] = ENEMY_DATA['maxhp'];
    hpGaugeRecovery()
    addHpGageBar();
    enemyStatus();

  };

}



