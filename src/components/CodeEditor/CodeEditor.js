import React, { useState } from 'react';
import './CodeEditor.css';

function CodeEditor() {
  const [code, setCode] = useState('// Write your code here...');

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <section className="code-editor" id="editor">
      <div className="container">
        <h2>Try CodeAnt AI</h2>
        <div className="editor-container">
          <div className="editor-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <textarea
            className="editor-textarea"
            value={code}
            onChange={handleCodeChange}
            spellCheck="false"
          />
        </div>
        <button className="analyze-button">Analyze Code</button>
      </div>
    </section>
  );
}

export default CodeEditor; 