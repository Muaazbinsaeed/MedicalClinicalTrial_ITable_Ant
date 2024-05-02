import React, { useMemo } from 'react';
import { filters } from '@/misc/filters';
import SelectInput from './select';
import { CiFilter } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

export const DataFilters = ({ onSelect, selectedFilters, onClear }) => {

    const handleSelectFilter = (key, value) => {
        onSelect(key, value)
    }
    return (
        <div className="rounded-sm shadow-sm bg-slate-100 p-3">
            <div id="filter-header" className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-2 py-2">
                    <i><CiFilter size={24} /></i>
                    <span className="text-[22px] font-semibold">Filters</span>
                </div>
                <button onClick={onClear} className="w-full flex items-center justify-center rounded-md gap-x-2 p-2 bg-blue-500 text-white outline-none">
                    <i><MdDeleteOutline size={20} /></i>
                    <span>Clear Selections</span>
                </button>
            </div>
            {
                filters.map((filter) => {
                    return <div key={filter.title} className=" ">
                        <h2 className="py-4 text-[14px] uppercase font-semibold">{filter.title}</h2>
                        <div className="flex flex-col gap-y-2 px-2">
                            <SelectInput selected={selectedFilters[filter.key] === "All"} title="All" onClick={() => handleSelectFilter(filter.key, "All")} />
                            {filter.filters.map(item =>
                                <SelectInput selected={selectedFilters[filter.key] === item} key={item} title={item} onClick={() => handleSelectFilter(filter.key, item)} />
                            )
                            }
                        </div>
                    </div>
                }
                )
            }
        </div>
    )
};