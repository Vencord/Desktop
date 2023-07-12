/*
 * SPDX-License-Identifier: GPL-3.0
 * Vesktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 */

declare global {
    export var VencordDesktopNative: typeof import("preload/VencordDesktopNative").VencordDesktopNative;
    export var VencordDesktop: typeof import("renderer/index");
    export var VCDP: any;

    export var IS_DEV: boolean;
}

export {};
