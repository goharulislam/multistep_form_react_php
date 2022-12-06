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
        case "create_employee":
            create_employee($cn, $a, $b);
        break;
        default:
        echo "Default";
    }
}

function create_employee($cn, $a, $b){
$uid = "waiter-".rand(9999,1000000);
$server_url = "https://handdservices.co.uk/";
$upload_dir = "images_employees/";

if($a['employment_history']){
$data = "";
$data = json_decode($a['employment_history'], true);
$c = count($data);

for($i=0; $i < $c; $i++){
    try{
        $sql = "INSERT INTO waiter_employment_history (uid, company_name, phone, email) VALUES (:uid, :company_name, :phone, :email)";
        $stmt = $cn->prepare($sql);
        $stmt->bindParam(':uid', $uid);
        $stmt->bindParam(':company_name', $data[$i]["company_name"]);
        $stmt->bindParam(':phone', $data[$i]['phone']);
        $stmt->bindParam(':email', $data[$i]['email']);
        $stmt->execute();
        echo "Record created.<br>";
    } catch(PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }
}
}/*employment_history*/

if($b['file_passport']){
    $file_name = $b["file_passport"]["name"];
    $file_tmp_name = $b["file_passport"]["tmp_name"];
    $error = $b{"file_passport"}["error"];
    if($error > 0){
        $response = array(
            "status" => "error",
            "status" => true,
            "message" => "Error uploading the file.",
        );
    } else {
        $file_passport_random_name = rand(1000,1000000)."-".$file_name;
        $file_passport_random_name = strtolower($file_passport_random_name);
        $upload_name = $upload_dir.$file_passport_random_name;
        $upload_name = preg_replace('/\s+/', '-', $upload_name);
        
        echo "file_tmp_name: ".$file_tmp_name;
        echo " - upload_name: ".$upload_name;
        
        if(move_uploaded_file($file_tmp_name, $upload_name)){
            $response = array(
                "status" => "success",
                "status" => false,
                "message" => "File uploaded successfully.",
                "url" => $server_url."/".$upload_name,
            );        
        } else {
            $response = array(
                "status" => "error",
                "status" => true,
                "message" => "Error uploading the file.",
            );
        }
    }
} else {
    $response = array(
        "status" => "error",
        "status" => true,
        "message" => "No file was sent.",
    );
}
echo json_encode($response);/*file_passport*/

if($b['file_picture']){
    $file_name = $b["file_picture"]["name"];
    $file_tmp_name = $b["file_picture"]["tmp_name"];
    $error = $b{"file_picture"}["error"];
    if($error > 0){
        $response = array(
            "status" => "error",
            "status" => true,
            "message" => "Error uploading the file.",
        );
    } else {
        $file_picture_random_name = rand(1000,1000000)."-".$file_name;
        $file_picture_random_name = strtolower($file_picture_random_name);
        $upload_name = $upload_dir.$file_picture_random_name;
        $upload_name = preg_replace('/\s+/', '-', $upload_name);
        
        echo "file_tmp_name: ".$file_tmp_name;
        echo " - upload_name: ".$upload_name;
        
        if(move_uploaded_file($file_tmp_name, $upload_name)){
            $response = array(
                "status" => "success",
                "status" => false,
                "message" => "File uploaded successfully.",
                "url" => $server_url."/".$upload_name,
            );        
        } else {
            $response = array(
                "status" => "error",
                "status" => true,
                "message" => "Error uploading the file.",
            );
        }
    }
} else {
    $response = array(
        "status" => "error",
        "status" => true,
        "message" => "No file was sent.",
    );
}
echo json_encode($response);/*file_picture*/

if($b['file_national_insurance_letter']){
    $file_name = $b["file_national_insurance_letter"]["name"];
    $file_tmp_name = $b["file_national_insurance_letter"]["tmp_name"];
    $error = $b{"file_national_insurance_letter"}["error"];
    if($error > 0){
        $response = array(
            "status" => "error",
            "status" => true,
            "message" => "Error uploading the file.",
        );
    } else {
        $file_national_insurance_letter_random_name = rand(1000,1000000)."-".$file_name;
        $file_national_insurance_letter_random_name = strtolower($file_national_insurance_letter_random_name);
        $upload_name = $upload_dir.$file_national_insurance_letter_random_name;
        $upload_name = preg_replace('/\s+/', '-', $upload_name);
        
        echo "file_tmp_name: ".$file_tmp_name;
        echo " - upload_name: ".$upload_name;
        
        if(move_uploaded_file($file_tmp_name, $upload_name)){
            $response = array(
                "status" => "success",
                "status" => false,
                "message" => "File uploaded successfully.",
                "url" => $server_url."/".$upload_name,
            );        
        } else {
            $response = array(
                "status" => "error",
                "status" => true,
                "message" => "Error uploading the file.",
            );
        }
    }
} else {
    $response = array(
        "status" => "error",
        "status" => true,
        "message" => "No file was sent.",
    );
}
echo json_encode($response);/*file_national_insurance_letter*/

if($b['file_proof_address']){
    $file_name = $b["file_proof_address"]["name"];
    $file_tmp_name = $b["file_proof_address"]["tmp_name"];
    $error = $b{"file_proof_address"}["error"];
    if($error > 0){
        $response = array(
            "status" => "error",
            "status" => true,
            "message" => "Error uploading the file.",
        );
    } else {
        $file_proof_address_random_name = rand(1000,1000000)."-".$file_name;
        $file_proof_address_random_name = strtolower($file_proof_address_random_name);
        $upload_name = $upload_dir.$file_proof_address_random_name;
        $upload_name = preg_replace('/\s+/', '-', $upload_name);
        
        echo "file_tmp_name: ".$file_tmp_name;
        echo " - upload_name: ".$upload_name;
        
        if(move_uploaded_file($file_tmp_name, $upload_name)){
            $response = array(
                "status" => "success",
                "status" => false,
                "message" => "File uploaded successfully.",
                "url" => $server_url."/".$upload_name,
            );        
        } else {
            $response = array(
                "status" => "error",
                "status" => true,
                "message" => "Error uploading the file.",
            );
        }
    }
} else {
    $response = array(
        "status" => "error",
        "status" => true,
        "message" => "No file was sent.",
    );
}
echo json_encode($response);/*file_proof_address*/

if($b['file_brp1']){
    $file_name = $b["file_brp1"]["name"];
    $file_tmp_name = $b["file_brp1"]["tmp_name"];
    $error = $b{"file_brp1"}["error"];
    if($error > 0){
        $response = array(
            "status" => "error",
            "status" => true,
            "message" => "Error uploading the file.",
        );
    } else {
        $file_brp1_random_name = rand(1000,1000000)."-".$file_name;
        $file_brp1_random_name = strtolower($file_brp1_random_name);
        $upload_name = $upload_dir.$file_brp1_random_name;
        $upload_name = preg_replace('/\s+/', '-', $upload_name);
        
        echo "file_tmp_name: ".$file_tmp_name;
        echo " - upload_name: ".$upload_name;
        
        if(move_uploaded_file($file_tmp_name, $upload_name)){
            $response = array(
                "status" => "success",
                "status" => false,
                "message" => "File uploaded successfully.",
                "url" => $server_url."/".$upload_name,
            );        
        } else {
            $response = array(
                "status" => "error",
                "status" => true,
                "message" => "Error uploading the file.",
            );
        }
    }
} else {
    $response = array(
        "status" => "error",
        "status" => true,
        "message" => "No file was sent.",
    );
}
echo json_encode($response);/*file_brp1*/

if($b['file_brp2']){
    $file_name = $b["file_brp2"]["name"];
    $file_tmp_name = $b["file_brp2"]["tmp_name"];
    $error = $b{"file_brp2"}["error"];
    if($error > 0){
        $response = array(
            "status" => "error",
            "status" => true,
            "message" => "Error uploading the file.",
        );
    } else {
        $file_brp2_random_name = rand(1000,1000000)."-".$file_name;
        $file_brp2_random_name = strtolower($file_brp2_random_name);
        $upload_name = $upload_dir.$file_brp2_random_name;
        $upload_name = preg_replace('/\s+/', '-', $upload_name);
        
        echo "file_tmp_name: ".$file_tmp_name;
        echo " - upload_name: ".$upload_name;
        
        if(move_uploaded_file($file_tmp_name, $upload_name)){
            $response = array(
                "status" => "success",
                "status" => false,
                "message" => "File uploaded successfully.",
                "url" => $server_url."/".$upload_name,
            );        
        } else {
            $response = array(
                "status" => "error",
                "status" => true,
                "message" => "Error uploading the file.",
            );
        }
    }
} else {
    $response = array(
        "status" => "error",
        "status" => true,
        "message" => "No file was sent.",
    );
}
echo json_encode($response);/*file_brp2*/

try{
$sql = "INSERT INTO form_waiter (uid, title, first_name1, last_name1, phone1, email1, home_address1, post_code1, work_sought, hotel, eligible_uk, permit_expiry, passport, passport_expiry, bank_name, sort_code, account_number, emergency_contact_name, emergency_contact_relation, emergency_contact_number, emergency_contact_address, crime, crime_detail, sign1, date1, diabetes, epilepsy, blackouts, discomfort, moving, looking, outdoor, enclosed1, head_height, eyesight, lifting, accident, back, feet, hernia, bp, heart, hearing, dizziness, drugs, alcohol, sign2, name2, date2, first_name2, surname2, home_address2, hotel2, report_to1, start_date1, start_time1, job_role2, hourly_rate2, dress1, medical1, pregnant, emergency_name1, emergency_number1, emergency_address1, sign3, date3, name3, address3, hotel3, rate, payment_date, sign4, date4, name5, agency1, sign5, date5, trainer_name1, trainer_sign1, eligible_uk2, select_document, rehab_eligible, rehab_confirm, rehab_understand, rehab_sign, rehab_print, rehab_date, ccj, ccj_detail, iva, iva_detail, bankcrupt, bankcrupt_detail, request_ni_number, request_date1, request_current_address, request_previous_address, file_passport, file_picture, file_national_insurance_letter, file_proof_address, file_brp1, file_brp2, declaration1) VALUES (:uid, :title, :first_name1, :last_name1, :phone1, :email1, :home_address1, :post_code1, :work_sought, :hotel, :eligible_uk, :permit_expiry, :passport, :passport_expiry, :bank_name, :sort_code, :account_number, :emergency_contact_name, :emergency_contact_relation, :emergency_contact_number, :emergency_contact_address, :crime, :crime_detail, :sign1, :date1, :diabetes, :epilepsy, :blackouts, :discomfort, :moving, :looking, :outdoor, :enclosed1, :head_height, :eyesight, :lifting, :accident, :back, :feet, :hernia, :bp, :heart, :hearing, :dizziness, :drugs, :alcohol, :sign2, :name2, :date2, :first_name2, :surname2, :home_address2, :hotel2, :report_to1, :start_date1, :start_time1, :job_role2, :hourly_rate2, :dress1, :medical1, :pregnant, :emergency_name1, :emergency_number1, :emergency_address1, :sign3, :date3, :name3, :address3, :hotel3, :rate, :payment_date, :sign4, :date4, :name5, :agency1, :sign5, :date5, :trainer_name1, :trainer_sign1, :eligible_uk2, :select_document, :rehab_eligible, :rehab_confirm, :rehab_understand, :rehab_sign, :rehab_print, :rehab_date, :ccj, :ccj_detail, :iva, :iva_detail, :bankcrupt, :bankcrupt_detail, :request_ni_number, :request_date1, :request_current_address, :request_previous_address, :file_passport, :file_picture, :file_national_insurance_letter, :file_proof_address, :file_brp1, :file_brp2, :declaration1)";
//echo "sql: ".$sql;
$stmt = $cn->prepare($sql);
$stmt->bindParam(':uid', $uid);
$stmt->bindParam(':title', $a['title']);
$stmt->bindParam(':first_name1', $a['first_name1']);
$stmt->bindParam(':last_name1', $a['last_name1']);
$stmt->bindParam(':phone1', $a['phone1']);
$stmt->bindParam(':email1', $a['email1']);
$stmt->bindParam(':home_address1', $a['home_address1']);
$stmt->bindParam(':post_code1', $a['post_code1']);
$stmt->bindParam(':work_sought', $a['work_sought']);
$stmt->bindParam(':hotel', $a['hotel']);
$stmt->bindParam(':eligible_uk', $a['eligible_uk']);
$stmt->bindParam(':permit_expiry', $a['permit_expiry']);
$stmt->bindParam(':passport', $a['passport']);
$stmt->bindParam(':passport_expiry', $a['passport_expiry']);
$stmt->bindParam(':bank_name', $a['bank_name']);
$stmt->bindParam(':sort_code', $a['sort_code']);
$stmt->bindParam(':account_number', $a['account_number']);
$stmt->bindParam(':emergency_contact_name', $a['emergency_contact_name']);
$stmt->bindParam(':emergency_contact_relation', $a['emergency_contact_relation']);
$stmt->bindParam(':emergency_contact_number', $a['emergency_contact_number']);
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
$stmt->bindParam(':home_address2', $a['home_address2']);
$stmt->bindParam(':hotel2', $a['hotel2']);
$stmt->bindParam(':report_to1', $a['report_to1']);
$stmt->bindParam(':start_date1', $a['start_date1']);
$stmt->bindParam(':start_time1', $a['start_time1']);
$stmt->bindParam(':job_role2', $a['job_role2']);
$stmt->bindParam(':hourly_rate2', $a['hourly_rate2']);
$stmt->bindParam(':dress1', $a['dress1']);
$stmt->bindParam(':medical1', $a['medical1']);
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
$stmt->bindParam(':eligible_uk2', $a['eligible_uk2']);
$stmt->bindParam(':select_document', $a['select_document']);
$stmt->bindParam(':rehab_eligible', $a['rehab_eligible']);
$stmt->bindParam(':rehab_confirm', $a['rehab_confirm']);
$stmt->bindParam(':rehab_understand', $a['rehab_understand']);
$stmt->bindParam(':rehab_sign', $a['rehab_sign']);
$stmt->bindParam(':rehab_print', $a['rehab_print']);
$stmt->bindParam(':rehab_date', $a['rehab_date']);
$stmt->bindParam(':ccj', $a['ccj']);
$stmt->bindParam(':ccj_detail', $a['ccj_detail']);
$stmt->bindParam(':iva', $a['iva']);
$stmt->bindParam(':iva_detail', $a['iva_detail']);
$stmt->bindParam(':bankcrupt', $a['bankcrupt']);
$stmt->bindParam(':bankcrupt_detail', $a['bankcrupt_detail']);
$stmt->bindParam(':request_ni_number', $a['request_ni_number']);
$stmt->bindParam(':request_date1', $a['request_date1']);
$stmt->bindParam(':request_current_address', $a['request_current_address']);
$stmt->bindParam(':request_previous_address', $a['request_previous_address']);
$stmt->bindParam(':file_passport', $file_passport_random_name);
$stmt->bindParam(':file_picture', $file_picture_random_name);
$stmt->bindParam(':file_national_insurance_letter', $file_national_insurance_letter_random_name);
$stmt->bindParam(':file_proof_address', $file_proof_address_random_name);
$stmt->bindParam(':file_brp1', $file_brp1_random_name);
$stmt->bindParam(':file_brp2', $file_brp2_random_name);
$stmt->bindParam(':declaration1', $a['declaration1']);
$stmt->execute();
echo "Record created.";
} catch(PDOException $e) {
echo $sql . "<br>" . $e->getMessage();
}

}/*create_employee*/

?>