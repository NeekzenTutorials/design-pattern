<template>
  <div class="language-selector">
    <select v-model="selectedLocale" @change="changeLanguage">
      <option value="en">
        <span class="flag-icon flag-icon-us"></span> English
      </option>
      <option value="fr">
        <span class="flag-icon flag-icon-fr"></span> Français
      </option>
    </select>
  </div>
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
