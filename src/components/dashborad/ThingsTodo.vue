<template>
    <div class="card border-0">
        <div class="card-header bg-white">
            <span class="fs-xs">Yapılacak İşlerim</span>
            <div class="btn-group">
                <button class="btn btn-sm btn-link">Yeni İş</button>
                <button class="btn btn-sm btn-link">Hepsini Görüntüle</button>
            </div>
        </div>
        <div class="card-body p-3">
            <div class="todo-list">
                <div class="todo-list__todo">
                    <div class="title text-danger"><i class="fas fa-exclamation-triangle"></i>Yapılacaklar Listesi</div>
                    <small class="text-secondary my-4">Yapılacaklar Listesi Boş. Çalışmıyorsun galiba =)</small>
                </div>
                <div class="todo-list__finished">
                    <div class="title text-success"><i class="fas fa-check"></i>Bitmiş İşler Listesi</div>
                     <small class="text-secondary my-4">Bitmiş İşler Listesi Boş. Aferin ;)</small>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
<style lang="scss">
.fs-xs {
    font-size: 13px;
}

.btn-sm {
    font-size: 13px;
}

.btn-link {
    text-decoration: none !important;
    color: #0d6efd !important;
}

.todo-list {
    &__todo {
        .title {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-size: 13px;
            gap: 8px;
            font-weight: 500;
            padding: 22px 0;
        }
    }

    &__finished {
        .title {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-size: 13px;
            gap: 8px;
            font-weight: 500;
            padding: 22px 0;
        }
    }
}
</style>