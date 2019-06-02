<template>
  <div>
    <div class="question-form">
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Titulo da pergunta"/>
          <hr>  
          <textarea class="textarea" placeholder="O que você quer saber?"></textarea>
        </div>
      </div>
    </div>
    <div class="buttons is-fullwidth">
      <multiselect
        v-model="selectedTags"
        :options="tags"
        :multiple="true"
        class="is-fullwidth">
      </multiselect>
    </div>
    <div class="buttons is-pulled-right">
      <a class="button create-question-button">
        <strong>Enviar pergunta</strong>
      </a>
    </div>
  </div>
</template>

<style>
.input::placeholder {
  color: #2A1E5C !important;
  font-size: 24px;
}
.textarea::placeholder {
  color: #2A1E5C !important;
  font-size: 24px;
  padding-top: 10px;
}
</style>

<script>
import FormQuestion from '~/components/FormQuestion'
import Multiselect from 'vue-multiselect'
import axios from 'axios'

export default {
  name: 'FormQuestion',
  components: {
    FormQuestion,
    Multiselect
  },
  data () {
    return {
      selectedTags: [],
      tags: []
    }
  },
  async created() {
    try {
      const tags = await this.$axios.$get('/tags');
      this.tags = tags.map(tagObj => tagObj.name );
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
