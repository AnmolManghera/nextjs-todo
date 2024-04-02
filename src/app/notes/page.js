"use client";
import React, { useState } from "react";

export default function Notes() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [desc, setDesc] = useState("");
  const handleChange = (event) => {
    setNotes([...notes ,{note:title,content:desc}]);
  };
  return (
    <>
    
      
      <div className="mx-auto w-full max-w-7xl">
      
        <div className="mx-auto my-4 max-w-2xl md:my-6">
        {notes.map((item,index) => {
        return (
           
          <div className="w-[300px] rounded-md border"
           key = {index}
            >
            <div className="p-4">
              <h1 className="text-lg font-semibold">{item?.note}</h1>
              <p className="mt-3 text-sm text-gray-600">
               {item?.content}
              </p>
              
            </div>
          </div>
        );
      })}
          <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
            <p className="text-sm font-bold text-gray-900">Add Note</p>
            <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="firstName"
                >
                  Note Heading
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                  type="text"
                  placeholder="Enter the heading"
                  id="heading"
                  value = {title}
                  onChange={(e)=>setTitle(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="description"
                >
                  Description
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                  type="text"
                  placeholder="Enter the description"
                  id="lastName"
                  value = {desc}
                  onChange={(e)=>setDesc(e.target.value)}
                />
              </div>

              <div className="col-span-2 grid">
                <button
                  type="button"
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={handleChange}
                >
                  Add Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
