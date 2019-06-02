<template>
  <div>
    <div class="question-form">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Quero saber..."></textarea>
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

<script>
export default {
  name: 'FormQuestion',
}
</script>

