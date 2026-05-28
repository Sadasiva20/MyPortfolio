"use client";

import React, { useEffect, useState } from "react";
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
  category: string;
}

/* ---------------- Data ---------------- */

const categories = ["Work", "Personal", "Shopping", "Urgent"];

/* ---------------- Select Helper (HeroUI v3 FIXED) ---------------- */

function SelectField({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <Select
      selectedKey={value || null}
      onSelectionChange={(key) => {
        if (typeof key === "string") {
          onChange(key);
        }
      }}
      placeholder={placeholder}
      className="w-48"
    >
      {options.map((opt) => (
        <Select.Item key={opt}>{opt}</Select.Item>
      ))}
    </Select>
  );
}

/* ---------------- Main Component ---------------- */

export default function TaskList() {
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("Personal");

  const [tasks, setTasks] = useState<Task[]>([]);

  const [filter, setFilter] = useState<FilterOptions>({
    status: "all",
    category: "all",
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
    if (filter.status === "completed" && !t.completed) return false;
    if (filter.status === "incomplete" && t.completed) return false;
    if (filter.category !== "all" && t.category !== filter.category)
      return false;
    return true;
  });

  const sorted = [...filtered].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );

  /* ---------- UI ---------- */
  return (
    <div className="flex flex-col items-center p-6 border rounded-lg border-primary bg-white shadow-lg max-w-4xl mx-auto mt-10 w-full">
      <h1 className="text-2xl font-bold mb-4 text-primary">
        Task List
      </h1>

      {/* Filters */}
      <div className="flex gap-4 mb-4 w-full">
        <SelectField
          value={category}
          onChange={setCategory}
          options={categories}
          placeholder="Category"
        />

        <SelectField
          value={filter.status}
          onChange={(v) =>
            setFilter((p) => ({
              ...p,
              status: v as FilterOptions["status"],
            }))
          }
          options={["all", "completed", "incomplete"]}
          placeholder="Status"
        />
      </div>

      {/* Input */}
      <Input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add task"
        className="w-full mb-4"
      />

      <Button onPress={addTask} className="w-full">
        Add Task
      </Button>

      {/* Task List (NO Listbox — fully fixed) */}
      <div className="mt-6 w-full space-y-2">
        {sorted.length === 0 ? (
          <p className="text-center text-gray-400">
            No tasks available
          </p>
        ) : (
          sorted.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center p-3 border rounded-md bg-gray-50"
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
                      ? "line-through text-gray-500"
                      : ""
                  }
                >
                  {task.text}
                </span>
              </div>

              <Button
                size="sm"
                color="danger"
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