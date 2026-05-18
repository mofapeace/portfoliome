export const blogPosts = [
  {
    id: "analyzing-xss-react-mitigation",
    title: "Analyzing DOM-Based XSS: How React Protects Your Portfolio",
    description: "An in-depth look at Cross-Site Scripting (XSS) in modern web apps and the mechanisms React uses under the hood to sanitize state outputs safely.",
    category: "Cybersecurity",
    date: "May 19, 2026",
    readTime: "5 min read",
    tags: ["React", "Application Security", "XSS", "Web Dev"],
    content: [
      {
        type: "paragraph",
        text: "Cross-Site Scripting (XSS) remains one of the most prominent web application vulnerabilities, ranked consistently high in the OWASP Top 10. It occurs when a web application processes untrusted user input and embeds it into the DOM without proper validation or escaping, allowing attackers to execute malicious scripts in a victim's browser."
      },
      {
        type: "heading",
        text: "Understanding DOM-Based XSS"
      },
      {
        type: "paragraph",
        text: "In standard vanilla JavaScript architectures, a developer might inadvertently open an injection vulnerability using sink functions like 'innerHTML'. Consider this common pattern:"
      },
      {
        type: "code",
        language: "javascript",
        code: `// DANGEROUS: If userQuery contains javascript: or <script>, it executes
const container = document.getElementById('search-output');
container.innerHTML = \`<p>Results for: \${userQuery}</p>\`;`
      },
      {
        type: "paragraph",
        text: "If an attacker supplies a payload like '<img src=\"invalid-image\" onerror=\"alert(\\'Session Hijacked!\\')\">' via URL parameters or input forms, the browser will interpret the 'onerror' event handler as executable JavaScript code. This leads to session hijacking, cookies theft, or arbitrary actions performed on behalf of the user."
      },
      {
        type: "heading",
        text: "How React Mitigates XSS by Default"
      },
      {
        type: "paragraph",
        text: "One of React's greatest design triumphs is that it is safe-by-default. When you render data in React using curly braces, React automatically encodes the values before adding them to the virtual DOM:"
      },
      {
        type: "code",
        language: "javascript",
        code: `// SAFE: React automatically escapes HTML entities by default
const SearchResults = ({ userQuery }) => {
  return (
    <div>
      <p>Results for: {userQuery}</p>
    </div>
  );
};`
      },
      {
        type: "paragraph",
        text: "Under the hood, before inserting elements into the real DOM, React converts special HTML characters into their corresponding safe HTML entities (e.g., '<' becomes '&lt;', '>' becomes '&gt;', and '\"' becomes '&quot;'). The browser renders these entities purely as visual text nodes rather than executable DOM nodes, rendering the script benign."
      },
      {
        type: "warning",
        title: "The Escape Hatch: dangerouslySetInnerHTML",
        text: "React provides an explicit escape hatch named 'dangerouslySetInnerHTML'. Using this prop mimics 'innerHTML' and bypasses automatic escaping. Avoid using this unless you have passed the input through a robust sanitizer like DOMPurify."
      },
      {
        type: "heading",
        text: "Securing Interactive Features on Your Site"
      },
      {
        type: "paragraph",
        text: "On this portfolio, interactive UI elements such as custom terminal logs, sandbox commands, and dynamic filtering strictly leverage React's automatic escaping. No raw HTML insertions are performed, maintaining an impenetrable local boundary against DOM-based scripts."
      }
    ]
  },
  {
    id: "building-python-stealth-port-scanner",
    title: "Stealth Network Audits: Building a Port Scanner in Python",
    description: "Learn the fundamentals of socket connections and network reconnaissance by building a high-performance port scanner using Python's standard library.",
    category: "Pentesting",
    date: "May 15, 2026",
    readTime: "7 min read",
    tags: ["Python", "Networking", "Reconnaissance", "Socket"],
    content: [
      {
        type: "paragraph",
        text: "Network reconnaissance is the absolute first phase of any security audit or pentesting engagement. Before you can secure a host, you must map its active services and identify which ports are listening for inbound traffic. In this technical walkthrough, we will explore the low-level sockets API to write a simple scanner from scratch."
      },
      {
        type: "heading",
        text: "What is a Port Scan?"
      },
      {
        type: "paragraph",
        text: "A port scan involves sending network packets to specific TCP or UDP ports on a target IP address and listening for response packets. By analyzing these responses, you can determine if a port is Open (listening), Closed (not listening), or Filtered (packets blocked by a firewall)."
      },
      {
        type: "paragraph",
        text: "The simplest form of scan is the TCP Connect Scan, which relies on the standard TCP three-way handshake (SYN -> SYN-ACK -> ACK). If the connection successfully establishes, the port is open."
      },
      {
        type: "heading",
        text: "Writing the Scanner Code"
      },
      {
        type: "paragraph",
        text: "Python provides a highly powerful native 'socket' module that interface directly with system-level network stacks. Here is a modular script to scan a single port:"
      },
      {
        type: "code",
        language: "python",
        code: `import socket
import sys

def scan_port(host, port):
    try:
        # Create a TCP socket block (AF_INET = IPv4, SOCK_STREAM = TCP)
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        
        # Set a short timeout so we don't hang indefinitely
        s.settimeout(1.0)
        
        # Attempt standard TCP connection
        result = s.connect_ex((host, port))
        
        if result == 0:
            print(f"[+] Port {port} is OPEN")
        s.close()
    except Exception as e:
        pass # Ignore errors to prevent log flooding

# Scan local test environment safely
scan_port("127.0.0.1", 80)`
      },
      {
        type: "paragraph",
        text: "The 'connect_ex' function is critical here. Unlike standard 'connect', it returns an error code integer instead of raising an exception. A return value of '0' indicates a successful handshake, indicating an active listener on that target port."
      },
      {
        type: "heading",
        text: "Optimizing with Concurrency"
      },
      {
        type: "paragraph",
        text: "Scanning ports sequentially is extremely slow due to timeouts on closed/filtered ports. To scan hundreds of ports efficiently, we can implement threading using Python's 'concurrent.futures' module:"
      },
      {
        type: "code",
        language: "python",
        code: `from concurrent.futures import ThreadPoolExecutor

def run_scanner(host, port_range):
    print(f"Scanning target: {host}")
    with ThreadPoolExecutor(max_workers=50) as executor:
        executor.map(lambda p: scan_port(host, p), port_range)`
      },
      {
        type: "warning",
        title: "Ethical Reconnaissance Reminder",
        text: "Scanning networks without explicit authorization can be interpreted as a malicious attack vector or trigger enterprise Intrusion Prevention Systems (IPS). Always restrict scanning actions to local loopback adapters, sandboxed Virtual Machines, or networks you own."
      }
    ]
  },
  {
    id: "static-security-hardening-vite-vercel",
    title: "Static Security Checklist: Hardening Vite & Vercel Deployments",
    description: "Best practices and headers configuration to shield static React bundles from advanced security exploits on Vercel deployments.",
    category: "Linux & Configs",
    date: "May 10, 2026",
    readTime: "4 min read",
    tags: ["Vercel", "Vite", "Hardening", "Security Headers"],
    content: [
      {
        type: "paragraph",
        text: "Static site architectures (Vite, React, HTML5) hosted on global CDNs like Vercel enjoy a naturally small server-side attack surface. However, the client-side remains susceptible to malicious iframe clickjacking, mime-sniffing, or cross-site asset leakages. In this guide, we walk through securing HTTP headers for static sites."
      },
      {
        type: "heading",
        text: "The Vulnerability of Default Headers"
      },
      {
        type: "paragraph",
        text: "By default, static host providers serve pages with minimal headers. This lets browsers infer file types or display the page inside foreign frames, which can facilitate clickjacking attacks. We must explicitly instruct the browser to restrict these behaviors."
      },
      {
        type: "heading",
        text: "Configuring the Vercel Configuration File"
      },
      {
        type: "paragraph",
        text: "Vercel allows us to inject custom, hard-hitting security headers by defining a 'vercel.json' configuration file in the project's root directory. Here is an optimized production configuration:"
      },
      {
        type: "code",
        language: "json",
        code: `{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://vercel.live; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://vitals.vercel-insights.com;"
        }
      ]
    }
  ]
}`
      },
      {
        type: "heading",
        text: "Breaking Down the Headers"
      },
      {
        type: "paragraph",
        text: "Let's review what each of these protective directives does:"
      },
      {
        type: "info",
        title: "Key Directives Decoded",
        text: "• X-Frame-Options: Set to DENY to prevent other websites from nesting your site inside an iframe, neutralizing clickjacking.\n• X-Content-Type-Options: Set to nosniff to stop browsers from executing non-script assets (like images or styles) as JavaScript code.\n• Content-Security-Policy (CSP): Instructs the browser to only fetch resources (images, scripts, styles) from whitelisted, secure origins."
      },
      {
        type: "paragraph",
        text: "Implementing this checklist ensures that your client-side portfolio is shielded by professional-grade host-level policies, making it a robust bastion of secure frontend engineering."
      }
    ]
  }
];
