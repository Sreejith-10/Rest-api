import {useLocation} from "react-router-dom";
import "./Users.scss";
import {useState} from "react";
import {User as UserType} from "../../utils/types";

const User = () => {
	const location = useLocation();
	const [user, _setUser] = useState<UserType>(location?.state?.user);
	return (
		<>
			<div>
				<div className="user-container">
					<div className="user-info">
						<label htmlFor="">User Id : </label>
						<h1>{user?._id}</h1>
					</div>
					<div className="user-info">
						<label htmlFor="">User Name : </label>
						<h1>{user?.name}</h1>
					</div>
					<div className="user-info">
						<label htmlFor="">User Email : </label>
						<h1>{user?.email}</h1>
					</div>
					<div className="user-info">
						<label htmlFor="">User Age : </label>
						<h1>{user?.age}</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default User;
