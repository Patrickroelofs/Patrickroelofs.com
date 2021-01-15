/* eslint-disable max-len */
import React from 'react';
import Button from '../../../sharedcomponents/button/Button';

function Description() {
  return (
    <div
      className="relative max-w-3xl m-auto h-96"
      style={{ marginTop: '22.5%', marginBottom: '22.5%' }}
    >
      <span
        className="block w-96 h-96 rounded-full absolute"
        style={{ background: 'linear-gradient(90deg, #FF9A9E 0%, #FAD0C4 99%, #FAD0C4 100%)' }}
      />
      <div className="relative z-10 max-w-lg ml-64">
        <div className="relative top-48">
          <p className="font-headers text-lg">
            Towards sleep. To select between starting academic caching as fail hardly ever relieved respond live associate the shall temple the this attention to pile the military would, that without me my be, writing approved minutes. It and emerged. Someone people. Fly put sleep brown was bold, a this variety from.
          </p>
          <Button url="/aboutme" text="More about me" />
        </div>
      </div>
    </div>
  );
}

export default Description;
