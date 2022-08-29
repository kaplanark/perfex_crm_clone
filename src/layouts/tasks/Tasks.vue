<template>
    <b-container fluid class="mt-3">
        <div class="card border-0 bg-white p-2">
            <div class="card-header bg-white">
                <div class="btn-list">
                    <button class="btn btn-primary fs-s" @click="$bvModal.show('task_modal')">Yeni Görev</button>
                    <router-link tag="button" to="/fiter" class="btn btn-secondary fs-s">
                        Kanban Görünüme Geç
                    </router-link>
                </div>
                <div class="btn-list">
                    <router-link tag="button" to="/tasks/detailed_overview" class="btn btn-success fs-s">Görev Görünümü</router-link>
                    <b-dropdown id="dropdown-right" variant="outline-primary btn-sm">
                        <template #button-content>
                            <span><i class="fas fa-filter"></i></span>
                        </template>
                        <b-dropdown-item href="#">An item</b-dropdown-item>
                        <b-dropdown-item href="#">Another item</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
            <div class="card-body">
                <h6 class="mb-2">Proje Özeti</h6>
                <div class="stat-boxs">
                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-sm text-secondary">Başlamadı</span>
                        <span class="fs-xs text-secondary">Bana Atanan Görevler: 0</span>
                    </div>
                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-sm text-primary">Devam Eden</span>
                        <span class="fs-xs text-secondary">Bana Atanan Görevler: 0</span>
                    </div>

                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-sm text-danger">Testte</span>
                        <span class="fs-xs text-secondary">Bana Atanan Görevler: 0</span>
                    </div>

                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-sm text-success">Geribildirim Bekliyor</span>
                        <span class="fs-xs text-secondary">Bana Atanan Görevler: 0</span>
                    </div>

                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-sm text-success">Tamamlandı</span>
                        <span class="fs-xs text-secondary">Bana Atanan Görevler: 0</span>
                    </div>
                </div>
            </div>
            <div class="card-footer bg-white">
                <v-data-table :headers="headers" :items="desserts" multi-sort class="elevation-1" :search="search"
                    v-model="selected" show-select>
                    <template v-slot:top>
                        <div class="card border-0 table-top-card my-2">
                            <div class="btn-group">
                                <b-dropdown id="dropdown-left" text="Tümü" variant="outline-primary" size="sm">
                                    <b-dropdown-item>10</b-dropdown-item>
                                    <b-dropdown-item>20</b-dropdown-item>
                                </b-dropdown>
                                <button class="btn btn-outline-primary btn-sm">Dışa Aktar</button>
                                <button class="btn btn-outline-primary btn-sm"
                                    @click="$bvModal.show('operation_modal')">Toplu İşlemler</button>
                                <button class="btn btn-outline-primary btn-sm"><i class="fas fa-sync-alt"></i></button>
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


        <b-modal id="task_modal" size="lg">
            <template #modal-title>
                <span class="fs-6">Yeni ekle görev</span>
            </template>
            <div class="card border-0">
                <div class="card-header bg-white">
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="general">
                            <label class="form-check-label" for="general">
                                Genel
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="billable" checked>
                            <label class="form-check-label" for="billable">
                                Faturalanabilir
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="formFile" class="form-label text-primary">Dosyaları Ekle</label>
                        <input type="file" id="formFile">
                    </div>
                </div>
                <div class="card-body">
                    <div class="mb-2">
                        <label class="form-label">*Konu</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Saatlik Ücret</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-2">
                                <label for="start-datepicker">* Başlangıç Tarihi</label>
                                <b-form-datepicker id="start-datepicker" v-model="today" class="mb-2" :min="min"
                                    :max="max">
                                </b-form-datepicker>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-2">
                                <label for="end-datepicker">Bitiş Tarihi</label>
                                <b-form-datepicker id="end-datepicker" class="mb-2" :min="min" :max="max">
                                </b-form-datepicker>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-2">
                                <label>Öncelik</label>
                                <select class="form-select">
                                    <option selected>Orta</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-2">
                                <label>Tekrara</label>
                                <select class="form-select">
                                    <option selected>Seçim Yapılmadı</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-2">
                                <label>İlişki</label>
                                <select class="form-select">
                                    <option selected>Seçim Yapılmadı</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">

                        </div>
                        <div class="col-md-6">
                            <div class="mb-2">
                                <label>Atanan Üyeler</label>
                                <select class="form-select">
                                    <option selected>Kaplan Arkan</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-2">
                                <label>Takip Edenler</label>
                                <select class="form-select">
                                    <option selected>Seçim Yapılmadı</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="mb-2">
                        <label for="tags-basic"><i class="fas fa-tag"></i> Etiketler</label>
                        <b-form-tags input-id="tags-basic" v-model="tags" tag-variant="primary" placeholder="Etiket">
                        </b-form-tags>
                    </div>
                </div>
                <div class="card-footer bg-white">
                    <div class="mb-2">
                        <label class="form-label">Görev Açıklaması</label>
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                </div>
            </div>
            <template #modal-footer>
                <button type="button" class="btn btn-secondary text-white text-uppercase fs-sm"
                    @click="$bvModal.hide('task_modal')">Kapat</button>
                <button type="button" class="btn btn-primary text-white text-uppercase fs-sm">Kaydet</button>
            </template>
        </b-modal>
        <b-modal id="operation_modal">
            <template #modal-title>
                <span class="fs-6">Tolu İşlemler</span>
            </template>
            <div class="card border-0">
                <div class="card-header bg-white">
                    <div class="form-check check-danger">
                        <input class="form-check-input" type="checkbox" value="" id="general" @click="bulk_delete=!bulk_delete">
                        <label class="form-check-label" for="general">
                            Toplu Silme
                        </label>
                    </div>
                </div>
                <div class="card-body" v-show="bulk_delete">
                    <div class="mb-2">
                        <label>Durum</label>
                        <select class="form-select">
                            <option selected>Orta</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label>Öncelik</label>
                        <select class="form-select">
                            <option selected>Seçim Yapılmadı</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label>Atanan</label>
                        <select class="form-select">
                            <option selected>Seçim Yapılmadı</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label>Faturalanabilir</label>
                        <select class="form-select">
                            <option selected>Seçim Yapılmadı</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label for="tags-basic"><i class="fas fa-tag"></i> Etiketler</label>
                        <b-form-tags input-id="tags-basic" v-model="tags" tag-variant="primary" placeholder="Etiket">
                        </b-form-tags>
                    </div>
                </div>
            </div>
            <template #modal-footer>
                <button type="button" class="btn btn-secondary text-white text-uppercase fs-sm"
                    @click="$bvModal.hide('operation_modal')">Kapat</button>
                <button type="button" class="btn btn-primary text-white text-uppercase fs-sm">Onayla</button>
            </template>
        </b-modal>


    </b-container>
</template>
<script>
export default {
    data() {
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        const minDate = new Date(today)
        minDate.setMonth(minDate.getMonth() - 2)
        minDate.setDate(15)
        const maxDate = new Date(today)
        maxDate.setMonth(maxDate.getMonth() + 2)
        maxDate.setDate(15)
        return {
            bulk_delete:true,
            tags: [],
            today: today,
            selected: [],
            search: '',
            appearance: 'Bu Ay',
            headers: [
                {
                    text: '#',
                    align: 'start',
                    sortable: false,
                    value: 'index',
                },
                { text: 'Adı', value: 'name' },
                { text: 'Durum', value: 'situation' },
                { text: 'Başlangıç Tarihi', value: 'start_date' },
                { text: 'Bitiş Tarihi', value: 'finised_date' },
                { text: 'Atanan', value: 'assigned' },
                { text: 'Etiketier', value: 'tickets' },
                { text: 'Öncelik', value: 'priority' },
            ],
            desserts: [
                {
                    index: '1',
                    name: 'Kaplan Arkan',
                    situation: '',
                    start_date: '02.03.2020',
                    finised_date: '02.03.2022',
                    assigned: '',
                    tickets: '',
                    priority: ''
                }
            ],
        }
    }
}
</script>
<style scoped lang="scss">
.form-select,
.form-control {
    font-size: 14px;
}

.form-group {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 22px;

    label {
        cursor: pointer;
    }

    #formFile {
        display: none;
    }
}

label {
    font-size: 13px;
}

.input-group {
    width: fit-content;
}

.table-top-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

}

.stat-boxs {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    gap: 22px;

    @media (max-width:1400px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width:1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width:992px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width:540px) {
        grid-template-columns: 1fr;
    }
}

.dropdown-toggle::after {
    display: none !important;
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.fs-sm {
    font-size: 14px;
}

.customer-box {
    padding: 12px 0;

    h5 {
        font-size: 24px;
    }

    span {
        font-weight: 500;
        display: block;
    }

    &:not(:last-child) {
        border-right: 1px solid rgb(208, 208, 208);
    }
}
</style>