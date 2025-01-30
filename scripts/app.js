// Add WebSocket-like real-time alerts (simulated)
function simulateThreatAlerts() {
    const threats = [
        "ALERT: Brute force attempt detected from 192.168.1.34",
        "WARNING: Unauthorized database access detected",
        "NOTICE: New CVE-2024-1234 vulnerability found"
    ];

    setInterval(() => {
        if(Math.random() > 0.7) {
            showModal(`🔴 LIVE THREAT: ${threats[Math.floor(Math.random() * threats.length)]}`);
        }
    }, 10000);
}
simulateThreatAlerts();

// Add real-time network monitor
function startNetworkMonitor() {
    const traffic = document.createElement('div');
    traffic.id = 'network-traffic';
    document.body.appendChild(traffic);

    setInterval(() => {
        const packet = document.createElement('div');
        packet.className = 'network-packet';
        packet.textContent = `${Math.random().toString(16).substr(2, 8)}:${Math.floor(Math.random() * 65535)} → ${Math.random().toString(16).substr(2, 8)}:${Math.floor(Math.random() * 65535)}`;
        packet.style.left = `${Math.random() * 100}%`;
        traffic.appendChild(packet);
        
        setTimeout(() => packet.remove(), 5000);
    }, 500);
}
startNetworkMonitor();

// Add CSS for network monitor
const style = document.createElement('style');
style.textContent = `
.network-packet {
    position: fixed;
    color: #0f0;
    font-size: 0.8rem;
    animation: packetFlow 5s linear;
    white-space: nowrap;
}

@keyframes packetFlow {
    from { top: -10%; opacity: 1; }
    to { top: 110%; opacity: 0; }
}
`;
document.head.appendChild(style);