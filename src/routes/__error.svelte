<script context="module">
    export function load({ err, status }) {
        return {
            props: {
                title: `${status}: ${err} /`,
            },
        };
    }
</script>

<script>
    export let title;
</script>

<h1>{title}</h1>
