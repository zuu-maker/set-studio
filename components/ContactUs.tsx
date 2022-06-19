import React from 'react'

function ContactUs() {

    const [name,setName] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [subject,setSubject] = React.useState('')
    const [message,setMessage] = React.useState('')
    const [contactEmail,setContactEmail] = React.useState('zulumkhuzo@gmail.com')

    const submitForm = () => {
        window.open(
          `mailto:${contactEmail}?subject=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
            email
          )}): ${encodeURIComponent(message)}`
        );
      };

  return (
    <div id="contact-us-div" className='flex flex-col items-center ' >

        <div className=' p-6' >
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl' >Contact Us</p>
        </div>

        <div className='w-2/5 p-5 flex-2' >
            <div className='flex flex-col gap-4' >
                
                <div className='flex flex-col' >
                    <label className='text-gray-400 required:border-red-500' htmlFor="name">Name</label>
                    <div>
                        <input value={name} onChange={(e) => setName(e.target.value)} name='name' type="text" className='mt-1 p-2 border border-gray-300 focus:outline-none focus:border-sky-500 focus:ring focus:ring-sky-500 h-10 text-base shadow-sm block w-full sm:text-sm ' />
                    </div>
                    
                </div>

                <div className='flex flex-col' >
                    <label className='text-gray-400' htmlFor="email">Email</label>
                    <div>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} name='email' type="text" autoComplete='email' className='mt-1 p-2 border border-gray-300 focus:outline-none focus:border-sky-500 focus:ring focus:ring-sky-500 h-10 text-base shadow-sm block w-full sm:text-sm' />
                    </div>
                </div>

                <div className='flex flex-col' >
                    <label className='text-gray-400' htmlFor="subject">Subject</label>
                    <div>
                        <input value={subject} onChange={(e) => setSubject(e.target.value)} name='subject' type="text" autoComplete='email' className='mt-1 p-2 border border-gray-300 focus:outline-none focus:border-sky-500 focus:ring focus:ring-sky-500 h-10 text-base shadow-sm block w-full sm:text-sm'  />
                    </div>
                </div>

                <div className='flex flex-col' >
                    <label className='text-gray-400' htmlFor="message">Message</label>
                    <div>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={10} name='message' className='mt-1 p-2 border border-gray-300 focus:outline-none focus:border-sky-500 focus:ring focus:ring-sky-500 block w-full sm:text-sm  ' />
                    </div>
                </div>
                <button onClick={submitForm} className='text-white bg-sky-500 focus:ring focus:outline-none focus:ring-blue-100 drop-shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' >Send Message</button>
            </div> 
        </div>
        
    </div>
  )
}

export default ContactUs