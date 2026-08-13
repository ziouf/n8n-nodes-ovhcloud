import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

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
			description: 'The activationEmail parameter',
			displayOptions,
		},
		{
			displayName: 'FirstName',
			name: 'firstName',
			type: 'string',
			default: '',
			description: 'The firstName parameter',
			displayOptions,
		},
		{
			displayName: 'LastName',
			name: 'lastName',
			type: 'string',
			default: '',
			description: 'The lastName parameter',
			displayOptions,
		},
		{
			displayName: 'Licences',
			name: 'licences',
			type: 'string',
			default: '',
			description: 'The licences parameter',
			displayOptions,
		},
	];
}


/**
 * Get accounts associated to this office tenant.
 *
 * HTTP method: GET
 * Endpoint: /license/office/{serviceName}/user
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', { extractValue: true }) as string;
	const activationEmail = this.getNodeParameter('activationEmail', _itemIndex, '') as string;
	const firstName = this.getNodeParameter('firstName', _itemIndex, '') as string;
	const lastName = this.getNodeParameter('lastName', _itemIndex, '') as string;
	const licences = this.getNodeParameter('licences', _itemIndex, '') as string;

	const qs: IDataObject = {
    activationEmail: activationEmail,
    firstName: firstName,
    lastName: lastName,
    licences: licences
  };
	const data = (await client.httpGet('/license/office/' + encodeURIComponent(serviceName) + '/user', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

