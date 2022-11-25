import { Stack } from '@mui/material';
import { Sidebar } from '.';

const Navbar = () => (
    <Stack direction="row" alignItems="center" 
           p={4} sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between" }}>
        <Sidebar />
    </Stack>
);


export default Navbar;