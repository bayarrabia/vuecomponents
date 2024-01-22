<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'PageMain',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: '/PageMain'
  },
  {
    title: 'Comp-2',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: '/page2'
  },
  {
    title: 'Comp-3',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: '/page3'
  },
  {
    title: 'Comp-4',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: '/page4'
  },
  {
    title: 'Comp-5',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: '/page5'
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
