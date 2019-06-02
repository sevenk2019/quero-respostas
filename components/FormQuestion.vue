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
      <input class="input input-tags" type="text" placeholder="Informe as tagas relacionadas as suas dúvidas, por exemplo: Ciências Exatas, Matemática, ..."/>
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
export default {
  name: 'FormQuestion',
}
</script>

