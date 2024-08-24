<template>
    <div class="articles-by-category">
        <PageTitle :icon="'fa fa-folder-o'"
         :mainTitle="category.name" :subTitle="'Category'" />

        <ul>
            <li v-for="article in articles" :key="article.id">
                <ArticleItem :article="article" />
            </li>
        </ul>
        <div class="load-more">
            <button v-if="loadMore" class="btn  btn-lg btn-outline-primary"
             @click="getArticles">Carregar mais</button>
        </div>
    </div>
</template>

<script>
import PageTitle from "../template/PageTitle.vue";
import ArticleItem from "./ArticleItem.vue";
import { baseApiUrl } from "@/global";
import axios from "axios";

    export default {
        name: 'ArticlesByCategory',
        components: { PageTitle, ArticleItem },
        data() {
            return {
                category: {},
                articles: [],
                page: 1,
                loadMore: true
            }
        },
        methods: {
            getCategory() {
                const url = `${baseApiUrl}/categories/${this.category.id}`
                axios(url).then(res => this.category = res.data)
            },
            getArticles() {
                const url = `${baseApiUrl}/categories/${this.category.id}/articles?page=${this.page}`
                axios(url).then(res => {
                    //concatena o resultado anterior com o novo resultado
                    this.articles = this.articles.concat(res.data)
                    // para que na proxima requisição chame a proxima pagina
                    this.page++ 

                    if(res.data.length === 0) this.loadMore = false
                })
            }
        },
        mounted() {
            this.category.id = this.$route.params.id
            this.getCategory()
            this.getArticles()
        }
    }
</script>

<style scoped>
.articles-by-category ul {
    list-style-type: none;
    padding: 0;
}

.load-more {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}
</style>