<template>
    <div class="card border-0">
        <div class="card-header border-0 bg-white">
            <small>Görev Bulunamadı</small>
        </div>
        <div class="card-header d-flex justify-content-end border-0 bg-white">
            <div class="select-list">
                <select class="form-select form-select-sm">
                    <option selected>Tümü</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select form-select-sm">
                    <option selected>Fazlar</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .select-list{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: fit-content;
        .form-select{
            min-width: 200px;
        }
    }
</style>