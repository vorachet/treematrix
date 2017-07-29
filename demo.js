
var colModel1 = [
  {id: "req1", label: "Req 1"},
  {id: "req2", label: "Req 2"},
  {id: "req3", label: "Req 3"},
  {id: "req4", label: "Req 4"},
  {id: "req5", label: "Req 5"},
  {id: "req6", label: "Req 6"},
  {id: "req7", label: "Req 7"},
  {id: "req8", label: "Req 8"},
  {id: "req9", label: "Req 9"},
  {id: "req10", label: "Req 10"},
  {id: "req11", label: "Req 11"},
  {id: "req12", label: "Req 12"},
  {id: "req13", label: "Req 13"}
];

var treeModel1 = [
  {
    id: '1', label: "Block1", colsMap: {req1: "matched"}, children: [
      {
        id: '1.1', label: "Parts", children: [
          {
            id: '1.1.1', label: "Part1", colsMap: {req1: "matched"}, children: [
              { id: '1.1.1.1', label: "Part1.1", colsMap: {req2: "matched"}}
            ]
          },
          {
            id: '1.1.2', label: "Part2", colsMap: {req1: "matched"}
          },
          {
            id: '1.1.3', label: "Part3", colsMap: {req1: "matched"}
          }
        ]
      },
      {
        id: '1.2', label: "References", children: [
          {
            label: "Reference1", colsMap: {req1: "matched"}
          },
          {
            label: "Reference2", colsMap: {req1: "matched"}
          },
          {
            label: "Reference3", colsMap: {req1: "matched"}
          }
        ]
      },
      {
        id: '1.3', label: "Operations", children: [
          {
            id: '1.3.1', label: "Operation1", colsMap: {req1: "matched"}
          },
          {
            id: '1.3.2', label: "Operation2", colsMap: {req1: "matched"}
          },
          {
            id: '1.3.3', label: "Operation3", colsMap: {req1: "matched"}
          }
        ]
      },
      {
        id: '1.4', label: "Value", children: [
          {
            id: '1.4.1', label: "Value1", colsMap: {req1: "matched"}
          },
          {
            id: '1.4.2', label: "Value2", colsMap: {req1: "matched"}
          },
          {
            id: '1.4.3', label: "Value3", colsMap: {req1: "matched"}
          }
        ]
      },
    ]
  },
  {
    id: '2', label: "Comp2", colsMap: {req1: "matched"}, children: [
        {
          id: '2.1', label: "Comp2.1", colsMap: {req1: "matched"}
        }
      ]
  },
];


treematrix.build("RequirementsTraceability", "Requirements Traceability", colModel1, treeModel1);


var raciColModel = [
  {id: "Ann", label: "Ann"},
  {id: "Ben", label: "Ben"},
  {id: "Carlos", label: "Carlos"},
  {id: "Dina", label: "Dina"},
  {id: "Ed", label: "Ed"}
];

var raciTreeModel = [
  {
    id: '1', label: "Create charter",
    colsMap: {Ann: "A", Ben: "R", Carlos: "I", Dina: "I", Ed: "I"}
  },
  {
    id: '2', label: "Collect requirements",
    colsMap: {Ann: "I", Ben: "A", Carlos: "R", Dina: "C", Ed: "C"}
  },
  {
    id: '3', label: "Submit change request",
    colsMap: {Ann: "I", Ben: "A", Carlos: "R", Dina: "R", Ed: "C"}
  },
  {
    id: '4', label: "Develop test plan",
    colsMap: {Ann: "A", Ben: "C", Carlos: "I", Dina: "I", Ed: "R"}
  },
];

treematrix.build("RACI", "RACI (Responsible, Accountable, Consulted, and Informed)", raciColModel, raciTreeModel);


/*
treematrix.build(elementID, caption, colModel, treeModel, (selected) => {
  console.log(selected);
});
*/
