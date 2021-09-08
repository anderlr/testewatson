import axios from "axios";
import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default class CommentList extends React.Component {
  state = {
    comments: [], //definimos aqui a variavel para receber cada comentario da API
    audio: [],
    anterior: "",
  };

  componentDidMount() {
    axios
      .get(`http://localhost:${process.env.REACT_APP_API_PORT}/api/comments`)
      .then((res) => {
        this.setState({ comments: res.data }); //cada resposta recebida é colocada no vetor comments[]
      });
  }

  playAudio(comentario, id) {
    if (document.getElementById(id) !== null) {
      //caso o audio seja do mesmo comentario anterior não será feito o request novamente
      let e = document.getElementById(id);
      e.play();
    } else {
      axios
        .post(
          `http://localhost:${process.env.REACT_APP_API_PORT}/api/comments/audio`,
          { comentario }
        ) //enviamos o comentario salecionado para a API
        .then((res) => {
          this.setState({
            audio: [
              ...this.state.audio,
              <audio controls autoPlay id={id}>
                <source src={res.data} type="audio/ogg"></source>
              </audio>,
            ],
          });
        });
    }
  }

  render() {
    return (
      <ul>
        {this.state.audio}
        {this.state.comments.map((comment) => (
          <li className="list" key={comment.id}>
            {comment.comentario}
            <div className="play">
              <button
                onClick={() => this.playAudio(comment.comentario, comment.id)}
              >
                Ouvir
              </button>
            </div>
          </li> //na pagina cada comentario é listado como um item
        ))}
      </ul>
    );
  }
}
