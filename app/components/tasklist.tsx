"use client";

import React, { useState, useEffect } from "react";
import { Input, Button, Select } from "@heroui/react";

/* ---------------- Types ---------------- */

interface Task {
  id: string;
  text: string;
  category: string;
  completed: boolean;
  createdAt: Date;
}

interface FilterOptions {
  status: "all" | "completed" | "incomplete";
  category?: string;
}

/* ---------------- Data ---------------- */

const categories = ["Work", "Personal", "Shopping", "Urgent"];

const categoryItems = categories.map((c) => ({
  label: c,
  value: c,
}));

const filterItems = [
  { label: "All Tasks", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Incomplete", value: "incomplete" },
];

/* ---------------- Component ---------------- */

export default function TaskList() {
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("Personal");

  const [tasks, setTasks] = useState<Task[]>([]);

  const [filter, setFilter] = useState<FilterOptions>({
    status: "all",
  });

  /* ---------- Load ---------- */
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const parsed = JSON.parse(saved).map((t: any) => ({
        ...t,
        createdAt: new Date(t.createdAt),
      }));
      setTasks(parsed);
    }
  }, []);

  /* ---------- Save ---------- */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /* ---------- Actions ---------- */

  const addTask = () => {
    if (!item.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text: item,
        category,
        completed: false,
        createdAt: new Date(),
      },
    ]);

    setItem("");
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  /* ---------- Filtering ---------- */

  const filtered = tasks.filter((t) => {
    if (filter.status === "completed") return t.completed;
    if (filter.status === "incomplete") return !t.completed;
    if (filter.category && t.category !== filter.category) return false;
    return true;
  });

  /* ---------- UI ---------- */

  return (
    <div className="flex flex-col items-center p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>

      {/* Inputs */}
      <div className="flex gap-4 w-full mb-4">
        <Select
          label="Category"
          selectedKey={category}
          onSelectionChange={(key) =>
            setCategory(String(key))
          }
          items={categoryItems}
        >
          {(item) => (
            <Select.Item key={item.value}>
              {item.label}
            </Select.Item>
          )}
        </Select>

        <Select
          label="Filter"
          selectedKey={filter.status}
          onSelectionChange={(key) =>
            setFilter((prev) => ({
              ...prev,
              status: String(key) as any,
            }))
          }
          items={filterItems}
        >
          {(item) => (
            <Select.Item key={item.value}>
              {item.label}
            </Select.Item>
          )}
        </Select>
      </div>

      {/* Add task */}
      <div className="flex gap-2 w-full mb-4">
        <Input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add task..."
        />

        <Button
          onPress={addTask}
          className="bg-blue-600 text-white"
        >
          Add
        </Button>
      </div>

      {/* List */}
      <div className="w-full space-y-2">
        {filtered.length === 0 ? (
          <p className="text-gray-400 text-center">
            No tasks
          </p>
        ) : (
          filtered.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center border p-3 rounded"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span
                  className={
                    task.completed
                      ? "line-through text-gray-400"
                      : ""
                  }
                >
                  {task.text}
                </span>
              </div>

              <Button
                size="sm"
                className="bg-red-600 text-white"
                onPress={() => deleteTask(task.id)}
              >
                Delete
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}