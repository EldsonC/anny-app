import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Global from './assets/styles/global.ts'
import { Provider } from 'react-redux'
import store from './redux/store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global/>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

// Tudo tem um começo e um fim, mas só consigo ver um fim ao lado dela.
// Marya Eduarda, ela é capaz de decifrar qualquer ponto fraco meu.
// Capaz de olhar para o nada e ver tudo. É ela que pode ver quem realmente sou.
