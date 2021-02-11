import React from 'react';

function Contact() {
  return (
    <section className="relative flex items-center justify-center w-full h-screen py-16 m-auto text-center">
      <div>
        <p className="text-6xl font-bold font-headers">
          Now its your turn to say hello
          <span className="text-themeRed">.</span>
        </p>
        <a
          style={{ fontSize: '4vw' }}
          className="inline-block py-6 transition-colors duration-200 ease-in-out font-headers hover:text-themeRed"
          href="mailto:contact@patrickroelofs.com"
        >
          contact@patrickroelofs.com
        </a>
      </div>
    </section>
  );
}

export default Contact;
