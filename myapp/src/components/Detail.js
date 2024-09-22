import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Detail() {
  const { id } = useParams();
  const [mascota, setMascota] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const mascotaEncontrada = data.find((m) => m.id === Number(id));
        setMascota(mascotaEncontrada);
        setLoading(false); 
      });
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container text-center">
      <h2>{mascota.nombre}</h2>
      <Card style={{ width: "18rem", margin: "0 auto" }} className="mb-3">
        <Card.Img variant="top" src={mascota.foto} alt={mascota.descripcion} />
        <Card.Body>
          <Card.Title>Detalles de {mascota.nombre}</Card.Title>
          <Card.Text>{mascota.descripcion}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}



export default Detail;