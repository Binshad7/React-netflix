import React, { useEffect, useState,Suspense } from 'react';
import './SearchResult.css';
import SkeletonCard from '../../utils/PreLoad/SkeletonCard';

 const Card = React.lazy(()=>import('../../utils/Card/Card'))

const SearchResults = ({ results }) => {
  const [filterval,setFilterval] = useState([]);


  useEffect(() => {
    setFilterval(results.filter((val) => val.backdrop_path != null && val.title != null));
  }, [results]);
  
  return (
    <div className="results-grid">
      {filterval.length > 0 ? (
        filterval.map((item) => (
          <Suspense fallback={<SkeletonCard/>}>

            <Card  imgURL={item.backdrop_path} itemId={item.id} title={item.title} overview={item.overview}       key={item.id}     />
          </Suspense>
        ))
      ) : (
        <div className='result-not-found'>
          <p className='error-msg'>No results found. Try searching for something else ...</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
