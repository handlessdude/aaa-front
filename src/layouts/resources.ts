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
    title: 'Projects',
    icon: 'work',
    routeName: routeNames.projects,
  },
  {
    title: 'Applications',
    icon: 'chat',
    routeName: routeNames.applications,
  },
];
export {
  essentialLinks,
};
