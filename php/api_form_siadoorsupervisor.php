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
        case "get_all_sia_door_supervisor":
            get_all_sia_door_supervisor($cn);
            break;
        case "get_six":
            get_six($cn);
            break;
        case "create_employee":
            create_employee($cn, $a, $b);
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
            login($cn, $a, $b);
        break;
        case "upload_multiple_files":
            upload_multiple_files($cn, $a, $b);
        break;
        case "contact_us":
            contact_us($cn, $a);
        break;
        default:
        echo "Default";
    }
}

function get_all_sia_door_supervisor($cn){
    $sql = "SELECT * FROM form_sia_door_supervisor";
    $stmt = $cn->prepare($sql);
    $stmt->execute();
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($users);
}

function get_six($cn){
    $sql = "SELECT * FROM posts ORDER BY id DESC LIMIT 6";
    $stmt = $cn->prepare($sql);
    $stmt->execute();
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($users);
}

function create_employee($cn, $a, $b){
$uid = "door-".rand(9999,1000000);
$server_url = "https://handdservices.co.uk/";
$upload_dir = "images_employees/";

if($a['employment_history']){
$data = "";
$data = json_decode($a['employment_history'], true);
$c = count($data);

for($i=0; $i < $c; $i++){
    try{
        $sql = "INSERT INTO sia_door_supervisor_employment_history (uid, company_name, job_title, job_started, job_finished, address, phone, email, reason_leaving, contact_employer) VALUES (:uid, :company_name, :job_title, :job_started, :job_finished, :address, :phone, :email, :reason_leaving, :contact_employer)";
        $stmt = $cn->prepare($sql);
        $stmt->bindParam(':uid', $uid);
        $stmt->bindParam(':company_name', $data[$i]["company_name"]);
        $stmt->bindParam(':job_title', $data[$i]['job_title']);
        $stmt->bindParam(':job_started', $data[$i]['job_started']);
        $stmt->bindParam(':job_finished', $data[$i]['job_finished']);
        $stmt->bindParam(':address', $data[$i]['address']);
        $stmt->bindParam(':phone', $data[$i]['phone']);
        $stmt->bindParam(':email', $data[$i]['email']);
        $stmt->bindParam(':reason_leaving', $data[$i]['reason_leaving']);
        $stmt->bindParam(':contact_employer', $data[$i]['contact_employer']);
        $stmt->execute();
        echo "Record created.<br>";
    } catch(PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }
}
}/*employment_history*/

if($a['gaps_employment']){
$data = "";
$data = json_decode($a['gaps_employment'], true);
$c = count($data);

for($i=0; $i < $c; $i++){
    try{
        $sql = "INSERT INTO sia_door_supervisor_gaps_employment (uid, reason, start_date, end_date) VALUES (:uid, :reason, :start_date, :end_date)";
        $stmt = $cn->prepare($sql);
        $stmt->bindParam(':uid', $uid);
        $stmt->bindParam(':reason', $data[$i]["reason"]);
        $stmt->bindParam(':start_date', $data[$i]['start_date']);
        $stmt->bindParam(':end_date', $data[$i]['end_date']);
        $stmt->execute();
        echo "Record created. gaps_employment<br>";
    } catch(PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }
}
}/*gaps_employment*/

if($a['address_history']){
    $data = "";
    $data = json_decode($a['address_history'], true);
    $c = count($data);
    
    for($i=0; $i < $c; $i++){
        try{
            $sql = "INSERT INTO sia_door_supervisor_address_history (uid, previous_address, date_moved_in, date_leaved_out) VALUES (:uid, :previous_address, :date_moved_in, :date_leaved_out)";
            $stmt = $cn->prepare($sql);
            $stmt->bindParam(':uid', $uid);
            $stmt->bindParam(':previous_address', $data[$i]["previous_address"]);
            $stmt->bindParam(':date_moved_in', $data[$i]['date_moved_in']);
            $stmt->bindParam(':date_leaved_out', $data[$i]['date_leaved_out']);
            $stmt->execute();
            echo "Record created.<br>";
        } catch(PDOException $e) {
            echo $sql . "<br>" . $e->getMessage();
        }
    }
}/*address_history*/

if($a['self_employment']){
    $data = "";
    $data = json_decode($a['self_employment'], true);
    $c = count($data);
    
    for($i=0; $i < $c; $i++){
        try{
            $sql = "INSERT INTO sia_door_supervisor_self_employment (uid, company_name, company_address, company_phone, company_email) VALUES (:uid, :company_name, :company_address, :company_phone, :company_email)";
            $stmt = $cn->prepare($sql);
            $stmt->bindParam(':uid', $uid);
            $stmt->bindParam(':company_name', $data[$i]["company_name"]);
            $stmt->bindParam(':company_address', $data[$i]['company_address']);
            $stmt->bindParam(':company_phone', $data[$i]['company_phone']);
            $stmt->bindParam(':company_email', $data[$i]['company_email']);
            $stmt->execute();
            echo "Record created.<br>";
        } catch(PDOException $e) {
            echo $sql . "<br>" . $e->getMessage();
        }
    }
}/*self_employment*/

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

if($b['file_badge1']){
    $file_name = $b["file_badge1"]["name"];
    $file_tmp_name = $b["file_badge1"]["tmp_name"];
    $error = $b{"file_badge1"}["error"];
    if($error > 0){
        $response = array(
            "status" => "error",
            "status" => true,
            "message" => "Error uploading the file.",
        );
    } else {
        $file_badge1_random_name = rand(1000,1000000)."-".$file_name;
        $file_badge1_random_name = strtolower($file_badge1_random_name);
        $upload_name = $upload_dir.$file_badge1_random_name;
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
echo json_encode($response);/*file_badge1*/

if($b['file_badge2']){
    $file_name = $b["file_badge2"]["name"];
    $file_tmp_name = $b["file_badge2"]["tmp_name"];
    $error = $b{"file_badge2"}["error"];
    if($error > 0){
        $response = array(
            "status" => "error",
            "status" => true,
            "message" => "Error uploading the file.",
        );
    } else {
        $file_badge2_random_name = rand(1000,1000000)."-".$file_name;
        $file_badge2_random_name = strtolower($file_badge2_random_name);
        $upload_name = $upload_dir.$file_badge2_random_name;
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
echo json_encode($response);/*file_badge2*/

try{
$sql = "INSERT INTO form_sia_door_supervisor (uid, first_name, last_name, home_address, postal_code, region, city, phone, email, gender, marital_status, date_birth, place_birth, country_birth, sia_license, sia_badge_number, sia_badge_expiry, bank_name, bank_account_number, sort_code, bank_statement_date, valid_passport, uk_full_time, brp, criminal_convictions, international_student, own_vehicle, driving_license, driving_license_number, driving_endorsements, kin_name, kin_phone, kin_email, kin_address, kin_relationship, university_address, university_start_date, university_finish_date, college_address, college_start_date, college_finish_date, school_address, school_start_date, school_finish_date, changed_nationality, changed_nationality_detail, changed_surname, changed_surname_detail, current_address, current_address_date, p1_full_name, p1_address, p1_phone, p1_email, p1_occupation, p1_relationship, p1_period, p2_full_name, p2_address, p2_phone, p2_email, p2_occupation, p2_relationship, p2_period, eligible_uk, uk_document, rehab_eligible, rehab_private, rehab_confirm, rehab_understand, rehab_name, rehab_print, rehab_date, ccj, ccj_detail, iva, iva_detail, bankrupt, bankrupt_detail, diabetes, epilepsy, blackouts, discomfort, moving, looking, outdoor, enclosed1, head_height, eyesight, lifting, accident, back, feet, hernia, bp, heart, hearing, dizziness, drugs, alcohol, hr_name1, hr_name2, hr_date, file_passport, file_picture, file_national_insurance_letter, file_proof_address, file_brp1, file_brp2, file_badge1, file_badge2, declaration1) VALUES (:uid, :first_name, :last_name, :home_address, :postal_code, :region, :city, :phone, :email, :gender, :marital_status, :date_birth, :place_birth, :country_birth, :sia_license, :sia_badge_number, :sia_badge_expiry, :bank_name, :bank_account_number, :sort_code, :bank_statement_date, :valid_passport, :uk_full_time, :brp, :criminal_convictions, :international_student, :own_vehicle, :driving_license, :driving_license_number, :driving_endorsements, :kin_name, :kin_phone, :kin_email, :kin_address, :kin_relationship, :university_address, :university_start_date, :university_finish_date, :college_address, :college_start_date, :college_finish_date, :school_address, :school_start_date, :school_finish_date, :changed_nationality, :changed_nationality_detail, :changed_surname, :changed_surname_detail, :current_address, :current_address_date, :p1_full_name, :p1_address, :p1_phone, :p1_email, :p1_occupation, :p1_relationship, :p1_period, :p2_full_name, :p2_address, :p2_phone, :p2_email, :p2_occupation, :p2_relationship, :p2_period, :eligible_uk, :uk_document, :rehab_eligible, :rehab_private, :rehab_confirm, :rehab_understand, :rehab_name, :rehab_print, :rehab_date, :ccj, :ccj_detail, :iva, :iva_detail, :bankrupt, :bankrupt_detail, :diabetes, :epilepsy, :blackouts, :discomfort, :moving, :looking, :outdoor, :enclosed1, :head_height, :eyesight, :lifting, :accident, :back, :feet, :hernia, :bp, :heart, :hearing, :dizziness, :drugs, :alcohol, :hr_name1, :hr_name2, :hr_date, :file_passport, :file_picture, :file_national_insurance_letter, :file_proof_address, :file_brp1, :file_brp2, :file_badge1, :file_badge2, :declaration1)";
//echo "sql: ".$sql;
$stmt = $cn->prepare($sql);
$stmt->bindParam(':uid', $uid);
$stmt->bindParam(':first_name', $a['first_name']);
$stmt->bindParam(':last_name', $a['last_name']);
$stmt->bindParam(':home_address', $a['home_address']);
$stmt->bindParam(':postal_code', $a['postal_code']);
$stmt->bindParam(':region', $a['region']);
$stmt->bindParam(':city', $a['city']);
$stmt->bindParam(':phone', $a['phone']);
$stmt->bindParam(':email', $a['email']);
$stmt->bindParam(':gender', $a['gender']);
$stmt->bindParam(':marital_status', $a['marital_status']);
$stmt->bindParam(':date_birth', $a['date_birth']);
$stmt->bindParam(':place_birth', $a['place_birth']);
$stmt->bindParam(':country_birth', $a['country_birth']);
$stmt->bindParam(':sia_license', $a['sia_license']);
$stmt->bindParam(':sia_badge_number', $a['sia_badge_number']);
$stmt->bindParam(':sia_badge_expiry', $a['sia_badge_expiry']);
$stmt->bindParam(':bank_name', $a['bank_name']);
$stmt->bindParam(':bank_account_number', $a['bank_account_number']);
$stmt->bindParam(':sort_code', $a['sort_code']);
$stmt->bindParam(':bank_statement_date', $a['bank_statement_date']);
$stmt->bindParam(':valid_passport', $a['valid_passport']);
$stmt->bindParam(':uk_full_time', $a['uk_full_time']);
$stmt->bindParam(':brp', $a['brp']);
$stmt->bindParam(':criminal_convictions', $a['criminal_convictions']);
$stmt->bindParam(':international_student', $a['international_student']);
$stmt->bindParam(':own_vehicle', $a['own_vehicle']);
$stmt->bindParam(':driving_license', $a['driving_license']);
$stmt->bindParam(':driving_license_number', $a['driving_license_number']);
$stmt->bindParam(':driving_endorsements', $a['driving_endorsements']);
$stmt->bindParam(':kin_name', $a['kin_name']);
$stmt->bindParam(':kin_phone', $a['kin_phone']);
$stmt->bindParam(':kin_email', $a['kin_email']);
$stmt->bindParam(':kin_address', $a['kin_address']);
$stmt->bindParam(':kin_relationship', $a['kin_relationship']);
$stmt->bindParam(':university_address', $a['university_address']);
$stmt->bindParam(':university_start_date', $a['university_start_date']);
$stmt->bindParam(':university_finish_date', $a['university_finish_date']);
$stmt->bindParam(':college_address', $a['college_address']);
$stmt->bindParam(':college_start_date', $a['college_start_date']);
$stmt->bindParam(':college_finish_date', $a['college_finish_date']);
$stmt->bindParam(':school_address', $a['school_address']);
$stmt->bindParam(':school_start_date', $a['school_start_date']);
$stmt->bindParam(':school_finish_date', $a['school_finish_date']);
$stmt->bindParam(':changed_nationality', $a['changed_nationality']);
$stmt->bindParam(':changed_nationality_detail', $a['changed_nationality_detail']);
$stmt->bindParam(':changed_surname', $a['changed_surname']);
$stmt->bindParam(':changed_surname_detail', $a['changed_surname_detail']);
$stmt->bindParam(':current_address', $a['current_address']);
$stmt->bindParam(':current_address_date', $a['current_address_date']);
$stmt->bindParam(':p1_full_name', $a['p1_full_name']);
$stmt->bindParam(':p1_address', $a['p1_address']);
$stmt->bindParam(':p1_phone', $a['p1_phone']);
$stmt->bindParam(':p1_email', $a['p1_email']);
$stmt->bindParam(':p1_occupation', $a['p1_occupation']);
$stmt->bindParam(':p1_relationship', $a['p1_relationship']);
$stmt->bindParam(':p1_period', $a['p1_period']);
$stmt->bindParam(':p2_full_name', $a['p2_full_name']);
$stmt->bindParam(':p2_address', $a['p2_address']);
$stmt->bindParam(':p2_phone', $a['p2_phone']);
$stmt->bindParam(':p2_email', $a['p2_email']);
$stmt->bindParam(':p2_occupation', $a['p2_occupation']);
$stmt->bindParam(':p2_relationship', $a['p2_relationship']);
$stmt->bindParam(':p2_period', $a['p2_period']);
$stmt->bindParam(':eligible_uk', $a['eligible_uk']);
$stmt->bindParam(':uk_document', $a['uk_document']);
$stmt->bindParam(':rehab_eligible', $a['rehab_eligible']);
$stmt->bindParam(':rehab_private', $a['rehab_private']);
$stmt->bindParam(':rehab_confirm', $a['rehab_confirm']);
$stmt->bindParam(':rehab_understand', $a['rehab_understand']);
$stmt->bindParam(':rehab_name', $a['rehab_name']);
$stmt->bindParam(':rehab_print', $a['rehab_print']);
$stmt->bindParam(':rehab_date', $a['rehab_date']);
$stmt->bindParam(':ccj', $a['ccj']);
$stmt->bindParam(':ccj_detail', $a['ccj_detail']);
$stmt->bindParam(':iva', $a['iva']);
$stmt->bindParam(':iva_detail', $a['iva_detail']);
$stmt->bindParam(':bankrupt', $a['bankrupt']);
$stmt->bindParam(':bankrupt_detail', $a['bankrupt_detail']);
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
$stmt->bindParam(':hr_name1', $a['hr_name1']);
$stmt->bindParam(':hr_name2', $a['hr_name2']);
$stmt->bindParam(':hr_date', $a['hr_date']);
$stmt->bindParam(':file_passport', $file_passport_random_name);
$stmt->bindParam(':file_picture', $file_picture_random_name);
$stmt->bindParam(':file_national_insurance_letter', $file_national_insurance_letter_random_name);
$stmt->bindParam(':file_proof_address', $file_proof_address_random_name);
$stmt->bindParam(':file_brp1', $file_brp1_random_name);
$stmt->bindParam(':file_brp2', $file_brp2_random_name);
$stmt->bindParam(':file_badge1', $file_badge1_random_name);
$stmt->bindParam(':file_badge2', $file_badge2_random_name);
$stmt->bindParam(':declaration1', $a['declaration1']);
$stmt->execute();
echo "Record created.";
} catch(PDOException $e) {
echo $sql . "<br>" . $e->getMessage();
}

}/*create_employee*/

function single_file_upload($cn, $a, $b){
/*https://stackoverflow.com/questions/30965631/php-upload-multiple-files-with-different-input-field-names*/
$uploadLocation = 'dotoxygen_images/';
$uploadMainTo = null;
if(isset($b['file1'])){
  $main_image_name = $_FILES['file1']['name'];
  $main_image_size = $_FILES['file1']['size'];
  $main_image_tmp = $_FILES['file1']['tmp_name'];
  $uploadMainTo = $uploadLocation.$main_image_name;
  $moveMain = move_uploaded_file($main_image_tmp,$uploadMainTo);
  echo $moveMain;
}

$uploadSecondTo = null;
if(isset($b['file2'])){
  $second_image_name = $_FILES['file2']['name'];
  $second_image_size = $_FILES['file2']['size'];
  $second_image_tmp = $_FILES['file2']['tmp_name'];
  $uploadSecondTo = $uploadLocation.$second_image_name;
  $moveSecond = move_uploaded_file($second_image_tmp,$uploadSecondTo);
  echo $moveSecond;
}

/*$query = $db->execute("INSERT INTO users (pdf, main_image, second_image) VALUES (?,?,?) WHERE ID = ?", array($uploadPdfTo, $uploadMainTo, $uploadSecondTo, $user_id) );*/
}

function login($cn, $a){
    $sql = "SELECT * FROM users WHERE uid=?";
    $stmt = $cn->prepare($sql);
    $stmt->execute([$a['uid']]);
    $user = $stmt->fetch();
    if($user && ($a['pw'] === $user['pw'])){
        echo "true";
    } else {
        return $error = "ID and/or Password doesn't match";
    }
}

function upload_multiple_files($cn, $a, $b){
echo "REQUEST";
print_r($a);
echo "FILES";
print_r($b);

//$d = array_filter($b['file1']['tmp_name']);
$d = count($b['f1']['name']);
echo "count files: ".$d;

for($i=0; $i <$d; $i++){
    echo "name: ".$b['f1']['name'][$i]." | ";
}

//$files = array_filter($_FILES['upload']['name']); //something like that to be used before processing files.

// Count # of uploaded files in array
$total = count($b['f1']['name']);

// Loop through each file
for( $i=0 ; $i < $total ; $i++ ) {

  //Get the temp file path
  $tmpFilePath = $b['f1']['tmp_name'][$i];

  //Make sure we have a file path
  if ($tmpFilePath != ""){
    //Setup our new file path
    $newFilePath = "./dotoxygen_images/" . $b['f1']['name'][$i];

    //Upload the file into the temp dir
    if(move_uploaded_file($tmpFilePath, $newFilePath)) {
        echo "\r\n".$i." file(s) uploaded successfuly";
    }
  }
}

}

function strip_crlf($string)
{
    return str_replace("\r\n", "", $string);
}

function contact_us($cn, $a){
$name = $a["userName"];
$email = $a["userEmail"];
$subject = $a["subject"];
$content = $a["content"];
$to_email = $a["to_email"];
// CRLF Injection attack protection
$name = strip_crlf($name);
$email = strip_crlf($email);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "The email address is invalid.";
    } else {
    // appending \r\n at the end of mailheaders for end
    $mailHeaders = "From: " . $name . "<" . $email . ">\r\n";
        if(mail($toEmail, $subject, $content, $mailHeaders)) {
            $message = "Your contact information is received successfully.";
            $type = "success";
        }
    }
}
?>