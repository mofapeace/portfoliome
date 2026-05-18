import React, { useState, useEffect, useRef } from 'react';
import './SecuritySandbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faArrowLeft, faCircleNotch, faCheckCircle, faTriangleExclamation, faInfoCircle, faPlay, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const SecuritySandbox = ({ setView }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [shieldActive, setShieldActive] = useState(true);
  const [scanLogs, setScanLogs] = useState([]);
  const [trafficLogs, setTrafficLogs] = useState([
    { id: 1, type: 'success', msg: 'TCP handshake established on port 443 from 104.28.12.9 (US)' },
    { id: 2, type: 'warn', msg: 'Mitigated login scan on port 22 (SSH rate-limited) from 185.220.101.2 (DE)' },
    { id: 3, type: 'success', msg: 'GET /assets/logo.jpg completed 200 OK in 14ms from 198.51.100.4 (FR)' }
  ]);

  const logEndRef = useRef(null);

  // Auto-scroll firewall logs
  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [trafficLogs]);

  // Handle simulated active scanning
  const startAudit = () => {
    if (isScanning) return;
    setIsScanning(true);
    setScanProgress(0);
    setScanLogs([]);

    const steps = [
      { delay: 400, log: 'Initializing local dependency auditor...' },
      { delay: 1000, log: '[✓] 0 critical vulnerabilities found in 58 modules.' },
      { delay: 1600, log: 'Verifying active SSL/TLS handshake configurations...' },
      { delay: 2200, log: '[✓] TLS v1.3 handshake enforced. Perfect Forward Secrecy active.' },
      { delay: 2800, log: 'Scanning client input sanitizers...' },
      { delay: 3400, log: '[✓] Secure regex email forms validated. XSS sanitisation active.' },
      { delay: 4000, log: 'Auditing secure HTTP response compliance...' },
      { delay: 4600, log: '[✓] CORS and Referrer policies verified safe.' },
      { delay: 5000, log: 'COMPLETED: Portfolio security score: 100/100 (Grade A+)' }
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setScanLogs(prev => [...prev, step.log]);
        setScanProgress(Math.floor(((idx + 1) / steps.length) * 100));
        if (idx === steps.length - 1) {
          setIsScanning(false);
        }
      }, step.delay);
    });
  };

  // Generate live firewall packets
  useEffect(() => {
    const ips = ['192.168.1.102', '104.244.42.1', '198.51.100.8', '185.220.101.99', '203.0.113.12'];
    const countries = ['US', 'DE', 'FR', 'NL', 'CA'];
    const actions = [
      { type: 'success', template: 'GET /portfolio/showcase loaded 200 OK from {ip} ({country})' },
      { type: 'success', template: 'GET /api/projects?q=react parsed safely in 8ms from {ip} ({country})' },
      { type: 'warn', template: 'Mitigated brute force crawler scan on port 8080 from {ip} ({country})' },
      { type: 'success', template: 'Web3Forms API securely sanitised submission from {ip} ({country})' }
    ];

    const interval = setInterval(() => {
      const selectedIp = ips[Math.floor(Math.random() * ips.length)];
      const selectedCountry = countries[Math.floor(Math.random() * countries.length)];
      const selectedAction = actions[Math.floor(Math.random() * actions.length)];

      let finalMsg = selectedAction.template
        .replace('{ip}', selectedIp)
        .replace('{country}', selectedCountry);

      // If shield is active, block threat logs automatically
      let finalType = selectedAction.type;
      if (finalType === 'warn' && shieldActive) {
        finalMsg = `[BLOCKED] Threat mitigated: Web Application Firewall dropped packets from ${selectedIp} (${selectedCountry})`;
        finalType = 'danger';
      }

      setTrafficLogs(prev => [
        ...prev.slice(-20), // Keep log size small
        { id: Date.now(), type: finalType, msg: finalMsg }
      ]);
    }, shieldActive ? 2200 : 1200); // Logs arrive faster when unsafely unshielded!

    return () => clearInterval(interval);
  }, [shieldActive]);

  return (
    <div className={`sandbox-container fade-in ${shieldActive ? 'shield-on' : 'shield-off'}`}>
      <div className="sandbox-header">
        <button className="sandbox-back-btn" onClick={() => { setView('home'); window.scrollTo(0, 0); }}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Dashboard
        </button>
        <div className="sandbox-brand">
          <FontAwesomeIcon icon={faShieldHalved} className="shield-brand-icon" />
          <h1>Security Auditing Lab</h1>
        </div>
      </div>

      <div className="sandbox-grid">
        {/* Left Column: Auditing Panel */}
        <section className="sandbox-card audit-panel">
          <div className="card-header">
            <h2>Site Security Audit</h2>
            <p>Run a real-time vulnerability scan of this static portfolio bundle.</p>
          </div>
          <div className="card-body">
            <button 
              className={`scan-btn ${isScanning ? 'disabled' : ''}`} 
              onClick={startAudit}
              disabled={isScanning}
            >
              {isScanning ? (
                <>
                  <FontAwesomeIcon icon={faCircleNotch} spin /> Scanning ({scanProgress}%)
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPlay} /> Initiate Compliance Audit
                </>
              )}
            </button>

            {/* Scan Progress Bar */}
            <div className="audit-progress-bar">
              <div className="audit-progress-fill" style={{ width: `${scanProgress}%` }} />
            </div>

            <div className="audit-console">
              {scanLogs.length === 0 ? (
                <div className="console-placeholder">Console idle. Press button to audit system modules.</div>
              ) : (
                scanLogs.map((log, index) => (
                  <div key={index} className="console-line">
                    <span className="console-bullet">❯</span> {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Right Column: Live Firewall */}
        <section className="sandbox-card firewall-panel">
          <div className="card-header">
            <div className="title-row">
              <h2>Real-time Traffic Firewall</h2>
              <button className="shield-toggle" onClick={() => setShieldActive(!shieldActive)} title="Toggle WAF Shield">
                <FontAwesomeIcon icon={shieldActive ? faToggleOn : faToggleOff} className={shieldActive ? 'active' : 'inactive'} />
                <span>WAF Shield {shieldActive ? 'ENABLED' : 'DISABLED'}</span>
              </button>
            </div>
            <p>Simulating packet captures flowing to Godlove Mofa's host server in real-time.</p>
          </div>
          <div className="card-body">
            <div className="firewall-console">
              {trafficLogs.map((log) => (
                <div key={log.id} className={`firewall-line ${log.type}`}>
                  <span className="log-timestamp">[{new Date().toLocaleTimeString()}]</span>
                  <span className="log-message">{log.msg}</span>
                </div>
              ))}
              <div ref={logEndRef} />
            </div>
          </div>
        </section>
      </div>

      {/* Info Footer Box */}
      <footer className="sandbox-info-card">
        <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
        <div className="info-text">
          <h3>Systems Security Fused UI/UX</h3>
          <p>
            This page represents custom frontend state mechanics and log streamers created without bulky external libraries. In production, this can sit on top of AWS CloudWatch, Cloudflare Web Application Firewall logs, or local Linux journalctl output.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SecuritySandbox;
