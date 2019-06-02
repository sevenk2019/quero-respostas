<template>
  <section class="hero header-content">
      <div class="header-background"></div>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div
              v-if="!isLogged"
              class="column is-4 not-logged">
              <p class="title text-white is-3">Bem vindo ao Quero Saber</p>
              <p class="subtitle text-white__subtitle">
                Uma comunidade para obter e compartilhar conhecimento, 
                dando às pessoas o poder de aprender umas com as outras e assim compreender melhor o mundo.
              </p>
              <p class="subtitle text-white__subtitle">
                Clique no botão abaixo e faça parte disso!
              </p>
              <div class="buttons">
                <a class="button primary-button">
                  <strong>Participar</strong>
                </a>
              </div>
            </div>
            
            <div 
              v-if="isLogged"
              class="column is-4 logged">
              <div class="box box-user-info">
                <div class="user">
                  <figure class="image is-64x64 user-image">
                    <img class="is-64x64" :src="`https://api.adorable.io/avatar/${userSkills.id}`">
                  </figure>
                  <div class="user-info">
                    <p class="user-name user-logged">{{ userSkills.name }}</p>
                    <p class="user-score user-logged"><b>Pontuação:</b> {{ userSkills.points }}</p>
                    <p class="subtitle is-7">{{ userSkills.university }}</p>
                    <hr>
                    <div class="skilss">
                      <p class="title-skill"><b>Nivel de habilidades em:</b></p>

                      <div
                        v-for="(skill, index) in userSkills.skills"
                        v-bind:key="skill.id">
                        <div v-if="index < 3">
                          <p class="category-skills">{{ skill.name }}</p>
                          <progress :class="`progress ${colorClass(index)}`" :value="Math.pow(2,(index+1))*10" max="100">{{ `${Math.pow(2,(index+1))*10}%` }}</progress>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="column">
              <FormQuestion />
            </div>

          </div>
        </div>
      </div>
    </section>
</template>

<script>
import FormQuestion from '~/components/FormQuestion'
export default {
  name: 'HomePageHeader',
  components: {
    FormQuestion,
  },

  computed: {
    isLogged() {
      return this.$store.state.token.authorization.length > 0
    },
    token() {
      return this.$store.state.token.authorization
    }
  },

  data() {
    return {
      userSkills: {}
    }
  },

  methods: {
    colorClass: function(index) {
      const colorClasses = ['is-danger','is-link','is-info'];
      return colorClasses[index];
    }
  },

  async mounted() {
    try {
      const self = this;
      const userSkills = await this.$axios.$get('/user_tags', {
        headers: {
          Authorization: self.token ? `Bearer ${self.token}` : '',
          'Content-Type': 'application/json'
        }
      });
      
      this.userSkills = userSkills.user;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style>
  .user-logged {
    font-size: 20px;
  }
  .user-info hr {
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .box-user-info {
    border-radius: 20px;
  }
  .title-skill {
    margin-top: -20px;
    margin-bottom: 10px;
    text-align: left;
    font-size: 20px;
  }
  .category-skills {
    text-align: left;
  }

</style>

