import * as newman from "newman"; // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./tmp/collection_onboarding.json'),
    reporters: 'cli'
}, function (err) {
    if (err) { throw err; }

    console.log('Onboarding collection run complete!');

    newman.run({
        collection: require('./tmp/collection_user_account.json'),
        reporters: 'cli'
    }, function (err) {
        if (err) { throw err; }

        console.log('User Account collection run complete!');
    });
});