<template>
  <q-page>
    <q-page-sticky position="top" :offset="0" >
      <q-header
        elevated
        style="background-color: white; color: black; width: 100vw; height: 9vh"
      >
        <q-toolbar>
          <q-avatar size="50px">
            <img
              src="https://www.hpstore.com.tr/Data/EditorFiles/tasarim/hp-logo-black.svg"
              alt="HP Logo"
              style="width: 70px; height: 50px"
            />
          </q-avatar>

          <q-input
            dense
            placeholder="Ara..."
            v-model="searchQuery"
            style="border: none; margin-left: 2vw; width: 25vw"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>

          <div
            class="q-gutter-xs q-ml-auto q-mr-none"
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              width: 11vw;
            "
          >
            <q-btn flat dense round color="black" icon="headset" size="17px" />
            <q-btn
              flat
              dense
              round
              icon="account_circle"
              size="17px"
            >
              <q-popup-proxy>
                <div style="display: flex; flex-direction: column; width: 200px; height: 200px;">
                  <q-banner style="text-align: center;">
                    HOŞGELDİNİZ
                  
                  </q-banner>

                  <q-btn style="background-color: blue;"
                    flat
                    text-color="white"
                    color="primary"
                    label="Üye GİRİŞİ"
                    class="popup-btn"
                  />
                  <q-banner style="text-align: center;">
                    Üye Değil misiniz?
                  
                  </q-banner>
                  <q-btn
                    flat
                    text-color="black"
                    color="positive"
                    label="Üye Ol"
                    class="popup-btn"
                  />
                </div>
              </q-popup-proxy>
            </q-btn>





            



            



            <q-btn
              flat
              dense
              round
              color="black"
              icon="shopping_cart"
              size="17px"
            />
          </div>
        </q-toolbar>
      </q-header>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const searchQuery = ref('');

    return {
      searchQuery,
    };
  },
};
</script>
