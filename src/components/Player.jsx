import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState("unknown entity");
  function handleClick() {
    setName(playerName.current.value);
  }
  return (
    <section id='player'>
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        {/* Input is now connected to the useRef */}
        <input ref={playerName} type='text' required />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
