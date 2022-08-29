<template>
    <div class="card border-0">
        <div class="card-header border-0 bg-white">
            <div class="row">
                <div class="col-md-12">
                    <div class="btn-list">
                        <button class="btn btn-primary btn-sm text-uppercase">
                            yeni görev
                        </button>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="mb-2">
                        <label><strong class="fs-xs">İlişki: </strong></label>
                        <div class="form-check-group">
                            <div class="form-check" v-for="(check, index) in checks" :key="index">
                                <input class="form-check-input" type="checkbox" value="" :id="'fc' + index">
                                <label class="form-check-label" :for="'fc' + index">
                                    {{ check }}
                                </label>
                            </div>
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
            checks: [
                'Müşteri',
                'Projeler',
                'Faturalar',
                'Proformlar',
                'Sözleşmeler',
                'Talepler',
                'Harcamalar',
                'Teklifler'
            ],
            search: '',
            appearance: 'Bu Ay',
            headers: [
                {
                    text: '#',
                    align: 'start',
                    sortable: false,
                    value: '1',
                },
                { text: 'Adı', value: '2' },
                { text: 'Durumu', value: '3' },
                { text: 'Başlangıç Tarihi', value: '4' },
                { text: 'Bitiş Tarihi', value: '5' },
                { text: 'Atanan', value: '6' },
                { text: 'Etiket', value: '7' },
                { text: 'Öncelik', value: '7' },
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
.form-check-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
}
.form-check-label{
    font-size: 14px;
}
.input-group {
    width: fit-content;
}
</style>