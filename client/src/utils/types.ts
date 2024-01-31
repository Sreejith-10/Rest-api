
export type SetState<T> = React.Dispatch<React.SetStateAction<T>>

export type User = {
	_id: number;
	name: string;
	email: string;
	age: number;
};

export type ToastType = {
	success:string;
	error:string
}