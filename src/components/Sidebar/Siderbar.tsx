import React from 'react';
import {
   Drawer,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   Stack,
   Box,
   Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { sidebarItems } from './sidebarItems';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Import the Link component from Next.js

const SidebarWrapper = styled(Stack)(({ theme }) => ({
   flexDirection: 'row',
}));

const DrawerBox = styled(Drawer)(({ theme }) => ({
   width: 250,
}));

const CustomLink = styled(Link)(({ theme }) => ({
   textDecoration: 'none', // Remove the default link underline
   color: theme.palette.text.primary, // Use the default text color
}));

const ContentBox = styled(Box)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   height: '100vh',
   overflow: 'hidden',
   width: '100%',
   padding: theme.spacing(2),
}));

const Sidebar = ({ children }: { children: React.ReactNode }) => {
   const router = useRouter();

   if (router.asPath === '/login' || router.asPath === '/') {
      return <>{children}</>;
   }

   return (
      <SidebarWrapper direction="row">
         <DrawerBox variant="permanent" anchor="left" open={true}>
            <Typography
               variant="h4"
               sx={{
                  padding: '1rem',
               }}
            >
               RENTIFY
            </Typography>
            <Box sx={{ width: 250 }}>
               <List>
                  {sidebarItems.map((item, index) => (
                     <CustomLink key={index} href={item.href}>
                        <ListItem button>
                           <ListItemIcon>{item.icon}</ListItemIcon>
                           <ListItemText primary={item.text} />
                        </ListItem>
                     </CustomLink>
                  ))}
               </List>
            </Box>
         </DrawerBox>
         <ContentBox>{children}</ContentBox>
      </SidebarWrapper>
   );
};

export default Sidebar;
