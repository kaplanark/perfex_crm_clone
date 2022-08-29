<template>
    <div class="card border-0">
        <div class="card-header bg-white">
            <small>Özel Notlar</small>
        </div>
        <div class="card-body">
            <VueEditor v-model="htmlForEditor" />
        </div>
        <div class="card-footer border-0 bg-white">
            <button class="btn btn-sm btn-primary text-uppercase">Notu Kaydet</button>
        </div>
    </div>

</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
    components: { VueEditor },
    data() {
        return {
            htmlForEditor: "",
        };
    },

}
</script>