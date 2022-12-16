<?php
include("./backend/connection.php");
$objDb = new Database;
$cn = $objDb->getConnection();
$response = array();
$r = $_REQUEST;
$f = $_FILES;

//echo "count files: ".count($_FILES['f1']['name'])."<br>";

$function = $_REQUEST["function"];
date_default_timezone_set("Asia/Karachi");

//var_dump($users);
//print_r($_POST);
//print_r(file_get_contents('php://input'));
//$input = json_decode(file_get_contents('php://input'));

if($function != ""){
    switch($function){
        case "get_all_sia_door_supervisor":
            get_all_sia_door_supervisor($cn);
            break;
        case "get_six":
            get_six($cn);
            break;
        case "create_employee":
            create_employee($cn, $r, $f);
        break;
        case "update_post":
            create_employee($cn);
        break;
        case "delete_post":
            create_employee($cn);
        break;
        case "search_heading":
            create_employee($cn);
        break;
        case "login":
            login($cn, $r, $f);
        break;
        case "upload_multiple_files":
            upload_multiple_files($cn, $r, $f);
        break;
        case "contact1":
            contact1($cn, $r);
        break;
        default:
        echo "Default";
    }
}

function get_all_sia_door_supervisor($cn){
    $sql = "SELECT * FROM sia_door_supervisor";
    $stmt = $cn->prepare($sql);
    $stmt->execute();
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($users);
}

function single_file_upload($cn, $r, $f){
/*https://stackoverflow.com/questions/30965631/php-upload-multiple-files-with-different-input-field-names*/
$uploadLocation = 'dotoxygen_images/';
$uploadMainTo = null;
if(isset($f['file1'])){
  $main_image_name = $_FILES['file1']['name'];
  $main_image_size = $_FILES['file1']['size'];
  $main_image_tmp = $_FILES['file1']['tmp_name'];
  $uploadMainTo = $uploadLocation.$main_image_name;
  $moveMain = move_uploaded_file($main_image_tmp,$uploadMainTo);
  echo $moveMain;
}

$uploadSecondTo = null;
if(isset($f['file2'])){
  $second_image_name = $_FILES['file2']['name'];
  $second_image_size = $_FILES['file2']['size'];
  $second_image_tmp = $_FILES['file2']['tmp_name'];
  $uploadSecondTo = $uploadLocation.$second_image_name;
  $moveSecond = move_uploaded_file($second_image_tmp,$uploadSecondTo);
  echo $moveSecond;
}

/*$query = $db->execute("INSERT INTO users (pdf, main_image, second_image) VALUES (?,?,?) WHERE ID = ?", array($uploadPdfTo, $uploadMainTo, $uploadSecondTo, $user_id) );*/
}

function login($cn, $r){
    $sql = "SELECT * FROM users WHERE uid=?";
    $stmt = $cn->prepare($sql);
    $stmt->execute([$r['uid']]);
    $user = $stmt->fetch();
    if($user && ($r['pw'] === $user['pw'])){
        echo "true";
    } else {
        return $error = "ID and/or Password doesn't match";
    }
}

function upload_multiple_files($cn, $r, $f){
echo "REQUEST";
print_r($r);
echo "FILES";
print_r($f);

//$d = array_filter($f['file1']['tmp_name']);
$d = count($f['f1']['name']);
echo "count files: ".$d;

for($i=0; $i <$d; $i++){
    echo "name: ".$f['f1']['name'][$i]." | ";
}

//$files = array_filter($_FILES['upload']['name']); //something like that to be used before processing files.

// Count # of uploaded files in array
$total = count($f['f1']['name']);

// Loop through each file
for( $i=0 ; $i < $total ; $i++ ) {

  //Get the temp file path
  $tmpFilePath = $f['f1']['tmp_name'][$i];

  //Make sure we have a file path
  if ($tmpFilePath != ""){
    //Setup our new file path
    $newFilePath = "./dotoxygen_images/" . $f['f1']['name'][$i];

    //Upload the file into the temp dir
    if(move_uploaded_file($tmpFilePath, $newFilePath)) {
        echo "\r\n".$i." file(s) uploaded successfuly";
    }
  }
}

}

function strip_crlf($string){
    return str_replace("\r\n", "", $string);
}

function contact1($cn, $r){
$to_name = $r["to_name"];
$to_email = $r["to_email"];
$from_name = $r["from_name"];
$from_email = $r["from_email"];
$from_country_code = $r["from_country_code"];
$from_phone = $r["from_phone"];
$from_message = $r["from_message"];
$subject = "DotOxygen website: From ".$from_name;

$from_name = strip_crlf($from_name);
$from_email = strip_crlf($from_email);
$to_name = strip_crlf($to_name);
$to_email = strip_crlf($to_email);

$headers = array(
    "From: ".$from_name."<". $from_email.">",
    "Reply-To: ".$to_name ."<". $to_email.">",
    "X-Mailer: PHP/".phpversion(),
    "Return-Path: ".$to_email,
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=iso-8859-1",
    "X-Priority: 1",
    "X-Mailer: smail-PHP ".phpversion(),
);
$headers = implode("\r\n", $headers);

    if(!filter_var($from_email, FILTER_VALIDATE_EMAIL)){
        echo "Email is invalid.";
    } else {
        if(mail($to_email, $subject, $from_message, $headers)){
            echo "Email sent successfully.";
        } else {
            echo "Email sent failed.";
        }
    }
}
?>