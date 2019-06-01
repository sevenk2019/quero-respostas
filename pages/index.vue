<template>
  <section class="section">

    <div class="columns">
      <QuestionsFeed class="column is-9"/>
      <SideBar class="column is-3"/>
    </div>
      
  </section>
</template>

<script>
import QuestionsFeed from '~/components/Questions/Feed'
import SideBar from '~/components/SideBar'

export default {
  name: 'HomePage',

  components: {
    QuestionsFeed,
    SideBar
  }
}
</script>
