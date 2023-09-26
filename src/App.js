import logo from './headern.png';
import './App.css';
import { Card1 } from './card';
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
            {Card1()}
            </Row>
          </Container>

      </div>
    </div >
  );
}



export default App;
