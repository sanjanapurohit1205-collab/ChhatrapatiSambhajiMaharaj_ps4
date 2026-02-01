@import './design.css';
@import './animations.css';

/* Keyframes defined in animations.css, loaded here */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    font-family: var(--font-sans);
    background-color: var(--color-bg-body);
    color: var(--color-text-main);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
}

input,
textarea,
select {
    font-family: inherit;
    font-size: 1rem;
}

a {
    text-decoration: none;
    color: inherit;
}

/* Utilities */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-md);
}

.card {
    background-color: var(--color-bg-card);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--color-border);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius-md);
    font-weight: 600;
    transition: background-color var(--transition-normal);
}

.btn-primary {
    background-color: var(--color-primary);
    color: white;
}

.btn-primary:hover {
    background-color: var(--color-primary-hover);
}

.btn-outline {
    border: 1px solid var(--color-border);
    color: var(--color-text-main);
}

.btn-outline:hover {
    background-color: var(--color-bg-body);
    border-color: var(--color-primary);
    color: var(--color-primary);
}

.text-center {
    text-align: center;
}

.mt-1 {
    margin-top: var(--space-sm);
}

.mt-2 {
    margin-top: var(--space-md);
}

.mt-4 {
    margin-top: var(--space-lg);
}

.flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
}

/* Layout Shell */
.app-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.app-header {
    height: 64px;
    background-color: var(--color-bg-card);
    border-bottom: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--space-xl);
    position: sticky;
    top: 0;
    z-index: 10;
}

.app-logo {
    font-weight: 800;
    font-size: 1.25rem;
    color: var(--color-primary);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.app-main {
    flex: 1;
    padding: var(--space-xl);
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
}