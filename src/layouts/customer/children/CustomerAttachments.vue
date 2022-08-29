<template>
    <div class="card border-0">
        <div class="card-header border-0 bg-white">
            <div class="file-drop-area">
                <span class="file-message text-primary text-center w-100"><strong>Yüklemek için dosyaları bu alana sürükleyin</strong></span>
                <input class="file-input" type="file" multiple>
            </div>
        </div>
        <div class="card-body">
            <v-data-table :headers="headers" :items="desserts" multi-sort class="elevation-1" :search="search">
                <template v-slot:top>
                    <div class="card border-0 table-top-card my-2">
                        <div class="btn-group">
                            <b-dropdown id="dropdown-left" text="Tümü" variant="outline-primary" size="sm">
                                <b-dropdown-item>10</b-dropdown-item>
                                <b-dropdown-item>20</b-dropdown-item>
                            </b-dropdown>
                            <button class="btn btn-outline-primary btn-sm">Dışa Aktar</button>
                            <button class="btn btn-outline-primary btn-sm"><i class="fas fa-sync"></i></button>
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
            headers: [
                {
                    text: '#',
                    align: 'start',
                    sortable: false,
                    value: '1',
                },
                { text: 'Konu', value: '2' },
                { text: 'Etiket', value: '3' },
                { text: 'Bölüm', value: '4' },
                { text: 'Hizmet', value: '5' },
                { text: 'Müşteri', value: '6' },
                { text: 'Durum', value: '7' },
                { text: 'Öncelik', value: '8' },
                { text: 'Son Yanıtlama', value: '9' },
                { text: 'Oluşturma Tarihi', value: '10' },


            ],
            desserts: [
                {
                    1: '',
                    2: '',
                    3: '',
                    4: '',
                    5: '',
                    6: '',
                    7: '',
                    8: '',
                    9: '',
                    10: '',
                }
            ],
        }
    },
}
</script>
<style scoped>
.input-group {
    width: fit-content;
}
.file-drop-area {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100%;
  padding: 25px;
  border: 1px dashed rgba(101, 101, 101, 0.911);
  border-radius: 3px;
  transition: 0.2s;
 
}

.choose-file-button {
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  padding: 8px 15px;
  margin-right: 10px;
  font-size: 12px;
  text-transform: uppercase;
}

.file-message {
  font-size: small;
  font-weight: 300;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-input {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  
}
</style>