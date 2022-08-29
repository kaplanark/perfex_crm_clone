<template>
    <b-container fluid class="mt-3">
        <dashboard :id="'dashborad'">
            <dash-layout v-for="layout in layouts" v-bind="layout" :key="layout.breakpoint">
                <dash-item v-for="item in layout.items" v-bind.sync="item" :key="item.id">
                    <StatsCard>
                        <i :class="item.icon" slot="icon"></i>
                        <span slot="text">{{ item.text }}</span>
                        <div class="step" slot="step">
                            {{ item.step.now }}/{{ item.step.end }}
                        </div>
                        <b-progress :variant="item.variant" :value="item.value" :max="item.max" height="5px"
                            slot="progress"></b-progress>
                    </StatsCard>
                </dash-item>
            </dash-layout>
        </dashboard>
        <b-row class="pb-4">
            <b-col md="8">
                <UserPanel></UserPanel>
            </b-col>
            <b-col md="4">
                <OpportunityStatus></OpportunityStatus>
            </b-col>
            <b-col md="8">
                <Calendar></Calendar>
            </b-col>
            <b-col md="4">
                <ProjectStats></ProjectStats>
            </b-col>
            <b-col md="8">
                <ThingsTodo></ThingsTodo>
            </b-col>
            <b-col md="8">
                <Status></Status>
            </b-col>
            <b-col md="8">
                <PaymentRecords></PaymentRecords>
            </b-col>
            <b-col md="8">
                <ContractsExpireSoon></ContractsExpireSoon>
            </b-col>
            <b-col md="8">
                <StaffTicketsReport></StaffTicketsReport>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import StatsCard from "../components/StatsCard.vue";
import UserPanel from "../components/UserPanel.vue";
import Calendar from "@/components/Calendar.vue";
import { Dashboard, DashLayout, DashItem } from "vue-responsive-dash";
import OpportunityStatus from "@/components/OpportunityStatus.vue";
import ProjectStats from "../components/ProjectStats.vue";
import ThingsTodo from "@/components/dashborad/ThingsTodo.vue";
import PaymentRecords from "@/components/dashborad/PaymentRecords.vue";
import ContractsExpireSoon from "@/components/dashborad/ContractsExpireSoon.vue";
import StaffTicketsReport from "@/components/dashborad/StaffTicketsReport.vue";
import Status from "@/components/dashborad/Status.vue";
export default {
    name: 'Dashborad',
    data() {
        return {
            layouts: [
                {
                    breakpoint: "lg",
                    breakpointWidth: 1200,
                    numberOfCols: 12,
                    items: [
                        { id: 1, x: 0, y: 0, width: 3, height: 1, resizable: false, text: 'ÖDEME BEKLEYEN FATURALAR', icon: 'fas fa-balance-scale', value: 45, max: 100, step: { now: 4, end: 10 },variant:'danger' },
                        { id: 2, x: 3, y: 0, width: 3, height: 1, resizable: false, text: 'ÇEVRİLEN FIRSATLAR', icon: 'fas fa-tty', value: 50, max: 100, step: { now: 5, end: 10 },variant:'success' },
                        { id: 3, x: 6, y: 0, width: 3, height: 1, resizable: false, text: 'PROJELER DEVAM EDEN', icon: 'fas fa-cubes', value: 60, max: 100, step: { now: 6, end: 10 },variant:'primary' },
                        { id: 4, x: 9, y: 0, width: 3, height: 1, resizable: false, text: 'TAMAMLANMAYAN İŞLER', icon: 'fas fa-tasks', value: 80, max: 100, step: { now: 8, end: 10 },variant:'secondary' },
                    ]
                },
            ],
        }
    },
    components: {
    StatsCard,
    UserPanel,
    Calendar,
    Dashboard,
    DashLayout,
    DashItem,
    OpportunityStatus,
    ProjectStats,
    ProjectStats,
    ThingsTodo,
    PaymentRecords,
    ContractsExpireSoon,
    StaffTicketsReport,
    Status
}
}
</script>