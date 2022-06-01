import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Form1 from "./components/Form1";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App(){
  return(
	<>
		<Navbar />
		<div className="container">
		<div className="row">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="blog" element={<Blog />} />
				<Route path="contact" element={<Contact />} />
				<Route path="form1" element={<Form1 />} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</div>
		</div>
	</>
  );
}
export default App;