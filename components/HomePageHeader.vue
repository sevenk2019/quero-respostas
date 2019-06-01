<template>
  <section class="hero header-content">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-narrow">
              <div style="width: 400px;">
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
            </div>

            <FormQuestion/>

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

