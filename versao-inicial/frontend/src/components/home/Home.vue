<template>
    <div>
        <PageTitle icon="fa fa-home" :mainTitle="'Dashboard'" 
            :sub-title="'Knowledge'"/>
        <hr>
        <div class="stats">
            <div v-for="stat in statistic" :key="stat.id">
                <Stat :title="stat.title" :value="stat.value" 
                    :icon="stat.icon" :color="stat.color" />
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle.vue';
import Stat from '../home/Stat.vue';
    export default {
        name: 'Home',
        components: { PageTitle, Stat},
        data() {
            return {
                statistic: [
                    {
                        id: 1,
                        title: 'Categorias',
                        value: 8,
                        icon: 'fa fa-folder',
                        color: '#d54d50'
                    },
                    {
                        id: 2,
                        title: 'Artigos',
                        value: 9,
                        icon: 'fa fa-file',
                        color: '#33dc48'
                    },
                    {
                        id: 3,
                        title: 'Usuários',
                        value: 10,
                        icon: 'fa fa-user',
                        color: '#3282cd'
                    },
                ]
            }
        },
    }
</script>

<style scoped>
.stats {
    /* divide 3 elementos em uma linha */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>