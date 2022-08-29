<template>
    <div class="card border-0">
        <div class="card-header border-0 bg-white">
            <div class="row">
                <div class="col-md-12">
                    <div class="btn-list">
                        <button class="btn btn-primary btn-sm text-uppercase">
                            harcama git
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card p-2">
                            <div class="card-title fs-5 text-center">
                                $0.00
                            </div>
                            <small class="w-10 text-center text-warning">Toplam</small>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card p-2">
                            <div class="card-title fs-5 text-center">
                                $0.00
                            </div>
                            <small class="w-10 text-center text-success">Faturalanabilir</small>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card p-2">
                            <div class="card-title fs-5 text-center">
                                $0.00
                            </div>
                            <small class="w-10 text-center text-warning">Faturalanmaz</small>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card p-2">
                            <div class="card-title fs-5 text-center">
                                $0.00
                            </div>
                            <small class="w-10 text-center text-danger">Faturalanmadı</small>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card p-2">
                            <div class="card-title fs-5 text-center">
                                $0.00
                            </div>
                            <small class="w-10 text-center text-success">Faturalandı</small>
                        </div>
                    </div>
                </div>
            </div>
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
                    { text: 'Kategori', value: '2' },
                    { text: 'Miktar', value: '3' },
                    { text: 'Adı', value: '4' },
                    { text: 'Harcama Fişi / Fatura', value: '5' },
                    { text: 'Tarih', value: '6' },
                    { text: 'Tarih', value: '7' },
                    { text: 'Proje', value: '8' },
                    { text: 'Fatura', value: '9' },
                    { text: 'Referans', value: '10' },
                    { text: 'Ödeme Türü', value: '11' },

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
                        9: '',
                        10: '',
                        11: '',
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