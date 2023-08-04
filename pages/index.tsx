import axios from "axios";
import { ConnectWallet } from "@thirdweb-dev/react";

import {useWeb3} from "@3rdweb/hooks";

export default function Home() {

    const {address, chainId, connectWallet} = useWeb3()

    if(address){
        return (
            <div>
                <p>Adress: {address}</p>
                <p>ChainId: {chainId} </p>
            </div>
        )
    } else {

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <h1 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        Web3App
                    </h1>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <div
                                onClick={()=>{
                                    connectWallet("injected")
                                }}
                                style={{background: 'orange'}}
                                className="rounded w-64 flex row justify-center">
                                <img
                                    className="w-8 h-8 mr-2"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
                                    alt="logo"
                                />
                                <p className="text-xl">Connect to wallet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}}
