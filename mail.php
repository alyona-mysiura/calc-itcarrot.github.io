<?php
if(isset($_POST)){
  $name=($_POST['name']);
  $name=htmlspecialchars(stripslashes($name));
  if(empty($name)){
    echo"<p>Введите Имя<br></p>";
    }
  $nameFieldset = "Имя: ";
  $phone=($_POST['phone']);
  $phone=htmlspecialchars(stripslashes($phone));
  if(empty($phone)){
    echo"<p>Введите Имя<br></p>";
    }
  $phoneFieldset = "Телефон: ";

  $email=($_POST['email']);
  $email=htmlspecialchars(stripslashes($email));
  if(empty($email)){
    echo"<p>Введите Имя<br></p>";
    }
  $emailFieldset = "e-mail: ";

  $orderform2=($_POST['orderform2']);
  $orderform2=htmlspecialchars(stripslashes($orderform2));
  if(empty($orderform2)){
    echo"<p>Введите Имя<br></p>";
    }
  $orderform2Fieldset = "заказ: ";
  
      
$token = "294475932:AAHY3Dv732y4_M3xnDm8FtYrpWZ5P3LziWM";
$chat_id = "-188989204";
$arr = array(
  $nameFieldset => $name,
  $phoneFieldset => $phone,
  $emailFieldset => $email,
  $orderform2Fieldset => $orderform2,
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
}
?>