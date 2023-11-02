import React from 'react'
import ReactDOM from 'react-dom/client'
import { Cache, SWRConfig } from 'swr'
import App from './App.tsx'
import './index.css'
/**
 * Basic LocalStorage Based Persistent Cache example from SWR docs
 * @see https://swr.vercel.app/docs/advanced/cache#localstorage-based-persistent-cache
 */
function localStorageProvider() {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') ?? '[]'))

  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-cache', appCache)
  })

  // We still use the map for write & read for performance.
  return map as Cache
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SWRConfig value={{ provider: localStorageProvider }}>
      <App />
    </SWRConfig>
  </React.StrictMode>
)
