import * as React from 'react';
import '../projects.css'
import DetailCard from '../../../components/cardDetail'
import content from '../projectContent.json'


const Vanishing = () => {
  const vanishing = content.projects[3]
  return (
     <div>
       <DetailCard
        title={vanishing.title}
        description={vanishing.description}
        detailedDescription={vanishing.detailedDescription}
        contribution={vanishing.contribution}
        tags={vanishing.tags}
        />
     </div>
  );
}

export default Vanishing