/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { colors } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewConfigIcon from '@material-ui/icons/ViewComfy';
import ListIcon from '@material-ui/icons/List';
import Label from 'src/components/Label';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';

export default [
  {
    subheader: 'SNIKPIC DESKTOP',
    items: [
      {
        title: 'Profile',
        href: '/profile',
        icon: PersonIcon,
        // items: [
        //   {
        //     title: 'Timeline',
        //     href: '/profile/1/timeline'
        //   },
        //   {
        //     title: 'Connections',
        //     href: '/profile/1/connections'
        //   },
        //   {
        //     title: 'Projects',
        //     href: '/profile/1/projects'
        //   },
        //   {
        //     title: 'Reviews',
        //     href: '/profile/1/reviews'
        //   }
        // ]
      },
      {
        title: 'Discover',
        href: '/social-feed',
        icon: PeopleIcon,
        items: [
          {
            title: 'Search',
            href: '/management/customers/1/summary'
          },
          {
            title: 'Collab',
            href: '/collab',
            label: () => (
              <Label
                color={colors.red[500]}
                shape="rounded"
              >
                1
              </Label>
            )
          },
          {
            title: 'Post',
            href: '/management/projects',
            label: () => (
              <Label
                color={colors.red[500]}
                shape="rounded"
              >
                20
              </Label>
            )
          },
        ]
      },
      {
        title: 'Chat',
        href: '/chat',
        icon: ChatIcon,
        label: () => (
          <Label
            color={colors.red[500]}
            shape="rounded"
          >
            1
          </Label>
        )
      },
      {
        title: 'Tracking',
        href: '/dashboards',
        icon: DashboardIcon,
        // items: [
        //   {
        //     title: 'Default',
        //     href: '/dashboards/default'
        //   },
        //   {
        //     title: 'Analytics',
        //     href: '/dashboards/analytics'
        //   }
        // ]
      },
      // {
      //   title: 'Overview',
      //   href: '/overview',
      //   icon: HomeIcon
      // },
      
      // {
      //   title: 'Management',
      //   href: '/management',
      //   icon: BarChartIcon,
      //   items: [
      //     {
      //       title: 'Customers',
      //       href: '/management/customers'
      //     },
      //     {
      //       title: 'Customer Details',
      //       href: '/management/customers/1/summary'
      //     },
      //     {
      //       title: 'Projects',
      //       href: '/management/projects'
      //     },
      //     {
      //       title: 'Orders',
      //       href: '/management/orders'
      //     },
      //     {
      //       title: 'Order Details',
      //       href: '/management/orders/1'
      //     }
      //   ]
      // },
      // {
      //   title: 'Project',
      //   href: '/projects',
      //   icon: FolderIcon,
      //   items: [
      //     {
      //       title: 'Browse',
      //       href: '/projects'
      //     },
      //     {
      //       title: 'Create',
      //       href: '/projects/create'
      //     },
      //     {
      //       title: 'Overview',
      //       href: '/projects/1/overview'
      //     },
      //     {
      //       title: 'Files',
      //       href: '/projects/1/files'
      //     },
      //     {
      //       title: 'Activity',
      //       href: '/projects/1/activity'
      //     },
      //     {
      //       title: 'Subscribers',
      //       href: '/projects/1/subscribers'
      //     }
      //   ]
      // },
      // {
      //   title: 'Invoice',
      //   href: '/invoices/1',
      //   icon: ReceiptIcon
      // },
      // {
      //   title: 'Kanban Board',
      //   href: '/kanban-board',
      //   icon: ListAltIcon
      // },
      // {
      //   title: 'Mail',
      //   href: '/mail',
      //   icon: MailIcon,
      //   label: () => (
      //     <Label
      //       color={colors.red[500]}
      //       shape="rounded"
      //     >
      //       2
      //     </Label>
      //   )
      // },
      
      // {
      //   title: 'Calendar',
      //   href: '/calendar',
      //   icon: CalendarTodayIcon,
      //   label: () => <Label color={colors.green[500]}>New</Label>
      // },
      // {
      //   title: 'Settings',
      //   href: '/settings',
      //   icon: SettingsIcon,
      //   items: [
      //     {
      //       title: 'General',
      //       href: '/settings/general'
      //     },
      //     {
      //       title: 'Subscription',
      //       href: '/settings/subscription'
      //     },
      //     {
      //       title: 'Notifications',
      //       href: '/settings/notifications'
      //     },
      //     {
      //       title: 'Security',
      //       href: '/settings/security'
      //     }
      //   ]
      // },
      // {
      //   title: 'Authentication',
      //   href: '/auth',
      //   icon: LockOpenIcon,
      //   items: [
      //     {
      //       title: 'Login',
      //       href: '/auth/login'
      //     },
      //     {
      //       title: 'Register',
      //       href: '/auth/register'
      //     }
      //   ]
      // },
      // {
      //   title: 'Errors',
      //   href: '/errors',
      //   icon: ErrorIcon,
      //   items: [
      //     {
      //       title: 'Error 401',
      //       href: '/errors/error-401'
      //     },
      //     {
      //       title: 'Error 404',
      //       href: '/errors/error-404'
      //     },
      //     {
      //       title: 'Error 500',
      //       href: '/errors/error-500'
      //     }
      //   ]
      // }
    ]
  },
  {
    subheader: 'SUPPORT',
    items: [
      // {
      //   title: 'Components',
      //   href: '/components',
      //   icon: ViewConfigIcon,
      //   items: [
      //     {
      //       title: 'Buttons',
      //       href: '/components/buttons'
      //     },
      //     {
      //       title: 'Cards',
      //       href: '/components/cards'
      //     },
      //     {
      //       title: 'Chips',
      //       href: '/components/chips'
      //     },
      //     {
      //       title: 'Lists',
      //       href: '/components/lists'
      //     },
      //     {
      //       title: 'Forms',
      //       href: '/components/forms'
      //     },
      //     {
      //       title: 'Modals',
      //       href: '/components/modals'
      //     },
      //     {
      //       title: 'Typography',
      //       href: '/components/typography'
      //     }
      //   ]
      // },
      {
        title: 'Customer Support',
        href: '/presentation',
        icon: ContactSupportOutlinedIcon
      },
      // {
      //   title: 'Getting started',
      //   href: '/getting-started',
      //   icon: CodeIcon
      // },
      // {
      //   title: 'Changelog',
      //   href: '/changelog',
      //   icon: ListIcon,
      //   label: () => <Label color={colors.blue['500']}>v1.3.0</Label>
      // }
    ]
  }
];
