import React from 'react';

function Contact() {
  return (
    <section className="w-full m-auto py-16 relative text-center h-screen flex items-center justify-center">
      <div>
        <p className="text-6xl font-headers font-bold">
          Now its your turn to say hello
          <span className="text-themeRed">.</span>
        </p>
        <a
          style={{ fontSize: '4vw' }}
          className="font-headers py-6 inline-block ease-in-out duration-200 transition-colors hover:text-themeRed"
          href="mailto:contact@patrickroelofs.com"
        >
          contact@patrickroelofs.com
        </a>
      </div>
    </section>
  );
}

export default Contact;
