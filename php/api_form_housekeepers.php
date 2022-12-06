<?php
include("./backend/connection.php");
$objDb = new Database;
$cn = $objDb->getConnection();
$response = array();
$a = $_REQUEST;
$b = $_FILES;

//echo "count files: ".count($_FILES['f1']['name'])."<br>";

$function = $_REQUEST["function"];
date_default_timezone_set("Asia/Karachi");

//var_dump($users);
//print_r($_POST);
//print_r(file_get_contents('php://input'));
//$input = json_decode(file_get_contents('php://input'));

if($function != ""){
    switch($function){
        case "create_housekeepers":
            create_housekeepers($cn, $a, $b);
        break;
        default:
        echo "Default";
    }
}

function create_housekeepers($cn, $a, $b){
$server_url = "https://handdservices.co.uk/";
$upload_dir = "images_employees/";

if($a['employment_history']){
$data = "";
$data = json_decode($a['employment_history'], true);
$c = count($data);

for($i=0; $i < $c; $i++){
    try{
        $sql = "INSERT INTO housekeepers_employment_history (uid, name, phone, email, start_date, finish_date) VALUES (:uid, :name, :phone, :email, :start_date, :finish_date)";
        $stmt = $cn->prepare($sql);
        $stmt->bindParam(':uid', $a['uid']);
        $stmt->bindParam(':name', $data[$i]["name"]);
        $stmt->bindParam(':phone', $data[$i]['phone']);
        $stmt->bindParam(':email', $data[$i]['email']);
        $stmt->bindParam(':start_date', $data[$i]['start_date']);
        $stmt->bindParam(':finish_date', $data[$i]['finish_date']);
        $stmt->execute();
        echo "employment_history-Record created.<br>";
    } catch(PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }
}
}/*employment_history*/

try{
$sql = "INSERT INTO form_housekeepers (uid, title, first_name, last_name, phone, email, address_home, post_code, work_sought, dob, ni, hotel, eligible_uk, permit_expiry, passport, passport_expiry, bank_name, account_number, sort_code, emergency_contact_name, emergency_contact_relation, emergency_contact_phone, emergency_contact_address, crime, crime_date, crime_detail, name2, sign2, date2, diabetes, epilepsy, blackouts, discomfort, moving, looking, outdoor, enclosed1, head_height, eyesight, lifting, accident, back, feet, hernia, bp, heart, hearing, dizziness, drugs, alcohol, allergies, pregnant, sign3, name3, date3, declaration1) VALUES (:uid, :title, :first_name, :last_name, :phone, :email, :address_home, :post_code, :work_sought, :dob, :ni, :hotel, :eligible_uk, :permit_expiry, :passport, :passport_expiry, :bank_name, :account_number, :sort_code, :emergency_contact_name, :emergency_contact_relation, :emergency_contact_phone, :emergency_contact_address, :crime, :crime_date, :crime_detail, :name2, :sign2, :date2, :diabetes, :epilepsy, :blackouts, :discomfort, :moving, :looking, :outdoor, :enclosed1, :head_height, :eyesight, :lifting, :accident, :back, :feet, :hernia, :bp, :heart, :hearing, :dizziness, :drugs, :alcohol, :allergies, :pregnant, :sign3, :name3, :date3, :declaration1)";
//echo "sql: ".$sql;
$stmt = $cn->prepare($sql);
$stmt->bindParam(':uid', $a['uid']);
$stmt->bindParam(':title', $a['title']);
$stmt->bindParam(':first_name', $a['first_name']);
$stmt->bindParam(':last_name', $a['last_name']);
$stmt->bindParam(':phone', $a['phone']);
$stmt->bindParam(':email', $a['email']);
$stmt->bindParam(':address_home', $a['address_home']);
$stmt->bindParam(':post_code', $a['post_code']);
$stmt->bindParam(':work_sought', $a['work_sought']);
$stmt->bindParam(':dob', $a['dob']);
$stmt->bindParam(':ni', $a['ni']);
$stmt->bindParam(':hotel', $a['hotel']);
$stmt->bindParam(':eligible_uk', $a['eligible_uk']);
$stmt->bindParam(':permit_expiry', $a['permit_expiry']);
$stmt->bindParam(':passport', $a['passport']);
$stmt->bindParam(':passport_expiry', $a['passport_expiry']);
$stmt->bindParam(':bank_name', $a['bank_name']);
$stmt->bindParam(':account_number', $a['account_number']);
$stmt->bindParam(':sort_code', $a['sort_code']);
$stmt->bindParam(':emergency_contact_name', $a['emergency_contact_name']);
$stmt->bindParam(':emergency_contact_relation', $a['emergency_contact_relation']);
$stmt->bindParam(':emergency_contact_phone', $a['emergency_contact_phone']);
$stmt->bindParam(':emergency_contact_address', $a['emergency_contact_address']);
$stmt->bindParam(':crime', $a['crime']);
$stmt->bindParam(':crime_date', $a['crime_date']);
$stmt->bindParam(':crime_detail', $a['crime_detail']);
$stmt->bindParam(':name2', $a['name2']);
$stmt->bindParam(':sign2', $a['sign2']);
$stmt->bindParam(':date2', $a['date2']);
$stmt->bindParam(':diabetes', $a['diabetes']);
$stmt->bindParam(':epilepsy', $a['epilepsy']);
$stmt->bindParam(':blackouts', $a['blackouts']);
$stmt->bindParam(':discomfort', $a['discomfort']);
$stmt->bindParam(':moving', $a['moving']);
$stmt->bindParam(':looking', $a['looking']);
$stmt->bindParam(':outdoor', $a['outdoor']);
$stmt->bindParam(':enclosed1', $a['enclosed1']);
$stmt->bindParam(':head_height', $a['head_height']);
$stmt->bindParam(':eyesight', $a['eyesight']);
$stmt->bindParam(':lifting', $a['lifting']);
$stmt->bindParam(':accident', $a['accident']);
$stmt->bindParam(':back', $a['back']);
$stmt->bindParam(':feet', $a['feet']);
$stmt->bindParam(':hernia', $a['hernia']);
$stmt->bindParam(':bp', $a['bp']);
$stmt->bindParam(':heart', $a['heart']);
$stmt->bindParam(':hearing', $a['hearing']);
$stmt->bindParam(':dizziness', $a['dizziness']);
$stmt->bindParam(':drugs', $a['drugs']);
$stmt->bindParam(':alcohol', $a['alcohol']);
$stmt->bindParam(':allergies', $a['allergies']);
$stmt->bindParam(':pregnant', $a['pregnant']);
$stmt->bindParam(':sign3', $a['sign3']);
$stmt->bindParam(':name3', $a['name3']);
$stmt->bindParam(':date3', $a['date3']);
$stmt->bindParam(':declaration1', $a['declaration1']);
$stmt->execute();
echo "HouseKeepers-Record created.";
} catch(PDOException $e) {
echo $sql . "<br>" . $e->getMessage();
}

}/*create_employee*/

?>