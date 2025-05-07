import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useUser } from "@clerk/nextjs";

interface HistoryEntry {
  date: Date;
  courseName: string;
  score: string;
}

interface HistoryPopupProps {
  onClose: () => void;
}

const HistoryPopup: React.FC<HistoryPopupProps> = ({ onClose }) => {
  const { user } = useUser();
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/quiz-history?userId=${user?.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch history');
        }
        const data = await response.json();
        
        if (data.history) {
          setHistory(data.history);
        }
      } catch (error) {
        console.error('Error fetching history:', error);
        setError('Failed to load quiz history');
      } finally {
        setIsLoading(false);
      }
    };

    if (user?.id) {
      fetchHistory();
    }
  }, [user]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[600px] max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Quiz History</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <span className="text-2xl">×</span>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="text-center py-4">
              <p className="text-gray-500">Loading history...</p>
            </div>
          ) : error ? (
            <div className="text-center py-4">
              <p className="text-red-500">{error}</p>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-[#e84949] text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Course</th>
                  <th className="px-4 py-2 text-left">Score</th>
                </tr>
              </thead>
              <tbody>
                {history.map((entry, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">
                      {new Date(entry.date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2">{entry.courseName}</td>
                    <td className="px-4 py-2">{entry.score}</td>
                  </tr>
                ))}
                {!isLoading && history.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-4 py-2 text-center text-gray-500">
                      No quiz history available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryPopup;