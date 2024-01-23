<template>
  <div class="registration-frame">
    <div class="registration-content">
      <div class="newsletter-section">
        <h1 class="newsletter-title">HP E-Bülten</h1>
        <p class="newsletter-description">
          Kişiselleştirilmiş teklifler, destek güncellemeleri ve etkinlik
          haberleriyle bana e-posta gönderebilir.
        </p>
      </div>
      <div class="input-section">
        <input v-model="name" type="text" placeholder="Adınız" />
        <input v-model="surname" type="text" placeholder="Soyadınız" />
        <input v-model="email" type="email" placeholder="E-mail Adresiniz" />
        <div class="checkbox-section">
          <input type="checkbox" id="acceptTerms" v-model="acceptTerms" />
          <label for="acceptTerms"
            >Kaydolarak, HP Gizlilik Bildirimi'nin şartlarını kabul etmiş
            olursunuz.</label
          >
        </div>
        <button>Şimdi Kayıt Ol</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      name: '' as string,
      surname: '' as string,
      email: '' as string,
      acceptTerms: false as boolean,
    };
  },
  methods: {
    register(): void {
      // Kayıt işlemleri burada yapılabilir
      console.log('Kayıt işlemi gerçekleşti.');
    },
  },
});
</script>

<style scoped>
.registration-frame {
  background-color: #f5f5f5;
  padding: 20px;
  max-width: 300px;
  margin: auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}

.registration-content {
  text-align: left;
}

.newsletter-section {
  margin-bottom: 20px;
  padding-top: 0px;
  margin-top: 0px;
}

.newsletter-title {
  font-size: 24px;
  font-weight: bold;
  color: black;
  padding-top: 0px;
  margin-top: 0px;
}

.newsletter-description {
  font-size: 14px;
  color: black;
  margin-top: 0px;
}

.input-section input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

.checkbox-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.checkbox-section input {
  margin-right: 5px;
}

button {
  width: 100%;
  padding: 15px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
}

button:disabled {
  background-color: #a0a0a0;
  cursor: not-allowed;
}
</style>
