import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import CodeEditor from './components/CodeEditor/CodeEditor';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <CodeEditor />
      </main>
    </div>
  );
}

export default App;
