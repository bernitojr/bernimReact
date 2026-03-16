export default function Pyramide({ pyramide, jouerCoup }) {
  return (
    <div className="pyramide">
      {pyramide.map((nb, i) => (
        <div key={i} className="ligne">
          {Array.from({ length: nb }).map((_, b) => (
            <span
              key={b}
              className="baton"
              onClick={() => jouerCoup(i, 1, "joueur1")}
            ></span>
          ))}
        </div>
      ))}
    </div>
  );
}
