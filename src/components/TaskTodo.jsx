import iconsDelete from '..//IMG/icons8-delete.svg'
import s from './/Header.module.css'
const TaskTodo = (props) => {
	return (
		<div className={s.TaskTodo} id={props.id}>
			<div>
				<p className={s.p}>{props.value}</p>
			</div>
			<div>
				<input
					className={s.input}
					onClick={() => props.toggleTodo(props.id)}
					type={'checkbox'}
					defaultChecked={props.status}
				></input>
				<button
					onClick={() => {
						props.deleteTodo(props.id)
					}}
				>
					<img
						src={iconsDelete}
						className={s.iconsDelete}
						alt="icons"
					/>
				</button>
				<button
					onClick={() => {
						props.importantTodo(props.value)
					}}
				>
					IT
				</button>
			</div>
		</div>
	)
}
export default TaskTodo
