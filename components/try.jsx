
//new column selector from updated column structure
import React, { useState } from 'react';
import { Modal, Tree, Button } from 'antd';
import { column_data as columns} from '@/misc/json_data'

const { TreeNode } = Tree;

const renderTreeNodes = (data, parentKey = '') => {
  return data.map((item) => {
    const key = `${parentKey}_${item.key}`;
    if (item.children) {
      return {
        title: item.title,
        key: key,
        children: renderTreeNodes(item.children, key),
      };
    }
    return {
      title: item.title,
      key: key,
    };
  });
};

const ColumnSelector = ({ visible, onCancel, onOk }) => {
  const [checkedKeys, setCheckedKeys] = useState([]);

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

  const getAllKeys = (data, parentKey = '') => {
    return data.flatMap((item) => {
      const key = `${parentKey}_${item.key}`;
      const keys = [key];
      if (item.children) {
        keys.push(...getAllKeys(item.children, key));
      }
      return keys;
    });
  };

  return (
    <Modal
      title="Select Columns"
      visible={visible}
      onOk={() => onOk(checkedKeys)}
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

export const YourComponent = () => {
  const [visible, setVisible] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState([]);

  const showColumnSelector = () => {
    setVisible(true);
  };

  const handleColumnSelectorOk = (keys) => {
    setSelectedColumns(keys);
    setVisible(false);
  };

  const handleColumnSelectorCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button onClick={showColumnSelector}>Select Columns</Button>
      <ColumnSelector
        visible={visible}
        onCancel={handleColumnSelectorCancel}
        onOk={handleColumnSelectorOk}
      />
      <div>
        Selected Columns: {selectedColumns.join(', ')}
      </div>
    </>
  );
};



//old column selector from old column structure
// import React, { useState } from 'react';
// import { Modal, Tree, Button } from 'antd';
// // import { columns_name as columns} from "@/misc/parsedData";
// import { columns_name as columns} from "@/misc/parsedData";

// const { TreeNode } = Tree;





//   const getAllKeys = (data, parentKey = '') => {
//     return data.flatMap((item) => {
//       const key = `${parentKey}_${item.id}`;
//       const keys = [key];
//       if (item.columns) {
//         keys.push(...getAllKeys(item.columns, key));
//       }
//       return keys;
//     });
//   };
  
//   const renderTreeNodes = (data, parentKey = '') => {
//     return data.map((item) => {
//       const key = `${parentKey}_${item.id}`;
//       if (item.columns) {
//         return {
//           title: item.name,
//           key: key,
//           children: renderTreeNodes(item.columns, key),
//         };
//       }
//       return {
//         title: item.name,
//         key: key,
//       };
//     });
//   };
  
//   const ColumnSelector = ({ visible, onCancel, onOk }) => {
//     const [checkedKeys, setCheckedKeys] = useState([]);
  
//     const onCheck = (checkedKeysValue) => {
//       setCheckedKeys(checkedKeysValue);
//     };
  
//     const selectAll = () => {
//       const allKeys = getAllKeys(columns);
//       setCheckedKeys(allKeys);
//     };
  
//     const deselectAll = () => {
//       setCheckedKeys([]);
//     };
  
//     const getAllKeys = (data, parentKey = '') => {
//       return data.flatMap((item) => {
//         const key = `${parentKey}_${item.id}`;
//         const keys = [key];
//         if (item.columns) {
//           keys.push(...getAllKeys(item.columns, key));
//         }
//         return keys;
//       });
//     };
  
//     return (
//       <Modal
//         title="Select Columns"
//         visible={visible}
//         onOk={() => onOk(checkedKeys)}
//         onCancel={onCancel}
//       >
//         <div style={{ marginBottom: 10 }}>
//           <Button onClick={selectAll}>Select All</Button>
//           <Button onClick={deselectAll} style={{ marginLeft: 8 }}>Deselect All</Button>
//         </div>
//         <Tree
//           checkable
//           onCheck={onCheck}
//           checkedKeys={checkedKeys}
//           height={300} // Adjust the height as needed
//           treeData={renderTreeNodes(columns)}
//           autoExpandParent={true}
//           defaultExpandAll={true}
//         />
//       </Modal>
//     );
//   };
  

// export const YourComponent = () => {
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
//       <div>
//         Selected Columns: {selectedColumns.join(', ')}
//       </div>
//     </>
//   );
// };




// import React, { useState } from 'react';
// import { Modal, Tree, Button } from 'antd';
// import { columns } from "@/misc/parsedData";

// const { TreeNode } = Tree;

// const ColumnSelector = ({ visible, onCancel, onOk }) => {
//   const [checkedKeys, setCheckedKeys] = useState([]);

//   const onCheck = (checkedKeysValue) => {
//     setCheckedKeys(checkedKeysValue);
//   };

//   const treeData = columns.map((column, index) => ({
//     title: column.title,
//     key: `column_${index}`,
//     children: column.children
//       ? column.children.map((child, childIndex) => ({
//           title: child.title,
//           key: `child_${index}_${childIndex}`,
//         }))
//       : undefined,
//   }));

//   const selectAll = () => {
//     const allKeys = treeData.flatMap((column) =>
//       column.children ? [column.key, ...column.children.map((child) => child.key)] : column.key
//     );
//     setCheckedKeys(allKeys);
//   };

//   const deselectAll = () => {
//     setCheckedKeys([]);
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
//         <Button onClick={deselectAll} style={{ marginLeft: 8 }}>Deselect All</Button>
//       </div>
//       <Tree
//         checkable
//         onCheck={onCheck}
//         checkedKeys={checkedKeys}
//         treeData={treeData}
//         height={300} // Adjust the height as needed
//         autoExpandParent={true}
//         defaultExpandAll={true}
//       >
//         {renderTreeNodes(treeData)}
//       </Tree>
//     </Modal>
//   );
// };

// const renderTreeNodes = (data) => {
//   return data.map((item) => {
//     if (item.children) {
//       return (
//         <TreeNode title={item.title} key={item.key}>
//           {renderTreeNodes(item.children)}
//         </TreeNode>
//       );
//     }
//     return <TreeNode title={item.title} key={item.key} />;
//   });
// };

// export const YourComponent = () => {
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
//       <div>
//         Selected Columns: {selectedColumns.join(', ')}
//       </div>
//     </>
//   );
// };


// import React, { useState } from 'react';
// import { Modal, Tree } from 'antd';
// import { columns } from "@/misc/parsedData";
// import { Button } from 'antd';

// const { TreeNode } = Tree;

// const ColumnSelector = ({ visible, onCancel, onOk }) => {
//   const [checkedKeys, setCheckedKeys] = useState([]);

//   const onCheck = (checkedKeysValue) => {
//     setCheckedKeys(checkedKeysValue);
//   };

//   const treeData = columns.map((column, index) => ({
//     title: column.title,
//     key: `column_${index}`,
//     children: column.children
//       ? column.children.map((child, childIndex) => ({
//           title: child.title,
//           key: `child_${index}_${childIndex}`,
//         }))
//       : undefined,
//   }));

//   return (
//     <Modal
//       title="Select Columns"
//       visible={visible}
//       onOk={() => onOk(checkedKeys)}
//       onCancel={onCancel}
//     >
//       <Tree
//         checkable
//         onCheck={onCheck}
//         checkedKeys={checkedKeys}
//         treeData={treeData}
//         height={300} // Adjust the height as needed
//         autoExpandParent={true}
//         defaultExpandAll={true}
//       >
//         {renderTreeNodes(treeData)}
//       </Tree>
//     </Modal>
//   );
// };

// const renderTreeNodes = (data) => {
//   return data.map((item) => {
//     if (item.children) {
//       return (
//         <TreeNode title={item.title} key={item.key}>
//           {renderTreeNodes(item.children)}
//         </TreeNode>
//       );
//     }
//     return <TreeNode title={item.title} key={item.key} />;
//   });
// };

// export const YourComponent = () => {
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
//       <div>
//         Selected Columns: {selectedColumns.join(', ')}
//       </div>
//     </>
//   );
// };


// import React, { useState } from 'react';
// import { Modal, Tree } from 'antd';
// import { columns } from "@/misc/parsedData";
// import { Button } from 'antd';

// const { TreeNode } = Tree;

// const ColumnSelector = ({ visible, onCancel, onOk }) => {
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
//     <Modal
//       title="Select Columns"
//       visible={visible}
//       onOk={() => onOk(checkedKeys)}
//       onCancel={onCancel}
//     >
//       <Tree
//         checkable
//         onCheck={onCheck}
//         checkedKeys={checkedKeys}
//         treeData={treeData}
//         height={300} // Adjust the height as needed
//         autoExpandParent={true}
//         defaultExpandAll={true}
//       >
//         {renderTreeNodes(treeData)}
//       </Tree>
//     </Modal>
//   );
// };

// const renderTreeNodes = (data) => {
//   return data.map((item) => {
//     if (item.children) {
//       return (
//         <TreeNode title={item.title} key={item.key}>
//           {renderTreeNodes(item.children)}
//         </TreeNode>
//       );
//     }
//     return <TreeNode title={item.title} key={item.key} />;
//   });
// };



// export const YourComponent = () => {
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
//       <div>
//         Selected Columns: {selectedColumns.join(', ')}
//       </div>
//     </>
//   );
// };


