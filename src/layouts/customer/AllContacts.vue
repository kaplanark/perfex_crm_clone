<template>
    <b-container fluid class="mt-3">
        <div class="card border-0 bg-white p-3">
            <v-data-table :headers="headers" :items="desserts" multi-sort class="elevation-1" :search="search">
                <template v-slot:top>
                    <div class="card border-0 table-top-card my-2">
                        <div class="btn-group">
                            <b-dropdown id="dropdown-left" text="Tümü" variant="outline-secondary" size="sm">
                                <b-dropdown-item>10</b-dropdown-item>
                                <b-dropdown-item>20</b-dropdown-item>
                            </b-dropdown>
                            <button class="btn btn-outline-secondary btn-sm">Dışa Aktar</button>
                            <button class="btn btn-outline-secondary btn-sm"><i class="fas fa-sync-alt"></i></button>
                        </div>
                        <div class="input-group">
                            <span class="input-group-text"><i class="fas fa-search"></i></span>
                            <input type="text" placeholder="Ara:" class="form-control form-control-sm" v-model="search"
                                style="width: 30%;">
                        </div>
                    </div>
                </template>
            </v-data-table>
        </div>
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            search: '',
            appearance: 'Bu Ay',
            headers: [
                {
                    text: 'Adı',
                    align: 'start',
                    sortable: false,
                    value: 'firstname',
                },
                { text: 'Soyadı', value: 'lastname' },
                { text: 'Epost', value: 'email' },
                { text: 'Firma', value: 'company' },
                { text: 'Telefon', value: 'phone' },
                { text: 'Görevi', value: 'task' },
                { text: 'Son Giriş', value: 'last_date' },
                { text: 'Aktif', value: 'active' },
            ],
            desserts: [
                {
                    firstname:'',
                    lastname: '',
                    email: '',
                    company: '',
                    phone: '',
                    task: '',
                    last_date: '',
                    active: '',
                }
            ],
        }
    }
}
</script>
<style scoped>
.input-group {
    width: fit-content;
}
</style>