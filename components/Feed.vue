<template>
  <div>
    <div v-if="authorization.length > 0">
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
    </div>

    <div v-if="authorization.length === 0">
      <Card
        v-for="question in allQuestions"
        v-bind:key="question.id"
        :question="question"
      />
    </div>
  </div>
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

  computed: {
    authorization() {
      return this.$store.state.token.authorization
    }
  },

  async created() {
    try {
      const allQuestions = await this.$axios.$get('/feed');
      this.allQuestions = allQuestions;
      
      if (this.authorization.length > 0) {
        const followingQuestions = await this.$axios.$get('/feed/following');
        this.followingQuestions = followingQuestions;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
