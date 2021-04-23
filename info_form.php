<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$json = file_get_contents("php://input");
$contents = json_decode($json, true);

// var_dump($contents);
// return $json;

$name = $contents['name'];
$mail_to = $contents['mail'];
$message = $contents['message'];

if($name == '') {
    $error_messages['name'] = '名前が入力されていません。';
} elseif(mb_strlen($name) > 30) {
    $error_messages['name'] = '名前は30文字以内で入力してください。';
}

if($mail_to == '') {
    $error_messages['mail'] = 'メールアドレスが入力されていません。';
} elseif(mb_strlen($mail_to) > 50) {
    $error_messages['mail'] = 'メールアドレスは50文字以内で入力してください。';
}

if($message == '') {
    $error_messages['message'] = '本文が入力されていません。';
} elseif(mb_strlen($message) > 2000) {
    $error_messages['message'] = '本文は2000文字以内で入力してください。';
}

if(!empty($error_messages)) {
    $error_messages['status'] = "fail";
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($error_messages);
    exit();
}

$all_message = $name . "さま、この度はお問い合わせ頂き誠にありがとうございます。\n下記の内容でお問い合わせを受け付けました。\n\n";
$all_message .= "お問い合わせ日時：" . date("Y-m-d H:i") . "\n";
$all_message .= $message . "\n\n";
$all_message .= "東京BaiTai \nTEL 03-5324-2371 \nMAIL okugai@baitai.tokyo";

$mail = new PHPMailer(true);

try {
     //ホスト（さくらのレンタルサーバの初期ドメイン）
    $host = 'baitai.sakura.ne.jp';
    //メールアカウントの情報（さくらのレンタルサーバで作成したメールアカウント）
    $user = 'baitai_hp@baitai.tokyo';
    $password = 'hKuy7565REWq42';
    //差出人
    $from = 'okugai@baitai.tokyo';
    $from_name = '東京BaiTai';
    //宛先
    $to = $mail_to;
    $to_name = $name;
    //件名
    $subject = 'お問い合わせありがとうございます。';
    //本文
    $body = $all_message;
    //諸々設定
    //$mail->SMTPDebug = 2; //デバッグ用
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = $host;
    $mail->Username = $user;
    $mail->Password = $password;
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->CharSet = "utf-8";
    $mail->Encoding = "base64";
    $mail->setFrom($from, $from_name);
    $mail->addAddress($to, $to_name);
    $mail->Subject = $subject;
    $mail->Body = $body;
    //メール送信
    $mail->send();
    
    $chapy = 'okugai@baitai.tokyo';
    $mail->addAddress($chapy);
    $mail->send();

    header("Content-Type: application/json; charset=utf-8");
    $success_messages['status'] = "success";
    echo json_encode($success_messages);
} catch (Exception $e) {
    header("Content-Type: application/json; charset=utf-8");
    $exception_messages['status'] = "error";
    $exception_messages['error_datail'] = $mail->ErrorInfo;
    echo json_encode($exception_messages);
    exit();
}