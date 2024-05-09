import React, { useId } from "react";

const SelectInput = ({ onClick, title, selected }) => {
  const id = useId();
  return (
    <div className="flex gap-2 " onClick={onClick}>
      <input
        checked={selected}
        type="checkbox"
        id={id}
        className="relative peer cursor-pointer shrink-0 appearance-none w-4 h-4 border-2 border-blue-500 rounded-sm bg-white mt-1 checked:bg-blue-800 checked:border-0"
      />
      <label className="cursor-pointer" htmlFor={id}>
        {title}
      </label>
      <svg
        className="absolute  w-4 h-4 mt-1 hidden peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default SelectInput;
