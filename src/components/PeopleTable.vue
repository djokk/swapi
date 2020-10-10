<template>
  <section>

    <b-field>
      <b-input
        placeholder="Search by name..."
        type="search"
        icon="magnify"
        :loading="peopleIsLoading"
        v-model="searchArea"
        lazy
        @input="searchTable"
      >
      </b-input>
    </b-field>

    <b-table
      :data="peopleList"
      :loading="peopleIsLoading"
      paginated
      backend-pagination
      :total="table_options.count"
      @page-change="onPageChange"
      :per-page="perPage"
      :current-page="table_options.current_page"
      :selected.sync="selected"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      hoverable
      mobile-cards
      detailed
      show-detail-icon
      :opened-detailed="defaultOpenedDetails"
    >
      <template v-for="column in columns">
        <b-table-column :key="column.id" v-bind="column">
          <template
            v-if="column.searchable"
            slot="searchable"
            slot-scope="props"
          >
            <b-input
              v-model="props.filters[props.column.field]"
              placeholder="Search by name ..."
              icon="magnify"
              size="is-small"
            />
          </template>
          <template v-slot="props">
            {{ props.row[column.field] }}
          </template>
        </b-table-column>
      </template>

      <template slot="detail" slot-scope="props">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <b-message
                v-if="props.row.films.length > 0"
                title="Films"
                type="is-info"
                has-icon
                icon="video-vintage"
                :closable="false"
              >
                <div v-if="props.row.films.length > 0">
                  <div
                    class="has-text-left"
                    v-for="(film, ind) in props.row.films"
                    :key="ind"
                  >
                    <a class="has-text-danger" :href="film" target="_blank">{{
                      film
                    }}</a>
                  </div>
                </div>

                <div v-else class="has-text-grey-light">
                  Oops, empty! No data to show.
                </div>
              </b-message>

              <b-message
                title="Species"
                type="is-success"
                has-icon
                icon="dog-side"
                :closable="false"
              >
                <div v-if="props.row.species.length > 0">
                  <div
                    class="has-text-left"
                    v-for="(specie, ind) in props.row.species"
                    :key="ind"
                  >
                    <a class="has-text-danger" :href="specie" target="_blank">
                      {{ specie }}
                    </a>
                  </div>
                </div>
                <div v-else class="has-text-grey-light">
                  Oops, empty! No data to show.
                </div>
              </b-message>

              <b-message
                title="Starships"
                type="is-warning"
                has-icon
                icon="rocket-launch"
                :closable="false"
              >
                <div v-if="props.row.starships.length > 0">
                  <div
                    class="has-text-left"
                    v-for="(starships, ind) in props.row.starships"
                    :key="ind"
                  >
                    <a
                      class="has-text-danger"
                      :href="starships"
                      target="_blank"
                    >
                      {{ starships }}
                    </a>
                  </div>
                </div>
                <div v-else class="has-text-grey-light">
                  Oops, empty! No data to show.
                </div>
              </b-message>
            </div>
          </div>
        </article>
      </template>

      <template slot="footer">
        <div class="has-text-right">Total rows: {{ table_options.count }}</div>
      </template>
    </b-table>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "PeopleTable",
  computed: {
    ...mapGetters({
      peopleIsLoading: "people/peopleIsLoading",
      peopleList: "people/peopleList",
      search: "people/search",
      table_options: "people/table_options",
    }),
  },
  data() {
    return {
      searchArea: '',
      defaultOpenedDetails: [],
      perPage: 10,
      selected: null,
      columns: [
        {
          field: "name",
          label: "Name",
        },
        {
          field: "gender",
          label: "Gender",
        },
        {
          field: "birth_year",
          label: "Birth year",
        },
        {
          field: "height",
          label: "Height",
        },
        {
          field: "mass",
          label: "Mass",
        },
        {
          field: "skin_color",
          label: "Skin color",
        },
        {
          field: "eye_color",
          label: "Eye color",
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      loadPeople: "people/loadPeople",
    }),
    ...mapMutations({
      SET_PAGE_NUMBER: "people/SET_PAGE_NUMBER",
      SET_SEARCH_AREA: "people/SET_SEARCH_AREA"
    }),
    onPageChange(page) {
      console.log(page);
      this.SET_PAGE_NUMBER(page);
      this.loadPeople();
    },
    searchTable(){
      this.SET_SEARCH_AREA(this.searchArea);
      this.SET_PAGE_NUMBER(1);
      this.loadPeople();
    }
  },
};
</script>
