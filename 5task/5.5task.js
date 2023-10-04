function getRandomIntInclusive(min, max) {
    min = Math.ceil(0);
    max = Math.floor(1000);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  let array =[];
  for(let i=0;i<101;i++)
  {
    process.stdout.write(getRandomIntInclusive(i)+",");
    array.push(getRandomIntInclusive(i));
  }
  array.sort((a,b)=>a-b);
  process.stdout.write("\nLargest is "+array[0]+"\nSmallest is "+array[99]);

  


  
  

    