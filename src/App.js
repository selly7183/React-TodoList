import { useState } from "react";
import "./App.css";
import { DarkModeProvider } from "./components/context/DarkModeContext";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const filters = ["all", "active", "completed"];
function App() {
	const [filter, setFilter] = useState(filters[0]);
	return (
		<DarkModeProvider>
			<Header
				filters={filters}
				filter={filter}
				onFilterChange={setFilter}
				//onFilterChange={filter=>setFilter(filter)}
			/>
			<TodoList filter={filter} />
		</DarkModeProvider>
	);
}

export default App;
