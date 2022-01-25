import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { useState } from 'react';

const CreateTabs = () => {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={setKey}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Hello!
      </Tab>
      
      <Tab eventKey="profile" title="Profile">
        Insert pictures and link to podcast
      </Tab>
      
      <Tab eventKey="projects" title="Projects">
        Insert Projects with descriptions:
      </Tab>
      
      <Tab eventKey="contact" title="Contact">
        <div>
          Email:   echoalice0@gmail.com
        </div><br></br>
        <div>
          Twitter:  <a href="https://twitter.com/echo__alice">https://twitter.com/echo__alice</a>
        </div><br></br>
        <div>
          Github:  <a href="https://github.com/EchoAlice">https://github.com/EchoAlice</a>
        </div>
      </Tab>
    </Tabs>
  );
}

export default CreateTabs;