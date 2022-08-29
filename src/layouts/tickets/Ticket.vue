<template>
    <b-container fluid class="mt-3">
        <div class="card border-0 bg-transparent p-2 fixed-end">
            <div class="card-body bg-white rounded">
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-2">
                            <button class="btn btn-outline-secondary btn-sm btn-pers"
                                @click="personal_support = !personal_support">
                                <span v-if="personal_support">
                                    <i class="fas fa-envelope"></i>
                                    <span>Desteğe Personel Atanmamış</span>
                                </span>
                                <span v-else>
                                    <i class="fas fa-user"></i>
                                    <span>Desteğe Personel Atanmış</span>
                                </span>
                            </button>
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Konu</label>
                            <input type="text" class="form-control">
                        </div>
                        <transition name="slide" appear>
                            <div class="mb-2" v-show="personal_support">
                                <label class="form-label">Kişi</label>
                                <select class="form-select">
                                    <option selected>Seçim Yapılmadı</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </transition>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-2">
                                    <label class="form-label">Kime</label>
                                    <input type="text" class="form-control"
                                        :disabled="personal_support ? '' : disabled">
                                </div>
                                <div class="mb-2">
                                    <label class="form-label">Bölüm</label>
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
                                    <label class="form-label">Eposta Adresi</label>
                                    <input type="email" class="form-control"
                                        :disabled="personal_support ? '' : disabled">
                                </div>
                                <div class="mb-2">
                                    <label class="form-label">CC</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-2">
                            <label for="tags-basic"><i class="fas fa-tag"></i> Etiketler</label>
                            <b-form-tags input-id="tags-basic" v-model="value" placeholder="Etiket"></b-form-tags>
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Talebi Ata (Varsayılan mevcut kullanıcıya)</label>
                            <select class="form-select">
                                <option selected>Seçim Yapılmadı</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-2">
                                    <label class="form-label">Öncelik</label>
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
                                    <label class="form-label">Hizmet</label>
                                    <select class="form-select">
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
            <div class="card bg-white mt-4 border-0">
                <div class="card-header">
                    <span class="fs-7">Talebin Açıklaması</span>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-2">
                                <label class="form-label">Ön Tanıtım Yanıtı Ekle</label>
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
                                <label class="form-label">Bilgi Merkezi Makale Linki Ekle</label>
                                <select class="form-select">
                                    <option selected>Seçim Yapılmadı</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <VueEditor v-model="htmlForEditor"></VueEditor>
                        </div>
                    </div>
                </div>
                <div class="card-footer fixed-end">
                    <div class="mb-2">
                        <label for="formFile" class="form-label">Dosyalar</label>
                        <input class="form-control" type="file" id="formFile" multiple>
                    </div>
                </div>
            </div>
            <div class="card-footer bg-white fixed-footer">
                <button class="btn btn-primary fs-sm text-uppercase">Destek Açın</button>
            </div>
        </div>
    </b-container>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
    components: { VueEditor },
    data() {
        return {
            value: [],
            htmlForEditor: "",
            personal_support: true,
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
<style>
.slide-enter-active {
    transition: all .3s ease;
}

.slide-leave-active {
    transition: all .3s;
}

.slide-enter,
.slide-leave-to {
    transform: translateY(10px);
    opacity: 0;
}
</style>

<style scoped>
.fs-sm {
    font-size: 14px;
}

label {
    font-size: 13px;
}

.form-select,
.form-control {
    font-size: 14px;
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

.btn-pers span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}
</style>