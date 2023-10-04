let intArray =[5,7,32,31,8];
let douArray =[1.24,-13.55,67.44];
let strinArray =["Helsinki","Lissabon","New York","Shanghai"];
process.stdout.write("\nThe value in the index number 3 is: "+strinArray[3]);
process.stdout.write("\nThe fourth item in the int array is: "+intArray[3]);
process.stdout.write("\nIn the double array there are "+douArray.length+" items");
for(let i = 0; i< intArray.length; i++)
{
    process.stdout.write("\n"+intArray[i].toString());

}
for(let m= 0; m< douArray.length; m++)
{
    process.stdout.write("\n"+douArray[m].toString());

}
for(let n= 0; n< strinArray.length;n++)
{
    process.stdout.write("\n"+strinArray[n].toString());
}

