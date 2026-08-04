import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

// ============================================================
// SOTP Two-Factor Authentication (POST endpoints)
// ============================================================

export async function executeAddSotpSecret(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const code = this.getNodeParameter('code', 0) as string;
	const data = (await client.httpPost('/me/accessRestriction/backupCode', { code })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

export async function executeDisableSotpAccount(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const code = this.getNodeParameter('code', 0) as string;
	await client.httpPost('/me/accessRestriction/backupCode/disable', { code });
	return this.helpers.returnJsonArray([{ success: true }]);
}

export async function executeEnableSotpAccount(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const code = this.getNodeParameter('code', 0) as string;
	await client.httpPost('/me/accessRestriction/backupCode/enable', { code });
	return this.helpers.returnJsonArray([{ success: true }]);
}

export async function executeValidateSotpAccount(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const code = this.getNodeParameter('code', 0) as string;
	const data = (await client.httpPost('/me/accessRestriction/backupCode/validate', {
		code,
	})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Developer Mode Access Restriction update PUT
// ============================================================

export async function executeEditDeveloperModeRestriction(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {};

	const enabledParam = this.getNodeParameter('enabled', 0) as boolean | undefined;
	if (typeof enabledParam === 'boolean') body.enabled = enabledParam;

	await client.httpPut('/me/accessRestriction/developerMode', body);
	return this.helpers.returnJsonArray([{ success: true }]);
}

// ============================================================
// IP Access Restrictions CRUD (add POST, delete DELETE by ID, update PUT by ID with parameter for id)
// ============================================================

export async function executeAddIpRestriction(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ip = this.getNodeParameter('ip', 0) as string;
	const rule = this.getNodeParameter('rule', 0) as string;
	const warning = this.getNodeParameter('warning', 0) as boolean;
	await client.httpPost('/me/accessRestriction/ip', { ip, rule, warning });
	return this.helpers.returnJsonArray([{ success: true }]);
}

export async function executeDeleteIpRestriction(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	await client.httpDelete(`/me/accessRestriction/ip/${id}`);
	return this.helpers.returnJsonArray([{ success: true }]);
}

export async function executeEditIpRestriction(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;

	const body: IDataObject = {};
	const ruleParam = this.getNodeParameter('rule', 0) as string | undefined;
	if (typeof ruleParam === 'string') body.rule = ruleParam;
	const warningParam = this.getNodeParameter('warning', 0) as boolean | undefined;
	if (typeof warningParam === 'boolean') body.warning = warningParam;

	await client.httpPut(`/me/accessRestriction/ip/${id}`, body);
	return this.helpers.returnJsonArray([{ success: true }]);
}

// ============================================================
// SMS Access Restrictions lifecycle (add/delete/enable/disable/sendCode/validate = 6 operations)
// ============================================================

export async function executeAddSmsRestriction(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const phone = this.getNodeParameter('phone', 0) as string;
	const data = (await client.httpPost('/me/accessRestriction/sms', { phone })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

export async function executeDeleteSmsRestriction(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	await client.httpDelete(`/me/accessRestriction/sms/${id}`);
	return this.helpers.returnJsonArray([{ success: true }]);
}

export async function executeEnableSmsAccount(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	await client.httpPost(`/me/accessRestriction/sms/${id}/enable`, {});
	return this.helpers.returnJsonArray([{ success: true }]);
}

export async function executeDisableSmsAccount(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	await client.httpPost(`/me/accessRestriction/sms/${id}/disable`, {});
	return this.helpers.returnJsonArray([{ success: true }]);
}

export async function executeSendSmsCode(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	await client.httpPost(`/me/accessRestriction/sms/${id}/sendCode`, {});
	return this.helpers.returnJsonArray([{ success: true }]);
}

export async function executeValidateSmsAccount(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	await client.httpPost(`/me/accessRestriction/sms/${id}/validate`, {});
	return this.helpers.returnJsonArray([{ success: true }]);
}

// ============================================================
// TOTP Access Restrictions lifecycle (add/delete/enable/disable/validate = 5 operations)
// Spec paths: POST /me/accessRestriction/totp/{id}/enable|disable|validate
// ============================================================

export async function executeAddTotpRestriction(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpPost('/me/accessRestriction/totp', {})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

export async function executeDeleteTotpRestriction(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	await client.httpDelete(`/me/accessRestriction/totp/${id}`);
	return this.helpers.returnJsonArray([{ success: true }]);
}

export async function executeEnableTotpAccount(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	await client.httpPost(`/me/accessRestriction/totp/${id}/enable`, {});
	return this.helpers.returnJsonArray([{ success: true }]);
}

export async function executeDisableTotpAccount(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	await client.httpPost(`/me/accessRestriction/totp/${id}/disable`, {});
	return this.helpers.returnJsonArray([{ success: true }]);
}

export async function executeValidateTotpAccount(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	await client.httpPost(`/me/accessRestriction/totp/${id}/validate`, {});
	return this.helpers.returnJsonArray([{ success: true }]);
}

// ============================================================
// U2F Access Restrictions lifecycle (add/delete/enable/disable = 4 operations, no code validation)
// Spec paths: POST /me/accessRestriction/u2f/{id}/enable|disable
// ============================================================

export async function executeAddU2fRestriction(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpPost('/me/accessRestriction/u2f', {})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

export async function executeDeleteU2fRestriction(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	await client.httpDelete(`/me/accessRestriction/u2f/${id}`);
	return this.helpers.returnJsonArray([{ success: true }]);
}

export async function executeEnableU2fAccount(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	await client.httpPost(`/me/accessRestriction/u2f/${id}/enable`, {});
	return this.helpers.returnJsonArray([{ success: true }]);
}

export async function executeDisableU2fAccount(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	await client.httpPost(`/me/accessRestriction/u2f/${id}/disable`, {});
	return this.helpers.returnJsonArray([{ success: true }]);
}

// ============================================================
// U2F Get Properties (GET /me/accessRestriction/u2f/{id})
// ============================================================

export async function executeGetU2fRestriction(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	const data = (await client.httpGet(`/me/accessRestriction/u2f/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// U2F Update Properties (PUT /me/accessRestriction/u2f/{id})
// ============================================================

export async function executeEditU2fRestriction(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;

	const body: IDataObject = {};
	const enabledParam = this.getNodeParameter('enabled', 0) as boolean | undefined;
	if (typeof enabledParam === 'boolean') body.enabled = enabledParam;

	await client.httpPut(`/me/accessRestriction/u2f/${id}`, body);
	return this.helpers.returnJsonArray([{ success: true }]);
}

// ============================================================
// TOTP Get Properties (GET /me/accessRestriction/totp/{id})
// ============================================================

export async function executeGetTotpRestriction(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	const data = (await client.httpGet(`/me/accessRestriction/totp/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// TOTP Update Properties (PUT /me/accessRestriction/totp/{id})
// ============================================================

export async function executeEditTotpRestriction(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;

	const body: IDataObject = {};
	const enabledParam = this.getNodeParameter('enabled', 0) as boolean | undefined;
	if (typeof enabledParam === 'boolean') body.enabled = enabledParam;

	await client.httpPut(`/me/accessRestriction/totp/${id}`, body);
	return this.helpers.returnJsonArray([{ success: true }]);
}

// ============================================================
// IP Enable/Disable Access Restrictions
//
// NOTE: the OVH API does NOT expose `enable`/`disable` sub-resources for IP
// restrictions (spec: /me/accessRestriction/ip and /me/accessRestriction/ip/{id}
// only, and the nichandle.IpRestriction model has no `enabled` flag).
// The closest spec-conformant equivalent is PUT /me/accessRestriction/ip/{id}
// toggling the `rule` property (accept = enabled, deny = disabled).
// ============================================================

export async function executeEnableIpAccount(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	await client.httpPut(`/me/accessRestriction/ip/${id}`, { rule: 'accept' });
	return this.helpers.returnJsonArray([{ success: true }]);
}

export async function executeDisableIpAccount(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	await client.httpPut(`/me/accessRestriction/ip/${id}`, { rule: 'deny' });
	return this.helpers.returnJsonArray([{ success: true }]);
}

// ============================================================
// SMS IP Restriction Get Properties (GET /me/accessRestriction/sms/{id}) - duplicate in partner for consistency
// Already covered by executeGetAccessRestrictionSms in partner.operation.ts, but keeping the implementation here.
// ============================================================
