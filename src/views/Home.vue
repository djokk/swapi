<template>
  <div>
    <section class="hero is-warning">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">REST API</h1>
          <h2 class="subtitle">methods from https://swapi.dev/api/</h2>
        </div>
      </div>
    </section>

    <section class="pt-2">
      <b-tabs v-model="activeTab" position="is-centered">
        <b-tab-item label="People" icon="account-group">
          <PeopleTable />
        </b-tab-item>
      </b-tabs>
    </section>
    
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PeopleTable from "@/components/PeopleTable";

export default {
  name: "Home",
  // computed: {
  //   ...mapGetters({
  //     name: 'people/name'
  //   })
  // },
  components: {
    PeopleTable,
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {
    ...mapActions({
      loadPeople: "people/loadPeople",
    }),
  },
  mounted() {
    this.loadPeople();
  },
};
</script>
