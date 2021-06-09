<script>
    import { page } from "$app/stores";
    // your script goes here

    const {slug} = $page.params
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<ion-header>
    <ion-toolbar>
        <ion-title>{slug}</ion-title>
    </ion-toolbar>
</ion-header>