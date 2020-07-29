//プレイヤーの初期ステータス
let PLAYER_DATA = 
  {
    name:"勇者",
    lv:1,
    exp:0,
    gold:10,
    hp:35,
    attack:5,
    deffence:3,
  };

//プレイヤーの最大HPを追加する。
PLAYER_DATA["maxhp"] = PLAYER_DATA["hp"];




//プレイヤーのステータス表示
function playerStatus(){
  textDisplay('playerName',PLAYER_DATA['name']);
  textDisplay('currentPlayerHp',PLAYER_DATA['hp']);
  textDisplay('maxPlayerHp',PLAYER_DATA['maxhp']);
  textDisplay('playerLv',"Lv:"+PLAYER_DATA['lv']);
  textDisplay('playerExp',"Exp:"+PLAYER_DATA['exp']);
  textDisplay('gold',"所持金:"+PLAYER_DATA['gold']);
  textDisplay('attackPoint',"攻撃力"+PLAYER_DATA['attack']);
  textDisplay('deffensPoint',"防御力"+PLAYER_DATA['deffence']);

};


//レベルアップ処理
function lvUp()
{
  //1Lvごとに必要な経験値
  let needExp =PLAYER_DATA['lv'] * 10 ;

  if(needExp <= PLAYER_DATA['exp'])
  { 
    PLAYER_DATA['lv']++;

    let maxhpUp    = 3;
    let attackUp   = 1;
    let deffenceUp = 1;

    //今後の課題として、連想配列をループ処理して、代入させる
    //今わからないのは、for文のように変数の値を変えて好きなインデックス番号で処理を開始する事。
    //現状は上から順番にしてしまうので変なことなになる
    PLAYER_DATA['maxhp']    += maxhpUp;
    PLAYER_DATA['attack']   += attackUp;
    PLAYER_DATA['deffence'] += deffenceUp;

    alertText('レベルが'+PLAYER_DATA['lv']+'になった\nステータスが上昇した');
   
  }
}

