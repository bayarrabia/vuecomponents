<template>
  <q-page>
    <!-- Sayfa içeriği -->
    <ThePayment></ThePayment>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ThePayment from 'components/ThePayment.vue';

export default defineComponent({
  components: {
    ThePayment,
  },
});
</script>
