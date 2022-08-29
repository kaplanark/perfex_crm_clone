<template>
    <div class="card border-0">
        <div class="card-header bg-white border-0">
            
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
                            <button class="btn btn-outline-primary btn-sm">Toplu İşlemler</button>
                            <button class="btn btn-outline-primary btn-sm">Tümünü İndir</button>
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
                    text: 'Dosya Adı',
                    align: 'start',
                    sortable: false,
                    value: '1',
                },
                { text: 'Dsoya Türü', value: '2' },
                { text: 'Son Aktivite', value: '3' },
                { text: 'Yorum Sayısı', value: '4' },
                { text: 'Müşteri İiçin Görünür', value: '5' },
                { text: 'Yükleyen', value: '6' },
                { text: 'Yükelem Traihi', value: '7' },
                { text: 'Seçenekler', value: '8' },
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