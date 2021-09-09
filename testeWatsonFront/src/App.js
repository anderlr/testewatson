import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import CommentList from "./Components/CommentList"; //componente para listar os comentarios
import CommentPost from "./Components/CommentPost"; //componente para enviar os comentarios
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="relative-top mb-5">
          <h1>TESTE WATSON</h1>
          <h3>Anderson Leandro Dos Reis</h3>
        </div>
        <Container fluid>
          <div className="row mx-5">
            <div className="col">
              <div className="text-center">Envie seu comentário!</div>
              <CommentPost></CommentPost>
            </div>
            <div className="col">
              <h1>Comentarios</h1>
              <CommentList></CommentList> 
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default App;
