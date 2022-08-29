<template>
    <b-container fluid class="mt-3">
        <div class="card todo-card">
            <div class="card-header bg-white">
                <button class="btn btn-primary" @click="todo_modal = !todo_modal">Yeni İş</button>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card rounded-0 shadow-sm">
                            <div class="card-header bg-danger rounded-0">
                                <div class="card-header__content">
                                    <i class="fas fa-exclamation-triangle"></i>
                                    <span>Tamamlanmayan İşler</span>
                                </div>
                            </div>
                            <div class="card-body">
                                <small>Yapılacak İş Bulunamadı</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card rounded-0 shadow-sm">
                            <div class="card-header bg-primary rounded-0">
                                <div class="card-header__content">
                                    <i class="fas fa-check"></i>
                                    <span>Tamamlanan İşler</span>
                                </div>
                            </div>
                            <div class="card-body">
                                <small>Hiç Tamamlanan İş Bulunamadı</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <b-modal v-model="todo_modal" title="Yapılacak yeni iş" size="lg">
            <b-form-textarea id="textarea-rows" placeholder="Açıklama" rows="3">
            </b-form-textarea>
            <template #modal-footer>
                <button type="button" class="btn btn-secondary" @click="todo_modal=false">Kapat</button>
                <button type="button" class="btn btn-primary">Kaydet</button>
            </template>
        </b-modal>
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            todo_modal: false
        }
    },

}
</script>
<style scoped lang="scss">
.card-header__content{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;
    color: #fff;
    i{
        font-size: 14px;
    }
    span{
        font-size: 14px;
        font-weight: 500;
    }
}

.btn-secondary,
.btn-primary {
    text-transform: uppercase;
    font-size: 14px;
    color: #fff;
}

.card {
    border-radius: 4px;
    .card-body{
        small{
            color: #999;
        }
    }
}
</style>