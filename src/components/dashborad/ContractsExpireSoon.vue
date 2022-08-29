<template>
    <div class="card border-0">
        <div class="card-header bg-white">
            <span>Yakında Bitecek Sözleşmeler</span>
        </div>
        <div class="card-body">
            <div class="card-boyd__nodata">
                <span class="text-secondary"><i class="fas fa-check"></i></span>
                <h6 class="text-secondary">Önümüzdeki 7 gün içinde süresi bitecek sözleşme yok.</h6>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.card-header{
    span{
        font-size: 13px;
    }
}
.card-boyd__nodata{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    i{
        font-size: 32px;
    }
}
</style>