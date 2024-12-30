const dav = require("dav");

async function syncCalendars(caldavUrl, username, password) {
    const xhr = new dav.transport.Basic(new dav.Credentials({
        username,
        password,
    }));

    const account = await dav.createAccount({
        server: caldavUrl,
        xhr,
    });

    return account.calendars;
}

module.exports = { syncCalendars };
