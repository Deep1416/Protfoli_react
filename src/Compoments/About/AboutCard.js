import React from 'react'
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <>
      <blockquote className='text-xl text-white'>
              <p>
                Hi Everyone, I am <span className='text-[#c770f0]'>Deependra Rajput</span> from{" "}
                <span className='text-[#c770f0]'>Gwalior, India.</span>
                <br />
                I am currently employed as a software developer at Juspay.
                <br />
                I have completed Integrated MSc (IMSc) in Maths and Computing at
                BIT Mesra.
                <br />
                <br />
                Apart from coding, some other activities that I love to do!
              </p>

              <ul className='mb-4'>
                <li className="flex items-center gap-2 mb-2 mt-4">
                <ImPointRight />
                  Playing Games
                </li>
                <li className="flex items-center gap-2 mb-2">
                <ImPointRight />
                  Writing Tech Blogs
                </li>
                <li className="flex items-center gap-2">
                <ImPointRight />Travelling
                </li>
              </ul>
              <p className='ml-6 text-[#c770f0]' >"Strive to build things that make a difference!"</p>
              <div className="text-center mt-4 text-[#c770f0]">Deependra</div>
            </blockquote>
    </>
  )
}

export default AboutCard
