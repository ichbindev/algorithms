const mnemonics = {
  0: '0',
  1: '1',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}

function phoneNumberMnemonics(phoneNumber) {
  const results = [],
        found = new Array(phoneNumber.length).fill('');
  mnemonify(phoneNumber.toString(), found, 0, results);
  return results;
}

function mnemonify(number, current, index, results) {
  if (index === number.length) {
    const mnemonic = current.join('');
    results.push(mnemonic);
    return;
  }
  const digit = number[index];
  const letters = mnemonics[digit];
  for (const l of letters) {
    current[index] = l;
    mnemonify(number, current, index + 1, results);
  }
}

// Do not edit the line below.
exports.phoneNumberMnemonics = phoneNumberMnemonics;
