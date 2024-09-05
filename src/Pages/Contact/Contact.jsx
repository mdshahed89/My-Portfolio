import React from 'react'
import ContactDetails from '../../Components/ContactComponents/ContactDetails'
import ContactForm from '../../Components/ContactComponents/ContactForm'

function Contact() {
  return (
    <section id='contact'>
      <h3 className=" py-[2rem] border-b border-[#e0e0e0] pl-[1rem] text-[1.5rem] font-semibold w-full ">
        <span className=" text-[#0E46A3] ">G</span>et 
        <span className=" text-[#0E46A3] "> I</span>n
        <span className=" text-[#0E46A3] "> T</span>ouch
      </h3>

      <div >
      <div className=' p-[3%] '>
      {/* <iframe className=' h-[140px] sm:h-[250px] w-full ' src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1844.759575199118!2d91.7758379325969!3d22.37177816442939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d22.372336237293357!2d91.77497426138913!5e0!3m2!1sen!2sbd!4v1719987189581!5m2!1sen!2sbd" width="100%" height={350} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      <iframe className=' h-[140px] sm:h-[250px] w-full ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.715048045768!2d91.78853227586771!3d22.364385840568268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9027bad6ee9%3A0x49fb343d11b601e0!2sAkbarshah%20Ln%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1725028175098!5m2!1sen!2sbd" width="100%" height={350} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className=' p-[3%] '>
        <ContactDetails />
      </div>
      <h3 className="py-[2rem] pl-[1rem] border-b border-[#e0e0e0] text-[1.5rem] font-semibold ">
        <span className=" text-[#0E46A3] ">C</span>ontact
        <span className=" text-[#0E46A3] "> F</span>orm
      </h3>
      <div className=' p-[3%] '>
      
        <ContactForm />
      </div>
      </div>


    </section>
  )
}

export default Contact