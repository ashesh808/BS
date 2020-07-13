<template>
  <div>
    <br />
    <DataLoader :endPoint="`http://localhost:3000/api/medicine`"></DataLoader>
  </div>
</template>

<script>
import DataLoader from "./DataLoader";
import VPagination from "./VPagination";
export default {
  components: {
    DataLoader,
    VPagination
  },
  data: () => ({
    searchedText: ""
  })
};
</script>

<style>
</style>