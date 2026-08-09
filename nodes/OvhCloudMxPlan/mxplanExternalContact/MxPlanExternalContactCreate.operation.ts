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
					mxPlanOperation: ['MxPlanExternalContactCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'Contact display name',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanExternalContactCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'External Email Address',
			name: 'externalEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'Contact email address',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanExternalContactCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'First Name',
			name: 'firstName',
			type: 'string',
			default: '',
			description: 'Contact first name',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanExternalContactCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Hidden From G A L',
			name: 'hiddenFromGAL',
			type: 'string',
			default: '',
			description: 'Hide the contact in Global Address List',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanExternalContactCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Initials',
			name: 'initials',
			type: 'string',
			default: '',
			description: 'Contact initials',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanExternalContactCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Last Name',
			name: 'lastName',
			type: 'string',
			default: '',
			description: 'Contact last name',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanExternalContactCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * create new external contact
 *
 * HTTP method: POST
 * Endpoint: /email/mxplan/{service}/externalContact
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;
	const displayName = this.getNodeParameter('displayName', _itemIndex ?? 0) as string;
	const externalEmailAddress = this.getNodeParameter('externalEmailAddress', _itemIndex ?? 0) as string;
	const firstName = this.getNodeParameter('firstName', _itemIndex ?? 0) as string;
	const hiddenFromGAL = this.getNodeParameter('hiddenFromGAL', _itemIndex ?? 0) as string;
	const initials = this.getNodeParameter('initials', _itemIndex ?? 0) as string;
	const lastName = this.getNodeParameter('lastName', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		displayName: displayName,
		externalEmailAddress: externalEmailAddress,
		firstName: firstName,
		hiddenFromGAL: hiddenFromGAL,
		initials: initials,
		lastName: lastName,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/mxplan/' + encodeURIComponent(service) + '/externalContact', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
