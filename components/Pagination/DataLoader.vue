<template>
  <div class="app">
    <div class="my-5"></div>
    <section>
      <div class="search-field">
        <input
          class="input column is-3"
          type="text"
          v-model="params.searchedText"
          @keyup="searchData()"
          placeholder="search"
        />
      </div>
      <br />
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
    </section>
    <section class="pag">
      <br />
      <div class="hero-load" v-if="params.loading">
        <div class="loader"></div>
      </div>

      <div class="columns is-multiline" v-if="!params.loading">
        <div class="column is-4" v-for="item in data.data" :key="item._id">
          <div class="card">
            <div class="card-content">
              <div class="content">
                <ul>
                  <li>Name : {{ item.name }}</li>
                  <li>ManuFacturer : {{ item.manufacturer }}</li>
                  <li>price : {{ item.price }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["endPoint"],
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
    data: [],
    url: ""
  }),
  methods: {
    anotherPage: function(id) {
      if (!id) return;
      this.params.loading = true;
      this.params.page = id;
      this.fetchPage();
    },
    range: function(start, stop, step) {
      var a = [start],
        b = start;
      while (b < stop) {
        a.push((b += step || 1));
      }
      return b > stop ? a.slice(0, -1) : a;
    },
    showPageNumber: function(currentPage, totalPage) {
      this.params.paginationLinks = [];
      var current = currentPage;
      var pages_to_show = 5;
      var end;
      var start;
      if (totalPage < pages_to_show) {
        start = 1;
        end = totalPage;
      } else {
        if (current > Math.ceil(pages_to_show / 2)) {
          start =
            current - Math.floor(pages_to_show / 2) == 0
              ? 1
              : current - Math.floor(pages_to_show / 2);

          end =
            current + pages_to_show >= totalPage
              ? totalPage
              : current + Math.floor(pages_to_show / 2);
        } else {
          start = 1;
          end = pages_to_show;
        }
        if (end - start < pages_to_show - 1) {
          start = end - (pages_to_show - 1);
        }
      }
      this.params.paginationLinks = this.range(start, end);
    },
    searchData() {
      this.params.page = 1;
      this.params.loading = true;
      this.fetchPage();
    },
    fetchPage: async function() {
      this.url =
        this.endPoint +
        `?limit=${this.params.limit}&page=${this.params.page}&sortBy=${this.params.sortBy}&order=${this.params.order}&searchText=${this.params.searchedText}`;
      var res = await axios.get(this.url);
      this.showPageNumber(this.params.page, res.data.totalNumberOfPage);
      this.data = res.data;
      setInterval(
        function() {
          this.params.loading = false;
        }.bind(this),
        900
      );
    }
  },
  async created() {
    this.fetchPage();
  }
};
</script>

<style>
</style>