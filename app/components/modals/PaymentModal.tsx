"use client"

import { Dialog, Transition } from "@headlessui/react"
import { ChangeEventHandler, Fragment, useState } from "react"

interface Props {
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
};

type FormValues = {
    cardNumber: string;
    expires: string;
    cvc: string;
};

const initialFormValues: FormValues = {
    cardNumber: "",
    expires: "",
    cvc: "",
};

export default function PaymentModal({isOpen, setIsOpen }: Props) {
    const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className={
                                    "transform xl:w-1/3 sm:w-1/2 overflow-hidden rounded-2xl bg-purple-400 p-4 text-left shadow-xl h-5/6 transition-all"
                                }
                            >
                                <div className="flex flex-col justify-start justify-items-start content-center gap-8 p-16">
                                    <Dialog.Title
                                        as="h1"
                                        className="text-lg leading-6 text-white text-left text-5xl font-rubik"
                                    >
                                        Add Payment
                                    </Dialog.Title>
                                    <Dialog.Title
                                        as="h1"
                                        className="text-2xl font-sm leading-10 text-gray-200"
                                    >
                                        Add your Card Information to continue:
                                    </Dialog.Title>
                                    <hr className="border-1 border-purple-500"/>
                                    {/* Credit Card Info Form */}
                                    <form className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-4">
                                            <label htmlFor="cardNumber" className="text-purple-300 font-sm">
                                                Card Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="cardNumber"
                                                id="cardNumber"
                                                className="bg-purple-500 text-white focus:ring-purple-400 focus:border-purple-500 block w-full p-3 rounded-md"
                                                placeholder="1234 1234 1234 1234"
                                                maxLength={16}
                                                value={formValues.cardNumber}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-4">
                                            <div className="flex flex-col flex-grow-1 gap-4">
                                                <label htmlFor="expires"  className="text-purple-300 font-sm">
                                                    Expires
                                                </label>
                                                <input
                                                    type="text"
                                                    name="expires"
                                                    id="expires"
                                                    className="bg-purple-500 text-white focus:ring-purple-400 focus:border-purple-500 block w-full p-3 rounded-md"
                                                    placeholder="MM/YY"
                                                    maxLength={5}
                                                    value={formValues.expires}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="flex flex-col flex-grow-1 gap-4">
                                                <label htmlFor="cvc" className="text-purple-300 font-sm">
                                                    CVC
                                                </label>
                                                <input
                                                    type="number"
                                                    name="cvc"
                                                    id="cvc"
                                                    className="bg-purple-500 text-white focus:ring-purple-400 focus:border-purple-500 block w-full p-3 rounded-md"
                                                    placeholder="123"
                                                    maxLength={3}
                                                    value={formValues.cvc}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4 mt-4">
                                            <div className="basis-1/3">
                                            </div>
                                            <div className="basis-1/3">
                                            <button className="w-full bg-transparent border-2 border-purple-500 text-white py-3 rounded-md">
                                                Cancel
                                            </button>
                                            </div>
                                            <div className="basis-1/3">
                                            <button type="submit" className="w-full text-black bg-mint text-white py-3 rounded-md">
                                                Continue
                                            </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};