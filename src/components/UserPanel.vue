<template>
    <b-card no-body class="border-0 h-100">
        <b-tabs content-class="mt-3" fill lazy>
            <b-tab active title-link-class="use-tab-link">
                <template #title>
                    <div class="nav-link-wrapper">
                        <i class="fas fa-tasks"></i>
                        <span>Görevlerim</span>
                    </div>
                </template>
                <Table></Table>
            </b-tab>
            <b-tab title-link-class="use-tab-link">
                <template #title>
                    <div class="nav-link-wrapper">
                        <i class="fas fa-bars"></i>
                        <span>Projelerim</span>
                    </div>
                </template>
                <p>I'm the first tab</p>
            </b-tab>
            <b-tab title-link-class="use-tab-link">
                <template #title>
                    <div class="nav-link-wrapper">
                        <i class="fas fa-ticket-alt"></i>
                        <span>Talepler</span>
                    </div>
                </template>
                <p>I'm the first tab</p>
            </b-tab>
            <b-tab title-link-class="use-tab-link">
                <template #title>
                    <div class="nav-link-wrapper">
                        <i class="fas fa-tasks"></i>
                        <span>Duyrular</span>
                    </div>
                </template>
                <p>I'm the first tab</p>
            </b-tab>
            <b-tab title-link-class="use-tab-link">
                <template #title>
                    <div class="nav-link-wrapper">
                        <i class="fas fa-tasks"></i>
                        <span>Son Aktivite</span>
                    </div>
                </template>
                <p>I'm the first tab</p>
            </b-tab>
        </b-tabs>
    </b-card>
</template>
<script>
import Table from "./Table.vue";
export default {
    name:'UserPanel',
    data() {
        return {};
    },
    components: { Table }
}
</script>
<style scoped>
.card {
    padding: 6px 8px;
}

.nav-link-wrapper {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: #008ed1;
    transition: all 0.15s;
}
</style>
<style>
.use-tab-link {
    padding: 6px;
}

.use-tab-link.active .nav-link-wrapper {
    color: #000;
}

.nav-tabs .nav-link {
    border-radius: 4px;
}
</style>