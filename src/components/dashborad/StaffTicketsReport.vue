<template>
    <div class="card border-0">
        <div class="card-header bg-white">
            <span class="fs-xs">Personel Biletleri Raporu</span>
            <div class="btn-group">
                <b-dropdown id="dropdown-left" :text="appearance" variant="link" size="sm">
                    <b-dropdown-item @click="appearance = 'Bu Hafta'">Bu Hafta</b-dropdown-item>
                    <b-dropdown-item @click="appearance = 'Geçen Hafta'">Geçen Hafta</b-dropdown-item>
                    <b-dropdown-item @click="appearance = 'Bu Ay'">Bu Ay</b-dropdown-item>
                    <b-dropdown-item @click="appearance = 'Geçen Ay'">Geçen Ay</b-dropdown-item>
                    <b-dropdown-item @click="appearance = 'Bu Yıl'">Bu Yıl</b-dropdown-item>
                    <b-dropdown-item @click="appearance = 'Geçen Yıl'">Geçen Yıl</b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
        <div class="card-body">
            <v-data-table :headers="headers" :items="desserts" multi-sort class="elevation-1" :search="search">
                <template v-slot:top>
                    <div class="card border-0 table-top-card my-2">
                        <div class="btn-group">
                            <b-dropdown id="dropdown-left" :text="collumn" variant="outline-primary" size="sm">
                                <b-dropdown-item @click="collumn='Tümü'">Tümü</b-dropdown-item>
                                <b-dropdown-item @click="collumn=10">10</b-dropdown-item>
                                <b-dropdown-item @click="collumn=20">20</b-dropdown-item>
                            </b-dropdown>
                            <button class="btn btn-outline-primary btn-sm">Dışa Aktar</button>
                        </div>
                        <div class="input-group">
                            <span class="input-group-text"><i class="fas fa-search"></i></span>
                            <input type="text" placeholder="Ara:" class="form-control form-control-sm" v-model="search"
                                style="width: 30%;">
                        </div>
                    </div>
                </template>
            </v-data-table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: '',
            appearance: 'Bu Ay',
            collumn:'Tümü',
            headers: [
                {
                    text: 'Staff Member',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Total Asigned Tickets', value: 'total_tickets' },
                { text: 'Open Tickets', value: 'open_tickets' },
                { text: 'Close Tickets', value: 'close_tickets' },
                { text: 'Replies To Ticked', value: 'replies_tickeds' },
            ],
            desserts: [
                {
                    name: 'Kaplan Arkan',
                    total_tickets: 0,
                    open_tickets: 0,
                    close_tickets: 0,
                    replies_tickeds: 0,
                },
                {
                    name: 'Test User',
                    total_tickets: 1,
                    open_tickets: 2,
                    close_tickets: 1,
                    replies_tickeds: 3,
                }
            ],
        }
    }
}
</script>
<style lang="scss">
.table-top-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

}
</style>

<style scoped>
.btn-outline-primary {
    font-size: 14px;
}

.input-group {
    width: fit-content;
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
<style>
.fs-xs {
    font-size: 13px;
}
</style>
