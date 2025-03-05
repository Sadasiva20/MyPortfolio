"use client";

import React, { useState } from "react";
import { Input, Button, Listbox, ListboxItem } from "@heroui/react";

export default function TaskList() {
  const [item, setItem] = useState<string>(""); // State for the input item
  const [items, setItems] = useState<string[]>([]); // State for the list of items

  const addItem = () => {
    if (item.trim() !== "") {
      setItems((prevItems) => [...prevItems, item]); // Add the item to the list
      setItem(""); // Clear the input field
    }
  };

  const deleteItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index); // Remove the item at the specified index
    setItems(newItems); // Update the list
  };

  return (
    <div className="flex flex-col items-center p-6 border rounded-lg border-primary bg-white shadow-lg max-w-4xl mx-auto mt-10 w-full">
      <h1 className="text-2xl font-bold mb-4 text-primary">Task List</h1>
      <Input
        type="text"
        label="Add item"
        value={item}
        onChange={(e) => setItem(e.target.value)} // Update input state
        className="w-full mb-4"
      />
      <Button onPress={addItem} className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition duration-300">Add</Button>

      <Listbox
        aria-label="Item list"
        className="mt-6 w-full border rounded-md border-gray-300 bg-gray-50"
      >
        {items.length === 0 ? (
          <ListboxItem className="p-4 text-gray-500 bg-gray-100 text-center" key={""}>
            No items available
          </ListboxItem>
        ) : (
          items.map((listItem, index) => (
            <ListboxItem key={index} className="flex justify-between items-center p-4 border-b last:border-b-0 bg-white hover:bg-gray-100 transition duration-300">
              <span className="text-gray-700">{listItem}</span>
              <Button onPress={() => deleteItem(index)} size="sm" color="danger" className="ml-4 bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition duration-300">
                Delete
              </Button>
            </ListboxItem>
          ))
        )}
      </Listbox>
    </div>
  );
}
