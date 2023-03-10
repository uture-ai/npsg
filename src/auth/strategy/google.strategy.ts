import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { processEnv } from 'src/common/constant/process-env';
import { GoogleUser } from '../dto/google-user.dto';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(configService: ConfigService) {
    super({
      clientID:
        configService.get('GOOGLE_CLIENT_ID') || processEnv.GOOGLE_CLIENT_ID,
      clientSecret:
        configService.get('GOOGLE_CLIENT_SECRET') ||
        processEnv.GOOGLE_CLIENT_SECRET,
      callbackURL:
        configService.get('GOOGLE_CALLBACK_URL') ||
        processEnv.GOOGLE_CALLBACK_URL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, displayName, name, emails, photos, locale } = profile;
    const user: GoogleUser = {
      id: id,
      displayName: displayName,
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
      locale: locale,
    };
    done(null, user);
  }
}
