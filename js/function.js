function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}



function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" "); // seperate words by space
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

function iName(_name) {
    var finalName = _name;
    var names = _name.split(" "); // seperate words by space
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}


// Function to remove '<'and '>' tag from script tag
var charEscape = function(_html) {
    var newHTML = _html;
    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");
    return newHTML;
};


//   Function to get user interaction
$(document).click(function(loc) {
   var x = loc.pageX;
   var y = loc.pageY;
   logClicks(x, y);
});
