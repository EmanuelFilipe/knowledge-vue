<template>
    <div class="user-admin">
        <b-form>
            <input id="user-id" type="hidden" v-model="user.id" />
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome:" label-for="user-name">
                        <b-form-input id="user-name" type="text"
                            v-model="newUser.name" required
                            placeholder="Informe o Nome do Usuário">
                        </b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Email:" label-for="user-email">
                        <b-form-input id="user-email" type="text"
                            v-model="newUser.email" required
                            placeholder="Informe o E-mail do Usuário">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-form-checkbox id="user-admin" v-model="newUser.admin" class="mt-3 mb-3">
                Administrator?
            </b-form-checkbox>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Password:" label-for="user-password">
                        <b-form-input id="user-password" type="password"
                            v-model="newUser.password" required
                            placeholder="Informe a Senha do Usuário">
                        </b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Confirm password:" label-for="user-confirm-password">
                        <b-form-input id="user-confirm-password" type="password"
                            v-model="newUser.confirmPassword" required
                            placeholder="Confirme a Senha do Usuário">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-button variant="primary" v-if="mode === 'save'"
                @click="save">Save</b-button>
            <b-button variant="danger" v-if="mode === 'remove'"
                @click="remove">Remove</b-button>
            <b-button class="ml-2" v-if="mode === 'save'"
                @click="reset">Cancel</b-button>
            <hr>
        </b-form>
        <b-table hover striped :items="users" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadUser(data.item)" class="mr-2">
                    <i class="fa fa-folder"></i>
                </b-button>
                <b-button variant="danger" @click="loadUser(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'
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
            ],
            newUser: {}
        }
        },
        methods: {
            loadUsers() {
                this.users = this.user
            },
            reset() {
                this.mode = 'save'
                this.newUser = {}
                //this.loadUsers()
            },
            save() {
                const lastId =  this.users.reduce((max, user) => 
                                    Math.max(max, user.id), 0)
                                    
                const user = {
                    id: lastId + 1,
                    name: this.newUser.name,
                    email: this.newUser.email,
                    admin: this.newUser.admin
                }
                this.users.push(user)
                this.$toasted.global.defaultSuccess()
                this.reset()
            },
            remove() {
                this.mode = 'remove'
            },
            loadUser(user, mode = 'save') {
                this.mode = mode
                this.newUser = {...user}
            }
        },
        mounted() {
            this.loadUsers()
        }
    }
</script>

<style scoped>

</style>