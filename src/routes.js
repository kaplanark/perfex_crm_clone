import Admin from './pages/Admin.vue'
import Login from './pages/Login.vue'
import Dashborad from './layouts/Dashborad.vue'
import UserLogin from './pages/UserLogin.vue'
import Todo from './layouts/Todo.vue'

import CustomerIndex from './layouts/customer/index.vue'
import Customers from './layouts/customer/Customers.vue'
import Customer from './layouts/customer/Customer.vue'
import Import from './layouts/customer/Import.vue'
import AllContacts from './layouts/customer/AllContacts.vue'
import CustomerDetail from './layouts/customer/CustomerDetail.vue'


import ProjectsIndex from './layouts/projects/index.vue'
import Projects from './layouts/projects/Projects.vue'
import Project from './layouts/projects/Project.vue'
import Filter from './layouts/projects/Filter'
import View from './layouts/projects/childrens/View.vue'

import TaskIndex from './layouts/tasks/index.vue'
import Tasks from './layouts/tasks/Tasks.vue'
import DetailedOverview from './layouts/tasks/DetailedOverview.vue'

import TicketsIndex from './layouts/tickets/index.vue'
import Tickets from './layouts/tickets/Tickets.vue'
import Ticket from './layouts/tickets/Ticket.vue'

import CustomerProfile from './layouts/customer/children/CustomerProfile.vue'
import CustomerContacts from './layouts/customer/children/CustomerContacts.vue'
import CustomerNotes from './layouts/customer/children/CustomerNotes.vue'
import CustomerStatement from './layouts/customer/children/CustomerStatement.vue'
import CustomerInvoices from './layouts/customer/children/CustomerInvoices.vue'
import CustomerPayments from './layouts/customer/children/CustomerPayments.vue'
import CustomerPropalas from './layouts/customer/children/CustomerPropalas.vue'
import CustomerCreditNotes from './layouts/customer/children/CustomerCreditNotes.vue'
import CustomerEstimates from './layouts/customer/children/CustomerEstimates.vue'
import CustomerSubscriptions from './layouts/customer/children/CustomerSubscriptions.vue'
import CustomerExpanse from './layouts/customer/children/CustomerExpanse.vue'
import CustomerContracts from './layouts/customer/children/CustomerContracts.vue'
import CustomerProjects from './layouts/customer/children/CustomerProjects.vue'
import CustomerTasks from './layouts/customer/children/CustomerTasks.vue'
import CustomerTickets from './layouts/customer/children/CustomerTickets.vue'
import CustomerAttachments from './layouts/customer/children/CustomerAttachments.vue'
import CustomerValuts from './layouts/customer/children/CustomerValuts.vue'
import CustomerReminders from './layouts/customer/children/CustomerReminders.vue'
import CustomerMap from './layouts/customer/children/CustomerMap.vue'

export const routes = [
    { path: '/', name: 'userlogin', component: UserLogin, meta: { requiresAuth: true } },
    {
        path: '/admin', name: 'admin', redirect: '/dashboard', component: Admin, meta: { requiresAuth: true }, children: [
            { path: '/dashboard', name: 'dashborad', component: Dashborad, meta: { requiresAuth: true } },
            { path: '/todo', name: 'todo', component: Todo, meta: { requiresAuth: true } },

            {
                path: '/customers', name: 'customers', component: CustomerIndex, meta: { requiresAuth: true }, children: [
                    { path: '', name: 'customers', component: Customers, meta: { requiresAuth: true } },
                    { path: '/customers/customer', name: 'customer', component: Customer, meta: { requiresAuth: true } },
                    { path: '/customers/import', name: 'import', component: Import, meta: { requiresAuth: true } },
                    { path: '/customers/allcontacts', name: 'customer', component: AllContacts, meta: { requiresAuth: true } },
                    {
                        path: '/customers/customer/:id', name: 'customer-detail', component: CustomerDetail, meta: { requiresAuth: true }, redirect:'/customers/customer/:id/profile',
                        children: [
                            { path: '/customers/customer/:id/profile', name: 'Profile', component: CustomerProfile, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/contacts', name: 'Cntacts', component: CustomerContacts, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/notes', name: 'Notes', component: CustomerNotes, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/statement', name: 'Statement', component: CustomerStatement, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/invoices', name: 'Invoices', component: CustomerInvoices, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/payments', name: 'Payments', component: CustomerPayments, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/propalas', name: 'Propalas', component: CustomerPropalas, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/credit-notes', name: 'Credit Notes', component: CustomerCreditNotes, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/estimates', name: 'Estimates', component: CustomerEstimates, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/subscriptions', name: 'Subscriptions', component: CustomerSubscriptions, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/expanse', name: 'Expanse', component: CustomerExpanse, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/contracts', name: 'Contracts', component: CustomerContracts, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/projects', name: 'Projects', component: CustomerProjects, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/tasks', name: 'Tasks', component: CustomerTasks, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/tickets', name: 'Tickets', component: CustomerTickets, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/attachments', name: 'Attachments', component: CustomerAttachments, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/valuts', name: 'Valuts', component: CustomerValuts, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/reminders', name: 'Reminders', component: CustomerReminders, meta: { requiresAuth: true } },
                            { path: '/customers/customer/:id/map', name: 'Map', component: CustomerMap, meta: { requiresAuth: true } },
                        ]
                    },
                ]
            },
            {
                path: '/projects', name: 'projects', component: ProjectsIndex, meta: { requiresAuth: true }, children: [
                    { path: '', name: 'projects', component: Projects, meta: { requiresAuth: true } },
                    { path: '/projects/project', name: 'project', component: Project, meta: { requiresAuth: true } },
                    { path: '/projects/filter', name: 'filter', component: Filter, meta: { requiresAuth: true } },
                    { path: '/projects/view', name: 'view', component: View, meta: { requiresAuth: true } },
                ]
            },

            {
                path: '/tasks', name: 'tasks', component: TaskIndex, meta: { requiresAuth: true }, children: [
                    { path: '', name: 'tasks', component: Tasks, meta: { requiresAuth: true } },
                    { path: '/tasks/detailed_overview', name: 'detailed_overview', component: DetailedOverview, meta: { requiresAuth: true } },
                ]
            },

            {
                path: '/tickets', name: 'tickets', component: TicketsIndex, meta: { requiresAuth: true }, children: [
                    { path: '', name: 'tickets', component: Tickets, meta: { requiresAuth: true } },
                    { path: '/tickets/ticket', name: 'ticket', component: Ticket, meta: { requiresAuth: true } },
                ]
            },


        ]
    },
    { path: '/authentication', name: 'authentication', component: Login, meta: { requiresAuth: true } },
    { path: '*', redirect: '/' }
];