import { create } from 'zustand';

type User = {
  id: string;
  email: string;
  password: string;
  name: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

type AuthActions = {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  setLoading: (loading: boolean) => void;
};

type AuthStore = AuthState & AuthActions;

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        password,
      };

      set({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error: unknown) {
      set({ isLoading: false });
      if (error instanceof Error) {
        throw new Error(`로그인에 실패했습니다. ${error.message}`);
      } else {
        throw new Error('로그인에 실패했습니다.');
      }
    }
  },

  register: async (email: string, password: string, name: string) => {
    set({ isLoading: true });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email,
        name,
        password,
      };

      set({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error: unknown) {
      set({ isLoading: false });
      if (error instanceof Error) {
        throw new Error(`로그인에 실패했습니다. ${error.message}`);
      } else {
        throw new Error('로그인에 실패했습니다.');
      }
    }
  },

  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
    });
  },

  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },
}));

export default useAuthStore;