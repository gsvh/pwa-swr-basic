import { useState } from 'react'
import './App.css'
import { convertToTimeFormat, getButtonText } from './helpers'
import { useInternetConnectivity } from './hooks/useInternetConnectivity'
import { useTime } from './hooks/useTime'
import reactLogo from '/assets/react.svg'
import viteLogo from '/assets/vite.svg'
import pizzaLogo from '/icons/ios/256.png'

function App() {
  const { isOnline } = useInternetConnectivity()
  const [browserTime, setBrowserTime] = useState(
    convertToTimeFormat(new Date())
  )

  const { time, timeIsUpdating, fetchTime, error } = useTime()

  const updateTime = () => {
    setBrowserTime(convertToTimeFormat(new Date()))
    isOnline && fetchTime()
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <img src={pizzaLogo} className="logo pizza" alt="pizza" />
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>PWA with SWR cache demo</h1>
      <h2>Browser time:</h2>
      <h3>{browserTime}</h3>
      <h2>API time:</h2>
      <h3>
        {timeIsUpdating ? 'Updating...' : convertToTimeFormat(time?.datetime)}{' '}
      </h3>
      {error ? (
        <div className="error">
          <code>{error}</code>
        </div>
      ) : null}
      <div className="card">
        <button onClick={updateTime}>
          {getButtonText(isOnline, timeIsUpdating)}
        </button>
      </div>
      <code className="read-the-docs">
        Status: {isOnline ? 'Online 🟢' : 'Offline 🔴'}
      </code>
    </>
  )
}

export default App
