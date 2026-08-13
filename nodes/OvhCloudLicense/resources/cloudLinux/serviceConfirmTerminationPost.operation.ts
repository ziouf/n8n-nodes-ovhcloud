import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This will permanently confirm the termination of the cloud Linux.', displayOptions),
		{
			displayName: 'License Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The CloudLinux license service name',
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
					placeholder: 'cloudLinux-1',
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
 * Endpoint: /license/cloudLinux/{serviceName}/confirmTermination
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', { extractValue: true }) as string;
	const token = this.getNodeParameter('token', _itemIndex, '') as string;
	const commentary = this.getNodeParameter('commentary', _itemIndex, '') as string;
	const futureUse = this.getNodeParameter('futureUse', _itemIndex, '') as string;
	const reason = this.getNodeParameter('reason', _itemIndex, '') as string;

	const body: IDataObject = {
    token: token,
    commentary: commentary,
    futureUse: futureUse,
    reason: reason,
    };
	const data = (await client.httpPost('/license/cloudLinux/' + encodeURIComponent(serviceName) + '/confirmTermination', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

