
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const LSCOLORS: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const PATH: string;
	export const USER_ZDOTDIR: string;
	export const LDFLAGS: string;
	export const PNPM_HOME: string;
	export const MANPATH: string;
	export const LC_ALL: string;
	export const SSH_AUTH_SOCK: string;
	export const _P9K_TTY: string;
	export const CPPFLAGS: string;
	export const npm_execpath: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_json: string;
	export const LANG: string;
	export const BUN_INSTALL: string;
	export const SHELL: string;
	export const TERM_PROGRAM: string;
	export const LaunchInstanceID: string;
	export const GIT_ASKPASS: string;
	export const HOMEBREW_CELLAR: string;
	export const LOGNAME: string;
	export const INFOPATH: string;
	export const ZDOTDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const npm_package_name: string;
	export const __CFBundleIdentifier: string;
	export const XPC_FLAGS: string;
	export const LS_COLORS: string;
	export const npm_node_execpath: string;
	export const SECURITYSESSIONID: string;
	export const TERM: string;
	export const npm_config_local_prefix: string;
	export const VSCODE_INJECTION: string;
	export const JAVA_HOME: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const PWD: string;
	export const TERM_SESSION_ID: string;
	export const _P9K_SSH_TTY: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const COMMAND_MODE: string;
	export const PAGER: string;
	export const npm_lifecycle_event: string;
	export const HOME: string;
	export const P9K_TTY: string;
	export const LESS: string;
	export const USER: string;
	export const _: string;
	export const VSCODE_NONCE: string;
	export const npm_config_user_agent: string;
	export const XPC_SERVICE_NAME: string;
	export const SHLVL: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const TMPDIR: string;
	export const COLORTERM: string;
	export const ZSH: string;
	export const LC_CTYPE: string;
	export const P9K_SSH: string;
	export const MallocNanoZone: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const HOMEBREW_PREFIX: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_package_version: string;
	export const NODE: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		LSCOLORS: string;
		__CF_USER_TEXT_ENCODING: string;
		PATH: string;
		USER_ZDOTDIR: string;
		LDFLAGS: string;
		PNPM_HOME: string;
		MANPATH: string;
		LC_ALL: string;
		SSH_AUTH_SOCK: string;
		_P9K_TTY: string;
		CPPFLAGS: string;
		npm_execpath: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_json: string;
		LANG: string;
		BUN_INSTALL: string;
		SHELL: string;
		TERM_PROGRAM: string;
		LaunchInstanceID: string;
		GIT_ASKPASS: string;
		HOMEBREW_CELLAR: string;
		LOGNAME: string;
		INFOPATH: string;
		ZDOTDIR: string;
		HOMEBREW_REPOSITORY: string;
		npm_package_name: string;
		__CFBundleIdentifier: string;
		XPC_FLAGS: string;
		LS_COLORS: string;
		npm_node_execpath: string;
		SECURITYSESSIONID: string;
		TERM: string;
		npm_config_local_prefix: string;
		VSCODE_INJECTION: string;
		JAVA_HOME: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		PWD: string;
		TERM_SESSION_ID: string;
		_P9K_SSH_TTY: string;
		VSCODE_GIT_IPC_HANDLE: string;
		COMMAND_MODE: string;
		PAGER: string;
		npm_lifecycle_event: string;
		HOME: string;
		P9K_TTY: string;
		LESS: string;
		USER: string;
		_: string;
		VSCODE_NONCE: string;
		npm_config_user_agent: string;
		XPC_SERVICE_NAME: string;
		SHLVL: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		TMPDIR: string;
		COLORTERM: string;
		ZSH: string;
		LC_CTYPE: string;
		P9K_SSH: string;
		MallocNanoZone: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		HOMEBREW_PREFIX: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_package_version: string;
		NODE: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
