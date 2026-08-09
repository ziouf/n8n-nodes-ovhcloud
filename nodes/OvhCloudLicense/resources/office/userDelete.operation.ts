import type {IDisplayOptions,
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
			description: 'The Office license service name',
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
					placeholder: 'office-1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'ActivationEmail',
			name: 'activationEmail',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}


/**
 * Delete existing office user.
 *
 * HTTP method: DELETE
 * Endpoint: /license/office/{serviceName}/user/{activationEmail}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', { extractValue: true }) as string;
	const activationEmail = this.getNodeParameter('activationEmail', _itemIndex) as string;
	await client.httpDelete('/license/office/' + encodeURIComponent(serviceName) + '/user/' + encodeURIComponent(activationEmail) + '');
	return this.helpers.returnJsonArray([{ success: true }]);
}

