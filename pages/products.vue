<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-12-tablet">
        <div v-if="search.length>0">
          <h2 class="is-size-5">
            <b>Results for {{search}}...</b>
          </h2>
          <br />
          <br />
        </div>

        <Spinner v-if="busy"></Spinner>

        <article v-else class="media" v-for="medicine in medicines" :key="medicine._id">
          <figure class="media-left">
            <p class="image">
              <img src="/medicine.png" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <div>
                <strong class="mb-1">{{medicine.name}}</strong>
                <br />
                <span
                  class="tag is-light mb-1"
                  v-if="medicine.composition && medicine.composition.length>0"
                >{{medicine.composition}}</span>
                <br />
                <br />
                <span
                  class="tag is-info is-light"
                  v-if="medicine.manufacturer"
                >{{medicine.manufacturer}}</span>
                <span class="tag is-primary is-light">
                  <span v-if="medicine.type && medicine.type.length>0">{{medicine.type}}</span>
                  <span
                    v-if="medicine.group_name && medicine.group_name.length>0"
                  >, {{medicine.group_name}}</span>
                </span>
              </div>
              <button class="button is-light" @click="add(medicine)">
                <i class="las la-plus-circle"></i>
                <small>
                  <b
                    v-if="medicine.discount_price && medicine.discount_price.length>0"
                  >{{medicine.discount_price}}</b>
                  <b v-else>{{medicine.price}}</b>
                </small>
              </button>
            </div>
          </div>
        </article>
      </div>

      <div class="column is-12" v-if="pagination.total_pages > 1">
        <br />
        <nav class="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
          <a
            class="pagination-previous"
            :disabled="pagination.current == 1"
            @click="goto(pagination.current - 1)"
          >Previous</a>
          <a
            class="pagination-next"
            :disabled="pagination.current == pagination.total_pages"
            @click="goto(pagination.current + 1)"
          >Next page</a>
          <ul class="pagination-list">
            <li @click="goto(1)">
              <a class="pagination-link" :class="{'is-current':pagination.current == 1}">1</a>
            </li>
            <li v-if="pagination.total_pages > 2">
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li @click="goto(page)" v-for="page in pagination.range" :key="page">
              <a
                class="pagination-link"
                :class="{'is-current':pagination.current == page}"
                v-if="page !=1 && page !=pagination.total_pages"
              >{{page}}</a>
            </li>
            <li v-if="pagination.total_pages > 2">
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li @click="goto(pagination.total_pages)">
              <a
                class="pagination-link"
                :class="{'is-current':pagination.current == pagination.total_pages}"
              >{{pagination.total_pages}}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { paginate } from "@/components/paginate";
import Swal from "sweetalert2";
import Spinner from "@/components/UI/Spinner";
export default {
  data() {
    return {
      medicines: [],
      pagination: {},
      url: "/api/medicine?searchText=",
      search: "",
      busy: true
    };
  },

  watch: {
    $route() {
      this.create();
    }
  },

  async created() {
    this.create();
  },

  methods: {
    create() {
      if (this.$route.query.search && this.$route.query.search.length > 0) {
        this.search = this.$route.query.search;
        this.url = this.url.substring(0, 25) + this.$route.query.search;
        this.fetchMedicines(this.url);
      } else {
        this.search = "";
        this.url = this.url.substring(0, 25);
        this.fetchMedicines(this.url);
      }
    },

    fetchMedicines(url) {
      this.busy = true;
      this.$axios
        .get(`${process.env.url}${url}`)
        .then(res => {
          this.medicines = res.data.data.filter(m => !m.isDeleted);
          this.pagination = paginate({
            per: 20,
            limit: 3,
            total: res.data.totalData,
            current: res.data.currentPage
          });
        })
        .finally(() => {
          this.busy = false;
        });
    },

    add(medicine) {
      this.$store.commit("addMedicine", {
        name: medicine.name,
        qty: "1 Unit"
      });
      Swal.fire("", `${medicine.name} has been added to your cart.`, "success");
    },

    goto(page) {
      this.fetchMedicines(`${this.url}&page=${page}`);
      if (process.client) {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    }
  },

  components: {
    Spinner
  }
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 64px;
  margin-bottom: 64px;
}

article {
  //   margin-top: 32px;
  border: 1px solid rgba(219, 219, 219, 0.5);
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  margin-top: 8px;
  margin-bottom: 8px;
  align-items: center;
}

.image {
  width: 128px !important;
  border-right: 1px solid #e3e3e3;
}

small {
  font-size: 12px !important;
}

.mb-1 {
  margin-bottom: 8px !important;
}

button {
  i {
    margin-right: 8px;
  }
  margin-right: 16px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and(max-width: 576px) {
  .content {
    display: unset !important;
  }
  button {
    margin-bottom: 16px;
    margin-top: 16px;
  }

  .media-left {
    display: none;
  }

  .media-content {
    padding-top: 16px;
    padding-left: 16px;
  }
}
</style>
