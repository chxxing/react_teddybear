import { useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Search = ({ on, setOn, place }) => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const submitSearch = e => {
        // e.preventDefault();
        navigate(`/place/${input}`);
    };
    const searchHandler = (e) => {
        setInput(e.target.value);
    };
    return (
        <div className='Search'>
            <form onSubmit={submitSearch}>
                <input type="text" onChange={searchHandler} placeholder='지점을 검색해보세요.' />
                <button onClick={() => setOn(!on)}><CgSearch /></button>
            </form>
        </div >
    )
}
export default Search;
