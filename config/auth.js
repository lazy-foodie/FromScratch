module.exports = {

    'facebookAuth' : {
        'clientID'      : process.env.FACEBOOK_ID || '1581387208825676', 
        'clientSecret'  : process.env.FACEBOOK_SECRET ||'b7fc313831476391b8a2c250045bd236', 
        'callbackURL'   : '/auth/facebook/callback'
    }
};