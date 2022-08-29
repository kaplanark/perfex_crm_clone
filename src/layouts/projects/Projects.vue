<template>
    <b-container fluid class="mt-3">
        <div class="card border-0 bg-white p-2">
            <div class="card-header bg-white">
                <div class="btn-list">
                    <router-link tag="button" to="/projects/project" class="btn btn-primary fs-s">Yeni Proje</router-link>
                    <router-link tag="button" to="/projects/filter" class="btn btn-secondary fs-s">
                        <i class="fas fa-align-left"></i>
                    </router-link>
                </div>
                <b-dropdown id="dropdown-right" variant="outline-primary btn-sm">
                    <template #button-content>
                        <span><i class="fas fa-filter"></i></span>
                    </template>
                    <b-dropdown-item href="#">An item</b-dropdown-item>
                    <b-dropdown-item href="#">Another item</b-dropdown-item>
                </b-dropdown>
            </div>
            <div class="card-body">
                <h6 class="mb-2">Proje Özeti</h6>
                <div class="stat-boxs">
                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-xs text-secondary">Başlamadı</span>
                    </div>
                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-xs text-primary">Devam Eden</span>
                    </div>

                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-xs text-danger">Beklemede</span>
                    </div>

                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-xs text-secondary">İptal Edildi</span>
                    </div>

                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-xs text-success">Tamamlandı</span>
                    </div>
                </div>
            </div>
            <div class="card-footer bg-white">
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
            selected:[],
            search: '',
            appearance: 'Bu Ay',
            headers: [
                {
                    text: '#',
                    align: 'start',
                    sortable: false,
                    value: 'index',
                },
                { text: 'Proje Adı', value: 'project_name' },
                { text: 'Müşteri', value: 'customer' },
                { text: 'Etiketier', value: 'tickets' },
                { text: 'Başlangıç Tarihi', value: 'start_date' },
                { text: 'Bitiş Tarihi', value: 'finised_date' },
                { text: 'Proje Üyeleri', value: 'project_members' },
                { text: 'Durum', value: 'situation' },
            ],
            desserts: [
                {
                    index: 1,
                    project_name:'Test Proje',
                    customer: 'Test Müşteri',
                    tickets: 'Hazır',
                    start_date: '02.03.2020',
                    finised_date: '02.03.2022',
                    project_members: 'Test',
                    situation: 'Aktif',
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

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
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