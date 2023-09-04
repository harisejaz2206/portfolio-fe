import React from 'react';
import { FaFacebook, FaTwitter, FaGooglePlus, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white px-52">
      <div className="flex md:flex-row w-full bg-blue-50 rounded-lg shadow-lg dark:shadow-black/20">
        {/* Map and Contact Details */}
        <div className="flex-none bg-red-900 w-[350px] h-[550px] rounded-md overflow-hidden">
          <div className="relative h-[300px]">
            <iframe
              src="https://maps.google.com/maps?q=manhattan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="absolute left-0 top-0 h-full w-full"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4 ml-4 text-white">
            <div className="flex items-center mb-2">
              <FaPhone className="w-6 h-6 bg-blue-500 rounded-full mr-2 p-1" />
              <p>Contact Number: 123-456-7890</p>
            </div>
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="w-6 h-6 bg-blue-500 rounded-full mr-2 p-1" />
              <p>Location: Your Address Here</p>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="w-6 h-6 bg-blue-500 rounded-full mr-2 p-1" />
              <p>Email: example@example.com</p>
            </div>
            <p>You can also reach us on:</p>
            <div className="flex space-x-4 mt-2">
              {/* Social media icons */}
              <a href="https://facebook.com" className="text-white">
                <FaFacebook className="w-6 h-6 bg-blue-500 rounded-full p-1" />
              </a>
              <a href="https://twitter.com" className="text-white">
                <FaTwitter className="w-6 h-6 bg-blue-500 rounded-full p-1" />
              </a>
              <a href="https://plus.google.com" className="text-white">
                <FaGooglePlus className="w-6 h-6 bg-blue-500 rounded-full p-1" />
              </a>
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="flex-grow bg-blue-50 md:ml-4 md:mr-4 p-8">
        <h2 className="mb-2 text-xl font-bold pt-6 text-neutral-600">Get In Touch</h2>
          <hr className="mx-auto border-gray-300 w-full" />
          <form className="py-3">
          <div className="mb-1">
            <label className="block text-neutral-600 font-medium mb-1">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter Name" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-primary transition duration-300 ease-in-out" />
          </div>
          <div className="mb-1">
            <label className="block text-neutral-600 font-medium mb-1">Email*</label>
            <input type="email" name="email" id="email" placeholder="Enter Email" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-primary transition duration-300 ease-in-out" />
          </div>
          <div className="mb-1">
            <label className="block text-neutral-600 font-medium mb-1">Subject</label>
            <input type="text" name="subject" id="subject" placeholder="Subject" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-primary transition duration-300 ease-in-out" />
          </div>
          <div className="mb-3">
            <label className="block text-neutral-600 font-medium mb-1">Message</label>
            <textarea name="message" id="message" cols="20" rows="5" placeholder="Write Message Here..." className="w-full px-4 py-2 border rounded focus:outline-none focus:border-primary transition duration-300 ease-in-out resize-none"></textarea>
          </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="bg-red-900 px-6 py-2 text-white rounded font-medium uppercase focus:outline-none hover:bg-primary-600 active:bg-primary-700 transition duration-300 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
