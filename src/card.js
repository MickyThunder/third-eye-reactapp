import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import turtle from './turtle.png';
import Accordion from 'react-bootstrap/Accordion';
import React, { useState } from "react";
import exclamation from './exlamation.jpg';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
function Card1() {
  const [insightShow, setHideInsight] = useState(false);
  return (

    <><Col className='col-8'><Card border="success">
      <Card.Body>
        <Card.Title><Card.Img variant="center" src={turtle} /><ColorfulText>Did you know:</ColorfulText>
          <Image src={exclamation} width={20} onClick={() => setHideInsight(!insightShow)} />
        </Card.Title>

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
        <Button variant="success">Apply</Button>
      </Card.Body>
    </Card>
      <Card border="success" style={{ 'margin-top': '2vh' }}>
        <Card.Body>
          <Card.Title><ColorfulText>Your Current Cover:</ColorfulText></Card.Title>
          <Card.Text>

            {Accordian1()}
          </Card.Text>
          <Button variant="success">Adjust My Cover</Button>{' '}
        </Card.Body>
      </Card></Col>
      <Col className='col-4'><ModalView visible={insightShow}></ModalView>
      </Col>
      </>


  );
}
function Card2() {
  return (

    <Card border="success" style={{ 'margin-top': '2vh' }}>
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



function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Power BI Reports
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe title="MemberAnalytics" src="https://app.powerbi.com/reportEmbed?reportId=8c6a79f6-bb81-4671-ae48-16b68c4b2f39&autoAuth=true&ctid=530211ad-1dcf-42db-b0cc-f0ae94dbf11a" frameborder="0" allowFullScreen="true" style={{
          'min-height': '100vh',
          'min-width': '90vw'
        }}></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalView(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {props.visible && <><Card style={{ width: '18rem' }}>

        <Card.Body>
          <Card.Title>Insights</Card.Title>
          <Card.Text>
            The insights provided is based the cohort of the occupation category and age group you have assigned to by your employer.
          </Card.Text>
          <Button variant="success" onClick={() => setModalShow(true)}>
            Click Here for Insights
          </Button>
        </Card.Body>
      </Card><MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)} /></>
      }</>
  );
}



export { Card1, Card2, MyVerticallyCenteredModal, ModalView }
