import * as React from 'react';
import '../projects.css'
import DetailCard from '../../../components/cardDetail'
import content from '../projectContent.json'


const Sondor = () => {
  const sondor = content.projects[3]
  return (
     <div>
       <DetailCard
        title={sondor.title}
        description={sondor.description}
        detailedDescription={sondor.detailedDescription}
        contribution={sondor.contribution}
        tags={sondor.tags}
        />
     </div>
  );
}

export default Sondor