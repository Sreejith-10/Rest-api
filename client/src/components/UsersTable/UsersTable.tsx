import "./UsersTable.scss";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {User} from "../../utils/types";
import TableButtons from "./TableButtons";

const UsersTable = () => {
	const [users, setUsers] = useState<User[]>();
	const naviagate = useNavigate();

	useEffect(() => {
		try {
			axios
				.get("/")
				.then(({data}) => setUsers(data))
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<>
			<table className="table">
				<thead>
					<tr className="table-head">
						<th>No</th>
						<th>Name</th>
						<th>Email</th>
						<th>Age</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((item, i) => (
						<tr key={i}>
							<th
								onClick={() => naviagate("/view-user", {state: {user: item}})}>
								{i + 1}
							</th>
							<th
								onClick={() => naviagate("/view-user", {state: {user: item}})}>
								{item.name}
							</th>
							<th
								onClick={() => naviagate("/view-user", {state: {user: item}})}>
								{item.email}
							</th>
							<th
								onClick={() => naviagate("/view-user", {state: {user: item}})}>
								{item.age}
							</th>
							<th>
								<TableButtons item={item} />
							</th>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default UsersTable;
