import { createContext, ReactNode, useCallback, useContext, useState } from "react"
import { api } from "../services/api";

interface AuthContextState {
    token: TokenState;
    signIn({ email, password }: UserData): Promise<void>;
    userLogged(): boolean;
    userRegister({ name, email, password }: UserData): Promise<void>
}

interface UserData {
    name?: string
    email?: string;
    password?: string;
}

interface TokenState {
    token: string;
}

interface InputProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState)

export const AuthProvider: React.FC<InputProps> = ({children}) => {
    const [token, setToken] = useState<TokenState>(() => {
        const token = localStorage.getItem("@PermissionMRY:token");

        if(token) {
            return { token }
        }

        return { } as TokenState
    })

    const signIn = useCallback(async ({email, password}:UserData) => {
        const response = await api.post('/session', {
            email,
            password
        })

        const { token } = response.data
        setToken(token)

        localStorage.setItem('@MRYTOKEN:token', token)
    }, [])

        const userRegister = useCallback(async ({name, password, email}: UserData) => {
        try {
            await api.post('/signup', {
                name,
                email,
                password
            })
        } catch (error) {            
            console.log(error);
        }
    }, [])

    const userLogged = useCallback(() => {
        const token = localStorage.getItem('@MRYTOKEN:token');
        if(token) {
            return true;
        }
        return false
    }, [])

    return (
        <AuthContext.Provider value={
            {
                token, 
                signIn, 
                userLogged,
                userRegister
            }
        }>

            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextState {
    const context = useContext(AuthContext)
    return context
}