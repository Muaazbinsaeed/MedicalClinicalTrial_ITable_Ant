// import React, { useState } from 'react';
// import { Checkbox, Collapse } from 'antd';

// const { Panel } = Collapse;

// export const MultiColumnSelectComponent = ({ checkedList, setCheckedList, options }) => {
//   const [expanded, setExpanded] = useState(false);

//   const handleExpand = () => {
//     setExpanded(!expanded);
//   };

//   const handleCheck = (value) => {
//     if (checkedList.includes(value)) {
//       setCheckedList(checkedList.filter((item) => item !== value));
//     } else {
//       setCheckedList([...checkedList, value]);
//     }
//   };

//   const renderOptions = (options) => {
//     return options.map((option) => {
//       if (option.children) {
//         return (
//           <div key={option.value}>
//             <Checkbox
//               indeterminate={
//                 checkedList.includes(option.value)
//                   ? false
//                   : option.children.some((child) =>
//                       checkedList.includes(child.value)
//                     )
//               }
//               onChange={() => handleCheck(option.value)}
//               checked={checkedList.includes(option.value)}
//             >
//               {option.label}
//             </Checkbox>
//             <div style={{ paddingLeft: '20px' }}>
//               {renderOptions(option.children)}
//             </div>
//           </div>
//         );
//       } else {
//         return (
//           <Checkbox
//             key={option.value}
//             onChange={() => handleCheck(option.value)}
//             checked={checkedList.includes(option.value)}
//           >
//             {option.label}
//           </Checkbox>
//         );
//       }
//     });
//   };

//   return (
//     <Collapse
//       bordered={false}
//       activeKey={expanded ? ['1'] : []}
//       expandIconPosition="right"
//       onChange={handleExpand}
//       className="mb-2"
//     >
//       <Panel header="Show/Hide Columns" key="1">
//         {renderOptions(options)}
//       </Panel>
//     </Collapse>
//   );
// };


// import React, { useState } from "react";
// import { Modal, Tree, Button } from "antd";
// import { column_data as columns } from "@/misc/json_data";

// const { TreeNode } = Tree;

// const renderTreeNodes = (data) => {
//   return data.map((item) => {
//     const key = `${item.key}`;
//     if (item.children) {
//       return {
//         title: item.title,
//         key,
//         children: renderTreeNodes(item.children),
//       };
//     }
//     return {
//       title: item.title,
//       key,
//     };
//   });
// };

// const ColumnSelector = ({ visible, onCancel, onOk }) => {
//   const [checkedKeys, setCheckedKeys] = useState([]);

//   const onCheck = (checkedKeysValue) => {
//     setCheckedKeys(checkedKeysValue);
//   };

//   const selectAll = () => {
//     const allKeys = getAllKeys(columns);
//     setCheckedKeys(allKeys);
//   };

//   const deselectAll = () => {
//     setCheckedKeys([]);
//   };

//   const getAllKeys = (data) => {
//     return data.flatMap((item) => {
//       const key = `${item.key}`;
//       const keys = [key];
//       if (item.children) {
//         keys.push(...getAllKeys(item.children));
//       }
//       return keys;
//     });
//   };

//   return (
//     <Modal
//       title="Select Columns"
//       visible={visible}
//       onOk={() => onOk(checkedKeys)}
//       onCancel={onCancel}
//     >
//       <div style={{ marginBottom: 10 }}>
//         <Button onClick={selectAll}>Select All</Button>
//         <Button onClick={deselectAll} style={{ marginLeft: 8 }}>
//           Deselect All
//         </Button>
//       </div>
//       <Tree
//         checkable
//         onCheck={onCheck}
//         checkedKeys={checkedKeys}
//         height={300} // Adjust the height as needed
//         treeData={renderTreeNodes(columns)}
//         autoExpandParent={true}
//         defaultExpandAll={true}
//       />
//     </Modal>
//   );
// };

// export const MultiColumnSelectComponent = () => {
//   const [visible, setVisible] = useState(false);
//   const [selectedColumns, setSelectedColumns] = useState([]);

//   const showColumnSelector = () => {
//     setVisible(true);
//   };

//   const handleColumnSelectorOk = (keys) => {
//     setSelectedColumns(keys);
//     setVisible(false);
//   };

//   const handleColumnSelectorCancel = () => {
//     setVisible(false);
//   };

//   return (
//     <>
//       <Button onClick={showColumnSelector}>Select Columns</Button>
//       <ColumnSelector
//         visible={visible}
//         onCancel={handleColumnSelectorCancel}
//         onOk={handleColumnSelectorOk}
//       />
//       <div>Selected Columns: {selectedColumns.join(", ")}</div>
//     </>
//   );
// };


import React, { useState } from 'react';
import { Modal, Tree, Button } from 'antd';
// import { columns } from '@/misc/parsedData';
import { column_data as columns} from '@/misc/json_data'
import { Checkbox, Collapse } from 'antd';

const { TreeNode } = Tree;

// const renderTreeNodes = (data, parentKey = '') => {
//   return data.map((item) => {
//     const key = `${parentKey}_${item.key}`;
//     if (item.children) {
//       return {
//         title: item.title,
//         key: key,
//         children: renderTreeNodes(item.children, key),
//       };
//     }
//     return {
//       title: item.title,
//       key: key,
//     };
//   });
// };


const renderTreeNodes = (data) => {
  return data.map((item) => {
    const key = `${item.key}`;
    if (item.children) {
      return {
        title: item.title,
        key,
        children: renderTreeNodes(item.children),
      };
    }
    return {
      title: item.title,
      key,
    };
  });
};


const MultiColumnSelectModal = ({ visible, onCancel, onOk, checkedList, setCheckedList, options }) => {
  const [checkedKeys, setCheckedKeys] = useState(checkedList);

  const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue);
  };

  const selectAll = () => {
    const allKeys = getAllKeys(columns);
    setCheckedKeys(allKeys);
  };

  const deselectAll = () => {
    setCheckedKeys([]);
  };

  const getAllKeys = (data) => {
        return data.flatMap((item) => {
          const key = `${item.key}`;
          const keys = [key];
          if (item.children) {
            keys.push(...getAllKeys(item.children));
          }
          return keys;
        });
      };

//   const getAllKeys = (data, parentKey = '') => {
//     return data.flatMap((item) => {
//       const key = `${parentKey}_${item.key}`;
//       const keys = [key];
//       if (item.children) {
//         keys.push(...getAllKeys(item.children, key));
//       }
//       return keys;
//     });
//   };

  return (
    <Modal
      title="Select Columns"
      visible={visible}
      onOk={() => {
        setCheckedList(checkedKeys);
        onOk(checkedKeys);
      }}
      onCancel={onCancel}
    >
      <div style={{ marginBottom: 10 }}>
        <Button onClick={selectAll}>Select All</Button>
        <Button onClick={deselectAll} style={{ marginLeft: 8 }}>Deselect All</Button>
      </div>
      <Tree
        checkable
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        height={300} // Adjust the height as needed
        treeData={renderTreeNodes(columns)}
        autoExpandParent={true}
        defaultExpandAll={true}
      />
    </Modal>
  );
};

export const MultiColumnSelectComponent = ({ checkedList, setCheckedList, options }) => {
  const [visible, setVisible] = useState(false);

  const showColumnSelector = () => {
    setVisible(true);
  };

  const handleColumnSelectorOk = (keys) => {
    setCheckedList(keys);
    setVisible(false);
  };

  const handleColumnSelectorCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button onClick={showColumnSelector}>Select Columns</Button>
      <MultiColumnSelectModal
        visible={visible}
        onCancel={handleColumnSelectorCancel}
        onOk={handleColumnSelectorOk}
        checkedList={checkedList}
        setCheckedList={setCheckedList}
        options={options}
      />
      <div>
        Selected Columns: {checkedList.join(', ')}
      </div>
    </>
  );
};
