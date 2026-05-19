export default function Pyramide({ 
  pyramide, 
  jouerCoup,
  hovered,
  setHovered,
  disappear,
  setDisappear,
  tour
  }) {
  return (
    <div className="pyramide">
      {pyramide.map((nb, i) => (
        <div key={i} className="ligne">
          {Array.from({ length: nb }).map((_, b) => {
            const isPreview =
              hovered.ligne === i && b <= hovered.index;

            const isDisappear =
            disappear.ligne === i && b <= disappear.index;

            return (
            <span
                key={b}
                className={`baton 
                  ${isPreview ? "preview" : ""}
                  ${isDisappear ? "disappear" : ""}
                `}
                onMouseEnter={() =>
                  setHovered({ ligne: i, index: b })
                }
                onMouseLeave={() =>
                  setHovered({ ligne: null, index: null })
                }
                onClick={() => {
                  // animation disparition
                  setDisappear({ ligne: i, index: b });

                  // jouer le coup après l’animation
                  setTimeout(() => {
                    jouerCoup(i, b + 1, tour);
                    setDisappear({ ligne: null, index: null });
                  }, 300);
                }}

                onTouchEnd={() => setHovered({ ligne: null, index: null })}
              ></span>
               );
          })}
        </div>
      ))}
    </div>
  );
}