<template>
  <div class="language-selector">
    <select v-model="selectedLocale" @change="changeLanguage">
      <option value="en" class="flag-option en">English</option>
      <option value="fr" class="flag-option fr">Français</option>
    </select>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'LanguageSelector',
  data() {
    return {
      selectedLocale: this.$i18n.locale
    }
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.selectedLocale
      Cookies.set('locale', this.selectedLocale, { expires: 365 })
    }
  },
  watch: {
    '$i18n.locale'(newLocale) {
      this.selectedLocale = newLocale
    }
  }
}
</script>

<style lang="scss" scoped src="../css/components/language.scss"></style>
