<template>
<div>
  <a href="#" class="topNavLink">Home</a>

  <a href="#" class="topNavLink">Man</a>
  <div class="topNavDropdown">
    <NavLinkBlock />
  </div>

  <a href="#" class="topNavLink">Women</a>
  <div class="topNavDropdown">
    <NavLinkBlock />
  </div>

  <a href="#" class="topNavLink">Kids</a>
  <div class="topNavDropdown">
      <NavLinkBlock />
  </div>

  <a href="#" class="topNavLink">Accoseriese</a>
  <div class="topNavDropdown">
    <NavLinkBlock />
  </div>

  <a href="#" class="topNavLink">Featured</a>
  <div class="topNavDropdown">
    <NavLinkBlock />
  </div>

  <a href="" class="topNavLink">Hot Deals</a>
  <div class="topNavDropdown">
    <NavLinkBlock />
  </div>

</div>
</template>

<script>
import NavLinkBlock from "./navLinkBlock.vue";
export default {
  name: "Navigation",
  components: {NavLinkBlock},
}

</script>

<style scoped>

</style>