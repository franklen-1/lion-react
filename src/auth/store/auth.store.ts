import type { User } from '@/interfaces/user.interface';
import { create } from 'zustand'
import { loginAction } from '../actions/login.action';
import { checkAuthAction } from '../actions/check-auth.actions';

type AuthStatus ='authenticated' | 'not-authenticated' | 'checking';
    // type Store ={
    //     count:number;
    //     inc:() => void;
    //     dec:() => void;
    //     incBy:(value:number) => void;
    // };

    type AuthState ={
        //Properties
            user: User | null,
            token:string | null,
            authStatus: AuthStatus,

        //Getters
        isAdmin: () => boolean;
        //Actions
            login:( email: string , password:string) => Promise<boolean>; 
            logout:()=> void;
            checkAuthStatus:() => Promise <boolean>;
    };

export const useAuthStore = create<AuthState>()((set, get) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
//   dec: () => set((state) => ({ count: state.count - 1 })),
//   incBy: (value:number) => set((state) => ({ count: state.count + value })),

    //implementacion del Store
    user: null,
    token : null,
    authStatus:'checking',

    //Getters / nivel de acceso
    isAdmin:() => {
        const roles = get().user?.roles || [];
        return roles.includes('admin');
    },

    //Actions 
    login: async(email: string, password: string) =>{
            console.log({email, password});

        try {
                const data = await loginAction(email, password);
                localStorage.setItem('token', data.token);

        set ({user: data.user , token:data.token, authStatus:'authenticated'});
        return true;

        } catch(error){
                localStorage.removeItem('token');
                set ({user :null, token:null, authStatus:'not-authenticated'})
        return false;
        }
    },

    logout:() => {
        localStorage.removeItem('token');
        set ({user:null, token:null, authStatus:'not-authenticated'})
    },


    checkAuthStatus: async () => {
        try {
            const {user, token} = await checkAuthAction();
            set ({
                user: user,
                token:token,
                authStatus:'authenticated'
            });
            return true;
        } catch (error) {
            set ({
                user: undefined,
                token: undefined,
                authStatus:'not-authenticated'
            });
            return false;
        }
    },
}));
