import React from 'react'

function ContactDetails() {
  return (
    <div className=' grid sm:grid-cols-2 grid-cols-1 gap-[3%] '>
        <div className=' flex flex-col gap-[1rem] '>
            <div className=' flex items-center justify-between '>
                <div className=' text-[1rem] px-4 bg-[#0E46A3] text-[#fff] rounded-sm '>Address:</div>
                <div className=' text-[1.2rem] '>Chittagong, Bangladesh</div>
            </div>
            <div className=' flex items-center justify-between '>
                <div className=' text-[1rem] px-4 bg-[#0E46A3] text-[#fff] rounded-sm '>Phone:</div>
                <div className=' text-[1.2rem] '>+8801789548766</div>
            </div>
        </div>
        <div className=' flex flex-col gap-[1rem]'>
            <div className=' flex items-center justify-between '>
                <div className=' text-[1rem] px-4 bg-[#0E46A3] text-[#fff] rounded-sm '>Email:</div>
                <div className=' text-[1.2rem] '>mdshahedpersonal@gmail.com</div>
            </div>
            <div className=' flex items-center justify-between '>
                <div className=' text-[1rem] px-4 bg-[#0E46A3] text-[#fff] rounded-sm '>Freelance:</div>
                <div className=' text-[1.2rem] '>Available</div>
            </div>
        </div>
    </div>
  )
}

export default ContactDetails