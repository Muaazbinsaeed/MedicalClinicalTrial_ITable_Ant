const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
};


export const columns = [
    {
        title: '_NCT|NCT',
        dataIndex: 'nct',
        key: 5,
        width: 200,
        sorter: (a, b) => a.nct - b.nct,
        fixed: 'left',
    },
    {
        title: 'PMID',
        dataIndex: 'PMID',
        key: 6,
        width: 200,
        sorter: (a, b) => a.PMID - b.PMID,
        fixed: 'left',
    },
    {
        title: 'TRIAL NAME',
        dataIndex: 'TRIAL NAME',
        key: 7,
        width: 200
    },
    {
        title: 'TREATMENT ARM(S)',
        dataIndex: 'TREATMENT ARM(S)',
        key: 8,
        width: 200,
    },
    {
        title: 'CONTROL ARM',
        dataIndex: 'CONTROL ARM',
        key: 9,
        width: 200,
    },
    {
        title: 'CLASS OF AGENT IN TREATMENT ARM 1',
        dataIndex: 'qw4hd',
        key: 10,
        width: 200,
        filters: [
            {
                text: 'Chemotherapy',
                value: 'Chemotherapy',
            },
            {
                text: 'ARPI',
                value: 'ARPI',
            },
        ],
        onFilter: (value, record) => record.qw4hd.indexOf(value) === 0,
    },
    {
        title: 'TREATMENT ARM 1 REGIMEN',
        dataIndex: 'TREATMENT ARM 1 REGIMEN',
        key: 11,
        width: 200,
        render: text => truncateText(text, 10),
    },
    {
        title: 'TOTAL PARTICIPANTS - N',
        dataIndex: 'TOTAL PARTICIPANTS - N',
        key: 12,
        width: 200,
    },
    {
        title: 'TREATMENT ARM - N',
        dataIndex: 'TREATMENT ARM - N',
        key: 13,
        width: 200,
    },
    {
        title: 'CONTROL ARM - N',
        dataIndex: 'CONTROL ARM - N',
        key: 14,
        width: 200,
    },
    {
        title: 'MEDIAN FOLLOW-UP DURATION (MO)',
        dataIndex: 'MEDIAN FOLLOW-UP DURATION (MO)',
        key: 15,
        width: 200,
    },
    {
        title: 'MEDIAN ON-TREATMENT DURATION (MO)',
        key: 16,
        width: 200,
        children: [
            {
                title: 'TREATMENT',
                dataIndex: 'TREATMENT1',
                key: 'TREATMENT',
                width: 200,
            },
            {
                title: 'CONTROL',
                dataIndex: 'CONTROL1',
                key: 'CONTROL',
                width: 200,
            }
        ]
    },
    {
        title: 'QUALITY OF LIFE REPORTED',
        dataIndex: 'QUALITY OF LIFE REPORTED',
        key: 17,
        width: 200,
    },
    {
        title: 'QUALITY OF LIFE SCALE',
        dataIndex: 'QUALITY OF LIFE SCALE',
        key: 18,
        width: 200,
    },
    {
        title: 'REPORTING BY PROGNOSTIC GROUPS - Y/N',
        key: 19,
        width: 200,
        children: [
            {
                title: 'SYNCHRONOUS',
                dataIndex: 'SYNCHRONOUS',
                key: 'SYNCHRONOUS',
                width: 200,
            },
            {
                title: 'METACHRONOUS',
                dataIndex: 'METACHRONOUS',
                key: 'METACHRONOUS',
                width: 200,
            },
            {
                title: 'HIGH VOLUME',
                dataIndex: 'HIGH VOLUME',
                key: 'HIGH VOLUME',
                width: 200,
            },
            {
                title: 'LOW VOLUME',
                dataIndex: 'LOW VOLUME',
                key: 'LOW VOLUME',
                width: 200,
            }
        ]
    },
    {
        title: 'MODE OF METASTASES - N (%)',
        key: 20,
        width: 200,
        children: [
            {
                title: 'SYNCHRONOUS',
                key: 'SYNCHRONOUS',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT2',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL2',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'METACHRONOUS',
                key: 'METACHRONOUS',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT3',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL3',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            }
        ]
    },
    {
        title: 'VOLUME OF DISEASE - N (%)',
        key: 21,
        width: 200,
        children: [
            {
                title: 'HIGH',
                key: 'HIGH',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT4',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL4',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'LOW',
                key: 'LOW',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT5',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL5',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            }
        ]
    },
    {
        title: 'DOCETAXEL ADMINISTRATION - N (%)',
        key: 22,
        width: 200,
        children: [
            {
                title: 'TREATMENT',
                dataIndex: 'TREATMENT6',
                key: 'TREATMENT',
                width: 200,
            },
            {
                title: 'CONTROL',
                dataIndex: 'CONTROL6',
                key: 'CONTROL',
                width: 200,
            }
        ]
    },
    {
        title: 'MEDIAN AGE (YEARS)',
        key: 23,
        width: 200,
        children: [
            {
                title: 'TREATMENT',
                dataIndex: 'TREATMENT7',
                key: 'TREATMENT',
                width: 200,
            },
            {
                title: 'CONTROL',
                dataIndex: 'CONTROL7',
                key: 'CONTROL',
                width: 200,
            }
        ]
    },
    {
        title: 'RACE - N (%)',
        key: 24,
        width: 200,
        children: [
            {
                title: 'WHITE',
                key: 'WHITE',
                width: 200,
            },
            {
                title: 'BLACK OR AFRICAN AMERICAN',
                key: 'BLACK OR AFRICAN AMERICAN',
                width: 200,
            },
            {
                title: 'ASIAN',
                key: 'ASIAN',
                width: 200,
            },
            {
                title: 'NAT. HAWAIIAN OR PAC. ISLANDER',
                key: 'NAT. HAWAIIAN OR PAC. ISLANDER',
                width: 200,
            },
            {
                title: 'AMER. INDIAN OR ALASKA NAT.',
                key: 'AMER. INDIAN OR ALASKA NAT.',
                width: 200,
            },
            {
                title: 'OTHER',
                key: 'OTHER',
                width: 200,
            },
            {
                title: 'UNKNOWN',
                key: 'UNKNOWN',
                width: 200,
            }
        ]
    },


    {
        title: 'REGION - N (%)',
        key: 25,
        width: 200,
        children: [
            {
                title: 'NORTH AMERICA',
                key: 'NORTH AMERICA',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'SOUTH AMERICA',
                key: 'SOUTH AMERICA',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'EUROPE',
                key: 'EUROPE',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'AFRICA',
                key: 'AFRICA',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'ASIA',
                key: 'ASIA',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'OCEANIA',
                key: 'OCEANIA',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            }
        ]
    },

    {
        title: 'PS - N (%)',
        key: 26,
        width: 200,
        children: [
            {
                title: '0',
                key: '0',
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: '1-2',
                key: '1-2',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            }
        ]
    }
    ,


    {
        title: 'GLEASON SCORE - N (%)',
        key: 270,
        width: 200,
        children: [
            {
                title: '≤ 7',
                key: '≤ 7',
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: '≥ 8',
                key: '≥ 8',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            }
        ]
    },
    {
        title: 'METASTASES - N (%)',
        key: 27,
        width: 200,
        children: [
            {
                title: 'LIVER',
                key: 'LIVER',
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'LUNGS',
                key: 'LUNGS',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'BONE',
                key: 'BONE',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'NODAL',
                key: 'NODAL',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            }
        ]
    },

    {
        title: 'PREVIOUS LOCAL THERAPY - N (%)',
        key: 28,
        width: 200,
        children: [
            {
                title: 'PROSTATECTOMY',
                key: 'PROSTATECTOMY',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'ORCHIECTOMY',
                key: 'ORCHIECTOMY',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'RADIOTHERAPY',
                key: 'RADIOTHERAPY',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            }
        ]
    },
    {
        title: 'PRIMARY ENDPOINT(S)',
        dataIndex: 'PRIMARY ENDPOINT(S)',
        key: 29,
        width: 200,
    },
    {
        title: 'SECONDARY ENDPOINT(S)',
        dataIndex: 'SECONDARY ENDPOINT(S)',
        key: 30,
        width: 200,
    },
    {
        title: 'ORR - N (%)',
        key: 31,
        width: 200,
        children: [
            {
                title: 'TREATMENT',
                key: 'TREATMENT',
                children: [
                    {
                        title: 'CR',
                        dataIndex: 'CR',
                        key: 'CR',
                        width: 200,
                    },
                    {
                        title: 'OVERALL',
                        dataIndex: 'OVERALL',
                        key: 'OVERALL',
                        width: 200,
                    },
                    {
                        title: 'PD',
                        dataIndex: 'PD',
                        key: 'PD',
                        width: 200,
                    },
                    {
                        title: 'SD',
                        dataIndex: 'SD',
                        key: 'SD',
                        width: 200,
                    }
                ]
            },
            {
                title: 'CONTROL',
                key: 'CONTROL',
                width: 200,
                children: [
                    {
                        title: 'CR',
                        dataIndex: 'CR',
                        key: 'CR',
                        width: 200,
                    },
                    {
                        title: 'OVERALL',
                        dataIndex: 'OVERALL',
                        key: 'OVERALL',
                        width: 200,
                    },
                    {
                        title: 'PD',
                        dataIndex: 'PD',
                        key: 'PD',
                        width: 200,
                    },
                    {
                        title: 'SD',
                        dataIndex: 'SD',
                        key: 'SD',
                        width: 200,
                    }
                ]
            }
        ]
    },

    {
        title: 'ADVERSE EVENTS - N (%)',
        key: 32,
        width: 200,
        children: [
            {
                title: 'ALL-CAUSE GRADE 3 OR HIGHER',
                key: 'ALL-CAUSE GRADE 3 OR HIGHER',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'TREATMENT-RELATED GRADE 3 OR HIGHER',
                key: 'TREATMENT-RELATED GRADE 3 OR HIGHER',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'TREATMENT-RELATED GRADE 5',
                key: 'TREATMENT-RELATED GRADE 5',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            }
        ]
    },
    {
        title: 'NO. OF DEATHS - N',
        key: 33,
        width: 200,
        children: [
            {
                title: 'TREATMENT',
                dataIndex: 'TREATMENT',
                key: 'TREATMENT',
                width: 200,
            },
            {
                title: 'CONTROL',
                dataIndex: 'CONTROL',
                key: 'CONTROL',
                width: 200,
            }
        ]
    },
    {
        title: 'TTPSA (MO)',
        key: 980,
        width: 200,
        children: [
            {
                title: 'TREATMENT',
                dataIndex: 'TREATMENT',
                key: 'TREATMENT',
                width: 200,
            },
            {
                title: 'CONTROL',
                dataIndex: 'CONTROL',
                key: 'CONTROL',
                width: 200,
            }
        ]
    },
    {
        title: 'OS RATE (%)',
        key: 982,
        width: 200,
        children: [
            {
                title: 'SYNCHRONOUS',
                key: 'SYNCHRONOUS',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'METACHRONOUS',
                key: 'METACHRONOUS',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'HIGH VOLUME',
                key: 'HIGH VOLUME',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'LOW VOLUME',
                key: 'LOW VOLUME',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,

                    }
                ]
            }
        ]
    },
    {
        title: 'MEDIAN OS (MO)',
        key: 34,
        width: 200,
        children: [
            {
                title: 'HIGH VOLUME',
                key: 'HIGH VOLUME',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'LOW VOLUME',
                key: 'LOW VOLUME',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            }
        ]
    },
    {
        title: 'PFS RATE (%)',
        key: 35,
        width: 200,
        children: [
            {
                title: 'OVERALL',
                key: 'OVERALL',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            }
        ]
    },
    {
        title: 'MEDIAN PFS (MO)',
        key: 36,
        width: 200,
        children: [
            {
                title: 'HIGH VOLUME',
                key: 'HIGH VOLUME',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            },
            {
                title: 'LOW VOLUME',
                key: 'LOW VOLUME',
                width: 200,
                children: [
                    {
                        title: 'TREATMENT',
                        dataIndex: 'TREATMENT',
                        key: 'TREATMENT',
                        width: 200,
                    },
                    {
                        title: 'CONTROL',
                        dataIndex: 'CONTROL',
                        key: 'CONTROL',
                        width: 200,
                    }
                ]
            }
        ]
    },
    {
        title: 'ADD-ON TREATMENT',
        key: 37,
        width: 200,
        dataIndex: 'ADD-ON TREATMENT'
    },
    {
        title: 'TREATMENT CLASS',
        key: 38,
        width: 200,
        dataIndex: 'TREATMENT CLASS'
    },
    {
        title: 'TYPE OF THERAPY',
        key: 39,
        width: 200,
        dataIndex: 'Type of Therapy'
    },
    {
        title: 'Original/Follow Up',
        key: 40,
        width: 200,
        dataIndex: 'Original/Follow Up'
    }
];