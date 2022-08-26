var _list = new Array();
var itemmaker = new Array();
function mysubmit() {
    var form1 = document.getElementById('itemInput');
    let _inputval = form1.elements[0];
    var _items = _inputval.value
    var _itemstring = _items
    var _itemstring2 = _itemstring.replace(/, /gi, ",")
    var _list = _itemstring2.split(",");
    _list.forEach(mylogging);
    document.getElementById("out").innerHTML = itemmaker.join("<br>")



    
}

//function myPush(f){
//    itemmaker.push(f)
//}

function mylogging(_list) {
    var itemName1 = _list.replace(" ", "_");
    var itemName = itemName1.toLowerCase()
    itemmaker.push('event.create(\'' + itemName +'\').displayName(\'' + _list +'\');')
}

function copyFunction() {
var copier = document.getElementById("out").innerHTML.replace(/<br\s*[\/]?>/gi, "\n")
navigator.clipboard.writeText(copier)
}