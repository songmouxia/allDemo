 function getRandom(start,end){
 var arr=[];
for(var i=0;i<20;i++)
{var tep=Math.random()*end+start;
if(tep in arr)
{i=i-1;}else{
arr.push(tep);}}  
 return arr;
}

console.log(getRandom(1,100));