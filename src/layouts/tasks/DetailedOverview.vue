<template>
    <b-container fluid class="mt-3">
        <div class="card border-0 mb-4">
            <div class="card-header bg-white">
                <router-link tag="button" to="/tasks" class="btn btn-secondary pull-left fs-sm text-uppercase my-2">
                    Görev listesine geri dön</router-link>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-2">
                        <select class="form-select">
                            <option selected>Tüm Personel</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <select class="form-select">
                            <option selected>Ağustos</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <select class="form-select">
                            <option selected>Tümü</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <select class="form-select">
                            <option selected>2022</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-primary fs-sm text-uppercase w-100">Filitrele</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card border-0 mb-4">
            <div class="card-body">
                <h6 class="text-success mb-2">Ağustos</h6>
                <v-data-table :headers="headers" :items="desserts" multi-sort class="elevation-1" :search="search">
                    <template v-slot:top>
                        <div class="card border-0 table-top-card my-2">
                            <div class="btn-group">
                                <b-dropdown id="dropdown-left" text="Tümü" variant="outline-primary" size="sm">
                                    <b-dropdown-item>10</b-dropdown-item>
                                    <b-dropdown-item>20</b-dropdown-item>
                                </b-dropdown>
                                <button class="btn btn-outline-primary btn-sm">Dışa Aktar</button>
                            </div>
                            <div class="input-group">
                                <span class="input-group-text"><i class="fas fa-search"></i></span>
                                <input type="text" placeholder="Ara:" class="form-control form-control-sm"
                                    v-model="search" style="width: 30%;">
                            </div>
                        </div>
                    </template>
                </v-data-table>
            </div>
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
                    value: 'name',
                },
                { text: 'Başlangıç Tarihi', value: 'start_date' },
                { text: 'Bitiş Tarihi', value: 'finised_date' },
                { text: 'Durum', value: 'situation' },
                { text: 'Tüm Dosya Ekleri Eklendi', value: 'appendices' },
                { text: 'Toplu Yorumlar', value: 'comments' },
                { text: 'Kontrol Listesi Maddeleri', value: 'control' },
                { text: 'Girilen Toplam Süre', value: 'time' },
                { text: 'Zamanında Tamamlandı ?', value: 'completed' },
                { text: 'Atanan', value: 'assigned' },
            ],
            desserts: [
                {
                    name: '',
                    start_date: '',
                    finised_date: '',
                    situation: '',
                    appendices: '',
                    comments: '',
                    control: '',
                    time: '',
                    completed: '',
                    assigned: '',
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
.form-select {
    font-size: 14px;
}

.fs-sm {
    font-size: 14px;
}
</style>