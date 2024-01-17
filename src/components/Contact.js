import React from 'react'

import WuObjectR from '../assets/img/wuestenrot_object_red.svg'
import WuObjectRH from '../assets/img/wuestenrot_object_red_hollow.svg'
import WuObjectG from '../assets/img/wuestenrot_object_grey.svg'
import WuObjectGR from '../assets/img/wuestenrot_object_grey_reverted.svg'
import WuObjectGRM from '../assets/img/wuestenrot_object_grey_reverted_mirrored.svg'
import WuObjectDR from '../assets/img/wuestenrot_object_dark_red.svg'
import WuObjectDRH from '../assets/img/wuestenrot_object_dark_red_hollow.svg'

import { contact } from '../data'

import WuLogo from '../assets/img/wuestenrot_object_logo.svg'
import Redirect from './Redirect'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

//   const navigate = useNavigate();

  return (
    <section className='section bg-contact relative overflow-hidden scroll-mt-16' id='contact'>
        <div className='container mx-auto'>
            
            <div className=''>
                <img className='absolute top-[40rem] right-0 h-full select-none drag-none z-0 max-lg:opacity-60' draggable="false" src={WuObjectG} />
            </div>

            <div className='max-lg:hidden'>
                <img className='absolute -top-40 right-14 h-2/4 select-none drag-none z-0 max-lg:opacity-60' draggable="false" src={WuObjectRH} />
            </div>

            <div className='max-lg:hidden'>
                <img className='absolute -top-60 -right-0 h-2/4 select-none drag-none z-0 max-lg:opacity-60' draggable="false" src={WuObjectDRH} />
            </div>

            {/* section title */}
            <div className='flex flex-col items-center text-center z-10 max-lg:mt-12'>
                <h2 className='section-title text-quaternary text-4xl before:content-kontakt relative before:absolute before:opacity-40 before:-top-[3rem] before:-right-[30rem] before:max-xl:-right-96 before:max-xl:scale-75 before:max-sm:-right-56 space-y-1'>
                    <p className='opacity-80'>Kontakt</p>
                    <hr className='border-tertiary w-full border' />
                    <hr className='border-accent-hover w-1/3 border-2' />
                    </h2>
                <p className='subtitle text-maintext z-10'>
                 V prípade akýchkoľvek otázok ma neváhajte kontaktovať na dole uvedené adresy alebo mi napíšte cez kontaktný formulár.
                </p>
            </div>
            <div className='flex flex-col lg:gap-x-8 lg:flex-row object-cover max-lg:items-center'>
                {/* info */}
                <div className='w-1/2 max-md:w-11/12 flex flex-1 flex-col items-start space-y-12 mb-6 lg:mb-0 lg:pt-6 lg:p-6 bg-[#c4c6cc] z-10 max-lg:p-10 lg:flex-[2_2_0%] rounded-xl max-lg:w-3/4'>
                    {contact.map((item, index) => {
                        const {icon, title, subtitle, description} = item;
                        return <div className='flex flex-col lg:flex-row gap-x-4 bg-primary p-4 w-full shadow-md duration-500' key={index}>
                            <div className='rounded-sm w-14 h-14 flex items-start justify-center mt-2 -mb-4 lg:mb-0 text-2xl text-tertiary opacity-90'>{icon}</div>
                            <div className=''>
                                <h4 className='font-body text-maintext text-xl mb-3'>{title}</h4>
                                <p className='mb-1'>{subtitle}</p>
                                <p className='text-quaternary font-bold opacity-90'>{description}</p>
                            </div>
                           
                        </div>
                    })}
                </div>

                {/* form */}
                <form className='space-y-8 w-full max-w-[780px] z-10 max-xl:flex max-xl:flex-wrap lg:flex-[3_3_0%] max-lg:justify-center bg-[#c4c6cc] px-10 pb-8' name='contact' method='POST' action="https://formsubmit.co/patriciadepaarse1@gmail.com" onSubmit={() => {javascript:window.open('http://localhost:3000/redirect', '_blank')}}>
                    <input type="hidden" name="_template" value="table"/>
                    <input type="hidden" name="_subject" value="Nová správa zo stránky vierapodhradska.sk"/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_next" value="http://localhost:3000"/>
                    <div className='flex gap-8 w-full max-xl:flex max-xl:flex-wrap max-lg:flex-nowrap max-md:flex-wrap'>
                        <input className='input focus:outline-none focus:border focus:border-maintext' type='text' name='Meno' placeholder='Vaše meno' required/>
                        <input className='input focus:outline-none focus:border focus:border-maintext' type='email' name='E-mail' placeholder='Váš email' required/>
                    </div>
                    <input className='input focus:outline-none focus:border focus:border-maintext' type='text' name='Téma' placeholder='Téma / Názov' required/>
                    <textarea className='textarea focus:outline-none focus:border focus:border-maintext' name='Správa' placeholder='Vaša správa' required></textarea>
                    <button id='button' className='btn btn-md bg-quaternary hover:bg-accent-hover md:btn-lg transition-all p-8 px-14 font-bold mt-10'>Odoslať</button>
                </form>
            </div>

            {/* onsubmit="javascript:window.open('http://localhost:3000/redirect', '_blank');" */}
            {/* onsubmit=navigate('/path', { replace:true }); */}
            {/* onSubmit={function Redirection() {return <Navigate to="/redirect" target="_blank"/>}} */}
            {/* onSubmit={function Redirection () {navigate("/redirect")}} */}

            <div className=''>
                <img className='absolute top-60 -left-40 w-2/3 select-none drag-none z-0 opacity-90' draggable="false" src={WuLogo} />
            </div>
            {/* <div className='hidden max-md:block'>
                <img className='absolute -bottom-52 -right-28 w-full select-none drag-none z-0 opacity-90' draggable="false" src={WuLogo} />
            </div> */}

        </div>
    </section>
  )
}

export default Contact