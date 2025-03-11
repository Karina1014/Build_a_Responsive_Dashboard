import React, { useState } from 'react';

const TableWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const data = [
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 34, city: 'Los Angeles' },
    { id: 3, name: 'Sam Johnson', age: 22, city: 'Chicago' },
  ];

  const openModal = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Tabla */}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Age</th>
            <th className="px-4 py-2 border-b">City</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="px-4 py-2 border-b">{row.name}</td>
              <td className="px-4 py-2 border-b">{row.age}</td>
              <td className="px-4 py-2 border-b">{row.city}</td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => openModal(row)}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && selectedRow && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold">Details</h2>
            <p className="mt-4"><strong>Name:</strong> {selectedRow.name}</p>
            <p><strong>Age:</strong> {selectedRow.age}</p>
            <p><strong>City:</strong> {selectedRow.city}</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableWithModal;
