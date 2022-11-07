import * as icons from '../../icon/Icon'
import iconLive from '../../image/liveicon.svg'

export const NavbarData = [
    {   
        id: 1,
        link: '/mymusic',
        icon: icons.faCircleUser,
        title: 'Cá Nhân',
        img: '',
        hover: icons.faCirclePlay
    },
    {
        id: 2,
        link: '/',
        icon: icons.faCompactDisc,
        title: 'Khám Phá',
        img: '',
        hover: null

    },
    {
        id: 3,
        link: '/zing-chart',
        icon: icons.faChartLine,
        title: '#zingchart',
        img: '',
        hover: icons.faCirclePlay
    },
    {
        id: 4,
        link: '/radio',
        icon: icons.faRadio,
        title: 'Raidio',
        img: iconLive,
        hover: icons.faCirclePlay
    },
    {
        id: 5,
        link: '/the-loai-nghe-si',
        icon: icons.faRectangleList,
        title: 'Theo Dõi',
        img: '',
        hover: null
    },
]

export const ScrollBarData = [
    {
        id: 6,
        link: '/moi-phat-hanh',
        icon: icons.faMusic,
        title: 'Nhạc Mới',
        hover: icons.faCirclePlay
    },
    {
        id: 7,
        link: '/hub',
        icon: icons.faIcons,
        title: 'Thể Loại',
        hover: null
    },
    {
        id: 8,
        link: '/top100',
        icon: icons.faBolt,
        title: 'Top 100',
        hover: null
    },
    {
        id: 9,
        link: '/the-loai-video',
        icon: icons.faVideo,
        title: 'MV',
        hover: null
    },
]

export const  bannerSliceBar = [
    {   
        title: 'Đăng nhập để khám phá playlist dành riêng cho bạn',
        btnTitle: 'Đăng nhập',
        type: '',
    },
    {
        title: 'Nghe nhạc không quảng cáo cùng kho nhạc VIP',
        btnTitle: 'Nâng cấp VIP',
        type: 'vip',
    },
]
export const library = [
    {
        id: 10,
        src: 'https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg',
        title: 'Bài Hát',
        icon: icons.faCirclePlay,
        link: 'mymusic/song/favorite'
    },
    {
        id: 11,
        src: 'https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg',
        title: 'Playlist',
        icon: null,
        link: '/mymusic/library/playlist'

    },
    {
        id: 12,
        src: 'https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg',
        title: 'Gần Đây',
        icon: null,
        link: '/mymusic/history'
    },
]