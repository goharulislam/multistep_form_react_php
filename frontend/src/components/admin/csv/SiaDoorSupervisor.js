import React, {useState, useEffect} from 'react';
import axios from '../../../axios/index';
import {useNavigate} from 'react-router-dom';
import {CSVLink} from 'react-csv';

function SiaDoorSupervisor(){
const [errors, setErrors] = useState(null);
const [rows, setRows] = useState([]);
let formData = new FormData();
const navigate = useNavigate();
const [data, setData] = useState({
	uid: '',
	pw: '',
});

useEffect(()=>{
    getData();
}, []);

async function getData(){
	try{
    	formData.append('function', 'get_all_sia_door_supervisor');
    	let response = await axios.post('api_forms.php', formData);
    	console.log('Response:', response.data);
    	setRows(prevRows => prevRows = response.data);
    	//console.log('Users:', users);
	}
	catch(err){
    	console.log(err);
  	}
}

const headers = [
	{label: 'id', key: 'id'},
	{label: 'uid', key: 'uid'},
	{label: 'first_name', key: 'first_name'},
	{label: 'last_name', key: 'last_name'},
	{label: 'home_address', key: 'home_address'},
	{label: 'postal_code', key: 'postal_code'},
	{label: 'region', key: 'region'},
	{label: 'city', key: 'city'},
	{label: 'phone', key: 'phone'},
	{label: 'email', key: 'email'},
	{label: 'gender', key: 'gender'},
	{label: 'marital_status', key: 'marital_status'},
	{label: 'date_birth', key: 'date_birth'},
	{label: 'place_birth', key: 'place_birth'},
	{label: 'country_birth', key: 'country_birth'},
	{label: 'sia_license', key: 'sia_license'},
	{label: 'sia_badge_number', key: 'sia_badge_number'},
	{label: 'sia_badge_expiry', key: 'sia_badge_expiry'},
	{label: 'bank_name', key: 'bank_name'},
	{label: 'bank_account_number', key: 'bank_account_number'},
	{label: 'sort_code', key: 'sort_code'},
	{label: 'bank_statement_date', key: 'bank_statement_date'},
	{label: 'valid_passport', key: 'valid_passport'},
	{label: 'uk_full_time', key: 'uk_full_time'},
	{label: 'brp', key: 'brp'},
	{label: 'criminal_convictions', key: 'criminal_convictions'},
	{label: 'international_student', key: 'international_student'},
	{label: 'own_vehicle', key: 'own_vehicle'},
	{label: 'driving_license', key: 'driving_license'},
	{label: 'driving_license_number', key: 'driving_license_number'},
	{label: 'driving_endorsements', key: 'driving_endorsements'},
	{label: 'kin_name', key: 'kin_name'},
	{label: 'kin_phone', key: 'kin_phone'},
	{label: 'kin_email', key: 'kin_email'},
	{label: 'kin_address', key: 'kin_address'},
	{label: 'kin_relationship', key: 'kin_relationship'},
	{label: 'university_address', key: 'university_address'},
	{label: 'university_start_date', key: 'university_start_date'},
	{label: 'university_finish_date', key: 'university_finish_date'},
	{label: 'college_address', key: 'college_address'},
	{label: 'college_start_date', key: 'college_start_date'},
	{label: 'college_finish_date', key: 'college_finish_date'},
	{label: 'school_address', key: 'school_address'},
	{label: 'school_start_date', key: 'school_start_date'},
	{label: 'school_finish_date', key: 'school_finish_date'},
	{label: 'changed_nationality', key: 'changed_nationality'},
	{label: 'changed_nationality_detail', key: 'changed_nationality_detail'},
	{label: 'changed_surname', key: 'changed_surname'},
	{label: 'changed_surname_detail', key: 'changed_surname_detail'},
	{label: 'current_address', key: 'current_address'},
	{label: 'current_address_date', key: 'current_address_date'},
	{label: 'p1_full_name', key: 'p1_full_name'},
	{label: 'p1_address', key: 'p1_address'},
	{label: 'p1_phone', key: 'p1_phone'},
	{label: 'p1_email', key: 'p1_email'},
	{label: 'p1_occupation', key: 'p1_occupation'},
	{label: 'p1_relationship', key: 'p1_relationship'},
	{label: 'p1_period', key: 'p1_period'},
	{label: 'p2_full_name', key: 'p2_full_name'},
	{label: 'p2_address', key: 'p2_address'},
	{label: 'p2_phone', key: 'p2_phone'},
	{label: 'p2_email', key: 'p2_email'},
	{label: 'p2_occupation', key: 'p2_occupation'},
	{label: 'p2_relationship', key: 'p2_relationship'},
	{label: 'p2_period', key: 'p2_period'},
	{label: 'eligible_uk', key: 'eligible_uk'},
	{label: 'uk_document', key: 'uk_document'},
	{label: 'rehab_eligible', key: 'rehab_eligible'},
	{label: 'rehab_private', key: 'rehab_private'},
	{label: 'rehab_confirm', key: 'rehab_confirm'},
	{label: 'rehab_understand', key: 'rehab_understand'},
	{label: 'rehab_name', key: 'rehab_name'},
	{label: 'rehab_print', key: 'rehab_print'},
	{label: 'rehab_date', key: 'rehab_date'},
	{label: 'ccj', key: 'ccj'},
	{label: 'ccj_detail', key: 'ccj_detail'},
	{label: 'iva', key: 'iva'},
	{label: 'iva_detail', key: 'iva_detail'},
	{label: 'bankrupt', key: 'bankrupt'},
	{label: 'bankrupt_detail', key: 'bankrupt_detail'},
	{label: 'diabetes', key: 'diabetes'},
	{label: 'epilepsy', key: 'epilepsy'},
	{label: 'blackouts', key: 'blackouts'},
	{label: 'discomfort', key: 'discomfort'},
	{label: 'moving', key: 'moving'},
	{label: 'looking', key: 'looking'},
	{label: 'outdoor', key: 'outdoor'},
	{label: 'enclosed1', key: 'enclosed1'},
	{label: 'head_height', key: 'head_height'},
	{label: 'eyesight', key: 'eyesight'},
	{label: 'lifting', key: 'lifting'},
	{label: 'accident', key: 'accident'},
	{label: 'back', key: 'back'},
	{label: 'feet', key: 'feet'},
	{label: 'hernia', key: 'hernia'},
	{label: 'bp', key: 'bp'},
	{label: 'heart', key: 'heart'},
	{label: 'hearing', key: 'hearing'},
	{label: 'dizziness', key: 'dizziness'},
	{label: 'drugs', key: 'drugs'},
	{label: 'alcohol', key: 'alcohol'},
	{label: 'hr_name1', key: 'hr_name1'},
	{label: 'hr_name2', key: 'hr_name2'},
	{label: 'hr_date', key: 'hr_date'},
	{label: 'file_passport', key: 'file_passport'},
	{label: 'file_picture', key: 'file_picture'},
	{label: 'file_national_insurance_letter', key: 'file_national_insurance_letter'},
	{label: 'file_proof_address', key: 'file_proof_address'},
	{label: 'file_brp1', key: 'file_brp1'},
	{label: 'file_brp2', key: 'file_brp2'},
	{label: 'file_badge1', key: 'file_badge1'},
	{label: 'file_badge2', key: 'file_badge2'},
	{label: 'declaration1', key: 'declaration1'},
];

const csvReport = {
    filename: 'SIA_Door_Supervisor.csv',
    headers: headers,
    data: rows
};

return(
<section>
<div className="row">
<div className="col-md-12">
	<CSVLink {...csvReport}><i className='fa fa-download'></i> Download CSV File for SIA Door Supervisor</CSVLink>
</div>
</div>{/*row*/}
</section>
);
}
export default SiaDoorSupervisor;