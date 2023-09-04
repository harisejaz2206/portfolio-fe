import React from 'react';
import { IoIosArrowBack } from "react-icons/io";


const EditProfileCard = () => {
  return (
    <div className="bg-gray-100 px-8 py-6 rounded w-full ml-8">  
    
    <div className="flex items-start justify-between ">
        <div className="flex items-start space-x-8">
        <img
          src="/profile.png"
          alt="profile"
          className="w-24 h-24 rounded-full"
        />
        <div className='ml-5 mt-4'>
            <h2 className="text-lg font-semibold ">Michael Clarke</h2>
            <p className="text-gray-500">Alaska, United States</p>
        </div>
    </div>
    <a href="/profile" className='flex'>
    <IoIosArrowBack className='text-red-900 mt-1'/>
    <p className='text-red-900 hover:underline font-bold'>Back</p>
    </a>
    </div>


    <form className='mt-4'>
    <div class="grid gap-4 mb-4 md:grid-cols-2">
        <div>
            <label for="full_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
            <input type="text" id="full_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 " placeholder="Your Name" required/>
        </div>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5" placeholder="dotbrand@gmail.com" required/>
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5" placeholder="Your Company Name" required/>
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div>
            <label for="license" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Medical License Number</label>
            <input type="text" id="license" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5" placeholder="A1234455612" required/>
        </div>
        <div>
            <label for="expiry_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Medical License Expiry Date</label>
            <input type="date" id="expiry_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="" required/>
            </div>
        </div>
        <div class="mb-1">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="•••••••••" required/>
        </div> 
        <div class="flex mb-4 justify-end">
            <label for="remember" class="ml-2 text-sm font-medium text-gray-900"><a href="/" class="text-red-900 hover:underline">Change Password</a></label>
        </div>
        <div class="flex justify-end"> 
        <button 
            type="submit" 
            class="text-white bg-red-950 hover:bg-red-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save Changes
        </button>
    </div>
        </form>
            
          </div>
  );
};

export default EditProfileCard;
