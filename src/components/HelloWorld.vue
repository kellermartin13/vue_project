<template>
  <div>
    <form>
      <label>
        Amount Given
        <input name="amount_given" type="number" v-model="amount_given" />
      </label>
      <label>
        Amount Due
        <input name="amount_due" type="number" v-model="amount_due" />
      </label>
    </form>
    <div @click="returnChange">Return Change</div>

    <div v-if="shouldShowResult">
      Here's your change!

      <div v-for="coin in change" :key="coin.title">
        <div>{{coin.title}}: {{coin.amount}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { calculateAmountToReturn } from '../modules/change_maker';

const COINS = {
  '1': 'Pennies',
  '5': 'Nickels',
  '10': 'Dimes',
  '25': 'Quarters',
};

export default {
  name: 'HelloWorld',
  data() {
    return {
      amount_given: 0,
      amount_due: 0,
      change: [],
    }
  },
  computed: {
    shouldShowResult() {
      return this.change.length > 0
    }
  },
  methods: {
    returnChange() {
      this.change = [];

      const amount_given = parseInt(this.amount_given);
      const amount_due = parseInt(this.amount_due);

      const result = calculateAmountToReturn(amount_given, amount_due);

      for (const coin in result) {
        let change_hash = {
          title: COINS[coin.toString()],
          amount: result[coin]
        };

        this.change.push(change_hash)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
