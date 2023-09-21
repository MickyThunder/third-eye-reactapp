import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import turtle from './turtle.png';
import Accordion from 'react-bootstrap/Accordion';

function Card1() {
    return (

        <Card border="success" >
            <Card.Body> 
                <Card.Title><Card.Img variant="center" src={turtle} /><ColorfulText>Did you know:</ColorfulText></Card.Title>
                <Card.Text>

                    <p>In the last 6 months in Mine Super
                        <ul>
                            <li>
                                70% of your colleagues within your cohort have increased their Death cover to $4,000,000.
                            </li>
                            <li>
                                50% of your colleagues within your cohort have increased their TPD cover to $2,000,0000
                            </li>
                        </ul>

                    </p>
                </Card.Text>
                <Button variant="success">Apply</Button>{' '}
            </Card.Body>
        </Card>



    );
}
function Card2() {
    return (

        <Card border="success" style={{'margin-top': '2vh'}}>
            <Card.Body> 
                <Card.Title><ColorfulText>Your Current Cover:</ColorfulText></Card.Title>
                <Card.Text>

                    {Accordian1()}
                </Card.Text>
                <Button variant="success">Adjust My Cover</Button>{' '}
            </Card.Body>
        </Card>



    );
}
function ColorfulText({ children }) {
    return <span style={{ color: '#a9cd4c', fontSize: '1.5rem' }}>{children}</span>;
}


function Accordian1() {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Total Death Cover</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Total TPD</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Income Protection</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}


export{ Card1,Card2}