<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main="Dashboard" sub="Base de Conhecimento" />
    <div class="stats">
      <template>
        <Stat
          title="Categories"
          :value="stat.categories"
          icon="fa fa-folder"
          color="#d54d50"
        />
        <Stat
          title="Articles"
          :value="stat.articles"
          icon="fa fa-file"
          color="#33dc48"
        />
        <Stat
          title="Users"
          :value="stat.users"
          icon="fa fa-user"
          color="#3282cd"
        />
      </template>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import Stat from "./Stat";
import axios from "axios";
import { baseApiUrl } from "@/global";

export default {
  name: "Home",
  components: { PageTitle, Stat },
  data() {
    return {
      stat: {},
      statistic: [
        {
          id: 1,
          title: "Categorias",
          value: 8,
          icon: "fa fa-folder",
          color: "#d54d50",
        },
        {
          id: 2,
          title: "Artigos",
          value: 9,
          icon: "fa fa-file",
          color: "#33dc48",
        },
        {
          id: 3,
          title: "Usuários",
          value: 10,
          icon: "fa fa-user",
          color: "#3282cd",
        },
      ],
    };
  },
  methods: {
    getStats() {
      axios.get(`${baseApiUrl}/stats`).then((res) => (this.stat = res.data));
    },
  },
  mounted() {
    this.getStats();
  },
};
</script>

<style>
.stats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
