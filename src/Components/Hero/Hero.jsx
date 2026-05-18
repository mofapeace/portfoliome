import React, { useState, useRef, useEffect } from 'react'
import './Hero.css'
import profileImg from '../../../src/assets/profile-img.jpg'

const Hero = ({ setView }) => {
  const [history, setHistory] = useState([
    { text: 'System initialized. Secure portfolio shell v1.2.', type: 'info' },
    { text: 'Type "help" to view available simulator commands.', type: 'info' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll terminal to bottom
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const command = inputValue.trim().toLowerCase();
      const newHistory = [...history, { text: `guest@mofapeace:~$ ${inputValue}`, type: 'input' }];

      if (!command) {
        setHistory(newHistory);
        setInputValue('');
        return;
      }

      const args = command.split(' ');
      const baseCmd = args[0];

      switch (baseCmd) {
        case 'help':
          newHistory.push(
            { text: 'Available commands:', type: 'success' },
            { text: '  about      - Display brief professional bio', type: 'info' },
            { text: '  skills     - View core technology skill levels', type: 'info' },
            { text: '  nmap       - Simulate a security network port scan', type: 'info' },
            { text: '  ping       - Test network latency to portfolio host', type: 'info' },
            { text: '  matrix     - Activate digital matrix stream animation', type: 'info' },
            { text: '  secret     - Decrypt custom secure flag payload', type: 'info' },
            { text: '  clear      - Clear terminal console logs', type: 'info' }
          );
          setHistory(newHistory);
          break;
        case 'clear':
          setHistory([]);
          break;
        case 'about':
          newHistory.push(
            { text: 'Godlove Mofa | Frontend Developer & Cybersecurity Enthusiast', type: 'success' },
            { text: 'Cameroon-based engineer bridging UI/UX and secure web architectures.', type: 'info' },
            { text: 'Specialties: React, Linux Hardening, Basic Penetration Auditing.', type: 'info' }
          );
          setHistory(newHistory);
          break;
        case 'skills':
          newHistory.push(
            { text: 'Core Skills Audit:', type: 'success' },
            { text: '  Linux       [██████████████████░░░] 85%', type: 'info' },
            { text: '  Frontend    [█████████████████░░░░] 80%', type: 'info' },
            { text: '  Net Design  [█████████████████░░░░] 80%', type: 'info' },
            { text: '  Pentesting  [██████████████░░░░░░░] 65%', type: 'info' },
            { text: '  Design      [██████████░░░░░░░░░░░] 50%', type: 'info' }
          );
          setHistory(newHistory);
          break;
        case 'secret':
          newHistory.push(
            { text: '[+] Decrypting custom payload... SUCCESS', type: 'success' },
            { text: 'FLAG{M0FA_SECURE_DEV_2026_INITIATIVE}', type: 'success' }
          );
          setHistory(newHistory);
          break;
        case 'matrix':
          newHistory.push(
            { text: '01001101 01001111 01000110 01000001', type: 'success' },
            { text: '01010011 01000101 01000011 01010101', type: 'success' },
            { text: '01010010 01000101 01011111 00110010', type: 'success' },
            { text: 'Matrix mode initialized. System fully secure.', type: 'success' }
          );
          setHistory(newHistory);
          break;
        case 'ping':
          newHistory.push(
            { text: 'PING portfolio.mofa (192.168.1.1) 56(84) bytes of data.', type: 'info' },
            { text: '64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=4.32 ms', type: 'info' },
            { text: '64 bytes from 192.168.1.1: icmp_seq=2 ttl=64 time=3.81 ms', type: 'info' },
            { text: '--- portfolio.mofa ping statistics ---', type: 'info' },
            { text: '2 packets transmitted, 2 received, 0% packet loss, time 1002ms', type: 'info' }
          );
          setHistory(newHistory);
          break;
        case 'nmap':
          newHistory.push(
            { text: 'Starting Nmap 7.94 at 2026-05-18...', type: 'info' },
            { text: 'Initiating Ping Scan...', type: 'info' },
            { text: 'Scanning local-host (192.168.1.25)...', type: 'info' },
            { text: 'PORT     STATE SERVICE', type: 'success' },
            { text: '22/tcp   open  ssh (LUKS Hardened)', type: 'info' },
            { text: '80/tcp   open  http (Vite React Client)', type: 'info' },
            { text: '443/tcp  open  https (TLS v1.3 Protected)', type: 'info' },
            { text: 'Nmap scan finished: 1 host up in 0.84 seconds.', type: 'success' }
          );
          setHistory(newHistory);
          break;
        default:
          newHistory.push({ text: `bash: command not found: ${inputValue}. Type "help" for a list of commands.`, type: 'error' });
          setHistory(newHistory);
          break;
      }

      setInputValue('');
    }
  };

  return (
    <header id='home' className="hero fade-in">
      <div className="hero-left">
        <img src={profileImg} alt="profile" />
      </div>
      <div className="hero-main">
        <h1><span>mofa@host:~$</span> sudo run — build secure web apps</h1>
        <p>
          I design and secure modern web apps — frontend development fused with cybersecurity tooling and practices. I think in components and logs.
        </p>
        <div className="hero-action">
          <a href="#contact" className="hero-connect">Connect</a>
          <button onClick={() => setView('sandbox')} className="hero-sandbox-btn">Security Lab</button>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-resume">Resume</a>
        </div>
      </div>
      
      {/* Fully Interactive Shell Terminal Simulator */}
      <div className="hero-terminal-container" onClick={focusInput} title="Interactive Terminal">
        <div className="terminal-header">
          <div className="terminal-dot red"></div>
          <div className="terminal-dot yellow"></div>
          <div className="terminal-dot green"></div>
          <span className="terminal-title">bash - guest@mofapeace:~</span>
          <span className="terminal-badge">● INTERACTIVE - CLICK TO TYPE</span>
        </div>
        <div className="terminal-body">
          {history.map((line, index) => (
            <div key={index} className={`terminal-line ${line.type}`}>
              {line.text}
            </div>
          ))}
          <div className="terminal-input-line">
            <span className="prompt">guest@mofapeace:~$</span>
            <input 
              ref={inputRef}
              type="text" 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleCommand}
              className="terminal-input"
              placeholder="type 'help'..."
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              maxLength="36"
            />
          </div>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </header>
  )
}

export default Hero