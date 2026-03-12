export function coupIA(pyramide) {
  // Exemple simple : choisir une ligne non vide
  const lignes = pyramide
    .map((v, i) => (v > 0 ? i : null))
    .filter((v) => v !== null);

  const ligne = lignes[Math.floor(Math.random() * lignes.length)];
  const choix = 1;

  return [ligne, choix];
}
