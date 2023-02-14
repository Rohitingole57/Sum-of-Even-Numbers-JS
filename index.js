var num = 7;
var bag = 0;
for (var i=1; i<=num; i++)
{
    if(i%2==0){
        bag = bag + i;
    }
}
console.log("sum of the even numbers is", bag);