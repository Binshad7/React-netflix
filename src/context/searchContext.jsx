import React,{createContext,useState} from 'react'

export const searchProvider = createContext();
function SearchContext({children}) {

    const [search,setSearch] = useState(null)
    const searchquery = (query)=>{
        setSearch(query)
    }
  return (
    <div>
       <searchProvider.Provider value={{searchquery,search}}>
        {children}
       </searchProvider.Provider>
    </div>
  )
}

export default SearchContext
