import React from "react";
import "./App.scss";
import UsersTable from "./components/UsersTable/UsersTable";
import {Link, Route, Routes} from "react-router-dom";
import UserForm from "./components/Form/UserForm";
import User from "./components/UserView/User";
import axios from "axios";
import EditForm from "./components/Form/EditForm";

const App: React.FC = () => {
	axios.defaults.baseURL = "http://localhost:3001";
	axios.defaults.withCredentials = true;

	return (
		<>
			<div className="wrapper">
				<div className="app-container">
					<div className="header">
						<Link className="title" to={"/"}>
							Users
						</Link>
						<Link to={"/add-user"} className="add-user">
							Add User
						</Link>
					</div>
					<div className="content">
						<Routes>
							<Route path="/" element={<UsersTable />} />
							<Route path="/add-user" element={<UserForm />} />
							<Route path="/view-user" element={<User />} />
							<Route path="/edit-user" element={<EditForm />} />
						</Routes>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
