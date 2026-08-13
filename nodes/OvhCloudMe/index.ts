import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

// Phase 1 — Account & Identity
import {
	descriptionGetAccount,
	executeGetAccount,
	executeListOvhAccounts,
	descriptionGetOvhAccount,
	executeGetOvhAccount,
	descriptionListOvhAccountMovements,
	executeListOvhAccountMovements,
	descriptionGetOvhAccountMovement,
	executeGetOvhAccountMovement,
	descriptionGetSubAccount,
	executeListSubAccounts,
	executeGetSubAccount,
	executeGetAutorenew,
	executeListAvailablePaymentMeans,
	executeGetIdentityProvider,
	descriptionGetIdentityUser,
	executeListIdentityUsers,
	executeGetIdentityUser,
	descriptionListUserTokens,
	executeListUserTokens,
	descriptionGetUserToken,
	executeGetUserToken,
	descriptionGetIdentityGroup,
	executeListIdentityGroups,
	executeGetIdentityGroup,
	descriptionListGroupUsers,
	executeListGroupUsers,
	executeListSshKeys,
	descriptionGetSshKey,
	executeGetSshKey,
	executeListConsentCampaigns,
	descriptionGetConsentCampaign,
	executeGetConsentCampaign,
	descriptionGetConsentDecision,
	executeGetConsentDecision,
} from './operations/account.operation';

// Phase 2 — API & Logs
import {
	executeListApiApplications,
	descriptionGetApiApplication,
	executeGetApiApplication,
	executeListApiCredentials,
	descriptionGetApiCredential,
	executeGetApiCredential,
	descriptionGetCredentialApplication,
	executeGetCredentialApplication,
	executeListApiLogKinds,
	descriptionGetApiLogKind,
	executeGetApiLogKind,
	executeListApiLogSubscriptions,
	descriptionGetApiLogSubscription,
	executeGetApiLogSubscription,
	executeListApiLogsSelf,
	descriptionGetApiLogSelf,
	executeGetApiLogSelf,
	executeListApiLogsServices,
	descriptionGetApiLogServices,
	executeGetApiLogServices,
	executeListOAuth2Clients,
	descriptionGetOAuth2Client,
	executeGetOAuth2Client,
	executeGetAuditLogs,
	executeListAuditLogKinds,
	descriptionGetAuditLogKind,
	executeGetAuditLogKind,
	executeListAuditLogSubscriptions,
	descriptionGetAuditLogSubscription,
	executeGetAuditLogSubscription,
} from './operations/api.operation';

// Phase 3 — Billing
import {
	descriptionListBills,
	executeListBills,
	descriptionGetBill,
	executeGetBill,
	descriptionGetBillDebt,
	executeGetBillDebt,
	descriptionListBillDebtOperations,
	executeListBillDebtOperations,
	descriptionGetBillDebtOperation,
	executeGetBillDebtOperation,
	descriptionGetBillDebtOperationAssociatedObject,
	executeGetBillDebtOperationAssociatedObject,
	descriptionListBillDetails,
	executeListBillDetails,
	descriptionGetBillDetail,
	executeGetBillDetail,
	descriptionGetBillPayment,
	executeGetBillPayment,
	executeListBillingGroups,
	descriptionGetBillingGroup,
	executeGetBillingGroup,
	descriptionListBillingGroupServices,
	executeListBillingGroupServices,
	descriptionGetBillingGroupService,
	executeGetBillingGroupService,
	executeListPurchaseOrders,
	descriptionGetPurchaseOrder,
	executeGetPurchaseOrder,
	executeListConsumptionReports,
	descriptionGetConsumptionReport,
	executeGetConsumptionReport,
} from './operations/billing.operation';

// Phase 4 — Payment & Orders
import {
	executeListPaymentAvailableMethods,
	executeListPaymentMethods,
	descriptionGetPaymentMethod,
	executeGetPaymentMethod,
	descriptionGetPaymentTransaction,
	executeListPaymentTransactions,
	executeGetPaymentTransaction,
	executeListBankAccounts,
	descriptionListBankAccounts,
	descriptionGetBankAccount,
	executeGetBankAccount,
	executeListCreditCards,
	descriptionGetCreditCard,
	executeGetCreditCard,
	executeListDeferredPaymentAccounts,
	descriptionGetDeferredPaymentAccount,
	executeGetDeferredPaymentAccount,
	executeListPaypalAccounts,
	descriptionGetPaypalAccount,
	executeGetPaypalAccount,
	executeListOrders,
	descriptionGetOrder,
	executeGetOrder,
	descriptionGetOrderAssociatedObject,
	executeGetOrderAssociatedObject,
	descriptionListOrderAvailablePaymentMeans,
	executeListOrderAvailablePaymentMeans,
	descriptionListOrderBalances,
	executeListOrderBalances,
	descriptionGetOrderBalance,
	executeGetOrderBalance,
	descriptionGetOrderConsumptionDetails,
	executeGetOrderConsumptionDetails,
	descriptionGetOrderDebt,
	executeGetOrderDebt,
	descriptionListOrderDebtOperations,
	executeListOrderDebtOperations,
	descriptionGetOrderDebtOperation,
	executeGetOrderDebtOperation,
	descriptionGetOrderDebtOperationAssociatedObject,
	executeGetOrderDebtOperationAssociatedObject,
	descriptionListOrderDetails,
	executeListOrderDetails,
	descriptionGetOrderDetail,
	executeGetOrderDetail,
	descriptionGetOrderDetailExtension,
	executeGetOrderDetailExtension,
	descriptionGetOrderFollowUp,
	executeGetOrderFollowUp,
	descriptionGetOrderPayment,
	executeGetOrderPayment,
	descriptionGetOrderPaymentMeans,
	executeGetOrderPaymentMeans,
	descriptionListOrderPaymentMethods,
	executeListOrderPaymentMethods,
	descriptionGetOrderStatus,
	executeGetOrderStatus,
} from './operations/payment.operation';

// Phase 5 — Financial Accounts
import {
	executeListCreditBalances,
	descriptionGetCreditBalance,
	executeGetCreditBalance,
	descriptionListCreditBalanceMovements,
	executeListCreditBalanceMovements,
	descriptionGetCreditBalanceMovement,
	executeGetCreditBalanceMovement,
	executeGetDebtAccount,
	executeListDebtAccountDebts,
	descriptionGetDebtAccountDebt,
	executeGetDebtAccountDebt,
	descriptionListDebtAccountDebtOperations,
	executeListDebtAccountDebtOperations,
	descriptionGetDebtAccountDebtOperation,
	executeGetDebtAccountDebtOperation,
	descriptionGetDebtAccountDebtOperationAssociatedObject,
	executeGetDebtAccountDebtOperationAssociatedObject,
	executeListDeposits,
	descriptionListDeposits,
	descriptionGetDeposit,
	executeGetDeposit,
	descriptionListDepositDetails,
	executeListDepositDetails,
	descriptionGetDepositDetail,
	executeGetDepositDetail,
	descriptionListDepositPaidBills,
	executeListDepositPaidBills,
	descriptionGetDepositPaidBill,
	executeGetDepositPaidBill,
	descriptionGetDepositPayment,
	executeGetDepositPayment,
	executeListWithdrawals,
	descriptionGetWithdrawal,
	executeGetWithdrawal,
	descriptionListWithdrawalDetails,
	executeListWithdrawalDetails,
	descriptionGetWithdrawalDetail,
	executeGetWithdrawalDetail,
	descriptionGetWithdrawalPayment,
	executeGetWithdrawalPayment,
	executeListRefunds,
	descriptionGetRefund,
	executeGetRefund,
	descriptionListRefundDetails,
	executeListRefundDetails,
	descriptionGetRefundDetail,
	executeGetRefundDetail,
	descriptionGetRefundPayment,
	executeGetRefundPayment,
	executeListReverseBills,
	descriptionGetReverseBill,
	executeGetReverseBill,
	descriptionListReverseBillDetails,
	executeListReverseBillDetails,
	descriptionGetReverseBillDetail,
	executeGetReverseBillDetail,
	descriptionGetReverseBillPayment,
	executeGetReverseBillPayment,
	executeListCorrectiveInvoices,
	descriptionGetCorrectiveInvoice,
	executeGetCorrectiveInvoice,
	descriptionGetCorrectiveInvoiceDebt,
	executeGetCorrectiveInvoiceDebt,
	descriptionListCorrectiveInvoiceDebtOperations,
	executeListCorrectiveInvoiceDebtOperations,
	descriptionGetCorrectiveInvoiceDebtOperation,
	executeGetCorrectiveInvoiceDebtOperation,
	descriptionGetCorrectiveInvoiceDebtOperationAssociatedObject,
	executeGetCorrectiveInvoiceDebtOperationAssociatedObject,
	descriptionListCorrectiveInvoiceDetails,
	executeListCorrectiveInvoiceDetails,
	descriptionGetCorrectiveInvoiceDetail,
	executeGetCorrectiveInvoiceDetail,
	descriptionGetCorrectiveInvoicePayment,
	executeGetCorrectiveInvoicePayment,
} from './operations/financial.operation';

// Phase 6 — Contact & Documents
import {
	executeListContacts,
	descriptionGetContact,
	executeGetContact,
	descriptionGetContactFields,
	executeGetContactFields,
	executeListDocuments,
	descriptionGetDocument,
	executeGetDocument,
	executeListTags,
	executeListAvailableTags,
	descriptionGetTag,
	executeGetTag,
} from './operations/contact.operation';

// Phase 7 — Partner, SLA & Account Info
import {
	executeGetPartnerLevel,
	executeGetSupportLevel,
	executeListSlas,
	descriptionGetSla,
	executeGetSla,
	descriptionGetSlaCanBeApplied,
	executeGetSlaCanBeApplied,
	descriptionListSlaServices,
	executeListSlaServices,
	descriptionGetSlaStatus,
	executeGetSlaStatus,
	executeListAgreements,
	descriptionGetAgreement,
	executeGetAgreement,
	descriptionGetAgreementContract,
	executeGetAgreementContract,
	executeListCertificates,
	executeGetVipStatus,
	executeGetInsight,
	executeGetRecommendations,
	executeGetBringYourOwnIpToken,
	executeListAbuse,
	descriptionGetAbuse,
	executeGetAbuse,
	executeGetCarbonCalculatorHasInvoice,
	executeListCarbonCalculatorTasks,
	descriptionGetCarbonCalculatorTask,
	executeGetCarbonCalculatorTask,
	executeGetAccessRestrictionBackupCode,
	executeGetAccessRestrictionDeveloperMode,
	executeListAccessRestrictionIps,
	descriptionGetAccessRestrictionIp,
	executeGetAccessRestrictionIp,
	executeGetAccessRestrictionIpDefaultRule,
	executeListAccessRestrictionSms,
	descriptionGetAccessRestrictionSms,
	executeGetAccessRestrictionSms,
	executeListAccessRestrictionTotp,
	descriptionGetAccessRestrictionTotp,
	executeGetAccessRestrictionTotp,
	executeListAccessRestrictionU2f,
	descriptionGetAccessRestrictionU2f,
	executeGetAccessRestrictionU2f,
} from './operations/partner.operation';

// Phase 7c — Agreements Lifecycle (accept + contract details)
import { executeAcceptAgreement, executeGetContract } from './operations/agreement.operation';

// Phase 7d — Access Restriction Lifecycle (SOTP/IP/TOTP/U2F/SMS add/delete/enable/disable/sendCode)
import {
	executeAddSotpSecret,
	executeDisableSotpAccount,
	executeEnableSotpAccount,
	executeValidateSotpAccount,
	executeEditDeveloperModeRestriction,
	executeAddIpRestriction,
	executeDeleteIpRestriction,
	executeEditIpRestriction,
	executeEnableIpAccount,
	executeDisableIpAccount,
	executeAddSmsRestriction,
	executeDeleteSmsRestriction,
	executeEnableSmsAccount,
	executeDisableSmsAccount,
	executeSendSmsCode,
	executeValidateSmsAccount,
	executeAddTotpRestriction,
	executeDeleteTotpRestriction,
	executeEnableTotpAccount,
	executeDisableTotpAccount,
	executeValidateTotpAccount,
	executeEditTotpRestriction,
	executeAddU2fRestriction,
	executeDeleteU2fRestriction,
	executeEnableU2fAccount,
	executeDisableU2fAccount,
	executeGetU2fRestriction,
	executeEditU2fRestriction,
	executeGetTotpRestriction,
} from './operations/accessRestriction.operation';

// Phase 8 — Notification & Consumption
import {
	executeListEmailHistory,
	descriptionGetEmail,
	executeGetEmail,
	executeGetMarketing,
	executeListAvailableMailingLists,
	executeGetCurrentConsumption,
	executeGetForecastConsumption,
	executeGetConsumptionHistory,
	executeListMigrations,
	descriptionGetMigration,
	executeGetMigration,
	descriptionListMigrationContracts,
	executeListMigrationContracts,
	descriptionGetMigrationContract,
	executeGetMigrationContract,
	descriptionGetMigrationAgreement,
	executeGetMigrationAgreement,
	executeGetFidelityAccount,
	executeListFidelityMovements,
	descriptionGetFidelityMovement,
	executeGetFidelityMovement,
	executeListIpOrganisations,
	descriptionGetIpOrganisation,
	executeGetIpOrganisation,
} from './operations/notification.operation';

// Phase 9 — Domain & DNS Tasks
import {
	executeListDnsTasks,
	descriptionGetDnsTask,
	executeGetDnsTask,
	executeListDomainTasks,
	descriptionGetDomainTask,
	executeGetDomainTask,
	descriptionListDomainTaskArguments,
	executeListDomainTaskArguments,
	descriptionGetDomainTaskArgument,
	executeGetDomainTaskArgument,
	descriptionGetDomainTaskProgress,
	executeGetDomainTaskProgress,
	executeListContactChangeTasks,
	descriptionGetContactChangeTask,
	executeGetContactChangeTask,
	executeListEmailChangeTasks,
	descriptionGetEmailChangeTask,
	executeGetEmailChangeTask,
	executeListSubscriptions,
	descriptionGetSubscription,
	executeGetSubscription,
} from './operations/domain.operation';

// Phase 10 — Telecom
import {
	executeListFaxCustomDomains,
	descriptionGetFaxCustomDomain,
	executeGetFaxCustomDomain,
	executeListTelephonyDefaultIpRestrictions,
	descriptionGetTelephonyDefaultIpRestriction,
	executeGetTelephonyDefaultIpRestriction,
	executeGetTelephonySettings,
	executeGetXdslSettings,
} from './operations/telecom.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'meOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'Get Abuse', value: 'getAbuse', action: 'Get an abuse case' },
				{
					name: 'Get Access Restriction Backup Code',
					value: 'getAccessRestrictionBackupCode',
					action: 'Get access restriction backup code',
				},
				{
					name: 'Get Access Restriction Developer Mode',
					value: 'getAccessRestrictionDeveloperMode',
					action: 'Get access restriction developer mode',
				},
				{
					name: 'Get Access Restriction IP',
					value: 'getAccessRestrictionIp',
					action: 'Get an IP restriction',
				},
				{
					name: 'Get Access Restriction IP Default Rule',
					value: 'getAccessRestrictionIpDefaultRule',
					action: 'Get access restriction IP default rule',
				},
				{
					name: 'Get Access Restriction SMS',
					value: 'getAccessRestrictionSms',
					action: 'Get an SMS account',
				},
				{
					name: 'Get Access Restriction TOTP',
					value: 'getAccessRestrictionTotp',
					action: 'Get a TOTP account',
				},
				{
					name: 'Get Access Restriction U2F',
					value: 'getAccessRestrictionU2f',
					action: 'Get a U2F account',
				},
				{ name: 'Get Account', value: 'getAccount', action: 'Get your nichandle details' },
				{ name: 'Get Agreement', value: 'getAgreement', action: 'Get an agreement' },
				{
					name: 'Get Agreement Contract',
					value: 'getAgreementContract',
					action: 'Get an agreement contract',
				},
				{ name: 'Get API Application', value: 'getApiApplication', action: 'Get API application' },
				{ name: 'Get API Credential', value: 'getApiCredential', action: 'Get API credential' },
				{ name: 'Get API Log (Self)', value: 'getApiLogSelf', action: 'Get an API call log' },
				{
					name: 'Get API Log (Services)',
					value: 'getApiLogServices',
					action: 'Get a service API log',
				},
				{ name: 'Get API Log Kind', value: 'getApiLogKind', action: 'Get API log kind' },
				{
					name: 'Get API Log Subscription',
					value: 'getApiLogSubscription',
					action: 'Get API log subscription',
				},
				{ name: 'Get Audit Log Kind', value: 'getAuditLogKind', action: 'Get an audit log kind' },
				{
					name: 'Get Audit Log Subscription',
					value: 'getAuditLogSubscription',
					action: 'Get an audit subscription',
				},
				{ name: 'Get Audit Logs', value: 'getAuditLogs', action: 'Get audit logs' },
				{ name: 'Get Autorenew', value: 'getAutorenew', action: 'Get autorenew settings' },
				{ name: 'Get Bank Account', value: 'getBankAccount', action: 'Get a bank account' },
				{ name: 'Get Bill', value: 'getBill', action: 'Get bill details' },
				{ name: 'Get Bill Debt', value: 'getBillDebt', action: 'Get bill debt' },
				{
					name: 'Get Bill Debt Operation',
					value: 'getBillDebtOperation',
					action: 'Get a debt operation',
				},
				{
					name: 'Get Bill Debt Operation Associated Object',
					value: 'getBillDebtOperationAssociatedObject',
					action: 'Get debt operation associated object',
				},
				{ name: 'Get Bill Detail', value: 'getBillDetail', action: 'Get a bill detail' },
				{ name: 'Get Bill Payment', value: 'getBillPayment', action: 'Get bill payment' },
				{ name: 'Get Billing Group', value: 'getBillingGroup', action: 'Get a billing group' },
				{
					name: 'Get Billing Group Service',
					value: 'getBillingGroupService',
					action: 'Get a billing group service',
				},
				{
					name: 'Get Bring Your Own IP Token',
					value: 'getBringYourOwnIpToken',
					action: 'Get BYO IP token',
				},
				{
					name: 'Get Carbon Calculator Has Invoice',
					value: 'getCarbonCalculatorHasInvoice',
					action: 'Check carbon calculator invoice data',
				},
				{
					name: 'Get Carbon Calculator Task',
					value: 'getCarbonCalculatorTask',
					action: 'Get a carbon calculator task',
				},
				{
					name: 'Get Consent Campaign',
					value: 'getConsentCampaign',
					action: 'Get a consent campaign',
				},
				{
					name: 'Get Consent Decision',
					value: 'getConsentDecision',
					action: 'Get consent decision',
				},
				{
					name: 'Get Consumption History',
					value: 'getConsumptionHistory',
					action: 'Get consumption history',
				},
				{
					name: 'Get Consumption Report',
					value: 'getConsumptionReport',
					action: 'Get a consumption report',
				},
				{ name: 'Get Contact', value: 'getContact', action: 'Get a contact' },
				{
					name: 'Get Contact Change Task',
					value: 'getContactChangeTask',
					action: 'Get a contact change task',
				},
				{
					name: 'Get Contact Fields',
					value: 'getContactFields',
					action: 'Get contact fields info',
				},
				{
					name: 'Get Corrective Invoice',
					value: 'getCorrectiveInvoice',
					action: 'Get a corrective invoice',
				},
				{
					name: 'Get Corrective Invoice Debt',
					value: 'getCorrectiveInvoiceDebt',
					action: 'Get corrective invoice debt',
				},
				{
					name: 'Get Corrective Invoice Debt Operation',
					value: 'getCorrectiveInvoiceDebtOperation',
					action: 'Get a corrective invoice debt operation',
				},
				{
					name: 'Get Corrective Invoice Debt Operation Object',
					value: 'getCorrectiveInvoiceDebtOperationAssociatedObject',
					action: 'Get associated object of debt operation',
				},
				{
					name: 'Get Corrective Invoice Detail',
					value: 'getCorrectiveInvoiceDetail',
					action: 'Get a corrective invoice detail',
				},
				{
					name: 'Get Corrective Invoice Payment',
					value: 'getCorrectiveInvoicePayment',
					action: 'Get a corrective invoice payment',
				},
				{
					name: 'Get Credential Application',
					value: 'getCredentialApplication',
					action: 'Get credential application',
				},
				{ name: 'Get Credit Balance', value: 'getCreditBalance', action: 'Get a credit balance' },
				{
					name: 'Get Credit Balance Movement',
					value: 'getCreditBalanceMovement',
					action: 'Get a credit balance movement',
				},
				{ name: 'Get Credit Card', value: 'getCreditCard', action: 'Get a credit card' },
				{
					name: 'Get Current Consumption',
					value: 'getCurrentConsumption',
					action: 'Get current consumptions',
				},
				{ name: 'Get Debt Account', value: 'getDebtAccount', action: 'Get the debt account' },
				{
					name: 'Get Debt Account Debt',
					value: 'getDebtAccountDebt',
					action: 'Get a debt account debt',
				},
				{
					name: 'Get Debt Account Debt Operation',
					value: 'getDebtAccountDebtOperation',
					action: 'Get a debt account debt operation',
				},
				{
					name: 'Get Debt Account Debt Operation Object',
					value: 'getDebtAccountDebtOperationAssociatedObject',
					action: 'Get associated object of debt operation',
				},
				{
					name: 'Get Deferred Payment Account',
					value: 'getDeferredPaymentAccount',
					action: 'Get a deferred payment account',
				},
				{ name: 'Get Deposit', value: 'getDeposit', action: 'Get a deposit' },
				{ name: 'Get Deposit Detail', value: 'getDepositDetail', action: 'Get a deposit detail' },
				{
					name: 'Get Deposit Paid Bill',
					value: 'getDepositPaidBill',
					action: 'Get a deposit paid bill',
				},
				{
					name: 'Get Deposit Payment',
					value: 'getDepositPayment',
					action: 'Get a deposit payment',
				},
				{ name: 'Get DNS Task', value: 'getDnsTask', action: 'Get a DNS task' },
				{ name: 'Get Document', value: 'getDocument', action: 'Get a document' },
				{ name: 'Get Domain Task', value: 'getDomainTask', action: 'Get a domain task' },
				{
					name: 'Get Domain Task Argument',
					value: 'getDomainTaskArgument',
					action: 'Get a domain task argument',
				},
				{
					name: 'Get Domain Task Progress',
					value: 'getDomainTaskProgress',
					action: 'Get a domain task progress',
				},
				{ name: 'Get Email', value: 'getEmail', action: 'Get an email' },
				{
					name: 'Get Email Change Task',
					value: 'getEmailChangeTask',
					action: 'Get an email change task',
				},
				{
					name: 'Get Fax Custom Domain',
					value: 'getFaxCustomDomain',
					action: 'Get a fax custom domain',
				},
				{
					name: 'Get Fidelity Account',
					value: 'getFidelityAccount',
					action: 'Get fidelity account',
				},
				{
					name: 'Get Fidelity Movement',
					value: 'getFidelityMovement',
					action: 'Get a fidelity movement',
				},
				{
					name: 'Get Forecast Consumption',
					value: 'getForecastConsumption',
					action: 'Get forecasted consumptions',
				},
				{ name: 'Get Identity Group', value: 'getIdentityGroup', action: 'Get an IAM group' },
				{
					name: 'Get Identity Provider',
					value: 'getIdentityProvider',
					action: 'Get identity provider',
				},
				{ name: 'Get Identity User', value: 'getIdentityUser', action: 'Get an IAM user' },
				{ name: 'Get Insight', value: 'getInsight', action: 'Get insight access token' },
				{
					name: 'Get IP Organisation',
					value: 'getIpOrganisation',
					action: 'Get an IP organisation',
				},
				{ name: 'Get Marketing', value: 'getMarketing', action: 'Get marketing consent' },
				{ name: 'Get Migration', value: 'getMigration', action: 'Get a migration' },
				{
					name: 'Get Migration Agreement',
					value: 'getMigrationAgreement',
					action: 'Get a migration agreement',
				},
				{
					name: 'Get Migration Contract',
					value: 'getMigrationContract',
					action: 'Get a migration contract',
				},
				{ name: 'Get OAuth2 Client', value: 'getOAuth2Client', action: 'Get an OAuth2 client' },
				{ name: 'Get Order', value: 'getOrder', action: 'Get an order' },
				{
					name: 'Get Order Associated Object',
					value: 'getOrderAssociatedObject',
					action: 'Get order associated object',
				},
				{
					name: 'Get Order Consumption Details',
					value: 'getOrderConsumptionDetails',
					action: 'Get order consumption details',
				},
				{
					name: 'Get Order Credit Balance',
					value: 'getOrderBalance',
					action: 'Get an order credit balance',
				},
				{ name: 'Get Order Debt', value: 'getOrderDebt', action: 'Get order debt' },
				{
					name: 'Get Order Debt Operation',
					value: 'getOrderDebtOperation',
					action: 'Get an order debt operation',
				},
				{
					name: 'Get Order Debt Operation Object',
					value: 'getOrderDebtOperationAssociatedObject',
					action: 'Get associated object of debt operation',
				},
				{ name: 'Get Order Detail', value: 'getOrderDetail', action: 'Get an order detail' },
				{
					name: 'Get Order Detail Extension',
					value: 'getOrderDetailExtension',
					action: 'Get order detail extension',
				},
				{ name: 'Get Order Follow Up', value: 'getOrderFollowUp', action: 'Get order tracking' },
				{ name: 'Get Order Payment', value: 'getOrderPayment', action: 'Get order payment' },
				{
					name: 'Get Order Payment Means',
					value: 'getOrderPaymentMeans',
					action: 'Get order payment means',
				},
				{ name: 'Get Order Status', value: 'getOrderStatus', action: 'Get order status' },
				{ name: 'Get OVH Account', value: 'getOvhAccount', action: 'Get an OVH account' },
				{
					name: 'Get OVH Account Movement',
					value: 'getOvhAccountMovement',
					action: 'Get an account movement',
				},
				{ name: 'Get Partner Level', value: 'getPartnerLevel', action: 'Get partner level' },
				{ name: 'Get Payment Method', value: 'getPaymentMethod', action: 'Get a payment method' },
				{
					name: 'Get Payment Transaction',
					value: 'getPaymentTransaction',
					action: 'Get a transaction',
				},
				{ name: 'Get PayPal Account', value: 'getPaypalAccount', action: 'Get a PayPal account' },
				{ name: 'Get Purchase Order', value: 'getPurchaseOrder', action: 'Get a purchase order' },
				{ name: 'Get Recommendations', value: 'getRecommendations', action: 'Get recommendations' },
				{ name: 'Get Refund', value: 'getRefund', action: 'Get a refund' },
				{ name: 'Get Refund Detail', value: 'getRefundDetail', action: 'Get a refund detail' },
				{ name: 'Get Refund Payment', value: 'getRefundPayment', action: 'Get a refund payment' },
				{ name: 'Get Reverse Bill', value: 'getReverseBill', action: 'Get a reverse bill' },
				{
					name: 'Get Reverse Bill Detail',
					value: 'getReverseBillDetail',
					action: 'Get a reverse bill detail',
				},
				{
					name: 'Get Reverse Bill Payment',
					value: 'getReverseBillPayment',
					action: 'Get a reverse bill payment',
				},
				{ name: 'Get SLA', value: 'getSla', action: 'Get an SLA' },
				{
					name: 'Get SLA Can Be Applied',
					value: 'getSlaCanBeApplied',
					action: 'Check if SLA can be applied',
				},
				{ name: 'Get SLA Status', value: 'getSlaStatus', action: 'Get SLA status' },
				{ name: 'Get SSH Key', value: 'getSshKey', action: 'Get an SSH key' },
				{ name: 'Get Sub-Account', value: 'getSubAccount', action: 'Get a sub-account' },
				{ name: 'Get Subscription', value: 'getSubscription', action: 'Get a subscription type' },
				{ name: 'Get Support Level', value: 'getSupportLevel', action: 'Get support level' },
				{ name: 'Get Tag', value: 'getTag', action: 'Get a tag' },
				{
					name: 'Get Telephony Default IP Restriction',
					value: 'getTelephonyDefaultIpRestriction',
					action: 'Get a SIP IP restriction',
				},
				{
					name: 'Get Telephony Settings',
					value: 'getTelephonySettings',
					action: 'Get telephony settings',
				},
				{ name: 'Get User Token', value: 'getUserToken', action: 'Get a personal access token' },
				{ name: 'Get VIP Status', value: 'getVipStatus', action: 'Get VIP status' },
				{ name: 'Get Withdrawal', value: 'getWithdrawal', action: 'Get a withdrawal' },
				{
					name: 'Get Withdrawal Detail',
					value: 'getWithdrawalDetail',
					action: 'Get a withdrawal detail',
				},
				{
					name: 'Get Withdrawal Payment',
					value: 'getWithdrawalPayment',
					action: 'Get a withdrawal payment',
				},
				{ name: 'Get XDSL Settings', value: 'getXdslSettings', action: 'Get XDSL settings' },
				{ name: 'List Abuse', value: 'listAbuse', action: 'List abuse cases' },
				{
					name: 'List Access Restriction IPs',
					value: 'listAccessRestrictionIps',
					action: 'List IP restrictions',
				},
				{
					name: 'List Access Restriction SMS',
					value: 'listAccessRestrictionSms',
					action: 'List SMS accounts',
				},
				{
					name: 'List Access Restriction TOTP',
					value: 'listAccessRestrictionTotp',
					action: 'List TOTP accounts',
				},
				{
					name: 'List Access Restriction U2F',
					value: 'listAccessRestrictionU2f',
					action: 'List U2F accounts',
				},
				{ name: 'List Agreements', value: 'listAgreements', action: 'List agreements' },
				{
					name: 'List API Applications',
					value: 'listApiApplications',
					action: 'List API applications',
				},
				{
					name: 'List API Credentials',
					value: 'listApiCredentials',
					action: 'List API credentials',
				},
				{ name: 'List API Log Kinds', value: 'listApiLogKinds', action: 'List API log kinds' },
				{
					name: 'List API Log Subscriptions',
					value: 'listApiLogSubscriptions',
					action: 'List API log subscriptions',
				},
				{ name: 'List API Logs (Self)', value: 'listApiLogsSelf', action: 'List your API calls' },
				{
					name: 'List API Logs (Services)',
					value: 'listApiLogsServices',
					action: 'List API calls on services',
				},
				{
					name: 'List Audit Log Kinds',
					value: 'listAuditLogKinds',
					action: 'List audit log kinds',
				},
				{
					name: 'List Audit Log Subscriptions',
					value: 'listAuditLogSubscriptions',
					action: 'List audit subscriptions',
				},
				{
					name: 'List Available Mailing Lists',
					value: 'listAvailableMailingLists',
					action: 'List available mailing lists',
				},
				{
					name: 'List Available Payment Means',
					value: 'listAvailablePaymentMeans',
					action: 'List available payment methods',
				},
				{
					name: 'List Available Payment Methods',
					value: 'listPaymentAvailableMethods',
					action: 'List available payment methods',
				},
				{ name: 'List Available Tags', value: 'listAvailableTags', action: 'List available tags' },
				{ name: 'List Bank Accounts', value: 'listBankAccounts', action: 'List bank accounts' },
				{
					name: 'List Bill Debt Operations',
					value: 'listBillDebtOperations',
					action: 'List bill debt operations',
				},
				{ name: 'List Bill Details', value: 'listBillDetails', action: 'List bill details' },
				{
					name: 'List Billing Group Services',
					value: 'listBillingGroupServices',
					action: 'List billing group services',
				},
				{ name: 'List Billing Groups', value: 'listBillingGroups', action: 'List billing groups' },
				{ name: 'List Bills', value: 'listBills', action: 'List all bills' },
				{
					name: 'List Carbon Calculator Tasks',
					value: 'listCarbonCalculatorTasks',
					action: 'List carbon calculator tasks',
				},
				{ name: 'List Certificates', value: 'listCertificates', action: 'List certificates' },
				{
					name: 'List Consent Campaigns',
					value: 'listConsentCampaigns',
					action: 'List consent campaigns',
				},
				{
					name: 'List Consumption Reports',
					value: 'listConsumptionReports',
					action: 'List consumption reports',
				},
				{
					name: 'List Contact Change Tasks',
					value: 'listContactChangeTasks',
					action: 'List contact change tasks',
				},
				{ name: 'List Contacts', value: 'listContacts', action: 'List contacts' },
				{
					name: 'List Corrective Invoice Debt Operations',
					value: 'listCorrectiveInvoiceDebtOperations',
					action: 'List corrective invoice debt operations',
				},
				{
					name: 'List Corrective Invoice Details',
					value: 'listCorrectiveInvoiceDetails',
					action: 'List corrective invoice details',
				},
				{
					name: 'List Corrective Invoices',
					value: 'listCorrectiveInvoices',
					action: 'List corrective invoices',
				},
				{
					name: 'List Credit Balance Movements',
					value: 'listCreditBalanceMovements',
					action: 'List credit balance movements',
				},
				{
					name: 'List Credit Balances',
					value: 'listCreditBalances',
					action: 'List credit balances',
				},
				{ name: 'List Credit Cards', value: 'listCreditCards', action: 'List credit cards' },
				{
					name: 'List Debt Account Debt Operations',
					value: 'listDebtAccountDebtOperations',
					action: 'List debt account debt operations',
				},
				{
					name: 'List Debt Account Debts',
					value: 'listDebtAccountDebts',
					action: 'List debt account debts',
				},
				{
					name: 'List Deferred Payment Accounts',
					value: 'listDeferredPaymentAccounts',
					action: 'List deferred payment accounts',
				},
				{
					name: 'List Deposit Details',
					value: 'listDepositDetails',
					action: 'List deposit details',
				},
				{
					name: 'List Deposit Paid Bills',
					value: 'listDepositPaidBills',
					action: 'List deposit paid bills',
				},
				{ name: 'List Deposits', value: 'listDeposits', action: 'List deposits' },
				{ name: 'List DNS Tasks', value: 'listDnsTasks', action: 'List DNS tasks' },
				{ name: 'List Documents', value: 'listDocuments', action: 'List documents' },
				{
					name: 'List Domain Task Arguments',
					value: 'listDomainTaskArguments',
					action: 'List domain task arguments',
				},
				{ name: 'List Domain Tasks', value: 'listDomainTasks', action: 'List domain tasks' },
				{
					name: 'List Email Change Tasks',
					value: 'listEmailChangeTasks',
					action: 'List email change tasks',
				},
				{ name: 'List Email History', value: 'listEmailHistory', action: 'List email history' },
				{
					name: 'List Fax Custom Domains',
					value: 'listFaxCustomDomains',
					action: 'List fax custom domains',
				},
				{
					name: 'List Fidelity Movements',
					value: 'listFidelityMovements',
					action: 'List fidelity movements',
				},
				{ name: 'List Group Users', value: 'listGroupUsers', action: 'List group members' },
				{ name: 'List Identity Groups', value: 'listIdentityGroups', action: 'List IAM groups' },
				{ name: 'List Identity Users', value: 'listIdentityUsers', action: 'List IAM users' },
				{
					name: 'List IP Organisations',
					value: 'listIpOrganisations',
					action: 'List IP organisations',
				},
				{
					name: 'List Migration Contracts',
					value: 'listMigrationContracts',
					action: 'List migration contracts',
				},
				{ name: 'List Migrations', value: 'listMigrations', action: 'List migrations' },
				{ name: 'List OAuth2 Clients', value: 'listOAuth2Clients', action: 'List OAuth2 clients' },
				{
					name: 'List Order Available Payment Means',
					value: 'listOrderAvailablePaymentMeans',
					action: 'List available payment means for order',
				},
				{
					name: 'List Order Credit Balances',
					value: 'listOrderBalances',
					action: 'List credit balances for order',
				},
				{
					name: 'List Order Debt Operations',
					value: 'listOrderDebtOperations',
					action: 'List order debt operations',
				},
				{ name: 'List Order Details', value: 'listOrderDetails', action: 'List order details' },
				{
					name: 'List Order Payment Methods',
					value: 'listOrderPaymentMethods',
					action: 'List payment methods for order',
				},
				{ name: 'List Orders', value: 'listOrders', action: 'List all orders' },
				{
					name: 'List OVH Account Movements',
					value: 'listOvhAccountMovements',
					action: 'List account movements',
				},
				{ name: 'List OVH Accounts', value: 'listOvhAccounts', action: 'List all OVH accounts' },
				{
					name: 'List Payment Methods',
					value: 'listPaymentMethods',
					action: 'List payment methods',
				},
				{
					name: 'List Payment Transactions',
					value: 'listPaymentTransactions',
					action: 'List payment transactions',
				},
				{
					name: 'List PayPal Accounts',
					value: 'listPaypalAccounts',
					action: 'List PayPal accounts',
				},
				{
					name: 'List Purchase Orders',
					value: 'listPurchaseOrders',
					action: 'List purchase orders',
				},
				{ name: 'List Refund Details', value: 'listRefundDetails', action: 'List refund details' },
				{ name: 'List Refunds', value: 'listRefunds', action: 'List refunds' },
				{
					name: 'List Reverse Bill Details',
					value: 'listReverseBillDetails',
					action: 'List reverse bill details',
				},
				{ name: 'List Reverse Bills', value: 'listReverseBills', action: 'List reverse bills' },
				{ name: 'List SLA Services', value: 'listSlaServices', action: 'List SLA services' },
				{ name: 'List SLAs', value: 'listSlas', action: 'List active SLAs' },
				{ name: 'List SSH Keys', value: 'listSshKeys', action: 'List SSH keys' },
				{ name: 'List Sub-Accounts', value: 'listSubAccounts', action: 'List sub-accounts' },
				{
					name: 'List Subscriptions',
					value: 'listSubscriptions',
					action: 'List available subscriptions',
				},
				{ name: 'List Tags', value: 'listTags', action: 'List tags' },
				{
					name: 'List Telephony Default IP Restrictions',
					value: 'listTelephonyDefaultIpRestrictions',
					action: 'List default SIP IP restrictions',
				},
				{
					name: 'List User Tokens',
					value: 'listUserTokens',
					action: 'List personal access tokens',
				},
				{
					name: 'List Withdrawal Details',
					value: 'listWithdrawalDetails',
					action: 'List withdrawal details',
				},
				{ name: 'List Withdrawals', value: 'listWithdrawals', action: 'List withdrawals' },
			],
			default: 'getAccount',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		// Phase 1 — Account & Identity
		...descriptionGetAccount(),
		...descriptionGetOvhAccount({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getOvhAccount'] },
		}),
		...descriptionListOvhAccountMovements({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listOvhAccountMovements'] },
		}),
		...descriptionGetOvhAccountMovement({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getOvhAccountMovement'] },
		}),
		...descriptionGetSubAccount({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getSubAccount'] },
		}),
		...descriptionGetIdentityUser({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getIdentityUser'] },
		}),
		...descriptionListUserTokens({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listUserTokens'] },
		}),
		...descriptionGetUserToken({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getUserToken'] },
		}),
		...descriptionGetIdentityGroup({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getIdentityGroup'] },
		}),
		...descriptionListGroupUsers({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listGroupUsers'] },
		}),
		...descriptionGetSshKey({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getSshKey'] },
		}),
		...descriptionGetConsentCampaign({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getConsentCampaign'] },
		}),
		...descriptionGetConsentDecision({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getConsentDecision'] },
		}),
		// Phase 2 — API & Logs
		...descriptionGetApiApplication({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getApiApplication'] },
		}),
		...descriptionGetApiCredential({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getApiCredential'] },
		}),
		...descriptionGetCredentialApplication({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getCredentialApplication'] },
		}),
		...descriptionGetApiLogKind({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getApiLogKind'] },
		}),
		...descriptionGetApiLogSubscription({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getApiLogSubscription'] },
		}),
		...descriptionGetApiLogSelf({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getApiLogSelf'] },
		}),
		...descriptionGetApiLogServices({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getApiLogServices'] },
		}),
		...descriptionGetOAuth2Client({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getOAuth2Client'] },
		}),
		...descriptionGetAuditLogKind({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getAuditLogKind'] },
		}),
		...descriptionGetAuditLogSubscription({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getAuditLogSubscription'] },
		}),
		// Phase 3 — Billing
		...descriptionListBills({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listBills'] },
		}),
		...descriptionGetBill({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getBill'] },
		}),
		...descriptionGetBillDebt({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getBillDebt'] },
		}),
		...descriptionListBillDebtOperations({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listBillDebtOperations'] },
		}),
		...descriptionGetBillDebtOperation({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getBillDebtOperation'] },
		}),
		...descriptionGetBillDebtOperationAssociatedObject({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getBillDebtOperationAssociatedObject'] },
		}),
		...descriptionListBillDetails({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listBillDetails'] },
		}),
		...descriptionGetBillDetail({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getBillDetail'] },
		}),
		...descriptionGetBillPayment({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getBillPayment'] },
		}),
		...descriptionGetBillingGroup({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getBillingGroup'] },
		}),
		...descriptionListBillingGroupServices({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listBillingGroupServices'] },
		}),
		...descriptionGetBillingGroupService({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getBillingGroupService'] },
		}),
		...descriptionGetPurchaseOrder({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getPurchaseOrder'] },
		}),
		...descriptionGetConsumptionReport({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getConsumptionReport'] },
		}),
		// Phase 4 — Payment & Orders
		...descriptionGetPaymentMethod({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getPaymentMethod'] },
		}),
		...descriptionGetPaymentTransaction({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getPaymentTransaction'] },
		}),
		...descriptionListBankAccounts({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listBankAccounts'] },
		}),
		...descriptionGetBankAccount({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getBankAccount'] },
		}),
		...descriptionGetCreditCard({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getCreditCard'] },
		}),
		...descriptionGetDeferredPaymentAccount({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getDeferredPaymentAccount'] },
		}),
		...descriptionGetPaypalAccount({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getPaypalAccount'] },
		}),
		...descriptionGetOrder({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getOrder'] },
		}),
		...descriptionGetOrderAssociatedObject({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getOrderAssociatedObject'] },
		}),
		...descriptionListOrderAvailablePaymentMeans({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listOrderAvailablePaymentMeans'] },
		}),
		...descriptionListOrderBalances({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listOrderBalances'] },
		}),
		...descriptionGetOrderBalance({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getOrderBalance'] },
		}),
		...descriptionGetOrderConsumptionDetails({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getOrderConsumptionDetails'] },
		}),
		...descriptionGetOrderDebt({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getOrderDebt'] },
		}),
		...descriptionListOrderDebtOperations({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listOrderDebtOperations'] },
		}),
		...descriptionGetOrderDebtOperation({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getOrderDebtOperation'] },
		}),
		...descriptionGetOrderDebtOperationAssociatedObject({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getOrderDebtOperationAssociatedObject'] },
		}),
		...descriptionListOrderDetails({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listOrderDetails'] },
		}),
		...descriptionGetOrderDetail({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getOrderDetail'] },
		}),
		...descriptionGetOrderDetailExtension({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getOrderDetailExtension'] },
		}),
		...descriptionGetOrderFollowUp({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getOrderFollowUp'] },
		}),
		...descriptionGetOrderPayment({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getOrderPayment'] },
		}),
		...descriptionGetOrderPaymentMeans({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getOrderPaymentMeans'] },
		}),
		...descriptionListOrderPaymentMethods({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listOrderPaymentMethods'] },
		}),
		...descriptionGetOrderStatus({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getOrderStatus'] },
		}),
		// Phase 5 — Financial Accounts
		...descriptionGetCreditBalance({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getCreditBalance'] },
		}),
		...descriptionListCreditBalanceMovements({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listCreditBalanceMovements'] },
		}),
		...descriptionGetCreditBalanceMovement({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getCreditBalanceMovement'] },
		}),
		...descriptionGetDebtAccountDebt({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getDebtAccountDebt'] },
		}),
		...descriptionListDebtAccountDebtOperations({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listDebtAccountDebtOperations'] },
		}),
		...descriptionGetDebtAccountDebtOperation({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getDebtAccountDebtOperation'] },
		}),
		...descriptionGetDebtAccountDebtOperationAssociatedObject({
			...displayOptions,
			show: {
				...displayOptions?.show,
				meOperation: ['getDebtAccountDebtOperationAssociatedObject'],
			},
		}),
		...descriptionListDeposits({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listDeposits'] },
		}),
		...descriptionGetDeposit({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getDeposit'] },
		}),
		...descriptionListDepositDetails({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listDepositDetails'] },
		}),
		...descriptionGetDepositDetail({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getDepositDetail'] },
		}),
		...descriptionListDepositPaidBills({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listDepositPaidBills'] },
		}),
		...descriptionGetDepositPaidBill({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getDepositPaidBill'] },
		}),
		...descriptionGetDepositPayment({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getDepositPayment'] },
		}),
		...descriptionGetWithdrawal({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getWithdrawal'] },
		}),
		...descriptionListWithdrawalDetails({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listWithdrawalDetails'] },
		}),
		...descriptionGetWithdrawalDetail({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getWithdrawalDetail'] },
		}),
		...descriptionGetWithdrawalPayment({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getWithdrawalPayment'] },
		}),
		...descriptionGetRefund({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getRefund'] },
		}),
		...descriptionListRefundDetails({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listRefundDetails'] },
		}),
		...descriptionGetRefundDetail({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getRefundDetail'] },
		}),
		...descriptionGetRefundPayment({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getRefundPayment'] },
		}),
		...descriptionGetReverseBill({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getReverseBill'] },
		}),
		...descriptionListReverseBillDetails({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listReverseBillDetails'] },
		}),
		...descriptionGetReverseBillDetail({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getReverseBillDetail'] },
		}),
		...descriptionGetReverseBillPayment({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getReverseBillPayment'] },
		}),
		...descriptionGetCorrectiveInvoice({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getCorrectiveInvoice'] },
		}),
		...descriptionGetCorrectiveInvoiceDebt({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getCorrectiveInvoiceDebt'] },
		}),
		...descriptionListCorrectiveInvoiceDebtOperations({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listCorrectiveInvoiceDebtOperations'] },
		}),
		...descriptionGetCorrectiveInvoiceDebtOperation({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getCorrectiveInvoiceDebtOperation'] },
		}),
		...descriptionGetCorrectiveInvoiceDebtOperationAssociatedObject({
			...displayOptions,
			show: {
				...displayOptions?.show,
				meOperation: ['getCorrectiveInvoiceDebtOperationAssociatedObject'],
			},
		}),
		...descriptionListCorrectiveInvoiceDetails({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listCorrectiveInvoiceDetails'] },
		}),
		...descriptionGetCorrectiveInvoiceDetail({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getCorrectiveInvoiceDetail'] },
		}),
		...descriptionGetCorrectiveInvoicePayment({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getCorrectiveInvoicePayment'] },
		}),
		// Phase 6 — Contact & Documents
		...descriptionGetContact({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getContact'] },
		}),
		...descriptionGetContactFields({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getContactFields'] },
		}),
		...descriptionGetDocument({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getDocument'] },
		}),
		...descriptionGetTag({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getTag'] },
		}),
		// Phase 7 — Partner, SLA & Account Info
		...descriptionGetSla({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getSla'] },
		}),
		...descriptionGetSlaCanBeApplied({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getSlaCanBeApplied'] },
		}),
		...descriptionListSlaServices({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listSlaServices'] },
		}),
		...descriptionGetSlaStatus({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getSlaStatus'] },
		}),
		...descriptionGetAgreement({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getAgreement'] },
		}),
		...descriptionGetAgreementContract({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getAgreementContract'] },
		}),
		...descriptionGetAbuse({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getAbuse'] },
		}),
		...descriptionGetCarbonCalculatorTask({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getCarbonCalculatorTask'] },
		}),
		...descriptionGetAccessRestrictionIp({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getAccessRestrictionIp'] },
		}),
		...descriptionGetAccessRestrictionSms({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getAccessRestrictionSms'] },
		}),
		...descriptionGetAccessRestrictionTotp({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getAccessRestrictionTotp'] },
		}),
		...descriptionGetAccessRestrictionU2f({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getAccessRestrictionU2f'] },
		}),
		// Phase 8 — Notification & Consumption
		...descriptionGetEmail({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getEmail'] },
		}),
		...descriptionGetMigration({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getMigration'] },
		}),
		...descriptionListMigrationContracts({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listMigrationContracts'] },
		}),
		...descriptionGetMigrationContract({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getMigrationContract'] },
		}),
		...descriptionGetMigrationAgreement({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getMigrationAgreement'] },
		}),
		...descriptionGetFidelityMovement({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getFidelityMovement'] },
		}),
		...descriptionGetIpOrganisation({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getIpOrganisation'] },
		}),
		// Phase 9 — Domain & DNS Tasks
		...descriptionGetDnsTask({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getDnsTask'] },
		}),
		...descriptionGetDomainTask({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getDomainTask'] },
		}),
		...descriptionListDomainTaskArguments({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['listDomainTaskArguments'] },
		}),
		...descriptionGetDomainTaskArgument({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getDomainTaskArgument'] },
		}),
		...descriptionGetDomainTaskProgress({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getDomainTaskProgress'] },
		}),
		...descriptionGetContactChangeTask({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getContactChangeTask'] },
		}),
		...descriptionGetEmailChangeTask({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getEmailChangeTask'] },
		}),
		...descriptionGetSubscription({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getSubscription'] },
		}),
		// Phase 10 — Telecom
		...descriptionGetFaxCustomDomain({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getFaxCustomDomain'] },
		}),
		...descriptionGetTelephonyDefaultIpRestriction({
			...displayOptions,
			show: { ...displayOptions?.show, meOperation: ['getTelephonyDefaultIpRestriction'] },
		}),
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('meOperation', itemIndex, { extractValue: true });

	switch (operation) {
		// Phase 1 — Account & Identity
		case 'getAccount':
			return await executeGetAccount.call(this, itemIndex ?? 0);
		case 'listOvhAccounts':
			return await executeListOvhAccounts.call(this, itemIndex ?? 0);
		case 'getOvhAccount':
			return await executeGetOvhAccount.call(this, itemIndex ?? 0);
		case 'listOvhAccountMovements':
			return await executeListOvhAccountMovements.call(this, itemIndex ?? 0);
		case 'getOvhAccountMovement':
			return await executeGetOvhAccountMovement.call(this, itemIndex ?? 0);
		case 'listSubAccounts':
			return await executeListSubAccounts.call(this, itemIndex ?? 0);
		case 'getSubAccount':
			return await executeGetSubAccount.call(this, itemIndex ?? 0);
		case 'getAutorenew':
			return await executeGetAutorenew.call(this, itemIndex ?? 0);
		case 'listAvailablePaymentMeans':
			return await executeListAvailablePaymentMeans.call(this, itemIndex ?? 0);
		case 'getIdentityProvider':
			return await executeGetIdentityProvider.call(this, itemIndex ?? 0);
		case 'listIdentityUsers':
			return await executeListIdentityUsers.call(this, itemIndex ?? 0);
		case 'getIdentityUser':
			return await executeGetIdentityUser.call(this, itemIndex ?? 0);
		case 'listUserTokens':
			return await executeListUserTokens.call(this, itemIndex ?? 0);
		case 'getUserToken':
			return await executeGetUserToken.call(this, itemIndex ?? 0);
		case 'listIdentityGroups':
			return await executeListIdentityGroups.call(this, itemIndex ?? 0);
		case 'getIdentityGroup':
			return await executeGetIdentityGroup.call(this, itemIndex ?? 0);
		case 'listGroupUsers':
			return await executeListGroupUsers.call(this, itemIndex ?? 0);
		case 'listSshKeys':
			return await executeListSshKeys.call(this, itemIndex ?? 0);
		case 'getSshKey':
			return await executeGetSshKey.call(this, itemIndex ?? 0);
		case 'listConsentCampaigns':
			return await executeListConsentCampaigns.call(this, itemIndex ?? 0);
		case 'getConsentCampaign':
			return await executeGetConsentCampaign.call(this, itemIndex ?? 0);
		case 'getConsentDecision':
			return await executeGetConsentDecision.call(this, itemIndex ?? 0);
		// Phase 2 — API & Logs
		case 'listApiApplications':
			return await executeListApiApplications.call(this, itemIndex ?? 0);
		case 'getApiApplication':
			return await executeGetApiApplication.call(this, itemIndex ?? 0);
		case 'listApiCredentials':
			return await executeListApiCredentials.call(this, itemIndex ?? 0);
		case 'getApiCredential':
			return await executeGetApiCredential.call(this, itemIndex ?? 0);
		case 'getCredentialApplication':
			return await executeGetCredentialApplication.call(this, itemIndex ?? 0);
		case 'listApiLogKinds':
			return await executeListApiLogKinds.call(this, itemIndex ?? 0);
		case 'getApiLogKind':
			return await executeGetApiLogKind.call(this, itemIndex ?? 0);
		case 'listApiLogSubscriptions':
			return await executeListApiLogSubscriptions.call(this, itemIndex ?? 0);
		case 'getApiLogSubscription':
			return await executeGetApiLogSubscription.call(this, itemIndex ?? 0);
		case 'listApiLogsSelf':
			return await executeListApiLogsSelf.call(this, itemIndex ?? 0);
		case 'getApiLogSelf':
			return await executeGetApiLogSelf.call(this, itemIndex ?? 0);
		case 'listApiLogsServices':
			return await executeListApiLogsServices.call(this, itemIndex ?? 0);
		case 'getApiLogServices':
			return await executeGetApiLogServices.call(this, itemIndex ?? 0);
		case 'listOAuth2Clients':
			return await executeListOAuth2Clients.call(this, itemIndex ?? 0);
		case 'getOAuth2Client':
			return await executeGetOAuth2Client.call(this, itemIndex ?? 0);
		case 'getAuditLogs':
			return await executeGetAuditLogs.call(this, itemIndex ?? 0);
		case 'listAuditLogKinds':
			return await executeListAuditLogKinds.call(this, itemIndex ?? 0);
		case 'getAuditLogKind':
			return await executeGetAuditLogKind.call(this, itemIndex ?? 0);
		case 'listAuditLogSubscriptions':
			return await executeListAuditLogSubscriptions.call(this, itemIndex ?? 0);
		case 'getAuditLogSubscription':
			return await executeGetAuditLogSubscription.call(this, itemIndex ?? 0);
		// Phase 3 — Billing
		case 'listBills':
			return await executeListBills.call(this, itemIndex ?? 0);
		case 'getBill':
			return await executeGetBill.call(this, itemIndex ?? 0);
		case 'getBillDebt':
			return await executeGetBillDebt.call(this, itemIndex ?? 0);
		case 'listBillDebtOperations':
			return await executeListBillDebtOperations.call(this, itemIndex ?? 0);
		case 'getBillDebtOperation':
			return await executeGetBillDebtOperation.call(this, itemIndex ?? 0);
		case 'getBillDebtOperationAssociatedObject':
			return await executeGetBillDebtOperationAssociatedObject.call(this, itemIndex ?? 0);
		case 'listBillDetails':
			return await executeListBillDetails.call(this, itemIndex ?? 0);
		case 'getBillDetail':
			return await executeGetBillDetail.call(this, itemIndex ?? 0);
		case 'getBillPayment':
			return await executeGetBillPayment.call(this, itemIndex ?? 0);
		case 'listBillingGroups':
			return await executeListBillingGroups.call(this, itemIndex ?? 0);
		case 'getBillingGroup':
			return await executeGetBillingGroup.call(this, itemIndex ?? 0);
		case 'listBillingGroupServices':
			return await executeListBillingGroupServices.call(this, itemIndex ?? 0);
		case 'getBillingGroupService':
			return await executeGetBillingGroupService.call(this, itemIndex ?? 0);
		case 'listPurchaseOrders':
			return await executeListPurchaseOrders.call(this, itemIndex ?? 0);
		case 'getPurchaseOrder':
			return await executeGetPurchaseOrder.call(this, itemIndex ?? 0);
		case 'listConsumptionReports':
			return await executeListConsumptionReports.call(this, itemIndex ?? 0);
		case 'getConsumptionReport':
			return await executeGetConsumptionReport.call(this, itemIndex ?? 0);
		// Phase 4 — Payment & Orders
		case 'listPaymentAvailableMethods':
			return await executeListPaymentAvailableMethods.call(this, itemIndex ?? 0);
		case 'listPaymentMethods':
			return await executeListPaymentMethods.call(this, itemIndex ?? 0);
		case 'getPaymentMethod':
			return await executeGetPaymentMethod.call(this, itemIndex ?? 0);
		case 'listPaymentTransactions':
			return await executeListPaymentTransactions.call(this, itemIndex ?? 0);
		case 'getPaymentTransaction':
			return await executeGetPaymentTransaction.call(this, itemIndex ?? 0);
		case 'listBankAccounts':
			return await executeListBankAccounts.call(this, itemIndex ?? 0);
		case 'getBankAccount':
			return await executeGetBankAccount.call(this, itemIndex ?? 0);
		case 'listCreditCards':
			return await executeListCreditCards.call(this, itemIndex ?? 0);
		case 'getCreditCard':
			return await executeGetCreditCard.call(this, itemIndex ?? 0);
		case 'listDeferredPaymentAccounts':
			return await executeListDeferredPaymentAccounts.call(this, itemIndex ?? 0);
		case 'getDeferredPaymentAccount':
			return await executeGetDeferredPaymentAccount.call(this, itemIndex ?? 0);
		case 'listPaypalAccounts':
			return await executeListPaypalAccounts.call(this, itemIndex ?? 0);
		case 'getPaypalAccount':
			return await executeGetPaypalAccount.call(this, itemIndex ?? 0);
		case 'listOrders':
			return await executeListOrders.call(this, itemIndex ?? 0);
		case 'getOrder':
			return await executeGetOrder.call(this, itemIndex ?? 0);
		case 'getOrderAssociatedObject':
			return await executeGetOrderAssociatedObject.call(this, itemIndex ?? 0);
		case 'listOrderAvailablePaymentMeans':
			return await executeListOrderAvailablePaymentMeans.call(this, itemIndex ?? 0);
		case 'listOrderBalances':
			return await executeListOrderBalances.call(this, itemIndex ?? 0);
		case 'getOrderBalance':
			return await executeGetOrderBalance.call(this, itemIndex ?? 0);
		case 'getOrderConsumptionDetails':
			return await executeGetOrderConsumptionDetails.call(this, itemIndex ?? 0);
		case 'getOrderDebt':
			return await executeGetOrderDebt.call(this, itemIndex ?? 0);
		case 'listOrderDebtOperations':
			return await executeListOrderDebtOperations.call(this, itemIndex ?? 0);
		case 'getOrderDebtOperation':
			return await executeGetOrderDebtOperation.call(this, itemIndex ?? 0);
		case 'getOrderDebtOperationAssociatedObject':
			return await executeGetOrderDebtOperationAssociatedObject.call(this, itemIndex ?? 0);
		case 'listOrderDetails':
			return await executeListOrderDetails.call(this, itemIndex ?? 0);
		case 'getOrderDetail':
			return await executeGetOrderDetail.call(this, itemIndex ?? 0);
		case 'getOrderDetailExtension':
			return await executeGetOrderDetailExtension.call(this, itemIndex ?? 0);
		case 'getOrderFollowUp':
			return await executeGetOrderFollowUp.call(this, itemIndex ?? 0);
		case 'getOrderPayment':
			return await executeGetOrderPayment.call(this, itemIndex ?? 0);
		case 'getOrderPaymentMeans':
			return await executeGetOrderPaymentMeans.call(this, itemIndex ?? 0);
		case 'listOrderPaymentMethods':
			return await executeListOrderPaymentMethods.call(this, itemIndex ?? 0);
		case 'getOrderStatus':
			return await executeGetOrderStatus.call(this, itemIndex ?? 0);
		// Phase 5 — Financial Accounts
		case 'listCreditBalances':
			return await executeListCreditBalances.call(this, itemIndex ?? 0);
		case 'getCreditBalance':
			return await executeGetCreditBalance.call(this, itemIndex ?? 0);
		case 'listCreditBalanceMovements':
			return await executeListCreditBalanceMovements.call(this, itemIndex ?? 0);
		case 'getCreditBalanceMovement':
			return await executeGetCreditBalanceMovement.call(this, itemIndex ?? 0);
		case 'getDebtAccount':
			return await executeGetDebtAccount.call(this, itemIndex ?? 0);
		case 'listDebtAccountDebts':
			return await executeListDebtAccountDebts.call(this, itemIndex ?? 0);
		case 'getDebtAccountDebt':
			return await executeGetDebtAccountDebt.call(this, itemIndex ?? 0);
		case 'listDebtAccountDebtOperations':
			return await executeListDebtAccountDebtOperations.call(this, itemIndex ?? 0);
		case 'getDebtAccountDebtOperation':
			return await executeGetDebtAccountDebtOperation.call(this, itemIndex ?? 0);
		case 'getDebtAccountDebtOperationAssociatedObject':
			return await executeGetDebtAccountDebtOperationAssociatedObject.call(this, itemIndex ?? 0);
		case 'listDeposits':
			return await executeListDeposits.call(this, itemIndex ?? 0);
		case 'getDeposit':
			return await executeGetDeposit.call(this, itemIndex ?? 0);
		case 'listDepositDetails':
			return await executeListDepositDetails.call(this, itemIndex ?? 0);
		case 'getDepositDetail':
			return await executeGetDepositDetail.call(this, itemIndex ?? 0);
		case 'listDepositPaidBills':
			return await executeListDepositPaidBills.call(this, itemIndex ?? 0);
		case 'getDepositPaidBill':
			return await executeGetDepositPaidBill.call(this, itemIndex ?? 0);
		case 'getDepositPayment':
			return await executeGetDepositPayment.call(this, itemIndex ?? 0);
		case 'listWithdrawals':
			return await executeListWithdrawals.call(this, itemIndex ?? 0);
		case 'getWithdrawal':
			return await executeGetWithdrawal.call(this, itemIndex ?? 0);
		case 'listWithdrawalDetails':
			return await executeListWithdrawalDetails.call(this, itemIndex ?? 0);
		case 'getWithdrawalDetail':
			return await executeGetWithdrawalDetail.call(this, itemIndex ?? 0);
		case 'getWithdrawalPayment':
			return await executeGetWithdrawalPayment.call(this, itemIndex ?? 0);
		case 'listRefunds':
			return await executeListRefunds.call(this, itemIndex ?? 0);
		case 'getRefund':
			return await executeGetRefund.call(this, itemIndex ?? 0);
		case 'listRefundDetails':
			return await executeListRefundDetails.call(this, itemIndex ?? 0);
		case 'getRefundDetail':
			return await executeGetRefundDetail.call(this, itemIndex ?? 0);
		case 'getRefundPayment':
			return await executeGetRefundPayment.call(this, itemIndex ?? 0);
		case 'listReverseBills':
			return await executeListReverseBills.call(this, itemIndex ?? 0);
		case 'getReverseBill':
			return await executeGetReverseBill.call(this, itemIndex ?? 0);
		case 'listReverseBillDetails':
			return await executeListReverseBillDetails.call(this, itemIndex ?? 0);
		case 'getReverseBillDetail':
			return await executeGetReverseBillDetail.call(this, itemIndex ?? 0);
		case 'getReverseBillPayment':
			return await executeGetReverseBillPayment.call(this, itemIndex ?? 0);
		case 'listCorrectiveInvoices':
			return await executeListCorrectiveInvoices.call(this, itemIndex ?? 0);
		case 'getCorrectiveInvoice':
			return await executeGetCorrectiveInvoice.call(this, itemIndex ?? 0);
		case 'getCorrectiveInvoiceDebt':
			return await executeGetCorrectiveInvoiceDebt.call(this, itemIndex ?? 0);
		case 'listCorrectiveInvoiceDebtOperations':
			return await executeListCorrectiveInvoiceDebtOperations.call(this, itemIndex ?? 0);
		case 'getCorrectiveInvoiceDebtOperation':
			return await executeGetCorrectiveInvoiceDebtOperation.call(this, itemIndex ?? 0);
		case 'getCorrectiveInvoiceDebtOperationAssociatedObject':
			return await executeGetCorrectiveInvoiceDebtOperationAssociatedObject.call(
				this,
				itemIndex ?? 0,
			);
		case 'listCorrectiveInvoiceDetails':
			return await executeListCorrectiveInvoiceDetails.call(this, itemIndex ?? 0);
		case 'getCorrectiveInvoiceDetail':
			return await executeGetCorrectiveInvoiceDetail.call(this, itemIndex ?? 0);
		case 'getCorrectiveInvoicePayment':
			return await executeGetCorrectiveInvoicePayment.call(this, itemIndex ?? 0);
		// Phase 6 — Contact & Documents
		case 'listContacts':
			return await executeListContacts.call(this, itemIndex ?? 0);
		case 'getContact':
			return await executeGetContact.call(this, itemIndex ?? 0);
		case 'getContactFields':
			return await executeGetContactFields.call(this, itemIndex ?? 0);
		case 'listDocuments':
			return await executeListDocuments.call(this, itemIndex ?? 0);
		case 'getDocument':
			return await executeGetDocument.call(this, itemIndex ?? 0);
		case 'listTags':
			return await executeListTags.call(this, itemIndex ?? 0);
		case 'listAvailableTags':
			return await executeListAvailableTags.call(this, itemIndex ?? 0);
		case 'getTag':
			return await executeGetTag.call(this, itemIndex ?? 0);
		// Phase 7 — Partner, SLA & Account Info
		case 'getPartnerLevel':
			return await executeGetPartnerLevel.call(this, itemIndex ?? 0);
		case 'getSupportLevel':
			return await executeGetSupportLevel.call(this, itemIndex ?? 0);
		case 'listSlas':
			return await executeListSlas.call(this, itemIndex ?? 0);
		case 'getSla':
			return await executeGetSla.call(this, itemIndex ?? 0);
		case 'getSlaCanBeApplied':
			return await executeGetSlaCanBeApplied.call(this, itemIndex ?? 0);
		case 'listSlaServices':
			return await executeListSlaServices.call(this, itemIndex ?? 0);
		case 'getSlaStatus':
			return await executeGetSlaStatus.call(this, itemIndex ?? 0);
		case 'listAgreements':
			return await executeListAgreements.call(this, itemIndex ?? 0);
		case 'getAgreement':
			return await executeGetAgreement.call(this, itemIndex ?? 0);
		case 'getAgreementContract':
			return await executeGetAgreementContract.call(this, itemIndex ?? 0);
		case 'listCertificates':
			return await executeListCertificates.call(this, itemIndex ?? 0);
		case 'getVipStatus':
			return await executeGetVipStatus.call(this, itemIndex ?? 0);
		case 'getInsight':
			return await executeGetInsight.call(this, itemIndex ?? 0);
		case 'getRecommendations':
			return await executeGetRecommendations.call(this, itemIndex ?? 0);
		case 'getBringYourOwnIpToken':
			return await executeGetBringYourOwnIpToken.call(this, itemIndex ?? 0);
		case 'listAbuse':
			return await executeListAbuse.call(this, itemIndex ?? 0);
		case 'getAbuse':
			return await executeGetAbuse.call(this, itemIndex ?? 0);
		case 'getCarbonCalculatorHasInvoice':
			return await executeGetCarbonCalculatorHasInvoice.call(this, itemIndex ?? 0);
		case 'listCarbonCalculatorTasks':
			return await executeListCarbonCalculatorTasks.call(this, itemIndex ?? 0);
		case 'getCarbonCalculatorTask':
			return await executeGetCarbonCalculatorTask.call(this, itemIndex ?? 0);
		case 'getAccessRestrictionBackupCode':
			return await executeGetAccessRestrictionBackupCode.call(this, itemIndex ?? 0);
		case 'getAccessRestrictionDeveloperMode':
			return await executeGetAccessRestrictionDeveloperMode.call(this, itemIndex ?? 0);
		case 'listAccessRestrictionIps':
			return await executeListAccessRestrictionIps.call(this, itemIndex ?? 0);
		case 'getAccessRestrictionIp':
			return await executeGetAccessRestrictionIp.call(this, itemIndex ?? 0);
		case 'getAccessRestrictionIpDefaultRule':
			return await executeGetAccessRestrictionIpDefaultRule.call(this, itemIndex ?? 0);
		case 'listAccessRestrictionSms':
			return await executeListAccessRestrictionSms.call(this, itemIndex ?? 0);
		case 'getAccessRestrictionSms':
			return await executeGetAccessRestrictionSms.call(this, itemIndex ?? 0);
		case 'listAccessRestrictionTotp':
			return await executeListAccessRestrictionTotp.call(this, itemIndex ?? 0);
		case 'getAccessRestrictionTotp':
			return await executeGetAccessRestrictionTotp.call(this, itemIndex ?? 0);
		case 'listAccessRestrictionU2f':
			return await executeListAccessRestrictionU2f.call(this, itemIndex ?? 0);
		case 'getAccessRestrictionU2f':
			return await executeGetAccessRestrictionU2f.call(this, itemIndex ?? 0);
		// Phase 7c — Agreements Lifecycle (accept + contract details)
		case 'acceptAgreement':
			return await executeAcceptAgreement.call(this, itemIndex ?? 0);
		case 'getContract':
			return await executeGetContract.call(this, itemIndex ?? 0);
		// Phase 7d — Access Restriction Lifecycle (SOTP/IP/TOTP/U2F/SMS add/delete/enable/disable/sendCode)
		case 'addSotpSecret':
			return await executeAddSotpSecret.call(this, itemIndex ?? 0);
		case 'disableSotpAccount':
			return await executeDisableSotpAccount.call(this, itemIndex ?? 0);
		case 'enableSotpAccount':
			return await executeEnableSotpAccount.call(this, itemIndex ?? 0);
		case 'validateSotpAccount':
			return await executeValidateSotpAccount.call(this, itemIndex ?? 0);
		case 'editDeveloperModeRestriction':
			return await executeEditDeveloperModeRestriction.call(this, itemIndex ?? 0);
		case 'addIpRestriction':
			return await executeAddIpRestriction.call(this, itemIndex ?? 0);
		case 'deleteIpRestriction':
			return await executeDeleteIpRestriction.call(this, itemIndex ?? 0);
		case 'editIpRestriction':
			return await executeEditIpRestriction.call(this, itemIndex ?? 0);
		case 'enableIpAccount':
			return await executeEnableIpAccount.call(this, itemIndex ?? 0);
		case 'disableIpAccount':
			return await executeDisableIpAccount.call(this, itemIndex ?? 0);
		case 'addSmsRestriction':
			return await executeAddSmsRestriction.call(this, itemIndex ?? 0);
		case 'deleteSmsRestriction':
			return await executeDeleteSmsRestriction.call(this, itemIndex ?? 0);
		case 'enableSmsAccount':
			return await executeEnableSmsAccount.call(this, itemIndex ?? 0);
		case 'disableSmsAccount':
			return await executeDisableSmsAccount.call(this, itemIndex ?? 0);
		case 'sendSmsCode':
			return await executeSendSmsCode.call(this, itemIndex ?? 0);
		case 'validateSmsAccount':
			return await executeValidateSmsAccount.call(this, itemIndex ?? 0);
		case 'addTotpRestriction':
			return await executeAddTotpRestriction.call(this, itemIndex ?? 0);
		case 'deleteTotpRestriction':
			return await executeDeleteTotpRestriction.call(this, itemIndex ?? 0);
		case 'enableTotpAccount':
			return await executeEnableTotpAccount.call(this, itemIndex ?? 0);
		case 'disableTotpAccount':
			return await executeDisableTotpAccount.call(this, itemIndex ?? 0);
		case 'validateTotpAccount':
			return await executeValidateTotpAccount.call(this, itemIndex ?? 0);
		case 'editTotpRestriction':
			return await executeEditTotpRestriction.call(this, itemIndex ?? 0);
		case 'addU2fRestriction':
			return await executeAddU2fRestriction.call(this, itemIndex ?? 0);
		case 'deleteU2fRestriction':
			return await executeDeleteU2fRestriction.call(this, itemIndex ?? 0);
		case 'enableU2fAccount':
			return await executeEnableU2fAccount.call(this, itemIndex ?? 0);
		case 'disableU2fAccount':
			return await executeDisableU2fAccount.call(this, itemIndex ?? 0);
		case 'getU2fRestriction':
			return await executeGetU2fRestriction.call(this, itemIndex ?? 0);
		case 'editU2fRestriction':
			return await executeEditU2fRestriction.call(this, itemIndex ?? 0);
		case 'getTotpRestriction':
			return await executeGetTotpRestriction.call(this, itemIndex ?? 0);

		// Phase 8 — Notification & Consumption
		case 'listEmailHistory':
			return await executeListEmailHistory.call(this, itemIndex ?? 0);
		case 'getEmail':
			return await executeGetEmail.call(this, itemIndex ?? 0);
		case 'getMarketing':
			return await executeGetMarketing.call(this, itemIndex ?? 0);
		case 'listAvailableMailingLists':
			return await executeListAvailableMailingLists.call(this, itemIndex ?? 0);
		case 'getCurrentConsumption':
			return await executeGetCurrentConsumption.call(this, itemIndex ?? 0);
		case 'getForecastConsumption':
			return await executeGetForecastConsumption.call(this, itemIndex ?? 0);
		case 'getConsumptionHistory':
			return await executeGetConsumptionHistory.call(this, itemIndex ?? 0);
		case 'listMigrations':
			return await executeListMigrations.call(this, itemIndex ?? 0);
		case 'getMigration':
			return await executeGetMigration.call(this, itemIndex ?? 0);
		case 'listMigrationContracts':
			return await executeListMigrationContracts.call(this, itemIndex ?? 0);
		case 'getMigrationContract':
			return await executeGetMigrationContract.call(this, itemIndex ?? 0);
		case 'getMigrationAgreement':
			return await executeGetMigrationAgreement.call(this, itemIndex ?? 0);
		case 'getFidelityAccount':
			return await executeGetFidelityAccount.call(this, itemIndex ?? 0);
		case 'listFidelityMovements':
			return await executeListFidelityMovements.call(this, itemIndex ?? 0);
		case 'getFidelityMovement':
			return await executeGetFidelityMovement.call(this, itemIndex ?? 0);
		case 'listIpOrganisations':
			return await executeListIpOrganisations.call(this, itemIndex ?? 0);
		case 'getIpOrganisation':
			return await executeGetIpOrganisation.call(this, itemIndex ?? 0);
		// Phase 9 — Domain & DNS Tasks
		case 'listDnsTasks':
			return await executeListDnsTasks.call(this, itemIndex ?? 0);
		case 'getDnsTask':
			return await executeGetDnsTask.call(this, itemIndex ?? 0);
		case 'listDomainTasks':
			return await executeListDomainTasks.call(this, itemIndex ?? 0);
		case 'getDomainTask':
			return await executeGetDomainTask.call(this, itemIndex ?? 0);
		case 'listDomainTaskArguments':
			return await executeListDomainTaskArguments.call(this, itemIndex ?? 0);
		case 'getDomainTaskArgument':
			return await executeGetDomainTaskArgument.call(this, itemIndex ?? 0);
		case 'getDomainTaskProgress':
			return await executeGetDomainTaskProgress.call(this, itemIndex ?? 0);
		case 'listContactChangeTasks':
			return await executeListContactChangeTasks.call(this, itemIndex ?? 0);
		case 'getContactChangeTask':
			return await executeGetContactChangeTask.call(this, itemIndex ?? 0);
		case 'listEmailChangeTasks':
			return await executeListEmailChangeTasks.call(this, itemIndex ?? 0);
		case 'getEmailChangeTask':
			return await executeGetEmailChangeTask.call(this, itemIndex ?? 0);
		case 'listSubscriptions':
			return await executeListSubscriptions.call(this, itemIndex ?? 0);
		case 'getSubscription':
			return await executeGetSubscription.call(this, itemIndex ?? 0);
		// Phase 10 — Telecom
		case 'listFaxCustomDomains':
			return await executeListFaxCustomDomains.call(this, itemIndex ?? 0);
		case 'getFaxCustomDomain':
			return await executeGetFaxCustomDomain.call(this, itemIndex ?? 0);
		case 'listTelephonyDefaultIpRestrictions':
			return await executeListTelephonyDefaultIpRestrictions.call(this, itemIndex ?? 0);
		case 'getTelephonyDefaultIpRestriction':
			return await executeGetTelephonyDefaultIpRestriction.call(this, itemIndex ?? 0);
		case 'getTelephonySettings':
			return await executeGetTelephonySettings.call(this, itemIndex ?? 0);
		case 'getXdslSettings':
			return await executeGetXdslSettings.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "me"`);
}
