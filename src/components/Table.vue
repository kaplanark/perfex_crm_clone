<template>
    <div>
        <b-table striped hover :items="items" :fields="fields" class="table-column"></b-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fields: ['#', 'Adı', 'Durum', 'Başlama Tarihi', 'Etiketler', 'Öncelik'],
            items: [
                //  { '#': 1, Adı: 'Dickerson', last_name: 'Macdonald', date: '20.02.10' },
            ]
        }
    }
}
</script>
<style scoped>
th .div {
    font-size: 14px;
}
</style>