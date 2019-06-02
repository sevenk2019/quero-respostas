<template>
  <section class="hero header-content">
      <div class="header-background"></div>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-4">
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
            
            <div class="column">
              <FormQuestion/>
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
  }
}
</script>

