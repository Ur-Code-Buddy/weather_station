import React from 'react';

type Feed = {
  created_at: string;
  entry_id: number;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
};

type DataTableProps = {
  feeds: Feed[];
};

const DataTable: React.FC<DataTableProps> = ({ feeds }) => {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg bg-white p-6">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gradient-to-r from-purple-600 to-purple-400 text-white">
          <tr>
            <th className="border px-6 py-3 text-left font-semibold">Entry ID</th>
            <th className="border px-6 py-3 text-left font-semibold">Created At</th>
            <th className="border px-6 py-3 text-left font-semibold">Field 1</th>
            <th className="border px-6 py-3 text-left font-semibold">Field 2</th>
            <th className="border px-6 py-3 text-left font-semibold">Field 3</th>
            <th className="border px-6 py-3 text-left font-semibold">Field 4</th>
          </tr>
        </thead>
        <tbody>
          {feeds.map((feed, index) => (
            <tr
              key={feed.entry_id}
              className={`${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              } hover:bg-gray-200 transition-colors`}
            >
              <td className="border px-6 py-3">{feed.entry_id}</td>
              <td className="border px-6 py-3">{feed.created_at}</td>
              <td className="border px-6 py-3">{feed.field1}</td>
              <td className="border px-6 py-3">{feed.field2}</td>
              <td className="border px-6 py-3">{feed.field3}</td>
              <td className="border px-6 py-3">{feed.field4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
