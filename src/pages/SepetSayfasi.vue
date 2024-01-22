<template>
  <q-page>
    <!-- Sayfa içeriği -->
    <TheSepet ref="sepetComponent"></TheSepet>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheSepet from 'components/TheSepet.vue';

export default defineComponent({
  mounted() {
    // Sayfa yüklendiğinde sepeti göster
    this.showSepet();
  },
  methods: {
    showSepet() {
      // TheSepet.vue componentini çağır
      (this.$refs.sepetComponent as typeof TheSepet).showSepetIletisi();
    },
  },
  components: {
    TheSepet,
  },
});
</script>
