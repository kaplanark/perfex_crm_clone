<template>
    <div class="card border-0">
        <div class="card-header border-0 bg-white">
            <button class="btn btn-primary btn-sm text-uppercase">
                yeni teklif
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
                    text: 'Teklif#',
                    align: 'start',
                    sortable: false,
                    value: '1',
                },
                { text: 'Konu', value: '2' },
                { text: 'Toplam', value: '3' },
                { text: 'Tarih', value: '4' },
                { text: 'Geçerlilik Tarihi', value: '5' },
                { text: 'Etiketler', value: '6' },
                { text: 'Oluşturma Tarihi', value: '7' },
                { text: 'Durum', value: '8' },
     

            ],
            desserts: [
                {
                    1: '',
                    2: '',
                    3: '',
                    4: '',
                    5: '',
                    6: '',
                    7: '',
                    8: '',
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