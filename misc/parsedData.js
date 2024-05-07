const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

export const columns = [
  {
    title: "_NCT|NCT",
    dataIndex: "nct",
    key: 5,
    width: 200,
    sorter: (a, b) => a.nct - b.nct,
    fixed: "left",
  },
  {
    title: "PMID",
    dataIndex: "PMID",
    key: 6,
    width: 200,
    sorter: (a, b) => a.PMID - b.PMID,
    fixed: "left",
  },
  {
    title: "TRIAL NAME",
    dataIndex: "TRIAL NAME",
    key: 7,
    width: 200,
  },
  {
    title: "TREATMENT ARM(S)",
    dataIndex: "TREATMENT ARM(S)",
    key: 8,
    width: 200,
  },
  {
    title: "CONTROL ARM",
    dataIndex: "CONTROL ARM",
    key: 9,
    width: 200,
  },
  {
    title: "CLASS OF AGENT IN TREATMENT ARM 1",
    dataIndex: "qw4hd",
    key: 10,
    width: 200,
    filters: [
      {
        text: "Chemotherapy",
        value: "Chemotherapy",
      },
      {
        text: "ARPI",
        value: "ARPI",
      },
    ],
    onFilter: (value, record) => record.qw4hd.indexOf(value) === 0,
  },
  {
    title: "TREATMENT ARM 1 REGIMEN",
    dataIndex: "TREATMENT ARM 1 REGIMEN",
    key: 11,
    width: 200,
    ellipsis: true,
    // render: text => truncateText(text, 10),
  },
  {
    title: "TOTAL PARTICIPANTS - N",
    dataIndex: "TOTAL PARTICIPANTS - N",
    key: 12,
    width: 200,
  },
  {
    title: "TREATMENT ARM - N",
    dataIndex: "TREATMENT ARM - N",
    key: 13,
    width: 200,
  },
  {
    title: "CONTROL ARM - N",
    dataIndex: "CONTROL ARM - N",
    key: 14,
    width: 200,
  },
  {
    title: "MEDIAN FOLLOW-UP DURATION (MO)",
    dataIndex: "MEDIAN FOLLOW-UP DURATION (MO)",
    key: 15,
    width: 200,
  },
  {
    title: "MEDIAN ON-TREATMENT DURATION (MO)",
    key: 16,
    width: 200,
    children: [
      {
        title: "TREATMENT",
        dataIndex: "TREATMENT1",
        key: "TREATMENT",
        width: 200,
      },
      {
        title: "CONTROL",
        dataIndex: "CONTROL1",
        key: "CONTROL",
        width: 200,
      },
    ],
  },
  {
    title: "QUALITY OF LIFE REPORTED",
    dataIndex: "QUALITY OF LIFE REPORTED",
    key: 17,
    width: 200,
  },
  {
    title: "QUALITY OF LIFE SCALE",
    dataIndex: "QUALITY OF LIFE SCALE",
    key: 18,
    width: 200,
  },
  {
    title: "REPORTING BY PROGNOSTIC GROUPS - Y/N",
    key: 19,
    width: 200,
    children: [
      {
        title: "SYNCHRONOUS",
        dataIndex: "SYNCHRONOUS",
        key: "SYNCHRONOUS",
        width: 200,
      },
      {
        title: "METACHRONOUS",
        dataIndex: "METACHRONOUS",
        key: "METACHRONOUS",
        width: 200,
      },
      {
        title: "HIGH VOLUME",
        dataIndex: "HIGH VOLUME",
        key: "HIGH VOLUME",
        width: 200,
      },
      {
        title: "LOW VOLUME",
        dataIndex: "LOW VOLUME",
        key: "LOW VOLUME",
        width: 200,
      },
    ],
  },
  {
    title: "MODE OF METASTASES - N (%)",
    key: 20,
    width: 200,
    children: [
      {
        title: "SYNCHRONOUS",
        key: "SYNCHRONOUS",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT2",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL2",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "METACHRONOUS",
        key: "METACHRONOUS",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT3",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL3",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
    ],
  },
  {
    title: "VOLUME OF DISEASE - N (%)",
    key: 21,
    width: 200,
    children: [
      {
        title: "HIGH",
        key: "HIGH",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT4",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL4",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "LOW",
        key: "LOW",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT5",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL5",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
    ],
  },
  {
    title: "DOCETAXEL ADMINISTRATION - N (%)",
    key: 22,
    width: 200,
    children: [
      {
        title: "TREATMENT",
        dataIndex: "TREATMENT6",
        key: "TREATMENT",
        width: 200,
      },
      {
        title: "CONTROL",
        dataIndex: "CONTROL6",
        key: "CONTROL",
        width: 200,
      },
    ],
  },
  {
    title: "MEDIAN AGE (YEARS)",
    key: 23,
    width: 200,
    children: [
      {
        title: "TREATMENT",
        dataIndex: "TREATMENT7",
        key: "TREATMENT",
        width: 200,
      },
      {
        title: "CONTROL",
        dataIndex: "CONTROL7",
        key: "CONTROL",
        width: 200,
      },
    ],
  },
  {
    title: "RACE - N (%)",
    key: 24,
    width: 200,
    children: [
      {
        title: "WHITE",
        key: "WHITE",
        width: 200,
      },
      {
        title: "BLACK OR AFRICAN AMERICAN",
        key: "BLACK OR AFRICAN AMERICAN",
        width: 200,
      },
      {
        title: "ASIAN",
        key: "ASIAN",
        width: 200,
      },
      {
        title: "NAT. HAWAIIAN OR PAC. ISLANDER",
        key: "NAT. HAWAIIAN OR PAC. ISLANDER",
        width: 200,
      },
      {
        title: "AMER. INDIAN OR ALASKA NAT.",
        key: "AMER. INDIAN OR ALASKA NAT.",
        width: 200,
      },
      {
        title: "OTHER",
        key: "OTHER",
        width: 200,
      },
      {
        title: "UNKNOWN",
        key: "UNKNOWN",
        width: 200,
      },
    ],
  },

  {
    title: "REGION - N (%)",
    key: 25,
    width: 200,
    children: [
      {
        title: "NORTH AMERICA",
        key: "NORTH AMERICA",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "SOUTH AMERICA",
        key: "SOUTH AMERICA",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "EUROPE",
        key: "EUROPE",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "AFRICA",
        key: "AFRICA",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "ASIA",
        key: "ASIA",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "OCEANIA",
        key: "OCEANIA",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
    ],
  },

  {
    title: "PS - N (%)",
    key: 26,
    width: 200,
    children: [
      {
        title: "0",
        key: "0",
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "1-2",
        key: "1-2",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
    ],
  },

  {
    title: "GLEASON SCORE - N (%)",
    key: 270,
    width: 200,
    children: [
      {
        title: "≤ 7",
        key: "≤ 7",
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "≥ 8",
        key: "≥ 8",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
    ],
  },
  {
    title: "METASTASES - N (%)",
    key: 27,
    width: 200,
    children: [
      {
        title: "LIVER",
        key: "LIVER",
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "LUNGS",
        key: "LUNGS",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "BONE",
        key: "BONE",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "NODAL",
        key: "NODAL",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
    ],
  },

  {
    title: "PREVIOUS LOCAL THERAPY - N (%)",
    key: 28,
    width: 200,
    children: [
      {
        title: "PROSTATECTOMY",
        key: "PROSTATECTOMY",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "ORCHIECTOMY",
        key: "ORCHIECTOMY",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "RADIOTHERAPY",
        key: "RADIOTHERAPY",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
    ],
  },
  {
    title: "PRIMARY ENDPOINT(S)",
    dataIndex: "PRIMARY ENDPOINT(S)",
    key: 29,
    width: 200,
  },
  {
    title: "SECONDARY ENDPOINT(S)",
    dataIndex: "SECONDARY ENDPOINT(S)",
    key: 30,
    width: 200,
  },
  {
    title: "ORR - N (%)",
    key: 31,
    width: 200,
    children: [
      {
        title: "TREATMENT",
        key: "TREATMENT",
        children: [
          {
            title: "CR",
            dataIndex: "CR",
            key: "CR",
            width: 200,
          },
          {
            title: "OVERALL",
            dataIndex: "OVERALL",
            key: "OVERALL",
            width: 200,
          },
          {
            title: "PD",
            dataIndex: "PD",
            key: "PD",
            width: 200,
          },
          {
            title: "SD",
            dataIndex: "SD",
            key: "SD",
            width: 200,
          },
        ],
      },
      {
        title: "CONTROL",
        key: "CONTROL",
        width: 200,
        children: [
          {
            title: "CR",
            dataIndex: "CR",
            key: "CR",
            width: 200,
          },
          {
            title: "OVERALL",
            dataIndex: "OVERALL",
            key: "OVERALL",
            width: 200,
          },
          {
            title: "PD",
            dataIndex: "PD",
            key: "PD",
            width: 200,
          },
          {
            title: "SD",
            dataIndex: "SD",
            key: "SD",
            width: 200,
          },
        ],
      },
    ],
  },

  {
    title: "ADVERSE EVENTS - N (%)",
    key: 32,
    width: 200,
    children: [
      {
        title: "ALL-CAUSE GRADE 3 OR HIGHER",
        key: "ALL-CAUSE GRADE 3 OR HIGHER",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "TREATMENT-RELATED GRADE 3 OR HIGHER",
        key: "TREATMENT-RELATED GRADE 3 OR HIGHER",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "TREATMENT-RELATED GRADE 5",
        key: "TREATMENT-RELATED GRADE 5",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
    ],
  },
  {
    title: "NO. OF DEATHS - N",
    key: 33,
    width: 200,
    children: [
      {
        title: "TREATMENT",
        dataIndex: "TREATMENT",
        key: "TREATMENT",
        width: 200,
      },
      {
        title: "CONTROL",
        dataIndex: "CONTROL",
        key: "CONTROL",
        width: 200,
      },
    ],
  },
  {
    title: "TTPSA (MO)",
    key: 980,
    width: 200,
    children: [
      {
        title: "TREATMENT",
        dataIndex: "TREATMENT",
        key: "TREATMENT",
        width: 200,
      },
      {
        title: "CONTROL",
        dataIndex: "CONTROL",
        key: "CONTROL",
        width: 200,
      },
    ],
  },
  {
    title: "OS RATE (%)",
    key: 982,
    width: 200,
    children: [
      {
        title: "SYNCHRONOUS",
        key: "SYNCHRONOUS",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "METACHRONOUS",
        key: "METACHRONOUS",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "HIGH VOLUME",
        key: "HIGH VOLUME",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "LOW VOLUME",
        key: "LOW VOLUME",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
    ],
  },
  {
    title: "MEDIAN OS (MO)",
    key: 34,
    width: 200,
    children: [
      {
        title: "HIGH VOLUME",
        key: "HIGH VOLUME",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "LOW VOLUME",
        key: "LOW VOLUME",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
    ],
  },
  {
    title: "PFS RATE (%)",
    key: 35,
    width: 200,
    children: [
      {
        title: "OVERALL",
        key: "OVERALL",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
    ],
  },
  {
    title: "MEDIAN PFS (MO)",
    key: 36,
    width: 200,
    children: [
      {
        title: "HIGH VOLUME",
        key: "HIGH VOLUME",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
      {
        title: "LOW VOLUME",
        key: "LOW VOLUME",
        width: 200,
        children: [
          {
            title: "TREATMENT",
            dataIndex: "TREATMENT",
            key: "TREATMENT",
            width: 200,
          },
          {
            title: "CONTROL",
            dataIndex: "CONTROL",
            key: "CONTROL",
            width: 200,
          },
        ],
      },
    ],
  },
  {
    title: "ADD-ON TREATMENT",
    key: 37,
    width: 200,
    dataIndex: "ADD-ON TREATMENT",
  },
  {
    title: "TREATMENT CLASS",
    key: 38,
    width: 200,
    dataIndex: "TREATMENT CLASS",
  },
  {
    title: "TYPE OF THERAPY",
    key: 39,
    width: 200,
    dataIndex: "Type of Therapy",
  },
  {
    title: "Original/Follow Up",
    key: 40,
    width: 200,
    dataIndex: "Original/Follow Up",
  },
];

// export const columns = [
//     {
//         title: '_NCT|NCT',
//         dataIndex: 'nct',
//         key: 5,
//         width: 200,
//         sorter: (a, b) => a.nct - b.nct,
//         fixed: 'left',
//     },
//     {
//         title: 'PMID',
//         dataIndex: 'PMID',
//         key: 6,
//         width: 200,
//         sorter: (a, b) => a.PMID - b.PMID,
//         fixed: 'left',
//     },
//     {
//         title: 'TRIAL NAME',
//         dataIndex: 'TRIAL NAME',
//         key: 7,
//         width: 200
//     },
//     {
//         title: 'TREATMENT ARM(S)',
//         dataIndex: 'TREATMENT ARM(S)',
//         key: 8,
//         width: 200,
//     },
//     {
//         title: 'CONTROL ARM',
//         dataIndex: 'CONTROL ARM',
//         key: 9,
//         width: 200,
//     },
//     {
//         title: 'CLASS OF AGENT IN TREATMENT ARM 1',
//         dataIndex: 'qw4hd',
//         key: 10,
//         width: 200,
//         filters: [
//             {
//                 text: 'Chemotherapy',
//                 value: 'Chemotherapy',
//             },
//             {
//                 text: 'ARPI',
//                 value: 'ARPI',
//             },
//         ],
//         onFilter: (value, record) => record.qw4hd.indexOf(value) === 0,
//     },
//     {
//         title: 'TREATMENT ARM 1 REGIMEN',
//         dataIndex: 'TREATMENT ARM 1 REGIMEN',
//         key: 11,
//         width: 200,
//         render: text => truncateText(text, 10),
//     },
//     {
//         title: 'TOTAL PARTICIPANTS - N',
//         dataIndex: 'TOTAL PARTICIPANTS - N',
//         key: 12,
//         width: 200,
//     },
//     {
//         title: 'TREATMENT ARM - N',
//         dataIndex: 'TREATMENT ARM - N',
//         key: 13,
//         width: 200,
//     },
//     {
//         title: 'CONTROL ARM - N',
//         dataIndex: 'CONTROL ARM - N',
//         key: 14,
//         width: 200,
//     },
//     {
//         title: 'MEDIAN FOLLOW-UP DURATION (MO)',
//         dataIndex: 'MEDIAN FOLLOW-UP DURATION (MO)',
//         key: 15,
//         width: 200,
//     },
//     {
//         title: 'MEDIAN ON-TREATMENT DURATION (MO)',
//         key: 16,
//         width: 200,
//         children: [
//             {
//                 title: 'TREATMENT',
//                 dataIndex: 'TREATMENT1',
//                 key: 'TREATMENT',
//                 width: 200,
//             },
//             {
//                 title: 'CONTROL',
//                 dataIndex: 'CONTROL1',
//                 key: 'CONTROL',
//                 width: 200,
//             }
//         ]
//     },
//     {
//         title: 'QUALITY OF LIFE REPORTED',
//         dataIndex: 'QUALITY OF LIFE REPORTED',
//         key: 17,
//         width: 200,
//     },
//     {
//         title: 'QUALITY OF LIFE SCALE',
//         dataIndex: 'QUALITY OF LIFE SCALE',
//         key: 18,
//         width: 200,
//     },
//     {
//         title: 'REPORTING BY PROGNOSTIC GROUPS - Y/N',
//         key: 19,
//         width: 200,
//         children: [
//             {
//                 title: 'SYNCHRONOUS',
//                 dataIndex: 'SYNCHRONOUS',
//                 key: 'SYNCHRONOUS',
//                 width: 200,
//             },
//             {
//                 title: 'METACHRONOUS',
//                 dataIndex: 'METACHRONOUS',
//                 key: 'METACHRONOUS',
//                 width: 200,
//             },
//             {
//                 title: 'HIGH VOLUME',
//                 dataIndex: 'HIGH VOLUME',
//                 key: 'HIGH VOLUME',
//                 width: 200,
//             },
//             {
//                 title: 'LOW VOLUME',
//                 dataIndex: 'LOW VOLUME',
//                 key: 'LOW VOLUME',
//                 width: 200,
//             }
//         ]
//     },
//     {
//         title: 'MODE OF METASTASES - N (%)',
//         key: 20,
//         width: 200,
//         children: [
//             {
//                 title: 'SYNCHRONOUS',
//                 key: 'SYNCHRONOUS',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT2',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL2',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'METACHRONOUS',
//                 key: 'METACHRONOUS',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT3',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL3',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         title: 'VOLUME OF DISEASE - N (%)',
//         key: 21,
//         width: 200,
//         children: [
//             {
//                 title: 'HIGH',
//                 key: 'HIGH',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT4',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL4',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'LOW',
//                 key: 'LOW',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT5',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL5',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         title: 'DOCETAXEL ADMINISTRATION - N (%)',
//         key: 22,
//         width: 200,
//         children: [
//             {
//                 title: 'TREATMENT',
//                 dataIndex: 'TREATMENT6',
//                 key: 'TREATMENT',
//                 width: 200,
//             },
//             {
//                 title: 'CONTROL',
//                 dataIndex: 'CONTROL6',
//                 key: 'CONTROL',
//                 width: 200,
//             }
//         ]
//     },
//     {
//         title: 'MEDIAN AGE (YEARS)',
//         key: 23,
//         width: 200,
//         children: [
//             {
//                 title: 'TREATMENT',
//                 dataIndex: 'TREATMENT7',
//                 key: 'TREATMENT',
//                 width: 200,
//             },
//             {
//                 title: 'CONTROL',
//                 dataIndex: 'CONTROL7',
//                 key: 'CONTROL',
//                 width: 200,
//             }
//         ]
//     },
//     {
//         title: 'RACE - N (%)',
//         key: 24,
//         width: 200,
//         children: [
//             {
//                 title: 'WHITE',
//                 key: 'WHITE',
//                 width: 200,
//             },
//             {
//                 title: 'BLACK OR AFRICAN AMERICAN',
//                 key: 'BLACK OR AFRICAN AMERICAN',
//                 width: 200,
//             },
//             {
//                 title: 'ASIAN',
//                 key: 'ASIAN',
//                 width: 200,
//             },
//             {
//                 title: 'NAT. HAWAIIAN OR PAC. ISLANDER',
//                 key: 'NAT. HAWAIIAN OR PAC. ISLANDER',
//                 width: 200,
//             },
//             {
//                 title: 'AMER. INDIAN OR ALASKA NAT.',
//                 key: 'AMER. INDIAN OR ALASKA NAT.',
//                 width: 200,
//             },
//             {
//                 title: 'OTHER',
//                 key: 'OTHER',
//                 width: 200,
//             },
//             {
//                 title: 'UNKNOWN',
//                 key: 'UNKNOWN',
//                 width: 200,
//             }
//         ]
//     },

//     {
//         title: 'REGION - N (%)',
//         key: 25,
//         width: 200,
//         children: [
//             {
//                 title: 'NORTH AMERICA',
//                 key: 'NORTH AMERICA',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'SOUTH AMERICA',
//                 key: 'SOUTH AMERICA',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'EUROPE',
//                 key: 'EUROPE',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'AFRICA',
//                 key: 'AFRICA',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'ASIA',
//                 key: 'ASIA',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'OCEANIA',
//                 key: 'OCEANIA',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             }
//         ]
//     },

//     {
//         title: 'PS - N (%)',
//         key: 26,
//         width: 200,
//         children: [
//             {
//                 title: '0',
//                 key: '0',
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: '1-2',
//                 key: '1-2',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             }
//         ]
//     }
//     ,

//     {
//         title: 'GLEASON SCORE - N (%)',
//         key: 270,
//         width: 200,
//         children: [
//             {
//                 title: '≤ 7',
//                 key: '≤ 7',
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: '≥ 8',
//                 key: '≥ 8',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         title: 'METASTASES - N (%)',
//         key: 27,
//         width: 200,
//         children: [
//             {
//                 title: 'LIVER',
//                 key: 'LIVER',
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'LUNGS',
//                 key: 'LUNGS',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'BONE',
//                 key: 'BONE',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'NODAL',
//                 key: 'NODAL',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             }
//         ]
//     },

//     {
//         title: 'PREVIOUS LOCAL THERAPY - N (%)',
//         key: 28,
//         width: 200,
//         children: [
//             {
//                 title: 'PROSTATECTOMY',
//                 key: 'PROSTATECTOMY',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'ORCHIECTOMY',
//                 key: 'ORCHIECTOMY',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'RADIOTHERAPY',
//                 key: 'RADIOTHERAPY',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         title: 'PRIMARY ENDPOINT(S)',
//         dataIndex: 'PRIMARY ENDPOINT(S)',
//         key: 29,
//         width: 200,
//     },
//     {
//         title: 'SECONDARY ENDPOINT(S)',
//         dataIndex: 'SECONDARY ENDPOINT(S)',
//         key: 30,
//         width: 200,
//     },
//     {
//         title: 'ORR - N (%)',
//         key: 31,
//         width: 200,
//         children: [
//             {
//                 title: 'TREATMENT',
//                 key: 'TREATMENT',
//                 children: [
//                     {
//                         title: 'CR',
//                         dataIndex: 'CR',
//                         key: 'CR',
//                         width: 200,
//                     },
//                     {
//                         title: 'OVERALL',
//                         dataIndex: 'OVERALL',
//                         key: 'OVERALL',
//                         width: 200,
//                     },
//                     {
//                         title: 'PD',
//                         dataIndex: 'PD',
//                         key: 'PD',
//                         width: 200,
//                     },
//                     {
//                         title: 'SD',
//                         dataIndex: 'SD',
//                         key: 'SD',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'CONTROL',
//                 key: 'CONTROL',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'CR',
//                         dataIndex: 'CR',
//                         key: 'CR',
//                         width: 200,
//                     },
//                     {
//                         title: 'OVERALL',
//                         dataIndex: 'OVERALL',
//                         key: 'OVERALL',
//                         width: 200,
//                     },
//                     {
//                         title: 'PD',
//                         dataIndex: 'PD',
//                         key: 'PD',
//                         width: 200,
//                     },
//                     {
//                         title: 'SD',
//                         dataIndex: 'SD',
//                         key: 'SD',
//                         width: 200,
//                     }
//                 ]
//             }
//         ]
//     },

//     {
//         title: 'ADVERSE EVENTS - N (%)',
//         key: 32,
//         width: 200,
//         children: [
//             {
//                 title: 'ALL-CAUSE GRADE 3 OR HIGHER',
//                 key: 'ALL-CAUSE GRADE 3 OR HIGHER',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'TREATMENT-RELATED GRADE 3 OR HIGHER',
//                 key: 'TREATMENT-RELATED GRADE 3 OR HIGHER',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'TREATMENT-RELATED GRADE 5',
//                 key: 'TREATMENT-RELATED GRADE 5',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         title: 'NO. OF DEATHS - N',
//         key: 33,
//         width: 200,
//         children: [
//             {
//                 title: 'TREATMENT',
//                 dataIndex: 'TREATMENT',
//                 key: 'TREATMENT',
//                 width: 200,
//             },
//             {
//                 title: 'CONTROL',
//                 dataIndex: 'CONTROL',
//                 key: 'CONTROL',
//                 width: 200,
//             }
//         ]
//     },
//     {
//         title: 'TTPSA (MO)',
//         key: 980,
//         width: 200,
//         children: [
//             {
//                 title: 'TREATMENT',
//                 dataIndex: 'TREATMENT',
//                 key: 'TREATMENT',
//                 width: 200,
//             },
//             {
//                 title: 'CONTROL',
//                 dataIndex: 'CONTROL',
//                 key: 'CONTROL',
//                 width: 200,
//             }
//         ]
//     },
//     {
//         title: 'OS RATE (%)',
//         key: 982,
//         width: 200,
//         children: [
//             {
//                 title: 'SYNCHRONOUS',
//                 key: 'SYNCHRONOUS',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'METACHRONOUS',
//                 key: 'METACHRONOUS',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'HIGH VOLUME',
//                 key: 'HIGH VOLUME',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'LOW VOLUME',
//                 key: 'LOW VOLUME',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,

//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         title: 'MEDIAN OS (MO)',
//         key: 34,
//         width: 200,
//         children: [
//             {
//                 title: 'HIGH VOLUME',
//                 key: 'HIGH VOLUME',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'LOW VOLUME',
//                 key: 'LOW VOLUME',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         title: 'PFS RATE (%)',
//         key: 35,
//         width: 200,
//         children: [
//             {
//                 title: 'OVERALL',
//                 key: 'OVERALL',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         title: 'MEDIAN PFS (MO)',
//         key: 36,
//         width: 200,
//         children: [
//             {
//                 title: 'HIGH VOLUME',
//                 key: 'HIGH VOLUME',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             },
//             {
//                 title: 'LOW VOLUME',
//                 key: 'LOW VOLUME',
//                 width: 200,
//                 children: [
//                     {
//                         title: 'TREATMENT',
//                         dataIndex: 'TREATMENT',
//                         key: 'TREATMENT',
//                         width: 200,
//                     },
//                     {
//                         title: 'CONTROL',
//                         dataIndex: 'CONTROL',
//                         key: 'CONTROL',
//                         width: 200,
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         title: 'ADD-ON TREATMENT',
//         key: 37,
//         width: 200,
//         dataIndex: 'ADD-ON TREATMENT'
//     },
//     {
//         title: 'TREATMENT CLASS',
//         key: 38,
//         width: 200,
//         dataIndex: 'TREATMENT CLASS'
//     },
//     {
//         title: 'TYPE OF THERAPY',
//         key: 39,
//         width: 200,
//         dataIndex: 'Type of Therapy'
//     },
//     {
//         title: 'Original/Follow Up',
//         key: 40,
//         width: 200,
//         dataIndex: 'Original/Follow Up'
//     }
// ];

export const columns_name = [
  {
    id: "nct",
    accessorKey: "nct",
    name: "NCT",
  },
  {
    id: "pubmedId",
    accessorKey: "pubmedId",
    name: "PubMed ID",
  },
  {
    id: "trialName",
    accessorKey: "trialName",
    name: "Trial Name",
  },
  {
    id: "author",
    accessorKey: "author",
    name: "Author",
  },
  {
    id: "year",
    accessorKey: "year",
    name: "Year",
  },
  {
    id: "fullPubOrAbstract",
    accessorKey: "fullPubOrAbstract",
    name: "Full Pub or Abstract",
  },
  {
    id: "phase",
    accessorKey: "phase",
    name: "Phase",
  },
  {
    id: "originalfollowUp",
    accessorKey: "originalfollowUp",
    name: "Original/Follow Up",
  },
  {
    id: "numberOfArmsIncluded",
    accessorKey: "numberOfArmsIncluded",
    name: "Number of Arms Included",
  },
  {
    id: "treatmentArms",
    accessorKey: "treatmentArms",
    name: "Treatment Arm(s)",
  },
  {
    id: "controlArm",
    accessorKey: "controlArm",
    name: "Control Arm",
  },
  {
    id: "classOfAgentInTreatmentArm1",
    accessorKey: "classOfAgentInTreatmentArm1",
    name: "Class of Agent in Treatment Arm 1",
  },
  {
    id: "treatmentArm1Regimen",
    accessorKey: "treatmentArm1Regimen",
    name: "Treatment Arm 1 Regimen",
  },
  {
    id: "totalParticipantsN",
    accessorKey: "totalParticipantsN",
    name: "Total Participants - N",
  },
  {
    id: "treatmentArmN",
    accessorKey: "treatmentArmN",
    name: "Treatment Arm - N",
  },
  {
    id: "controlArmN",
    accessorKey: "controlArmN",
    name: "Control Arm - N",
  },
  {
    id: "medianFollowupDurationMo",
    accessorKey: "medianFollowupDurationMo",
    name: "Median Follow-Up Duration (mo)",
  },
  {
    name: "Median On-Treatment Duration (mo)",
    id: "Median On-Treatment Duration (mo)",
    columns: [
      {
        id: "medianOntreatmentDurationMoTreatment",
        accessorKey: "medianOntreatmentDurationMoTreatment",
        name: "Treatment",
      },
      {
        id: "medianOntreatmentDurationMoControl",
        accessorKey: "medianOntreatmentDurationMoControl",
        name: "Control ",
      },
    ],
  },
  {
    id: "qualityOfLifeReported",
    accessorKey: "qualityOfLifeReported",
    name: "Quality of Life reported",
  },
  {
    id: "qualityOfLifeScale",
    accessorKey: "qualityOfLifeScale",
    name: "Quality of Life Scale",
  },
  {
    name: "Reporting by prognostic groups - Y/N",
    id: "Reporting by prognostic groups - Y/N",
    columns: [
      {
        id: "reportingByPrognosticGroupsYnSynchronous",
        accessorKey: "reportingByPrognosticGroupsYnSynchronous",
        name: "Synchronous",
      },
      {
        id: "reportingByPrognosticGroupsYnMetachronous",
        accessorKey: "reportingByPrognosticGroupsYnMetachronous",
        name: "Metachronous",
      },
      {
        id: "reportingByPrognosticGroupsYnHighVolume",
        accessorKey: "reportingByPrognosticGroupsYnHighVolume",
        name: "High volume",
      },
      {
        id: "reportingByPrognosticGroupsYnLowVolume",
        accessorKey: "reportingByPrognosticGroupsYnLowVolume",
        name: "Low volume",
      },
    ],
  },
  {
    name: "Mode of metastases - N (%)",
    id: "Mode of metastases - N (%)",
    columns: [
      {
        name: "Synchronous",
        id: "Synchronous",
        columns: [
          {
            id: "modeOfMetastasesNSynchronousTreatment",
            accessorKey: "modeOfMetastasesNSynchronousTreatment",
            name: "Treatment",
          },
          {
            id: "modeOfMetastasesNSynchronousControl",
            accessorKey: "modeOfMetastasesNSynchronousControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Metachronous",
        id: "Metachronous",
        columns: [
          {
            id: "modeOfMetastasesNMetachronousTreatment",
            accessorKey: "modeOfMetastasesNMetachronousTreatment",
            name: "Treatment",
          },
          {
            id: "modeOfMetastasesNMetachronousControl",
            accessorKey: "modeOfMetastasesNMetachronousControl",
            name: "Control",
          },
        ],
      },
    ],
  },
  {
    name: "Volume of disease - N (%)",
    id: "Volume of disease - N (%)",
    columns: [
      {
        name: "High",
        id: "High",
        columns: [
          {
            id: "volumeOfDiseaseNHighTreatment",
            accessorKey: "volumeOfDiseaseNHighTreatment",
            name: "Treatment",
          },
          {
            id: "volumeOfDiseaseNHighControl",
            accessorKey: "volumeOfDiseaseNHighControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Low",
        id: "Low",
        columns: [
          {
            id: "volumeOfDiseaseNLowTreatment",
            accessorKey: "volumeOfDiseaseNLowTreatment",
            name: "Treatment",
          },
          {
            id: "volumeOfDiseaseNLowControl",
            accessorKey: "volumeOfDiseaseNLowControl",
            name: "Control",
          },
        ],
      },
    ],
  },
  {
    name: "Docetaxel administration - N (%)",
    id: "Docetaxel administration - N (%)",
    columns: [
      {
        id: "docetaxelAdministrationNTreatment",
        accessorKey: "docetaxelAdministrationNTreatment",
        name: "Treatment",
      },
      {
        id: "docetaxelAdministrationNControl",
        accessorKey: "docetaxelAdministrationNControl",
        name: "Control",
      },
    ],
  },
  {
    name: "Median Age (years)",
    id: "Median Age (years)",
    columns: [
      {
        id: "medianAgeYearsTreatment",
        accessorKey: "medianAgeYearsTreatment",
        name: "Treatment",
      },
      {
        id: "medianAgeYearsControl",
        accessorKey: "medianAgeYearsControl",
        name: "Control",
      },
    ],
  },
  {
    name: "Race - N (%)",
    id: "Race - N (%)",
    columns: [
      {
        name: "White",
        id: "White",
        columns: [
          {
            id: "raceNWhiteTreatment",
            accessorKey: "raceNWhiteTreatment",
            name: "Treatment",
          },
          {
            id: "raceNWhiteControl",
            accessorKey: "raceNWhiteControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Black or African American",
        id: "Black or African American",
        columns: [
          {
            id: "raceNBlackOrAfricanAmericanTreatment",
            accessorKey: "raceNBlackOrAfricanAmericanTreatment",
            name: "Treatment",
          },
          {
            id: "raceNBlackOrAfricanAmericanControl",
            accessorKey: "raceNBlackOrAfricanAmericanControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Asian",
        id: "Asian",
        columns: [
          {
            id: "raceNAsianTreatment",
            accessorKey: "raceNAsianTreatment",
            name: "Treatment",
          },
          {
            id: "raceNAsianControl",
            accessorKey: "raceNAsianControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Nat. Hawaiian or Pac. Islander",
        id: "Nat. Hawaiian or Pac. Islander",
        columns: [
          {
            id: "raceNNatHawaiianOrPacIslanderTreatment",
            accessorKey: "raceNNatHawaiianOrPacIslanderTreatment",
            name: "Treatment",
          },
          {
            id: "raceNNatHawaiianOrPacIslanderControl",
            accessorKey: "raceNNatHawaiianOrPacIslanderControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Amer. Indian or Alaska Nat.",
        id: "Amer. Indian or Alaska Nat.",
        columns: [
          {
            id: "raceNAmerIndianOrAlaskaNatTreatment",
            accessorKey: "raceNAmerIndianOrAlaskaNatTreatment",
            name: "Treatment",
          },
          {
            id: "raceNAmerIndianOrAlaskaNatControl",
            accessorKey: "raceNAmerIndianOrAlaskaNatControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Other",
        id: "Other",
        columns: [
          {
            id: "raceNOtherTreatment",
            accessorKey: "raceNOtherTreatment",
            name: "Treatment",
          },
          {
            id: "raceNOtherControl",
            accessorKey: "raceNOtherControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Unknown",
        id: "Unknown",
        columns: [
          {
            id: "raceNUnknownTreatment",
            accessorKey: "raceNUnknownTreatment",
            name: "Treatment",
          },
          {
            id: "raceNUnknownControl",
            accessorKey: "raceNUnknownControl",
            name: "Control",
          },
        ],
      },
    ],
  },
  {
    name: "Region - N (%)",
    id: "Region - N (%)",
    columns: [
      {
        name: "North America",
        id: "North America",
        columns: [
          {
            id: "regionNNorthAmericaTreatment",
            accessorKey: "regionNNorthAmericaTreatment",
            name: "Treatment",
          },
          {
            id: "regionNNorthAmericaControl",
            accessorKey: "regionNNorthAmericaControl",
            name: "Control",
          },
        ],
      },
      {
        name: "South America",
        id: "South America",
        columns: [
          {
            id: "regionNSouthAmericaTreatment",
            accessorKey: "regionNSouthAmericaTreatment",
            name: "Treatment",
          },
          {
            id: "regionNSouthAmericaControl",
            accessorKey: "regionNSouthAmericaControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Europe",
        id: "Europe",
        columns: [
          {
            id: "regionNEuropeTreatment",
            accessorKey: "regionNEuropeTreatment",
            name: "Treatment",
          },
          {
            id: "regionNEuropeControl",
            accessorKey: "regionNEuropeControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Africa",
        id: "Africa",
        columns: [
          {
            id: "regionNAfricaTreatment",
            accessorKey: "regionNAfricaTreatment",
            name: "Treatment",
          },
          {
            id: "regionNAfricaControl",
            accessorKey: "regionNAfricaControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Asia",
        id: "Asia",
        columns: [
          {
            id: "regionNAsiaTreatment",
            accessorKey: "regionNAsiaTreatment",
            name: "Treatment",
          },
          {
            id: "regionNAsiaControl",
            accessorKey: "regionNAsiaControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Oceania",
        id: "Oceania",
        columns: [
          {
            id: "regionNOceaniaTreatment",
            accessorKey: "regionNOceaniaTreatment",
            name: "Treatment",
          },
          {
            id: "regionNOceaniaControl",
            accessorKey: "regionNOceaniaControl",
            name: "Control",
          },
        ],
      },
    ],
  },
  {
    name: "PS - N (%)",
    id: "PS - N (%)",
    columns: [
      {
        name: "0",
        id: "0",
        columns: [
          {
            id: "psN0Treatment",
            accessorKey: "psN0Treatment",
            name: "Treatment",
          },
          {
            id: "psN0Control",
            accessorKey: "psN0Control",
            name: "Control",
          },
        ],
      },
      {
        name: "1-2",
        id: "1-2",
        columns: [
          {
            id: "psN12Treatment",
            accessorKey: "psN12Treatment",
            name: "Treatment",
          },
          {
            id: "psN12Control",
            accessorKey: "psN12Control",
            name: "Control",
          },
        ],
      },
    ],
  },
  {
    name: "Gleason score - N (%)",
    id: "Gleason score - N (%)",
    columns: [
      {
        name: "≤ 7",
        id: "≤ 7",
        columns: [
          {
            id: "gleasonScoreN7Treatment",
            accessorKey: "gleasonScoreN7Treatment",
            name: "Treatment",
          },
          {
            id: "gleasonScoreN7Control",
            accessorKey: "gleasonScoreN7Control",
            name: "Control",
          },
        ],
      },
      {
        name: "≥ 8",
        id: "≥ 8",
        columns: [
          {
            id: "gleasonScoreN8Treatment",
            accessorKey: "gleasonScoreN8Treatment",
            name: "Treatment",
          },
          {
            id: "gleasonScoreN8Control",
            accessorKey: "gleasonScoreN8Control",
            name: "Control",
          },
        ],
      },
    ],
  },
  {
    name: "Metastases - N (%)",
    id: "Metastases - N (%)",
    columns: [
      {
        name: "Liver",
        id: "Liver",
        columns: [
          {
            id: "metastasesNLiverTreatment",
            accessorKey: "metastasesNLiverTreatment",
            name: "Treatment",
          },
          {
            id: "metastasesNLiverControl",
            accessorKey: "metastasesNLiverControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Lungs",
        id: "Lungs",
        columns: [
          {
            id: "metastasesNLungsTreatment",
            accessorKey: "metastasesNLungsTreatment",
            name: "Treatment",
          },
          {
            id: "metastasesNLungsControl",
            accessorKey: "metastasesNLungsControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Bone",
        id: "Bone",
        columns: [
          {
            id: "metastasesNBoneTreatment",
            accessorKey: "metastasesNBoneTreatment",
            name: "Treatment",
          },
          {
            id: "metastasesNBoneControl",
            accessorKey: "metastasesNBoneControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Nodal",
        id: "Nodal",
        columns: [
          {
            id: "metastasesNNodalTreatment",
            accessorKey: "metastasesNNodalTreatment",
            name: "Treatment",
          },
          {
            id: "metastasesNNodalControl",
            accessorKey: "metastasesNNodalControl",
            name: "Control",
          },
        ],
      },
    ],
  },
  {
    name: "Previous local therapy - N (%)",
    id: "Previous local therapy - N (%)",
    columns: [
      {
        name: "Prostatectomy",
        id: "Prostatectomy",
        columns: [
          {
            id: "previousLocalTherapyNProstatectomyTreatment",
            accessorKey: "previousLocalTherapyNProstatectomyTreatment",
            name: "Treatment",
          },
          {
            id: "previousLocalTherapyNProstatectomyControl",
            accessorKey: "previousLocalTherapyNProstatectomyControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Orchiectomy",
        id: "Orchiectomy",
        columns: [
          {
            id: "previousLocalTherapyNOrchiectomyTreatment",
            accessorKey: "previousLocalTherapyNOrchiectomyTreatment",
            name: "Treatment",
          },
          {
            id: "previousLocalTherapyNOrchiectomyControl",
            accessorKey: "previousLocalTherapyNOrchiectomyControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Radiotherapy",
        id: "Radiotherapy",
        columns: [
          {
            id: "previousLocalTherapyNRadiotherapyTreatment",
            accessorKey: "previousLocalTherapyNRadiotherapyTreatment",
            name: "Treatment",
          },
          {
            id: "previousLocalTherapyNRadiotherapyControl",
            accessorKey: "previousLocalTherapyNRadiotherapyControl",
            name: "Control",
          },
        ],
      },
    ],
  },
  {
    id: "primaryEndpoints",
    accessorKey: "primaryEndpoints",
    name: "Primary Endpoint(s)",
  },
  {
    id: "secondaryEndpoints",
    accessorKey: "secondaryEndpoints",
    name: "Secondary Endpoint(s)",
  },
  {
    name: "ORR - N (%)",
    id: "ORR - N (%)",
    columns: [
      {
        name: "Treatment",
        id: "Treatment",
        columns: [
          {
            id: "orrNTreatmentOverall",
            accessorKey: "orrNTreatmentOverall",
            name: "Overall",
          },
          {
            id: "orrNTreatmentCr",
            accessorKey: "orrNTreatmentCr",
            name: "CR",
          },
          {
            id: "orrNTreatmentSd",
            accessorKey: "orrNTreatmentSd",
            name: "SD",
          },
          {
            id: "orrNTreatmentPd",
            accessorKey: "orrNTreatmentPd",
            name: "PD",
          },
        ],
      },
      {
        name: "Control",
        id: "Control",
        columns: [
          {
            id: "orrNControlOverall",
            accessorKey: "orrNControlOverall",
            name: "Overall",
          },
          {
            id: "orrNControlCr",
            accessorKey: "orrNControlCr",
            name: "CR",
          },
          {
            id: "orrNControlSd",
            accessorKey: "orrNControlSd",
            name: "SD",
          },
          {
            id: "orrNControlPd",
            accessorKey: "orrNControlPd",
            name: "PD",
          },
        ],
      },
    ],
  },
  {
    name: "Adverse Events - N (%)",
    id: "Adverse Events - N (%)",
    columns: [
      {
        name: "All-Cause Grade 3 or Higher",
        id: "All-Cause Grade 3 or Higher",
        columns: [
          {
            id: "adverseEventsNAllcauseGrade3OrHigherTreatment",
            accessorKey: "adverseEventsNAllcauseGrade3OrHigherTreatment",
            name: "Treatment",
          },
          {
            id: "adverseEventsNAllcauseGrade3OrHigherControl",
            accessorKey: "adverseEventsNAllcauseGrade3OrHigherControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Treatment-related Grade 3 or Higher",
        id: "Treatment-related Grade 3 or Higher",
        columns: [
          {
            id: "adverseEventsNTreatmentrelatedGrade3OrHigherTreatment",
            accessorKey:
              "adverseEventsNTreatmentrelatedGrade3OrHigherTreatment",
            name: "Treatment",
          },
          {
            id: "adverseEventsNTreatmentrelatedGrade3OrHigherControl",
            accessorKey: "adverseEventsNTreatmentrelatedGrade3OrHigherControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Treatment-related Grade 5",
        id: "Treatment-related Grade 5",
        columns: [
          {
            id: "adverseEventsNTreatmentrelatedGrade5Treatment",
            accessorKey: "adverseEventsNTreatmentrelatedGrade5Treatment",
            name: "Treatment",
          },
          {
            id: "adverseEventsNTreatmentrelatedGrade5Control",
            accessorKey: "adverseEventsNTreatmentrelatedGrade5Control",
            name: "Control",
          },
        ],
      },
    ],
  },
  {
    name: "No. of Deaths - N",
    id: "No. of Deaths - N",
    columns: [
      {
        id: "noOfDeathsNTreatment",
        accessorKey: "noOfDeathsNTreatment",
        name: "Treatment",
      },
      {
        id: "noOfDeathsNControl",
        accessorKey: "noOfDeathsNControl",
        name: "Control",
      },
    ],
  },
  {
    name: "TTPSA (mo)",
    id: "TTPSA (mo)",
    columns: [
      {
        id: "ttpsaMoTreatment",
        accessorKey: "ttpsaMoTreatment",
        name: "Treatment",
      },
      {
        id: "ttpsaMoControl",
        accessorKey: "ttpsaMoControl",
        name: "Control",
      },
    ],
  },
  {
    name: "OS Rate (%)",
    id: "OS Rate (%)",
    columns: [
      {
        name: "Overall",
        id: "Overall",
        columns: [
          {
            id: "osRateOverallTreatment",
            accessorKey: "osRateOverallTreatment",
            name: "Treatment",
          },
          {
            id: "osRateOverallControl",
            accessorKey: "osRateOverallControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Synchronous",
        id: "Synchronous",
        columns: [
          {
            id: "osRateSynchronousTreatment",
            accessorKey: "osRateSynchronousTreatment",
            name: "Treatment",
          },
          {
            id: "osRateSynchronousControl",
            accessorKey: "osRateSynchronousControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Metachronous",
        id: "Metachronous",
        columns: [
          {
            id: "osRateMetachronousTreatment",
            accessorKey: "osRateMetachronousTreatment",
            name: "Treatment",
          },
          {
            id: "osRateMetachronousControl",
            accessorKey: "osRateMetachronousControl",
            name: "Control",
          },
        ],
      },
      {
        name: "High volume",
        id: "High volume",
        columns: [
          {
            id: "osRateHighVolumeTreatment",
            accessorKey: "osRateHighVolumeTreatment",
            name: "Treatment",
          },
          {
            id: "osRateHighVolumeControl",
            accessorKey: "osRateHighVolumeControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Low volume",
        id: "Low volume",
        columns: [
          {
            id: "osRateLowVolumeTreatment",
            accessorKey: "osRateLowVolumeTreatment",
            name: "Treatment",
          },
          {
            id: "osRateLowVolumeControl",
            accessorKey: "osRateLowVolumeControl",
            name: "Control",
          },
        ],
      },
    ],
  },
  {
    name: "Median OS (mo)",
    id: "Median OS (mo)",
    columns: [
      {
        name: "Overall",
        id: "Overall",
        columns: [
          {
            id: "medianOsMoOverallTreatment",
            accessorKey: "medianOsMoOverallTreatment",
            name: "Treatment",
          },
          {
            id: "medianOsMoOverallControl",
            accessorKey: "medianOsMoOverallControl",
            name: "Control",
          },
        ],
      },
      {
        name: "High volume",
        id: "High volume",
        columns: [
          {
            id: "medianOsMoHighVolumeTreatment",
            accessorKey: "medianOsMoHighVolumeTreatment",
            name: "Treatment",
          },
          {
            id: "medianOsMoHighVolumeControl",
            accessorKey: "medianOsMoHighVolumeControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Low volume",
        id: "Low volume",
        columns: [
          {
            id: "medianOsMoLowVolumeTreatment",
            accessorKey: "medianOsMoLowVolumeTreatment",
            name: "Treatment",
          },
          {
            id: "medianOsMoLowVolumeControl",
            accessorKey: "medianOsMoLowVolumeControl",
            name: "Control",
          },
        ],
      },
    ],
  },
  {
    name: "PFS Rate (%)",
    id: "PFS Rate (%)",
    columns: [
      {
        name: "Overall",
        id: "Overall",
        columns: [
          {
            id: "pfsRateOverallTreatment",
            accessorKey: "pfsRateOverallTreatment",
            name: "Treatment",
          },
          {
            id: "pfsRateOverallControl",
            accessorKey: "pfsRateOverallControl",
            name: "Control",
          },
        ],
      },
    ],
  },
  {
    name: "Median PFS (mo)",
    id: "Median PFS (mo)",
    columns: [
      {
        name: "Overall",
        id: "Overall",
        columns: [
          {
            id: "medianPfsMoOverallTreatment",
            accessorKey: "medianPfsMoOverallTreatment",
            name: "Treatment",
          },
          {
            id: "medianPfsMoOverallControl",
            accessorKey: "medianPfsMoOverallControl",
            name: "Control",
          },
        ],
      },
      {
        name: "High volume",
        id: "High volume",
        columns: [
          {
            id: "medianPfsMoHighVolumeTreatment",
            accessorKey: "medianPfsMoHighVolumeTreatment",
            name: "Treatment",
          },
          {
            id: "medianPfsMoHighVolumeControl",
            accessorKey: "medianPfsMoHighVolumeControl",
            name: "Control",
          },
        ],
      },
      {
        name: "Low volume",
        id: "Low volume",
        columns: [
          {
            id: "medianPfsMoLowVolumeTreatment",
            accessorKey: "medianPfsMoLowVolumeTreatment",
            name: "Treatment",
          },
          {
            id: "medianPfsMoLowVolumeControl",
            accessorKey: "medianPfsMoLowVolumeControl",
            name: "Control",
          },
        ],
      },
    ],
  },
  {
    id: "addonTreatment",
    accessorKey: "addonTreatment",
    name: "Add-on Treatment",
  },
  {
    id: "treatmentClass",
    accessorKey: "treatmentClass",
    name: "Treatment Class",
  },
  {
    id: "typeOfTherapy",
    accessorKey: "typeOfTherapy",
    name: "Type of Therapy",
  },
];
