<template>
  <div id="app">
    <LanguageSelector class="language-selector"></LanguageSelector>
    <router-view></router-view>
  </div>
</template>

<script>
import './css/global.scss';
import Home from './views/Home.vue'
import LanguageSelector from './components/LanguageSelector.vue'


export default {
  name: 'App',
  components: {
    Home,
    LanguageSelector
  }
}
</script>

<style lang="scss" scoped src="./css/global.scss">
</style>
