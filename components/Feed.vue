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
    }
  },

  computed: {
    isLogged: function() {
      this.firstAttempt = true;
      return this.$store.state.token.authorization.length > 0
    },
    authorization() {
      return this.$store.state.token.authorization
    },
    allQuestions() {
      return this.$store.state.questions.allQuestions
    },
    followingQuestions() {
      return this.$store.state.questions.followingQuestions
    }
  },

  async created() {
    try {
      const allQuestions = await this.$axios.$get('/feed');
      this.$store.commit('questions/setAllQuestions', allQuestions);
    } catch (error) {
      console.log(error);       
    }
  },

  async beforeUpdate() {
    
    if (this.isLogged && this.firstAttempt) {
      try {
        
        if (this.authorization.length > 0) {
          this.firstAttempt = false;
          const self = this;
          const followingQuestions = await this.$axios.$get('/feed/following', {
          headers: {
            Authorization: `Bearer ${self.$store.state.token.authorization}`,
            'Content-Type': 'application/json'
          }
        });
          this.$store.commit('questions/setFollowingQuestions', followingQuestions);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>
