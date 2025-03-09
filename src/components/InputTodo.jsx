const InputTodo = (props) => {
	return (
		<div>
			<input
				value={props.todo}
				onChange={(e) => props.setTodo(e.target.value)}
			/>
			<button onClick={() => props.addTask()}>Add</button>
		</div>
	)
}

export default InputTodo
