import _ from 'lodash';
window._ = _;

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
    wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
    wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
    // auth: {
    //     headers: {
    //         "Authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzE5MGUwNmFlMWIyNTEzMGQ2NjRlNDZjMDIxN2VjN2MyNjQ1YWI4NGY4OGFkZWVjNThhYzZiNWI3MTU2ZTc0ZWRhZTMxNzZlYjkzNzI0MzEiLCJpYXQiOjE2Njc3Mzc2MTAuNDEzOTA2MDk3NDEyMTA5Mzc1LCJuYmYiOjE2Njc3Mzc2MTAuNDEzOTExMTA0MjAyMjcwNTA3ODEyNSwiZXhwIjoxNjk5MjczNjEwLjM5NTE5MDAwMDUzNDA1NzYxNzE4NzUsInN1YiI6IjE0OTEiLCJzY29wZXMiOltdfQ.U51p-UzGIz8OsUUtKI4rR8Bmc-2F0OGSBwFhS3G7w_ghmSCZlCz7FATFKUOLrWP1rcJQE9u-kD7wYU5ZbAmAL7JelBcNpSsmfVrDg2l7c6hX0whwfH6oIFNFLTZmOM950waWGhwOfKAjsvjGTSu32xSKjtjWpVx3xbj-wQjwSxi4Vv0n_ygR2rlRm4H9IFd6IQzfdGy5lOtcWbGxM27WShtT9QoYrYKjUs8VWMYuoBTv-wjoU4ToplncixWwAGnsiSocEJ_CyUiNZPC7Q7FgGvG0_lUQCp-iNGfEX6pZUHbKnHSXu5btr3w3I7xjIa1z63Sz3qfhJumSzQlMdToMYCeIBIZrNBp_JnJurDDq-QFNPv7S6dlBkG3cIxA073w0jUAtEXj3JgUytBSDfaWoVppWASeG5W2V12zH_DuC29m2a8rdxnCcu2X1z4fJdhNmiTD7sQHL23v-2GF73tYPRBixXzsf89TGK7ugZRoTlEdZtDTpH-Wq_qpfDGKOmk4icRA9jgJdi53j8lwR3DEPdNKCArdYmUnfFpf3opjXddi0JzEwmZWWYM1h2SAhW414ilpXhjqSPDu9FnR1wR3Er7sYC0ez7era2RdH3ARJAxeLGNBM7BF8pHxyWhK6wW4F94dP6aIvxQ8te4RjUS4_cMd6byePbH2a_zHF9GrLGvQ'
    //     }
    // }
});

window.Echo.private('App.Models.User.Sessions.1491')
    .listen('BroadcastNotificationCreated', e => {
        console.log(e)
    });
