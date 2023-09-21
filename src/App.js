import logo from './headern.png';
import './App.css';
import { Card1, Card2 } from './card';
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
                {Card2()}
              </Col>
              <Col className='col-4'> <div><iframe title="MemberAnalytics" src="https://app.powerbi.com/reportEmbed?reportId=5666b327-daff-45d2-94c2-85e5a0e08d5d&autoAuth=true&ctid=530211ad-1dcf-42db-b0cc-f0ae94dbf11a" frameborder="0" allowFullScreen="true" style={{'min-height': '70vh',
    'min-width': '55vw'}}></iframe></div>
              </Col>
            </Row>
          </Container>

      </div>
    </div >
  );
}



export default App;
