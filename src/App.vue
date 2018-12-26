<template>
  <div id="app">
    <router-view/>
    <!-- footer -->
    <mu-bottom-nav>
      <mu-bottom-nav-item title="Weather" icon="restore" to="/Weather" ></mu-bottom-nav-item>
      <mu-bottom-nav-item title="Favorites" icon="favorite" to="/"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="Nearby" icon="location_on" to="/Center" ></mu-bottom-nav-item>
    </mu-bottom-nav>
    <!-- footer -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

