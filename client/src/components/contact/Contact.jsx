import React from 'react';

function Contact() {
  return (
    <section className="h-screen min-w-full">
      <div className="flex flex-col items-center justify-center h-screen max-w-6xl m-auto text-center align-middle">
        <p
          className="pb-4 text-3xl font-black md:text-6xl"
        >
          Send me a message
          <span className="text-themeRed">.</span>
        </p>
        <a
          href="mailto:contact@patrickroelofs.com"
          className="text-2xl font-black duration-200 ease-in-out md:text-5xl font-headers hover:text-themeRed"
        >
          contact@patrickroelofs.com
        </a>
      </div>
    </section>
  );
}

export default Contact;
