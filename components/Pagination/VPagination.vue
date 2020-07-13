<template>
  <div>
    <nav class="pagination is-large" role="navigation" aria-label="pagination">
      <ul class="pagination-list">
        <li @click="anotherPage(1)">
          <a
            class="pagination-previous"
            :class="{'pagination-ellipsis': data.currentPage ==1}"
          >first</a>
        </li>
        <li @click="anotherPage(data.prevPage)">
          <a
            class="pagination-previous"
            :class="{'pagination-ellipsis': data.currentPage == 1}"
          >Prev</a>
        </li>
        <li @click="anotherPage(n)" v-for="n in params.paginationLinks" :key="n">
          <a
            class="pagination-link"
            :class="{ 'is-current': params.page === n }"
            aria-label="Goto page 1"
          >{{ n }}</a>
        </li>
        <li @click="anotherPage(data.nextPage)">
          <a
            class="pagination-next"
            :class="{'pagination-ellipsis': data.currentPage == data.totalNumberOfPage}"
          >next</a>
        </li>
        <li @click="anotherPage(data.totalNumberOfPage)">
          <a
            class="pagination-next"
            :class="{'pagination-ellipsis': data.currentPage == data.totalNumberOfPage}"
          >Last</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data: () => ({
    params: {
      page: 1,
      limit: 9,
      sortBy: "name",
      order: "desc",
      searchedText: "",
      totalPage: "",
      paginationLinks: [],
      loading: true
    },
    methods: {
      anotherPage: function(id) {
        if (!id) return;
        this.params.loading = true;
        this.params.page = id;
        this.fetchPage();
      }
    },
    created(){
       console.log(data);
    }
  })
};
</script>

<style>
</style>