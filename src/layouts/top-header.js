import React from 'react';

class TopHeader extends React.Component {
    render() {
        return (
            <div className="bg-teal-500 p-1">
                <div className="container m-auto pl-3 pr-3 flex justify-between flex-wrap">
                    <div className="w-1/2 py-1">
                        <span className="text-white">Phone number: (84) 7562 561</span>
                    </div>
                    <div className="w-1/2 text-right text-white">
                        <button  
                            className="ml-2focus:outline-none py-1 px-2" 
                            type="submit">
                        Login
                        </button>
                        /
                        <button 
                            type="button"
                            className="ml-2 focus:outline-none py-1">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopHeader;