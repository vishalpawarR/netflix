import Input from "@/components/Input";
import { register } from "module";
import { useCallback, useState } from "react";

const Auth = () => {
    const [emailValue, setEmailValue] = useState('');
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    },[variant])

    return (
        <div className="relative h-full w-full bg-[url('/img/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black  w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/img/logo.svg" alt="logo" className="h-12"/>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {
                                variant === 'register' && (
                                    <Input 
                                        label="Username"
                                        id="username"
                                        value={usernameValue}
                                        onChange={(ev) => {setUsernameValue(ev.target.value)}}
                                    />
                                )
                            }
                            <Input 
                                label="Email"
                                id="email"
                                value={emailValue}
                                onChange={(ev) => {setEmailValue(ev.target.value)}}
                                type="email"
                            />
                            <Input 
                                label="Password"
                                id="password"
                                value={passwordValue}
                                onChange={(ev) => {setPasswordValue(ev.target.value)}}
                            />
                            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700">
                                {variant === 'login' ? 'Login' : 'Sign up'}
                            </button>
                            <p className="text-neutral-400 mt-12">
                                {
                                    variant === 'login' ? 'First time using Netflix' : 'Already have an account?'
                                }
                                <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                    {
                                        variant === 'login' ? 'Create an account' : 'Login'
                                    }
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;