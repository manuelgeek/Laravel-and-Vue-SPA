import Home from './components/Home';
import Login from './components/auth/Login';
import CustomersMain from './components/customers/CustomersMain';
import CustomersList from './components/customers/CustomersList';
import NewCustomer from './components/customers/NewCustomer';
import Customer from './components/customers/Customer';


export const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path:'/login',
        component: Login
    },
    {
        path: '/customers',
        component: CustomersMain,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path:'/',
                component: CustomersList
            },
            {
                path:'new',
                component: NewCustomer
            },
            {
                path:':id',
                component: Customer
            },
        ]
    },
];
