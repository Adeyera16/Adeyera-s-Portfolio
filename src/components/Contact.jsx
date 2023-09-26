import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
    const contactForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4nt2c4p', 'template_kezj6nj', contactForm.current, 'G6sLPrEVzzV7zs6mN')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
  return (
    <div id='contact' className=' text-black md:px-[5rem] border-t-4 border-gray-700'>
        <div className='flex flex-col justify-center max-w-[50rem] p-4 '>
            <h4 className='text-[1rem] font-bold '>Get in Touch</h4>
            <h1 className='text-[2.5rem] font-extrabold gradient__text'>Contact.</h1>
            <form ref={contactForm} onSubmit={sendEmail} className='flex flex-col '>
                <label htmlFor="user_name" className='flex flex-col mt-[1rem] '>
                    Your name:
                  <input type="text" name='user_name' placeholder="What's your name?" required className='border-2 border-gray-200 rounded-lg p-2 w-[20rem] my-2'/>
                </label>
                <label htmlFor="user_email" className='flex flex-col mt-[1rem]'>
                    Your email:
                  <input type="email" name='user_email' placeholder="What's your email?" required className='border-2 border-gray-200 rounded-lg p-2 w-[20rem] my-2'/>
                </label>
                <label htmlFor="subject" className='flex flex-col mt-[1rem]'>
                    Subject:
                  <input type="text" name='subject' placeholder="Subject" required className='border-2 border-gray-200 rounded-lg p-2 w-[20rem] my-2'/>
                </label>
                <label htmlFor="message" className='flex flex-col mt-[1rem] '>
                    Your message:
                  <textarea name="message" id="" cols="30" rows="10" placeholder="What's your message?" className='border-2 border-gray-200 p-2 w-[25rem] my-2 rounded-lg'>
                  </textarea>
                </label>
                <button type='submit' className='gradient__bg text-white w-[10rem] my-4 p-2 rounded-full'>
                    Send Message
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact