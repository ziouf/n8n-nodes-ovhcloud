import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'License Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Windows license service name',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getWorkLightLicenses', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'windows-1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The termination token sent by email to the admin contact',
			displayOptions,
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			description: 'Commentary about your termination request',
			displayOptions,
		},
		{
			displayName: 'FutureUse',
			name: 'futureUse',
			type: 'string',
			default: '',
			description: 'What next after your termination request',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'string',
			default: '',
			description: 'Reason of your termination request',
			displayOptions,
		},
	];
}


/**
 * Confirm service termination.
 *
 * HTTP method: POST
 * Endpoint: /license/windows/{serviceName}/confirmTermination
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', { extractValue: true }) as string;
	const token = this.getNodeParameter('token', itemIndex, '') as string;
	const commentary = this.getNodeParameter('commentary', itemIndex, '') as string;
	const futureUse = this.getNodeParameter('futureUse', itemIndex, '') as string;
	const reason = this.getNodeParameter('reason', itemIndex, '') as string;

	const body: IDataObject = {
    token: token,
    commentary: commentary,
    futureUse: futureUse,
    reason: reason,
    };
	const data = (await client.httpPost('/license/windows/' + encodeURIComponent(serviceName) + '/confirmTermination', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

