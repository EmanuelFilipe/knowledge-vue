<template>
    <div class="content">
        <!-- irá renderizar o component atual do router -->
        <router-view />       
    </div>
</template>

<script>
    export default {
        name: 'Content'
    }
</script>

<style scoped>
.content {
    grid-area: content;
    background-color: #efefef;
    padding: 20px;
}
</style>