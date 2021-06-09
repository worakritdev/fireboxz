<script>
    import Header from "$lib/Components/Header.svelte";

</script>

<body>
    <ion-app>
        <ion-split-pane when="sm" content-id="main">
            <ion-menu content-id="main" side="start" style="--side-width:150px;">
                <ion-header>
                    <ion-toolbar color="primary">
                        <ion-title>Menu</ion-title>
                    </ion-toolbar>
                </ion-header>

                <ion-content fullscreen={true}>
                    <ion-list>
                        <a sveltekit:prefetch href="/">
                            <ion-item>
                                <ion-icon name="home" slot="start" />
                                <ion-label>Home</ion-label>
                            </ion-item>
                        </a>
                        <a sveltekit:prefetch href="/about">
                            <ion-item>
                                <ion-icon name="information" slot="start" />
                                <ion-label>About</ion-label>
                            </ion-item>
                        </a>
                        <a sveltekit:prefetch href="/profile">
                            <ion-item>
                                <ion-icon name="person" slot="start" />
                                <ion-label>Profile</ion-label>
                            </ion-item>
                        </a>
                        <a sveltekit:prefetch href="/settings">
                            <ion-item>
                                <ion-icon name="settings" slot="start" />
                                <ion-label>Setting</ion-label>
                            </ion-item>
                        </a>
                    </ion-list>
                </ion-content>
                <ion-menu-toggle auto-hide="false">
                    <ion-item button>
                        <ion-icon slot="start" name="cube" />
                        <ion-label>P</ion-label>
                    </ion-item>
                </ion-menu-toggle>
            </ion-menu>
            <ion-menu side="end" type="push" content-id="main">
                <ion-header>
                    <ion-toolbar color="light">
                        <ion-title>🚀</ion-title>
                    </ion-toolbar>
                </ion-header>
                <ion-content>
                    <ion-list>
                      
                    </ion-list>
                </ion-content>
            </ion-menu>
            <div class="ion-page" id="main">
                <ion-header>
                    <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-menu-toggle>
                                <ion-button>
                                    <ion-icon slot="icon-only" name="menu" />
                                </ion-button>
                            </ion-menu-toggle>
                        </ion-buttons>
                        <ion-title>Worwin</ion-title>
                    </ion-toolbar>
                </ion-header>
                <ion-content class="ion-padding">
                    <slot><!-- optional fallback --></slot>
                </ion-content>
            </div>
        </ion-split-pane>
    </ion-app>
</body>
