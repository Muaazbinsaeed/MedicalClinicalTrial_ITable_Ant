"use client";

import React, { useEffect, useState, useDeferredValue, useRef } from "react";
import { Checkbox, Table, Tree, Modal } from "antd";
// import { columns } from "@/misc/parsedData";
import jsonData from "@/misc/data.json";
import { json_data, column_data as columns } from "@/misc/json_data";
import { Col, Row, Select, Collapse, Button, Tooltip } from "antd";
import { DataFilters } from "@/components/data-filters";
import { Layout, Input } from "antd";
import { YourComponent } from "@/components/try";
const { Option } = Select;
const { Panel } = Collapse;
const { Sider, Content } = Layout;
import { MultiColumnSelectComponent, MultiColumnSelector } from "@/components/MultiColumnSelectComponent";

import {
  LeftOutlined,
  RightOutlined,
  FilterOutlined,
  TableOutlined,
} from "@ant-design/icons";

const { TreeNode } = Tree;

const MultiColumnSelectComponent2 = ({ columns, onColumnSelect }) => {
  const [visible, setVisible] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState([]);

  const showColumnSelector = () => {
    setVisible(true);
  };

  const handleColumnSelectorOk = () => {
    onColumnSelect(selectedColumns);
    setVisible(false);
  };

  const handleColumnSelectorCancel = () => {
    setVisible(false);
  };

  const renderTreeNodes = (data, parentKey = "") => {
    return data.map((item) => {
      const key = `${parentKey}_${item.key}`;
      if (item.children) {
        return (
          <TreeNode title={item.title} key={key} selectable={false}>
            {renderTreeNodes(item.children, key)}
          </TreeNode>
        );
      }
      return <TreeNode title={item.title} key={key} selectable={false} />;
    });
  };

  return (
    <>
      <Button onClick={showColumnSelector}>Select Columns</Button>
      <Modal
        title="Select Columns"
        visible={visible}
        onOk={handleColumnSelectorOk}
        onCancel={handleColumnSelectorCancel}
      >
        <Tree
          checkable
          defaultExpandAll
          onCheck={(checkedKeys) => setSelectedColumns(checkedKeys)}
          checkedKeys={selectedColumns}
        >
          {renderTreeNodes(columns)}
        </Tree>
      </Modal>
    </>
  );
};

const MultiLevelColumnSelector = ({ columns, onColumnSelect }) => {
  const [selectedColumns, setSelectedColumns] = useState([]);

  const handleCheck = (checkedKeys) => {
    setSelectedColumns(checkedKeys);
    onColumnSelect(checkedKeys);
  };

  const renderTreeNodes = (data) =>
    data.map((item) => {
      if (item.children) {
        return (
          <TreeNode
            title={
              <Checkbox
                value={item.key}
                checked={selectedColumns.includes(item.key)}
              >
                {item.title}
              </Checkbox>
            }
            key={item.key}
          >
            {renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return (
        <TreeNode
          title={
            <Checkbox
              value={item.key}
              checked={selectedColumns.includes(item.key)}
            >
              {item.title}
            </Checkbox>
          }
          key={item.key}
        />
      );
    });

  return (
    <Tree
      checkable
      defaultExpandAll
      onCheck={handleCheck}
      checkedKeys={selectedColumns}
    >
      {renderTreeNodes(columns)}
    </Tree>
  );
};

const ColumnSelector = ({ visible, onCancel, onOk }) => {
  const [checkedKeys, setCheckedKeys] = useState([]);

  const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue);
  };

  const treeData = columns.map((column) => ({
    title: column.title,
    key: column.key.toString(),
    children: column.children
      ? column.children.map((child) => ({
          title: child.title,
          key: child.key.toString(),
        }))
      : undefined,
  }));

  return (
    <Modal
      title="Select Columns"
      visible={visible}
      onOk={() => onOk(checkedKeys)}
      onCancel={onCancel}
    >
      <Tree
        checkable
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        treeData={treeData}
        height={300} // Adjust the height as needed
        autoExpandParent={true}
        defaultExpandAll={true}
      >
        {renderTreeNodes(treeData)}
      </Tree>
    </Modal>
  );
};

const renderTreeNodes = (data) => {
  return data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={item.title} key={item.key}>
          {renderTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return <TreeNode title={item.title} key={item.key} />;
  });
};

// const ColumnSelector = () => {
//   const [checkedKeys, setCheckedKeys] = useState([]);

//   const onCheck = (checkedKeysValue) => {
//     setCheckedKeys(checkedKeysValue);
//   };

//   const treeData = columns.map((column) => ({
//     title: column.title,
//     key: column.key.toString(),
//     children: column.children
//       ? column.children.map((child) => ({
//           title: child.title,
//           key: child.key.toString(),
//         }))
//       : undefined,
//   }));

//   return (
//     <Tree
//       checkable
//       onCheck={onCheck}
//       checkedKeys={checkedKeys}
//       treeData={treeData}
//       height={300} // Adjust the height as needed
//       autoExpandParent={true}
//       defaultExpandAll={true}
//       switcherIcon={<Checkbox />}
//     />
//   );
// };

const data = json_data;
// const data = [];

// for (let i = 0; i < jsonData.rs.length; i++) {
//   data.push({
//     key: i,
//     nct: jsonData.rs[i]?.NCT,
//     PMID: jsonData.rs[i]?.PMID,
//     "TRIAL NAME": jsonData.rs[i]?.Trial_Name,
//     "TREATMENT ARM(S)": jsonData.rs[i]?.Treatment_Arms,
//     "Control Arm": jsonData.rs[i]?.Control_Arm,
//     qw4hd: jsonData.rs[i]?.Class_of_Agent_in_Treatment_Arm_1,
//     "Type of Therapy": jsonData.rs[i]["Type of Therapy"],
//     "Original/Follow Up": jsonData.rs[i]["Original/Follow Up"],
//     "TREATMENT ARM 1 REGIMEN": jsonData.rs[i]?.["Treatment Arm 1 Regimen"],
//     "TOTAL PARTICIPANTS - N": jsonData.rs[i]?.["Total Participants - N"],
//     "TREATMENT ARM - N": jsonData.rs[i]?.["TREATMENT ARM - N"],
//     "CONTROL ARM - N": jsonData.rs[i]?.["CONTROL ARM - N"],
//     "MEDIAN FOLLOW-UP DURATION (MO)":
//       jsonData.rs[i]?.["MEDIAN FOLLOW-UP DURATION (MO)"],
//     TREATMENT1:
//       jsonData.rs[i]?.["Median On-Treatment Duration (mo) | Treatment"],
//     CONTROL1: jsonData.rs[i]?.["Median On-Treatment Duration (mo) | Control"],
//     "QUALITY OF LIFE REPORTED": jsonData.rs[i]?.["QUALITY OF LIFE REPORTED"],
//     "QUALITY OF LIFE SCALE": jsonData.rs[i]?.["QUALITY OF LIFE SCALE"],
//     SYNCHRONOUS:
//       jsonData.rs[i]?.["Reporting by prognostic groups - Y/N | Synchronous"],
//     METACHRONOUS:
//       jsonData.rs[i]?.["Reporting by prognostic groups - Y/N | Metachronous"],
//     "HIGH VOLUME":
//       jsonData.rs[i]?.["Reporting by prognostic groups - Y/N | High volume"],
//     "LOW VOLUME":
//       jsonData.rs[i]?.["Reporting by prognostic groups - Y/N | Low volume"],
//     TREATMENT2:
//       jsonData.rs[i]?.[
//         " Mode of metastases - N (%) | Metachronous | Treatment"
//       ],
//     CONTROL2:
//       jsonData.rs[i]?.[" Mode of metastases - N (%) | Metachronous | Control"],
//     TREATMENT3:
//       jsonData.rs[i]?.[" Mode of metastases - N (%) | Synchronous | Treatment"],
//     CONTROL3:
//       jsonData.rs[i]?.[" Mode of metastases - N (%) | Synchronous | Control"],
//     TREATMENT4:
//       jsonData.rs[i]?.[" Volume of disease - N (%) | High | Treatment"],
//     CONTROL4: jsonData.rs[i]?.[" Volume of disease - N (%) | High | Control"],
//     TREATMENT5:
//       jsonData.rs[i]?.[" Volume of disease - N (%) | Low | Treatment"],
//     CONTROL5: jsonData.rs[i]?.[" Volume of disease - N (%) | Low | Treatment"],
//     TREATMENT6:
//       jsonData.rs[i]?.["Docetaxel administration - N (%) | Treatment"],
//     CONTROL6: jsonData.rs[i]?.["Docetaxel administration - N (%) | Control"],
//     TREATMENT7: jsonData.rs[i]?.["Median Age (years) | Treatment"],
//     CONTROL7: jsonData.rs[i]?.["Median Age (years) | Control"],
//     "[AMER. INDIAN OR ALASKA NAT.]":
//       jsonData.rs[i]?.["Race - N (%) | Amer. Indian or Alaska Nat."],
//     ASIAN: jsonData.rs[i]?.["Race - N (%) | Asian"],
//     "BLACK OR AFRICAN AMERICAN":
//       jsonData.rs[i]?.["Race - N (%) | Black or African American"],
//     "Nat. Hawaiian or Pac. Islander":
//       jsonData.rs[i]?.["Race - N (%) | Nat. Hawaiian or Pac. Islander"],
//     OTHER: jsonData.rs[i]?.["Race - N (%) | Other"],
//     UNKNOWN: jsonData.rs[i]?.["Race - N (%) | Unknown"],
//     WHITE: jsonData.rs[i]?.["Race - N (%) | White"],

//     "REGION - N (%)": {
//       "NORTH AMERICA": {
//         TREATMENT:
//           jsonData.rs[i]?.["REGION - N (%)"]?.["NORTH AMERICA"]?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["REGION - N (%)"]?.["NORTH AMERICA"]?.CONTROL,
//       },
//       "SOUTH AMERICA": {
//         TREATMENT:
//           jsonData.rs[i]?.["REGION - N (%)"]?.["SOUTH AMERICA"]?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["REGION - N (%)"]?.["SOUTH AMERICA"]?.CONTROL,
//       },
//       EUROPE: {
//         TREATMENT: jsonData.rs[i]?.["REGION - N (%)"]?.EUROPE?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["REGION - N (%)"]?.EUROPE?.CONTROL,
//       },
//       AFRICA: {
//         TREATMENT: jsonData.rs[i]?.["REGION - N (%)"]?.AFRICA?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["REGION - N (%)"]?.AFRICA?.CONTROL,
//       },
//       ASIA: {
//         TREATMENT: jsonData.rs[i]?.["REGION - N (%)"]?.ASIA?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["REGION - N (%)"]?.ASIA?.CONTROL,
//       },
//       OCEANIA: {
//         TREATMENT: jsonData.rs[i]?.["REGION - N (%)"]?.OCEANIA?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["REGION - N (%)"]?.OCEANIA?.CONTROL,
//       },
//     },
//     "PS - N (%)": {
//       0: {
//         TREATMENT: jsonData.rs[i]?.["PS - N (%)"]?.["0"]?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["PS - N (%)"]?.["0"]?.CONTROL,
//       },
//       "1-2": {
//         TREATMENT: jsonData.rs[i]?.["PS - N (%)"]?.["1-2"]?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["PS - N (%)"]?.["1-2"]?.CONTROL,
//       },
//     },
//     "GLEASON SCORE - N (%)": {
//       "≤ 7": {
//         TREATMENT:
//           jsonData.rs[i]?.["GLEASON SCORE - N (%)"]?.["≤ 7"]?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["GLEASON SCORE - N (%)"]?.["≤ 7"]?.CONTROL,
//       },
//       "≥ 8": {
//         TREATMENT:
//           jsonData.rs[i]?.["GLEASON SCORE - N (%)"]?.["≥ 8"]?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["GLEASON SCORE - N (%)"]?.["≥ 8"]?.CONTROL,
//       },
//     },
//     "METASTASES - N (%)": {
//       LIVER: {
//         TREATMENT: jsonData.rs[i]?.["METASTASES - N (%)"]?.LIVER?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["METASTASES - N (%)"]?.LIVER?.CONTROL,
//       },
//       LUNGS: {
//         TREATMENT: jsonData.rs[i]?.["METASTASES - N (%)"]?.LUNGS?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["METASTASES - N (%)"]?.LUNGS?.CONTROL,
//       },
//       BONE: {
//         TREATMENT: jsonData.rs[i]?.["METASTASES - N (%)"]?.BONE?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["METASTASES - N (%)"]?.BONE?.CONTROL,
//       },
//       NODAL: {
//         TREATMENT: jsonData.rs[i]?.["METASTASES - N (%)"]?.NODAL?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["METASTASES - N (%)"]?.NODAL?.CONTROL,
//       },
//     },
//     "PREVIOUS LOCAL THERAPY - N (%)": {
//       PROSTATECTOMY: {
//         TREATMENT:
//           jsonData.rs[i]?.["PREVIOUS LOCAL THERAPY - N (%)"]?.PROSTATECTOMY
//             ?.TREATMENT,
//         CONTROL:
//           jsonData.rs[i]?.["PREVIOUS LOCAL THERAPY - N (%)"]?.PROSTATECTOMY
//             ?.CONTROL,
//       },
//       ORCHIECTOMY: {
//         TREATMENT:
//           jsonData.rs[i]?.["PREVIOUS LOCAL THERAPY - N (%)"]?.ORCHIECTOMY
//             ?.TREATMENT,
//         CONTROL:
//           jsonData.rs[i]?.["PREVIOUS LOCAL THERAPY - N (%)"]?.ORCHIECTOMY
//             ?.CONTROL,
//       },
//       RADIOTHERAPY: {
//         TREATMENT:
//           jsonData.rs[i]?.["PREVIOUS LOCAL THERAPY - N (%)"]?.RADIOTHERAPY
//             ?.TREATMENT,
//         CONTROL:
//           jsonData.rs[i]?.["PREVIOUS LOCAL THERAPY - N (%)"]?.RADIOTHERAPY
//             ?.CONTROL,
//       },
//     },
//     "PRIMARY ENDPOINT(S)": {
//       TREATMENT: jsonData.rs[i]?.["PRIMARY ENDPOINT(S)"]?.TREATMENT,
//       CONTROL: jsonData.rs[i]?.["PRIMARY ENDPOINT(S)"]?.CONTROL,
//     },
//     "SECONDARY ENDPOINT(S)": {
//       TREATMENT: jsonData.rs[i]?.["SECONDARY ENDPOINT(S)"]?.TREATMENT,
//       CONTROL: jsonData.rs[i]?.["SECONDARY ENDPOINT(S)"]?.CONTROL,
//     },
//     "ORR - N (%)": {
//       TREATMENT: {
//         CR: jsonData.rs[i]?.["ORR - N (%)"]?.TREATMENT?.CR,
//         OVERALL: jsonData.rs[i]?.["ORR - N (%)"]?.TREATMENT?.OVERALL,
//         PD: jsonData.rs[i]?.["ORR - N (%)"]?.TREATMENT?.PD,
//         SD: jsonData.rs[i]?.["ORR - N (%)"]?.TREATMENT?.SD,
//       },
//       CONTROL: {
//         CR: jsonData.rs[i]?.["ORR - N (%)"]?.CONTROL?.CR,
//         OVERALL: jsonData.rs[i]?.["ORR - N (%)"]?.CONTROL?.OVERALL,
//         PD: jsonData.rs[i]?.["ORR - N (%)"]?.CONTROL?.PD,
//         SD: jsonData.rs[i]?.["ORR - N (%)"]?.CONTROL?.SD,
//       },
//     },
//     "ADVERSE EVENTS - N (%)": {
//       "ALL-CAUSE GRADE 3 OR HIGHER": {
//         TREATMENT:
//           jsonData.rs[i]?.["ADVERSE EVENTS - N (%)"]?.[
//             "ALL-CAUSE GRADE 3 OR HIGHER"
//           ]?.TREATMENT,
//         CONTROL:
//           jsonData.rs[i]?.["ADVERSE EVENTS - N (%)"]?.[
//             "ALL-CAUSE GRADE 3 OR HIGHER"
//           ]?.CONTROL,
//       },
//       "TREATMENT-RELATED GRADE 3 OR HIGHER": {
//         TREATMENT:
//           jsonData.rs[i]?.["ADVERSE EVENTS - N (%)"]?.[
//             "TREATMENT-RELATED GRADE 3 OR HIGHER"
//           ]?.TREATMENT,
//         CONTROL:
//           jsonData.rs[i]?.["ADVERSE EVENTS - N (%)"]?.[
//             "TREATMENT-RELATED GRADE 3 OR HIGHER"
//           ]?.CONTROL,
//       },
//       "TREATMENT-RELATED GRADE 5": {
//         TREATMENT:
//           jsonData.rs[i]?.["ADVERSE EVENTS - N (%)"]?.[
//             "TREATMENT-RELATED GRADE 5"
//           ]?.TREATMENT,
//         CONTROL:
//           jsonData.rs[i]?.["ADVERSE EVENTS - N (%)"]?.[
//             "TREATMENT-RELATED GRADE 5"
//           ]?.CONTROL,
//       },
//     },
//     "NO. OF DEATHS - N": {
//       TREATMENT: jsonData.rs[i]?.["NO. OF DEATHS - N"]?.TREATMENT,
//       CONTROL: jsonData.rs[i]?.["NO. OF DEATHS - N"]?.CONTROL,
//     },
//     "TTPSA (MO)": {
//       TREATMENT: jsonData.rs[i]?.["TTPSA (MO)"]?.TREATMENT,
//       CONTROL: jsonData.rs[i]?.["TTPSA (MO)"]?.CONTROL,
//     },
//     "OS RATE (%)": {
//       SYNCHRONOUS: {
//         TREATMENT: jsonData.rs[i]?.["OS RATE (%)"]?.SYNCHRONOUS?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["OS RATE (%)"]?.SYNCHRONOUS?.CONTROL,
//       },
//       METACHRONOUS: {
//         TREATMENT: jsonData.rs[i]?.["OS RATE (%)"]?.METACHRONOUS?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["OS RATE (%)"]?.METACHRONOUS?.CONTROL,
//       },
//       "HIGH VOLUME": {
//         TREATMENT: jsonData.rs[i]?.["OS RATE (%)"]?.["HIGH VOLUME"]?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["OS RATE (%)"]?.["HIGH VOLUME"]?.CONTROL,
//       },
//       "LOW VOLUME": {
//         TREATMENT: jsonData.rs[i]?.["OS RATE (%)"]?.["LOW VOLUME"]?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["OS RATE (%)"]?.["LOW VOLUME"]?.CONTROL,
//       },
//     },
//     "MEDIAN OS (MO)": {
//       "HIGH VOLUME": {
//         TREATMENT:
//           jsonData.rs[i]?.["MEDIAN OS (MO)"]?.["HIGH VOLUME"]?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["MEDIAN OS (MO)"]?.["HIGH VOLUME"]?.CONTROL,
//       },
//       "LOW VOLUME": {
//         TREATMENT:
//           jsonData.rs[i]?.["MEDIAN OS (MO)"]?.["LOW VOLUME"]?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["MEDIAN OS (MO)"]?.["LOW VOLUME"]?.CONTROL,
//       },
//     },
//     "PFS RATE (%)": {
//       OVERALL: {
//         TREATMENT: jsonData.rs[i]?.["PFS RATE (%)"]?.OVERALL?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["PFS RATE (%)"]?.OVERALL?.CONTROL,
//       },
//     },
//     "MEDIAN PFS (MO)": {
//       "HIGH VOLUME": {
//         TREATMENT:
//           jsonData.rs[i]?.["MEDIAN PFS (MO)"]?.["HIGH VOLUME"]?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["MEDIAN PFS (MO)"]?.["HIGH VOLUME"]?.CONTROL,
//       },
//       "LOW VOLUME": {
//         TREATMENT:
//           jsonData.rs[i]?.["MEDIAN PFS (MO)"]?.["LOW VOLUME"]?.TREATMENT,
//         CONTROL: jsonData.rs[i]?.["MEDIAN PFS (MO)"]?.["LOW VOLUME"]?.CONTROL,
//       },
//     },
//     "ADD-ON TREATMENT": {
//       TREATMENT: jsonData.rs[i]?.["ADD-ON TREATMENT"]?.TREATMENT,
//       CONTROL: jsonData.rs[i]?.["ADD-ON TREATMENT"]?.CONTROL,
//     },
//     "TREATMENT CLASS": {
//       TREATMENT: jsonData.rs[i]?.["TREATMENT CLASS"]?.TREATMENT,
//       CONTROL: jsonData.rs[i]?.["TREATMENT CLASS"]?.CONTROL,
//     },
//     "TYPE OF THERAPY": {
//       TREATMENT: jsonData.rs[i]?.["TYPE OF THERAPY"]?.TREATMENT,
//       CONTROL: jsonData.rs[i]?.["TYPE OF THERAPY"]?.CONTROL,
//     },
//   });
// }

// data = json_data;

const defaultCheckedList = [];

for (let i = 0; i < 5; i++) {
  defaultCheckedList.push(columns[i].key);
}

const MyExpandableDropdown = ({ checkedList, setCheckedList, options }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Collapse
      bordered={false}
      activeKey={expanded ? ["1"] : []}
      expandIconPosition="right"
      onChange={handleExpand}
      className="mb-2"
    >
      <Panel header="Show/Hide Columns" key="1">
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Show/Hide Columns"
          value={checkedList}
          onChange={(value) => {
            setCheckedList(value);
          }}
        >
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Panel>
    </Collapse>
  );
};

const MyExpandableMultiSelector = ({
  checkedList,
  setCheckedList,
  options,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Collapse
      bordered={false}
      activeKey={expanded ? ["1"] : []}
      expandIconPosition="right"
      onChange={handleExpand}
      className="mb-2"
    >
      <Panel header="Show/Hide Columns" key="1">
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Show/Hide Columns"
          value={checkedList}
          onChange={(value) => {
            setCheckedList(value);
          }}
        >
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Panel>
    </Collapse>
  );
};

const MyHierarchicalCheckboxSelector = ({
  checkedList,
  setCheckedList,
  options,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleCheck = (value) => {
    if (checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
    } else {
      setCheckedList([...checkedList, value]);
    }
  };

  const renderOptions = (options) => {
    return options.map((option) => {
      if (option.children) {
        return (
          <div key={option.value}>
            <Checkbox
              indeterminate={
                checkedList.includes(option.value)
                  ? false
                  : option.children.some((child) =>
                      checkedList.includes(child.value)
                    )
              }
              onChange={() => handleCheck(option.value)}
              checked={checkedList.includes(option.value)}
            >
              {option.label}
            </Checkbox>
            <div style={{ paddingLeft: "20px" }}>
              {renderOptions(option.children)}
            </div>
          </div>
        );
      } else {
        return (
          <Checkbox
            key={option.value}
            onChange={() => handleCheck(option.value)}
            checked={checkedList.includes(option.value)}
          >
            {option.label}
          </Checkbox>
        );
      }
    });
  };

  return (
    <Collapse
      bordered={false}
      activeKey={expanded ? ["1"] : []}
      expandIconPosition="right"
      onChange={handleExpand}
      className="mb-2"
    >
      <Panel header="Show/Hide Columns" key="1">
        {renderOptions(options)}
      </Panel>
    </Collapse>
  );
};

const App = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredData, setFilteredData] = useState(data || []);
  const [topValue, setTopValue] = useState(10);
  const [searchText, setSearchText] = useState(""); // Search text

  // const [leftCollapsed, setLeftCollapsed] = useState(false);
  // const [rightCollapsed, setRightCollapsed] = useState(false);

  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const handleColumnSelect = (selectedKeys) => {
    setCheckedList(selectedKeys);
    console.log("Selected Columns:", selectedKeys);
    // Update your state or perform other actions based on the selected columns
  };

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

  // const newColumns = columns.map((item) => {
  //   const ellipsisConfig =
  //     typeof item.key === 'string' && item.key.length > 10
  //       ? {
  //           ellipsis: {
  //             showTitle: false,
  //           },
  //           render: (text) => (
  //             <Tooltip placement="topLeft" title={text}>
  //               {text}
  //             </Tooltip>
  //           ),
  //         }
  //       : {};

  //   return {
  //     ...item,
  //     hidden: !checkedList.includes(item.key),
  //     sorter: (a, b) => {
  //       const aValue = a[item.key];
  //       const bValue = b[item.key];
  //       if (typeof aValue === 'string' && typeof bValue === 'string') {
  //         return aValue.localeCompare(bValue);
  //       }
  //       return aValue - bValue;
  //     },
  //     sortDirections: ['ascend', 'descend', 'ascend'],
  //     ...ellipsisConfig,
  //   };
  // });

  const newColumns = columns.map((item) => {
    const ellipsisConfig =
      typeof text === "string" && text.length > 10
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
  // const newColumns = columns.map((item) => {
  //   const ellipsisConfig =
  //     typeof text === 'string' && text.length > 10
  //       ? {
  //           ellipsis: {
  //             showTitle: false,
  //           },
  //           render: (text) => (
  //             <Tooltip placement="topLeft" title={text}>
  //               {text}
  //             </Tooltip>
  //           ),
  //         }
  //       : {};

  //   return {
  //     ...item,
  //     hidden: !checkedList.includes(item.key),
  //     sorter: (a, b) => {
  //       const aValue = a[item.key];
  //       const bValue = b[item.key];
  //       if (typeof aValue === 'string' && typeof bValue === 'string') {
  //         return aValue.localeCompare(bValue);
  //       }
  //       return aValue - bValue;
  //     },
  //     sortDirections: ['ascend', 'descend', 'ascend'],
  //     ...ellipsisConfig,
  //   };
  // });
  // const newColumns = columns.map((item) => ({
  //   ...item,
  //    hidden:!checkedList.includes(item.key),
  //    sorter: (a, b) => {
  //      const aValue = a[item.key];
  //      const bValue = b[item.key];
  //      if (typeof aValue === "string" && typeof bValue === "string") {
  //        return aValue.localeCompare(bValue);
  //      }
  //      return aValue - bValue;
  //    },
  //    sortDirections: ["ascend", "descend", "ascend"],
  //   ...(typeof aValue === "string" && aValue.length > 10? {
  //      ellipsis: {
  //        showTitle: false,
  //      },
  //      render: (item.key) => (
  //        <Tooltip placement="topLeft" title={item.key}>
  //          {item.key}
  //        </Tooltip>
  //      ),
  //    } : {}),
  //  }));
  // const newColumns = columns.map((item) => ({
  //   ...item,
  //   hidden: !checkedList.includes(item.key),
  //   sorter: (a, b) => {
  //     const aValue = a[item.key];
  //     const bValue = b[item.key];
  //     if (typeof aValue === "string" && typeof bValue === "string") {
  //       return aValue.localeCompare(bValue);
  //     }
  //     return aValue - bValue;
  //   },
  //   sortDirections: ["ascend", "descend", "ascend"],
  //   ellipsis: item.type === "string" ? {
  //     showTitle: false,
  //   } : null,
  //   render: (item.key) => item.type === "string" ? (
  //     <Tooltip placement="topLeft" title={item.key}>
  //       {item.key}
  //     </Tooltip>
  //   ) : text,
  // }));
  //   ellipsis: item.type === "string" && item.length > 10 ? {
  //     showTitle: false,
  //   } : null,
  //   render: (text) => item.type === "string" && text.length > 10 ? (
  //     <Tooltip placement="topLeft" title={text}>
  //       {text.slice(0, 10) + '...'}
  //     </Tooltip>
  //   ) : text,
  // }));

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

    if (contentRef.current) {
      setContentHeight(contentRef.current.clientHeight);
    }

    setFilteredData(searched);
  }, [data, defferedFilters, searchText, contentRef.current]);

  const distinctNCTCount = new Set(filteredData.map((item) => item["NCT"]))
    .size;

  console.log({ data });

  return (
    <div className="container">
      <Row gutter={10}>
        <Col span={24}>
          <MyExpandableDropdown
            checkedList={checkedList}
            setCheckedList={setCheckedList}
            options={options}
          />
        </Col>

        <Col span={24}>
          <MyHierarchicalCheckboxSelector
            checkedList={checkedList}
            setCheckedList={setCheckedList}
            options={options}
          />
        </Col>
        <Col span={24}>
          {/* <MyExpandableMultiSelector
            checkedList={checkedList}
            setCheckedList={setCheckedList}
            options={options}
          /> */}
          <Input
            placeholder="Search..."
            style={{ marginBottom: 10 }}
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Col>
        {/* <Col span={5}> */}
      </Row>
      <Row gutter={10}>
        <MultiColumnSelectComponent
          checkedList={checkedList}
          setCheckedList={setCheckedList}
          // options={options}
        />

        {/* <setCheckedList
          columns={columns}
          onSelectColumns={(selectedColumns) => {
            setCheckedList(selectedColumns);
          }}*/}
      </Row>
      {/* 
      <Row gutter={10}>
        <div>
          <YourComponent />
          {/* <ColumnSelector /> */}
      {/* <h1>Multi-Level Column Selector</h1>
      <MultiLevelColumnSelector columns={columns} onColumnSelect={handleColumnSelect} /> 
        </div>
      </Row>*/}
      <Row gutter={10}>
        {/* <Row gutter={10}>

    <div className="flex flex-col lg:flex-row">
      <Collapse defaultActiveKey={['1']} className="w-full lg:w-1/3 lg:mr-4 mb-4 lg:mb-0">
  
        <Panel header="Filters" key="1">
          <DataFilters
            onClear={() => setSelectedFilters({})}
            selectedFilters={selectedFilters}
            onSelect={handleSelectedFilters}
          />
        </Panel>
      </Collapse>

      <div className="w-full lg:w-1/3 lg:mx-4">
          <div className="custom-table">
            <Table
              columns={newColumns}
              dataSource={filteredData}
              bordered
              pagination={{ pageSize: topValue }}
              size="small"
              scroll={{
                x: 'calc(700px + 50%)',
                y: 1500,
              }}
              onChange={(pagination, filters, sorter) => {
                // Apply sorting to filteredData
                const sortedData = [...filteredData];
            
                if (sorter.field && sorter.order) {
                  sortedData.sort((a, b) => {
                    const aValue = a[sorter.field];
                    const bValue = b[sorter.field];
            
                    if (typeof aValue === 'string' && typeof bValue === 'string') {
                      return sorter.order === 'ascend' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
                    }
            
                    return sorter.order === 'ascend' ? aValue - bValue : bValue - aValue;
                  });
                }
            
                setFilteredData(sortedData);
              }}
            footer={() => (
                <div>
                  <span>{`Showing ${filteredData.length} rows`}</span>
                  <span style={{ marginLeft: 8 }}>{`Distinct NCT Records: ${distinctNCTCount}`}</span>
                  
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
          

    </div>
    <Collapse defaultActiveKey={['1']} className="w-full lg:w-1/3 lg:ml-4">
        <Panel header="Columns" key="1">
          <MyExpandableMultiSelector
            checkedList={checkedList}
            setCheckedList={setCheckedList}
            options={options}
          />
        </Panel>
      </Collapse>
    </div>

      </Row> */}

        {/* <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsed={leftCollapsed}
            onCollapse={toggleLeftCollapsed}
            theme="light"
            width={200}
            collapsedWidth={30}
            style={{ overflow: "auto", height: "100vh", left: 0 }}
          >
            {!leftCollapsed ? (
              <div>
                <Button
                  type="link"
                  onClick={toggleLeftCollapsed}
                  style={{ padding: 0 }}
                >
                  <LeftOutlined />
                  Filters
                </Button>

                <DataFilters
                  onClear={() => setSelectedFilters({})}
                  selectedFilters={selectedFilters}
                  onSelect={handleSelectedFilters}
                />
              </div>
            ) : (
              <Button
                type="link"
                onClick={toggleLeftCollapsed}
                style={{ padding: 0, textAlign: "center" }}
              >
                <RightOutlined />
                <br />
                Filters
              </Button>
            )}
          </Sider>

          <Content style={{ padding: "0 50px", textAlign: "center" }}>
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
            collapsedWidth={30}
            style={{ overflow: "auto", height: "100vh", right: 0 }}
          >
            {!rightCollapsed ? (
              <div>
                Column
                <Button
                  type="link"
                  onClick={toggleRightCollapsed}
                  style={{ padding: 0 }}
                >
                  <RightOutlined />
                </Button>
                <MyExpandableMultiSelector
                  checkedList={checkedList}
                  setCheckedList={setCheckedList}
                  options={options}
                />
              </div>
            ) : (
              <Button
                type="link"
                onClick={toggleRightCollapsed}
                style={{ padding: 0, textAlign: "center" }}
              >
                <LeftOutlined />
                <br />
                Column
              </Button>
            )}
          </Sider>
        </Layout> */}

        {/* //50vh
        <Layout style={{ minHeight: "50vh", display: "flex" }}>
          <Sider
            collapsed={leftCollapsed}
            onCollapse={toggleLeftCollapsed}
            theme="light"
            width={200}
            collapsedWidth={50}
            style={{
              overflow: "auto",
              height: "50vh",
              flex: "none",
              minWidth: leftCollapsed ? 50 : 200,
            }}
          >
            {!leftCollapsed ? (
              <div
                style={{
                  minHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Left Sider
                <Button
                  type="link"
                  onClick={toggleLeftCollapsed}
                  style={{ padding: 0 }}
                >
                  <LeftOutlined />
                </Button>
                <DataFilters
                  onClear={() => setSelectedFilters({})}
                  selectedFilters={selectedFilters}
                  onSelect={handleSelectedFilters}
                />
              </div>
            ) : (
              <Button
                type="link"
                onClick={toggleLeftCollapsed}
                style={{ padding: 0, textAlign: "center" }}
              >
                <LeftOutlined />
              </Button>
            )}
          </Sider>
          <Layout style={{ flex: 1 }}>
            <Content
              style={{
                padding: "0 50px",
                textAlign: "center",
                height: "100%",
                overflow: "auto",
              }}
            >
              Middle Content
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
          </Layout>
          <Sider
            collapsed={rightCollapsed}
            onCollapse={toggleRightCollapsed}
            theme="light"
            width={200}
            collapsedWidth={50}
            style={{
              overflow: "auto",
              height: "50vh",
              flex: "none",
              minWidth: rightCollapsed ? 50 : 200,
            }}
          >
            {!rightCollapsed ? (
              <div
                style={{
                  minHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Right Sider
                <Button
                  type="link"
                  onClick={toggleRightCollapsed}
                  style={{ padding: 0 }}
                >
                  <RightOutlined />
                </Button>
                <MyExpandableMultiSelector
                  checkedList={checkedList}
                  setCheckedList={setCheckedList}
                  options={options}
                />
              </div>
            ) : (
              <Button
                type="link"
                onClick={toggleRightCollapsed}
                style={{ padding: 0, textAlign: "center" }}
              >
                <RightOutlined />
              </Button>
            )}
          </Sider>
        </Layout> */}

        {/* <Layout style={{ minHeight: "50vh", display: "flex" }}>
          <Sider
            collapsed={leftCollapsed}
            onCollapse={toggleLeftCollapsed}
            theme="light"
            width={200}
            style={{
              overflow: "auto",
              maxHeight: leftCollapsed ? "auto" : contentHeight,
              transition: "none",
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ flex: "1 1 auto" }}>Left Sider</div>
              <Button type="link" onClick={toggleLeftCollapsed}>
                {leftCollapsed ? <RightOutlined /> : <LeftOutlined />}
              </Button>

              <div
                style={{ maxHeight: "calc(100% - 40px)", overflowY: "auto" }}
              >
                {[...Array(30).keys()].map((i) => (
                  <div key={i}>Div {i + 1}</div>
                ))}
              </div>
            </div>
          </Sider>
          <Content
            style={{ padding: "0 50px", textAlign: "center" }}
            ref={contentRef}
          >
            Middle Content
            <div>
              <button
                onClick={() => {
                  let elements = "";
                  for (let i = 0; i < 10; i++) {
                    elements += `<div>Element ${i + 1}</div>`;
                  }
                  document.getElementById("elements").innerHTML = elements;
                  setContentHeight(contentRef.current.clientHeight);
                }}
              >
                Render 10 elements
              </button>
              <button
                onClick={() => {
                  let elements = "";
                  for (let i = 0; i < 50; i++) {
                    elements += `<div>Element ${i + 1}</div>`;
                  }
                  document.getElementById("elements").innerHTML = elements;
                  setContentHeight(contentRef.current.clientHeight);
                }}
              >
                Render 50 elements
              </button>
              <div id="elements"></div>
            </div>
          </Content>
          <Sider
            collapsed={rightCollapsed}
            onCollapse={toggleRightCollapsed}
            theme="light"
            width={200}
            style={{
              overflow: "auto",
              maxHeight: contentHeight,
              transition: "none",
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ flex: "1 1 auto" }}>Right Sider</div>
              <Button type="link" onClick={toggleRightCollapsed}>
                {rightCollapsed ? <RightOutlined /> : <LeftOutlined />}
              </Button>
            </div>
          </Sider>
        </Layout> */}

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
            // style={{ overflow: "auto", maxHeight: leftCollapsed ? 'auto' : contentHeight, left: 0 }}
          >
            {!leftCollapsed ? (
              // <div>
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
                  {/* <div style={{ flex: '1 1 auto', transform: 'rotate(-90deg)', transformOrigin: '0 0', whiteSpace: 'nowrap' }}>Filters</div> */}
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
            // style={{ overflow: "auto", height: contentHeight, right: 0 }}
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
                {/* <MyExpandableMultiSelector
                  checkedList={checkedList}
                  setCheckedList={setCheckedList}
                  options={options}
                /> */}
                <MultiColumnSelector
                  checkedList={checkedList}
                  setCheckedList={setCheckedList}
                />
              </div>
            ) : (
              // <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
