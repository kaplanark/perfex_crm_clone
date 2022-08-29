<template>
    <b-tabs>
        <b-tab active>
            <template #title>
                <small>Müşteri Bilgileri</small>
            </template>
            <div class="row mt-2">
                <div class="col-md-6">
                    <div class="mb-2">
                        <label class="form-label">* Firma</label>
                        <input type="text" class="form-control form-control-sm">
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Vergi Numarası</label>
                        <input type="text" class="form-control form-control-sm">
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Telefon</label>
                        <input type="phone" class="form-control form-control-sm">
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Web Sitesi</label>
                        <input type="text" class="form-control form-control-sm">
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Gurular</label>
                        <select class="form-select form-select-sm" aria-label="Default select example">
                            <option selected>Seçim Yapılmadı</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Varsayılan Dil</label>
                        <select class="form-select form-select-sm" aria-label="Default select example">
                            <option selected>Sistem Varsayılanı</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-2">
                        <label class="form-label">Adres</label>
                        <textarea class="form-control form-control-sm" rows="4"></textarea>
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Şehir</label>
                        <input type="text" class="form-control form-control-sm">
                    </div>
                    <div class="mb-2">
                        <label class="form-label">İlçe</label>
                        <input type="text" class="form-control form-control-sm">
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Pota Kodu</label>
                        <input type="text" class="form-control form-control-sm">
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Ülke</label>
                        <select class="form-select form-select-sm" aria-label="Default select example">
                            <option selected>Seçim Yapılmadı</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
        </b-tab>

        <b-tab>
            <template #title>
                <small>Faturalama & Kargolama</small>
            </template>
            <div class="row mt-2">
                <div class="col-md-6">
                    <div class="card border-0">
                        <div class="card-header bg-white">
                            <h6 class="card-title">Fatura Bilgileri</h6>
                        </div>
                        <div class="card-body">
                            <div class="mb-2">
                                <label class="form-label">Adres</label>
                                <textarea class="form-control form-control-sm" rows="4"></textarea>
                            </div>
                            <div class="mb-2">
                                <label class="form-label">Şehir</label>
                                <input type="text" class="form-control form-control-sm">
                            </div>
                            <div class="mb-2">
                                <label class="form-label">İlçe</label>
                                <input type="text" class="form-control form-control-sm">
                            </div>
                            <div class="mb-2">
                                <label class="form-label">Pota Kodu</label>
                                <input type="text" class="form-control form-control-sm">
                            </div>
                            <div class="mb-2">
                                <label class="form-label">Ülke</label>
                                <select class="form-select form-select-sm" aria-label="Default select example">
                                    <option selected>Seçim Yapılmadı</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card border-0">
                        <div class="card-header bg-white">
                            <h6 class="card-title">Kargo Adresi</h6>
                        </div>
                        <div class="card-body">
                            <div class="mb-2">
                                <label class="form-label">Adres</label>
                                <textarea class="form-control form-control-sm" rows="4"></textarea>
                            </div>
                            <div class="mb-2">
                                <label class="form-label">Şehir</label>
                                <input type="text" class="form-control form-control-sm">
                            </div>
                            <div class="mb-2">
                                <label class="form-label">İlçe</label>
                                <input type="text" class="form-control form-control-sm">
                            </div>
                            <div class="mb-2">
                                <label class="form-label">Pota Kodu</label>
                                <input type="text" class="form-control form-control-sm">
                            </div>
                            <div class="mb-2">
                                <label class="form-label">Ülke</label>
                                <select class="form-select form-select-sm" aria-label="Default select example">
                                    <option selected>Seçim Yapılmadı</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-tab>
        <b-tab>
            <template #title>
                <small>Müşteri Yöneticileri</small>
            </template>
            <div class="card border-0">
                <div class="card-header bg-white border-0">
                    <button class="btn btn-primary text-uppercase btn-sm">Yönetici Ata</button>
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
        </b-tab>
    </b-tabs>
</template>
<script>
export default {
    data() {
        return {
            search: '',
            appearance: 'Bu Ay',
            headers: [
                {
                    text: 'Personel',
                    align: 'start',
                    sortable: false,
                    value: 'personal',
                },
                { text: 'Atama Tarihi', value: 'date' },
                { text: 'Seçenekler', value: 'options' },
            ],
            desserts: [
                {
                    personal: '',
                    date: '',
                    options: '',
                }
            ],
        }
    },
}
</script>
<style scoped>
.form-label {
    font-size: 13px !important;
}

.form-label {
    font-size: 14px
}
.input-group {
    width: fit-content;
}
</style>