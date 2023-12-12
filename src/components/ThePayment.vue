<template>
  <div class="payment-container">
    <div class="card-info">
      <div class="card-label">Kart Bilgileri</div>
      <div class="card-field">
        <label for="cardHolder">Kart Üzerindeki Ad Soyad</label>
        <input type="text" id="cardHolder" v-model="cardHolder" />
      </div>
      <div class="card-field">
        <label for="cardNumber">Kart Numarası</label>
        <input type="text" id="cardNumber" v-model="cardNumber" @input="updateCardNumber" />
      </div>
      <div class="card-field">
        <label for="expiryDate">Son Kullanma Tarihi</label>
        <div class="flex">
          <input type="text" id="expiryMonth" v-model="expiryMonth" @input="updateExpiryDate" placeholder="Ay" />
          <input type="text" id="expiryYear" v-model="expiryYear" @input="updateExpiryDate" placeholder="Yıl" />
        </div>
      </div>
      <div class="card-field">
        <label for="cvv">CVV</label>
        <input type="text" id="cvv" v-model="cvv" @input="updateCvv" />
      </div>
    </div>
    <img src="https://www.hpstore.com.tr/theme/standart/images/KrediKart/CreditCardBG2.png" alt="Card Front" class="card-front" />
    <img src="https://www.hpstore.com.tr/theme/standart/images/KrediKart/CreditCardBackBG.png" alt="Card Back" class="card-back" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      cardHolder: '' as string,
      cardNumber: '' as string,
      expiryMonth: '' as string,
      expiryYear: '' as string,
      cvv: '' as string,
    };
  },
  methods: {
    updateCardNumber(): void {
      (this.$refs.cardFront as HTMLElement).innerText = this.cardNumber;
      (this.$refs.cardBack as HTMLElement).innerText = this.cvv;
    },
    updateExpiryDate(): void {
      const expiryDate = `${this.expiryMonth}/${this.expiryYear}`;
      (this.$refs.cardFront as HTMLElement).innerText = expiryDate;
    },
    updateCvv(): void {
      (this.$refs.cardBack as HTMLElement).innerText = this.cvv;
    },
  },
});
</script>

<style scoped>
.payment-container {
  display: flex;
}

.card-info {
  width: 300px;
  margin-right: 20px;
}

.card-label {
  font-weight: bold;
  margin-bottom: 10px;
}

.card-field {
  margin-bottom: 10px;
}

.card-field label {
  display: block;
  margin-bottom: 5px;
}

.card-field input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.flex {
  display: flex;
}

.card-front,
.card-back {
  width: 200px;
  height: 120px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-back {
  display: none;
}

.payment-container:hover .card-front {
  display: none;
}

.payment-container:hover .card-back {
  display: flex;
}

.card-front img,
.card-back img {
  width: 100%;
  height: 100%;
}
</style>
