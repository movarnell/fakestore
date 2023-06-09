import { Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
  return (
    // Container to hold the content and set the margins
    <Container className="mt-3">
      {/* Row to align the FAQ heading */}
      <Row className=''>
        <h1 className='display-3 bungee text-center'>Frequently Asked Questions</h1>
      </Row>
      
      {/* Accordion component to show the list of questions and answers */}
      <Accordion defaultActiveKey="0" className='fw-bold'>
        <Accordion.Item eventKey="0">
          {/* Accordion header for the first question */}
          <Accordion.Header>Q. What API did you use for the backend?</Accordion.Header>
          {/* Accordion body for the first question */}
          <Accordion.Body>
            A. All of the backend is hosted on MockAPI.io, which offers both free and paid options for creating custom APIs. I opted for the paid service to manage various projects, including the Dog Park Scheduler and Comment Feed.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          {/* Accordion header for the second question */}
          <Accordion.Header>Q. Why are some of these pictures mildly inappropriate, or distasteful?</Accordion.Header>
          {/* Accordion body for the second question */}
          <Accordion.Body>
            A. The images on this site are obtained from Faker.js, a source for generating fake data. While I could have chosen different images, using Faker.js images made the overall style more realistic, even though there was a possibility of inappropriate content. I apologize if any of the images were offensive. My intention was to highlight the design of the site, and I hope that's what you'll focus on as well.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          {/* Accordion header for the third question */}
          <Accordion.Header>Q. Why don’t you have a full checkout form?</Accordion.Header>
          {/* Accordion body for the third question */}
          <Accordion.Body>
            A. I chose the listed fields intentionally so that you could input fictitious information to test the system's functionality. To ensure that you feel at ease when providing false data we didn't do actual payment inputs.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          {/* Accordion header for the fourth question */}
          <Accordion.Header>Q. What's the process to bring you on board? We're seeking an individual who shares your level of passion for learning and development.</Accordion.Header>
          {/* Accordion body for the fourth question */}
          <Accordion.Body>
            A. You can find my portfolio at <a href="https://michaelvarnell.com" target='_blank' rel="noreferrer">www.MichaelVarnell.com</a>. From there, you can access my LinkedIn profile to contact me directly or explore my other projects and GitHub repositories.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default FAQ;
