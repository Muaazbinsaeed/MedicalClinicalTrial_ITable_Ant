"use client";

import React, { useState, useEffect, useDeferredValue } from "react";
import {
  Table,
  Col,
  Row,
  Select,
  Button,
  Tooltip,
  Input,
  Layout,
  Spin,
} from "antd";
import { json_data, column_data as columns } from "@/misc/json_data";
import { DataFilters } from "@/components/data-filters";
import { MultiColumnSelector } from "@/components/MultiColumnSelectComponent";
import {
  LeftOutlined,
  RightOutlined,
  FilterOutlined,
  TableOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { Sider, Content } = Layout;

const App = () => {
  const [checkedList, setCheckedList] = useState(
    columns.slice(0, 5).map(({ key }) => key)
  );
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [topValue, setTopValue] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  const toggleLeftCollapsed = () => setLeftCollapsed(!leftCollapsed);
  const toggleRightCollapsed = () => setRightCollapsed(!rightCollapsed);

  const defferedFilters = useDeferredValue(selectedFilters);

  const options = columns.map(({ key, title }) => ({
    label: title,
    value: key,
  }));

  const newColumns_old = columns.map((item) => {
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

    if (item.children) {
      // Recursively traverse the column structure
      item.children = item.children.map((child) => {
        return {
          ...child,
          sorter: child.children
            ? undefined
            : (a, b) => {
                const aValue = a[child.dataIndex];
                const bValue = b[child.dataIndex];
                if (typeof aValue === "string" && typeof bValue === "string") {
                  return aValue.localeCompare(bValue);
                }
                return aValue - bValue;
              },
          sortDirections: ["ascend", "descend", "ascend"],
          ...ellipsisConfig,
        };
      });
      return {
        ...item,
        hidden: !checkedList.includes(item.key),
      };
    } else {
      return {
        ...item,
        hidden: !checkedList.includes(item.key),
        sorter: (a, b) => {
          const aValue = a[item.dataIndex];
          const bValue = b[item.dataIndex];
          if (typeof aValue === "string" && typeof bValue === "string") {
            return aValue.localeCompare(bValue);
          }
          return aValue - bValue;
        },
        sortDirections: ["ascend", "descend", "ascend"],
        ...ellipsisConfig,
      };
    }
  });

  const handleSelectedFilters = (key, value) => {
    if (key) setSelectedFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleTopValueChange = (value) => setTopValue(value);
  const handleSearch = (value) => setSearchText(value);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from API or local storage
      const data = json_data;
      // const data = await json_data;
      setFilteredData(data);
      setLoading(false); // Set loading to false once data is fetched
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = json_data.filter((item) =>
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
  }, [json_data, defferedFilters, searchText]);

  const distinctNCTCount = new Set(filteredData.map((item) => item["NCT"]))
    .size;

  if (loading) {
    return <Spin size="large" />; // Display a loading indicator
  }

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
                  style={{
                    maxHeight: "calc(100% - 40px)",
                    overflowY: "auto",
                  }}
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
                pagination={{
                  pageSize: topValue,
                  position: ["bottomRight"],
                  // showSizeChanger: true,
                  // pageSizeOptions: [5, 10, 20, 30, 50],
                }}
                size="small"
                scroll={{ x: "calc(700px + 50%)", y: 1500 }}
                onChange={(pagination, filters, sorter) => {
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
                title={() => (
                  <div>
                    <span>{`Showing ${filteredData.length} rows`}</span>
                    <span
                      style={{ marginLeft: 8 }}
                    >{`| NCT Records: ${distinctNCTCount}`}</span>
                  </div>
                )}
                footer={() => (
                  // <div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    {/* <span>{`Showing ${filteredData.length} rows`}</span> */}
                    {/* <span style={{ marginLeft: 8 }}>{`Distinct NCT Records: ${distinctNCTCount}`}</span> */}
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
