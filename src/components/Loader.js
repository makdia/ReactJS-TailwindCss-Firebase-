import React from 'react'

const Loader = () => {
    return (
        <div  className="animate-pulse fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden opacity-75 flex flex-col items-center justify-center">
            <img src="/img/others/loader.gif" alt="Loading..."/>
        </div>
    )
}

export default Loader
