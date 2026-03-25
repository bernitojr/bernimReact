// IA.js

// ------------------------------------------------------------
// Mémoïsation : permet de stocker les résultats déjà calculés
// pour éviter de recalculer plusieurs fois la même position.
// La clé sera une chaîne du type "3,1,4" représentant la pyramide.
// ------------------------------------------------------------
const memo = new Map();


// ------------------------------------------------------------
// Fonction : estPositionGagnante(p)
// Détermine si une position est gagnante ou perdante.
// p = tableau représentant les lignes (ex : [3,1,4])
// ------------------------------------------------------------
export function estPositionGagnante(p) {

  // On transforme la pyramide en chaîne pour l'utiliser comme clé
  const key = p.join(",");

  // Si on a déjà calculé cette position, on renvoie le résultat mémorisé
  if (memo.has(key)) return memo.get(key);

  // ------------------------------------------------------------
  // Cas terminal : si toutes les lignes sont vides,
  // alors la position est PERDANTE (le joueur ne peut plus jouer).
  // ------------------------------------------------------------
  if (p.reduce((a, b) => a + b, 0) === 0) {
    memo.set(key, false); // false = position perdante
    return false;
  }

  // ------------------------------------------------------------
  // On teste TOUS les coups possibles :
  // Pour chaque ligne i,
  //   pour chaque nombre de bâtons r qu'on peut retirer,
  //     on simule la nouvelle position.
  // ------------------------------------------------------------
  for (let i = 0; i < p.length; i++) {

    // On peut retirer entre 1 et p[i] bâtons
    for (let r = 1; r <= p[i]; r++) {

      // On copie la pyramide pour simuler un coup
      const newP = [...p];
      newP[i] -= r;

      // ------------------------------------------------------------
      // Si l'adversaire tombe sur une position PERDANTE,
      // alors la position actuelle est GAGNANTE.
      // ------------------------------------------------------------
      if (!estPositionGagnante(newP)) {
        memo.set(key, true); // true = position gagnante
        return true;
      }
    }
  }

  // ------------------------------------------------------------
  // Si AUCUN coup ne mène à une position perdante pour l’adversaire,
  // alors la position est perdante.
  // ------------------------------------------------------------
  memo.set(key, false);
  return false;
}



// ------------------------------------------------------------
// IA DIFFICILE : coup optimal basé sur la théorie du Nim.
// Cherche un coup qui mène l’adversaire à une position perdante.
// ------------------------------------------------------------
function coupIADifficile(p) {

  // On teste tous les coups possibles
  for (let i = 0; i < p.length; i++) {
    for (let r = 1; r <= p[i]; r++) {

      const newP = [...p];
      newP[i] -= r;

      // Si ce coup rend la position perdante pour l’adversaire,
      // alors c’est un coup gagnant → on le joue.
      if (!estPositionGagnante(newP)) {
        return [i, r];
      }
    }
  }

  // Si aucun coup gagnant n'existe (rare mais possible),
  // on joue un coup aléatoire.
  return coupIAFacile(p);
}



// ------------------------------------------------------------
// IA FACILE : joue complètement au hasard.
// ------------------------------------------------------------
function coupIAFacile(p) {

  // On récupère les lignes qui ont encore des bâtons
  const lignesNonVides = p
    .map((v, i) => (v > 0 ? i : null))
    .filter((v) => v !== null);

  // On choisit une ligne au hasard
  const ligne = lignesNonVides[Math.floor(Math.random() * lignesNonVides.length)];

  // On retire un nombre aléatoire de bâtons (entre 1 et max)
  const retirer = Math.floor(Math.random() * p[ligne]) + 1;

  return [ligne, retirer];
}



// ------------------------------------------------------------
// Fonction principale : coupIA(p, difficulte)
// Choisit automatiquement la bonne stratégie selon le mode choisi.
// ------------------------------------------------------------
export function coupIA(p, difficulte) {

  // Mode facile → coup aléatoire
  if (difficulte === "facile") {
    return coupIAFacile(p);
  }

  // Mode difficile → IA optimale
  return coupIADifficile(p);
}
