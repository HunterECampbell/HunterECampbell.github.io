<template>
  <div id="app">
    <div id="site-header">
      <h3>Employee Cards</h3>
      <div class="white-btn">Log Out</div>
    </div>
    <TheEmployeeList />
  </div>
</template>

<script>
import TheEmployeeList from './views/TheEmployeeList'

export default {
  name: 'App',
  components: {
    TheEmployeeList
  }
}
</script>

<style>
body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#site-header {
  width: 98%;
  background: #0066ff;
  color: white;
  display: inline-block;
  padding: 10px 15px;
}
#site-header h3 {
  width: 50%;
  margin: 0px;
  display: inline-block;
  margin-top: 10px;
}
.white-btn {
  font-weight: bold;
  text-align: center;
  border: solid 2px white;
  border-radius: 7px;
  padding: 10px 15px;
  width: 115px;
  float: right;
}
.white-btn:hover {
  cursor: pointer;
  background: white;
  color: #0066ff;
  transition: 0.3s;
}

::-webkit-scrollbar {
  background: white;
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  background: #cccccc;
  border-radius: 7px;
}
</style>
