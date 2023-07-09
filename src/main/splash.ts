/*
 * SPDX-License-Identifier: GPL-3.0
 * Vencord Desktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 */

import { BrowserWindow } from "electron";
import { join } from "path";
import { SplashProps } from "shared/browserWinProperties";
import { VIEW_DIR } from "shared/paths";

import { Settings } from "./settings";

export async function createSplashWindow() {
    const splash = new BrowserWindow(SplashProps);

    splash.loadFile(join(VIEW_DIR, "splash.html"));

    if (Settings.store.splashTheming) {
        if (Settings.store.splashColor)
            splash.webContents.insertCSS(`body { --fg: ${Settings.store.splashColor} !important }`);
        if (Settings.store.splashBackground)
            splash.webContents.insertCSS(`body { --bg: ${Settings.store.splashBackground} !important }`);
    }

    return splash;
}
