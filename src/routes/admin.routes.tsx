import AdminDashborad from "../pages/admin/AdminDashborad";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashborad />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-Admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create faculty",
        path: "/admin/create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "/admin/create-Student",
        element: <CreateStudent />,
      },
    ],
  },
];

export const adminPaths = [
  // {
  //   index: true,
  //   // path: "dashboard",
  //   element: <AdminDashborad />,
  // },
  {
    path: "dashboard",
    element: <AdminDashborad />,
  },
  {
    path: "create-admin",
    element: <CreateAdmin />,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty />,
  },
  {
    path: "create-student",
    element: <CreateStudent />,
  },
];
