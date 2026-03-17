export default function Line({ index, nb, jouerCoup }) {
  return (
    <div>
      <p>Ligne {index + 1}</p>
      <div>
        {Array.from({ length: nb }).map((_, i) => (
          <span key={i} className="baton"></span>
        ))}
      </div>

      <button onClick={() => jouerCoup(index, 1, "joueur1")}>
        Retirer 1
      </button>
    </div>
  );
}
