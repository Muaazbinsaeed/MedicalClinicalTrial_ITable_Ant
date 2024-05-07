// import React, { useState } from 'react';
// import { Modal, Tree, Button } from 'antd';
// import { column_data as columns} from '@/misc/json_data'
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


// const MultiColumnSelectModal = ({ visible, onCancel, onOk, checkedList, setCheckedList, options }) => {
//   const [checkedKeys, setCheckedKeys] = useState(checkedList);

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
//         return data.flatMap((item) => {
//           const key = `${item.key}`;
//           const keys = [key];
//           if (item.children) {
//             keys.push(...getAllKeys(item.children));
//           }
//           return keys;
//         });
//       };

//   return (
//     <Modal
//       title="Select Columns"
//       visible={visible}
//       onOk={() => {
//         setCheckedList(checkedKeys);
//         onOk(checkedKeys);
//       }}
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
//         height={300} // Adjust the height as needed
//         treeData={renderTreeNodes(columns)}
//         autoExpandParent={true}
//         defaultExpandAll={true}
//       />
//     </Modal>
//   );
// };

// export const MultiColumnSelectComponent = ({ checkedList, setCheckedList, options }) => {
//   const [visible, setVisible] = useState(false);

//   const showColumnSelector = () => {
//     setVisible(true);
//   };

//   const handleColumnSelectorOk = (keys) => {
//     setCheckedList(keys);
//     setVisible(false);
//   };

//   const handleColumnSelectorCancel = () => {
//     setVisible(false);
//   };

//   return (
//     <>
//         {/* {console.log(renderTreeNodes(columns))} */}
//       <Button onClick={showColumnSelector}>Select Columns</Button>
//       <MultiColumnSelectModal
//         visible={visible}
//         onCancel={handleColumnSelectorCancel}
//         onOk={handleColumnSelectorOk}
//         checkedList={checkedList}
//         setCheckedList={setCheckedList}
//         options={options}
//       />
//       <div>
//         Selected Columns: {checkedList.join(', ')}
//       </div>
//     </>
//   );
// };


// import React, { useState } from 'react';
// import { Button, Checkbox, Tree } from 'antd';
// import { column_data as columns } from '@/misc/json_data';

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

// const MultiColumnSelectModal = ({ checkedList, setCheckedList }) => {
//   const [checkedKeys, setCheckedKeys] = useState(checkedList);

//   const onCheck = (checkedKeysValue) => {
//     setCheckedKeys(checkedKeysValue);
//     setCheckedList(checkedKeysValue);
//   };

//   const selectAll = () => {
//     const allKeys = getAllKeys(columns);
//     setCheckedKeys(allKeys);
//     setCheckedList(allKeys);
//   };

//   const deselectAll = () => {
//     setCheckedKeys([]);
//     setCheckedList([]);
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
//     <div>
//       <Button onClick={selectAll}>Select All</Button>
//       <Button onClick={deselectAll} style={{ marginLeft: 8 }}>Deselect All</Button>
//       <Tree
//         checkable
//         onCheck={onCheck}
//         checkedKeys={checkedKeys}
//         height={300} // Adjust the height as needed
//         treeData={renderTreeNodes(columns)}
//         autoExpandParent={true}
//         defaultExpandAll={true}
//       />
//     </div>
//   );
// };

// export const MultiColumnSelectComponent = ({ checkedList, setCheckedList }) => {
//   return (
//     <>
//       <MultiColumnSelectModal
//         checkedList={checkedList}
//         setCheckedList={setCheckedList}
//       />
//       <div>
//         Selected Columns: {checkedList.join(', ')}
//       </div>
//     </>
//   );
// };



import React, { useState } from 'react';
import { Button, Tree } from 'antd';
import { column_data as columns } from '@/misc/json_data';

const { TreeNode } = Tree;

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

const renderTreeNodes = (data) => {
  return data.map((item) => ({
    title: item.title,
    key: `${item.key}`,
    children: item.children ? renderTreeNodes(item.children) : null,
  }));
};

export const MultiColumnSelector = ({ checkedList, setCheckedList }) => {
  const [checkedKeys, setCheckedKeys] = useState(checkedList);

  const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue);
    setCheckedList(checkedKeysValue);
  };

  const selectAll = () => {
    const allKeys = getAllKeys(columns);
    setCheckedKeys(allKeys);
    setCheckedList(allKeys);
  };

  const deselectAll = () => {
    setCheckedKeys([]);
    setCheckedList([]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ marginBottom: 10, marginLeft: "20px", marginRight: "20px"}}>
        <Button onClick={selectAll}     style={{ minWidth: 50, margin: '0 5px', marginBottom: 5, width: '100%' }}>Select All</Button>
        <Button onClick={deselectAll}   style={{ minWidth: 50, margin: '0 5px', marginBottom: 5, width: '100%' }}>Deselect All</Button>
      </div>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Tree
          checkable
          onCheck={onCheck}
          checkedKeys={checkedKeys}
          height={300} // Adjust the height as needed
          treeData={renderTreeNodes(columns)}
          autoExpandParent={true}
          defaultExpandAll={true}
        />
      </div>
    </div>
  );
  
};
  

export const MultiColumnSelectComponent = ({ checkedList, setCheckedList }) => (
  <>
    <MultiColumnSelector
      checkedList={checkedList}
      setCheckedList={setCheckedList}
    />
    <div>
      Selected Columns: {checkedList.join(', ')}
    </div>
  </>
);

