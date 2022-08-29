<template>
    <b-container fluid class="mt-3">
        <div class="card border-0 fixed-end">
            <div class="card-header bg-white">
                <span class="text-secondary fs-5">Profil</span>
            </div>
            <div class="card-body">
                <b-tabs content-class="mt-3">
                    <b-tab active>
                        <template #title>
                            <span class="fs-xs">Müşteri Bilgileri</span>
                        </template>
                        <div class="card border-0 p-2">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">* Firma</label>
                                        <input type="text" v-model="customer.company" class="form-control">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">* Vergi Numarası</label>
                                        <input type="text" class="form-control" v-model="customer.tax_number">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Telefon</label>
                                        <input type="phone" class="form-control" v-model="customer.phone">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Web Sitesi</label>
                                        <input type="text" class="form-control" v-model="customer.website">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Gruplar</label>
                                        <select class="form-select" v-model="customer.groups">
                                            <option selected>Seçim Yapılmadı</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Para Birimi</label>
                                        <select class="form-select" v-model="customer.currency_unit">
                                            <option selected>Sitem Varsayılanı</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <!-- <b-dropdown class="dropdown-from" variant="outline-light">
                                            <template #button-content>
                                                <span>Sistem Varsayılanı</span>
                                            </template>
                                            <input type="text" class="form-control mb-1 form-control-sm">
                                            <b-dropdown-item>TL</b-dropdown-item>
                                            <b-dropdown-item>USD</b-dropdown-item>
                                            <b-dropdown-item>EUR</b-dropdown-item>
                                        </b-dropdown> -->
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Dil</label>
                                        <select class="form-select" v-model="customer.language">
                                            <option selected>Sitem Varsayılanı</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Adres</label>
                                        <textarea class="form-control" rows="3" v-model="customer.address"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Şehir</label>
                                        <input type="text" v-model="customer.city" class="form-control">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">İlçe</label>
                                        <input type="text" v-model="customer.district" class="form-control">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Posta Kodu</label>
                                        <input type="text" v-model="customer.post_code" class="form-control">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Ülke</label>
                                        <select class="form-select" v-model="customer.country">
                                            <option selected>Seçim Yapılmadı</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab>
                        <template #title>
                            <span class="fs-xs">Faturalama & Kargo</span>
                        </template>
                        <div class="card border-0">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card border-0">
                                        <div class="card-header bg-white">
                                            <h6>Fatura Adresi</h6>
                                            <span @click="copyCustomer">Müşteri Bilgileri ile Aynı</span>
                                        </div>
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <label class="form-label">Adres</label>
                                                <textarea class="form-control" rows="3"
                                                    v-model="customer.billing_address.address"></textarea>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Şehir</label>
                                                <input type="text" class="form-control"
                                                    v-model="customer.billing_address.city">
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">İlçe</label>
                                                <input type="text" class="form-control"
                                                    v-model="customer.billing_address.district">
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Posta
                                                    Kodu</label>
                                                <input type="text" class="form-control"
                                                    v-model="customer.billing_address.post_code">
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Ülke</label>
                                                <select class="form-select" v-model="customer.billing_address.country">
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
                                            <h6>Kargo Adresi</h6>
                                            <span @click="copyInvoice">Fatura Adresini Kopyala</span>
                                        </div>
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <label class="form-label">Adres</label>
                                                <textarea class="form-control" rows="3"
                                                    v-model="customer.cargo_address.address"></textarea>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Şehir</label>
                                                <input type="text" class="form-control"
                                                    v-model="customer.cargo_address.city">
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">İlçe</label>
                                                <input type="text" class="form-control"
                                                    v-model="customer.cargo_address.district">
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Posta
                                                    Kodu</label>
                                                <input type="text" class="form-control"
                                                    v-model="customer.cargo_address.post_code">
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Ülke</label>
                                                <select class="form-select" v-model="customer.cargo_address.country">
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
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
            <div class="card-footer fixed-footer bg-white">
                <button class="btn btn-primary btn-m">Kaydet</button>
                <button class="btn btn-primary btn-m">Kaydet Ve Kişi Oluştur</button>
            </div>
        </div>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            customer: {
                company: '',
                tax_number: '',
                phone: '',
                website: '',
                groups: [],
                currency_unit: '',
                language: '',
                address: '',
                city: '',
                district: '',
                post_code: '',
                country: '',
                billing_address: {
                    address: '',
                    city: '',
                    district: '',
                    post_code: '',
                    country: '',
                },
                cargo_address: {
                    address: '',
                    city: '',
                    district: '',
                    post_code: '',
                    country: '',
                }
            }
        }
    },
    methods: {
        copyCustomer() {
            this.customer.billing_address.address = this.customer.address
            this.customer.billing_address.city = this.customer.city
            this.customer.billing_address.district = this.customer.district
            this.customer.billing_address.post_code = this.customer.post_code
            this.customer.billing_address.country = this.customer.country
        },
        copyInvoice() {
            this.customer.cargo_address.address = this.customer.billing_address.address
            this.customer.cargo_address.city = this.customer.billing_address.city
            this.customer.cargo_address.district = this.customer.billing_address.district
            this.customer.cargo_address.post_code = this.customer.billing_address.post_code
            this.customer.cargo_address.country = this.customer.billing_address.country
        }
    },

    beforeRouteLeave(to, from, next) {
        this.$bvModal.msgBoxConfirm('Kaydetmediğiniz değişiklikler olabilir.', {
            title: 'Uyarı',
            size: '',
            buttonSize: 'sm',
            okVariant: 'danger',
            okTitle: 'Çık',
            cancelTitle: 'İptal',
            footerClass: 'p-2',
            hideHeaderClose: false,
            centered: true
        })
            .then(value => {
                value && next()
            })
    }

}
</script>
<style lang="scss">
.dropdown-from {
    width: 100%;

    .dropdown-toggle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #ced4da;
        font-size: 14px;
    }

    .dropdown-menu {
        width: 100%;
        font-size: 14px;
        padding: 6px;
    }
}
</style>

<style lang="scss" scoped>
.btn-m {
    font-size: 14px;
    text-transform: uppercase;
}

.fixed-end {
    padding-bottom: 64px;
}

.fixed-footer {
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 22px;
    padding-left: 32px;
    padding-right: 32px;
    right: 0;
    left: 0;
    width: 100%;
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        color: #888;
        font-size: 13px;
        cursor: pointer;
    }
}

.form-control,
.form-select {
    font-size: 14px;
}

label {
    font-size: 13px;
}
</style>