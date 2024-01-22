<template>
  <q-page>
    <div class="container">

      <q-form class="custom-form">
        <q-card>
          <div class="img-container">
            <img src="https://www.hpstore.com.tr/Data/EditorFiles/tasarim/hp-logo-black.svg">
          </div>
          <q-card-section>

            <div class="form-1">Üye Kayıt</div>
          </q-card-section>
          <q-card-section>
            <div class="formheader">
              <q-icon name="account_box" />
              <p>Üyelik Bilgileri</p>
            </div>
          </q-card-section>

          <q-card-section>
            <q-input
              v-model="user.name"
              label="Ad"
              outlined
              dense
            />
          </q-card-section>
          <q-card-section>
            <q-input
              v-model="user.surname"
              label="Soyad"
              type="password"
              outlined
              dense
            />
          </q-card-section>

          <q-card-section>
            <q-input
              v-model="user.email"
              label="E-Mail"
              outlined
              dense
            />
          </q-card-section>

          <q-card-section>
            <div class="password-header">
              <q-icon name="vpn_key" /> 
              <p>Şifre Bilgileri</p>
            </div>
          </q-card-section>

          <q-card-section>
            <q-input
              v-model="user.password"
              label="Şifre"
              type="password"
              outlined
              dense
            />
          </q-card-section>
          <q-card-section>
            <q-input
              v-model="user.passwordd"
              label="Şifre Tekrar"
              type="password"
              outlined
              dense
            />
          </q-card-section>

          <q-card-section>
            <q-checkbox v-model="user.checkbox1" label="Üyelik sözleşmesini Okudum, Kabul Ediyorum." />
          </q-card-section>

          <q-card-section>
            <q-checkbox v-model="user.checkbox2" label="Üyelik Formu Aydınlatma Metni ve Yurtdışına Veri Aktarımı Açık Rıza Metnini okudum, rıza gösteriyorum." />
          </q-card-section>

          <q-card-section>
            <q-btn type="submit" color="primary" label="Kaydet" />
          </q-card-section>
        </q-card>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {
    const user = {
      name: '',
      surname: '',
      email: '',
      password: '',
      passwordd: '',
      checkbox1: false,
      checkbox2: false,
    };

    return {
      user,
    };
  },
};
</script>

<style scoped>

.form-1{
  text-align: center;
  font-size: 26px;
}
.formheader{
 text-align: center; 
 font-size: 15px;
}
.password-header{
  text-align: center;
  font-size: 15px;
}
.container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
}

.img-container {
  max-width: 70px;
  height: 70px;
  margin-left: 220px; 
}

.custom-form {
  max-width: 500px; 
}

.form-header {
  display: flex;
  align-items: center;
}

.form-header q-icon {
  margin-right: 8px; 
}
</style>
