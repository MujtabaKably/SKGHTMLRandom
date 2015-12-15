/**
 * Created by Administrator on 12/15/2015.
 */
var GenderateRandoms = require("./RandomModule");
function GenerateHTML(Keystr,Type){
    var NewKeyStr = Keystr.replace(/-/g,"");
    var HTMLArray = [];
    for(var i = 0;i < NewKeyStr.length;i++){
        var HTMLNode = "<table><tr>";
        for(var j = 0;j < NewKeyStr.length;j++) {
            var RandomDivs = GenderateRandoms.RandomNums(35, 70, i + 1);
            HTMLNode += "<td>";
            var RNGesus = GenderateRandoms.RandomNums(0, RandomDivs[j], 1);
            if (j <= i) {
                for (var k = 0; k < RandomDivs[j]; k++) {
                    HTMLNode += "<div ";
                    if (k == RNGesus[0]) {
                        HTMLNode += "style='background-color: blue;color:white'>";
                        HTMLNode += NewKeyStr.charAt(j);
                    }
                    else if (GenderateRandoms.RandomNums(0, 1, 1)[0] == 1) {
                        HTMLNode += "style='background-color: red;'>";
                        HTMLNode += String.fromCharCode(GenderateRandoms.RandomNums(65, 90, 1)[0]);
                    }
                    else {
                        HTMLNode += "style='background-color: red;'>";
                        HTMLNode += String.fromCharCode(GenderateRandoms.RandomNums(48, 57, 1)[0]);
                    }
                    HTMLNode += "</div>";
                }
            }
            else{
                for (var k = 0; k < 7; k++){
                    HTMLNode += "<div ";
                    if (k == 3) {
                        HTMLNode += "style='background-color: blue;color:white'>";
                        HTMLNode += "?";
                    }
                    else {
                        HTMLNode += "style='background-color: red;'>";
                        HTMLNode += "?";
                    }
                    HTMLNode += "</div>";
                }
            }
            HTMLNode += "</td>";
        }
        HTMLNode += "</tr></table>";
        HTMLArray.push(HTMLNode);
    }
    return HTMLArray[5];
}
module.exports.HTML = GenerateHTML;