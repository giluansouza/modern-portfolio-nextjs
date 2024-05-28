import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import { MagicButton } from './ui/magic-button'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer
      className="w-full pb-4"
      id="contact"
      style={{
        background: "url('/footer-grid.svg')",
        backgroundSize: 'cover'
      }}
    >
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt='footer grid'
          className="w-full h-full opacity-50"
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Pronto para levar <span className="text-red-400">sua</span> presença digital para o próximo nível?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Entre em contato comigo hoje e vamos discutir como posso ajudá-lo a atingir seus objetivos.
        </p>
        <a href="mailto:contato@giluansouza.com.br">
          <MagicButton
            title="Entre em contato"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Giluan Souza
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer