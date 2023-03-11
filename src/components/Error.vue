
<template>
    <div class="container-fluid">
        <div class="row error-page-wrapper">
            <div class="error-icon"></div>
            <h3>Something Went Wrong.</h3>
            <h6>Please try again later.</h6>
            <button @click="refreshPage()" class="btn btn-outline-dark refresh-btn">Refresh</button>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'Error',
    setup() {
        function refreshPage() {
            window.location.reload();
        }

        return {
            refreshPage
        }
    }
}
</script>
  
<style>
.error-page-wrapper {
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    margin-top: 20px;
}

.refresh-btn {
    max-width: 200px;
}

.error-icon {
    background-repeat: no-repeat;
    min-width: 48px;
    min-height: 48px;
    width: 48px;
    height: 48px;
    max-width: 48px;
    max-height: 48px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='48' width='48'%3E%3Cpath d='m16.5 33.6 7.5-7.5 7.5 7.5 2.1-2.1-7.5-7.5 7.5-7.5-2.1-2.1-7.5 7.5-7.5-7.5-2.1 2.1 7.5 7.5-7.5 7.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z'/%3E%3C/svg%3E");
}
</style>
  