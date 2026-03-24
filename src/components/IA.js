// Mémoïsation pour éviter les recalculs
const memo = new Map();

export function estPositionGagnante(p) {
  const key = p.join(",");

  if (memo.has(key)) return memo.get(key);

  // Position terminale : plus de bâtons → perdant
  if (p.reduce((a, b) => a + b, 0) === 0) {
    memo.set(key, false);
    return false;
  }

  // Tester tous les coups possibles
  for (let i = 0; i < p.length; i++) {
    for (let r = 1; r <= p[i]; r++) {
      const newP = [...p];
      newP[i] -= r;

      // Si l’adversaire tombe sur une position perdante → coup gagnant
      if (!estPositionGagnante(newP)) {
        memo.set(key, true);
        return true;
      }
    }
  }

  memo.set(key, false);
  return false;
}

export function coupIA(p) {
  // 1. Chercher un coup gagnant
  for (let i = 0; i < p.length; i++) {
    for (let r = 1; r <= p[i]; r++) {
      const newP = [...p];
      newP[i] -= r;

      if (!estPositionGagnante(newP)) {
        return [i, r];
      }
    }
  }

  // 2. Sinon coup aléatoire
  const lignesNonVides = p
    .map((v, i) => (v > 0 ? i : null))
    .filter((v) => v !== null);

  const ligne = lignesNonVides[Math.floor(Math.random() * lignesNonVides.length)];

  return [ligne, 1];
}
