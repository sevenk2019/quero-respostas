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

<style>
.box {
  padding: 10px;
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.card-content {
  margin: 0 !important;
  padding: 10px !important;
}
.is-primary {
  background-color: #3CA4BB !important
}
</style>
