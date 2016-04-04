 function add(str){
	var strs=str.split('');
	var sum=0;
	for(var i in strs){
		console.info(Number(strs[i]));
		if(Number(strs[i])%2==0){
			sum=sum+Number(strs[i]);
		}
	}
	return sum;
}
 
 console.log(add('14324sdfsdf454'));