import React, { useState } from 'react'
import styles from './App.css'
import Header from './components/Header'
import InputTodo from './components/InputTodo'
import TaskTodo from './components/TaskTodo'

function App() {
	const [todo, setTodo] = useState('')
	const [tasks, setTasks] = useState([])
	const [done, setDone] = useState('')

	let copeTasks = tasks

	const addTask = () => {
		const taskTodo = {
			id: Math.random(),
			value: todo,
			status: false,
			active: false,
			importantId: false,
		}
		if (todo === '') {
			return false
		}
		let newTask = [taskTodo, ...tasks]
		setTasks(newTask)
		setTodo('')
	}

	const deleteTodo = (id) => {
		let delId = tasks.filter((e) => e.id !== id)
		setTasks(delId)
	}

	const toggleTodo = (id) => {
		let toggle = tasks.map((e) =>
			e.id === id ? { ...e, status: !e.status } : { ...e }
		)
		setTasks(toggle)
	}
	const importantTodo = (id) => {
		let important = tasks.map((e) => {
			if (e.id === id) {
				const newImportantId = !e.importantId
				return {
					...e,
					importantId: newImportantId,
					value: newImportantId ? `!${e.value}` : e.value,
				}
			} else {
				return e
			}
		})
		setTasks(important)
	}

	switch (done) {
		case 'ALL':
			copeTasks = tasks
			break
		case 'Active':
			copeTasks = tasks.filter((e) => e.status === false)
			break
		case 'Completes':
			copeTasks = tasks.filter((e) => e.status === true)
			break
		case 'Important':
			copeTasks = tasks.filter((e) => e.importantId === true)
			break

		default:
			break
	}

	const taskTodoList = copeTasks.map((e) => (
		<TaskTodo
			id={e.id}
			value={e.value}
			status={e.status}
			active={e.active}
			key={e.id}
			importantId={e.importantId}
			deleteTodo={deleteTodo}
			toggleTodo={toggleTodo}
			importantTodo={importantTodo}
		/>
	))
	return (
		<div>
			<Header />

			<div>
				<button onClick={() => setDone('ALL')}>ALL</button>
				<button onClick={() => setDone('Active')}>Active</button>
				<button onClick={() => setDone('Completes')}>Completes</button>
				<button onClick={() => setDone('Important')}>Important</button>
			</div>
			<InputTodo addTask={addTask} todo={todo} setTodo={setTodo} />
			{taskTodoList}
		</div>
	)
}
export default App
