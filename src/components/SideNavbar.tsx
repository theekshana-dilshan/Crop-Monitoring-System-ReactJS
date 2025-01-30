import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
    HomeIcon,
    UsersIcon,
    TruckIcon,
    WrenchScrewdriverIcon,
    ClipboardDocumentListIcon,
    Cog6ToothIcon,
    PowerIcon,
    CubeIcon,
    Squares2X2Icon,
} from "@heroicons/react/24/solid";
import React from "react";

const SideNavbar = () => {
    return (
        <Card className="h-[calc(100vh-4rem)] w-full max-w-[13rem] p-4 shadow-xl shadow-green-300">
            <List>
                <Link to="/">
                    <ListItem className="hover:text-green-800">
                        <ListItemPrefix>
                            <HomeIcon className="h-6 w-6 mr-2 mb-2 mt-2"/>
                        </ListItemPrefix>
                        Dashboard
                    </ListItem>
                </Link>
                <Link to="/field">
                    <ListItem className="hover:text-green-800">
                        <ListItemPrefix>
                            <Squares2X2Icon className="h-6 w-6 mr-2 mb-2 mt-2"/>
                        </ListItemPrefix>
                        Field
                    </ListItem>
                </Link>
                <Link to="/crop">
                    <ListItem className="hover:text-green-800">
                        <ListItemPrefix>
                            <CubeIcon className="h-6 w-6 mr-2 mb-2 mt-2"/>
                        </ListItemPrefix>
                        Crop
                    </ListItem>
                </Link>
                <Link to="/staff">
                    <ListItem className="hover:text-green-800">
                        <ListItemPrefix>
                            <UsersIcon className="h-6 w-6 mr-2 mb-2 mt-2"/>
                        </ListItemPrefix>
                        Staff
                    </ListItem>
                </Link>
                <Link to="/vehicle">
                    <ListItem className="hover:text-green-800">
                        <ListItemPrefix>
                            <TruckIcon className="h-6 w-6 mr-2 mb-2 mt-2"/>
                        </ListItemPrefix>
                        Vehicle
                    </ListItem>
                </Link>
                <Link to="/equipment">
                    <ListItem className="hover:text-green-800">
                        <ListItemPrefix>
                            <WrenchScrewdriverIcon className="h-6 w-6 mr-2 mb-2 mt-2"/>
                        </ListItemPrefix>
                        Equipment
                    </ListItem>
                </Link>
                <Link to="/log">
                    <ListItem className="hover:text-green-800">
                        <ListItemPrefix>
                            <ClipboardDocumentListIcon className="h-6 w-6 mr-2 mb-2 mt-2"/>
                        </ListItemPrefix>
                        Log
                    </ListItem>
                </Link>
                <hr className="my-2 border-blue-gray-50"/>
                <ListItem className="hover:text-green-800">
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-6 w-6 mr-2 mb-2 mt-2"/>
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem className="hover:text-green-800">
                    <ListItemPrefix>
                        <PowerIcon className="h-6 w-6 mr-2 mb-2 mt-2"/>
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
    );
};

export default SideNavbar;
