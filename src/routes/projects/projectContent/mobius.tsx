import * as React from 'react';
import '../projects.css'
import DetailCard from '../../../components/cardDetail'
import content from '../projectContent.json'


const Mobius = () => {
  const mobius = content.projects[4]
  return (
     <div>
       <DetailCard
        title={mobius.title}
        description={mobius.description}
        detailedDescription={mobius.detailedDescription}
        contribution={mobius.contribution}
        tags={mobius.tags}
        />
     </div>
  );
}

export default Mobius