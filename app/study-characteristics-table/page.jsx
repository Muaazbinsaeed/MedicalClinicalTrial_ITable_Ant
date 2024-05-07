"use client";

import React, { useEffect, useState, useDeferredValue, useRef } from "react";
import { Table } from "antd";
import { json_data, column_data as columns } from "@/misc/json_data";
import { Col, Row, Select, Button, Tooltip } from "antd";
import { DataFilters } from "@/components/data-filters";
import { Layout, Input } from "antd";
const { Option } = Select;
const { Sider, Content } = Layout;
import { MultiColumnSelector } from "@/components/MultiColumnSelectComponent";
import {
  LeftOutlined,
  RightOutlined,
  FilterOutlined,
  TableOutlined,
} from "@ant-design/icons";

const data = json_data;
// const data = [];

const defaultCheckedList = [];

for (let i = 0; i < 5; i++) {
  defaultCheckedList.push(columns[i].key);
}

const App = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredData, setFilteredData] = useState(data || []);
  const [topValue, setTopValue] = useState(10);
  const [searchText, setSearchText] = useState(""); // Search text

  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  const toggleLeftCollapsed = () => {
    setLeftCollapsed(!leftCollapsed);
  };

  const toggleRightCollapsed = () => {
    setRightCollapsed(!rightCollapsed);
  };

  const defferedFilters = useDeferredValue(selectedFilters);

  const options = columns.map(({ key, title }) => ({
    label: title,
    value: key,
  }));

  // const newColumns = columns.map((item) => ({
  //   ...item,
  //   hidden: !checkedList.includes(item.key),
  // }));

  const newColumns = columns.map((item) => {
    const ellipsisConfig =
      typeof item.key === "string" && item.key.length > 10
        ? {
            ellipsis: {
              showTitle: false,
            },
            render: (text) => (
              <Tooltip placement="topLeft" title={text}>
                {text}
              </Tooltip>
            ),
          }
        : {};
    return {
      ...item,
      hidden: !checkedList.includes(item.key),
      sorter: (a, b) => {
        const aValue = a[item.key];
        const bValue = b[item.key];
        if (typeof aValue === "string" && typeof bValue === "string") {
          return aValue.localeCompare(bValue);
        }
        return aValue - bValue;
      },
      sortDirections: ["ascend", "descend", "ascend"],
      ...ellipsisConfig,
    };
  });

  const handleSelectedFilters = (key, value) => {
    if (key) setSelectedFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleTopValueChange = (value) => {
    setTopValue(value);
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  useEffect(() => {
    const filtered = data.filter((item) =>
      Object.entries(defferedFilters).every(([filterKey, filterValues]) => {
        if (filterValues.includes("All")) {
          return true;
        } else {
          return filterValues.some((filterValue) =>
            item[filterKey]
              .toLowerCase()
              .includes(filterValue.trim().toLowerCase())
          );
        }
      })
    );

    const searched = filtered.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setFilteredData(searched);
  }, [data, defferedFilters, searchText]);

  const distinctNCTCount = new Set(filteredData.map((item) => item["NCT"]))
    .size;

  console.log({ data });

  return (
    <div className="container">
      <Row gutter={10}>
        <Col span={3}>
          <Input
            placeholder="Search..."
            style={{ marginBottom: 10 }}
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Col>
      </Row>
      <Row gutter={10}>
        <Layout
          style={{
            minHeight: "50vh",
            display: "flex",
            padding: "0 10px 0 10px",
          }}
        >
          <Sider
            collapsed={leftCollapsed}
            onCollapse={toggleLeftCollapsed}
            theme="light"
            width={200}
            collapsedWidth={30}
            style={{
              overflow: "auto",
              maxHeight: leftCollapsed ? "auto" : "50vh",
              left: 0,
            }}
          >
            {!leftCollapsed ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Button
                  type="link"
                  onClick={toggleLeftCollapsed}
                  style={{ padding: 0 }}
                >
                  <LeftOutlined />
                  <FilterOutlined style={{ fontSize: "15px" }} />
                </Button>

                <div
                  style={{ maxHeight: "calc(100% - 40px)", overflowY: "auto" }}
                >
                  <DataFilters
                    onClear={() => setSelectedFilters({})}
                    selectedFilters={selectedFilters}
                    onSelect={handleSelectedFilters}
                  />
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Button
                  type="link"
                  onClick={toggleLeftCollapsed}
                  style={{ padding: 0 }}
                >
                  <FilterOutlined style={{ fontSize: "15px" }} />
                  <br />
                  <RightOutlined />
                </Button>
              </div>
            )}
          </Sider>

          <Content style={{ padding: "0 5px", textAlign: "center" }}>
            <div className="custom-table">
              <Table
                columns={newColumns}
                dataSource={filteredData}
                bordered
                pagination={{ pageSize: topValue }}
                size="small"
                scroll={{
                  x: "calc(700px + 50%)",
                  y: 1500,
                }}
                onChange={(pagination, filters, sorter) => {
                  // Apply sorting to filteredData
                  const sortedData = [...filteredData];

                  if (sorter.field && sorter.order) {
                    sortedData.sort((a, b) => {
                      const aValue = a[sorter.field];
                      const bValue = b[sorter.field];

                      if (
                        typeof aValue === "string" &&
                        typeof bValue === "string"
                      ) {
                        return sorter.order === "ascend"
                          ? aValue.localeCompare(bValue)
                          : bValue.localeCompare(aValue);
                      }

                      return sorter.order === "ascend"
                        ? aValue - bValue
                        : bValue - aValue;
                    });
                  }
                  setFilteredData(sortedData);
                }}
                footer={() => (
                  <div>
                    <span>{`Showing ${filteredData.length} rows`}</span>
                    <span
                      style={{ marginLeft: 8 }}
                    >{`Distinct NCT Records: ${distinctNCTCount}`}</span>

                    <Select
                      style={{ marginLeft: 8, width: 80 }}
                      value={topValue}
                      onChange={handleTopValueChange}
                    >
                      {[5, 10, 20, 50, 100].map((value) => (
                        <Option key={value} value={value}>
                          {value}
                        </Option>
                      ))}
                    </Select>
                  </div>
                )}
              />
            </div>
          </Content>

          <Sider
            collapsed={rightCollapsed}
            onCollapse={toggleRightCollapsed}
            theme="light"
            width={200}
            collapsedWidth={40}
            style={{ overflow: "auto", height: "50vh", right: 0 }}
          >
            {!rightCollapsed ? (
              // <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                Column / Filter
                <Button
                  type="link"
                  onClick={toggleRightCollapsed}
                  style={{ padding: 0 }}
                >
                  <TableOutlined style={{ fontSize: "15px" }} />

                  <RightOutlined />
                </Button>
                <MultiColumnSelector
                  checkedList={checkedList}
                  setCheckedList={setCheckedList}
                />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Button
                  type="link"
                  onClick={toggleRightCollapsed}
                  style={{ padding: 0, textAlign: "center" }}
                >
                  <LeftOutlined />
                  <br />
                  <TableOutlined style={{ fontSize: "15px" }} />
                </Button>
              </div>
            )}
          </Sider>
        </Layout>
      </Row>
    </div>
  );
};

export default App;
