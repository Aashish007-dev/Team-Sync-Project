import { Building, File, GroupIcon, LayoutDashboard, List, MessageSquare, PersonStanding, PresentationIcon, Settings } from "lucide-react";

export const employeeNavigation = [
    {
        path: '/home',
        title: 'Dashboard',
        icon: <LayoutDashboard />
    },
    {
        path: '/home/myTask',
        title: 'My-Task',
        icon: <List />
    },
    {
        path: '/home/chat',
        title: 'Chats',
        icon: <MessageSquare />
    },
    {
        path: '/home/attendance',
        title: 'Attendance',
        icon: <PresentationIcon />
    },
    {
        path: '/home/profile',
        title: 'Profile',
        icon: <PersonStanding />
    },
    {
        path: '/home/setting',
        title: 'Settings',
        icon: <Settings />
    },
];

export const adminNavigation = [
    {
        path: '/home',
        title: 'Dashboard',
        icon: <LayoutDashboard />
    },
    {
        path: '/home/task',
        title: 'Tasks',
        icon: <List />
    },
    {
        path: '/home/chat',
        title: 'Chats',
        icon: <MessageSquare />
    },
    {
        path: '/home/employee',
        title: 'Employees',
        icon: <GroupIcon />
    },
    {
        path: '/home/document',
        title: 'Documents',
        icon: <File />
    },
    {
        path: '/home/department',
        title: 'Department',
        icon: <Building />
    },
    {
        path: '/home/setting',
        title: 'Settings',
        icon: <Settings />
    },
];