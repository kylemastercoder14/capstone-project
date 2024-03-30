import {
    GraduationCap,
    LayoutDashboard,
    LayoutTemplate,
    LibraryBig,
    Lock,
    NotepadText,
    Scroll,
    Settings,
    SquareKanban,
  } from "lucide-react";
  
  export const menuItems = [
    {
      title: "Main",
      list: [
        {
          title: "Dashboard",
          path: "/pages/dashboard",
          icon: <LayoutDashboard />,
        },
      ],
    },
    {
      title: "General",
      list: [
        {
          title: "Administrator",
          path: "/pages/administrator",
          icon: <Lock />,
        },
        {
          title: "Faculties",
          path: "/pages/faculties",
          icon: <LibraryBig />,
        },
        {
          title: "Students",
          path: "/pages/students",
          icon: <GraduationCap />,
        },
      ],
    },
    {
      title: "Master List",
      list: [
        {
          title: "Programs",
          path: "/pages/programs",
          icon: <SquareKanban />,
        },
        {
          title: "Section",
          path: "/pages/sections",
          icon: <LayoutTemplate />,
        },
        {
          title: "Subjects",
          path: "/pages/subjects",
          icon: <NotepadText />,
        },
      ],
    },
    {
      title: "Others",
      list: [
        {
          title: "Settings",
          path: "/settings",
          icon: <Settings />,
        },
        {
          title: "Logs",
          path: "/logs",
          icon: <Scroll />,
        },
      ],
    },
  ];
  