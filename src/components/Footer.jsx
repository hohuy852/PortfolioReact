import React from 'react';

const Footer = () => {
    let date = new Date()
    let year = date.getFullYear()
  return <section id="footer" className='py-14 bg-[#23263a]'>
        <div className='text-center text-white xl:container px-5'>
            <p>{year} All rights reverse</p>
        </div>
  </section>;
};

export default Footer