import { useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Search = () => {
    // const [search, setSearch] = useSearchParams();
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const submitSearch = e => {
        e.preventDefault();
        navigate(`/place/${input}`);
    };
    const searchHandler = (e) => {
        setInput(e.target.value)
    };
    return (
        <div className='Search'>
            <form onSubmit={submitSearch}>
                <input type="text" onChange={searchHandler} />
                <button><CgSearch /></button>
            </form>
        </div>
    )
}

export default Search
