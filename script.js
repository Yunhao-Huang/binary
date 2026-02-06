function convertInteger() {
  const num = Number(document.getElementById("intInput").value);
  const bits = Number(document.getElementById("bitInput").value);
  const output = document.getElementById("intResult");

  if (!Number.isInteger(num) || !Number.isInteger(bits) || bits <= 0) {
    output.textContent = "Please enter a valid integer and bit width.";
    return;
  }

  const max = 2 ** bits - 1;

  if (num < 0 || num > max) {
    output.textContent = `Overflow: max value for ${bits} bits is ${max}`;
    return;
  }

  output.textContent =
    `Decimal: ${num}
Binary (${bits} bits): ${num.toString(2).padStart(bits, "0")}`;
}

function convertFloat() {
  const num = Number(document.getElementById("floatInput").value);
  const output = document.getElementById("floatResult");

  if (Number.isNaN(num)) {
    output.textContent = "Please enter a valid real number.";
    return;
  }

  const sign = num < 0 ? 1 : 0;

  output.textContent =
`Input: ${num}
Sign bit: ${sign}
Exponent: (conceptual)
Mantissa: (conceptual)

This demo illustrates the structure of floating-point numbers,
not the full IEEE-754 encoding.`;
}
