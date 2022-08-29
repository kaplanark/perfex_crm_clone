<template>
    <div class="card border-0">
        <div class="card-header border-0 bg-white">
            <button class="btn btn-primary btn-sm text-uppercase add-btn">
                <i class="fas fa-lock"></i>
                <div>sunucu ekle</div>
            </button>
        </div>
        <div class="card-body">
            <div class="alert alert-info py-2 my-1 text-center w-100" role="alert">
                Bu müşteri için Kasa kayıtları bulunamadı.
            </div>
        </div>
    </div>
</template>
<style scoped>
.add-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
}
</style>