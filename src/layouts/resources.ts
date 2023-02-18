import routeNames from 'src/router/route-names';

interface Link {
  title: string;
  icon: string;
  routeName: string;
}

const essentialLinks: Link[] = [
  {
    title: 'Home',
    icon: 'home',
    routeName: routeNames.home,
  },
  {
    title: 'Profile',
    icon: 'person',
    routeName: routeNames.profile,
  },
  {
    title: 'Projects',
    icon: 'work',
    routeName: routeNames.projects,
  },
  {
    title: 'Grants',
    icon: 'chat',
    routeName: routeNames.grants,
  },
];
export {
  essentialLinks,
};
