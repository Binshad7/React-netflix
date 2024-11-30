import { useState } from 'react';
import SearchResults from '../SearchResult/SearchResults';
import instance from '../../axois';
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'
import { api_key } from '../../constants/constants';
import Loader from '../../utils/Loader/Loader';
function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoader] = useState(false);
    const navigate = useNavigate()
    const handleSearch = async (e) => {
        setLoader(true)
        setSearchTerm(e.target.value)
        console.log('hello clicked');

        try {
            const response = await instance.get(`/search/movie?api_key=${api_key}&query=${searchTerm}&include_adult=false&language=en-US&page=1`)
            setResults(response.data.results)
            setLoader(false)

        } catch (error) {
            console.log('error is here');
            console.log(error.message);
            setLoader(false)
        }
    };

    return (
        <div className="app">
            <ArrowLeft className='back-btn' onClick={() => navigate(-1)} />
            <header className="search-bar">
                <input
                    type="text"
                    placeholder="Search for movies or shows..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                {/* <button onClick={handleSearch}>Search</button> */}
            </header>
            {
                loading ?
                 <Loader /> :
                    <SearchResults results={results} />
            }
        </div>
    )
}
export default SearchBar