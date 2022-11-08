import { useState } from 'react'

const gift = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB Keyboard'
]
function App() {
  const [award, setAward] = useState()
  const handleGetAward = () => {
    const index = Math.floor(Math.random() * gift.length)
    setAward(gift[index])
  }
  return (
    <div className="App">
      <h1>{award||'Chưa có phần thưởng'}</h1>
      <button onClick={handleGetAward}>Lấy thưởng</button>
    </div>
  );
}

export default App;
