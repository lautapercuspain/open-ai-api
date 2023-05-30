import Image from "next/image"
import React from "react"

export const ReactIcon = React.memo(() => (
  <Image
    loading="eager"
    alt="React JS"
    src={"/icons/react.png"}
    width={24}
    height={24}
  />
))

export const VueJSIcon = React.memo(() => (
  <Image
    loading="eager"
    alt="Vue JS"
    src={"/icons/vue.png"}
    width={24}
    height={24}
  />
))

export const AngularIcon = React.memo(() => (
  <Image
    loading="eager"
    alt="Angular JS"
    src={"/icons/angular.webp"}
    width={24}
    height={24}
  />
))

export const TypescriptIcon = React.memo(() => (
  <Image
    loading="eager"
    alt="Typescript"
    src={"/icons/typescript.png"}
    width={24}
    height={24}
  />
))

export const JavascriptIcon = () => (
  <Image
    loading="eager"
    alt="Javascript"
    src={"/icons/JS.svg"}
    width={24}
    height={24}
  />
)
export const RTL = () => (
  <Image
    loading="eager"
    alt="React Testing Library"
    src={"/icons/rtl.png"}
    width={24}
    height={24}
  />
)
export const Chai = () => (
  <Image
    loading="eager"
    alt="Chai testing Library"
    src={"/icons/chai.png"}
    width={24}
    height={24}
  />
)
export const Jest = () => (
  <Image
    loading="eager"
    alt="Jest Testing Framework"
    src={"/icons/jest.webp"}
    width={24}
    height={24}
  />
)
export const Mocha = () => (
  <Image
    loading="eager"
    alt="Jest Testing Framework"
    src={"/icons/mocha.png"}
    width={24}
    height={24}
  />
)
export const Jasmine = () => (
  <Image
    loading="eager"
    alt="Jest Testing Framework"
    src={"/icons/jasmine.png"}
    width={24}
    height={24}
  />
)