"use client";

import React, { useState, useEffect } from "react";
import { Input, Button, Listbox, ListboxItem, Select } from "@heroui/react";

/* ---------------- Types ---------------- */

interface Task {
  id: string;
  text: string;
  category: string;
  completed: boolean;
  createdAt: Date;
}

interface FilterOptions {
  category?: string;
  status?: "all" | "completed" | "incomplete";
}

/* ---------------- Data ---------------- */

const categories = ["Work", "Personal", "Shopping", "Urgent"];

/* ---------------- Main ---------------- */

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
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  /* ---------- Filtering ---------- */
  const filtered = tasks.filter((task) => {
    if (filter.status === "completed") return task.completed;
    if (filter.status === "incomplete") return !task.completed;
    if (filter.category && task.category !== filter.category) return false;
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

      {/* CATEGORY SELECT (HeroUI v3 SAFE MODE) */}
      <Select
        label="Category"
        selectedKeys={new Set([category])}
        onSelectionChange={(keys) => {
          const value = Array.from(keys)[0] as string;
          if (value) setCategory(value);
        }}
        className="w-48 mb-4"
      >
        {categories.map((cat) => (
          <Select.Item key={cat} textValue={cat}>
            {cat}
          </Select.Item>
        ))}
      </Select>

      {/* FILTER SELECT */}
      <Select
        label="Filter"
        selectedKeys={new Set([filter.status || "all"])}
        onSelectionChange={(keys) => {
          const value = Array.from(keys)[0] as any;
          setFilter((prev) => ({ ...prev, status: value }));
        }}
        className="w-48 mb-4"
      >
        <Select.Item key="all" textValue="All Tasks">
          All Tasks
        </Select.Item>
        <Select.Item key="completed" textValue="Completed">
          Completed
        </Select.Item>
        <Select.Item key="incomplete" textValue="Incomplete">
          Incomplete
        </Select.Item>
      </Select>

      <Input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add task..."
        className="w-full mb-4"
      />

      <Button onPress={addItem} className="w-full">
        Add
      </Button>

      <Listbox className="mt-6 w-full">
        {sorted.length === 0 ? (
          <ListboxItem key="empty">No tasks</ListboxItem>
        ) : (
          sorted.map((task) => (
            <ListboxItem key={task.id}>
              <div className="flex justify-between w-full">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
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
                  color="danger"
                  onPress={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </div>
            </ListboxItem>
          ))
        )}
      </Listbox>
    </div>
  );
}