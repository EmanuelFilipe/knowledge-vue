<template>
    <div class="user-admin">
        <b-table hover striped :items="users" :fields="fields"></b-table>
    </div>
</template>

<script>
    export default {
        name: 'UserAdmin',
        data() {
            return {
                mode: 'save',
                user: [{
                    id: 1,
                    name: 'filipe silva',
                    email: 'filipe@teste.com.br',
                    admin: true
                },
                {
                    id: 2,
                    name: 'gustavo silva',
                    email: 'gustavo@teste.com.br',
                    admin: false
                },
            ],
                users: [],
                // formating coluns on grid
                fields: [
                    { key: 'id', label: 'Code', sortable: true },
                    { key: 'name', label: 'Name', sortable: true },
                    { key: 'email', label: 'E-mail', sortable: true },
                    { key: 'admin', label: 'Administrator', sortable: true,
                        formatter: value => value ? 'Yes' : 'No'
                     },
                    { key: 'actions', label: 'Actions' },
                ]

            }
        },
        methods: {
            loadUsers() {
                //this.users.push(this.user)
                this.users = this.user

            }
        },
        mounted() {
            this.loadUsers()
        }
    }
</script>

<style scoped>

</style>