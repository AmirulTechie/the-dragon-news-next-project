import NavBar from '@/components/shared/NavBar';

const AuthLayout = ({children}) => {
    return (
        <div>
            <NavBar></NavBar>
            {children}
        </div>
    );
};

export default AuthLayout;<NavBar></NavBar>