import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import {useState} from 'react';

function CreateTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Hello!
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Insert Cool Projects:

      </Tab>
      <Tab eventKey="not-profile" title="Not Profile">
        Insert Bad Projects:

      </Tab>
      <Tab eventKey="contact" title="Contact">
        Resume:

      </Tab>
    </Tabs>
  );
}

// render(<CreateTabs />);
export default CreateTabs;