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
    pointerEvents: 'none'   // prevents clicks reaching the game underneath
  });
  overlay.textContent = 'you have a stolen copy ask owner for another...';
  document.body.appendChild(overlay);
}
