import axios from "axios";
export default axios.create({
	baseURL: 'https://handdservices.co.uk/',
	//baseURL: 'https://dotoxygen.com/',
	headers:{
		"content-type": "application/json, multipart/form-data"
	}
});