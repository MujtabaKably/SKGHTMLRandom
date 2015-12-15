/**
 * Created by Administrator on 12/15/2015.
 */
function GenderateRandoms(high,low,keystr){
    var ArrayRandom = [];
    for(var i=0;i<keystr;i++){
        ArrayRandom.push(Math.round(Math.random() * (high - low) + low));
    }
    return ArrayRandom;
}
module.exports.RandomNums = GenderateRandoms;