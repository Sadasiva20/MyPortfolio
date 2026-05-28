"use client";

import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  Listbox,
  ListboxItem,
  Select,
  SelectItem,
} from "@heroui/react";

/* ---------------- Types ---------------- */

interface Task {
  id: string;
  text: string;
  category: string;
  completed: boolean;
  createdAt: Date;
  dueDate?: Date;
  priority?: "low" | "medium" | "high";
}

interface TaskStats {
  total: number;
  completed: number;
  incomplete: number;
  byCategory: Record<string, number>;
}

interface FilterOptions {
  category?: string;
  status?: "all" | "completed" | "incomplete";
}

/* ---------------- Data ---------------- */

const categories = ["Work", "Personal", "Shopping", "Urgent"];

/* ---------------- Select Components ---------------- */

const SelectCategory = ({
  category,
  setCategory,
}: {
  category: string;
  setCategory: (value: string) => void;
}) => {
  return (
    <Select
      selectedKeys={new Set([category])}
      onSelectionChange={(keys) => {
        const value = Array.from(keys)[0] as string | undefined;
        if (value) setCategory(value);
      }}
      placeholder="Select a category"
      className="w-48"
    >
      {categories.map((cat) => (
        <SelectItem key={cat}>{cat}</SelectItem>
      ))}
    </Select>
  );
};

const FilterSelect = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (value: string) => void;
}) => {
  return (
    <Select
      selectedKeys={new Set([filter])}
      onSelectionChange={(keys) => {
        const value = Array.from(keys)[0] as string | undefined;
        if (value) setFilter(value);
      }}
      placeholder="Filter tasks"
      className="w-48"
    >
      <SelectItem key="all">All Tasks</SelectItem>
      <SelectItem key="completed">Completed</SelectItem>
      <SelectItem key="incomplete">Incomplete</SelectItem>
      {categories.map((cat) => (
        <SelectItem key={cat}>{cat}</SelectItem>
      ))}
    </Select>
  );
};

/* ---------------- Main Component ---------------- */

export default function TaskList() {
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("Personal");

  const [tasks, setTasks] = useState<Task[]>([]);

  const [filter, setFilter] = useState<FilterOptions>({
    status: "all",
  });

  /* ---------- Load ---------- */
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      const parsed = JSON.parse(savedTasks).map((task: any) => ({
        ...task,
        createdAt: new Date(task.createdAt),
        dueDate: task.dueDate ? new Date(task.dueDate) : undefined,
      }));

      setTasks(parsed);
    }
  }, []);

  /* ---------- Save ---------- */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /* ---------- Actions ---------- */
  const addItem = () => {
    if (!item.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      text: item,
      category,
      completed: false,
      createdAt: new Date(),
    };

    setTasks((prev) => [...prev, newTask]);
    setItem("");
  };

  const toggleComplete = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  /* ---------- Filtering ---------- */
  const filteredTasks = tasks.filter((task) => {
    if (filter.status === "completed") return task.completed;
    if (filter.status === "incomplete") return !task.completed;
    if (filter.category && task.category !== filter.category) return false;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );

  /* ---------- Stats ---------- */
  const stats: TaskStats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    incomplete: tasks.filter((t) => !t.completed).length,
    byCategory: categories.reduce((acc, cat) => {
      acc[cat] = tasks.filter((t) => t.category === cat).length;
      return acc;
    }, {} as Record<string, number>),
  };

  /* ---------- UI ---------- */
  return (
    <div className="flex flex-col items-center p-6 border rounded-lg border-primary bg-white shadow-lg max-w-4xl mx-auto mt-10 w-full">
      <h1 className="text-2xl font-bold mb-4 text-primary">
        Task List
      </h1>

      <div className="flex gap-4 mb-4 w-full">
        <SelectCategory category={category} setCategory={setCategory} />

        <FilterSelect
          filter={filter.status || "all"}
          setFilter={(value) =>
            setFilter((prev) => ({
              ...prev,
              status: value as "all" | "completed" | "incomplete",
            }))
          }
        />
      </div>

      <Input
        type="text"
        label="Add item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="w-full mb-4"
      />

      <Button
        onPress={addItem}
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition"
      >
        Add
      </Button>

      {/* Stats */}
      <div className="mt-4 text-sm text-gray-600">
        <div>
          Total: {stats.total} | Completed: {stats.completed} | Incomplete:{" "}
          {stats.incomplete}
        </div>

        <div className="mt-2">
          By Category:{" "}
          {Object.entries(stats.byCategory).map(([cat, count]) => (
            <span key={cat} className="mr-4">
              {cat}: {count}
            </span>
          ))}
        </div>
      </div>

      {/* List */}
      <Listbox className="mt-6 w-full border rounded-md border-gray-300 bg-gray-50">
        {sortedTasks.length === 0 ? (
          <ListboxItem key="empty" className="p-4 text-gray-400 text-center">
            No items available
          </ListboxItem>
        ) : (
          sortedTasks.map((task) => (
            <ListboxItem
              key={task.id}
              className="flex justify-between items-center p-4 bg-white hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />
                <span
                  className={
                    task.completed ? "line-through text-gray-500" : ""
                  }
                >
                  {task.text}
                </span>
              </div>

              <Button
                onPress={() => deleteTask(task.id)}
                size="sm"
                color="danger"
              >
                Delete
              </Button>
            </ListboxItem>
          ))
        )}
      </Listbox>
    </div>
  );
}