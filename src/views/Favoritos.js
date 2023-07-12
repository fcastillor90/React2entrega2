import { useContext } from "react";
import { Context } from "../Context";

export default function Favoritos() {
  const { fotos } = useContext(Context);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {fotos
          .filter((foto) => foto.favorito)
          .map((foto) => (
            <img src={foto.src} alt={foto.desc} key={foto.id} />
          ))}
      </div>
    </div>
  );
}