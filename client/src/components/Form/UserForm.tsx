import {useNavigate} from "react-router-dom";
import "./UserForm.scss";
import React, {useState} from "react";
import axios from "axios";

const UserForm = () => {
	const navigate = useNavigate();
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		age: 0,
	});

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setUserData((prev) => ({...prev, [name]: value}));
	};

	const onSubmit = () => {
		axios
			.post("/user/new-user", userData, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then(() => {
				navigate("/");
			})
			.catch(({response}) => {
				alert(response.data.error);
			});
	};

	return (
		<>
			<div className="form">
				<div className="form-container">
					<h1>Create new user</h1>
					<div className="form-label">
						<input
							type="text"
							className="input-field"
							name="name"
							onChange={onChangeHandler}
							required
						/>
						<label htmlFor="">Name</label>
					</div>
					<div className="form-label">
						<input
							type="text"
							className="input-field"
							name="email"
							onChange={onChangeHandler}
							required
						/>
						<label htmlFor="">Email</label>
					</div>
					<div className="form-label">
						<input
							type="text"
							className="input-field"
							name="age"
							onChange={onChangeHandler}
							required
						/>
						<label htmlFor="">Age</label>
					</div>
					<div className="btn">
						<button onClick={onSubmit}>Add</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserForm;
