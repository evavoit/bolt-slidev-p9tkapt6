import { useState } from 'react';

interface CounterProps {
  count?: number;
}

export function Counter({ count = 0 }: CounterProps) {
  const [counter, setCounter] = useState(count);

  return (
    <div className="flex w-min border-gray-400 border-opacity-50 rounded-md">
      <button
        className="border-r border-gray-400 border-opacity-50 p-2 font-mono hover:bg-gray-400 hover:bg-opacity-20 focus:outline-none"
        onClick={() => setCounter(prev => prev - 1)}
      >
        -
      </button>
      <span className="m-auto p-2">{counter}</span>
      <button
        className="border-l border-gray-400 border-opacity-50 p-2 font-mono hover:bg-gray-400 hover:bg-opacity-20 focus:outline-none"
        onClick={() => setCounter(prev => prev + 1)}
      >
        +
      </button>
    </div>
  );
}