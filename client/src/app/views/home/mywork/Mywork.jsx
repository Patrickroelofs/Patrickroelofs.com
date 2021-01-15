/* eslint-disable max-len */
import React from 'react';

function Mywork() {
  return (
    <div>
      <h2
        className="text-center font-headers font-black relative top-24"
        style={{ fontSize: '14vw' }}
      >
        MY WORK
      </h2>

      <div className="relative z-10">
        <div className="h-96" style={{ background: 'linear-gradient(90deg, #84FAB0 0%, #8FD3F4 100%)' }}>
          <div className="grid grid-cols-2">
            <div className="relative -top-12">
              <img src="/phoneL.png" alt="temporary phone" />
            </div>
            <div className="py-16 text-right pr-16 max-w-lg">
              <h4 className="font-headers font-bold text-5xl">Quizzer app</h4>
              <p className="font-headers mt-4 text-lg">
                Towards sleep. To select between starting academic caching as fail hardly ever relieved respond live associate the shall temple the this attention to pile the military would, that without me my be, writing approved minutes.
              </p>
            </div>
          </div>
        </div>

        <div className="h-96 mt-24" style={{ background: 'linear-gradient(90deg, #F6D365 0%, #FDA085 100%)' }}>
          <div className="grid grid-cols-2">
            <div className="py-16 text-left pl-16 max-w-lg">
              <h4 className="font-headers font-bold text-5xl">Play With Sync</h4>
              <p className="font-headers mt-4 text-lg">
                Towards sleep. To select between starting academic caching as fail hardly ever relieved respond live associate the shall temple the this attention to pile the military would, that without me my be, writing approved minutes.
              </p>
            </div>
            <div className="relative -top-12">
              <img src="/phoneR.png" alt="temporary phone" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Mywork;
