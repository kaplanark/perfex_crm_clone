<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-data-table :headers="headers" :items="desserts" multi-sort class="elevation-1" :search="search">
    <template v-slot:top>
      <div class="card border-0 table-top-card my-2">
        <div class="btn-group">
          <b-dropdown id="dropdown-left" text="Tümü" variant="outline-primary" size="sm">
            <b-dropdown-item>10</b-dropdown-item>
            <b-dropdown-item>20</b-dropdown-item>
          </b-dropdown>
          <button class="btn btn-outline-primary btn-sm">Dışa Aktar</button>
        </div>
        <div class="input-group">
          <span class="input-group-text"><i class="fas fa-search"></i></span>
          <input type="text" placeholder="Ara:" class="form-control form-control-sm" v-model="search" style="width: 30%;">
        </div>
      </div>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      appearance: 'Bu Ay',
      headers: [
        {
          text: '#',
          align: 'start',
          sortable: false,
          value: 'index',
        },
        { text: 'Adı', value: 'name' },
        { text: 'Durum', value: 'status' },
        { text: 'Başlama Tarihi', value: 'date' },
        { text: 'Etiketler', value: 'tags' },
        { text: 'Öncelik', value: 'priority' },
      ],
      desserts: [
        {
          index:1,
          name: 'Test Görev',
          status: 'Devam Eden',
          date: '2022-08-23',
          tags: '',
          priority: 'Orta',
        },
        {
          index:2,
          name: 'Test Görev 2',
          status: 'Devam Eden',
          date: '2022-08-23',
          tags: '',
          priority: 'Orta',
        },
        {
          index:3,
          name: 'Test Görev 3',
          status: 'Devam Eden',
          date: '2022-08-23',
          tags: '',
          priority: 'Orta',
        }
      ],
    }
  }
}
</script>
<style scoped>
.input-group{
  width: fit-content;
}
.table-top-card{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

}
</style>