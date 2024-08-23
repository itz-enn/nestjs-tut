import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DbConfigService } from "src/db-config/db-config.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(config: ConfigService, private model: DbConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    })
  }

  async validate(payload: {
    sub: number;
    email: string;
  }) {
    const user = await this.model.user.findUnique({
      where: {
        id: payload.sub
      }
    })
    const {password, ...userWithoutPassword} = user
    return userWithoutPassword;
  }
}
