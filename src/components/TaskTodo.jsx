import iconsDelete from '..//IMG/icons8-delete.svg'
import s from './/Header.module.css'

const TaskTodo = (props) => {
	return (
		<div className={s.TaskTodo} id={props.id}>
			<div>
				<p className={props.importantId ? s.active : ''}>
					{props.importantId && '!'}
					{props.value}
				</p>
			</div>
			<div>
				<input
					className={s.input}
					onClick={() => props.toggleTodo(props.id)}
					type={'checkbox'}
					defaultChecked={props.completed}
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
						props.importantTodo(props.id)
					}}
				>
					IT
				</button>
			</div>
		</div>
	)
}
export default TaskTodo
