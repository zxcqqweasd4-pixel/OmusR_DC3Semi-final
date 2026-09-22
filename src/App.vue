<template>
  <header>
    <nav>
      <h2>Club Manager</h2>
      <div class="links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/members">Members</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
body { font-family: sans-serif; margin: 0; background: #f5f7fb; }
nav { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background: #1e293b; color: white; }
.links { display: flex; gap: 1rem; }
nav a { color: #cbd5e1; text-decoration: none; font-weight: bold; }
nav a.router-link-active { color: white; border-bottom: 2px solid #38bdf8; }
main { padding: 2rem; max-width: 900px; margin: auto; }
.card { background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); margin-bottom: 1rem; }
input, select, button { padding: 0.6rem; border-radius: 6px; border: 1px solid #ccc; }
button { background: #0ea5e9; color: white; cursor: pointer; border: none; }
button.danger { background: #ef4444; }
button.secondary { background: #64748b; }
</style>