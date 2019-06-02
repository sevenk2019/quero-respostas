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
                    <p class="user-name user-logged">sss</p>
                    <p class="user-score user-logged"><b>Pontuação:</b> sss</p>
                    <hr>
                    <div class="skilss">
                      <p class="title-skill"><b>Nivel de habilidades em:</b></p>
                      <p class="category-skills">Ciências Exatas</p>
                      <progress class="progress is-danger" value="15" max="100">15%</progress>
                      <p class="category-skills">Ciências da Natureza</p>
                      <progress class="progress is-success" value="30" max="100">30%</progress>
                      <p class="category-skills">Ciências Humanas</p>
                      <progress class="progress is-info" value="45" max="100">45%</progress>                                         
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


<script>
import FormQuestion from '~/components/FormQuestion'
export default {
  name: 'HomePageHeader',
  components: {
    FormQuestion,
  },

  computed: {
    authorization() {
      return this.$store.state.token.authorization
    },
    isLogged() {
      return this.authorization.length > 0
    },
  },
}
</script>

