<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add">New Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/scramble">Scramble</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

