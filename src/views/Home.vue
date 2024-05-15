<template>


  <div class="home">

    <div class="content">
      <h1>{{ $t('welcomeMessage') }}</h1>
      <p>{{ $t('discover') }}</p>
    </div>

    <div class="overlay"></div>

    <div class="bubbles">
      <div class="bubble" v-for="n in 50" :key="n"></div>
    </div>

  </div>


  <div class="patterns">

  <h2 class="introduction">{{ $t('patternsIntroduction') }}</h2>

  <section class="cards-wrapper">
    <div v-for="pattern in patterns" :key="pattern.name" class="card">
      <div class="card-content">
        <h2>{{ $t(`pattern.${pattern.name}.name`) }}</h2>
        <p>{{ $t(`pattern.${pattern.name}.description`) }}</p>
      </div>
      <router-link :to="`/pattern/${pattern.name}`" class="learn-more">{{ $t('learnMore') }}</router-link>
    </div>
  </section>

  <div class="area">
    <ul class="circles">
      <li v-for="i in 10" :key="i"></li>
    </ul>
  </div>
</div>


</template>

<script>
import '../css/home/home.scss';

export default {
  data() {
    return {
      patterns: [
        { name: 'Singleton' },
        { name: 'Factory' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped src="../css/home/home.scss"></style>
