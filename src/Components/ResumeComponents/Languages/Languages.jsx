import React from 'react'
import Language from './Language'
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";


function Languages() {
  return (
    <div className=' flex items-center justify-between gap-5 '>
      <Language icon={<IoLogoJavascript />} name="Javascript" />
      <Language icon={<TbBrandCpp />} name="C++" />
      <Language icon={<FaPython />} name="Python" />
      <Language icon={<FaJava />} name="Java" />
    </div>
  )
}

export default Languages