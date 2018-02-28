<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">Your Company Name</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        
      </b-collapse>
    </b-navbar>
    <div class="container main-container">
     <!--  <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition> -->
      <router-view></router-view>
    </div>
    <footer class="footer">
      <div class="container text-center text-muted">
        <span class="text-muted">Copyright &copy; Your Company Name</span>
        <span><i class="fa fa-circle" aria-hidden="true"></i></span>
        <span><router-link to="/contact">Contact</router-link></span>
      </div>
    </footer>
  </div>
</template>

<script>
import router from './router'
export default {
  name: 'app',
}
</script>

<style lang="scss">
// main css 
#app {
  $dim-gray: #524C49;
  nav {
    .navbar-nav {
      li {
        padding-left: 20px;
      }
    }
    background-color: $dim-gray;
  }
  .footer {
    position:fixed;
    bottom: 0;
    clear: both;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #dee2e6;

    .fa-circle {
      padding-left: 15px;
      padding-right: 15px;
      font-size: 12px;
    }
  }
  .main-container {
    padding: 20px;
    padding-bottom: 60px;
  }
}
</style>

<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
</style>
