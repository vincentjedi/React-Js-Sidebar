import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import { FcSupport } from "react-icons/fc";


export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownCircleFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,
            },

            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper />,
            }
        ]
    },

    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownCircleFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: 'Reports1',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper />,
            },

            {
                title: 'Reports2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper />,
            },

            {
                title: 'Reports3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper />,
            }
        ]
    },

    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
    },

    {
        title: 'Teams',
        path: '/team',
        icon: <FaIcons.FaEnvelopeOpenText />,

        iconClosed: <RiIcons.RiArrowDownCircleFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,

        subNav: [
            {
                title: "Team 1",
                path: '/teams/team1',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: "Team 2",
                path: '/teams/team2',
                icon: <IoIcons.IoIosPaper />
            },

            {
                title: "Team 3",
                path: '/teams/team3',
                icon: <IoIcons.IoIosPaper />
            }

        ]

    },
        {
            title: "Messages",
            path: '/messages',
            icon: <IoIcons.IoIosPaper />,

            subNav: [
                {
                    title: "Message 1",
                    path: "/message/message1",
                    icon: <IoIcons.IoIosPaper />
                },
                
                {
                    title: "Message 2",
                    path: "/message/message2",
                    icon: <IoIcons.IoIosPaper />
                }

            ]
        },

        {
            title: "Support",
            path: "/support",
            icon: <FcSupport />
        }



]
