import { useState } from "react"



function App() {
  const [Color, setColor] = useState("black")

  return (
    <div className="w-full h-screen" style={{ backgroundColor: Color }}>
      <div className="fixed bottom-2 flex item-center flex-wrap gap-2  justify-center w-full px-4 py-2">
        <button onClick={() => setColor("red")} className="outline-none rounded-full px-3 py-1 item-center text-white" style={{ backgroundColor: "red" }}>red</button>
        <button onClick={() => setColor("green")} className="outline-none rounded-full px-3 py-1 item-center text-white" style={{ backgroundColor: "green" }}>green</button>
        <button onClick={() => setColor("purple")} className="outline-none rounded-full px-3 py-1 item-center text-white" style={{ backgroundColor: "purple" }}>Purple</button>
        <button onClick={() => setColor("blue")} className="outline-none rounded-full px-3 py-1 item-center text-white" style={{ backgroundColor: "blue" }}>blue</button>
        <button onClick={() => setColor("pink")} className="outline-none rounded-full px-3 py-1 item-center text-white" style={{ backgroundColor: "pink" }}>Pink</button>
        <button onClick={() => setColor("brown")} className="outline-none rounded-full px-3 py-1 item-center text-white" style={{ backgroundColor: "brown" }}>brown</button>
        <button onClick={() => setColor("yellow")} className="outline-none rounded-full px-3 py-1 item-center text-white" style={{ backgroundColor: "yellow" }}>yellow</button>



      </div>
    </div>
  )
}

export default App
