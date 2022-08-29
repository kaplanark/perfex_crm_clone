<template>
    <b-container fluid class="mt-3">
        <div class="card border-0 bg-white p-2">
            <div class="card-header bg-white">
                <div class="btn-list">
                    <router-link tag="button" to='/tickets/ticket' class="btn btn-primary fs-s">Yeni Talep</router-link>
                    <button class="btn btn-secondary fs-s" @click="show = !show"><i
                            class="far fa-chart-bar"></i></button>
                </div>
                <b-dropdown id="dropdown-right" variant="outline-primary btn-sm">
                    <template #button-content>
                        <span><i class="fas fa-filter"></i></span>
                    </template>
                    <b-dropdown-item href="#">An item</b-dropdown-item>
                    <b-dropdown-item href="#">Another item</b-dropdown-item>
                </b-dropdown>
            </div>
            <transition name="slide">
                <div class="card-body" v-show="show">
                    <div class="card-header">
                        <small>Haftalık Talep Açılma İstatistikleri</small>
                    </div>
                    <div class="card-footer">
                        <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
                            :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles"
                            :width="width" :height="height" />
                    </div>
                </div>
            </transition>
            <div class="card-body">
                <h6 class="mb-2">Destek Talepleri Özet Tablosu</h6>
                <div class="stat-boxs">
                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-sm text-danger">Açık</span>
                    </div>
                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-sm text-success">Devam Eden</span>
                    </div>

                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-sm text-primary">Cevaplandı</span>
                    </div>

                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-sm text-secondary">Beklemede</span>
                    </div>

                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-sm text-info">Kapalı</span>
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

        <b-modal id="operation_modal">
            <template #modal-title>
                <span class="fs-6">Tolu İşlemler</span>
            </template>
            <div class="card border-0">
                <div class="card-header bg-white">
                    <div class="form-check check-danger">
                        <input class="form-check-input" type="checkbox" value="" id="general"
                            @click="bulk_delete = !bulk_delete">
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
import { Bar } from 'vue-chartjs/legacy'

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    components: {
        Bar
    },
    props: {
        chartId: {
            type: String,
            default: 'bar-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            show: false,
            bulk_delete: true,
            tags: [],
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
                { text: 'Konu', value: 'subject' },
                { text: 'Etiketler', value: 'tags' },
                { text: 'Bölüm', value: 'episode' },
                { text: 'Hizmet', value: 'service' },
                { text: 'Müşter', value: 'customer' },
                { text: 'Durum', value: 'status' },
                { text: 'Öncelik', value: 'priority' },
                { text: 'Son Yanıtlama', value: 'last_reply' },
                { text: 'Oluşturma Tarihi', value: 'create_date' },
            ],
            desserts: [
                {
                    index: '',
                    subject: '',
                    tags: '',
                    episode: '',
                    service: '',
                    customer: '',
                    status: '',
                    priority: '',
                    last_reply: '',
                    create_date: '',
                }
            ],
            chartData: {
                labels: [
                    'Pazartesi',
                    'Salı',
                    'Çarşamba',
                    'Perşembe',
                    'Cuma',
                    'Cumartesi',
                    'Pazar',
                ],
                datasets: [
                    {
                        // label: 'Bu Haftanın Ödemeleri',
                        // backgroundColor: '#d3ebd3',
                        // data: [40, 20, 12, 39, 10, 40, 39]
                    },
                    {
                        // label: 'Geçen Haftanın Ödemeleri',
                        // backgroundColor: '#e29ed4',
                        // data: [20, 30, 32, 19, 50, 70, 59]
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
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
        font-weight: 400;
        display: block;
    }

    &:not(:last-child) {
        border-right: 1px solid rgb(208, 208, 208);
    }
}
</style>