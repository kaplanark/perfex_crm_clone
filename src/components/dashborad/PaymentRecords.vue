<template>
    <div class="card border-0">
        <div class="card-header bg-white">
            <span class="fs-xs">Ödeme Kayıtları</span>
            <div class="btn-group">
                <b-dropdown id="dropdown-left" :text="appearance" variant="link" size="sm">
                    <b-dropdown-item @click="appearance='Ay'">Ay</b-dropdown-item>
                    <b-dropdown-item @click="appearance='Yıl'">Yıl</b-dropdown-item>
                </b-dropdown>
                <button class="btn fs-xs btn-link">Tam Rapor</button>
            </div>
        </div>
        <div class="card-body">
            <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
                :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles"
                :width="width" :height="height" />
        </div>
    </div>
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
    name: 'BarChart',
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
            appearance:'Hafta',
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
                        label: 'Bu Haftanın Ödemeleri',
                        backgroundColor: '#d3ebd3',
                        data: [40, 20, 12, 39, 10, 40, 39]
                    },
                    {
                        label: 'Geçen Haftanın Ödemeleri',
                        backgroundColor: '#e29ed4',
                        data: [20, 30, 32, 19, 50, 70, 59]
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
<style scoped>
.btn-outline-primary{
    font-size: 14px !;
}
.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
<style>
.fs-xs {
    font-size: 14px;
}
</style>
