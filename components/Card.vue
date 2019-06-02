<template>
  <div class="card-question box">
    <div class="card-content columns is-multiline">
      <div class="media column is-2">
        <div class="media-left">
          <p class="image is-64x64">
            <img class="is-rounded" :src="`https://api.adorable.io/avatar/${question.user.id}`">
          </p>
          <p class="title is-7">{{ question.user.name }}</p>
          <p class="subtitle is-7">{{ question.user.university }}</p>
        </div>
      </div>

      <div class="column columns is-multiline">
        <div class="content column is-8">
          <p class="title is-4">{{ question.title }}</p>
          <p class="subtitle is-7"><time ><small>{{ getOnlyDate(question.created_at) }}</small></time></p>
          <p class="body is-7">{{ question.body }}</p>
        </div>

        <div class="content column is-4">
          <div class="buttons columns is-multiline">
            <b-button
              v-for="tag in question.tags"
              v-bind:key="tag.id"
              tag="a"
              href="#"
              target="_blank"
              size="is-small"
              class="tags column is-narrow">
              {{ tag.name }}
            </b-button>
          </div>
        </div>

        <div class="content column is-12">
          <hr>
          <div class="columns">
            <div class="column">
              <b-icon
                icon="thumb-up"
                size="is-small">
              </b-icon>
              <span class="is-size-7">{{ question.likes }} Gostei</span>
            </div>

            <div class="column">
              <b-icon
                icon="thumb-down"
                size="is-small">
              </b-icon>
              <span class="is-size-7">{{ question.dislikes }} Não gostei</span>
            </div>

            <div class="column">
              <a
                slot="trigger"
                aria-controls="contentIdForA11y1"
                @click="seeAnswers = !seeAnswers">
                <b-icon
                  icon="comment"
                  size="is-small">
                </b-icon>
                <span class="is-size-7">{{ question.answers.length }} Respostas</span>
              </a>
            </div>

            <div class="column">
              <b-icon
                icon="clock"
                size="is-small">
              </b-icon>
              <span class="is-size-7">Criado a {{ answerAge(question.created_at) }} atrás</span>
            </div>
          </div>
        </div>

        <div class="column is-12">
          <b-collapse :open.sync="seeAnswers" aria-id="contentIdForA11y1">
            <div
              v-for="(answer, index) in question.answers"
              v-bind:key="answer.id"
            >
              <div class="notification">
                <div class="columns is-multiline">
                  <div class="media column is-3">
                    <div class="media-left">
                      <p class="image is-64x64">
                        <img class="is-rounded" :src="`https://api.adorable.io/avatar/${answer.user.id}`">
                      </p>
                      <p class="title is-7">{{ answer.user.name }}</p>
                      <p class="subtitle is-7">{{ answer.user.university }}</p>
                    </div>
                  </div>

                  <div class="column columns is-multiline">
                    <div class="column is-12">
                      <p class="body is-7">{{ answer.body }}</p>
                      <p class="subtitle is-7"><time ><small>{{ getOnlyDate(answer.created_at) }}</small></time></p>
                    </div>

                    <div class="content column" >
                      <hr>
                      <div class="columns">
                        <div class="column">
                          <b-icon
                            icon="thumb-up"
                            size="is-small">
                          </b-icon>
                          <span class="is-size-7">{{ answer.likes_count }} Gostei</span>
                        </div>

                        <div class="column">
                          <b-icon
                            icon="thumb-down"
                            size="is-small">
                          </b-icon>
                          <span class="is-size-7">{{ answer.dislikes_count }} Não gostei</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr v-if="index < question.answers.length - 1">
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['question'],

  data() {
    return {
      seeAnswers: false
    }
  },

  methods: {
    answerAge: function(date) {
      const nowTime = Date.now();
      const created = new Date(date);
      const age = Math.round((nowTime - created)/1000);
      if (age < 60)
        return `${age}s`
      else if (age < 3600)
        return `${Math.round(age/60)}min`
      else if (age < 86400)
        return `${Math.round(age/3600)}h`
      else
        return `${Math.round(age/86400)}d`
    },
    getOnlyDate: function(date) {
      return `${new Date(date).getDate()}/${new Date(date).getMonth()}/${new Date(date).getFullYear()}`
    }
  }
}
</script>

<style scoped>
.image {
  margin-bottom: 10px;
}

.card-question {
  border-radius: 20px;
}
</style>
