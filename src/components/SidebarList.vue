<template>
    <ul class="list-unstyled ps-0">
        <li class="menu-item" v-for="(link, index) in links" :key="index" :class="link.children ? 'sub-menu' : ''">
            <router-link tag="button" :to="link.to" class="btn-menu" active-class="active">
                <i :class="link.icon"></i>
                <span>{{ link.name }}</span>
            </router-link>
            <ul class="list-unstyled ps-0" v-show="sub">
                <li v-for="(l, index) in link.children" :key="index">
                    <router-link tag="button" :to="l.to" class="btn-menu"><span>{{ l.name }}</span></router-link>
                </li>
            </ul>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            sub: false,
            links: [
                { name: 'Kontrol Paneli', to: '/dashboard', icon: 'fas fa-home' },
                { name: 'Müşteriler', to: '/#dashboard', icon: 'fas fa-user' },
                {
                    name: 'Satışlar', to: '/sales', icon: 'fas fa-balance-scale', children: [
                        { name: 'Teklifler', to: '/offers' },
                        { name: 'Proformalar', to: '/proforma' },
                    ]
                },
                { name: 'Abonelikler', to: '/subscriptions', icon: 'fas fa-redo' },
                { name: 'Harcamalar', to: '/expenses', icon: 'far fa-file-alt' },
                { name: 'Süzleşmeler', to: '/contracts', icon: 'far fa-file' },
                { name: 'Projeler', to: '/projects', icon: 'fas fa-bars' },
                { name: 'Görevler', to: '/tasks', icon: 'fas fa-tasks' },

                { name: 'Destek', to: '/info', icon: 'fas fa-ticket-alt' },
                { name: 'Fırsatlar', to: '/opportunities', icon: 'fas fa-tty' },
                { name: 'Estimate Request', to: '/estimate', icon: 'far fa-list-alt' },
                { name: 'Bilgi Merkezi', to: '/inforcenter', icon: 'far fa-folder-open' },
                {
                    name: 'Uygulamalar', to: '/apps', icon: 'fas fa-cogs', children: [
                        { name: 'Medya', to: '/media' },
                        { name: 'Toplu Pdf Dışarı Aktar', to: '/pdf' },
                        { name: 'Takvim', to: '/calendar' },
                        { name: 'Duyrular', to: '/announcements' },
                    ]
                },

            ]
        }
    },
}
</script>
<style scoped>
.btn-menu {
    width: 100%;
    border: 0;
    padding: 8px 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    font-size: 13px;
    text-transform: uppercase;
    transition: all 0.15s ease-in-out;
    background-color: unset;
    color: #fff;
    position: relative;
}

.btn-menu.active {
    background-color: #e3e8ee;
    color: #444;
}

.btn-menu i {
    font-size: 15px;
}

.sub-menu>.btn-menu::after {
    position: absolute;
    font-family: "Font Awesome Free 5";
    content: "\f104";
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
}

.btn-menu:hover {
    background-color: #e3e8ee;
    color: #444;
}

.menu-item ul {
    background-color: #fff;
}

.menu-item ul li .btn-menu {
    color: #0181bb;
    text-transform: none;
    font-weight: 500;
    font-size: normal;
    padding-left: 28px;
}
</style>