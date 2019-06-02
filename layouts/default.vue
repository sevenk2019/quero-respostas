<template>
  <div>
    <Navbar/>
    <HomePageHeader/>
    <section class="container">

      <nuxt />
    </section>

    <Footer />
  </div>
</template>

<style>
  @import url('~/assets/style');
</style>

<script>
import Navbar from '~/components/Navbar';
import HomePageHeader from '~/components/HomePageHeader'
import Footer from '~/components/Footer'
export default {
  components: {
    Navbar,
    HomePageHeader,
    Footer,
  }
}
</script>