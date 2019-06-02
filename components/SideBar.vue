<template>
  <div class="card-top-users">
    <div class="box has-text-centered" style="padding: 0; border-radius: 20px;">
      <div class="panel-orange">
        <span class="top-users">Os sábios</span>
      </div>
      <div class="user">
        <figure class="image is-64x64 user-image">
          <img class="is-64x64" src="https://api.adorable.io/avatars/64/abott@adorable.png">
        </figure>
        <div class="user-info">
          <p class="user-name">Fulano da Silva</p>
          <p class="user-score"><b>Pontuação:</b> 100</p>
        </div>
      </div>
      <hr>
      <div class="user">
        <figure class="image is-64x64 user-image">
          <img class="is-64x64" src="https://api.adorable.io/avatars/64/abott@adorable.png">
        </figure>
        <div class="user-info">
          <p class="user-name">Fulano da Silva</p>
          <p class="user-score"><b>Pontuação:</b> 100</p>
        </div>
      </div>
      <hr>
      <div class="user">
        <figure class="image is-64x64 user-image">
          <img class="is-64x64" src="https://api.adorable.io/avatars/64/abott@adorable.png">
        </figure>
        <div class="user-info">
          <p class="user-name">Fulano da Silva</p>
          <p class="user-score"><b>Pontuação:</b> 100</p>
        </div>
      </div>
      <span>&nbsp;</span>
    </div>

    <div class="box has-text-centered" style="padding: 0; border-radius: 20px;">
      <div class="panel-blue">
        <span class="top-users">Tags</span>
      </div>
      <span>&nbsp;</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'SideBar',
}
</script>

<style>
  .panel-orange {
    max-width: 100%;
    background-color: #db9f30;
    padding: 20px;
    border-radius: 20px 20px 0 0;
    margin-bottom: 15px;
  }

  .panel-blue {
    max-width: 100%;
    background-color: #3CA4BB;
    padding: 20px;
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
  .user-image img {
    border-radius: 100%;
  }
  .user {
    padding: 20px;
    margin-right: 20px;
    margin-left: 20px;
  }
  .user-name {
   text-align: left;
   font-weight: bold;
   padding-top: 5px;
  }
  .user-score {
    text-align: left;
  }

</style>
