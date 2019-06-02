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
  components: {
    Navbar,
    HomePageHeader,
  }
}
</script>