<script>
    // your script goes here
    let username, password, jwt;
    async function handleLogin() {
        const res = await fetch(`http://localhost:1337/auth/login`, {
            method: "POST",
            headers:
            body: JSON.stringify({
                identifier: username,
                password: password,
            }),
        });

        jwt = await res.json();
        console.log(jwt);
    }
</script>

<h1>ProfilePage</h1>

<svelte:head>
    <title>ProfilePage</title>
</svelte:head>

<!-- markup (zero or more items) goes here -->
{jwt}

<form on:submit|preventDefault={handleLogin}>
    <input
        type="text"
        bind:value={username}
        name="username"
        id="username"
        placeholder="Username"
    />
    <input
        type="password"
        bind:value={password}
        name="password"
        id="password"
        placeholder="Password"
    />
    <button type="submit" on:click={handleLogin}>Login</button>
</form>

<style>
    /* your styles go here */
</style>
