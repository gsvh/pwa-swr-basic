# React + Vite + SWR Progressive Web App

This project is a demonstration of how to build a Progressive Web App (PWA) with offline capabilities using React, Vite, and SWR.

## Purpose

The purpose of this project is to demonstrate a basic progressive web application that is built with React, Vite, and SWR. It uses [vite-plugin-pwa](https://github.com/vite-pwa/vite-plugin-pwa) for it's PWA capabilities (including offline availabiliy).

This application fetches data from [WorldTimeAPI](http://worldtimeapi.org) and caches it using the basic [LocalStorage Based Persistent Cache](https://swr.vercel.app/docs/advanced/cache#localstorage-based-persistent-cache) example from [**SWR**](https://swr.vercel.app/), to make the last-fetched data available when offline.

## Technologies

- [**React**](https://react.dev/): A JavaScript library for building user interfaces.
- [**Vite**](https://vitejs.dev/): A build tool that aims to provide a faster and leaner development experience for modern web projects.
- [**SWR**](https://swr.vercel.app/): A React Hooks library for remote data fetching.

## Getting Started

1. Clone the repository
2. Install dependencies with `yarn install`
3. Start the PWA with `yarn pwa` (The normal development server can still be started with `yarn dev`, but PWA features will not be available)

Enjoy exploring and building upon this project!
