import React, { useState } from "react";
import { useEffect } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
	const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

	const handleAdd = (todo) => {
		//새로운 todo를 todos에 업데이트 해야함.
		setTodos([...todos, todo]);
	};
	const handleUpdate = (updated) => {
		setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
	};
	const handleDelete = (deleted) => {
		setTodos(todos.filter((t) => t.id !== deleted.id));
	};

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]); //배열을 저장하기 위해서는 JSON으로 변환해줘야함.

	const filtered = getFilterItems(todos, filter);

	return (
		<section className={styles.container}>
			<h3 className={styles.title}> - TodoList</h3>
			<ul className={styles.list}>
				{filtered.map((item) => (
					<Todo
						key={item.id}
						todo={item}
						onUpdate={handleUpdate}
						onDelete={handleDelete}
					/>
				))}
			</ul>
			<AddTodo onAdd={handleAdd} />
		</section>
	);
}

function readTodosFromLocalStorage() {
	const todos = localStorage.getItem("todos");
	return todos ? JSON.parse(todos) : [];
}

function getFilterItems(todos, filter) {
	if (filter === "all") {
		return todos;
	}
	return todos.filter((todo) => todo.status === filter);
}
