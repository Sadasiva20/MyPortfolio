"use client";

import { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Input,
} from "@heroui/react";

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

/* ---------------- Initial Data ---------------- */

const initialColumns: ColumnType[] = [
  { id: "todo", name: "To Do", cards: [] },
  { id: "in-progress", name: "In Progress", cards: [] },
  { id: "done", name: "Done", cards: [] },
];

/* ---------------- Component ---------------- */

export default function KanbanBoard() {
  const [kanbanData, setKanbanData] =
    useState<ColumnType[]>(initialColumns);

  /* ---------------- Move Card ---------------- */

  const moveCard = (
    cardId: string,
    targetColumnId: string
  ) => {
    setKanbanData((prev) => {
      let movedCard: CardType | null = null;

      const updated = prev.map((col) => {
        const remaining = col.cards.filter((card) => {
          if (card.id === cardId) {
            movedCard = card;
            return false;
          }
          return true;
        });

        return { ...col, cards: remaining };
      });

      return updated.map((col) => {
        if (col.id === targetColumnId && movedCard) {
          return {
            ...col,
            cards: [...col.cards, movedCard],
          };
        }
        return col;
      });
    });
  };

  /* ---------------- Update Title ---------------- */

  const handleCardTitleChange = (
    cardId: string,
    newTitle: string
  ) => {
    setKanbanData((prev) =>
      prev.map((col) => ({
        ...col,
        cards: col.cards.map((card) =>
          card.id === cardId
            ? { ...card, title: newTitle }
            : card
        ),
      }))
    );
  };

  /* ---------------- Add Card ---------------- */

  const addCard = (columnId: string) => {
    const newCard: CardType = {
      id: Date.now().toString(),
      title: "New Task",
    };

    setKanbanData((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? {
              ...col,
              cards: [...col.cards, newCard],
            }
          : col
      )
    );
  };

  /* ---------------- Delete Card ---------------- */

  const deleteCard = (
    cardId: string,
    columnId: string
  ) => {
    setKanbanData((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? {
              ...col,
              cards: col.cards.filter(
                (c) => c.id !== cardId
              ),
            }
          : col
      )
    );
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Top Bar */}
      <nav className="bg-gray-800 p-4 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">
            TaskPulse
          </h1>

          <div className="flex gap-4">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Settings
            </Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Profile
            </Button>
          </div>
        </div>
      </nav>

      {/* Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 min-h-screen p-4 border-r border-gray-700 text-white">
          <h2 className="text-xl font-semibold mb-4">
            Dashboard
          </h2>

          <ul className="space-y-2 mb-6">
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Overview
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Analytics
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Reports
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">
            Projects
          </h2>

          <ul className="space-y-2 mb-6">
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Active
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Archived
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              + New Project
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">
            Team
          </h2>

          <ul className="space-y-2">
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Members
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Calendar
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Messages
            </li>
          </ul>
        </aside>

        {/* Board */}
        <main className="flex-1 p-8">
          <div className="border-2 border-blue-800 rounded-xl p-6 bg-white/5 backdrop-blur-sm">
            <h1 className="text-3xl font-bold text-center text-white mb-8">
              TaskPulse
            </h1>

            <div className="flex gap-6 overflow-x-auto">
              {kanbanData.map((column) => (
                <div
                  key={column.id}
                  className="min-w-[320px] bg-white rounded-xl p-4 shadow-lg"
                  onDragOver={(e) =>
                    e.preventDefault()
                  }
                  onDrop={(e) => {
                    const cardId =
                      e.dataTransfer.getData(
                        "cardId"
                      );
                    moveCard(cardId, column.id);
                  }}
                >
                  <h2 className="text-xl font-semibold text-center mb-4">
                    {column.name}
                  </h2>

                  <div className="space-y-4">
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
                        <Card className="bg-blue-100 hover:bg-blue-200">
                          <CardBody className="space-y-2">
                            <Input
                              value={card.title}
                              onChange={(e) =>
                                handleCardTitleChange(
                                  card.id,
                                  e.target.value
                                )
                              }
                            />

                            <Button
                              size="sm"
                              color="danger"
                              onPress={() =>
                                deleteCard(
                                  card.id,
                                  column.id
                                )
                              }
                            >
                              Delete
                            </Button>
                          </CardBody>
                        </Card>
                      </div>
                    ))}

                    <Button
                      className="w-full bg-blue-500 text-white"
                      onPress={() =>
                        addCard(column.id)
                      }
                    >
                      Add Card
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}