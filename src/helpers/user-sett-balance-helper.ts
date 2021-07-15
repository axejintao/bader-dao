import { BigInt } from '@graphprotocol/graph-ts';
import { Sett, User, UserSettBalance } from '../../generated/schema';
import { ZERO } from '../constants';

export class UserSettBalanceHelper {
  load(user: User, sett: Sett): UserSettBalance {
    const settBalanceId = user.id.concat('-').concat(sett.id);
    let settBalance = UserSettBalance.load(settBalanceId);

    if (settBalance == null) {
      settBalance = new UserSettBalance(settBalanceId);
      settBalance.sett = sett.id;
      settBalance.user = user.id;
      settBalance.netDeposit = ZERO;
      settBalance.grossDeposit = ZERO;
      settBalance.grossWithdraw = ZERO;
      settBalance.netShareDeposit = ZERO;
      settBalance.grossShareDeposit = ZERO;
      settBalance.grossShareWithdraw = ZERO;
    }

    return settBalance as UserSettBalance;
  }

  deposit(userBalance: UserSettBalance, share: BigInt, token: BigInt): void {
    userBalance.netDeposit = userBalance.netDeposit.plus(token);
    userBalance.grossDeposit = userBalance.grossDeposit.plus(token);
    userBalance.netShareDeposit = userBalance.netShareDeposit.plus(share);
    userBalance.grossShareDeposit = userBalance.grossShareDeposit.plus(share);
    userBalance.save();
  }

  withdraw(userBalance: UserSettBalance, share: BigInt, token: BigInt): void {
    userBalance.netDeposit = userBalance.netDeposit.minus(token);
    userBalance.grossWithdraw = userBalance.grossWithdraw.plus(token);
    userBalance.netShareDeposit = userBalance.netShareDeposit.minus(share);
    userBalance.grossShareWithdraw = userBalance.grossShareWithdraw.plus(share);
    userBalance.save();
  }
}
