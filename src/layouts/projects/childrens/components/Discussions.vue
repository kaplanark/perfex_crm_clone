<template>
    <div class="card border-0">
        <div class="card-header bg-white border-0">
            <button class="btn-sm btn btn-primary text-uppercase">
                konu başlat
            </button>
        </div>
        <div class="card-body">
            <v-data-table :headers="headers" :items="desserts" multi-sort class="elevation-1" :search="search">
                <template v-slot:top>
                    <div class="card border-0 table-top-card my-2">
                        <div class="btn-group">
                            <b-dropdown id="dropdown-left" text="Tümü" variant="outline-primary" size="sm">
                                <b-dropdown-item>10</b-dropdown-item>
                                <b-dropdown-item>20</b-dropdown-item>
                            </b-dropdown>
                            <button class="btn btn-outline-primary btn-sm">Dışa Aktar</button>
                            <button class="btn btn-outline-primary btn-sm"><i class="fas fa-sync"></i></button>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            appearance: 'Bu Ay',
            headers: [
                {
                    text: 'Konu',
                    align: 'start',
                    sortable: false,
                    value: '1',
                },
                { text: 'Son Aktivite', value: '2' },
                { text: 'Yorum Sayısı', value: '3' },
                { text: 'Müşteriye Görünür', value: '4' },
               
            ],
            desserts: [
                {
                    1: '',
                    2: '',
                    3: '',
                    4: '',
                    
                }
            ],
        }
    },
}
</script>
<style scoped>
.input-group {
    width: fit-content;
}
</style>