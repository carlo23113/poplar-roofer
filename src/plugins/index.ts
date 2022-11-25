/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import { createPinia, PiniaVuePlugin } from "pinia";
import vuetify from "./vuetify";

// Types
import type { App } from "vue";
const pinia = createPinia();

export function registerPlugins(app: App) {
  loadFonts();
  app.use(PiniaVuePlugin);
  app.use(vuetify);
  app.use(pinia);
}
