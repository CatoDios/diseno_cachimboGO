import React from 'react';


import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,Button
} from 'reactstrap';

const SubTema = ({data,getPreguntas}) => {
  const datos = data;
  const preguntas=getPreguntas;
  console.log('SUbtema');
  console.log(data);
  return (
    <Card>
      <CardBody>
        <CardTitle>{datos.nombre}</CardTitle>
        <CardSubtitle>Repaso</CardSubtitle>
        <CardText>En este curso vas a mejorar, reforazar tus conocimientos con preguntas pasadas de examen de admision sobre <i>{datos.nombre}</i></CardText>
        <Button color="success" onClick={()=>preguntas(datos.id_subtema)}>Realizar ronda de preguntas</Button>
      </CardBody>
    </Card>
  )
}
export default SubTema;