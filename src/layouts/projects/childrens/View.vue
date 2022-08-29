<template>
    <b-container fluid class="mt-3">
        <div class="card border-0 bg-transparent">
            <div class="card-header border-0 bg-white rounded d-flex justify-content-between py-2 mb-3">
                <div class="btn-list">
                    <b-dropdown id="dropdown-2" variant="link">
                        <template #button-content>
                            <strong class="text-secondary">test proje <small>-Test Firma</small></strong>
                        </template>
                        <b-dropdown-item>First Action</b-dropdown-item>
                        <b-dropdown-item>Second Action</b-dropdown-item>
                        <b-dropdown-item>Third Action</b-dropdown-item>
                    </b-dropdown>
                    <button class="btn btn-secondary btn-sm">Başlamadı</button>
                </div>
                <div class="btn-list">
                    <button class="btn btn-primary btn-sm text-uppercase">Yeni Görev</button>
                    <button class="btn btn-primary btn-sm text-uppercase">Proje Faturalandırma</button>
                    <b-dropdown id="dropdown-1" text="Daha Fazla" variant="light btn-sm border text-uppercase">
                        <b-dropdown-item>First Action</b-dropdown-item>
                        <b-dropdown-item>Second Action</b-dropdown-item>
                        <b-dropdown-item>Third Action</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
            <div class="card-body bg-white rounded mb-3">
                <b-tabs fill active-tab-class="active-tab-class" active-nav-item-class="active-nav-item-class"
                    nav-class="nav-class" nav-wrapper-class="wrapper-class" content-class="content-class">
                    <b-tab active>
                        <template #title>
                            <span class="fs-xs btn-tab"><i class="fas fa-th"></i>Proje Özeti</span>
                        </template>
                        <div class="mt-3">
                            <Overview></Overview>
                        </div>
                    </b-tab>
                    <b-tab>
                        <template #title>
                            <span class="fs-xs btn-tab"><i class="fas fa-check-circle"></i>Görevler</span>
                        </template>
                        <div class="mt-3">
                            <Tasks></Tasks>
                        </div>
                    </b-tab>
                    <b-tab>
                        <template #title>
                            <span class="fs-xs btn-tab"><i class="fas fa-clock"></i>Zaman Çizelgeleri</span>
                        </template>
                        <div class="mt-3">
                            <Timesheets></Timesheets>
                        </div>
                    </b-tab>
                    <b-tab>
                        <template #title>
                            <span class="fs-xs btn-tab"><i class="fas fa-rocket"></i>Fazlar</span>
                        </template>
                        <div class="mt-3">
                            <Milestones></Milestones>
                        </div>
                    </b-tab>
                    <b-tab>
                        <template #title>
                            <span class="fs-xs btn-tab"><i class="fas fa-copy"></i>Dosyalar</span>
                        </template>
                        <div class="mt-3">
                            <Files></Files>
                        </div>
                    </b-tab>
                    <b-tab>
                        <template #title>
                            <span class="fs-xs btn-tab"><i class="fas fa-comment-dots"></i>Tartışma</span>
                        </template>
                        <div class="mt-3">
                            <Discussions></Discussions>
                        </div>
                    </b-tab>
                    <b-tab>
                        <template #title>
                            <span class="fs-xs btn-tab"><i class="fas fa-align-left"></i>Grant Gürünümü</span>
                        </template>
                        <div class="mt-3">
                            <Gantt></Gantt>
                        </div>
                    </b-tab>
                    <b-tab>
                        <template #title>
                            <span class="fs-xs btn-tab"><i class="fas fa-life-ring"></i>Talepler</span>
                        </template>
                        <div class="mt-3">
                            <Tickets></Tickets>
                        </div>
                    </b-tab>
                    <b-tab>
                        <template #title>
                            <span class="fs-xs btn-tab"><i class="fas fa-file"></i>Sözleşmeler</span>
                        </template>
                        <div class="mt-3">
                            <Contracts></Contracts>
                        </div>
                    </b-tab>
                    <b-tab>
                        <template #title>
                            <span class="fs-xs btn-tab"><i class="fas fa-balance-scale"></i>Satış</span>
                        </template>
                        <p class="p-3">Tab contents 1</p>
                    </b-tab>
                    <b-tab>
                        <template #title>
                            <span class="fs-xs btn-tab"><i class="fas fa-sticky-note"></i>Notlar</span>
                        </template>
                        <div class="mt-3">
                            <Notes></Notes>
                        </div>
                    </b-tab>
                    <b-tab>
                        <template #title>
                            <span class="fs-xs btn-tab"><i class="fas fa-exclamation"></i>Etkinlik</span>
                        </template>
                        <div class="mt-3">
                            <Activity></Activity>
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </b-container>
</template>
<script>
import Tasks from '../../tasks/Tasks.vue'
import Timesheets from "./components/Timesheets.vue";
import Milestones from "./components/Milestones.vue";
import Files from "./components/Files.vue";
import Discussions from "./components/Discussions.vue";
import Gantt from "./components/Gantt.vue";
import Contracts from "./components/Contracts.vue";
import Notes from "./components/Notes.vue";
import Tickets from "./components/Tickets.vue";
import Activity from "./components/Activity.vue";
import Overview from './components/Overview.vue';

export default {
    components: { Tasks, Timesheets, Milestones, Files, Discussions, Gantt, Contracts, Notes, Tickets, Activity, Overview },
}
</script>
<style scoped>
.btn-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
}
</style>
<style>
.fs-8 {
    font-size: 13px;
}

.nav-class .nav-link {
    color: gray;
}
.nav-class .nav-link{
    border: 0;
    border-radius: 0;
}
.nav-class .nav-link.active-nav-item-class {
    color: #0d6efd;
    border-bottom: 1px solid #0d6efd;
}
</style>