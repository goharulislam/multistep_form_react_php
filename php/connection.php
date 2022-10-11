<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//header("Access-Control-Max-Age: 3600");
error_reporting(E_ALL);
ini_set('display_errors', 1);

class Database{
private $host = "localhost";
private $db = "u410320394_forms";
private $user = "u410320394_gohar";
private $pw = "fJbGEaq&7K";
public $cn;

public function getConnection(){
    $this->cn = null;
    try{
        $this->cn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db, $this->user, $this->pw);
        $this->cn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->cn->exec("set names utf8");
    }catch(PDOException $exception){
        echo "Database could not be connected: " . $exception->getMessage();
    }
    return $this->cn;
}
}  
?>