import React, { useState } from 'react'
import '../styles/search.css'

function Search({ searchQuery, onSearchChange}) {
  return (
    <>
    <div className='flex gap-8 px-5 mb-3'>
      <input type="search" value={searchQuery} onChange={onSearchChange} name="" className='py-1 rounded-sm px-2 w-full outline-none bg-slate-500 text-white search-input' placeholder='Quick Search' />
    </div>
    </>
  )
}

export default Search
