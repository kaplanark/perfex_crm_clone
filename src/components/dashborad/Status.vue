<template>
    <div class="card border-0 p-2">
        <div class="card-body">
            <div class="row">
                <div class="col-md-4">
                    <div class="card border-0">
                        <div class="card-header px-0 bg-white">
                            <div class="fs-s text-uppercase">FATURALARIN DURUMU</div>
                        </div>
                        <div class="card-body px-0 ">
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-secondary">1 Taslak</span>
                                    <small>%10</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="10" variant="secondary"></b-progress>
                                </div>
                            </div>
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-secondary">3 Gönderilmedi</span>
                                    <small>%30</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="30" variant="secondary"></b-progress>
                                </div>
                            </div>
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-danger">2 Ödenmedi</span>
                                    <small>%20</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="20" variant="danger"></b-progress>
                                </div>
                            </div>
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-warning">7 Kısmen ödendi</span>
                                    <small>%70</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="70" variant="warning"></b-progress>
                                </div>
                            </div>
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-warning">3 Zamanı Geçti</span>
                                    <small>%30</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="30" variant="warning"></b-progress>
                                </div>
                            </div>
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-success">5 Ödendi</span>
                                    <small>%50</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="50" variant="success"></b-progress>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0">
                        <div class="card-header bg-white px-0">
                            <div class="fs-s text-uppercase">PROFORMALARIN DURUMU</div>
                        </div>
                        <div class="card-body px-0 ">
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-secondary">1 Taslak</span>
                                    <small>%10</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="10" variant="secondary"></b-progress>
                                </div>
                            </div>
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-secondary">3 Gönderilmedi</span>
                                    <small>%30</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="30" variant="secondary"></b-progress>
                                </div>
                            </div>
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-danger">2 Ödenmedi</span>
                                    <small>%20</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="20" variant="danger"></b-progress>
                                </div>
                            </div>
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-warning">7 Kısmen ödendi</span>
                                    <small>%70</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="70" variant="warning"></b-progress>
                                </div>
                            </div>
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-warning">3 Zamanı Geçti</span>
                                    <small>%30</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="30" variant="warning"></b-progress>
                                </div>
                            </div>
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-success">5 Ödendi</span>
                                    <small>%50</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="50" variant="success"></b-progress>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0">
                        <div class="card-header bg-white px-0">
                            <div class="fs-s text-uppercase">TEKLİFLERİN DURUMU</div>
                        </div>
                        <div class="card-body px-0 ">
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-secondary">1 Taslak</span>
                                    <small>%10</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="10" variant="secondary"></b-progress>
                                </div>
                            </div>
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-secondary">3 Gönderilmedi</span>
                                    <small>%30</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="30" variant="secondary"></b-progress>
                                </div>
                            </div>
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-danger">2 Ödenmedi</span>
                                    <small>%20</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="20" variant="danger"></b-progress>
                                </div>
                            </div>
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-warning">7 Kısmen ödendi</span>
                                    <small>%70</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="70" variant="warning"></b-progress>
                                </div>
                            </div>
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-warning">3 Zamanı Geçti</span>
                                    <small>%30</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="30" variant="warning"></b-progress>
                                </div>
                            </div>
                            <div class="bar-box mb-3">
                                <div class="bar-box__title">
                                    <span class="text-success">5 Ödendi</span>
                                    <small>%50</small>
                                </div>
                                <div class="bar-box__bar">
                                    <b-progress height="6px" :value="50" variant="success"></b-progress>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer bg-white pt-4 pb-3">
            <div class="row">
                <div class="col-md-4">
                    <div class="card py-3 px-2 shadow-sm payment-card">
                        <div class="pay">$0.00</div>
                        <span class="text-danger">Ödenmemiş Faturalar</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card py-3 px-2 shadow-sm payment-card">
                        <div class="pay">$0.00</div>
                        <span class="text-danger">Süresi Geçmiş Faturalar</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card py-3 px-2 shadow-sm payment-card">
                        <div class="pay">$0.00</div>
                        <span class="text-success">Ödenmiş Faturalar</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.payment-card {
    display: flex;
    align-items: center;
    justify-content: center;

    .pay {
        font-size: 20px;
        font-weight: 500;
        color: gray;
    }

    span {
        font-size: 13px;
    }
}

.bar-box {
    &__title {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        text-transform: uppercase;
        margin-bottom: 4px;

        span {
            font-size: 13px;
        }

        small {
            font-size: 12px;
        }
    }
}
</style>