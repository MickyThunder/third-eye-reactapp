import logo from './headern.png';
import './App.css';
import { Card1, ModalView } from './card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>

 


        <div class="flex-container">

          <Container>
            <Row>
              <Col className='col-12'>
                <div class="mtext">
                  Third Eye View
                </div>
              </Col>

            </Row>
            <Row>
              <Col className='col-8'>
                {Card1()}
              </Col>
              <Col className='col-4'><ModalView></ModalView> 
              </Col>
            </Row>
          </Container>

      </div>
    </div >
  );
}



export default App;
