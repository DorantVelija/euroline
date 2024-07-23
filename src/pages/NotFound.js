import React from 'react';
import Heading from '../components/Heading';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="bg-gray-900 py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                <div className="grid gap-8 sm:grid-cols-2 text-white">

                    <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
                        <p className="mb-4 text-sm font-semibold uppercase text-blue-500 md:text-base">Error 404</p>
                        <h1 className="mb-2 text-center text-2xl font-bold sm:text-left md:text-3xl">Page
                            not found</h1>

                        <p className="mb-8 text-center sm:text-left md:text-lg">The page you’re looking
                            for doesn’t exist.</p>

                        <Link to="/"
                           className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-blue-400 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Go
                            home</Link>
                    </div>


                    <div className="relative h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                        <img
                            src="https://img.freepik.com/free-vector/changing-flat-tire-concept-illustration_114360-20473.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721347200&semt=ais_user"
                            loading="lazy" alt="Photo by @heydevn"
                            className="absolute inset-0 h-full w-full object-cover object-center"/>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default NotFound