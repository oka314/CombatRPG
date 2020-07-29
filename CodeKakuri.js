/*
  敵の情報
*/
const ENEMIS_DATA = [

  //適正レベル10まで
  {name: "スライム",  hp:10, attack:2, deffence:1},
  {name: "オオカミ",  hp:50, attack:4, deffence:3},
  {name: "コウモリ",  hp:80, attack:3, deffence:3},

  //適齢レベル10~20
  {name: "デモン", hp:120,attack:15,deffence:8},
  {name: "ナイト", hp:160,attack:20,deffence:10},
  {name: "バード", hp:200,attack:25,deffence:15},

  //適正レベル20~30
  {name: "フォルラン", hp:250,attack:30,deffence:25},
  {name: "スピピピン", hp:290,attack:37,deffence:29},
  {name: "リフィップ", hp:300,attack:40,deffence:32},

  //適正レベル30~40
  {name: "ナルキソン", hp:380,attack:43,deffence:35},
  {name: "トルンキー", hp:400,attack:46,deffence:36},
  {name: "ピピンピー", hp:420,attack:45,deffence:38},

  //適正レベル40~50
  {name: "ジャッン", hp:1000,attack:54,deffence:20},
  {name: "フィスン", hp:480, attack:58,deffence:40},
  {name: "セミウス", hp:500, attack:60,deffence:48},

  //適正レベル50~60
  {name: "ファラム", hp:600,attack:68,deffence:50},
  {name: "セビィン", hp:690,attack:75,deffence:55},
  {name: "セビィン", hp:700,attack:72,deffence:60},

  //ラスボス Lv60になったら出現する
  {name: "ラーン＝デゴス",hp:1000,attack:90,deffence:80},
];
ENEMIS_DATA["maxHp"] = ENEMIS_DATA["hp"];
ENEMIS_DATA["Exp"] = ENEMIS_DATA["attack"];



/**
 プレイヤーの情報
 */

//プレイヤーのデーター
const PLAYER_DATA = {
  name: "プレイヤー",
  lv:1,
  Exp:0,
  recovery:5,
  gold:10,
  hp:50,
  attack:5,
  deffence:2
}

PLAYER_DATA["maxHp"] = PLAYER_DATA["hp"];



//プレイヤーのステータス表示
function playerStatus()
{
  insertText('playerName',PLAYER_DATA["name"]);
  insertText('currentPlayerHp',PLAYER_DATA["hp"]);
  insertText('maxPlayerHp',PLAYER_DATA["hp"]);
  insertText('playerLv',"Lv:"+PLAYER_DATA["lv"]);
  insertText('playerExp',"Exp:"+PLAYER_DATA["Exp"]);
  insertText('gold',"所持金:"+PLAYER_DATA["gold"]);
  insertText('recovery',"回復アイテム:"+PLAYER_DATA["recovery"]);
  insertText('attackPoint',"攻撃力:"+PLAYER_DATA["attack"]);
  insertText('deffensPoint',"防御力:"+PLAYER_DATA["deffence"]);
  
}


/**
 * 
 * 敵が出現するときの関数
 * 
 */


function appearEnemey()
{
 //プレイヤーレベルに合わせた敵の出現
 if(PLAYER_DATA["lv"] <= 10)
 { //敵の出現をランダム適正Lv10まで
   ENEMY_DATA = ENEMIS_DATA[Math.floor(Math.random()*3)];
   ENEMY_DATA["maxHp"] = ENEMY_DATA["hp"];
   battle = true;

   insertText('enemyName',ENEMY_DATA["name"]);
   insertText('currentEnemyHp',ENEMY_DATA["hp"]);
   insertText('maxEnemyHp',ENEMY_DATA["hp"]);
 
 }else if(PLAYER_DATA["lv"] >=10 && PLAYER_DATA["lv"] <= 20 ){
 
   ENEMY_DATA = ENEMIS_DATA[Math.floor(Math.random()*3)+4];
   ENEMY_DATA["maxHp"] = ENEMY_DATA["hp"];
   battle = true;

   insertText('enemyName',ENEMY_DATA["name"]);
   insertText('currentEnemyHp',ENEMY_DATA["hp"]);
   insertText('maxEnemyHp',ENEMY_DATA["hp"]);
 
 }else if(PLAYER_DATA["lv"] >=20 && PLAYER_DATA["lv"] <= 30 ){
   ENEMY_DATA = ENEMIS_DATA[Math.floor(Math.random()*3)+7];
   ENEMY_DATA["maxHp"] = ENEMY_DATA["hp"];
   battle = true;

   insertText('enemyName',ENEMY_DATA["name"]);
   insertText('currentEnemyHp',ENEMY_DATA["hp"]);
   insertText('maxEnemyHp',ENEMY_DATA["hp"]);
 
 }else if(PLAYER_DATA["lv"] >=30 && PLAYER_DATA["lv"] <= 40 ){
   ENEMY_DATA = ENEMIS_DATA[Math.floor(Math.random()*3)+10];
   ENEMY_DATA["maxHp"] = ENEMY_DATA["hp"];
   battle = true;

   insertText('enemyName',ENEMY_DATA["name"]);
   insertText('currentEnemyHp',ENEMY_DATA["hp"]);
   insertText('maxEnemyHp',ENEMY_DATA["hp"]);
 
 }else if(PLAYER_DATA["lv"] >=40 && PLAYER_DATA["lv"] <= 50 ){
   ENEMY_DATA = ENEMIS_DATA[Math.floor(Math.random()*3)+13];
   ENEMY_DATA["maxHp"] = ENEMY_DATA["hp"];
   battle = true;
   insertText('enemyName',ENEMY_DATA["name"]);
   insertText('currentEnemyHp',ENEMY_DATA["hp"]);
   insertText('maxEnemyHp',ENEMY_DATA["hp"]);
 
 }else if(PLAYER_DATA["lv"] >=50  && PLAYER_DATA["lv"] < 60){
   ENEMY_DATA = ENEMIS_DATA[Math.floor(Math.random()*3)+10];
   ENEMY_DATA["maxHp"] = ENEMY_DATA["hp"];
   battle = true;

   insertText('enemyName',ENEMY_DATA["name"]);
   insertText('currentEnemyHp',ENEMY_DATA["hp"]);
   insertText('maxEnemyHp',ENEMY_DATA["hp"]);
 
 } else {
   ENEMY_DATA = ENEMIS_DATA[18];
   battle = true;

   insertText('enemyName',ENEMY_DATA["name"]);
   insertText('currentEnemyHp',ENEMY_DATA["hp"]);
   insertText('maxEnemyHp',ENEMY_DATA["hp"]);

 };

}


/*



戦闘関連をまとめたページ
 




*/
 
 
 //攻撃の幅を持たせるための定数
 const DAMAGE_RANGE = 0.2;

 
 //プレイヤーと敵のステータス画面の関数化
 function insertText(id,text)
 {
  document.getElementById(id).textContent = text;
 };

  //ダメージを計算するための関数
  function damageCalculation(attack,deffence)
  { 
    
    const MAX_DAMAGE    = attack * (1 + DAMAGE_RANGE);//最大ダメージ
    const MIN_DAMAGE    = attack * (1 - DAMAGE_RANGE);//最小ダメージ
    const ATTACK_DAMAGE = Math.floor(Math.random() * (MAX_DAMAGE - MIN_DAMAGE)+MIN_DAMAGE);
    /*
    ランダム関数の説明
    Math.floor(Math.random() * 5)+2;
    の時は2~6になる 2が最小値で5(0~4)が最大値になる。
    そこに、2を足すので、2,3,4,5,6になる
    */
 
   //攻撃力と防御力を計算して実際のダメージ力を計算する
   const DAMAGE = ATTACK_DAMAGE - deffence;
 
   if(DAMAGE  < 1)
   {
     return 0;
   }else{
     return DAMAGE;
   }
  };

  
/**
 * 
 * 
 * メインの処理をするコード等
 * 
 */

let battle ;

//攻撃するのID取得の定数
const ATTACKELE = document.getElementById('attack')

//冒険するのID取得の定数
const ADDVENT   = document.getElementById('adventure');



let ENEMY_DATA;

//プレイヤーのステータス
playerStatus();




//クリックイベント(冒険)
ADDVENT.addEventListener("click",function()
{

  Victory = false;
  battle = true;
  console.log(Victory);
  
  appearEnemey();
 //敵と遭遇すると攻撃ボタンを押せるようにする
 
  ATTACKELE.classList.remove('deactive')
  //クリックイベント(戦闘)
  ATTACKELE.addEventListener("click",function buttleCommand(){
    //ゲームの管理変数
    let endGame = false;
    let Victory = false;

    const PLAYER_DAMAGE = damageCalculation(PLAYER_DATA["attack"],ENEMY_DATA["deffence"]);
    const ENEMY_DAMAGE = damageCalculation(ENEMY_DATA["attack"],PLAYER_DATA["deffence"]);

    //ダメージ計算
    ENEMY_DATA["hp"] -= PLAYER_DAMAGE;
    PLAYER_DATA["hp"]-= ENEMY_DAMAGE;


    //計算された敵のプレイヤーのHP状態を描画更新している
    insertText('currentEnemyHp',ENEMY_DATA["hp"]);
    insertText('currentPlayerHp',PLAYER_DATA["hp"]);



    //それぞれのHPバーに適応するIDを取得する
    const ENEMY_HP_GAUGE = document.getElementById('currentEnemyHpGaugeValue')
    const PLAYER_HP_GAUGE = document.getElementById('currentPlayerHpGaugeValue')

    //攻撃を受けた時のバーの減りを計算している
    ENEMY_HP_GAUGE.style.width = (ENEMY_DATA["hp"]/ENEMY_DATA["maxHp"])*100+"%";
    PLAYER_HP_GAUGE.style.width = (PLAYER_DATA["hp"]/PLAYER_DATA["maxHp"])*100+"%";

    // const ENEMY_HP  = ENEMY_HP_GAUGE.style.width
    // const PLAYER_HP = PLAYER_HP_GAUGE.style.width





    //もし敵のHPが0以下になったら
    if(ENEMY_DATA["hp"] <= 0)
    {
      Victory = true;
      ENEMY_HP_GAUGE.style.width = "0%";
      PLAYER_DATA['Exp'] += ENEMY_DATA['attack'];
      // PLAYER_HP_GAUGE.style.width = "100%";
      // EnemyAddClass('PlayerVictory');
      // PlayerAddClass('EnemyLoser'/*,'EnemyLoserText'*/);



      //プレイヤーのHPの残量でメッセージを変える
      if(PLAYER_HP_GAUGE.style.width >= "80%" )
      {
        alert('余裕でした！')
      }else if (PLAYER_HP_GAUGE.style.width >= '50%')
      {
        alert('圧勝でしたね！')
      } else if(PLAYER_HP_GAUGE.style.width >= '20%')
      {
        alert('少し厳しいですね')
      } else{
        alert('ギリギリでした。')
      };

      ENEMY_DATA["hp"] = 0;
      insertText('currentEnemyHp',ENEMY_DATA["hp"]);


    //もしプレイヤーのHPが0以下になったら
    }else if(PLAYER_DATA["hp"] <= 0)
    {
      alert("敗北");
      endGame = true;

      PLAYER_DATA["hp"] = 0;
      insertText('currentPlayerHp',PLAYER_DATA["hp"]);
      PLAYER_HP_GAUGE.style.width ="0%";


    };

    //ゲーム管理変数がtrueになったら deactiveクラスを追加する
    if(endGame)
    {
      ATTACKELE.classList.add('deactive');
      ADDVENT.classList.add('deactive');
    }

    if(Victory)
    {
      ENEMY_HP_GAUGE.style.width = "100%";

    }

  });
 });







//あとで実装する。


    // //HP残量に伴い、HPバーの色を変更する際にクラス追加するための関数
    // function EnemyAddClass(EnemyClass)
    // {
    //   ENEMY_HP_GAUGE.classList.add(EnemyClass);

    // };

    // //HP残量に伴い、HPバーの色を変更する際にクラス追加するための関数
    // function PlayerAddClass(PlayerClass)
    // {
    //   PLAYER_HP_GAUGE.classList.add(PlayerClass);

    // };


      // //敵のHPのHPバーの残量で色を変える
      // if(ENEMY_HP >= '90%' )
      // {
      //   EnemyAddClass('EnemyGauge1');
      //   console.log(1);
      // }else if(ENEMY_HP >= '30%' )
      // { 
      //   EnemyAddClass('EnemyGauge2');
      //   console.log(2);
      // }else if (ENEMY_HP >= '10%')
      // { 
      //   EnemyAddClass('EnemyGauge3');
      //   console.log(3);
      // };

      // console.log(PLAYER_HP);

      // //プレイヤーのHPのHPバーの残量で色を変える
      // //90%以上50%未満
      // if(PLAYER_HP == '100%')
      // {
      //   PlayerAddClass('PlayerGauge1');
      // } else if(PLAYER_HP >= '90%' || PLAYER_HP < '50%')
      // {
      //   PlayerAddClass('PlayerGauge1');
      //   console.log(4);

      //   //50%以上20%未満の時に体力ゲージが黄色になる
      // }else if(PLAYER_HP >= '50%' || PLAYER_HP < '20%' )//80%以上50%未満だったらtrue
      // { 
      //   PlayerAddClass('PlayerGauge2');
      //   console.log(5);

      // }else {
      //   PlayerAddClass('PlayerGauge3');
      //   console.log(6);
      // };
      // if(PLAYER_HP >= '80%')
      // {
      //   PlayerAddClass('PlayerGauge1');
      //   console.log(4);

      //   //50%以上20%未満の時に体力ゲージが黄色になる
      // }else if(PLAYER_HP >= '50%')//80%以上50%未満だったらtrue
      // { 
      //   PlayerAddClass('PlayerGauge2');
      //   console.log(5);

      // }else if(PLAYER_HP >= '10%') {
      //   PlayerAddClass('PlayerGauge3');
      //   console.log(6);
      // };
