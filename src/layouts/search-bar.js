import React, {Component} from 'react';

class SearchBar extends Component {
    closeFormSearch(event) {
        if(event.target.className === 'search-wrapper') {            
            document.body.classList.remove('show-search--form');
        }
    }

    render() {
        return (
            <div className="search-wrapper" onClick={(event) => {this.closeFormSearch(event)}}>
                <form className="form-search-product shadow-md">
                    <input 
                        type="search" 
                        name="search" 
                        placeholder="Search product items."
                        className="w-full border-b-2 focus:outline-none p-1"/>
                    <button className="ml-4 mt-4 bg-teal-500 hover:bg-teal-700 text-white py-1 px-4">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;