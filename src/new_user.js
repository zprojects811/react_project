import Forms from "./templates/forms";

export default function NewUser() {
    return <div><Forms label="New User" button="Create" api="user/create" path="/dashboard/users" hasLocalStorage={false}/></div>
}
