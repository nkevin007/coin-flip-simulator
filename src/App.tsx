import { useState } from 'react';

function App() {
  const [flips, setFlips] = useState<number>(0);
  const [heads, setHeads] = useState<number>(0);
  const [tails, setTails] = useState<number>(0);

  const handleFlip = (count: number) => {
    let h = 0, t = 0;
    for (let i = 0; i < count; i++) {
      Math.random() < 0.5 ? h++ : t++;
    }
    setFlips(count);
    setHeads(h);
    setTails(t);
  };

  return (
    <div className="min-h-screen p-6 bg-blue-50 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-md">
        <h1 className="text-3xl font-bold mb-4">🎲 Virtual Coin Flip Simulator</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {[5, 10, 30, 100].map((num) => (
            <button key={num} onClick={() => handleFlip(num)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              {num}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Results:</h2>
          <p>Flips: {flips}</p>
          <p>Heads: {heads} ({((heads / flips) * 100 || 0).toFixed(1)}%)</p>
          <p>Tails: {tails} ({((tails / flips) * 100 || 0).toFixed(1)}%)</p>
        </div>
        <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded">
          <strong>Did You Know?</strong> The more flips you do, the closer the result gets to 50/50. This is called the Law of Large Numbers.
        </div>
      </div>
    </div>
  );
}

export default App;
