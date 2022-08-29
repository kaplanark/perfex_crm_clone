<template>
    <b-container fluid class="mt-3">
        <div class="card border-0">
            <div class="card-header border-0 bg-white">
                <span class="fs-5">Filtrele</span>
                <div class="row">
                    <div class="col-md-4">
                        <select class="form-select form-select-sm">
                            <option selected>Tümü</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <select class="form-select form-select-sm">
                            <option selected>Proje Üyesi</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-secondary btn-sm text-uppercase">uygula</button>
                    </div>
                </div>
            </div>
            <div class="card-footer bg-white border-0">
                <small class="text-secondary">Görev Bulunamadı</small>
            </div>
        </div>
    </b-container>
</template>
<script>
export default {

}
</script>