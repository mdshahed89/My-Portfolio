import React from 'react'
import Blog from './Blog'
import BlogImg1 from "../../assets/BlogImg1.webp";
import BlogImg2 from "../../assets/BlogImg2.webp";
import BlogImg3 from "../../assets/BlogImg3.webp";
import BlogImg4 from "../../assets/BlogImg4.webp";
import BlogImg5 from "../../assets/BlogImg5.webp";
import BlogImg6 from "../../assets/BlogImg6.webp";

function Blogs() {
  return (
    <div>
      <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4 '>
        <Blog img={BlogImg1} time="6th July, 2024" title="Machine Learning Concepts and Applications" details="Delve into the basics of machine learning, a pivotal technology in today's data-driven world. This blog will cover foundational concepts such as supervised and unsupervised learning, algorithms, and model evaluation. Readers will gain insight into various applications of machine learning, from recommendation systems and image recognition to natural language processing and predictive analytics." react="4k" />
        <Blog img={BlogImg2} time="16th June, 2024" title="Understanding Asynchronous JavaScript" details="Dive into the world of asynchronous programming in JavaScript with this in-depth tutorial. Learn how to handle asynchronous..." react="3k" />
        <Blog img={BlogImg3} time="6th June, 2024" title="Mastering React: From Beginner to Advanced" details="Unlock the full potential of React by starting with the basics and progressing to advanced concepts. This comprehensive guide covers everything from creating your first React component to optimizing performance and managing state with Redux. Whether you're a beginner or looking to enhance your skills, this journey through React will equip you with the knowledge to build robust and scalable applications." react="2k" />
        <Blog img={BlogImg4} time="3th June, 2024" title="Revolutionizing Agreements in the Digital Age" details="Discover the world of smart contracts and how they are transforming the way agreements are made and executed. This blog explains the mechanics of smart contracts on blockchain platforms like Ethereum, highlighting their benefits, real-world use cases, and the challenges they face. Learn how smart contracts are enabling trustless and automated transactions across various industries." react="5k" />
        <Blog img={BlogImg5} time="12th May, 2024" title="The Future of Financial Services" details="Explore the burgeoning field of decentralized finance (DeFi) and its impact on the traditional financial system. This blog provides an overview of key DeFi applications, such as decentralized exchanges, lending platforms, and stablecoins. Understand how DeFi is democratizing access to financial services, the risks involved, and the innovations driving this rapidly evolving ecosystem." react="3k" />
        <Blog img={BlogImg6} time="22th Apr, 2024" title="Unveiling the Power of Neural Networks" details="Explore the advanced realm of deep learning and how it leverages neural networks to achieve breakthroughs in artificial intelligence. This blog explains the structure and function of neural networks, the importance of layers and nodes, and how deep learning models are trained. Learn about key applications of deep learning in areas like computer vision, speech recognition, and autonomous systems, highlighting its transformative impact on technology and society." react="8k" />
    </div>
      <div className='mt-[8rem] flex justify-center  '>
        <button className=' text-[1.4rem] font-semibold '>Load More</button>
      </div>
    </div>
  )
}

export default Blogs