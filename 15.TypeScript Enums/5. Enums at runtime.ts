enum En {
    x,
    y,
    z,
  }
   
  function func(obj: { y: number }) {
    return obj.y;
  }
  console.log(func(En));
  console.log(typeof En);