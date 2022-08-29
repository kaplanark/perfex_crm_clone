<template>
    <b-container fluid class="mt-3">
        <div class="card border-0">
            <div class="card-header bg-white">
                <button class="btn btn-success btn-sm">Donload Sample</button>
            </div>
            <div class="card-body bg-white py-4">
                <ol>
                    <li>
                        Your CSV data should be in the format below. The first line of your CSV file should be the
                        column headers as in the table example. Also make sure that your file is UTF-8 to avoid
                        unnecessary encoding problems.
                    </li>
                    <li>
                        If the column you are trying to import is date make sure that is formatted in format Y-m-d
                        (2022-08-25).
                    </li>
                    <li>
                        Make sure you configure the default contact permission in Setup->Settings->Customers to get the
                        best results like auto assigning contact permissions and email notification settings based on
                        the permission.
                    </li>
                    <li class="text-danger">
                        Duplicate email rows won't be imported.
                    </li>
                </ol>
            </div>
            <div class="card-footer bg-white border-0">
                <div class="row">
                    <div class="col-md-5">
                        <div class="mb-3">
                            <label class="form-label">* CSV Dosyası Seç</label>
                            <input type="file" class="form-control form-control-sm">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Gruplar</label>
                            <select class="form-select form-select-sm" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tüm Kişiler İçin Varsayılan Parola</label>
                            <input type="text" class="form-control form-control-sm">
                        </div>
                        <div class="mb-3">
                            <button class="btn btn-sm btn-primary me-2">İçe Arktar</button>
                            <button class="btn btn-sm btn-primary">İçe Arktarmayı Simüle Et</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </b-container>
</template>

<style scoped lang="scss">
.btn-sm{
    text-transform: uppercase;
}
label{
    font-size: 13px;
}
ol {
    li {
        font-size: 13px;
    }
}
</style>