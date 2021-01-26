import React from 'react';
import ProjectItem from '../../../sharedcomponents/projectItem/ProjectItem';

function Mywork() {
  return (
    <div>
      <h2
        className="text-center font-headers font-black relative leading-none top-0 md:top-8 lg:top-16"
        style={{ fontSize: '14vw' }}
      >
        MY WORK
      </h2>

      <ProjectItem
        gradient="linear-gradient(90deg, #84FAB0 0%, #8FD3F4 100%)"
        title="Quizzer"
        description="Eat too much then proceed to regurgitate all over living room carpet while humans eat dinner stare at ceiling light, and kitty loves pigs, and lick butt, yet humans,humans, humans oh how much."
        type="School Project"
        previewImages={[
          'https://picsum.photos/250',
          'https://picsum.photos/251',
          'https://picsum.photos/252',
        ]}
        coverImage="/phoneL.png"
      />
    </div>
  );
}

export default Mywork;
