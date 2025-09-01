"use client";
import React, { useState } from "react"; 
import Text from "../component/Text";
import Image from "next/image";
import Button from "../component/Button";
import Link from "next/link";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { tv } from "tailwind-variants";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";

// ✅ Tailwind Variants (all styles collected here)
const styles = {  
  container: tv({
    base: "flex justify-center items-center w-full h-screen bg-black",
  }),
  formContainer: tv({
    base: "form-container flex justify-between overflow-hidden drop-shadow-xl w-11/12 max-w-screen-xl shadow-2xl",
  }),
  formSection: tv({
    base: "form-section w-1/2 px-24 py-12 border-red-600",
  }),
  illustrationSection: tv({
    base: "illustration-section w-1/2 flex justify-center items-center",
  }),
  logoWrap: tv({
    base: "logo-wrap flex justify-center gap-x-1 items-center mt-6",
  }),
  description: tv({
    base: "text-gray-300 mt-2 text-sm",
  }),
  form: tv({
    base: "w-full mt-4",
  }),
  formGroup: tv({
    base: "mb-4",
  }),
  label: tv({
    base: "block mb-2 text-white",
  }),
  input: tv({
    base: "w-full px-4 py-2 bg-transparent border border-gray-100 text-white focus:outline-none focus:ring focus:ring-red-500",
  }),
  passwordGroup: tv({
    base: "mb-4 relative",
  }),
  passwordToggle: tv({
    base: "absolute right-3 top-[35px] cursor-pointer text-gray-400",
  }),
  rememberWrap: tv({
    base: "flex items-center justify-between mb-8",
  }),
  rememberInner: tv({
    base: "flex items-center",
  }),
  rememberLabel: tv({
    base: "ml-2 text-gray-200",
  }),
  switch: tv({
    base: `
      mt-[0.2rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 relative
      before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] 
      after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 
      after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] 
      checked:bg-[#bb0000] checked:after:bg-white checked:after:ml-[1.0625rem]
      hover:cursor-pointer focus:outline-none focus:ring-0
    `,
  }),
  forgotLink: tv({
    base: "text-[#E50000] hover:underline",
  }),
  signInBtn: tv({
    base: "w-full text-center py-3 mb-4",
  }),
  or: tv({
    base: "my-2 text-gray-400 text-center",
  }),
  socialWrap: tv({
    base: "flex justify-center gap-x-4",
  }),
  socialBtn: tv({
    base: "flex items-center justify-center p-0",
  }),
  socialIcon: tv({
    base: "h-10 w-10 p-3 text-white outline outline-1 outline-gray-100 hover:outline-red-600 cursor-pointer transition-all duration-300",
  }),
  footer: tv({
    base: "text-sm text-gray-400 text-center mt-6",
  }),
  footerLink: tv({
    base: "text-[#E50000] hover:underline",
  }),
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, className = "", ...props }) => (
  <input type={type} placeholder={placeholder} className={styles.input({ className })} {...props} />
);

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <div className={styles.container()}>
      <div className={styles.formContainer()}>
        {/* Left Form Section */}
        <div className={styles.formSection()}>
          <div className="text-center">
            <div className={styles.logoWrap()}>
              <Text as="h2">
                <span className="text-[#bb0000]">Welcome </span>Back!
              </Text>
            </div>
            <Text as="p" className={styles.description()}>
              Please enter your credentials to access your account.
            </Text>
          </div>

          <form action="#" className={styles.form()}>
            {/* Email */}
            <div className={styles.formGroup()}>
              <Text as="span" className={styles.label()}>
                Email
              </Text>
              <Input id="email" type="email" name="email" placeholder="Your email address" />
            </div>

            {/* Password */}
            <div className={styles.passwordGroup()}>
              <Text as="span" className={styles.label()}>
                Password
              </Text>
              <Input
                id="password"
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="Your password"
                className="pr-10"
              />
              <span onClick={togglePasswordVisiblity} className={styles.passwordToggle()}>
                {passwordShown ? <EyeIcon className="h-5 w-5" /> : <EyeClosedIcon className="h-5 w-5" />}
              </span>
            </div>

            {/* Remember Me + Forgot */}
            <div className={styles.rememberWrap()}>
              <div className={styles.rememberInner()}>
                <input type="checkbox" id="rememberMe" role="switch" className={styles.switch()} />
                <Text as="span" className={styles.rememberLabel()}>
                  Remember me
                </Text>
              </div>
              <Text as="span">
                <Link href="#" className={styles.forgotLink()}>
                  Forgot password?
                </Link>
              </Text>
            </div>

            {/* Sign In Button */}
            <Button label="SIGN IN" variant="primary" className={styles.signInBtn()} />

            {/* Or */}
            <div className={styles.or()}>Or</div>

            {/* Social Buttons */}
            <div className={styles.socialWrap()}>
              <Button variant="empty" className={styles.socialBtn()} label={<FaFacebookF className={styles.socialIcon()} />} />
              <Button variant="empty" className={styles.socialBtn()} label={<FaApple className={styles.socialIcon()} />} />
              <Button variant="empty" className={styles.socialBtn()} label={<FaGoogle className={styles.socialIcon()} />} />
            </div>

            {/* Footer */}
            <div className={styles.footer()}>
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className={styles.footerLink()}>
                Sign up
              </Link>
            </div>
          </form>
        </div>

        {/* Right Illustration Section */}
        <div className={styles.illustrationSection()}>
          <Image src="/ImgCon2/Image (2).svg" height={500} width={500} alt="login-img" className="mt-20" decoding="async" priority={false} />
        </div>
      </div>
    </div>
  );
}

export default Login;
