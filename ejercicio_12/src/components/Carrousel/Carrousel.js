import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Imagen from "../Imagen/Imagen";
import Boton from "../Boton/Boton";

export default class Carrousel extends React.Component {

  render() {
    return (
      <>
        <h1 className="p-3 mx-auto">
          Elementos en el carrousel = {this.props.cant}
                                      {" "}
                                      {this.props.cant === 1 ? "imagen" : "imágenes"}.
        </h1>
        {console.log(this.props.src)}
        <Carousel>
          {this.props.src.map((img) => {
            return (
              <Carousel.Item>
                <Imagen {...img}></Imagen>
                <Carousel.Caption>
                  <h2 className="bg-dark badge text-wrap fs-3">{img[1]}</h2>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <Boton onClick={this.props.onClick} 
               title={this.props.title}></Boton>
        <Boton onClick={this.props.reset} 
               title={this.props.titleReset}></Boton>

      </>
    );
  }
}
