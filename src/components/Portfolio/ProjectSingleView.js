import React from 'react'
import { dataPortfolio } from "./DataPortfolio.js";

function ProjectSingleView() {
  return (
    <div>
      <div className="grid grid-flow-row auto-rows-max hover:auto-rows-min">
        {dataPortfolio.map((p, index) => (
          <div key={index}>
            <img className='w-full h-full' src={p.img} alt="img" />
          </div>
        ))}
      </div>
    </div>   
  );
}

export default ProjectSingleView