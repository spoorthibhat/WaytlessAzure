import googleAppAuth from './googleOauth2';
import { UserModel } from '../models/UserModel';

let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//const LocalStrategy = require('passport-local').Strategy;

// Creates a Passport configuration for Google
class GooglePassport {

    userId: string;
    displayName: string;
    email: string;
    clientId: string;
    secretId: string;
    userModel : UserModel;
    
    constructor() {
        this.clientId = googleAppAuth.id;
        this.secretId = googleAppAuth.secret;
        this.userModel = new UserModel();

        passport.use(new GoogleStrategy({
                clientID: this.clientId,
                clientSecret: this.secretId,
                callbackURL: "/auth/google/callback",
                profileFields: ['id', 'displayName', 'emails']
            },
            (accessToken, refreshToken, profile, done) => {
                process.nextTick( () => {
                    console.log('validating google profile:' + JSON.stringify(profile));
                    this.userId = profile.id;
                    this.displayName = profile.displayName;
                    this.email = profile.emails[0].value;

                    // NOTE : Complete this for adding the user if not present
                    var userInfo = this.userModel.getUser({
                        username: this.email
                      });

                    return done(null, profile);
                });
            }
        ));

        

        passport.serializeUser(function(user, done) {
            done(null, user);
        });

        passport.deserializeUser(function(user, done) {
            done(null, user);
        });
    }
}
export default GooglePassport;