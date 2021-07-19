import {
  Approval,
  EmergencyShutdown,
  NewPendingGovernance,
  StrategyAdded,
  StrategyAddedToQueue,
  StrategyMigrated,
  StrategyRemovedFromQueue,
  StrategyReported,
  StrategyRevoked,
  StrategyUpdateDebtRatio,
  StrategyUpdateMaxDebtPerHarvest,
  StrategyUpdateMinDebtPerHarvest,
  StrategyUpdatePerformanceFee,
  Transfer,
  UpdateDepositLimit,
  UpdateGovernance,
  UpdateGuardian,
  UpdateGuestList,
  UpdateManagement,
  UpdateManagementFee,
  UpdatePerformanceFee,
  UpdateRewards,
  UpdateWithdrawalFee,
  UpdateWithdrawalQueue,
} from '../../generated/templates/BadgerSettV2/BadgerSettV2';

export function handleTransfer(event: Transfer): void {}

export function handleApproval(event: Approval): void {}

export function handleStrategyAdded(event: StrategyAdded): void {}

export function handleStrategyReported(event: StrategyReported): void {}

export function handleUpdateGovernance(event: UpdateGovernance): void {}

export function handleNewPendingGovernance(event: NewPendingGovernance): void {}

export function handleUpdateManagement(event: UpdateManagement): void {}

export function handleUpdateGuestList(event: UpdateGuestList): void {}

export function handleUpdateRewards(event: UpdateRewards): void {}

export function handleUpdateDepositLimit(event: UpdateDepositLimit): void {}

export function handleUpdateWithdrawalFee(event: UpdateWithdrawalFee): void {}

export function handleUpdatePerformanceFee(event: UpdatePerformanceFee): void {}

export function handleUpdateManagementFee(event: UpdateManagementFee): void {}

export function handleUpdateGuardian(event: UpdateGuardian): void {}

export function handleEmergencyShutdown(event: EmergencyShutdown): void {}

export function handleUpdateWithdrawalQueue(event: UpdateWithdrawalQueue): void {}

export function handleStrategyUpdateDebtRatio(event: StrategyUpdateDebtRatio): void {}

export function handleStrategyUpdateMinDebtPerHarvest(event: StrategyUpdateMinDebtPerHarvest): void {}

export function handleStrategyUpdateMaxDebtPerHarvest(event: StrategyUpdateMaxDebtPerHarvest): void {}

export function handleStrategyUpdatePerformanceFee(event: StrategyUpdatePerformanceFee): void {}

export function handleStrategyMigrated(event: StrategyMigrated): void {}

export function handleStrategyRevoked(event: StrategyRevoked): void {}

export function handleStrategyRemovedFromQueue(event: StrategyRemovedFromQueue): void {}

export function handleStrategyAddedToQueue(event: StrategyAddedToQueue): void {}
