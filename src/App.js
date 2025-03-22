import React, { useState } from 'react'
import styles from './App.css'
import Header from './components/Header'
import InputTodo from './components/InputTodo'
import TaskTodo from './components/TaskTodo'

function App() {
	const [todo, setTodo] = useState('')
	const [tasks, setTasks] = useState([
		{
			id: 2343453,
			value: 'kjfhgkjfdhgjkdfhgkdhf',
			completed: false,
			active: false,
			importantId: false,
		},
		{
			id: 233,
			value: 'kjf',
			completed: false,
			active: false,
			importantId: false,
		},
		{
			id: 4576,
			value: 'fcghgdzfvfd',
			completed: false,
			active: false,
			importantId: false,
		},
		{
			id: 54657686,
			value: 'kjfhgkjfgkdhf',
			completed: true,
			active: false,
			importantId: false,
		},
	])
	const [done, setDone] = useState('')

	const addTask = () => {
		const taskTodo = {
			id: Math.random(),
			value: todo,
			completed: false,
			active: false,
			importantId: false,
		}
		if (todo.trim() === '') {
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
			e.id === id ? { ...e, completed: !e.completed } : { ...e }
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
				}
			} else {
				return e
			}
		})
		setTasks(important)
	}

	const switchTasks = (tasks) => {
		switch (done) {
			case 'ALL':
				return tasks

			case 'Active':
				return tasks.filter((e) => e.completed === false)

			case 'Completed':
				return tasks.filter((e) => e.completed === true)

			case 'Important':
				return tasks.filter((e) => e.importantId === true)

			default:
				return tasks
		}
	}

	const taskTodoList = switchTasks(tasks).map((e) => (
		<TaskTodo
			id={e.id}
			value={e.value}
			completed={e.completed}
			key={e.id}
			active={e.active}
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
				<button onClick={() => setDone('Completed')}>Completed</button>
				<button onClick={() => setDone('Important')}>Important</button>
			</div>
			<InputTodo addTask={addTask} todo={todo} setTodo={setTodo} />
			{taskTodoList}
		</div>
	)
}
export default App
