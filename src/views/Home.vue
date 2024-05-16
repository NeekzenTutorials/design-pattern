<template>
  <div ref="home" class="home">
    <div class="content">
      <h1>{{ $t('welcomeMessage') }}</h1>
      <p>{{ $t('discover') }}</p>
    </div>

    <div class="overlay"></div>

    <div class="bubbles">
      <div class="bubble" v-for="n in 50" :key="n"></div>
    </div>
  </div>

  <div class="bottom-arrow" @click="scrollToSection">
    <div class="arrow" :class="{'up': scrolled}"></div>
  </div>

  <div class="patterns" ref="patterns">
    <h2 class="introduction">{{ $t('patternsIntroduction') }}</h2>

    <section class="cards-wrapper">
      <div v-for="pattern in patterns" :key="pattern.name" class="card">
        <div class="card-content">
          <h2>{{ $t(`pattern.${pattern.name}.name`) }}</h2>
          <p>{{ $t(`pattern.${pattern.name}.description`) }}</p>
        </div>
        <div v-if="!pattern.finish" class="finish">{{ $t('finish') }}</div>
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
export default {
  data() {
    return {
      patterns: [
        { name: 'Singleton', finish:false },
        { name: 'Factory', finish:false },
      ],
      scrolled: false
    };
  },
  methods: {
    scrollToSection() {
      const target = this.scrolled ? this.$refs.home : this.$refs.patterns;

      // Ensure target is a valid DOM element
      if (target && typeof target.scrollIntoView === 'function') {
        target.scrollIntoView({ behavior: 'smooth' });
        this.scrolled = !this.scrolled;
      } else {
        console.error('Invalid target for scrollIntoView:', target);
      }
    }
  }
};
</script>


<style lang="scss" scoped src="../css/home/home.scss"></style>
