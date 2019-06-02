<template>
  <b-tabs 
    v-model="activeTab"
  >

    <b-tab-item label="Favoritos" class="has-text-primary">
      <Card
        v-for="question in followingQuestions"
        v-bind:key="question.id"
        :question="question"
      />
    </b-tab-item>

    <b-tab-item label="Tudo" class="has-text-primary">
      <Card
        v-for="question in allQuestions"
        v-bind:key="question.id"
        :question="question"
      />
    </b-tab-item>

  </b-tabs>
</template>

<script>
import Card from '~/components/Card'
import axios from 'axios'

export default {
  name: 'QuestionsFeed',

  components: {
    Card
  },

  data() {
    return {
      activeTab: 0,
      followingQuestions: [],
      allQuestions: []
    }
  },

  async created() {
    try {
      const allQuestions = await this.$axios.$get('/feed');
      this.allQuestions = allQuestions;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
