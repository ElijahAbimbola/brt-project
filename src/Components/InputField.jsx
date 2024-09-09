import React from 'react'

export const InputFieldPrimary = ({name, type, placeholder, onchange}) => {
  return (
    <input type={type} name={name} placeholder={placeholder} onChange={onchange} className='px-5 border border-blue  h-10 w-60 font-League+spartan font-normal text-sm text-black  placeholder-black' />
  )
};

export const InputFieldSecondary = ({name, type, placeholder, onchange}) => {
  return (
    <input type={type} name={name} placeholder={placeholder} onChange={onchange} className='px-5 border border-blue  h-10 pb-24 pt-5 w-[500px] font-League+spartan font-normal text-sm  text-black placeholder-black' />
  )
};

export const InputField = ({name, type, placeholder, onchange}) => {
  return (
    <input type={type} name={name} placeholder={placeholder} onChange={onchange} className='px-5 border border-blue bg-Navyblue h-10 w-60 font-League+spartan font-normal text-sm text-black  ' />
  )
};