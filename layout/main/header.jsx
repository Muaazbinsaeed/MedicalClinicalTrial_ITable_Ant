import Link from 'next/link';
import React from 'react'

export const AppHeader = () => {
    return (
        <div className="p-4 fixed top-0 right-0 left-0 bg-white z-10 shadow-md">
            <div className="container flex items-center justify-between">
                <span className='text-3xl uppercase font-medium'>Logo</span>
                <nav>
                    <ul className="flex items-center">
                        {
                            [
                                "HOME",
                                "METHODS",
                                "INTRODUCTION",
                                "PRISMA",
                                "SUMMARY TABLES",
                                "SOF TABLE",
                                "EVIDENCE MAP",
                                "PUBLICATIONS"].map((link) =>
                                    <li className="text-[12px] font-medium px-4 py-1 ">
                                        <Link className="group transition duration-300" href="/study-characteristics-table">{link}
                                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                                        </Link>
                                    </li>)
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
};