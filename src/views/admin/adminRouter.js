import AdminPortal from "./AdminPortal.vue";

export default [
    {
        path: "/admin-portal",
        name: "AdminPortal",
        component: AdminPortal,
        redirect: "/admin-portal/dashboard",
        // meta: {
        //   requiresAuth: true,
        //   permissions: []
        // },
        children: [

          {
            path: "dashboard",
            name: "AdminDashboard",
            component: () => import('@/views/admin/dashboard/AdminDashboard.vue')
          },
          {
            path: "destinations",
            name: "Destination",
            component: () => import('@/views/admin/destinations/DestinationsList.vue')
          },
          {
            path: "tour-packages",
            name: "TourPackages",
            component: () => import('@/views/admin/tourpackages/TourPackages.vue')
          },
          {
            path: "accommodations",
            name: "Accommodations",
            component: () => import('@/views/admin/accommodations/AccommodationsList.vue')
          } ,

        ],
      }
]