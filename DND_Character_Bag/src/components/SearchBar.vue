<template>
  <div class="shared-space search-div">
    <input class="shared-space-inner search-box" type="text" name="searchLibrary" placeholder="Search Library">
    <f7-button @click="search" class="shared-space-inner search-icon" material="search">
      <f7-icon material="search"></f7-icon>
    </f7-button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    search() {
      
    },
  },
};
</script>
