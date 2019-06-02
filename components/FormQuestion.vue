<template>
  <div>
    <div class="question-form">
      <div class="field">
        <div class="control">
          <input class="input" v-model="title" type="text" placeholder="Título da pergunta"/>
          <hr>  
          <textarea class="textarea" v-model="body" placeholder="O que você quer saber?"></textarea>
        </div>
      </div>
    </div>
    <div class="buttons is-fullwidth tag-placeholder">
      <multiselect
        v-model="selectedTags"
        :options="tags"
        :multiple="true"
        class="select-tags is-fullwidth"
        placeholder="Selecione as tags que mais se relacionam com a sua dúvida">
      </multiselect>
    </div>
    <div class="buttons is-pulled-right">
      <b-button
        @click="postQuestion"
        class="button create-question-button"
      >
      <strong>Enviar pergunta</strong>
      </b-button>
    </div>
    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <AddSkills/>
    </b-modal>
  </div>
</template>

<style>
.input::placeholder {
  color: rgb(134, 126, 163) !important;
  font-size: 24px;
}
.textarea::placeholder {
  color: rgb(134, 126, 163) !important;
  padding-top: 10px;
}
</style>

<script>
import FormQuestion from '~/components/FormQuestion'
import Multiselect from 'vue-multiselect'
import axios from 'axios'
import AddSkills from '~/components/AddSkills'

export default {
  name: 'FormQuestion',
  components: {
    FormQuestion,
    Multiselect,
    AddSkills,
  },
  data () {
    return {
      title: '',
      body: '',
      selectedTags: [],
      tags: [],
      isComponentModalActive: false,
    }
  },
  async created() {
    try {
      const tags = await this.$axios.$get('/tags');
      this.tags = tags.map(tagObj => tagObj.name );
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    postQuestion: function() {
      if (this.$store.state.token.authorization.length > 0) {
        let body = {
          question: {
            title: this.title,
            body: this.body,
            tags: this.selectedTags
          }
        }
  
        const self = this;
        this.$axios
        .$post('/questions', body, {
          headers: {
            Authorization: `Bearer ${self.$store.state.token.authorization}`,
            'Content-Type': 'application/json'
          }
        })
        .then(function (response) {
          self.$store.commit('questions/newQuestion', response);
          alert("Pergunta enviada com sucesso!");
        })
        .catch(function (error) {
          alert("Desculpa, não conseguimos enviar sua pergunta :(")
          console.log(error);
        });
      } else {
        alert("Por favor, entre no nosso sistema antes de enviar a sua pergunta!");
      }
    },
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
