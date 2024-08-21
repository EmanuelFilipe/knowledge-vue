<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" :mainTitle="'Administration of System'" 
            :sub-title="'Registrations'"/>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle.vue';
    export default {
        name: 'AdminPages',
        components: { PageTitle }
    }
</script>

<style scoped>

</style>