<template>
    <div class="row">
        <div class="col-md-6">
            <div class="card border-0">
                <div class="card-header border-0 bg-white">
                    <div class="card-text text-uppercase fs-8">
                        <strong>genel</strong>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-7">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Proje</strong><span>1</span>
                                </li>
                                <li class="list-group-item"><strong>Müşteri</strong> <span>Test Firma</span></li>
                                <li class="list-group-item"><strong>Faturalama Türü</strong>
                                    <span>Sabit Ücret</span>
                                </li>
                                <li class="list-group-item"><strong>Toplam Ücret</strong>
                                    <span>$0.0</span>
                                </li>
                                <li class="list-group-item">
                                    <strong>Durum</strong><span>Başlamadı</span>
                                </li>
                                <li class="list-group-item"><strong>Oluşturma
                                        Tarihi</strong><span> 2022-08-26</span></li>
                                <li class="list-group-item"><strong>Başlangıç
                                        Tarihi</strong><span>2022-08-26</span></li>
                                <li class="list-group-item"><strong>Girilen Süreler
                                        Toplamı</strong><span>00:00</span></li>
                            </ul>
                        </div>
                        <div class="col-md-5">
                            <strong class="d-block text-center w-100 fs-xs">Proje
                                Durumu</strong>
                            <div class="bar-area">
                                <vue-ellipse-progress :progress="100" color="#84c529" :size="150" :thickness="16" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-white">
                    <div class="card-text text-uppercase fs-8 py-2"><strong>PROJE
                            AÇIKLAMASI</strong></div>
                    <div class="card-text text-secondary fs-xs py-2">Bu proje için açıklama yok
                    </div>
                </div>
                <div class="card-footer bg-white">
                    <div class="card-text text-uppercase fs-8 py-2"><strong>PROJE
                            üyeleri</strong></div>
                    <div class="avatar">
                        <div class="avatar-img">
                            <img src="/user-placeholder.jpg" alt="">
                        </div>
                        <div class="avatar-content">
                            <div class="name">
                                Kaplan Arkan
                            </div>
                            <small>Girilen Toplam Süre: 00:00</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card border-0">
                <div class="card-header bg-white">
                    <div class="card-text d-flex justify-content-between"><strong class="text-dark">0 / 0 AÇIK
                            GÖREVLER</strong> <span class="text-secondary"><i class="fa fa-check-circle"></i></span>
                    </div>
                    <div class="progress-bar my-3">
                        <small class="w-100 text-start py-2">45%</small>
                        <b-progress height="6px" :value="45"></b-progress>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <span class="d-block text-uppercase text-secondary fs-xs">TOPLAM
                                HARCAMA</span>
                            <strong class="d-block mt-2">$0.00</strong>
                        </div>
                        <div class="col">
                            <span class="d-block text-uppercase text-primary fs-xs">FATURALANABİLİR
                                HARCAMALAR</span>
                            <strong class="d-block mt-2">$0.00</strong>
                        </div>
                        <div class="col">
                            <span class="d-block text-uppercase text-secondary fs-xs">TOPLAM
                                HARCAMA</span>
                            <strong class="d-block mt-2">$0.00</strong>
                        </div>
                        <div class="col">
                            <span class="d-block text-uppercase text-success fs-xs">FATURALANAN
                                HARCAMALAR</span>
                            <strong class="d-block mt-2">$0.00</strong>
                        </div>
                        <div class="col">
                            <span class="d-block text-uppercase text-danger fs-xs">FATURALANMAYAN
                                HARCAMALAR</span>
                            <strong class="d-block mt-2">$0.00</strong>
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-white">
                    <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
                        :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles"
                        :width="width" :height="height" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VueEllipseProgress } from "vue-ellipse-progress";
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
        VueEllipseProgress,
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
            default: 300
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
            chartData: {
                labels: [
                    '29-Pazartesi',
                    '30-Salı',
                    '31-Çarşamba',
                    '01-Perşembe',
                    '02-Cuma',
                    '03-Cumartesi',
                    '04-Pazar'
                ],
                datasets: [
                    {
                        label: 'Girilen Süreler',
                        backgroundColor: '#35baf6',
                        data: ['0.6','1.2','1.8','2.4','3.0','3.6','4.2']
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    }
}
</script>
<style scoped lang="scss">
.avatar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    .avatar-img {
        height: 32px;
        width: 32px;
        border-radius: 50%;
        overflow: hidden;
    }

    .avatar-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;

        .name {
            font-size: 12px;
            font-weight: 500;
            color: royalblue;
        }

        small {
            font-size: 10px;
        }
    }
}

.bar-area {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.list-group {
    .list-group-item {
        columns: 2;
        font-size: 14px;

        strong {
            font-size: 13px;
        }

        span {
            display: block;
            font-size: 13px;
        }
    }
}

.justify-content-between {
    gap: 0.5rem;
}
</style>