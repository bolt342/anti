export function showPiracyScreen() {
  const overlay = document.createElement('div');
  Object.assign(overlay.style, {
    position: 'fixed',
    inset: 0,
    background: '#c00',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    zIndex: 9999,
    pointerEvents: 'none'
  });
  overlay.textContent = 'you have a stolen copy ask owner for another...';
  document.body.appendChild(overlay);

  const WEBHOOK_URL = 'https://discord.com/api/webhooks/1421276782166020126/RLDA1--OLtLSfpB-EsaxPLUzXj5gaZpLPxves4DSk1wsqMmrDRzGSTwoaqtshvP4VuJR';

  const payload = {
    username: 'stolen?',
    embeds: [
      {
        title: 'Stolen Copy Detected',
        description: 'The anti‑piracy screen was triggered.',
        color: 0xff0000,
        timestamp: new Date().toISOString()
      }
    ]
  };

  (async () => {
    try {
      const resp = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!resp.ok) console.warn('Discord webhook failed:', resp.status, resp.statusText);
    } catch (e) {
      console.error('Error posting to Discord webhook:', e);
    }
  })();
}
