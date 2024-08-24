<template>
    <div class="article-by-id">
        <PageTitle :icon="'fa fa-file-o'" :mainTitle="article.name"
            :subTitle="article.description" />
        <div class="article-content" v-html="article.content"></div>
    </div>
</template>

<script>
import PageTitle from "../template/PageTitle.vue";
import { baseApiUrl } from "@/global";
import axios from "axios";

    export default {
        name: 'ArticleById',
        components: { PageTitle },
        data() {
            return {
                article: {}
            }
        },
        mounted() {
            const url = `${baseApiUrl}/articles/${this.$route.params.id}`
            axios.get(url).then(res => this.article = res.data)
        }
    }
</script>

<style scoped>
.article-content {
    background-color: #fff;
    border-radius: 8px;
    padding: 25px;
}
    
    .article-content pre {
        border-radius: 8px;
        padding: 20px;
        font-size: 1.2rem;
        background-color: #1e1e1e;
        color: #fff;
    }
    
    /* restrição para imagem nao quebrar */
    .article-content img {
        max-width: 100%;
    }

    .article-content :last-child {
        margin-bottom: 0px;
    }
</style>