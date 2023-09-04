//AMB STRING  //9.58h al rellotge del video

document.addEventListener("DOMContentLoaded", function () {
  let res = "";
  const whiteBox = document.querySelector("footer div");

  document.addEventListener("keydown", function (e) {
    res += e.key; // o bé ::: res.push(e.key)
    if (res.length > 42) {
      res = res.substring(1); //Quita el primer caracter siempre que sea >42
    } else {
      whiteBox.innerText = res(1);
      // o bé ::: res = res.shift()
    }
  });
});

// AMB ARRAY

let res = [];
document.addEventListener("keydown", function (e) {
  res.push(e.key); // o bé ::: res.push(e.key)
  if (res.length > 42) {
  } else {
    res = res.substring(1); //Quita el primer caracter siempre que sea >42
    // o bé ::: res = res.shift()
  }
  document.querySelector("footer div").innerText = res; //
});
