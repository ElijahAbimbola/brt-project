import React from 'react'

export const WhiteButton = ({name, onclick, loading, type}) => {
  return (
    <button className='text-center text-black bg-white text-sm py-4 px-6 font-semibold font-Krub ' onClick={onclick} type={type}>
        {name}
    </button>
  )
}

export const YellowHomeButton = ({name, onclick, loading, type}) => {
  return (
    <button className='text-center text-black button text-sm px-6 py-3 font-semibold font-Krub bg-cover ' onClick={onclick} type={type}>
        {name}
    </button>
  )
}
export const OrangeButton = ({name, onclick, loading, type}) => {
  return (
    <button className='text-center text-white bg-PrimaryOrange text-sm px-3 py-3 font-semibold font-Krub bg-cover ' onClick={onclick} type={type}>
        {name}
    </button>
  )
}

export const GreyButtonIcon = ({name, onclick, loading, type}) => {
  return (
    <button className='text-left pl-5 text-grey4 bg-grey3 text-sm  py-3 font-semibold font-Krub bg-cover w-[320px] h-[60px] ' onClick={onclick} type={type}>
        {name}
    </button>
  )
}
