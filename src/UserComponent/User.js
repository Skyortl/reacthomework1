import './User.css';
function User() {
    const user = {
        name: 'Davyd',
        surname: 'Bukhbinder',
        phoneNumber: '+380988888888',
        e_mail: 'mail@gmail.com'
    }
    return (
    <div className="user">
        <p>Name: {user.name}</p> 
        <p>Surname: {user.surname}</p> 
        <p>Phone number: {user.phoneNumber}</p> 
        <p>E-mail: {user.e_mail}</p> 
    </div>);
}
export default User;