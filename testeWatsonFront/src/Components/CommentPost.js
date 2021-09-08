import axios from "axios";
import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class CommentPost extends React.Component {
  state = {
    text: "", //definimos aqui a variavel para salvar o comentario a ser enviado
  };

  handleChange = (event) => {
    //o valor enviado pela caixa de texto é colocado em text
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    //event.preventDefault(); //impedimos o navegador de recarregar a pagina, por segurança

    const comment = {
      comment: this.state.text,
    };

    axios
      .post(
        `http://localhost:${process.env.REACT_APP_API_PORT}/api/comments/post`,
        comment
      ) //enviamos uma requisição POST com o comentario
      .then((res) => {
        console.log(res); //verificando a resposta e os dados
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="text">
        <div className="col">
          <textarea
            type="text"
            name="text"
            cols="60"
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="col">
          <button type="submit">Enviar</button>
        </div>
      </form>
    );
  }
}
