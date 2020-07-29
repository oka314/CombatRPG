//ダメージを計算するための関数
function damageCalculation(attack, deffence) {

  const MAX_DAMAGE = attack * (1 + DAMAGE_RANGE); //最大ダメージ
  const MIN_DAMAGE = attack * (1 - DAMAGE_RANGE); //最小ダメージ
  const ATTACK_DAMAGE = Math.floor(Math.random() * (MAX_DAMAGE - MIN_DAMAGE) + MIN_DAMAGE);
  /*
  ランダム関数の説明
  Math.floor(Math.random() * 5)+2;
  の時は2~6になる 2が最小値で5(0~4)が最大値になる。
  そこに、2を足すので、2,3,4,5,6になる
  */
  //攻撃力と防御力を計算して実際のダメージ力を計算する
  const DAMAGE = ATTACK_DAMAGE - deffence;

  if (DAMAGE < 1) {
    return 0;
  }
  else {
    return DAMAGE;
  }
}
