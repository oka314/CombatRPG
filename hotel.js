//　宿屋を押した時の処理

const HOTEL = document.getElementById('hotel');

//宿屋のクリックイベント
function hotelClick()
{
  HOTEL.addEventListener('click',function(){
       
    //宿屋を利用できる条件
    if( PLAYER_DATA['gold']  >= PLAYER_DATA['lv'] * 10 && PLAYER_DATA["hp"] < PLAYER_DATA["maxhp"] ){
      //体力の回復
      PLAYER_DATA["hp"] = PLAYER_DATA["maxhp"] ;
      PLAYER_HP_GAUGE.style.width = '100%';

      PLAYER_DATA['gold'] -= PLAYER_DATA['lv'] * 3

      alertText('HPが全回復しました。')
      playerStatus();

      return;
    }else if (PLAYER_DATA["hp"] >= PLAYER_DATA["maxhp"]){
     alertText('HPが最大です。')
    }else{
      alertText('所持金が足りません');
    }
  })
}

