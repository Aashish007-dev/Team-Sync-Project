import Department from "../../features/admin module/departments/ui/pages/Department";
import Document from "../../features/admin module/documents/ui/pages/Document";
import AddEmployee from "../../features/admin module/employees/ui/pages/AddEmployee";
import Employee from "../../features/admin module/employees/ui/pages/Employee";
import Task from "../../features/admin module/tasks/ui/pages/Task";

export const adminRoutes = [
    {
        path: '/home/employee',
        element: <Employee />
        
    },
    {
        path: '/home/add-employee',
        element: <AddEmployee />
        
    },
    {
        path: '/home/department',
        element: <Department />
    },
    {
        path: '/home/task',
        element: <Task />
    },
    {
        path: '/home/document',
        element: <Document />
    },
]