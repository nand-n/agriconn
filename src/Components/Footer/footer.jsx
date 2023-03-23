import React from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import footerLogo from '../../assets/Agri-Connect/footerLogo.png'
import mail from './assets/mail.png'
import phone from './assets/phone.png'
function Footer() {
  return (
//       <footer>
//     <div className=' flex justify-items-center w-full h-[338px] bg-[#2D2D2D] pl-10 pt-10'>
//         <div className="">
//           <Link  to={'/'} >
//           <img src={ footerLogo } alt="footerlogo" />
//           </Link>
//           <div className='mt-[35.04px] text-[#FFFFFF] text-[20px] space-y-[100px]'>
//             <p>Location : Adiss Abeba</p>
//           <p className='text-[#FFFFFF] align-bottom text-[20px]'>Copyright © 2023 Agri info. All rights reserved.</p>
//           </div>
//         </div>

//         <div className="ml-10  grid grid-col justify-items-start">
//           <h1 className='text-[30px] text-white font-bold '>Our Company</h1>
//           <Link to={'/about'} className='text-white hover:text-[#266937]  text-[20px] ml-5'>About</Link>
//           <Link to={'/search'} className='text-white hover:text-[#266937]  ml-5 text-[20px] '>Search</Link>
//           <Link to={'/privacy'} className='text-white  hover:text-[#266937] ml-5 text-[20px]'>Privacy Statment</Link>
//           <Link to={'/join'} className='text-white  hover:text-[#266937] ml-5 text-[20px]'>Join</Link>
//           <Link to={'/blog'} className='text-white  hover:text-[#266937] ml-5 text-[20px]'>Blogs</Link>

//         </div>
//         {/* <div className="ml-10  grid grid-col justify-items-start">
//           <h1 className='text-[30px] text-white font-bold '>Get in Touch</h1>
//           <div className="flex">
//             <img src={ clock} alt="time" />
//             <p className='text-white hover:text-[#266937]  text-[20px] ml-5'>
//               Weekday 8AM - 5PM
//             </p>
//             <p className='text-white hover:text-[#266937]  text-[20px] ml-5'>
//               Weekends 9AM - 5PM

//             </p>
            

//           </div>
//           <div className="flex justify-center">
//             <img src={mail}   width={30} alt="mail" />
//           <p className='text-white hover:text-[#266937]  ml-5 text-[20px] '>support@agrinfo.org</p>

//           </div>
//           <div className="flex">
//             <img src={phone} alt="phone" />
//           <p className='text-white hover:text-[#266937]  ml-5 text-[20px] '>0900000000</p>

//           </div>

//         </div> */}
//     <div className="relative py-5" style={{width: 220, height: 180,}}>
//     <div className="inline-flex items-center justify-center w-6 h-6 p-0.5 absolute" style={{left: 0, top: 39,}}>
//       <img className="flex-1 h-full rounded-lg" src={clock }/>
//     </div>
//     <p className="w-44 h-36 absolute right-0 bottom-0 text-sm leading-snug text-white">Weekday 8AM - 5PM<br/>Weekends 9AM - 5PM<br/>support@petratools.com<br/>1 (800) 613-6889<br/></p>
//     <p className="w-55 h-7 absolute right-0 top-0 text-base font-semibold text-white">Get in touch</p>
//     <img className="w-5 h-5 absolute rounded-lg" style={{ left: 4, top: 150, }} src={ phone } />
//     <img className="w-5 h-5 absolute rounded-lg" style={{ left: 1, top: 113, }} src={ mail} />
// </div>
//     </div>

//     </footer>
    <footer className="z-[50] bg-[#2D2D2D] text-center  text-white">
      <div className="container px-10 pt-6">
        <div className="mb-6 flex justify-between">
          <Link to='/' className=''>
              <img src={ footerLogo} alt="logo" />
          </Link>          
          <div>
            <Link
        to="#!"
        type="button"
        className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-full w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      </Link>

      <Link
        href="#!"
        type="button"
        className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-full w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </Link>

      <Link
        to="#!"
        type="button"
        className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-full w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
            fill-rule="evenodd"
            clip-rule="evenodd" />
        </svg>
      </Link>

      <Link
        href="#!"
        type="button"
        className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-full w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </Link>

      <Link
        to="#!"
        type="button"
        className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-full w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      </Link>

      <Link
        to="#!"
        type="button"
        className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-full w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </Link>
         </div>
    </div>

    <div>
      <form action="">
        <div
          className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
          <div className="md:ml-auto md:mb-6">
            <p className="">
              <strong>Sign up for our Blog</strong>
            </p>
          </div>

          <div className="relative md:mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput1"
              placeholder="Email address" />
            <label
              // for="exampleFormControlInput1"
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-200 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >Email address
            </label>
          </div>

          <div className="mb-6 md:mr-auto">
            <button
              type="submit"
              className="inline-block rounded border-2 border-neutral-50 px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-[#2ACC32] hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4">
      <div className="mb-6">
        <h5 className="mb-2.5 font-bold uppercase">Location</h5>

        {/* <ul className="mb-0 list-none">
          <li>
            <Link to="#!" className="text-white">Link 1</Link>
          </li>
          <li>
            <Link to="#!" className="text-white">Link 2</Link>
          </li>
          <li>
            <Link to="#!" className="text-white">Link 3</Link>
          </li>
          <li>
            <Link to="#!" className="text-white">Link 4</Link>
          </li>
        </ul> */}
      </div>

      <div className="mb-6">
        <h5 className="mb-2.5 font-bold uppercase justify-start">Our Company</h5>

        <ul className="mb-0 list-none">
          <li>
            <Link to="/about" className="text-white">About</Link>
          </li>
          <li>
            <Link to="/privacy" className="text-white">Privacy</Link>
          </li>
          <li>
            <Link to="/blog" className="text-white">Blog</Link>
          </li>
          <li>
            <Link to="search" className="text-white">Search</Link>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h5 className="mb-2.5 font-bold uppercase">Get Intouch</h5>
             <div className="flex my-3">
              <img src={phone} width={20} height={ 30 } alt="time" />
             <p className='text-white hover:text-[#266937] text-[15px] ml-5'>
               09000000000
             </p>
            </div>
            <div className="flex">
              <img src={mail} width={20} height={ 30 } alt="time" />
             <p className='text-white hover:text-[#266937]  text-[15px] ml-5'>
               contact@agrinfo.org
             </p>
            </div>
      </div>
      <div className="mb-6 my-3">
        <h5 className="mb-2.5 font-bold uppercase">Dont Miss Out</h5>
        <ul className="mb-0 list-none">
          <li>
            <p  className="text-white">Sign Up to our Blog</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div
        className="mx-4 my-0 text-center">
     © 2023 Copyright :
    <Link className="text-white" href="https://tailwind-elements.com/"
        >  Agri-Connect.
        </Link>
  </div>
</footer>
  )
}

export default Footer