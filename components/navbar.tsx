import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search for a city"
      classNames={{
        inputWrapper: "bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-200",
        input: "text-sm text-white placeholder:text-white/70",
      }}
      labelPlacement="outside"
      placeholder="Search for a city..."
      startContent={
        <SearchIcon className="text-base text-white/70 pointer-events-none flex-shrink-0" />
      }
      type="search"
      variant="flat"
    />
  );

  return (
    <HeroUINavbar 
      maxWidth="xl" 
      position="sticky" 
      className="backdrop-blur-xl bg-gradient-to-r from-blue-600/80 via-indigo-600/80 to-purple-600/80 border-b border-white/10"
      height="72px"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-3 hover:scale-105 transition-transform duration-200" href="/">
            <Image 
              src="/Weather-logo-transparent.png" 
              alt="Weather Logo" 
              width={170}
              height={50}
              priority
              className="drop-shadow-lg"
            />
            <div className="hidden sm:block">
            </div>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-6 justify-start ml-8">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "px-4 py-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-200 font-medium text-sm border border-transparent hover:border-white/20",
                  "data-[active=true]:text-white data-[active=true]:bg-white/20 data-[active=true]:border-white/30"
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex mr-4">{searchInput}</NavbarItem>
        <NavbarItem className="hidden sm:flex gap-3">
          <Link 
            isExternal 
            aria-label="Github" 
            href={siteConfig.links.github}
            className="p-2 rounded-full hover:bg-white/10 transition-all duration-200 text-white/80 hover:text-white border border-transparent hover:border-white/20"
          >
            <GithubIcon className="w-5 h-5" />
          </Link>
          <div className="p-1">
            <ThemeSwitch />
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link 
          isExternal 
          aria-label="Github" 
          href={siteConfig.links.github}
          className="p-2 rounded-full hover:bg-white/10 transition-all duration-200 text-white/80 hover:text-white"
        >
          <GithubIcon className="w-5 h-5" />
        </Link>
        <div className="p-1">
          <ThemeSwitch />
        </div>
        <NavbarMenuToggle className="text-white ml-2" />
      </NavbarContent>

      <NavbarMenu className="backdrop-blur-xl bg-gradient-to-b from-blue-600/95 to-indigo-600/95 border-none pt-6">
        <div className="px-4 pb-4">
          {searchInput}
        </div>
        <div className="px-4 flex flex-col gap-3">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className={clsx(
                  "w-full px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium border border-transparent hover:border-white/20",
                  index === 0 && "bg-white/20 border-white/30 text-white"
                )}
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
