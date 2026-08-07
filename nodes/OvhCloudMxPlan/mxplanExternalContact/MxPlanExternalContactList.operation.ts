import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service',
			name: 'service',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your mxplan organization',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanExternalContactList'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'Filter the value of displayName property (like)',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanExternalContactList'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'External Email Address',
			name: 'externalEmailAddress',
			type: 'string',
			default: '',
			description: 'Filter the value of externalEmailAddress property (like)',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanExternalContactList'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'First Name',
			name: 'firstName',
			type: 'string',
			default: '',
			description: 'Filter the value of firstName property (like)',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanExternalContactList'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			description: 'Filter the value of ID property (like)',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanExternalContactList'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Last Name',
			name: 'lastName',
			type: 'string',
			default: '',
			description: 'Filter the value of lastName property (like)',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanExternalContactList'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * External contacts for this service
 *
 * HTTP method: GET
 * Endpoint: /email/mxplan/{service}/externalContact
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', 0) as string;
	const displayName = this.getNodeParameter('displayName', 0) as string;
	const externalEmailAddress = this.getNodeParameter('externalEmailAddress', 0) as string;
	const firstName = this.getNodeParameter('firstName', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;
	const lastName = this.getNodeParameter('lastName', 0) as string;

	const qs: IDataObject = {
		displayName: displayName,
		externalEmailAddress: externalEmailAddress,
		firstName: firstName,
		id: id,
		lastName: lastName,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/mxplan/' + encodeURIComponent(service) + '/externalContact', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
