
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
                '<tr data-tt-id="' + treeModelInstance.id + '" data-json=\'' + JSON.stringify(instance) + '\' data-tt-parent-id="' + treeModelInstance.parentId + '">' :
                '<tr data-tt-id="' + treeModelInstance.id + '" data-json=\'' + JSON.stringify(instance) + '\' >';

    delete treeModelInstance.isChild;
    delete treeModelInstance.parentId;
    delete treeModelInstance.childId;

    html += '<td>' + treeModelInstance.label + '</td>';
    for (var j = 0; j < colModel.length; j++) {

        if (treeModelInstance.colsMap) {
            if (treeModelInstance.colsMap[colModel[j].id]) {
                html += '<td>' + treeModelInstance.colsMap[colModel[j].id] + '</td>';
            } else {
                html += '<td></td>';
            }
        } else {
                html += '<td></td>';
        }
    }
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

    build: function(tableElementID, caption, colModel, treeModel, clickEventFunc) {
        var targetEL = $("#" + tableElementID);
        const uid = makeUID(10);
        targetEL.append('<table id="' +  uid + '"></table>');

        var targetTableEL = $("#" + uid);
        targetTableEL.append('<caption>' + caption + '</caption>');
        var header = '<thead><tr><th>' + caption + '</th>';

        for (var i = 0; i < colModel.length; i++) {
            header += '<th>' + colModel[i].label + '</th>';
        }
        header += '</tr></thead>';
        targetTableEL.append(header);

        var tableHTML = '<tbody>';
        for (var i = 0; i < treeModel.length; i++) {
            const treeModelInstance = treeModel[i]
            tableHTML += render(treeModelInstance, colModel);
        }
        tableHTML += '</tbody>';
        targetTableEL.append(tableHTML);

        $("#" + uid).treetable({ expandable: true, initialState: "expanded" });
        $("#" + uid + " tbody").on("mousedown", "tr", function() {
            $(".selected").not(this).removeClass("selected");
            $(this).toggleClass("selected");

            if (isFunction(clickEventFunc)) {
                clickEventFunc(JSON.parse(this.getAttribute("data-json")));
            }
        });
    }
}

window.treematrix = treematrix