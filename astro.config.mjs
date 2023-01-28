import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";
import compress from "astro-compress";
import critters from "astro-critters";
import robotdottxt from 'astro-robots-txt';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [tailwind(), sitemap(), prefetch(), partytown(), image(), compress(), critters(), robotdottxt(), react()]
});