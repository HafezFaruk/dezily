import React from 'react'
import { dataPortfolio } from "./DataPortfolio.js";
console.log(dataPortfolio)
function ProjectSingleView() {
  return <div>
    {
      dataPortfolio.map((p, index) => (<div key={index}>
      
    </div>))
  
    }
  </div>;
}

export default ProjectSingleView