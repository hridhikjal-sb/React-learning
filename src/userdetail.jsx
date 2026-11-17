export const UserDetail = ({ username, isOnline, role }) => {
    let roleBadge = null;

    if (role === "admin") {
        roleBadge = <span>Admin</span>;
    } else if (role === "user") {
        roleBadge = <span>User</span>;
    }

    return (
        <div>
            <p>{roleBadge}</p>
            <h2>{username}</h2>
            <p>Status: {isOnline ? "Online" : "Offline"}</p>
            <span>{isOnline ? "🟢" : "🔴"}</span>
        </div>
    );
};
