
<template>
    <div class="container-fluid job-filter-wrapper">
        <div class="col">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Country" aria-label="Country" v-model="countryModel">
                <span class="input-group-text">
                    <div class="location-icon"></div>
                </span>
                <input type="text" class="form-control" placeholder="City" aria-label="City" v-model="cityModel">
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search" aria-label="Search"
                    aria-describedby="basic-addon2" v-model="searchTextModel">
                <span class="input-group-text" id="basic-addon2">
                    <div class="search-icon"></div>
                </span>
            </div>
            <div class="row filter-page-btns-wrapper">
                <button type="button" class="btn btn-dark clear-filter-btn" @click="clearFilter()">Clear Filter</button>
                <button type="button" class="btn btn-dark search-btn" @click="search()">Search</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
    name: 'JobFilter',
    setup() {
        const store = useStore();
        const selectedPageNum = computed(() => store.state.selectedPageNum);
        const countryModel = ref("");
        const cityModel = ref("");
        const searchTextModel = ref("");

        function search() {
            console.log(this.cityModel);
            this.store.dispatch('getJobs', { page: this.selectedPageNum, city: this.cityModel, country: this.countryModel, searchText: this.searchTextModel });
        }

        function clearFilter() {
            this.cityModel = "";
            this.countryModel = "";
            this.searchTextModel = "";
            this.store.dispatch('getJobs', { page: this.selectedPageNum });
        }

        return {
            store,
            selectedPageNum,
            countryModel,
            cityModel,
            searchTextModel,
            search,
            clearFilter
        }
    }
}
</script>
  
<style>
.job-filter-wrapper {
    max-width: 500px;
    margin-top: 20px;

}

.job-filter-wrapper>.row {
    justify-content: center;
    align-items: center;
}

.search-icon {
    background-repeat: no-repeat;
    min-width: 24px;
    min-height: 24px;
    width: 24px;
    height: 24px;
    max-width: 24px;
    max-height: 24px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='%23000000'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3C/svg%3E");
}

.location-icon {
    background-repeat: no-repeat;
    min-width: 24px;
    min-height: 24px;
    width: 24px;
    height: 24px;
    max-width: 24px;
    max-height: 24px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='%23000000'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z'/%3E%3Ccircle cx='12' cy='9' r='2.5'/%3E%3C/svg%3E");
}

.filter-page-btns-wrapper {
    justify-content: center;
    row-gap: 5px;
}

.search-btn {
    max-width: 100px;
    margin-left: 10px;
}

.clear-filter-btn {
    max-width: 150px;
}
</style>
  