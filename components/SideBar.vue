<template>
  <div class="card-top-users">
    <div class="box has-text-centered" style="padding: 0; border-radius: 20px;">
      <div class="panel-orange">
        <span class="top-users">Os mais sábios</span>
      </div>
      <div
        v-for="(user, index) in topUsers.filter(a => a.points !== null).sort((a,b) => { return a > b })"
        v-bind:key="user.id"
      >
        <div v-if="index < 5">
          <div class="user">
            <figure class="image is-64x64 user-image">
              <img class="is-64x64" :src="`https://api.adorable.io/avatar/${user.id}`" >
            </figure>
            <div class="user-info">
              <p class="user-name">{{ user.name }}</p>
              <p class="user-score"><b>Pontuação:</b> {{ user.points }}</p>
            </div>
          </div>
          <hr v-if="index < 4">
        </div>
      </div>
      <span>&nbsp;</span>
    </div>

    <div class="box has-text-centered" style="padding: 0; border-radius: 20px;">
      <div class="panel-blue">
        <span class="top-users">Tags</span>
      </div>
      <div class="card-content">
        <div class="card-tags">
          <p class="tag-description">Adicione tags aos favoritos</p>
          <div class="buttons">
            <b-button
              v-for="tag in topTags"
              v-bind:key="tag.id"
              tag="a"
              href="#"
              target="_blank"
              size="is-small"
              class="tags-to-folow">
              {{ tag.name }}
            </b-button>
          </div>
        </div>
      </div>
      <span>&nbsp;</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      topUsers: [],
      topTags: []
    }
  },

  async created() {
    try {
      const topUsers = await this.$axios.$get('/top_users');
      this.topUsers = topUsers;
      const topTags = await this.$axios.$get('/top_tags');
      this.topTags = topTags;
      
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style>
  .panel-orange {
    max-width: 100%;
    background-color: #ffbc00;
    padding: 6px;
    border-radius: 20px 20px 0 0;
    margin-bottom: 15px;
  }

  .panel-blue {
    max-width: 100%;
    background-color: #3c1eb7;
    padding: 6px;
    border-radius: 20px 20px 0 0;
    margin-bottom: 15px;
  }
  .top-users {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
  .user-image {
    margin-left:2%;
    float:left; 
    height:40px;
    width:40px;
    margin-right: 20px;
  }
  .card-tags {
    padding-left: 30px;
    padding-right: 20px;
  }
  .tags-to-folow {
    border: solid 2px #41b883;
    color: #41b883;
    border-radius: 8px !important;
    font-size: 14px !important;
  }
  .tags-to-folow:hover {
    background-color: #41b883;
    color: #fff;
    border: solid 2px #41b883;
  }
  .tags-following {
    border: solid 2px #41b883;
    color: #41b883;
    border-radius: 8px !important;
    font-size: 14px !important;
  }
  .tag-description {
    margin-top: -15px;
    margin-bottom: 15px;
  }
</style>
