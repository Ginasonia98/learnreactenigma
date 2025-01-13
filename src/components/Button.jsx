import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-6">
      <div>
        {/* Menampilkan nilai state count di dalam elemen paragraf. */}
        <p>Count: {count}</p>
        <button
          className={`px-4 py-2 rounded-lg cursor-pointer text-white 
            ${count % 2 === 0 ? "bg-lightblue" : "bg-lightcoral"}`}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
      <div>
        {/* Menampilkan nilai state counts di dalam elemen paragraf. */}
        <p>Counts: {counts}</p>
        <button
          className={`px-4 py-2 rounded-lg cursor-pointer text-white 
            ${counts > 0 ? "bg-lightgreen" : "bg-lightgray"}`}
          onClick={() => setCounts(counts - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Button;
