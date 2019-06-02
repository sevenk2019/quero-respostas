<template>
  <section class="hero header-content">
      <div class="header-background"></div>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-4">
              <p class="title text-white is-5">Bem vindo ao Quero Saber</p>
              <p class="subtitle text-white__subtitle">
                Uma comunidade top que Lorem Ipsum is
                simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been
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

