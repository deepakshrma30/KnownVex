"use client";

import React, { useEffect, useState } from 'react';

function AdminData() {
  const [activeTab, setActiveTab] = useState('orders'); 

  const [queries, setQueries] = useState([
    {
      queryId: "1",
      name: "John Doe",
      email: "john@example.com",
      phoneNumber: "123-456-7890",
      message: "I need help with my account.",
      status: "PENDING",
      createdAt: "2024-10-06T19:18:07.429Z",
      updatedAt: "2024-10-06T19:18:07.429Z",
    },
    {
      queryId: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      phoneNumber: "987-654-3210",
      message: "How do I change my password?",
      status: "PENDING",
      createdAt: "2024-10-05T15:12:47.000Z",
      updatedAt: "2024-10-05T15:12:47.000Z",
    },
    {
      queryId: "3",
      name: "Sam Wilson",
      email: "sam@example.com",
      phoneNumber: "456-789-0123",
      message: "Can you assist with my order?",
      status: "RESOLVED",
      createdAt: "2024-09-30T10:20:22.000Z",
      updatedAt: "2024-09-30T10:20:22.000Z",
    },
  ]);

  //TODO fetch query when first toggled to query tab

  const resolveQuery = async (queryId:any) => {
    const updatedQueries:any = queries.map((query:any) =>
      query.queryId === queryId ? { ...query, status: "RESOLVED" } : query
    );
    setQueries(updatedQueries);

    // TODO update query call
  };

  return (
    <div className='container mx-auto p-4'>
      {/* Toggle buttons */}
      <div className='flex justify-center mb-6'>
        <button
          className={`px-4 py-2 rounded-l-lg focus:outline-none ${
            activeTab === 'orders' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('orders')}
        >
          Orders
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg focus:outline-none ${
            activeTab === 'queries' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('queries')}
        >
          Queries
        </button>
      </div>

      {/* Conditional rendering based on activeTab */}
      <div>
        {activeTab === 'orders' ? (
          <div className='bg-gray-100 p-4'>
            <h2 className='text-xl font-semibold'>Orders Data</h2>
            {/* Orders content */}
            <p>Here you can manage all your orders.</p>
          </div>
        ) : (
          <div className='bg-gray-100 p-4'>
            <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Queries</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Phone</th>
            <th className="px-4 py-2 border">Message</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((query) => (
            <tr key={query.queryId}>
              <td className="px-4 py-2 border">{query.name}</td>
              <td className="px-4 py-2 border">{query.email}</td>
              <td className="px-4 py-2 border">{query.phoneNumber}</td>
              <td className="px-4 py-2 border">{query.message}</td>
              <td className="px-4 py-2 border">{query.status}</td>
              <td className="px-4 py-2 border">
                {query.status === "PENDING" ? (
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => resolveQuery(query.queryId)}
                  >
                    Mark as Resolved
                  </button>
                ) : (
                  <span className="text-green-500">Resolved</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminData;
