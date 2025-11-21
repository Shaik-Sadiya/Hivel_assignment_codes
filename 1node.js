const input = {
  "keys": { "n": 4, "k": 3 },
  "1": { "base": "10", "value": "4" },
  "2": { "base": "2", "value": "111" },
  "3": { "base": "10", "value": "12" },
  "6": { "base": "4", "value": "213" }
};

const points = [];
for (const key of Object.keys(input)) {
    if (!isNaN(parseInt(key))) {
        const x = parseInt(key);
        const yBase = parseInt(input[key].base);
        const yValue = input[key].value;
        const y = parseInt(yValue, yBase);
        points.push({ x, y });
    }
}

function lagrangeConstantTerm(points) {
    let C = 0;
    const n = points.length;
    for (let i = 0; i < n; i++) {
        let term = points[i].y;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                term *= -points[j].x / (points[i].x - points[j].x);
            }
        }
        C += term;
    }
   
    return Math.round(C);
}

const C = lagrangeConstantTerm(points);
console.log("Constant value C:", C); 