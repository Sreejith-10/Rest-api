import {FaEdit, FaTrash} from "react-icons/fa";
import "./UsersTable.scss";
import {useNavigate} from "react-router-dom";
import {User} from "../../utils/types";
import axios from "axios";

const TableButtons = ({item}: {item: User}) => {
	const navigate = useNavigate();

	const deleteUser = (id: number) => {
		try {
			axios
				.delete("/user/delete-user/" + id)
				.then(({data}) => {
					console.log(data);
				})
				.catch(({response}) => {
					console.log(response);
				});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="actions">
			<FaEdit
				size={20}
				onClick={() => navigate("/edit-user", {state: {user: item}})}
			/>
			<FaTrash size={20} onClick={() => deleteUser(item._id)} />
		</div>
	);
};

export default TableButtons;
