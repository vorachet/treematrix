# Tree Matrix - The simplest way to make HTML Tree Matrix

## Implementation

 1. Wrapped Ludo's jQuery treetable (https://github.com/ludo/jquery-treetable) with a single library method __treematrix.build(matrixModel)__
 2. Easy to compose a tree matrix with an extensible JSON model structure designed by this project
 3. Built with webpack, so just add the following scripts in your HTML document
 4. Tree node selection callback is provided 

```
 <script src="https://unpkg.com/jquery@3.2.1/dist/jquery.min.js"></script>
 <script src="https://unpkg.com/treematrix@latest/dist/treematrix.js"></script>
```

## Demo

http://htmlpreview.github.io/?https://github.com/vorachet/treematrix/blob/master/demo/indexCDN.html

or 

demo/index.html

## Dependency

 1. jQuery ^3.2.1

## Example

### Output

![Logo](https://github.com/vorachet/treematrix/raw/master/demo.gif)

### HTML

```
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title>treematrix</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body>
    <h1>TreeMatrix</h1>
    <h2>Demo</h2>
    <p>Github <a href="https://github.com/vorachet/treematrix">https://github.com/vorachet/treematrix</a></p>
    
    <div id="demo1"></div>
    <div id="demo2"></div>
    
    <script src="https://unpkg.com/jquery@3.2.1/dist/jquery.min.js"></script>
    <script src="https://unpkg.com/treematrix@latest/dist/treematrix.js"></script>
    <script src="models.js"></script>
    <script src="builders.js"></script>
  </body>
</html>

```

### models.js

```
const satisfiedByIcon = '<i class="fa fa-level-up" aria-hidden="true"></i>';
const userIcon = '<i class="fa fa-user-circle" aria-hidden="true"></i>';
const taskIcon = '<i class="fa fa-tasks" aria-hidden="true"></i>';

const demo1Model = {
  caption: "Table 1. Requirements Traceability",
  cols: {
    b1: {label: "Block 1"},
    b2: {label: "Block 2"},
    b3: {label: "Block 3"},
    b4: {label: "Block 4"},
    b5: {label: "Block 5"},
    b6: {label: "Block 6"},
    b7: {label: "Block 7"},
    b8: {label: "Block 8"}
  },
  tree: [
    { id: 1, label: "Requirement1", colsMap: {b1: satisfiedByIcon}, children: [
        { id: '1.1', label: "Requirement1.1", children: 
          [
            {id: '1.1.1', label: "Requirement1.1.1", colsMap: {b2: satisfiedByIcon}},
            {id: '1.1.2', label: "Requirement1.1.2", colsMap: {b3: satisfiedByIcon}},
            {id: '1.1.3', label: "Requirement1.1.3", colsMap: {b4: satisfiedByIcon}}
          ]
        },
        { id: '1.2', label: "Requirement1.2", children:
          [
            {id: '1.2.1', label: "Requirement1.2.1", colsMap: {b5: satisfiedByIcon}},
            {id: '1.2.2', label: "Requirement1.2.2", colsMap: {b5: satisfiedByIcon}}
          ]
        }
      ]
    },
    { id: '2', label: "Requirement2", children: 
        [
          { id: '2.1', label: "Requirement2.1", colsMap: {b7: satisfiedByIcon}}
        ]
    },
  ]
};

const demo2Model = {
  caption: "Table 2. RACI (Responsible, Accountable, Consulted, and Informed)",
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

```

### builders.js

```

treematrix.build("demo1", demo1Model, (selectedTree) => {
	console.log(selectedTree);
});

treematrix.build("demo2", demo2Model, (selectedTree) => {
	console.log(selectedTree);
});

```
