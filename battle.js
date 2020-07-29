const BATTLE = document.getElementById('attack');
const DAMAGE_RANGE = 0.2;


const ENEMY_HP_GAUGE  = document.getElementById('addHpGage')
const PLAYER_HP_GAUGE = document.getElementById('currentPlayerHpGaugeValue')


//ダメージ計算
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

//敗北処理
function defeat()
{
  PLAYER_DATA['hp'] = 0;

  PLAYER_HP_GAUGE.style.width =  '0%'
  playerStatus();

  alertText("あなたは"+ENEMY_DATA['name']+'に敗北した。')
  BATTLE.classList.add('deactive');
  ADVENTURE.classList.add('deactive');
  HOTEL.classList.add('deactive');

}

//HPバーの処理
function HpGauge()
{
}


function attackClick()
{
  BATTLE.addEventListener('click',function(){
    
   
    //最終的なダメージ計算を定数に代入。
    const PLAYER_DAMAGE = damageCalculation(PLAYER_DATA["attack"],ENEMY_DATA["deffence"]);
    const ENEMY_DAMAGE  = damageCalculation(ENEMY_DATA["attack"],PLAYER_DATA["deffence"]);

    //ダメージの引き算
    ENEMY_DATA["hp"] -= PLAYER_DAMAGE;
    PLAYER_DATA["hp"]-= ENEMY_DAMAGE;

    //HPバーがHPの割合に合わせて減少するための処理
    //敵の処理は倒してしまうのでプレイヤーとは違い、HPゲージをそのまま削除する。
    //取得したIDの横の長さの計算      最大HPを現在のHPで割って割合を出し、整数にするために100倍にした。
    ENEMY_HP_GAUGE.style.width = (ENEMY_DATA["hp"]/ENEMY_DATA["maxhp"])*100+"%";
    PLAYER_HP_GAUGE.style.width = (PLAYER_DATA["hp"]/PLAYER_DATA["maxhp"])*100+"%";
   //ここまで


    playerStatus()
    enemyStatus()

    if(ENEMY_DATA['hp'] <= 0)
    { 
      if(ENEMIS_DATA[18]['hp'] <= 0)
      {
        alertText('全クリおめでとう！君は世界を救った')
      }

      Victory = true;
      //敵のHPを0にする
      ENEMY_DATA['hp'] = 0;
      ENEMY_HP_GAUGE.style.width = '0%';

      //経験値の計算
      let getExp =  ENEMY_DATA['exp'];
      PLAYER_DATA['exp'] += getExp;

      //Goldの獲得処理
      let getGold = ENEMY_DATA['gold'];
      PLAYER_DATA['gold'] += getGold;
      alertText("勇者は勝利した。\n 勇者は経験値を"+getExp+"獲得した。\nゴールドを"+getGold+"獲得した")

      console.log('hello');

      lvUp();
      playerStatus();
      ENEMY_STATUS.classList.add('hidden');


      if(Victory)
      {
        BATTLE.classList.add('deactive');
        HOTEL.classList.remove('deactive');
        Victory = false;
        console.log(('こん'));
      } 

    }else if(PLAYER_DATA['hp'] <= 0)
    { 
      defeat();
    }

  });
}