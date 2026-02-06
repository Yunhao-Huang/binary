function convertInteger() {
  const num = parseInt(document.getElementById("intInput").value);
  const bits = parseInt(document.getElementById("bitInput").value);
  const output = document.getElementById("intResult");

  if (isNaN(num) || isNaN(bits) || bits <= 0) {
    output.textContent = "Please enter a valid number and bit width.";
    return;
  }

  const max = Math.pow(2, bits) - 1;

  if (num < 0 || num > max) {
    output.textContent =
      `Overflow!\nMax value for ${bits} bits is ${max}.`;
    return;
  }

  const binary = num.toString(2).padStart(bits, "0");
  output.textContent =
    `Decimal: ${num}\nBits: ${bits}\nBinary: ${binary}`;
}

function convertFloat() {
  const num = parseFloat(document.getElementById("floatInput").value);
  const output = document.getElementById("floatResult");

  if (isNaN(num)) {
    output.textContent = "Please enter a valid real number.";
    return;
  }

  const sign = num < 0 ? 1 : 0;
  let abs = Math.abs(num);

  let exponent = 0;
  while (abs >= 2) {
    abs /= 2;
    exponent++;
  }
  while (abs < 1 && abs !== 0) {
    abs *= 2;
    exponent--;
  }

  const bias = 7;
  const biasedExponent = exponent + bias;

  let mantissa = abs - 1;
  let mantissaBits = "";
  for (let i = 0; i < 6; i++) {
    mantissa *= 2;
    if (mantissa >= 1) {
      mantissaBits += "1";
      mantissa -= 1;
    } else {
      mantissaBits += "0";
    }
  }

  output.textContent =
`Input: ${num}
Sign: ${sign}
Exponent (biased): ${biasedExponent} (bias = ${bias})
Mantissa: ${mantissaBits}

Note: This is a simplified educational model.`;
}
