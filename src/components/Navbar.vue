<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="primary">
    <b-navbar-brand href="/">Fintax Frontend Test</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/Calculator">Calculator</b-nav-item>
        <b-nav-item href="/UserList">User List</b-nav-item>
      </b-navbar-nav>
      </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: 'Navbar'
};
</script>