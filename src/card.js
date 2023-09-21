import Card from 'react-bootstrap/Card';

function BasicExample() {
    return (
        <>
            <Card border="success" style={{ width: '25rem',alignContent:'flex-end' }}>
                <Card.Body>
                    <Card.Title>Did you know:</Card.Title>
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
                </Card.Body>
            </Card>
            <br />

            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Secondary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </>
    );
}

export default BasicExample;