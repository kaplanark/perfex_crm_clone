<template>
    <b-container fluid class="mt-4">
        <b-row class="pb-4">
            <b-col md="4" lg="4" xl="3" v-for="(qs, index) in quick_statistics" :key="index">
                <StatsCard>
                    <i :class="qs.icon" slot="icon"></i>
                    <span slot="text">{{ qs.text }}</span>
                    <div class="step" slot="step">
                        {{ qs.step.now }}/{{ qs.step.end }}
                    </div>
                    <b-progress variant="secondary" :value="qs.value" :max="qs.max" height="5px" slot="progress"></b-progress>
                </StatsCard>
            </b-col>
            <b-col md="8">
                <UserPanel></UserPanel>
            </b-col>
            
        </b-row>
    </b-container>
</template>
<script>
import StatsCard from "../components/StatsCard.vue";
import UserPanel from "../components/UserPanel.vue";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Dashborad',
    props: {
        data: {
        }
    },
    data() {
        return {
            text: 'ÖDEME BEKLEYEN FATURALAR',
            value: 45,
            max: 100,
            step: {
                now: 4,
                end: 10
            },
            quick_statistics: [
                { text: 'ÖDEME BEKLEYEN FATURALAR', icon: 'fas fa-balance-scale', value: 45, max: 100, step: { now: 4, end: 10 } },
                { text: 'ÇEVRİLEN FIRSATLAR', icon: 'fas fa-tty', value: 50, max: 100, step: { now: 5, end: 10 } },
                { text: 'PROJELER DEVAM EDEN', icon: 'fas fa-cubes', value: 10, max: 100, step: { now: 1, end: 10 } },
                { text: 'TAMAMLANMAYAN İŞLER', icon: 'fas fa-tasks', value: 80, max: 100, step: { now: 8, end: 10 } },
            ]
        }
    },
    components: { StatsCard, UserPanel }
}
</script>
