<template>
    <div class="card border-0">
        <div class="card-header border-0 bg-white">
            <button class="btn btn-primary btn-sm text-uppercase">
                yeni abonelik
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
                    text: '#',
                    align: 'start',
                    sortable: false,
                    value: '1',
                },
                { text: 'Abone Adı', value: '2' },
                { text: 'Proje', value: '3' },
                { text: 'Durum', value: '4' },
                { text: 'Sonraki Fatura Dönüşü', value: '5' },
                { text: 'Abonelik Tarihi', value: '6' },
     

            ],
            desserts: [
                {
                    1: '',
                    2: '',
                    3: '',
                    4: '',
                    5: '',
                    6: '',
               
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