import { WorldPinProps } from '@/src/types/entities';

export class PrivacyService {
  static getSafeLocation(pin: Pick<WorldPinProps, 'city' | 'state' | 'country'>) {
    return `${pin.city}, ${pin.state}, ${pin.country}`;
  }
}
