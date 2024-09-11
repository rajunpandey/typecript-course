enum EWeekend {  
    Saturday,  
    Sunday,
  }  
  console.log(EWeekend.Saturday)
  // object with as const
  const OWeekend = {
      Saturday: 0,
      Sunday: 1,
  } as const;
  console.log(OWeekend.Saturday);// enum