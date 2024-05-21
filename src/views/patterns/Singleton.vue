<template>
    <div class="singleton">

      <section class="header">
        <BackButton class="back-button"></BackButton>
        <h1 class="title"> Singleton </h1>
      </section>

      <section class="content">

        <div class="introduction" v-html="$t('singleton.introduction')"></div>
        <div class="context">
          <p v-html="$t('singleton.context.1')"></p>
          <p v-html="$t('singleton.context.2')"></p>
        </div>
        <div class="warning" v-html="$t('singleton.warning')"></div>

        <div class="advanced">
          <h2>{{ $t('singleton.advancedTitle') }}</h2>
          <div class="advanced-content">
            <p v-html="$t('singleton.advanced.1')"></p>
          </div>
        </div>

      </section>

    </div>
</template>

<script>
import BackButton from "../../components/BackButton.vue";

export default {
  name: 'Singleton',
  components: {
    BackButton
  }
}
</script>

<style lang="scss" scoped src="../../css/patterns/singleton.scss"></style>