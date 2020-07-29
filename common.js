/**
 * 
 * 全部のファイルでも扱うような共通した関数,変数を書く場所
 * 
 */

 let advent = false;

 let Victory = true;

 const ENEMY_STATUS = document.getElementById('enemyHidden')

 //敵が出現したときにHPバーのクラスを追加する。
 function addHpGageBar()
{
  return document.getElementById('addHpGage').classList.add('hpGageValue');

};

 //文章を表示するための関数
 function textDisplay(id,text)
 {
   document.getElementById(id).innerHTML =text;
 };

 //window.alertがめんどくさくなったので関数化
 function alertText(text)
 {
   window.alert(text);
 }