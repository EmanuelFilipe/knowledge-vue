<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard"
            sub="Base de Conhecimento" />
        <div class="stats">
            <template>
                <Stat :title="statistic[0].title" :value="statistic[0].value"
                icon="fa fa-folder" :color="statistic[0].color" />
                <Stat :title="statistic[1].title" :value="statistic[1].value"
                icon="fa fa-file" :color="statistic[1].color" />
                <Stat :title="statistic[2].title" :value="statistic[2].value"
                icon="fa fa-user" :color="statistic[2].color" />
            </template>          
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Stat from './Stat'

export default {
    name: 'Home',
    components: { PageTitle, Stat },
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

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
