import * as React from 'react';
import '../projects.css'
import DetailCard from '../../../components/cardDetail'
import content from '../projectContent.json'


const MirrorWorld = () => {
  const mirrorworld = content.projects[2]
  return (
     <div>
       <DetailCard
        title={mirrorworld.title}
        description={mirrorworld.description}
        detailedDescription={mirrorworld.detailedDescription}
        contribution={mirrorworld.contribution}
        tags={mirrorworld.tags}
        />
     </div>
  );
}

export default MirrorWorld