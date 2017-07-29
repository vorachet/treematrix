const satisfiedByIcon = '<i class="fa fa-level-up" aria-hidden="true"></i>';
const userIcon = '<i class="fa fa-user-circle" aria-hidden="true"></i>';
const taskIcon = '<i class="fa fa-tasks" aria-hidden="true"></i>';
var reqTraceModel = {
  selector: "demo1",
  caption: "Table 1. Requirements Traceability",
  callback: function(selectedTree) {
    console.log(selectedTree);
  },
  cols: {
    b1: {label: "Block 1"},
    b2: {label: "Block 2"},
    b3: {label: "Block 3"},
    b4: {label: "Block 4"},
    b5: {label: "Block 5"},
    b6: {label: "Block 6"},
    b7: {label: "Block 7"},
    b8: {label: "Block 8"},
    b9: {label: "Block 9"},
    b10: {label: "Block 10"},
    b11: {label: "Block 11"},
    b12: {label: "Block 12"},
    b13: {label: "Block 13"},
  },
  tree: [
    {
      id: 1, label: "Requirement1", colsMap: {b1: satisfiedByIcon}, children: [
        {
          id: '1.1', label: "Requirement1.1", children: [
            {
              id: '1.1.1', label: "Requirement1.1.1", colsMap: {b2: satisfiedByIcon}
            },
            {
              id: '1.1.2', label: "Requirement1.1.2", colsMap: {b3: satisfiedByIcon}
            },
            {
              id: '1.1.3', label: "Requirement1.1.3", colsMap: {b4: satisfiedByIcon}
            }
          ]
        },
        {
          id: '1.2', label: "Requirement1.2", children: [
            {
              id: '1.2.1', label: "Requirement1.2.1", colsMap: {b5: satisfiedByIcon}
            },
            {
              id: '1.2.2', label: "Requirement1.2.2", colsMap: {b5: satisfiedByIcon}
            }
          ]
        }
      ]
    },
    {
      id: '2', label: "Requirement2", children: [
          {
            id: '2.1', label: "Requirement2.1", colsMap: {b7: satisfiedByIcon}
          }
        ]
    },
  ]
};

treematrix.build(reqTraceModel);

var raciModel = {
  selector: "demo2",
  caption: "Table 2. RACI (Responsible, Accountable, Consulted, and Informed)",
  callback: function(selectedTree) {
    console.log(selectedTree);
  },
  cols: {
    Ann: {label: userIcon + " Ann"},
    Ben: {label: userIcon + " Ben"},
    Carlos: {label: userIcon + " Carlos"},
    Dina: {label: userIcon + " Dina"},
    Ed: {label: userIcon + " Ed"}
  },
  tree: [
    { id: 1, label: taskIcon + " Create charter",
      colsMap: {Ann: "A", Ben: "R", Carlos: "I", Dina: "I", Ed: "I"}
    },
    { id: '2', label: taskIcon + " Collect requirements",
      colsMap: {Ann: "I", Ben: "A", Carlos: "R", Dina: "C", Ed: "C"}
    },
    { id: '3', label: taskIcon + " Submit change request",
      colsMap: {Ann: "I", Ben: "A", Carlos: "R", Dina: "R", Ed: "C"}
    },
    { id: '4', label: taskIcon + " Develop test plan",
      colsMap: {Ann: "A", Ben: "C", Carlos: "I", Dina: "I", Ed: "R"}
    }
  ]
}

treematrix.build(raciModel);