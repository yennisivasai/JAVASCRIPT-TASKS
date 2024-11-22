var str=String(183324978);
var evensum  = 0;
var oddsum = 0;
for(i=0; i<str.length;i++){
    if(str[i]%2 == 0){
        console.log(str[i]);
        evensum+= Number(str[i])
    }
    else{
        console.log(str[i]);
        oddsum = Number(str[i])
    }
}
console.log(evensum,oddsum)