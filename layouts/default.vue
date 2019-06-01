<template>
  <div>

  <Navbar/>

  <HomePageHeader/>

    <section class="main-content">

      <div class="container">
        <nuxt />
      </div>

    </section>
  </div>
</template>

<style>
  @import url('~/assets/style');
</style>

<script>
import Navbar from '~/components/Navbar';
import HomePageHeader from '~/components/HomePageHeader'
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  },
  components: {
    Navbar,
    HomePageHeader,
  }
}
</script>