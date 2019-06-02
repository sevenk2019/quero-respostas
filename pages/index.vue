<template>
  <section class="section">

    <div class="columns">
      <Feed class="column is-9"/>
      <SideBar class="column is-3"/>
    </div>
      
  </section>
</template>

<script>
import Feed from '~/components/Feed'
import SideBar from '~/components/SideBar'

export default {
  name: 'HomePage',

  components: {
    Feed,
    SideBar
  }
}
</script>
