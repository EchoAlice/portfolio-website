import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ContactTab from './tabs/ContactTab';
import HomeTab from './tabs/HomeTab';
import ProfileTab from './tabs/ProfileTab';
import ProjectsTab from './tabs/ProjectsTab';

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
        <HomeTab />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <ProfileTab />
      </Tab>
      <Tab eventKey="projects" title="Projects">
        <ProjectsTab />
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <ContactTab />
      </Tab>
    </Tabs>
  );
}
export default CreateTabs;