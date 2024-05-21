<template>
    <div class="singleton">

      <section class="header">
        <BackButton class="back-button"></BackButton>
        <h1 class="title"> Singleton </h1>
      </section>

      <section class="content">
        
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