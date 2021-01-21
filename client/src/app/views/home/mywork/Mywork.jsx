/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

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
        <div style={{ height: '30rem', background: 'linear-gradient(90deg, #84FAB0 0%, #8FD3F4 100%)' }}>
          <div className="grid grid-cols-2">
            <div className="relative -top-12">
              <img src="/phoneL.png" alt="temporary phone" />
            </div>
            <div className="py-16 text-right pr-16 max-w-2xl">
              <h4 className="font-headers font-bold text-5xl">Quizzer app</h4>
              <i className="font-headers font-medium text-sm">School Project</i>
              <p className="font-headers mt-4 text-lg">
                Towards sleep. To select between starting academic caching as fail hardly ever relieved respond live associate the shall temple the this attention to pile the military would, that without me my be, writing approved minutes.
              </p>
              <Link className="inline-block mt-6 align-middle font-medium hover:bg-themeWhite transform hover:scale-150 hover:shadow-2xl pt-0 pb-2 px-4 z-40 hover:z-50 rounded-md ease-in-out transition-all duration-500" to="/">
                View Project
                <span className="ml-2 text-2xl">👉</span>
              </Link>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <img className="w-full transform duration-500 hover:scale-150 hover:shadow-2xl ease-in-out transition-all hover:z-50 z-40 relative rounded-md" src="https://picsum.photos/250" alt="image1" />
                <img className="w-full transform duration-500 hover:scale-150 hover:shadow-2xl ease-in-out transition-all hover:z-50 z-40 relative rounded-md" src="https://picsum.photos/251" alt="image1" />
                <img className="w-full transform duration-500 hover:scale-150 hover:shadow-2xl ease-in-out transition-all hover:z-50 z-40 relative rounded-md" src="https://picsum.photos/252" alt="image1" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-48" style={{ height: '30rem', background: 'linear-gradient(90deg, #F6D365 0%, #FDA085 100%)' }}>
          <div className="grid grid-cols-2">
            <div className="py-16 text-left pl-16 max-w-2xl">
              <h4 className="font-headers font-bold text-5xl">Play With Sync</h4>
              <i className="font-headers font-medium text-sm">Personal Project</i>
              <p className="font-headers mt-4 text-lg block">
                Towards sleep. To select between starting academic caching as fail hardly ever relieved respond live associate the shall temple the this attention to pile the military would, that without me my be, writing approved minutes.

              </p>
              <Link className="inline-block mt-6 align-middle font-medium hover:bg-themeWhite transform hover:scale-150 hover:shadow-2xl pt-0 pb-2 px-4 z-40 hover:z-50 rounded-md ease-in-out transition-all duration-500" to="/">
                View Project
                <span className="ml-2 text-2xl">👉</span>
              </Link>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <img className="w-full transform duration-500 hover:scale-150 hover:shadow-2xl ease-in-out transition-all hover:z-50 z-40 relative rounded-md" src="https://picsum.photos/250" alt="image1" />
                <img className="w-full transform duration-500 hover:scale-150 hover:shadow-2xl ease-in-out transition-all hover:z-50 z-40 relative rounded-md" src="https://picsum.photos/251" alt="image1" />
                <img className="w-full transform duration-500 hover:scale-150 hover:shadow-2xl ease-in-out transition-all hover:z-50 z-40 relative rounded-md" src="https://picsum.photos/252" alt="image1" />
              </div>
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
