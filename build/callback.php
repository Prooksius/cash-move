<?php

if (isset ($_POST['name'])) {
  
  $json = array();
  
  $to = 'ily5854@yandex.ru'; // nickname@email.com поменять на свой электронный адрес - ящик, куда будут приходить письма
  $from = 'info@cashmove.thekan.agency/'; // от кого - вбейте нужный адрес, можно любой
  $subject = 'Заявка с сайта "Move Money"'; // тема письма

  $message = 
'<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>'.$subject.'</title>
	</head>
	<body>
		<p>'.$subject.'</p>
		<p>Данные заявителя:</p>
		<p>&nbsp;</p>
		<p>';
  $message .=  'Имя: '.$_POST['name'].'<br>';
  $message .=  'Емайл: '.$_POST['email'].'<br>';
  $message .=  'Телефон: '.$_POST['phone'].'<br>';
  $message .=  'IP: '.$_SERVER['REMOTE_ADDR'].'<br>';

  if ($_POST['request_type'] == 'movemoney') {
	  $message .=  'Сумма отдачи: '.$_POST['value_you_give'].'<br>';
	  $message .=  'Валюта отдачи: '.$_POST['you_give_in_currency'].'<br>';
	  $message .=  'Отдать наличкой: '.$_POST['give_in_cash'].'<br>';
	  $message .=  'Как отдать: '.$_POST['type_give_payment'].'<br>';
	  $message .=  'Страна отдачи: '.$_POST['give_country'].'<br>';
	  $message .=  'Город отдачи: '.$_POST['give_city'].'<br><br>';
	  
	  $message .=  'Сумма получения: '.$_POST['value_you_get'].'<br>';
	  $message .=  'Валюта получения: '.$_POST['you_get_in_currency'].'<br>';
	  $message .=  'Получить наличкой: '.$_POST['get_in_cash'].'<br>';
	  $message .=  'Как получить: '.$_POST['type_get_payment'].'<br>';
	  $message .=  'Страна получения: '.$_POST['get_country'].'<br>';
	  $message .=  'Город получения: '.$_POST['get_city'].'<br>';
  }
  $message .=  '  </p>
				</body>
			</html>';

  $boundary = md5(date('r', time()));
  $headers = 'MIME-Version: 1.0' . "\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";
  $headers .= "Content-type: text/html; charset=utf-8 \r\n";
  
  if (mail($to, $subject, $message, $headers)) {
	$json['success'] = 1;  
    $json['message'] = 'Ваш запрос отправлен, спасибо!';
    $json['post'] = $_POST;
  } else {
    $json['message'] = 'Извините, при отправке запроса произошла ошибка.';
	$json['error'] = 1;  
  }
  echo json_encode($json);  
}
?>