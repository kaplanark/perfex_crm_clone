<template>
    <b-container fluid class="mt-3">
        <div class="card border-0 bg-transparent fixed-end">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-7">
                        <div class="card bg-white border-0">
                            <div class="card-header bg-white">
                                <span class="fs-6">Yeni Proje Ekle</span>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label class="form-label">* Proje Adı</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">* Müşteri</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input bg-success" type="checkbox" value="" id="check1"
                                        checked>
                                    <label class="form-check-label" for="check1">
                                        İlerleme durumunu görevlere göre hesapla
                                    </label>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">İlerleme 0%</label>
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar"
                                            aria-label="Basic example" aria-valuenow="75" aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">* Faturalama Türü</label>
                                                <select class="form-select">
                                                    <option selected>Seçim Yapılmadı</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Tahmini Saatler</label>
                                                <input type="text" class="form-control">
                                            </div>
                                            <div class="mb-3">
                                                <label for="start-datepicker">* Başlangıç Tarihi</label>
                                                <b-form-datepicker id="start-datepicker" v-model="today" class="mb-2"
                                                    :min="min" :max="max">
                                                </b-form-datepicker>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Durum</label>
                                                <select class="form-select">
                                                    <option selected>Devam Eden</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Proje Üyeleri</label>
                                                <select class="form-select">
                                                    <option selected>Test Üye</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="mb-3">
                                                <label for="edn-datepicker">Bitiş Tarihi</label>
                                                <b-form-datepicker id="end-datepicker" v-model="value" class="mb-2">
                                                </b-form-datepicker>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="tags-basic"><i class="fas fa-tag"></i> Etiketler</label>
                                    <b-form-tags input-id="tags-basic" v-model="tags" tag-variant="primary">
                                    </b-form-tags>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Proje Açıklaması</label>
                                    <div class="shadow">
                                        <VueEditor v-model="htmlForEditor" />
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-white">
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="checkbox" value="" id="check2">
                                    <label class="form-check-label" for="check2">
                                        Proje oluşturuldu e-postası gönder
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="card bg-white border-0">
                            <div class="card-header bg-white">
                                <span class="fs-6">Proje Ayarları</span>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label class="form-label">* Send contacts notifications</label>
                                    <select class="form-select">
                                        <option selected>To all contacts with notifications for projects enabled
                                        </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Sekmeleri Göster</label>
                                    <select class="form-select">
                                        <option selected></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check11"
                                                    checked>
                                                <label class="form-check-label" for="check11">
                                                    Görevleri Görüntüleme için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check12"
                                                    checked>
                                                <label class="form-check-label" for="check12">
                                                    Görev Yarat için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check13"
                                                    checked>
                                                <label class="form-check-label" for="check13">
                                                    Görevleri düzenle (yalnızca kişi tarafından oluşturulan görevler)
                                                    için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check14"
                                                    checked>
                                                <label class="form-check-label" for="check14">
                                                    Proje görevlerine yorum yapma için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check15"
                                                    checked>
                                                <label class="form-check-label" for="check15">
                                                    Görev Yorumlarını görmek için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check16"
                                                    checked>
                                                <label class="form-check-label" for="check16">
                                                    Görev Eklerini görmek için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check17"
                                                    checked>
                                                <label class="form-check-label" for="check17">
                                                    Görev Yapılacak Listesini görmek için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check18"
                                                    checked>
                                                <label class="form-check-label" for="check18">
                                                    Göreve dosya göndermek için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check19"
                                                    checked>
                                                <label class="form-check-label" for="check19">
                                                    Girilen toplam görev süresi için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check20"
                                                    checked>
                                                <label class="form-check-label" for="check20">
                                                    Finansal Görünüme Bakın için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check21"
                                                    checked>
                                                <label class="form-check-label" for="check21">
                                                    Dosya yükleme için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check22"
                                                    checked>
                                                <label class="form-check-label" for="check22">
                                                    Açık Tartışmalar için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check23"
                                                    checked>
                                                <label class="form-check-label" for="check23">
                                                    Fazları Görüntüleme için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check24"
                                                    checked>
                                                <label class="form-check-label" for="check24">
                                                    Gantt Görüntüleme için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check25"
                                                    checked>
                                                <label class="form-check-label" for="check25">
                                                    Zaman Çizelgelerini Görüntüleme için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check26"
                                                    checked>
                                                <label class="form-check-label" for="check26">
                                                    Aktivite Loglarını Görüntüleme için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check27"
                                                    checked>
                                                <label class="form-check-label" for="check27">
                                                    Takım Üyelerini Görüntüleme için müşteriye izin ver
                                                </label>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="check28">
                                                <label class="form-check-label" for="check28">
                                                    Ana görevler tablosunda proje görevlerini gizle (admin area)
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer fixed-footer bg-white">
                <button class="btn btn-primary btn-m">Kaydet</button>
            </div>
        </div>
    </b-container>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
    components: { VueEditor },
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
            htmlForEditor: "",
            today: today,
            value: '',
            tags: [],
            min: minDate,
            max: maxDate
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
<style scoped>
.btn-m {
    font-size: 14px;
    text-transform: uppercase;
}

label {
    font-size: 13px;
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

.form-control,
.form-select {
    font-size: 14px;
}
</style>
<style>
.btn-danger,
.btn-success,
.btn-secondary{
    color: #fff;
}
</style>