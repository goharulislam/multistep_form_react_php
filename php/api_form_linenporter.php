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
        case "create_linenporter":
            create_linenporter($cn, $a, $b);
        break;
        default:
        echo "Default";
    }
}

function create_linenporter($cn, $a, $b){
$server_url = "https://handdservices.co.uk/";
$upload_dir = "images_employees/";

if($a['employment_history']){
$data = "";
$data = json_decode($a['employment_history'], true);
$c = count($data);

for($i=0; $i < $c; $i++){
    try{
        $sql = "INSERT INTO linenporter_employment_history (uid, company_name, phone, email) VALUES (:uid, :company_name, :phone, :email)";
        $stmt = $cn->prepare($sql);
        $stmt->bindParam(':uid', $a['uid']);
        $stmt->bindParam(':company_name', $data[$i]["company_name"]);
        $stmt->bindParam(':phone', $data[$i]['phone']);
        $stmt->bindParam(':email', $data[$i]['email']);
        $stmt->execute();
        echo "employment_history - Record created.<br>";
    } catch(PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }
}
}/*employment_history*/

try{
$sql = "INSERT INTO form_linenporter (uid, title, first_name1, last_name1, phone1, email1, home_address1, post_code1, work_sought, dob1, ni_number, hotel1, eligible_uk, permit_expiry, passport, passport_expiry, bank_name, sort_code, account_number, emergency_contact_name, emergency_contact_relation, emergency_contact_phone, emergency_contact_address, crime, crime_detail, sign1, date1, diabetes, epilepsy, blackouts, discomfort, moving, looking, outdoor, enclosed1, head_height, eyesight, lifting, accident, back, feet, hernia, bp, heart, hearing, dizziness, drugs, alcohol, sign2, name2, date2, first_name2, surname2, phone2, home_address2, hotel2, report_to1, start_date1, start_time1, job_role2, hourly_rate2, dress1, medical, pregnant, emergency_name1, emergency_number1, emergency_address1, sign3, date3, name3, address3, hotel3, rate, payment_date, sign4, date4, name5, agency1, sign5, date5, trainer_name1, trainer_sign1) VALUES (:uid, :title, :first_name1, :last_name1, :phone1, :email1, :home_address1, :post_code1, :work_sought, :dob1, :ni_number, :hotel1, :eligible_uk, :permit_expiry, :passport, :passport_expiry, :bank_name, :sort_code, :account_number, :emergency_contact_name, :emergency_contact_relation, :emergency_contact_phone, :emergency_contact_address, :crime, :crime_detail, :sign1, :date1, :diabetes, :epilepsy, :blackouts, :discomfort, :moving, :looking, :outdoor, :enclosed1, :head_height, :eyesight, :lifting, :accident, :back, :feet, :hernia, :bp, :heart, :hearing, :dizziness, :drugs, :alcohol, :sign2, :name2, :date2, :first_name2, :surname2, :phone2, :home_address2, :hotel2, :report_to1, :start_date1, :start_time1, :job_role2, :hourly_rate2, :dress1, :medical, :pregnant, :emergency_name1, :emergency_number1, :emergency_address1, :sign3, :date3, :name3, :address3, :hotel3, :rate, :payment_date, :sign4, :date4, :name5, :agency1, :sign5, :date5, :trainer_name1, :trainer_sign1)";
//echo "sql: ".$sql;
$stmt = $cn->prepare($sql);
$stmt->bindParam(':uid', $a['uid']);
$stmt->bindParam(':title', $a['title']);
$stmt->bindParam(':first_name1', $a['first_name1']);
$stmt->bindParam(':last_name1', $a['last_name1']);
$stmt->bindParam(':phone1', $a['phone1']);
$stmt->bindParam(':email1', $a['email1']);
$stmt->bindParam(':home_address1', $a['home_address1']);
$stmt->bindParam(':post_code1', $a['post_code1']);
$stmt->bindParam(':work_sought', $a['work_sought']);
$stmt->bindParam(':dob1', $a['dob1']);
$stmt->bindParam(':ni_number', $a['ni_number']);
$stmt->bindParam(':hotel1', $a['hotel1']);
$stmt->bindParam(':eligible_uk', $a['eligible_uk']);
$stmt->bindParam(':permit_expiry', $a['permit_expiry']);
$stmt->bindParam(':passport', $a['passport']);
$stmt->bindParam(':passport_expiry', $a['passport_expiry']);
$stmt->bindParam(':bank_name', $a['bank_name']);
$stmt->bindParam(':sort_code', $a['sort_code']);
$stmt->bindParam(':account_number', $a['account_number']);
$stmt->bindParam(':emergency_contact_name', $a['emergency_contact_name']);
$stmt->bindParam(':emergency_contact_relation', $a['emergency_contact_relation']);
$stmt->bindParam(':emergency_contact_phone', $a['emergency_contact_phone']);
$stmt->bindParam(':emergency_contact_address', $a['emergency_contact_address']);
$stmt->bindParam(':crime', $a['crime']);
$stmt->bindParam(':crime_detail', $a['crime_detail']);
$stmt->bindParam(':sign1', $a['sign1']);
$stmt->bindParam(':date1', $a['date1']);
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
$stmt->bindParam(':sign2', $a['sign2']);
$stmt->bindParam(':name2', $a['name2']);
$stmt->bindParam(':date2', $a['date2']);
$stmt->bindParam(':first_name2', $a['first_name2']);
$stmt->bindParam(':surname2', $a['surname2']);
$stmt->bindParam(':phone2', $a['phone2']);
$stmt->bindParam(':home_address2', $a['home_address2']);
$stmt->bindParam(':hotel2', $a['hotel2']);
$stmt->bindParam(':report_to1', $a['report_to1']);
$stmt->bindParam(':start_date1', $a['start_date1']);
$stmt->bindParam(':start_time1', $a['start_time1']);
$stmt->bindParam(':job_role2', $a['job_role2']);
$stmt->bindParam(':hourly_rate2', $a['hourly_rate2']);
$stmt->bindParam(':dress1', $a['dress1']);
$stmt->bindParam(':medical', $a['medical']);
$stmt->bindParam(':pregnant', $a['pregnant']);
$stmt->bindParam(':emergency_name1', $a['emergency_name1']);
$stmt->bindParam(':emergency_number1', $a['emergency_number1']);
$stmt->bindParam(':emergency_address1', $a['emergency_address1']);
$stmt->bindParam(':sign3', $a['sign3']);
$stmt->bindParam(':date3', $a['date3']);
$stmt->bindParam(':name3', $a['name3']);
$stmt->bindParam(':address3', $a['address3']);
$stmt->bindParam(':hotel3', $a['hotel3']);
$stmt->bindParam(':rate', $a['rate']);
$stmt->bindParam(':payment_date', $a['payment_date']);
$stmt->bindParam(':sign4', $a['sign4']);
$stmt->bindParam(':date4', $a['date4']);
$stmt->bindParam(':name5', $a['name5']);
$stmt->bindParam(':agency1', $a['agency1']);
$stmt->bindParam(':sign5', $a['sign5']);
$stmt->bindParam(':date5', $a['date5']);
$stmt->bindParam(':trainer_name1', $a['trainer_name1']);
$stmt->bindParam(':trainer_sign1', $a['trainer_sign1']);
$stmt->execute();
echo "Record created.";
} catch(PDOException $e) {
echo $sql . "<br>" . $e->getMessage();
}

}/*create_employee*/

?>