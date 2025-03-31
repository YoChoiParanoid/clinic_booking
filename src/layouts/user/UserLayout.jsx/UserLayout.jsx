import UserHeader from "../../../component/UserHeader/UserHeader";

const UserLayout = ({ children }) => {
    return (
        <>
            <UserHeader />
            <div className="" style={{ paddingTop: "85px" }}>
                {children}
            </div>
        </>
    );
};

export default UserLayout;
