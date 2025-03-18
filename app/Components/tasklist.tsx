"use client";

interface Task {
  id: string;
  text: string;
  category: string;
  completed: boolean;
  createdAt: Date;
  dueDate?: Date;
  priority?: 'low' | 'medium' | 'high';
}
interface TaskStats {
  total: number;
  completed: number;
  incomplete: number;
  byCategory: {
    [key: string]: number;
  };
}

interface FilterOptions {
  category?: string;
  status?: 'all' | 'completed' | 'incomplete';
}

import React, { useState, useEffect } from "react";
import { Input, Button, Listbox, ListboxItem , Select, SelectItem } from "@heroui/react";

const categories = ["Work", "Personal", "Shopping", "Urgent"];
const SelectCategory = ({ category, setCategory }: { category: string; setCategory: (value: string) => void }) => {
  return (
    <Select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      placeholder="Select a category"
      className="w-48"
    >
      {categories.map((cat) => (
        <SelectItem key={cat}>
          {cat}
        </SelectItem>
      ))}
    </Select>
  );
};

const FilterSelect = ({ filter, setFilter }: { filter: string; setFilter: (value: string) => void }) => {
  return (
    <Select 
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Filter tasks"
      className="w-48"
    >
      <SelectItem key="all">All Tasks</SelectItem>
      <>
        {categories.map((cat) => (
          <SelectItem key={cat}>
            {cat}
          </SelectItem>
        ))}
      </>
      <SelectItem key="completed">Completed</SelectItem>
      <SelectItem key="incomplete">Incomplete</SelectItem>
    </Select>
  );
};


export default function TaskList() {
  // Add missing imports from @heroui/react:
  // Input - for task input
  // Button - for add/delete buttons  
  // Listbox/ListboxItem - for task list
  // Checkbox - for marking complete
  // Select/SelectItem - for category/filter dropdowns
  const [item, setItem] = useState<string>("");
  const [category, setCategory] = useState<string>("Personal");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterOptions>({ status: 'all' });

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addItem = () => {
    if (item.trim() !== "") {
      const newTask: Task = {
        id: Date.now().toString(),
        text: item,
        category,
        completed: false,
        createdAt: new Date()
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setItem("");
    }
  };

  const toggleComplete = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter.status === "completed") return task.completed;
    if (filter.status === "incomplete") return !task.completed;
    if (filter.category && task.category !== filter.category) return false;
    return true;
  });
  // Sort tasks by creation date, most recent first
  const sortedTasks = [...filteredTasks].sort((a, b) => 
    b.createdAt.getTime() - a.createdAt.getTime()
  );

  const stats: TaskStats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    incomplete: tasks.filter(t => !t.completed).length,
    byCategory: categories.reduce((acc, cat) => ({
      ...acc,
      [cat]: tasks.filter(t => t.category === cat).length
    }), {})
  };

  return (
    <div className="flex flex-col items-center p-6 border rounded-lg border-primary bg-white shadow-lg max-w-4xl mx-auto mt-10 w-full">
      <h1 className="text-2xl font-bold mb-4 text-primary">Task List</h1>
      
      <div className="flex gap-4 mb-4 w-full">
        <SelectCategory category={category} setCategory={setCategory} />
        <FilterSelect 
          filter={filter.status || 'all'} 
          setFilter={(value) => setFilter(prev => ({ ...prev, status: value as 'all' | 'completed' | 'incomplete' }))} 
        />
      </div>

      <Input
        type="text"
        label="Add item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="w-full mb-4"
      />
      <Button onPress={addItem} className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition duration-300">Add</Button>

      <div className="mt-4 text-sm text-gray-600">
        <div>Total: {stats.total} | Completed: {stats.completed} | Incomplete: {stats.incomplete}</div>
        <div className="mt-2">
          By Category: {Object.entries(stats.byCategory).map(([cat, count]) => (
            <span key={cat} className="mr-4">{cat}: {count}</span>
          ))}
        </div>
      </div>

      <Listbox
        aria-label="Item list"
        className="mt-6 w-full border rounded-md border-gray-300 bg-gray-50"
      >
        {sortedTasks.length === 0 ? (
          <ListboxItem className="p-4 text-gray-400 bg-gray-50 text-center" key={""}>
            No items available
          </ListboxItem>
        ) : (
          sortedTasks.map((task) => (
            <ListboxItem key={task.id} className="flex justify-between items-center p-4 border-b last:border-b-0 bg-white hover:bg-gray-100 transition duration-300">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  className="h-4 w-4"
                />
                <span className={`text-gray-700 ${task.completed ? 'line-through' : ''}`}>{task.text}</span>
              </div>
              <Button onPress={() => deleteTask(task.id)} size="sm" color="danger" className="ml-4 bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition duration-300">
                Delete
              </Button>
            </ListboxItem>
          ))
        )}
      </Listbox>
    </div>
  );
}

