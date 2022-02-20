import React, { useState, useEffect } from 'react';
import merkle from './MerkleTree.py'
import { CodeBlock, ocean } from "react-code-blocks";

const ProjectsTab = () => {
   
  const [file, setFile] = useState("");  

  useEffect(() => {
    fetch( merkle )
      .then(r => r.text())
      .then(file => setFile(file))
  })

  return(    
    <CodeBlock
      text={file}
      language={"javascript"}
      theme={ocean} 
    />
  );
}

export default ProjectsTab;
