/*
 * SPDX-License-Identifier: GPL-3.0
 * Vencord Desktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 */

import { Settings } from "./settings";

window.addEventListener("load", () => {
    const bodyStyles = document.body.computedStyleMap();

    const color = bodyStyles.get("--text-normal");
    const backgroundColor = bodyStyles.get("--background-primary");

    if (color instanceof CSSUnparsedValue && typeof color[0] === "string" && CSS.supports("color", color[0])) {
        Settings.store.splashColor = color[0];
    }

    if (
        backgroundColor instanceof CSSUnparsedValue &&
        typeof backgroundColor[0] === "string" &&
        CSS.supports("background-color", backgroundColor[0])
    ) {
        Settings.store.splashBackground = backgroundColor[0];
    }
});
