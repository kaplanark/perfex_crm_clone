<template>
    <div class="card border-0">
        <div class="card-header border-0 bg-white p-0">
            <select name="" id="" class="form-select form-select-sm">
                <option value="">Bu Ay</option>
            </select>
            <div class="btn-list">
                <button class="btn btn-light border btn-sm"><i class="fas fa-print"></i></button>
                <button class="btn btn-light border btn-sm"><i class="fas fa-file-pdf"></i></button>
                <button class="btn btn-light border btn-sm"><i class="fas fa-envelope"></i></button>
            </div>
        </div>
        <div class="card-text my-3">
            Test firma Hesap Özeti Müşteri Bildirimi
        </div>
        <div class="card-body border rounded">
            <div class="card border-0">
                <div class="card-header bg-white py-3">

                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-7">
                            <p class="fs-xs">Firma Bilgileri:</p>
                            <p class="fs-xs">Test firma</p>
                            <p class="fs-xs">Vergi Numarası: wedwed</p>
                        </div>
                        <div class="col-md-5">
                            <div class="text d-flex flex-column align-items-end">
                                <p><strong class="float-end">Hesap Özeti</strong></p>
                                <p class="fs-xs text-secondary">2022-08-01 To 2022-08-31</p>
                            </div>
                            <hr>
                            <ul class="list-group">
                                <li class="list-group-item border-0 fs-xs d-flex justify-content-between">Devir
                                    Bakiyesi: <span>$00</span></li>
                                <li class="list-group-item border-0 fs-xs d-flex justify-content-between">
                                    Faturalandırılan Tutar: <span>$00</span></li>
                                <li class="list-group-item border-0 fs-xs d-flex justify-content-between">Ödenen Miktar:
                                    <span>$00</span>
                                </li>
                                <hr>
                                <li class="list-group-item border-0 fs-xs d-flex justify-content-between"><strong>Bakiye
                                        dengesi:</strong> <span>$00</span></li>
                            </ul>
                        </div>
                        <div class="col-md-12">
                            <strong class="d-block fs-xs w-100 text-center">2022-08-01 ile 2022-08-31 arasındaki tüm
                                faturaları ve ödemeleri gösteriliyor</strong>
                        </div>
                        <div class="col-md-12">
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Tarih</th>
                                        <th scope="col">İşlem Açıklama</th>
                                        <th scope="col">Tutar</th>
                                        <th scope="col">Ödeme</th>
                                        <th scope="col">Bakiye</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">12.12.2022</th>
                                        <td>Devir Bakiyesi</td>
                                        <td>0.00</td>
                                        <td></td>
                                        <td>0.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td colspan="2">Bakiye dengesi</td>
                                        <td></td>
                                        <td>0.0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
table {
    font-size: 13px;
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.form-select {
    font-size: 14px;
    max-width: 300px;
}

.btn-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
}
</style>