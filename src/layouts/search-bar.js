import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <form className="form-search-product">
                <input 
                    type="search" 
                    name="search" 
                    placeholder="Search"
                    className="border w-56 border-0 p-1"/>
                <button className="ml-4 bg-teal-500 hover:bg-blue-700 text-white py-1 px-4">Search</button>
            </form>

        )
    }
}

export default SearchBar;