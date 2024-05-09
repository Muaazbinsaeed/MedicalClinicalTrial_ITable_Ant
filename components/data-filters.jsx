import React, { useState } from "react";
import { FilterOutlined, DeleteOutlined } from "@ant-design/icons";
import { Checkbox, Button } from "antd";
import { filters } from "@/misc/filters";

export const DataFilters = ({ onSelect, selectedFilters, onClear }) => {
  const [localFilters, setLocalFilters] = useState(selectedFilters);

  const handleSelectFilter = (key, value) => {
    const updatedFilters = {
      ...localFilters,
      [key]: value === "All" ? ["All"] : toggleFilterValue(key, value),
    };
    setLocalFilters(updatedFilters);
    onSelect(key, updatedFilters[key]);
  };

  const toggleFilterValue = (key, value) => {
    const currentFilters = localFilters[key] || [];
    return currentFilters.includes(value)
      ? currentFilters.filter((item) => item !== value)
      : [...currentFilters.filter((item) => item !== "All"), value];
  };

  const handleClearSelections = () => {
    const updatedFilters = {};
    filters.forEach((filter) => {
      updatedFilters[filter.key] = ["All"];
    });
    setLocalFilters(updatedFilters);
    onClear();
  };

  return (
    <div className="rounded-sm shadow-sm bg-slate-100 p-3">
      <div id="filter-header" className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2 py-2">
          <FilterOutlined style={{ fontSize: 24 }} />
          <span className="text-[22px] font-semibold">Filters</span>
        </div>
        <Button
          onClick={handleClearSelections}
          className="w-full flex items-center justify-center rounded-md gap-x-2 p-2 bg-blue-500 text-white outline-none"
          icon={<DeleteOutlined />}
        >
          Clear Selections
        </Button>
      </div>
      {filters.map((filter) => (
        <div key={filter.title} className=" ">
          <h2 className="py-4 text-[14px] uppercase font-semibold">
            {filter.title}
          </h2>
          <div className="flex flex-col gap-y-2 px-2">
            <Checkbox
              checked={localFilters[filter.key]?.includes("All")}
              onClick={() => handleSelectFilter(filter.key, "All")}
            >
              All
            </Checkbox>
            {filter.filters.map((item) => (
              <Checkbox
                key={item}
                checked={localFilters[filter.key]?.includes(item)}
                onClick={() => handleSelectFilter(filter.key, item)}
              >
                {item}
              </Checkbox>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
