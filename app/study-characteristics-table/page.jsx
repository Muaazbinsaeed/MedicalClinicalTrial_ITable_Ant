'use client'

import React, { useEffect, useState, useDeferredValue } from 'react';
import { Checkbox, Table } from 'antd';
import { columns } from '@/misc/parsedData';
import jsonData from '@/misc/data.json'
import { Col, Row } from 'antd';
import { Select, Collapse } from 'antd';
import { DataFilters } from '@/components/data-filters';
const { Option } = Select;
const { Panel } = Collapse;

const data = [];

for (let i = 0; i < jsonData.rs.length; i++) {
  data.push({
    key: i,
    "nct": jsonData.rs[i]?.NCT,
    "PMID": jsonData.rs[i]?.PMID,
    "TRIAL NAME": jsonData.rs[i]?.Trial_Name,
    "TREATMENT ARM(S)": jsonData.rs[i]?.Treatment_Arms,
    "Control Arm": jsonData.rs[i]?.Control_Arm,
    "qw4hd": jsonData.rs[i]?.Class_of_Agent_in_Treatment_Arm_1,
    "Type of Therapy": jsonData.rs[i]["Type of Therapy"],
    "Original/Follow Up": jsonData.rs[i]["Original/Follow Up"],
    "TREATMENT ARM 1 REGIMEN": jsonData.rs[i]?.['Treatment Arm 1 Regimen'],
    'TOTAL PARTICIPANTS - N': jsonData.rs[i]?.['Total Participants - N'],
    'TREATMENT ARM - N': jsonData.rs[i]?.['TREATMENT ARM - N'],
    'CONTROL ARM - N': jsonData.rs[i]?.['CONTROL ARM - N'],
    'MEDIAN FOLLOW-UP DURATION (MO)': jsonData.rs[i]?.['MEDIAN FOLLOW-UP DURATION (MO)'],
    TREATMENT1: jsonData.rs[i]?.['Median On-Treatment Duration (mo) | Treatment'],
    CONTROL1: jsonData.rs[i]?.['Median On-Treatment Duration (mo) | Control'],
    'QUALITY OF LIFE REPORTED': jsonData.rs[i]?.['QUALITY OF LIFE REPORTED'],
    "QUALITY OF LIFE SCALE": jsonData.rs[i]?.['QUALITY OF LIFE SCALE'],
    SYNCHRONOUS: jsonData.rs[i]?.["Reporting by prognostic groups - Y/N | Synchronous"],
    METACHRONOUS: jsonData.rs[i]?.["Reporting by prognostic groups - Y/N | Metachronous"],
    "HIGH VOLUME": jsonData.rs[i]?.['Reporting by prognostic groups - Y/N | High volume'],
    "LOW VOLUME": jsonData.rs[i]?.['Reporting by prognostic groups - Y/N | Low volume'],
    TREATMENT2: jsonData.rs[i]?.[" Mode of metastases - N (%) | Metachronous | Treatment"],
    CONTROL2: jsonData.rs[i]?.[" Mode of metastases - N (%) | Metachronous | Control"],
    TREATMENT3: jsonData.rs[i]?.[" Mode of metastases - N (%) | Synchronous | Treatment"],
    CONTROL3: jsonData.rs[i]?.[" Mode of metastases - N (%) | Synchronous | Control"],
    TREATMENT4: jsonData.rs[i]?.[' Volume of disease - N (%) | High | Treatment'],
    CONTROL4: jsonData.rs[i]?.[' Volume of disease - N (%) | High | Control'],
    TREATMENT5: jsonData.rs[i]?.[' Volume of disease - N (%) | Low | Treatment'],
    CONTROL5: jsonData.rs[i]?.[' Volume of disease - N (%) | Low | Treatment'],
    TREATMENT6: jsonData.rs[i]?.['Docetaxel administration - N (%) | Treatment'],
    CONTROL6: jsonData.rs[i]?.['Docetaxel administration - N (%) | Control'],
    TREATMENT7: jsonData.rs[i]?.['Median Age (years) | Treatment'],
    CONTROL7: jsonData.rs[i]?.['Median Age (years) | Control'],
    '[AMER. INDIAN OR ALASKA NAT.]': jsonData.rs[i]?.['Race - N (%) | Amer. Indian or Alaska Nat.'],
    ASIAN: jsonData.rs[i]?.['Race - N (%) | Asian'],
    'BLACK OR AFRICAN AMERICAN': jsonData.rs[i]?.['Race - N (%) | Black or African American'],
    'Nat. Hawaiian or Pac. Islander': jsonData.rs[i]?.['Race - N (%) | Nat. Hawaiian or Pac. Islander'],
    'OTHER': jsonData.rs[i]?.['Race - N (%) | Other'],
    'UNKNOWN': jsonData.rs[i]?.['Race - N (%) | Unknown'],
    WHITE: jsonData.rs[i]?.['Race - N (%) | White'],

    "REGION - N (%)": {
      "NORTH AMERICA": {
        TREATMENT: jsonData.rs[i]?.['REGION - N (%)']?.['NORTH AMERICA']?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['REGION - N (%)']?.['NORTH AMERICA']?.CONTROL
      },
      "SOUTH AMERICA": {
        TREATMENT: jsonData.rs[i]?.['REGION - N (%)']?.['SOUTH AMERICA']?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['REGION - N (%)']?.['SOUTH AMERICA']?.CONTROL
      },
      "EUROPE": {
        TREATMENT: jsonData.rs[i]?.['REGION - N (%)']?.EUROPE?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['REGION - N (%)']?.EUROPE?.CONTROL
      },
      "AFRICA": {
        TREATMENT: jsonData.rs[i]?.['REGION - N (%)']?.AFRICA?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['REGION - N (%)']?.AFRICA?.CONTROL
      },
      "ASIA": {
        TREATMENT: jsonData.rs[i]?.['REGION - N (%)']?.ASIA?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['REGION - N (%)']?.ASIA?.CONTROL
      },
      "OCEANIA": {
        TREATMENT: jsonData.rs[i]?.['REGION - N (%)']?.OCEANIA?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['REGION - N (%)']?.OCEANIA?.CONTROL
      }
    },
    "PS - N (%)": {
      "0": {
        TREATMENT: jsonData.rs[i]?.['PS - N (%)']?.['0']?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['PS - N (%)']?.['0']?.CONTROL
      },
      "1-2": {
        TREATMENT: jsonData.rs[i]?.['PS - N (%)']?.['1-2']?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['PS - N (%)']?.['1-2']?.CONTROL
      }
    },
    "GLEASON SCORE - N (%)": {
      "≤ 7": {
        TREATMENT: jsonData.rs[i]?.['GLEASON SCORE - N (%)']?.['≤ 7']?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['GLEASON SCORE - N (%)']?.['≤ 7']?.CONTROL
      },
      "≥ 8": {
        TREATMENT: jsonData.rs[i]?.['GLEASON SCORE - N (%)']?.['≥ 8']?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['GLEASON SCORE - N (%)']?.['≥ 8']?.CONTROL
      }
    },
    "METASTASES - N (%)": {
      "LIVER": {
        TREATMENT: jsonData.rs[i]?.['METASTASES - N (%)']?.LIVER?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['METASTASES - N (%)']?.LIVER?.CONTROL
      },
      "LUNGS": {
        TREATMENT: jsonData.rs[i]?.['METASTASES - N (%)']?.LUNGS?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['METASTASES - N (%)']?.LUNGS?.CONTROL
      },
      "BONE": {
        TREATMENT: jsonData.rs[i]?.['METASTASES - N (%)']?.BONE?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['METASTASES - N (%)']?.BONE?.CONTROL
      },
      "NODAL": {
        TREATMENT: jsonData.rs[i]?.['METASTASES - N (%)']?.NODAL?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['METASTASES - N (%)']?.NODAL?.CONTROL
      }
    },
    "PREVIOUS LOCAL THERAPY - N (%)": {
      "PROSTATECTOMY": {
        TREATMENT: jsonData.rs[i]?.['PREVIOUS LOCAL THERAPY - N (%)']?.PROSTATECTOMY?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['PREVIOUS LOCAL THERAPY - N (%)']?.PROSTATECTOMY?.CONTROL
      },
      "ORCHIECTOMY": {
        TREATMENT: jsonData.rs[i]?.['PREVIOUS LOCAL THERAPY - N (%)']?.ORCHIECTOMY?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['PREVIOUS LOCAL THERAPY - N (%)']?.ORCHIECTOMY?.CONTROL
      },
      "RADIOTHERAPY": {
        TREATMENT: jsonData.rs[i]?.['PREVIOUS LOCAL THERAPY - N (%)']?.RADIOTHERAPY?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['PREVIOUS LOCAL THERAPY - N (%)']?.RADIOTHERAPY?.CONTROL
      }
    },
    "PRIMARY ENDPOINT(S)": {
      TREATMENT: jsonData.rs[i]?.['PRIMARY ENDPOINT(S)']?.TREATMENT,
      CONTROL: jsonData.rs[i]?.['PRIMARY ENDPOINT(S)']?.CONTROL
    },
    "SECONDARY ENDPOINT(S)": {
      TREATMENT: jsonData.rs[i]?.['SECONDARY ENDPOINT(S)']?.TREATMENT,
      CONTROL: jsonData.rs[i]?.['SECONDARY ENDPOINT(S)']?.CONTROL
    },
    "ORR - N (%)": {
      "TREATMENT": {
        "CR": jsonData.rs[i]?.['ORR - N (%)']?.TREATMENT?.CR,
        "OVERALL": jsonData.rs[i]?.['ORR - N (%)']?.TREATMENT?.OVERALL,
        "PD": jsonData.rs[i]?.['ORR - N (%)']?.TREATMENT?.PD,
        "SD": jsonData.rs[i]?.['ORR - N (%)']?.TREATMENT?.SD
      },
      "CONTROL": {
        "CR": jsonData.rs[i]?.['ORR - N (%)']?.CONTROL?.CR,
        "OVERALL": jsonData.rs[i]?.['ORR - N (%)']?.CONTROL?.OVERALL,
        "PD": jsonData.rs[i]?.['ORR - N (%)']?.CONTROL?.PD,
        "SD": jsonData.rs[i]?.['ORR - N (%)']?.CONTROL?.SD
      }
    },
    "ADVERSE EVENTS - N (%)": {
      "ALL-CAUSE GRADE 3 OR HIGHER": {
        TREATMENT: jsonData.rs[i]?.['ADVERSE EVENTS - N (%)']?.['ALL-CAUSE GRADE 3 OR HIGHER']?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['ADVERSE EVENTS - N (%)']?.['ALL-CAUSE GRADE 3 OR HIGHER']?.CONTROL
      },
      "TREATMENT-RELATED GRADE 3 OR HIGHER": {
        TREATMENT: jsonData.rs[i]?.['ADVERSE EVENTS - N (%)']?.['TREATMENT-RELATED GRADE 3 OR HIGHER']?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['ADVERSE EVENTS - N (%)']?.['TREATMENT-RELATED GRADE 3 OR HIGHER']?.CONTROL
      },
      "TREATMENT-RELATED GRADE 5": {
        TREATMENT: jsonData.rs[i]?.['ADVERSE EVENTS - N (%)']?.['TREATMENT-RELATED GRADE 5']?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['ADVERSE EVENTS - N (%)']?.['TREATMENT-RELATED GRADE 5']?.CONTROL
      }
    },
    "NO. OF DEATHS - N": {
      TREATMENT: jsonData.rs[i]?.['NO. OF DEATHS - N']?.TREATMENT,
      CONTROL: jsonData.rs[i]?.['NO. OF DEATHS - N']?.CONTROL
    },
    "TTPSA (MO)": {
      TREATMENT: jsonData.rs[i]?.['TTPSA (MO)']?.TREATMENT,
      CONTROL: jsonData.rs[i]?.['TTPSA (MO)']?.CONTROL
    },
    "OS RATE (%)": {
      "SYNCHRONOUS": {
        TREATMENT: jsonData.rs[i]?.['OS RATE (%)']?.SYNCHRONOUS?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['OS RATE (%)']?.SYNCHRONOUS?.CONTROL
      },
      "METACHRONOUS": {
        TREATMENT: jsonData.rs[i]?.['OS RATE (%)']?.METACHRONOUS?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['OS RATE (%)']?.METACHRONOUS?.CONTROL
      },
      "HIGH VOLUME": {
        TREATMENT: jsonData.rs[i]?.['OS RATE (%)']?.['HIGH VOLUME']?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['OS RATE (%)']?.['HIGH VOLUME']?.CONTROL
      },
      "LOW VOLUME": {
        TREATMENT: jsonData.rs[i]?.['OS RATE (%)']?.['LOW VOLUME']?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['OS RATE (%)']?.['LOW VOLUME']?.CONTROL
      }
    },
    "MEDIAN OS (MO)": {
      "HIGH VOLUME": {
        TREATMENT: jsonData.rs[i]?.['MEDIAN OS (MO)']?.['HIGH VOLUME']?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['MEDIAN OS (MO)']?.['HIGH VOLUME']?.CONTROL
      },
      "LOW VOLUME": {
        TREATMENT: jsonData.rs[i]?.['MEDIAN OS (MO)']?.['LOW VOLUME']?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['MEDIAN OS (MO)']?.['LOW VOLUME']?.CONTROL
      }
    },
    "PFS RATE (%)": {
      "OVERALL": {
        TREATMENT: jsonData.rs[i]?.['PFS RATE (%)']?.OVERALL?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['PFS RATE (%)']?.OVERALL?.CONTROL
      }
    },
    "MEDIAN PFS (MO)": {
      "HIGH VOLUME": {
        TREATMENT: jsonData.rs[i]?.['MEDIAN PFS (MO)']?.['HIGH VOLUME']?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['MEDIAN PFS (MO)']?.['HIGH VOLUME']?.CONTROL
      },
      "LOW VOLUME": {
        TREATMENT: jsonData.rs[i]?.['MEDIAN PFS (MO)']?.['LOW VOLUME']?.TREATMENT,
        CONTROL: jsonData.rs[i]?.['MEDIAN PFS (MO)']?.['LOW VOLUME']?.CONTROL
      }
    },
    "ADD-ON TREATMENT": {
      TREATMENT: jsonData.rs[i]?.['ADD-ON TREATMENT']?.TREATMENT,
      CONTROL: jsonData.rs[i]?.['ADD-ON TREATMENT']?.CONTROL
    },
    "TREATMENT CLASS": {
      TREATMENT: jsonData.rs[i]?.['TREATMENT CLASS']?.TREATMENT,
      CONTROL: jsonData.rs[i]?.['TREATMENT CLASS']?.CONTROL
    },
    "TYPE OF THERAPY": {
      TREATMENT: jsonData.rs[i]?.['TYPE OF THERAPY']?.TREATMENT,
      CONTROL: jsonData.rs[i]?.['TYPE OF THERAPY']?.CONTROL
    }
  });
}

const defaultCheckedList = []

for (let i = 0; i < 5; i++) {
  defaultCheckedList.push(columns[i].key)
}

const MyExpandableDropdown = ({ checkedList, setCheckedList, options }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };





  return (
    <Collapse
      bordered={false}
      activeKey={expanded ? ['1'] : []}
      expandIconPosition="right"
      onChange={handleExpand}
      className="mb-2"
    >
      <Panel header="Show/Hide Columns" key="1">
        <Select
          mode="multiple"
          style={{ width: '100%' }}
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





// let modifiedCols = {};
// let jk = 0
// jsonData.attrs.forEach((item) => {
//   let splitted_item = item.attr_id.split('|');
//   if (splitted_item.length === 2) {
//     let attrKey = splitted_item[0].substring(1);
//     let attrValue = splitted_item[1];
//     if (attrKey === attrValue) {
//       modifiedCols[attrKey] = attrValue;
//     } else {
//       if (modifiedCols.hasOwnProperty(attrKey)) {
//         modifiedCols[attrKey].push(attrValue);
//       } else {
//         modifiedCols[attrKey] = [attrValue];
//       }
//     }
//   } else {
//     // Handling case where split length is not 2
//     splitted_item.forEach((subItem, index) => {
//       if (index === 0 && !modifiedCols.hasOwnProperty(subItem)) {
//         modifiedCols[subItem] = {};
//       } else if (index !== 0) {
//         let tempObj = modifiedCols;
//         for (let i = 0; i < index; i++) {
//           if (!tempObj.hasOwnProperty(splitted_item[i])) {
//             tempObj[splitted_item[i]] = {};
//           }
//           tempObj = tempObj[splitted_item[i]];
//         }
//         if (!tempObj.hasOwnProperty(subItem)) {
//           tempObj[subItem] = [];
//         }
//       }
//     });
//   }
// });


// console.log(modifiedCols)

const App = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [selectedFilters, setSelectedFilters] = useState({})
  const [filteredData, setFilteredData] = useState(data || [])

  const defferedFilters = useDeferredValue(selectedFilters)

  const options = columns.map(({ key, title }) => ({
    label: title,
    value: key,
  }));
  const newColumns = columns.map((item) => ({
    ...item,
    hidden: !checkedList.includes(item.key),
  }));

  const handleSelectedFilters = (key, value) => {
    if (key) setSelectedFilters(prev => ({ ...prev, [key]: value }))
  }

  useEffect(() => {
    const filtered = data.filter(item =>
      Object.entries(defferedFilters).every(([filterKey, filterValue]) => {
        if (filterValue === "All") {
          return true;
        } else {
          return filterValue?.split('+').some(part =>
            item[filterKey].toLowerCase().includes(part.trim().toLowerCase())
          );
        }
      })
    );
    setFilteredData(filtered);
  }, [data, defferedFilters]);

  console.log({ data })

  return (
    <div className="container">
      <Row gutter={10}>
        <Col span={24}>
          <MyExpandableDropdown
            checkedList={checkedList}
            setCheckedList={setCheckedList}
            options={options}

          />

          {/* <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Select options"
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


          <Checkbox.Group
            value={checkedList}
            options={options}
            onChange={(value) => {
              setCheckedList(value);
            }}
          /> */}
        </Col>
        <Col span={5}>
          <DataFilters
            onClear={() => setSelectedFilters({})}
            selectedFilters={selectedFilters}
            onSelect={handleSelectedFilters} />
        </Col>
        <Col span={19}>
          <div className="custom-table">
            <Table
              columns={newColumns}
              dataSource={filteredData}
              bordered
              pagination={{ pageSize: 20 }}
              size="small"
              scroll={{
                x: 'calc(700px + 50%)',
                y: 1500,
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default App;