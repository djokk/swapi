<template>
  <div id="app">
    <b-navbar type="is-dark">
      <template slot="brand">
        <b-navbar-item>
          <h1 class="button is-warning">
            <i class="fas fa-cloud mr-2"></i>
            SWAPI
          </h1>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" to="/" router-link-active="active">
          Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/about"> About </b-navbar-item>
      </template>
    </b-navbar>

    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style></style>
