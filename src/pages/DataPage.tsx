import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DataTable from '../components/DataTable';

type Feed = {
  created_at: string;
  entry_id: number;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
};

const DataPage: React.FC = () => {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      alert('You must log in to access the data page.');
      navigate('/');
    } else {
      axios
        .get('https://api.thingspeak.com/channels/2748725/feeds.json')
        .then((response) => {
          setFeeds(response.data.feeds);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-600 p-6 flex flex-col items-center">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-8 mt-6">
        <h1 className="text-4xl font-extrabold text-center text-purple-800 mb-8">
          Welcome to the Data Page
        </h1>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md py-4 px-6 mb-6">
          <h2 className="text-xl font-semibold text-white">Data Overview</h2>
          <p className="text-sm text-white mt-2">
            Here you can view all the data collected in real time. Make sure to log in to access this page!
          </p>
        </div>

        {/* Data Table */}
        <DataTable feeds={feeds} />
      </div>
    </div>
  );
};

export default DataPage;
