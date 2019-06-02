<template>
  <form v-on:submit.prevent="auth" class="card" style="border-radius: 20px;">
    <div class="modal-card" style="width: auto">
      <b-tabs 
        v-model="activeTab"
      >
        <section class="modal-card-body">

          <b-tab-item label="Login" class="has-text-primary">
            <b-field label="Email">
              <b-input
                name="email"
                type="email"
                v-model="email"
                placeholder="E-mail"
                required>
              </b-input>
            </b-field>

            <b-field label="Password">
              <b-input
                name="password"
                type="password"
                v-model="password"
                password-reveal
                placeholder="Senha"
                required>
              </b-input>
            </b-field>
          </b-tab-item>

          <b-tab-item label="Cadastro" class="has-text-primary">
            <b-field label="Name">
              <b-input
                name="name"
                type="name"
                v-model="name"
                placeholder="Nome">
              </b-input>
            </b-field>

            <b-field label="Email">
              <b-input
                name="email"
                type="email"
                v-model="email"
                placeholder="E-mail"
                required>
              </b-input>
            </b-field>

            <b-field label="Password">
              <b-input
                name="password"
                type="password"
                v-model="password"
                password-reveal
                placeholder="Senha"
                required>
              </b-input>
            </b-field>
          </b-tab-item>

        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">Close</button>
          <button class="button is-primary">{{ activeTab === 0 ? 'Entrar' : 'Cadastrar' }}</button>
        </footer>
      </b-tabs>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      activeTab: 0,
      name: '',
      email: '',
      password: '',
    }
  },

  computed: {
    authorization() {
      return this.$store.state.token.authorization
    }
  },

  methods: {
    auth: function() {
      let body = {
        user: {
          email: this.email,
          password: this.password
        }
      }
      let path;
      if (this.activeTab === 0) {
        path = '/login'
      } else if (this.activeTab === 1) {
        path = '/users'
        body.user.name = this.name
      }

      let self = this;
 
      this.$axios.$post(path, body)
      .then(function (response) {
        self.$store.commit('token/add', response.jwt);
        self.$emit('login');
        
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    isRegister() {
      return this.activeTab === 1;
    }
  }
}
</script>