import React, { useState } from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'
import { GlobalContextProvider } from './contexts/GlobalContext'
import './App.css'
function App() {


  return (
    <div className="App">
      <GlobalContextProvider>
        <Editor />
        <Preview/>
      </GlobalContextProvider>
    </div>
  )
}

export default App
