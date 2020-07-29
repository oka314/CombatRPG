//このページでのやりたいことは、冒険をクリックしたら敵が出現するだけ




const ADVENTURE = document.getElementById('adventure');

//冒険するのクリックイベント
function  adventClick(){
  
  ADVENTURE.addEventListener('click',function(){
    advent = true;
    
    appearEnemey();
    attackClick();
    
    ENEMY_STATUS.classList.remove('hidden');
    HOTEL.classList.add('deactive');

    if(!Victory)
    {
      BATTLE.classList.remove('deactive');
    }
  })
}



