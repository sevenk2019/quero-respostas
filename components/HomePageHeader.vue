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
                    <img class="is-64x64" src="https://api.adorable.io/avatars/64/abott@adorable.png" >
                  </figure>
                  <div class="user-info">
                    <p class="user-name user-logged">{{ userSkills.name }}</p>
                    <p class="user-score user-logged"><b>Pontuação:</b> {{ userSkills.points }}</p>
                    <p class="subtitle">{{ userSkills.university }}</p>
                    <hr>
                    <div class="skilss">
                      <p class="title-skill"><b>Nivel de habilidades em:</b></p>

                      <div
                        v-for="(skill, index) in userSkills.skills"
                        v-bind:key="skill.id">
                        <p class="category-skills">{{ skill.name }}</p>
                        <progress class="progress is-danger" value="15" max="100">{{ Math.pow(2,index+1)*10 }}%</progress>
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

  data() {
    return {
      userSkills: {}
    }
  },

  async created() {
    try {
      const userSkills = await this.$axios.$get('/user_tags', {}, {
        headers: {
          Authorization: `Bearer ${self.$store.state.token.authorization}`,
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

