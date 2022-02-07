<?php
/**
 * Файл конфигурации отправки короткого письма прямо на почту
 * @ copyright - 04-11-2017 (c) WEBITPROFF
 * @ http://abuyfile.com/users/Webitproff
 * @ контакты:
 * @ telegram: @webitproff
 * @ skype: webitproff
 * @ E-mail: webitproff@gmail.com
 * @ +380679097117 +380661172370
*/
if(isset($_POST['email'])) {
     
    $email_to = "info@tecama.ru"; /* КОММЕНТАРИЙ СТРОКИ: - в этой строке меняем адрес электронной почты на свой */
    $email_subject = "Сообщение с сайта SMM-агентства «SAVDA»"; /* меняем тему письма на свою */
     
    function died($error) {
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
     
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');      
    }
     
    $name = $_POST['name']; 
    $email = $_POST['email']; 
    $message = $_POST['message']; 
     
    $error_message = "";
	if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "SMM-агентства «SAVDA» - Контактная форма с сайта .\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "Имя отправителя: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Текст соообщения: ".clean_string($message)."\n";
     
$email_message = "$email_message";
	$email_message .= "Форма прислана с сайта: ". htmlentities($_SERVER["SERVER_NAME"],ENT_COMPAT,'UTF-8') ."\n";
	$email_message .= "Visitor IP address: ". htmlentities($_SERVER["REMOTE_ADDR"],ENT_COMPAT,'UTF-8') ."\n";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}
$headers = 'From: '.$email."\r\n".
$headers = '';
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers); 
?>

<?php
}
?>