import React, { useState } from 'react';
import { CiFilter } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import SelectInput from './select';
import { filters } from '@/misc/filters';

export const DataFilters = ({ onSelect, selectedFilters, onClear }) => {
  const [localFilters, setLocalFilters] = useState(selectedFilters);

  const handleSelectFilter = (key, value) => {
    const updatedFilters = {
      ...localFilters,
      [key]: value === 'All' ? ['All'] : toggleFilterValue(key, value),
    };
    setLocalFilters(updatedFilters);
    onSelect(key, updatedFilters[key]);
  };

  const toggleFilterValue = (key, value) => {
    const currentFilters = localFilters[key] || [];
    return currentFilters.includes(value)
      ? currentFilters.filter((item) => item !== value)
      : [...currentFilters.filter((item) => item !== 'All'), value];
  };

  const handleClearSelections = () => {
    const updatedFilters = {};
    filters.forEach(filter => {
      updatedFilters[filter.key] = ['All'];
    });
    setLocalFilters(updatedFilters);
    onClear();
  };

  return (
    <div className="rounded-sm shadow-sm bg-slate-100 p-3">
      <div id="filter-header" className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2 py-2">
          <i><CiFilter size={24} /></i>
          <span className="text-[22px] font-semibold">Filters</span>
        </div>
        <button
          onClick={handleClearSelections}
          className="w-full flex items-center justify-center rounded-md gap-x-2 p-2 bg-blue-500 text-white outline-none"
        >
          <i><MdDeleteOutline size={20} /></i>
          <span>Clear Selections</span>
        </button>
      </div>
      {filters.map((filter) => (
        <div key={filter.title} className=" ">
          <h2 className="py-4 text-[14px] uppercase font-semibold">
            {filter.title}
          </h2>
          <div className="flex flex-col gap-y-2 px-2">
            <SelectInput
              selected={localFilters[filter.key]?.includes('All')}
              title="All"
              onClick={() => handleSelectFilter(filter.key, 'All')}
            />
            {filter.filters.map((item) => (
              <SelectInput
                key={item}
                selected={localFilters[filter.key]?.includes(item)}
                title={item}
                onClick={() => handleSelectFilter(filter.key, item)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
// import { CiFilter } from "react-icons/ci";
// import { MdDeleteOutline } from "react-icons/md";
// import SelectInput from './select';
// import { filters } from '@/misc/filters';

// export const DataFilters = ({ onSelect, selectedFilters, onClear }) => {
//   const [localFilters, setLocalFilters] = useState(selectedFilters);

//   const handleSelectFilter = (key, value) => {
//     const updatedFilters = {
//       ...localFilters,
//       [key]: value === 'All' ? ['All'] : toggleFilterValue(key, value),
//     };
//     setLocalFilters(updatedFilters);
//     onSelect(key, updatedFilters[key]);
//   };

//   const toggleFilterValue = (key, value) => {
//     const currentFilters = localFilters[key] || [];
//     return currentFilters.includes(value)
//       ? currentFilters.filter((item) => item !== value)
//       : [...currentFilters.filter((item) => item !== 'All'), value];
//   };

//   const handleClearSelections = () => {
//     const updatedFilters = {};
//     filters.forEach(filter => {
//       updatedFilters[filter.key] = ['All'];
//     });
//     setLocalFilters(updatedFilters);
//     onClear();
//   };

//   return (
//     <div className="rounded-sm shadow-sm bg-slate-100 p-3">
//       <div id="filter-header" className="flex flex-col gap-y-2">
//         <div className="flex items-center gap-x-2 py-2">
//           <i><CiFilter size={24} /></i>
//           <span className="text-[22px] font-semibold">Filters</span>
//         </div>
//         <button
//           onClick={handleClearSelections}
//           className="w-full flex items-center justify-center rounded-md gap-x-2 p-2 bg-blue-500 text-white outline-none"
//         >
//           <i><MdDeleteOutline size={20} /></i>
//           <span>Clear Selections</span>
//         </button>
//       </div>
//       {filters.map((filter) => (
//         <div key={filter.title} className=" ">
//           <h2 className="py-4 text-[14px] uppercase font-semibold">
//             {filter.title}
//           </h2>
//           <div className="flex flex-col gap-y-2 px-2">
//             <SelectInput
//               selected={localFilters[filter.key]?.includes('All')}
//               title="All"
//               onClick={() => handleSelectFilter(filter.key, 'All')}
//             />
//             {filter.filters.map((item) => (
//               <SelectInput
//                 key={item}
//                 selected={localFilters[filter.key]?.includes(item)}
//                 title={item}
//                 onClick={() => handleSelectFilter(filter.key, item)}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };



// import React, { useState } from 'react';
// import { filters } from '@/misc/filters';
// import SelectInput from './select';
// import { CiFilter } from "react-icons/ci";
// import { MdDeleteOutline } from "react-icons/md";

// /**
//  * DataFilters component
//  *
//  * Props:
//  *  - onSelect: function to handle filter selection
//  *  - selectedFilters: object with current filter selections
//  *  - onClear: function to clear all filter selections
//  */

// export const DataFilters = ({
//     onSelect,
//     selectedFilters,
//     onClear,
//   }) => {
//     const [localFilters, setLocalFilters] = useState(selectedFilters);
  
//     const handleSelectFilter = (key, value) => {
//       let updatedFilters = {};
//       if (value === 'All') {
//         updatedFilters = {
//           ...localFilters,
//           [key]: ['All'],
//         };
//       } else {
//         const currentFilters = localFilters[key] || [];
//         if (currentFilters.includes('All')) {
//           updatedFilters = {
//             ...localFilters,
//             [key]: [value],
//           };
//         } else {
//           const newFilters = currentFilters.includes(value)
//             ? currentFilters.filter((item) => item !== value)
//             : [...currentFilters, value];
//           updatedFilters = {
//             ...localFilters,
//             [key]: newFilters,
//           };
//         }
//       }
//       setLocalFilters(updatedFilters);
//       onSelect(key, updatedFilters[key]);
//     };
  
//     const handleClearSelections = () => {
//       const updatedFilters = {};
//       filters.forEach(filter => {
//         updatedFilters[filter.key] = ['All'];
//       });
//       setLocalFilters(updatedFilters);
//       onClear();
//     };
  
//     return (
//       <div className="rounded-sm shadow-sm bg-slate-100 p-3">
//         <div id="filter-header" className="flex flex-col gap-y-2">
//           <div className="flex items-center gap-x-2 py-2">
//             <i>
//               <CiFilter size={24} />
//             </i>
//             <span className="text-[22px] font-semibold">Filters</span>
//           </div>
//           <button
//             onClick={handleClearSelections}
//             className="w-full flex items-center justify-center rounded-md gap-x-2 p-2 bg-blue-500 text-white outline-none"
//           >
//             <i>
//               <MdDeleteOutline size={20} />
//             </i>
//             <span>Clear Selections</span>
//           </button>
//         </div>
//         {filters.map((filter) => (
//           <div key={filter.title} className=" ">
//             <h2 className="py-4 text-[14px] uppercase font-semibold">
//               {filter.title}
//             </h2>
//             <div className="flex flex-col gap-y-2 px-2">
//               <SelectInput
//                 selected={localFilters[filter.key]?.includes('All')}
//                 title="All"
//                 onClick={() => handleSelectFilter(filter.key, 'All')}
//               />
//               {filter.filters.map((item) => (
//                 <SelectInput
//                   key={item}
//                   selected={localFilters[filter.key]?.includes(item)}
//                   title={item}
//                   onClick={() => handleSelectFilter(filter.key, item)}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };



  
  
  
// This is resetting to all first time

// import React, { useState } from 'react';
// import { filters } from '@/misc/filters';
// import SelectInput from './select';
// import { CiFilter } from "react-icons/ci";
// import { MdDeleteOutline } from "react-icons/md";

// /**
//  * DataFilters component
//  *
//  * Props:
//  *  - onSelect: function to handle filter selection
//  *  - selectedFilters: object with current filter selections
//  *  - onClear: function to clear all filter selections
//  */

// export const DataFilters = ({
//   onSelect,
//   selectedFilters,
//   onClear,
// }) => {
//   const [localFilters, setLocalFilters] = useState(selectedFilters);

//   const handleSelectFilter = (key, value) => {
//     const updatedFilters = {
//       ...localFilters,
//       [key]: value === 'All' ? ['All'] : [...(localFilters[key] || []), value],
//     };
//     setLocalFilters(updatedFilters);
//     onSelect(key, updatedFilters[key]);
//   };

//   const handleClearSelections = () => {
//     const updatedFilters = {};
//     filters.forEach(filter => {
//       updatedFilters[filter.key] = ['All'];
//     });
//     setLocalFilters(updatedFilters);
//     onClear();
//   };

//   return (
//     <div className="rounded-sm shadow-sm bg-slate-100 p-3">
//       <div id="filter-header" className="flex flex-col gap-y-2">
//         <div className="flex items-center gap-x-2 py-2">
//           <i>
//             <CiFilter size={24} />
//           </i>
//           <span className="text-[22px] font-semibold">Filters</span>
//         </div>
//         <button
//           onClick={handleClearSelections}
//           className="w-full flex items-center justify-center rounded-md gap-x-2 p-2 bg-blue-500 text-white outline-none"
//         >
//           <i>
//             <MdDeleteOutline size={20} />
//           </i>
//           <span>Clear Selections</span>
//         </button>
//       </div>
//       {filters.map((filter) => (
//         <div key={filter.title} className=" ">
//           <h2 className="py-4 text-[14px] uppercase font-semibold">
//             {filter.title}
//           </h2>
//           <div className="flex flex-col gap-y-2 px-2">
//             <SelectInput
//               selected={localFilters[filter.key]?.includes('All')}
//               title="All"
//               onClick={() => handleSelectFilter(filter.key, 'All')}
//             />
//             {filter.filters.map((item) => (
//               <SelectInput
//                 key={item}
//                 selected={localFilters[filter.key]?.includes(item)}
//                 title={item}
//                 onClick={() => handleSelectFilter(filter.key, item)}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };



// import React, { useMemo } from 'react';
// import { filters } from '@/misc/filters';
// import SelectInput from './select';
// import { CiFilter } from "react-icons/ci";
// import { MdDeleteOutline } from "react-icons/md";
// /**
//  * DataFilters component
//  *
//  * Props:
//  *  - onSelect: function to handle filter selection
//  *  - selectedFilters: object with current filter selections
//  *  - onClear: function to clear all filter selections
//  */
// export const DataFilters = ({
//     onSelect,
//     selectedFilters,
//     onClear,
//   }) => {
//     const handleSelectFilter = (key, value) => {
//       if (value === "All") {
//         onSelect(key, "All");
//       } else {
//         const updatedValue = selectedFilters[key] === "All" ? [value] : [...(selectedFilters[key] || []), value];
//         onSelect(key, updatedValue);
//       }
//     };
//     const handleClearSelections = () => {
//         // Reset all filters to "All"
//         Object.keys(selectedFilters).forEach((key) => {
//           onSelect(key, "All");
//         });
//         // Clear selections
//         onClear();
//         // Remove graphical ticks
//         document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
//           checkbox.checked = false;
//         });
//       };
  
//     return (
//       <div className="rounded-sm shadow-sm bg-slate-100 p-3">
//         <div id="filter-header" className="flex flex-col gap-y-2">
//           <div className="flex items-center gap-x-2 py-2">
//             <i>
//               <CiFilter size={24} />
//             </i>
//             <span className="text-[22px] font-semibold">Filters</span>
//           </div>
//           <button
//             onClick={handleClearSelections}
//             className="w-full flex items-center justify-center rounded-md gap-x-2 p-2 bg-blue-500 text-white outline-none"
//           >
//             <i>
//               <MdDeleteOutline size={20} />
//             </i>
//             <span>Clear Selections</span>
//           </button>
//         </div>
//         {filters.map((filter) => (
//           <div key={filter.title} className=" ">
//             <h2 className="py-4 text-[14px] uppercase font-semibold">
//               {filter.title}
//             </h2>
//             <div className="flex flex-col gap-y-2 px-2">
//               <SelectInput
//                 selected={selectedFilters[filter.key] === "All"}
//                 title="All"
//                 onClick={() => handleSelectFilter(filter.key, "All")}
//               />
//               {filter.filters.map((item) => (
//                 <SelectInput
//                   key={item}
//                   selected={selectedFilters[filter.key]?.includes(item)}
//                   title={item}
//                   onClick={() => handleSelectFilter(filter.key, item)}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };
  

// import React, { useMemo } from 'react';
// import { filters } from '@/misc/filters';
// import SelectInput from './select';
// import { CiFilter } from "react-icons/ci";
// import { MdDeleteOutline } from "react-icons/md";

// /**
//  * DataFilters component
//  *
//  * Props:
//  *  - onSelect: function to handle filter selection
//  *  - selectedFilters: object with current filter selections
//  *  - onClear: function to clear all filter selections
//  */
// export const DataFilters = ({
//   onSelect,
//   selectedFilters,
//   onClear,
// }) => {
//   /**
//    * Handle filter selection
//    * @param {string} key filter key
//    * @param {string} value filter value
//    */
//   const handleSelectFilter = (key, value) => {
//     onSelect(key, value);
//   };

//   return (
//     <div className="rounded-sm shadow-sm bg-slate-100 p-3">
//       <div id="filter-header" className="flex flex-col gap-y-2">
//         <div className="flex items-center gap-x-2 py-2">
//           <i>
//             <CiFilter size={24} />
//           </i>
//           <span className="text-[22px] font-semibold">Filters</span>
//         </div>
//         <button
//           onClick={onClear}
//           className="w-full flex items-center justify-center rounded-md gap-x-2 p-2 bg-blue-500 text-white outline-none"
//         >
//           <i>
//             <MdDeleteOutline size={20} />
//           </i>
//           <span>Clear Selections</span>
//         </button>
//       </div>
//       {filters.map((filter) => (
//         <div key={filter.title} className=" ">
//           <h2 className="py-4 text-[14px] uppercase font-semibold">
//             {filter.title}
//           </h2>
//           <div className="flex flex-col gap-y-2 px-2">
//             <SelectInput
//               selected={selectedFilters[filter.key] === "All"}
//               title="All"
//               onClick={() => handleSelectFilter(filter.key, "All")}
//             />
//             {filter.filters.map((item) => (
//               <SelectInput
//                 key={item}
//                 selected={selectedFilters[filter.key] === item}
//                 title={item}
//                 onClick={() => handleSelectFilter(filter.key, item)}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


// import React, { useMemo } from 'react';
// import { filters } from '@/misc/filters';
// import SelectInput from './select';
// import { CiFilter } from "react-icons/ci";
// import { MdDeleteOutline } from "react-icons/md";

// export const DataFilters = ({ onSelect, selectedFilters, onClear }) => {

//     const handleSelectFilter = (key, value) => {
//         onSelect(key, value)
//     }
//     return (
//         <div className="rounded-sm shadow-sm bg-slate-100 p-3">
//             <div id="filter-header" className="flex flex-col gap-y-2">
//                 <div className="flex items-center gap-x-2 py-2">
//                     <i><CiFilter size={24} /></i>
//                     <span className="text-[22px] font-semibold">Filters</span>
//                 </div>
//                 <button onClick={onClear} className="w-full flex items-center justify-center rounded-md gap-x-2 p-2 bg-blue-500 text-white outline-none">
//                     <i><MdDeleteOutline size={20} /></i>
//                     <span>Clear Selections</span>
//                 </button>
//             </div>
//             {
//                 filters.map((filter) => {
//                     return <div key={filter.title} className=" ">
//                         <h2 className="py-4 text-[14px] uppercase font-semibold">{filter.title}</h2>
//                         <div className="flex flex-col gap-y-2 px-2">
//                             <SelectInput selected={selectedFilters[filter.key] === "All"} title="All" onClick={() => handleSelectFilter(filter.key, "All")} />
//                             {filter.filters.map(item =>

//                                 <SelectInput selected={selectedFilters[filter.key] === item} key={item} title={item} onClick={() => handleSelectFilter(filter.key, item)} />
//                             )
//                             }
//                         </div>
//                     </div>
//                 }
//                 )
//             }
//         </div>
//     )
// };