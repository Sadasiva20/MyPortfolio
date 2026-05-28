"use client";

import { useState } from "react";
import { Card, Button } from "@heroui/react";

interface CardType {
  id: string;
  title: string;
}

interface ColumnType {
  id: string;
  name: string;
  cards: CardType[];
}

const initialColumns: ColumnType[] = [
  { id: "todo", name: "To Do", cards: [] },
  { id: "in-progress", name: "In Progress", cards: [] },
  { id: "done", name: "Done", cards: [] },
];

export default function KanbanBoard() {
  const [kanbanData, setKanbanData] =
    useState<ColumnType[]>(initialColumns);

  const moveCard = (cardId: string, targetColumnId: string) => {
    setKanbanData((prev) => {
      const data = [...prev];
      let movedCard: CardType | null = null;

      data.forEach((col) => {
        const index = col.cards.findIndex((c) => c.id === cardId);

        if (index !== -1) {
          movedCard = col.cards[index];
          col.cards.splice(index, 1);
        }
      });

      const target = data.find((c) => c.id === targetColumnId);

      if (target && movedCard) {
        target.cards.push(movedCard);
      }

      return data;
    });
  };

  const addCard = (columnId: string) => {
    setKanbanData((prev) => {
      const data = [...prev];

      const column = data.find((c) => c.id === columnId);

      if (column) {
        column.cards.push({
          id: Date.now().toString(),
          title: "New Task",
        });
      }

      return data;
    });
  };

  const updateTitle = (cardId: string, value: string) => {
    setKanbanData((prev) => {
      const data = [...prev];

      data.forEach((col) => {
        const card = col.cards.find((c) => c.id === cardId);
        if (card) card.title = value;
      });

      return data;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 flex justify-between">
        <h1 className="text-2xl font-bold">TaskPulse</h1>

        <div className="flex gap-3">
          <Button>Settings</Button>
          <Button>Profile</Button>
        </div>
      </nav>

      {/* Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 min-h-screen p-4">
          <h2 className="font-bold mb-2">Dashboard</h2>
          <ul className="space-y-2 text-sm">
            <li>Overview</li>
            <li>Analytics</li>
            <li>Reports</li>
          </ul>

          <h2 className="font-bold mt-6 mb-2">Projects</h2>
          <ul className="space-y-2 text-sm">
            <li>Active</li>
            <li>Archived</li>
            <li>+ New</li>
          </ul>
        </aside>

        {/* Board */}
        <main className="flex-1 p-8">
          <div className="flex gap-6 overflow-x-auto">
            {kanbanData.map((column) => (
              <div
                key={column.id}
                className="w-80 bg-white text-black rounded-lg p-4"
              >
                <h2 className="text-center font-bold mb-4">
                  {column.name}
                </h2>

                {/* Cards */}
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    const cardId =
                      e.dataTransfer.getData("cardId");
                    moveCard(cardId, column.id);
                  }}
                  className="space-y-3"
                >
                  {column.cards.map((card) => (
                    <div
                      key={card.id}
                      draggable
                      onDragStart={(e) =>
                        e.dataTransfer.setData(
                          "cardId",
                          card.id
                        )
                      }
                    >
                      <Card className="p-3 bg-blue-100">
                        <input
                          className="w-full bg-transparent outline-none"
                          value={card.title}
                          onChange={(e) =>
                            updateTitle(
                              card.id,
                              e.target.value
                            )
                          }
                        />
                      </Card>
                    </div>
                  ))}
                </div>

                {/* Add button */}
                <Button
                  className="mt-4 w-full"
                  onPress={() => addCard(column.id)}
                >
                  Add Card
                </Button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}