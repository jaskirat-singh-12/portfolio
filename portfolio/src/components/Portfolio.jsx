import React from 'react'
import { assets } from '../assets/assets'
function Portfolio() {
  return (
    <>
      <h1 className='text-4xl py-2 text-center font-bold'>Projects</h1>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
            <a href="https://671a004f14b9a7908ee6f253--glittering-cucurucho-7fc905.netlify.app/" target="https://671a004f14b9a7908ee6f253--glittering-cucurucho-7fc905.netlify.app/" rel="noopener noreferrer">
            
              <img

                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={assets.web1}
              />
            </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://672d2c2a2c0c365c9aa31719--rococo-genie-a32049.netlify.app/" target="https://672d2c2a2c0c365c9aa31719--rococo-genie-a32049.netlify.app/" rel="noopener noreferrer">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
            
                src={assets.web2}
              />
            </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://65b0e1b5d3693c0008d2f7a7--famous-sfogliatella-c0b2cb.netlify.app/" target="https://65b0e1b5d3693c0008d2f7a7--famous-sfogliatella-c0b2cb.netlify.app/" rel="noopener noreferrer">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={assets.web3}
              />
            </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://672d2b725f49cf59f9b36d7d--delicate-bunny-4fdf00.netlify.app/" target="https://672d2b725f49cf59f9b36d7d--delicate-bunny-4fdf00.netlify.app/" rel="noopener noreferrer">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={assets.web4}
              />
            </a>
            </div>
            <div className="inline-block">
            <a href="https://672d2ccf06f8da5abb87aa84--spiffy-youtiao-3881b8.netlify.app/" target="https://672d2ccf06f8da5abb87aa84--spiffy-youtiao-3881b8.netlify.app/" rel="noopener noreferrer">
              <img 
                className=" text-center rounded-lg flex-1"
                width={"50%"}
                height={"50%"}
                layout="responsive"
                src={assets.web5}
              />
            </a>
            </div>
            
          </div> 
    </>
  )
}

export default Portfolio
