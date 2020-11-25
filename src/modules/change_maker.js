
// amount_to_return === 80
// return_signature = hash
function makeChange(amount_to_return, coin_set, result = null) {
  if (result === null) {
    result = {};

    coin_set.forEach(coin => {
      result[coin] = 0;
    })
  }

  coin_set.forEach(coin => {
    if (amount_to_return >= coin) {
      result[coin] = getCoinAmount(amount_to_return, result[coin], coin);
      amount_to_return = getAmountRemaining(amount_to_return, result[coin], coin);
    }
  });

  if (amount_to_return > 0) {
    return makeChange(amount_to_return, coin_set, result)
  }

  return result
}

function getCoinAmount(amount_to_return, current_coin_count, coin_value) {
  while (amount_to_return >= coin_value) {
    current_coin_count += 1;
    amount_to_return -= coin_value;
  }

  return current_coin_count;
}

function getAmountRemaining(amount_to_return, coin_count, coin_value) {
  const amount_to_subtract = coin_value * coin_count;
  amount_to_return -= amount_to_subtract;

  return amount_to_return
}

module.exports = makeChange;
