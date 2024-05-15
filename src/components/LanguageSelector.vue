<template>
  <select v-model="selectedLocale" @change="changeLanguage">
    <option value="en">English</option>
    <option value="fr">Français</option>
  </select>
</template>

<script>
export default {
  name: 'LanguageSelector',
  data() {
    return {
      selectedLocale: this.$i18n.locale
    }
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.selectedLocale;
    }
  },
  watch: {
    '$i18n.locale'(newLocale) {
      this.selectedLocale = newLocale;
    }
  }
}
</script>

<style scoped>
.language-selector {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 999;
}

@media screen and (max-width: 768px) {
  .language-selector {
    top: 50px;
    right: 10px;
  }
}
</style>
