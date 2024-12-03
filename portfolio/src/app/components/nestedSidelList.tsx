import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import theme from '../theme';
import { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import Link from 'next/link';
import { usePathname } from 'next/navigation'




const iconMapping = {
  InboxIcon: InboxIcon,
  DraftsIcon: DraftsIcon,
  SendIcon: SendIcon,
  StarBorder: StarBorder,
  HomeIcon : HomeIcon,
  Diversity2 : Diversity2Icon,
  AppRegistrationIcon : AppRegistrationIcon,
  TaskAltIcon : TaskAltIcon,
  ViewCarouselIcon: ViewCarouselIcon,
  FormatQuote: FormatQuoteIcon,
  AttachMoneyIcon : AttachMoneyIcon,
  LibraryMusicIcon : LibraryMusicIcon,
  AddIcon : AddIcon,
  Login : LoginIcon
};


export default  function  NestedList() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [menu, setMenu] = useState<MenuItem[]>([]);



  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URI}/api/menuItems`)
    .then(response=>response.json())
    .then(json=>setMenu(json))
  }, []);

  const homeMenu : MenuItem = menu.find((home)=>home.category==="Home") as MenuItem;
  const sideMenuWithoutHome = menu.filter((home)=>home.category !=="Home");



  const handleClick = (id:string) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [id]: !prevOpenItems[id],
    }));
  };

  const pathname = usePathname();

  return (
<List
      sx={{
        mt: 0,
        color: 'text.primary',
        boxShadow: 3,
        borderRadius: 2,
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.default',
        '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
          color: theme.palette.secondary.main
        }
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Skills
        </ListSubheader>
      }
    >
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
    <ListItemButton>
    <ListItemIcon>
      <HomeIcon/>
    </ListItemIcon>
    <ListItemText primary={typeof homeMenu==='undefined' ? 'Loading...' : homeMenu.category} />
  </ListItemButton>
  </Link>
      {sideMenuWithoutHome.map((item) => (
        <div key={item._id}>
          <ListItemButton  onClick={() => handleClick(item._id)}>
            <ListItemText primary={item.category} />
            {openItems[item._id] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openItems[item._id]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.subCategory.map((subItem) => {
                 const IconComponent = iconMapping[subItem.icon as keyof typeof iconMapping];
                return (
                  <Link className={`link ${pathname === '/' ? 'active' : ''}`} href={subItem.link} key={subItem._id}>
                <ListItemButton  sx={{ pl: 4 }}>
                  <ListItemIcon>
                  {IconComponent ? <IconComponent /> : null}
                  </ListItemIcon>
                  <ListItemText primary={subItem.name} />
                </ListItemButton>
                </Link>
              )})}
            </List>
          </Collapse>
          </div>
      ))}
    </List>
  );
}