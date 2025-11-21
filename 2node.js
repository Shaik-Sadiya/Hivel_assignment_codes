
const data = {
  "keys": { "n": 10, "k": 7 },
  "1": { "base": "6", "value": "13444211440455345511" },
  "2": { "base": "15", "value": "aed7015a346d635" },
  "3": { "base": "15", "value": "6aeeb69631c227c" },
  "4": { "base": "16", "value": "e1b5e05623d881f" },
  "5": { "base": "8", "value": "316034514573652620673" },
  "6": { "base": "3", "value": "2122212201122002221120200210011020220200" },
  "7": { "base": "3", "value": "20120221122211000100210021102001201112121" },
  "8": { "base": "6", "value": "20220554335330240002224253" },
  "9": { "base": "12", "value": "45153788322a1255483" },
  "10": { "base": "7", "value": "1101613130313526312514143" }
};


function decode(base, value) {
  return BigInt(parseInt(value, base));
}

let points = [];
for (let i = 1; i <= data.keys.k; i++) {
  const base = parseInt(data[i].base);
  const value = data[i].value;
  const y = decode(base, value);
  points.push({ x: BigInt(i), y });
}


function lagrangeConstantTerm(points) {
  let C = 0n;

  for (let i = 0; i < points.length; i++) {
    let xi = points[i].x;
    let yi = points[i].y;

    let numerator = 1n;
    let denominator = 1n;

    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;

      let xj = points[j].x;

      numerator *= -xj;          
      denominator *= (xi - xj);  
    }

   
    C += yi * (numerator / denominator);
  }

  return C;
}


const C = lagrangeConstantTerm(points);

console.log("Constant value C =", C.toString());
