import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "@/lib/api";
import { AxiosError } from "axios";

export interface User{
    id?:string;
    name:string;
    email:string;
    number:string;
    token?: string;
};

export interface SignupRequest {
  name: string;
  email: string;
  number: string;
  password: string;
};

export interface VerifyEmailRequest {
  email: string;
  otp: string;
};

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  isEmailVerificationPending: boolean;
};

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  isEmailVerificationPending: false,
};

export const signupUser = createAsyncThunk< 
{email:string, message:string},
SignupRequest,
{rejectValue:string}
>("auth/signup", async (userData, {rejectWithValue} ) => {
  try {
    const response=await api.post("auth/signupUser", userData);
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{message:string}>;
    return rejectWithValue(err.response?.data?.message || "Signup failed")
  }
});

export const verifyEmailOtp=createAsyncThunk<User, VerifyEmailRequest, {rejectValue:string}>("/auth/verifyEmailOtp", async (data,{rejectWithValue}) =>{
try {
    const response=await api.post<User>("/users/verify-otp", data);
    return response.data;
} catch (error) {
     const err = error as AxiosError<{ message: string }>;
  return rejectWithValue(err.response?.data?.message || "OTP verification failed");
}
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isEmailVerificationPending = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
    },
  },
  extraReducers: (builder) => {
    // 🔹 Signup
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isEmailVerificationPending = true; // OTP modal khulega
        // email waghera store karna ho to yahan kar sakte ho
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Signup failed";
      });

    // 🔹 Verify OTP
    builder
      .addCase(verifyEmailOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyEmailOtp.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.isEmailVerificationPending = false;

        if (action.payload.token && typeof window !== "undefined") {
          localStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(verifyEmailOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "OTP verification failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
