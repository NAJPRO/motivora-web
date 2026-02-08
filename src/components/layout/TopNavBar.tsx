import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, DevicePhoneMobileIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '../ui/Button'
import Link from 'next/link'

const navigation = [
    { name: 'Acceuil', href: '/', current: true },
    { name: 'Citations', href: 'citation', current: false },
    { name: 'Projects', href: 'explorer', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function TopNavBar() {
    return (
        <Disclosure
            as="nav"
            className="fixed top-0 left-0 right-0 z-50 bg-light-800/50 shadow backdrop-blur after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
        >
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    <div className="flex flex-1 items-center justify-start  sm:items-stretch sm:justify-between">
                        <Link href={"/"} className="flex shrink-0 items-center">
                            <span className="ml-2 text-3xl text-primary font-black font-serif">Motivora</span>
                        </Link>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4 ">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'text-primary font-bold' : 'text-base-100 hover:bg-white/5 hover:text-primary ',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className='gap-x-2 hidden sm:flex '>
                            <Button variant={"destructive"} className='text-secondary-content hidden sm:flex hover:text-primary'>
                                <span>
                                    <DevicePhoneMobileIcon aria-hidden="true" className="size-6" />
                                </span>
                                <span className='hidden md:flex'>
                                    Télécharger l&apos;app
                                </span>
                            </Button>
                            <Button variant={"outline"}>Se connecter</Button>
                            {/* <button className='btn btn-primary'>Se connecter</button> */}
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                            </DisclosureButton>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* <button
                            type="button"
                            className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                            >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="size-6" />
                            </button> */}

                        {/* Profile dropdown */}
                        {/* <Menu as="div" className="relative ml-3">
                            <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                                />
                            </MenuButton>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                                    >
                                        Your profile
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                                    >
                                        Settings
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                                    >
                                        Sign out
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu> */}
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? ' text-primary font-bold' : 'text-base-300 hover:bg-white/5 hover:text-primary',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>

                    ))}
                    <DisclosureButton
                        as='a'
                        href='#'
                        className='text-base-300 hover:bg-white/5 hover:text-primary flex rounded-md px-3 py-2 text-base font-medium'
                    >
                        <DevicePhoneMobileIcon aria-hidden="true" className="size-6" />
                        Télécharger l&apos;app
                    </DisclosureButton>

                    <DisclosureButton
                        as='a'
                        href='#'
                        className='flex justify-center w-full mt-2'
                    >
                        <Button variant={"outline"} className='w-full'>Se connecter</Button>
                    </DisclosureButton>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
