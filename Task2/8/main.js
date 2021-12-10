function extractCurrencyValue(str){
  return str.slice(1).toString()
}

alert( extractCurrencyValue('$120') === '120'); // true