<template>
    <b-container fluid class="mt-3">
        <div class="card border-0 bg-white p-2">
            <div class="card-header bg-white">
                <div class="btn-list">
                    <router-link tag="button" to="/customers/customer" class="btn btn-primary fs-s">Yeni Müşteriler</router-link>
                    <router-link tag="button" to="/customers/import" class="btn btn-primary fs-s">Müşterileri İçe Aktar</router-link>
                    <router-link tag="button" to="/customers/allcontacts" class="btn btn-primary fs-s">Kişiler
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
                <h6 class="mb-2">Müşteri Özeti</h6>
                <div class="stat-boxs">
                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-xs">Toplam Müşteri</span>
                    </div>
                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-xs text-success">Aktif Müşteriler</span>
                    </div>

                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-xs text-danger">Pasif Müşteriler</span>
                    </div>

                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-xs text-primary">Aktif Kişiler</span>
                    </div>

                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-xs text-danger">Pasif Kişiler</span>
                    </div>

                    <div class="customer-box">
                        <h5><strong>0</strong></h5>
                        <span class="fs-xs text-secondary">Bugün Giriş Yapan Kişiler</span>
                    </div>
                </div>
            </div>
            <div class="card-footer bg-white">
                <div class="form-check my-4">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label fs-xs" for="flexCheckDefault">
                        Aktif Olmayanları Dahil Etme Müşteriler
                    </label>
                </div>
                <v-data-table :headers="headers" :items="desserts" multi-sort class="elevation-1" :search="search" v-model="selected" show-select>
                    <template v-slot:top>
                        <div class="card border-0 table-top-card my-2">
                            <div class="btn-group">
                                <b-dropdown id="dropdown-left" text="Tümü" variant="outline-primary" size="sm">
                                    <b-dropdown-item>10</b-dropdown-item>
                                    <b-dropdown-item>20</b-dropdown-item>
                                </b-dropdown>
                                <button class="btn btn-outline-primary btn-sm">Dışa Aktar</button>
                                <button class="btn btn-outline-primary btn-sm">Toplu İşlemler</button>
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
                { text: 'Firma', value: 'company' },
                { text: 'Birincil Kişi', value: 'first_contact' },
                { text: 'Birincil Epost Adresi', value: 'first_email' },
                { text: 'Telefon', value: 'phone' },
                { text: 'Aktif', value: 'active' },
                { text: 'Gruplar', value: 'groups' },
                { text: 'Oluşturma Tarihi', value: 'create_date' },
            ],
            desserts: [
                {
                    index: 1,
                    company:'Test',
                    first_contact: 'Test Contact',
                    first_email: 'test@gmail.com',
                    phone: '444322434',
                    active: 1,
                    groups: 'Test',
                    create_date: '01.01.2020',
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