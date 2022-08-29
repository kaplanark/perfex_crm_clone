<template>
    <b-container fluid class="mt-3">
        <div class="card border-0 bg-white">
            <div class="card-header bg-white">
                <h6 class="mb-4 text-start">Destek Talepleri Özet Tablosu</h6>
                <div class="stat-boxs">
                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-xs text-danger">Açık</span>
                    </div>
                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-xs text-success">Devam Eden</span>
                    </div>

                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-xs text-primary">Cevaplandı</span>
                    </div>

                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-xs text-secondary">Beklemede</span>
                    </div>

                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-xs text-info">Kapalı</span>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="btn-list">
                    <button class="btn btn-primary fs-s">Yeni Talep
                    </button>
                </div>
            </div>
            <div class="card-footer bg-white border-0">
                <v-data-table :headers="headers" :items="desserts" multi-sort class="elevation-1" :search="search">
                    <template v-slot:top>
                        <div class="card border-0 table-top-card my-2">
                            <div class="btn-group">
                                <b-dropdown id="dropdown-left" text="Tümü" variant="outline-primary" size="sm">
                                    <b-dropdown-item>10</b-dropdown-item>
                                    <b-dropdown-item>20</b-dropdown-item>
                                </b-dropdown>
                                <button class="btn btn-outline-primary btn-sm">Dışa Aktar</button>
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
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            selected: [],
            search: '',
            appearance: 'Bu Ay',
            headers: [
                {
                    text: '#',
                    align: 'start',
                    sortable: false,
                    value: '0',
                },
                { text: 'Konu', value: '1' },
                { text: 'Etikeler', value: '2' },
                { text: 'Bölüm', value: '3' },
                { text: 'Hizmet', value: '4' },
                { text: 'Müşteri', value: '5' },
                { text: 'Durum', value: '6' },
                { text: 'Öncelik', value: '7' },
                { text: 'Son Yanıtlama', value: '8' },
                { text: 'Oluşturma Tarihi', value: '9' },
            ],
            desserts: [
                {
                    0:'',
                    1: '',
                    2: '',
                    3: '',
                    4: '',
                    5: '',
                    6: '',
                    7: '',
                    8: '',
                    9: '',
                }
            ],
        }
    }
}
</script>
<style scoped lang="scss">
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

.customer-box {
    padding: 12px 0;

    h5 {
        font-size: 24px;
    }

    span {
        font-weight: 500;
    }

    &:not(:last-child) {
        border-right: 1px solid rgb(208, 208, 208);
    }
}
</style>
<style lang="scss">
.btn-list {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
}

.fs-s {
    font-size: 13px;
    text-transform: uppercase;
}
</style>