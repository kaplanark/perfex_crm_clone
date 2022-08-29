<template>
    <div class="card border-0">
        <div class="card-header border-0 bg-white">
            <div class="row">
                <div class="col-md-12">
                    <div class="btn-list">
                        <button class="btn btn-primary btn-sm text-uppercase">
                            Yeni Fatura Oluşturs
                        </button>
                        <button class="btn btn-primary btn-sm text-uppercase">
                            Faturaları Arşivle
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card p-2">
                            <div class="card-title fs-5 text-center">
                                $0.00
                            </div>
                            <small class="w-10 text-center text-danger">Ödenmemiş Faturalar</small>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card p-2">
                            <div class="card-title fs-5 text-center">
                                $0.00
                            </div>
                            <small class="w-10 text-center text-danger">Süresi Geçmiş Faturalar</small>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card p-2">
                            <div class="card-title fs-5 text-center">
                                $0.00
                            </div>
                            <small class="w-10 text-center text-success">Ödenmiş Faturalar</small>
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
                        text: 'Fatura No',
                        align: 'start',
                        sortable: false,
                        value: '1',
                    },
                    { text: 'Miktar', value: '2' },
                    { text: 'Toplam Vergi', value: '3' },
                    { text: 'Tarih', value: '4' },
                    { text: 'Proje', value: '5' },
                    { text: 'Etiketler', value: '6' },
                    { text: 'Son Ödeme Tarihi', value: '7' },
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