<template>
    <b-container fluid class="mt-3">
        <div class="card border-0 bg-transparent">
            <div class="card-body fixed-end p-1">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card border-0 mb-3 btn-toggle-link px-2">
                            <h6>#1 Test firma</h6>
                            <b-dropdown class="m-md-2" text="" variant="link">
                                <b-dropdown-item variant="secondary fs-xs">Müşteri Olarak Giriş</b-dropdown-item>
                                <b-dropdown-item variant="danger fs-xs">Sil</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <div class="card border-0">
                            <ul class="list-group list-group-flush">
                                <li v-for="(link, index) in links" :key="index" class="list-group-item">
                                    <router-link tag="span" :to="link.link" active-class="active">
                                        <i :class="link.icon"></i>
                                        <span>{{ link.name }}</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="card border-0">
                            <div class="card-header">
                                <span class="fs-5 text-secondary">{{$route.name}}</span>
                            </div>
                            <div class="card-body">
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer fixed-footer bg-white">
                <button class="btn btn-primary btn-sm text-uppercase">Kaydet</button>
            </div>
        </div>
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            links: [
                {
                    name: 'Profil',
                    icon: 'fas fa-user-circle',
                    link: '/customers/customer/1/profile',
                },
                {
                    name: 'Kişiler',
                    icon: 'fas fa-users',
                    link: '/customers/customer/1/contacts',
                },
                {
                    name: 'Notlar',
                    icon: 'fas fa-sticky-note',
                    link: '/customers/customer/1/notes',
                },
                {
                    name: 'Hesap Özeti',
                    icon: 'fas fa-chart-area',
                    link: '/customers/customer/1/statement',
                },
                {
                    name: 'Faturalar',
                    icon: 'fas fa-file',
                    link: '/customers/customer/1/invoices',
                },
                {
                    name: 'Ödemeler',
                    icon: 'fas fa-chart-line',
                    link: '/customers/customer/1/payments',
                },
                {
                    name: 'Teklifler',
                    icon: 'fas fa-file-powerpoint',
                    link: '/customers/customer/1/propalas',
                },
                {
                    name: 'Kredi Notları',
                    icon: 'fas fa-sticky-note',
                    link: '/customers/customer/1/credit-notes',
                },
                {
                    name: 'Proformlar',
                    icon: 'fas fa-paste',
                    link: '/customers/customer/1/estimates',
                },
                {
                    name: 'Abonelikler',
                    icon: 'fas fa-redo',
                    link: '/customers/customer/1/subscriptions',
                },
                {
                    name: 'Harcamalar',
                    icon: 'fas fa-file-alt',
                    link: '/customers/customer/1/expanse',
                },
                {
                    name: 'Sözleşmeler',
                    icon: 'fas fa-file',
                    link: '/customers/customer/1/contracts',
                },
                {
                    name: 'Projler',
                    icon: 'fas fa-bars',
                    link: '/customers/customer/1/projects',
                },
                {
                    name: 'Görevler',
                    icon: 'fas fa-tasks',
                    link: '/customers/customer/1/tasks',
                },
                {
                    name: 'Talepler',
                    icon: 'fas fa-ticket-alt',
                    link: '/customers/customer/1/tickets',
                },
                {
                    name: 'Dosyalar',
                    icon: 'fas fa-paperclip',
                    link: '/customers/customer/1/attachments',
                },
                {
                    name: 'Sunucu Bilgileri',
                    icon: 'fas fa-lock',
                    link: '/customers/customer/1/valuts',
                },
                {
                    name: 'Hatırlatıcı',
                    icon: 'fas fa-clock',
                    link: '/customers/customer/1/reminders',
                },
                {
                    name: 'Haritalar',
                    icon: 'fas fa-map-marker',
                    link: '/customers/customer/1/map',
                },

            ]
        }
    },
    beforeRouteLeave(to, from, next) {
        this.$bvModal.msgBoxConfirm('Kaydetmediğiniz değişiklikler olabilir.', {
            title: 'Uyarı',
            size: '',
            buttonSize: 'sm',
            okVariant: 'danger',
            okTitle: 'Çık',
            cancelTitle: 'İptal',
            footerClass: 'p-2',
            hideHeaderClose: false,
            centered: true
        })
            .then(value => {
                value && next()
            })
    }
}
</script>
<style lang="scss" scoped>
.btn-toggle-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.fixed-end {
    margin-bottom: 64px;
}

.fixed-footer {
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 22px;
    padding-left: 32px;
    padding-right: 32px;
    right: 0;
    left: 0;
}

.list-group-item {
    &>span {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
        font-size: 14px;
        cursor: pointer;

        &.active {
            color: #0d6efd
        }
    }

    &:hover {
        color: #0d6efd;
    }
}
</style>