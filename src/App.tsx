import { useState } from "react";

function App() {
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [lastFlip, setLastFlip] = useState<string | null>(null);
  const [customFlips, setCustomFlips] = useState(10);

  const totalFlips = heads + tails;

  const flipOnce = () => {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    setLastFlip(result);

    if (result === "Heads") {
      setHeads((h) => h + 1);
    } else {
      setTails((t) => t + 1);
    }
  };

  const flipMultiple = (count: number) => {
    let h = 0;
    let t = 0;

    for (let i = 0; i < count; i++) {
      Math.random() < 0.5 ? h++ : t++;
    }

    setHeads((prev) => prev + h);
    setTails((prev) => prev + t);
    setLastFlip(null);
  };

  const reset = () => {
    setHeads(0);
    setTails(0);
    setLastFlip(null);
  };

  const headsPercent =
    totalFlips === 0 ? 0 : ((heads / totalFlips) * 100).toFixed(1);
  const tailsPercent =
    totalFlips === 0 ? 0 : ((tails / totalFlips) * 100).toFixed(1);

  return (
    <div style={{ padding: "2rem", fontFamily: "Georgia" }}>
      <h1>🎲 Virtual Coin Flip Simulator</h1>

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => flipMultiple(5)}>5</button>{" "}
        <button onClick={() => flipMultiple(10)}>10</button>{" "}
        <button onClick={() => flipMultiple(30)}>30</button>{" "}
        <button onClick={() => flipMultiple(100)}>100</button>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={flipOnce}>Manual Flip</button>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="number"
          min={1}
          value={customFlips}
          onChange={(e) => setCustomFlips(Number(e.target.value))}
          style={{ width: "80px", marginRight: "8px" }}
        />
        <button onClick={() => flipMultiple(customFlips)}>
          Run Custom Flips
        </button>
      </div>

      <h2>Results:</h2>

      <p>Flips: {totalFlips}</p>
      <p>Heads: {heads} ({headsPercent}%)</p>
      <p>Tails: {tails} ({tailsPercent}%)</p>

      {lastFlip && (
        <p>
          <strong>Last flip:</strong> {lastFlip}
        </p>
      )}

      <button onClick={reset} style={{ marginTop: "1rem" }}>
        Reset
      </button>

      <p style={{ marginTop: "1.5rem" }}>
        <strong>Did You Know?</strong> The more flips you do, the closer the
        result gets to 50/50. This is called the Law of Large Numbers.
      </p>
    </div>
  );
}

export default App;
