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
      <h3 class="section-title">{{ $t('creationPatterns') }}</h3>
      <div class="cards">
        <div v-for="pattern in creationPatterns" :key="pattern.name" class="card">
          <div class="card-content">
            <h2>{{ $t(`pattern.${pattern.name}.name`) }}</h2>
            <p>{{ $t(`pattern.${pattern.name}.description`) }}</p>
          </div>
          <div v-if="!pattern.finish" class="finish">{{ $t('finish') }}</div>
          <router-link :to="`${pattern.name.toLowerCase()}`" class="learn-more">{{ $t('learnMore') }}</router-link>
        </div>
      </div>
    </section>

    <section class="cards-wrapper">
      <h3 class="section-title">{{ $t('structuralPatterns') }}</h3>
      <div class="cards">
        <div v-for="pattern in structuralPatterns" :key="pattern.name" class="card">
          <div class="card-content">
            <h2>{{ $t(`pattern.${pattern.name}.name`) }}</h2>
            <p>{{ $t(`pattern.${pattern.name}.description`) }}</p>
          </div>
          <div v-if="!pattern.finish" class="finish">{{ $t('finish') }}</div>
          <router-link :to="`${pattern.name.toLowerCase()}`" class="learn-more">{{ $t('learnMore') }}</router-link>
        </div>
      </div>
    </section>

    <section class="cards-wrapper">
      <h3 class="section-title">{{ $t('behavioralPatterns') }}</h3>
      <div class="cards">
        <div v-for="pattern in behavioralPatterns" :key="pattern.name" class="card">
          <div class="card-content">
            <h2>{{ $t(`pattern.${pattern.name}.name`) }}</h2>
            <p>{{ $t(`pattern.${pattern.name}.description`) }}</p>
          </div>
          <div v-if="!pattern.finish" class="finish">{{ $t('finish') }}</div>
          <router-link :to="`${pattern.name.toLowerCase()}`" class="learn-more">{{ $t('learnMore') }}</router-link>
        </div>
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
        { name: 'Singleton', finish: false, theme: "Creation" },
        { name: 'Factory', finish: false, theme: "Creation" },
        { name: 'AbstractFactory', finish: false, theme: "Creation" },
        { name: 'Builder', finish: false, theme: "Creation" },
        { name: 'Prototype', finish: false, theme: "Creation" },
        { name: 'Adapter', finish: false, theme: "Structure" },
        { name: 'Bridge', finish: false, theme: "Structure" },
        { name: 'Composite', finish: false, theme: "Structure" },
        { name: 'Decorator', finish: false, theme: "Structure" },
        { name: 'Facade', finish: false, theme: "Structure" },
        { name: 'Flyweight', finish: false, theme: "Structure" },
        { name: 'Proxy', finish: false, theme: "Structure" },
        { name: 'ChainOfResponsibility', finish: false, theme: "Behavior" },
        { name: 'Command', finish: false, theme: "Behavior" },
        { name: 'Interpreter', finish: false, theme: "Behavior" },
        { name: 'Iterator', finish: false, theme: "Behavior" },
        { name: 'Mediator', finish: false, theme: "Behavior" },
        { name: 'Memento', finish: false, theme: "Behavior" },
        { name: 'Observer', finish: false, theme: "Behavior" },
        { name: 'State', finish: false, theme: "Behavior" },
        { name: 'Strategy', finish: false, theme: "Behavior" },
        { name: 'Template', finish: false, theme: "Behavior" },
        { name: 'Visitor', finish: false, theme: "Behavior" },
      ],
      scrolled: false
    };
  },
  computed: {
    creationPatterns() {
      return this.patterns.filter(pattern => pattern.theme === 'Creation');
    },
    structuralPatterns() {
      return this.patterns.filter(pattern => pattern.theme === 'Structure');
    },
    behavioralPatterns() {
      return this.patterns.filter(pattern => pattern.theme === 'Behavior');
    }
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
    },
    goToPattern(pattern) {
      this.$router.push(`/patterns/${pattern}`);
    }
  }
};
</script>

<style lang="scss" scoped src="../css/home/home.scss"></style>
