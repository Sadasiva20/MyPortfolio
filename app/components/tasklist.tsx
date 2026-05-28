"use client";

import { useState } from "react";
import { Card, Button } from "@heroui/react";

/* ---------------- Types ---------------- */

interface CardType {
  id: string;
  title: string;
}

interface ColumnType {
  id: string;
  name: string;
  cards: CardType[];
}

/* ---------------- Data ---------------- */

const initialColumns: ColumnType[] = [
  { id: "todo", name: "To Do", cards: [] },
  { id: "in-progress", name: "In Progress", cards: [] },
  { id: "done", name: "Done", cards: [] },
];

/* ---------------- Component ---------------- */

export default function TaskPulse() {
  const [board, setBoard] = useState<ColumnType[]>(initialColumns);

  /* ---------- Move Card ---------- */
  const moveCard = (cardId: string, targetId: string) => {
    setBoard((prev) => {
      const data = structuredClone(prev);
      let moving: CardType | null = null;

      for (const col of data) {
        const index = col.cards.findIndex((c) => c.id === cardId);
        if (index !== -1) {
          moving = col.cards.splice(index, 1)[0];
        }
      }

      const target = data.find((c) => c.id === targetId);
      if (target && moving) target.cards.push(moving);

      return data;
    });
  };

  /* ---------- Add Card ---------- */
  const addCard = (columnId: string) => {
    setBoard((prev) => {
      const data = structuredClone(prev);

      const col = data.find((c) => c.id === columnId);
      if (col) {
        col.cards.push({
          id: Date.now().toString(),
          title: "New Task",
        });
      }

      return data;
    });
  };

  /* ---------- Update Title ---------- */
  const updateCard = (id: string, value: string) => {
    setBoard((prev) => {
      const data = structuredClone(prev);

      for (const col of data) {
        const card = col.cards.find((c) => c.id === id);
        if (card) card.title = value;
      }

      return data;
    });
  };

  /* ---------- Drag Helpers ---------- */
  const onDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData("cardId", id);
  };

  const onDrop = (e: React.DragEvent, columnId: string) => {
    const id = e.dataTransfer.getData("cardId");
    moveCard(id, columnId);
  };

  /* ---------- UI ---------- */

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between p-4 bg-gray-800">
        <h1 className="text-xl font-bold">TaskPulse</h1>

        <div className="flex gap-2">
          <Button className="bg-blue-600 text-white">Settings</Button>
          <Button className="bg-blue-600 text-white">Profile</Button>
        </div>
      </nav>

      {/* Board */}
      <div className="flex gap-6 p-6 overflow-x-auto">

        {board.map((col) => (
          <div
            key={col.id}
            className="w-80 bg-white text-black rounded-lg p-4"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, col.id)}
          >
            <h2 className="text-center font-bold mb-4">
              {col.name}
            </h2>

            {/* Cards */}
            <div className="space-y-3">
              {col.cards.map((card) => (
                <div
                  key={card.id}
                  draggable
                  onDragStart={(e) =>
                    onDragStart(e, card.id)
                  }
                >
                  <Card className="p-3 bg-blue-100">
                    <input
                      className="w-full bg-transparent outline-none"
                      value={card.title}
                      onChange={(e) =>
                        updateCard(card.id, e.target.value)
                      }
                    />
                  </Card>
                </div>
              ))}
            </div>

            {/* Add Button */}
            <Button
              className="mt-4 w-full bg-blue-600 text-white"
              onPress={() => addCard(col.id)}
            >
              Add Card
            </Button>
          </div>
        ))}

      </div>
    </div>
  );
}