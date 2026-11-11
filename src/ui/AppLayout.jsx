import {Outlet} from "react-router-dom";

export default function AppLayout() {
    return (
        <>
            <p>This is App Layout</p>
            <Outlet />
        </>
    )
}