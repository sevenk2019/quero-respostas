<template>
    <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
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
            Home
          </a>

          <a class="navbar-item">
            Documentation
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
          <div class="buttons">
            <a class="button secondary-button">
              Entrar
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

