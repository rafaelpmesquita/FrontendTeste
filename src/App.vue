<template>
  <v-app>
    <component :is="currentLayout"></component>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BaseLayout from './layout/BaseLayout.vue';

@Component({
  components: {
    'baseLayout': BaseLayout,
  }
})
export default class App extends Vue {
  get currentLayout() {
    const route = this.$route;
    if (route.meta && route.meta.layout) {
      return route.meta.layout;
    }
    return 'baseLayout';
  }
}
</script>
