import React from 'react'
import { IoLogoFigma } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import Language from '../Languages/Language';


function Tools() {
  return (
    <div className=' flex items-center justify-between gap-5 '>
      <Language icon={<IoLogoFigma />} name="Figma" />
      <Language icon={<FaGitAlt />} name="Git" />
      <Language icon={<FaGithub />} name="Github" />
      <Language icon={<SiAdobephotoshop />} name="Photoshop" />
    </div>
  )
}

export default Tools