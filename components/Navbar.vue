<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
            <a
              class="navbar-item"
              href="/"
            >
              <img
                class="logo"
                src="~assets/logo.svg"
                alt="Buefy"
                height="28"
              >
              <span class="logo-type logo-type__quero">
                Quero
              </span>
              
              <span class="logo-type logo-type__respostas">
                Saber
              </span>
            </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item">
              Cursos de idiomas
            </a>
            <a class="navbar-item">
              Bolsas de estudos
            </a>

            <div class="buttons">
              <button class="button secondary-button"
                @click="toggleLogin">
                {{ loggedIn ? 'Sair' : 'Entrar' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <b-modal :active.sync="isComponentModalActive" has-modal-card>
        <AuthForm @login="userLoggedIn"/>
    </b-modal>
  </div>
</template>

<script>
import AuthForm from '~/components/AuthForm'
import axios from 'axios'

export default {
  name: 'Navbar',
  components: {
    AuthForm
  },

  data() {
    return {
      isComponentModalActive: false,
      loggedIn: this.$store.state.token.authorization.length > 0 ? true : false
    }
  },

  methods: {
    toggleLogin: function() {
      if (this.loggedIn) {
        this.loggedIn = false
        this.$store.commit('token/remove');
      }
      else
        this.isComponentModalActive = true
    },
    userLoggedIn: function() {
      this.isComponentModalActive = false;
      if (this.$store.state.token.authorization.length > 0)
        this.loggedIn = true
      else
        this.loggedIn = false
    }
  }
}
</script>

