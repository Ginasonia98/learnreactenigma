//pemahaman tentang form and list
import { useRef, useState } from "react";

function ToDoApp() {
  const inputRef = useRef(); // Referensi untuk input
  const [toDoItems, setToDoItems] = useState([]); // State untuk menyimpan item daftar tugas

  const addToDo = () => {
    const newTask = inputRef.current.value; // Ambil nilai dari input
    if (newTask.trim() !== "") { // Pastikan input tidak kosong
      setToDoItems([...toDoItems, newTask]); // Tambahkan ke daftar
      inputRef.current.value = ""; // Kosongkan input setelah menambahkan
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
      <div className="flex gap-4 mb-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter a task"
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={addToDo}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
      <ul className="list-decimal list-inside">
        {toDoItems.map((task, index) => (
          <li key={index} className="text-lg text-gray-700">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;