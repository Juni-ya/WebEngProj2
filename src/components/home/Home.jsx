import React, { useState, useEffect } from 'react';
import { Carousel, Button, ListGroup, Card, Row, Col } from 'react-bootstrap';
import { handleClientLoad, handleAuthClick, handleSignoutClick, listFiles } from '../../googleDrive';

const TEST_FOLDER_ID = 'YOUR_TEST_FOLDER_ID'; // Please replace with a real folder ID

const Home = () => {
  const [files, setFiles] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    handleClientLoad();
  }, []);

  const authorize = async () => {
    try {
      await handleAuthClick();
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Authorization failed:', error);
    }
  };

  const signOut = () => {
    handleSignoutClick();
    setIsLoggedIn(false);
    setFiles([]);
  };

  const getFiles = async () => {
    if (!TEST_FOLDER_ID || TEST_FOLDER_ID === 'YOUR_TEST_FOLDER_ID') {
      alert('Please replace YOUR_TEST_FOLDER_ID with a real folder ID in Home.jsx');
      return;
    }
    try {
      const fileList = await listFiles(TEST_FOLDER_ID);
      setFiles(fileList);
    } catch (error) {
      console.error('Error getting files:', error);
    }
  };

  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="First slide"
            style={{height: '500px', objectFit: 'cover', borderRadius: '15px'}}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
            <h3>Welcome to the Research and Extension Portal</h3>
            <p>A centralized hub for all your academic and research needs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
            alt="Second slide"
            style={{height: '500px', objectFit: 'cover', borderRadius: '15px'}}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
            <h3>Dynamic Document Flow</h3>
            <p>Visualize and navigate through document processes with our interactive flowchart.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Third slide"
            style={{height: '500px', objectFit: 'cover', borderRadius: '15px'}}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
            <h3>Seamless Google Drive Integration</h3>
            <p>Access your files and folders directly from Google Drive.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="my-5">
        <Row>
          <Col>
            <Card className="text-center shadow">
              <Card.Body>
                <Card.Title as="h2" className="mb-4">Google Drive Integration</Card.Title>
                <Card.Text>
                  Connect your Google Drive to access and manage your documents seamlessly.
                </Card.Text>
                {isLoggedIn ? (
                  <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <Button onClick={signOut} variant="outline-danger" size="lg">Sign Out</Button>
                    <Button onClick={getFiles} variant="primary" size="lg">Fetch Recent Files</Button>
                  </div>
                ) : (
                  <Button onClick={authorize} variant="primary" size="lg">Authorize Google Drive</Button>
                )}

                {files.length > 0 && (
                  <ListGroup className="mt-4 text-start">
                    {files.map((file) => (
                      <ListGroup.Item key={file.id} action href={file.webViewLink} target="_blank" rel="noopener noreferrer">
                        {file.name}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
