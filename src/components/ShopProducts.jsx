import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import ShopCard from './ShopCard';

const ShopProducts = () => {
    const [isSortingMenuOpen, setSortingMenuOpen] = useState(false);
    const [sortingOption, setSortingOption] = useState('az'); // Default sorting option
  
    const featuredProducts = [
        {
          imageSrc: "/Panadol.png",
          name: "Panadol",
          price: "$19.99",
          category: "Analgesics",
          potency: "500 mg",
        },
        {
          imageSrc: "/Aspirin.png",
          name: "Aspirin",
          price: "$24.99",
          category: "Analgesics",
          potency: "750 mg",
        },
        {
          imageSrc: "/Cac.png",
          name: "CAC 1000 Plus",
          price: "$29.99",
          category: "Analgesics",
          potency: "1000 mg",
        },
        {
          imageSrc: "/Multivitamin.png",
          name: "Super Multi-Vitamin",
          price: "$14.99",
          category: "Analgesics",
          potency: "250 mg",
        },
        {
          imageSrc: "/Panadol.png",
          name: "Panadol",
          price: "$19.99",
          category: "Analgesics",
          potency: "500 mg",
        },
        {
          imageSrc: "/Gaviscon.png",
          name: "Gaviscon",
          price: "$24.99",
          category: "Analgesics",
          potency: "750 mg",
        },
      ];
  return (
    <div className='flex items-center px-36 py-4 justify-between'>
      <div className='bg-blue-50 h-screen items-center rounded-lg px-4 pt-5'>
        <div className="relative ">
          <input
            type="search"
            id="search-dropdown"
            className="block px-4 py-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 px-3 py-3.5 rounded-r-lg
             text-sm font-medium text-white bg-red-900 hover:bg-red-950 "
          >
            <AiOutlineSearch className="w-4 h-4" />
          </button>
        </div>

        <div className='mb-4 sm:mb-0'>
            <h2 className='text-md font-bold my-4'>CATEGORIES</h2>
        <form className='space-y-2 text-sm'>
          <label className='flex items-center space-x-2'>
            <input 
                type='checkbox' 
                id='hynotics' 
                name='hynotics'
                value='Hynotics' 
                className='form-checkbox accent-red-900' />
            <span>Hynotics</span>
            </label>
            <label className='flex items-center space-x-2'>
            <input 
                type='checkbox' 
                id='vaccines' 
                name='vaccines' 
                value='Vaccines' 
                className='form-checkbox accent-red-900' />
            <span>Vaccines</span>
            </label>
            <label className='flex items-center space-x-2'>
            <input 
                type='checkbox' 
                id='antipyretics' 
                name='antipyretics' 
                value='Antipyretics' 
                className='form-checkbox accent-red-900' />
            <span>Antipyretics</span>
            </label>
            <label className='flex items-center space-x-2'>
            <input 
                type='checkbox' 
                id='antineoplastics' 
                name='antineoplastics' 
                value='Antineoplastics' 
                className='form-checkbox accent-red-900' />
            <span>Antineoplastics</span>
          </label>
        </form>
      </div>

        <div className='mb-4 sm:mb-0'>
            <h2 className='text-md font-bold my-4'>BRANDS</h2>
        <form className='space-y-2 text-sm'>
          <label className='flex items-center space-x-2'>
            <input 
                type='checkbox' 
                id='fazaldin' 
                name='fazaldin'
                value='Fazaldin' 
                className='form-checkbox accent-red-900' />
            <span>Fazal Din Pharmacy</span>
            </label>
            <label className='flex items-center space-x-2'>
            <input 
                type='checkbox' 
                id='medplus' 
                name='medplus' 
                value='Medplus' 
                className='form-checkbox accent-red-900' />
            <span>Med Plus Pharmacy</span>
            </label>
            <label className='flex items-center space-x-2'>
            <input 
                type='checkbox' 
                id='servaid' 
                name='servaid' 
                value='Servaid' 
                className='form-checkbox accent-red-900' />
            <span>Servaid Pharmacy</span>
            </label>
            <label className='flex items-center space-x-2'>
            <input 
                type='checkbox' 
                id='medicare' 
                name='medicare' 
                value='Medicare' 
                className='form-checkbox accent-red-900' />
            <span>Medicare Pharmacy</span>
          </label>
          <label className='flex items-center space-x-2'>
            <input 
                type='checkbox' 
                id='bashir' 
                name='bashir' 
                value='Bashir' 
                className='form-checkbox accent-red-900' />
            <span>Bashir Son's Pharmacy</span>
          </label>
          <label className='flex items-center space-x-2'>
            <input 
                type='checkbox' 
                id='punjab' 
                name='punjab' 
                value='Punjab' 
                className='form-checkbox accent-red-900' />
            <span>Punjab Pharmacy</span>
          </label>
          <label className='flex items-center space-x-2'>
            <input 
                type='checkbox' 
                id='shaheen' 
                name='shaheen' 
                value='Shaheen' 
                className='form-checkbox accent-red-900' />
            <span>Shaheen Pharmacy</span>
          </label>
          <label className='flex items-center space-x-2'>
            <input 
                type='checkbox' 
                id='shifa' 
                name='shifa' 
                value='Shifa' 
                className='form-checkbox accent-red-900' />
            <span>Al-Shifa Pharmacy</span>
          </label>
        </form>
      </div>

      <div>
        <h2 className='text-md font-bold my-4'>WEIGHT</h2>
        <div className='grid grid-cols-3 items-center text-sm text-center'>
            <p className='border border-black m-1 rounded-sm bg-white'>1mg</p>
            <p className='border border-black m-1 rounded-sm bg-white'>2mg</p>
            <p className='border border-black m-1 rounded-sm bg-white'>4mg</p>
            <p className='border border-black m-1 rounded-sm bg-white'>10mg</p>
            <p className='border border-black m-1 rounded-sm bg-white'>25mg</p>
            <p className='border border-black m-1 rounded-sm bg-white'>100mg</p>
            <p className='border border-black m-1 rounded-sm bg-white'>200mg</p>
            <p className='border border-black m-1 rounded-sm bg-white'>500mg</p>

        </div>
      </div>

      </div>
      <div className='h-screen w-auto flex flex-col mb-20'>
      <div className="flex items-center justify-end py-2">
    {/* Search bar */}
    <div className="relative flex items-center">
      <input
        type="search"
        id="search-dropdown"
        className="block px-4 py-3 text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300"
        placeholder="Search"
        required
      />
      <button
        type="submit"
        className="absolute top-0 right-0 px-3 py-3.5 rounded-r-lg text-sm font-medium text-white bg-red-900 hover:bg-red-950"
      >
        <AiOutlineSearch className="w-4 h-4" />
      </button>
    </div>

    {/* Dropdown menu */}
    <div className="ml-4 relative">
    <button
      onClick={() => setSortingMenuOpen(!isSortingMenuOpen)}
      className="flex items-center px-3 py-2 rounded-lg text-gray-900"
    >
      <AiOutlineMenu className="w-5 h-5" />
    </button>
    {isSortingMenuOpen && (
      <div className="absolute right-0 mt-2 py-2 bg-white border border-gray-300 rounded-lg shadow-lg">
        <button
          className="block px-4 py-2 w-40 text-left hover:bg-gray-100"
          onClick={() => setSortingOption('az')}
        >
          Sort: A to Z
        </button>
        <button
          className="block px-4 py-2 w-40 text-left hover:bg-gray-100"
          onClick={() => setSortingOption('za')}
        >
          Sort: Z to A
        </button>
        <button
          className="block px-4 py-2 w-40 text-left hover:bg-gray-100"
          onClick={() => setSortingOption('lowToHigh')}
        >
          Price: Low to High
        </button>
        <button
          className="block px-4 py-2 w-40 text-left hover:bg-gray-100"
          onClick={() => setSortingOption('highToLow')}
        >
          Price: High to Low
        </button>
      </div>
    )}
  </div>
  </div>
      <div className="container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {featuredProducts.slice() 
        .sort((a, b) => {
            if (sortingOption === 'az') return a.name.localeCompare(b.name);
            if (sortingOption === 'za') return b.name.localeCompare(a.name);
            if (sortingOption === 'lowToHigh') return parseFloat(a.price) - parseFloat(b.price);
            if (sortingOption === 'highToLow') return parseFloat(b.price) - parseFloat(a.price);
        return 0;
        }).map((product, index) => (
          <ShopCard key={index} product={product} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default ShopProducts;
