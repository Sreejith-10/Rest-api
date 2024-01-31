import {useLocation, useNavigate} from "react-router-dom";
import "./UserForm.scss";
import {useState} from "react";
import axios from "axios";

const EditForm = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [userData, setUserData] = useState({
		_id: location.state.user._id,
		name: location.state.user.name,
		email: location.state.user.email,
		age: location.state.user.age,
	});

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setUserData((prev) => ({...prev, [name]: value}));
	};

	const editUser = () => {
		if (
			userData.name === location.state.user.name &&
			userData.email === location.state.user.email &&
			userData.age === location.state.user.age
		)
			return alert("No changes made");
		axios
			.put("/user/edit-user", userData, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then(({data}) => {
				if (!data.error) navigate("/");
			})
			.catch(({response}) => {
				console.log(response.data.error);
			});
	};

	return (
		<>
			<div className="form">
				<div className="form-container">
					<h1>Edit user</h1>
					<div className="form-label">
						<input
							type="text"
							className="input-field"
							value={userData?.name}
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
							value={userData?.email}
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
							value={userData?.age}
							name="age"
							onChange={onChangeHandler}
							required
						/>
						<label htmlFor="">Age</label>
					</div>
					<div className="btn">
						<button onClick={editUser}>Edit</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditForm;
