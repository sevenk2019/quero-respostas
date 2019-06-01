<template>
  <div class="box">
    <div class="card-content columns">
      <div class="media column is-2">
        <div class="media-left">
          <p class="image is-64x64">
            <img class="is-rounded" src="https://api.adorable.io/avatars/64/abott@adorable.png">
          </p>
          <p class="title is-5 is-size-6">{{ question.user.name }}</p>
          <p class="subtitle is-7">{{ question.user.university }}</p>
        </div>
      </div>

      <div class="content column">
        <p class="title is-5">{{ question.title }}</p>
        <p class="body is-7">{{ question.body }}</p>

        <div class="buttons">
          <b-button
            v-for="tag in question.tags"
            v-bind:key="tag.tag_id"
            tag="a"
            href="#"
            target="_blank"
            size="is-small"
            class="is-primary"
          >
            {{ tag.name }}
          </b-button>
        </div>

        <time ><small>{{ question.created_at }}</small></time>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['question']
}
</script>