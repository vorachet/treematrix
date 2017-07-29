import * as $ from 'jquery';
import '../vendor/jquery.treetable.js'
import '../vendor/jquery.treetable.css'

function makeUID(userDefinedLength) {
  var length = userDefinedLength || 5;
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function isFunction(functionToCheck) {
 var getType = {};
 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

function render(treeModelInstance, colModel) {
    var instance = JSON.parse(JSON.stringify(treeModelInstance));
    delete instance.children;
    delete instance.isChild;
    delete instance.parentId;
    delete instance.childId;

    var html = treeModelInstance.isChild ?
                '<tr id="' + treeModelInstance.id + '" data-tt-id="' + treeModelInstance.id + '" data-json=\'' + JSON.stringify(instance) + '\' data-tt-parent-id="' + treeModelInstance.parentId + '">' :
                '<tr id="' + treeModelInstance.id + '" data-tt-id="' + treeModelInstance.id + '" data-json=\'' + JSON.stringify(instance) + '\' >';

    delete treeModelInstance.isChild;
    delete treeModelInstance.parentId;
    delete treeModelInstance.childId;

    html += '<td>' + treeModelInstance.label + '</td>';

    Object.keys(colModel).map((colKey) => {
        if (treeModelInstance.colsMap) {
            if (treeModelInstance.colsMap[colKey]) {
                html += '<td>' + treeModelInstance.colsMap[colKey] + '</td>';
            } else {
                html += '<td></td>';
            }
        } else {
                html += '<td></td>';
        }
    });
    html += '</tr>';

    if (treeModelInstance.children && Array.isArray(treeModelInstance.children) && treeModelInstance.children.length > 0) {
        const arrayOfChildTreeModel = treeModelInstance.children;
        for (var i = 0; i < arrayOfChildTreeModel.length; i++) {
          arrayOfChildTreeModel[i].isChild = true;
          arrayOfChildTreeModel[i].parentId = treeModelInstance.id;
          arrayOfChildTreeModel[i].childId = i;
          html += render(arrayOfChildTreeModel[i], colModel);
        }
    }

    return html
}


var treematrix = {

    build: function(loader, options) {

        const
            selector = loader.selector,
            caption = loader.caption,
            colModel = loader.cols,
            treeModel = loader.tree,
            clickEventFunc = loader.callback,
            targetDIV = $("#" + selector),
            uid = makeUID(10);

        targetDIV.append('<table id="' +  uid + '"></table>');

        const targetTable = $("#" + uid);
        targetTable.append('<caption>' + caption + '</caption>');

        let header = '<thead><tr><th></th>';

        Object.keys(colModel).map((colKey) => {
            header += '<th>' + colModel[colKey].label + '</th>';
        });

        header += '</tr></thead>';
        targetTable.append(header);

        let tableHTML = '<tbody>';
        for (let i = 0; i < treeModel.length; i++) {
            tableHTML += render(treeModel[i], colModel);
        }
        tableHTML += '</tbody>';
        targetTable.append(tableHTML);

        $("#" + uid).treetable({ expandable: true, initialState: "expanded" });
        $("#" + uid + " tbody").on("mousedown", "tr", function() {
            $(".selected").not(this).removeClass("selected");
            $(this).toggleClass("selected");
            if (isFunction(clickEventFunc)) {
                let selectedTree = JSON.parse(this.getAttribute("data-json"));
                selectedTree.colModel = colModel;
                clickEventFunc(selectedTree);
            }
        });
    }
}

window.treematrix = treematrix