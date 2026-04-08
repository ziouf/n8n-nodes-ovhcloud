import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update Freefax Service operation.
 *
 * HTTP method: PUT
 * Endpoint: /freefax/{serviceName}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: {
				mode: 'list',
				value: '',
			},
			required: true,
			modes: [
				{
					displayName: 'By ID',
					name: 'id',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getFreefaxServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Fax Max Call',
			name: 'faxMaxCall',
			type: 'options',
			default: 1,
			options: [
				{ name: '1', value: 1 },
				{ name: '2', value: 2 },
				{ name: '3', value: 3 },
				{ name: '4', value: 4 },
				{ name: '5', value: 5 },
				{ name: '6', value: 6 },
				{ name: '7', value: 7 },
				{ name: '8', value: 8 },
				{ name: '9', value: 9 },
			],
			description: 'Maximum number of simultaneous calls',
			displayOptions,
		},
		{
			displayName: 'Fax Quality',
			name: 'faxQuality',
			type: 'options',
			default: 'best',
			options: [
				{ name: 'Best', value: 'best' },
				{ name: 'High', value: 'high' },
				{ name: 'Normal', value: 'normal' },
			],
			description: 'Quality of the fax transmission',
			displayOptions,
		},
		{
			displayName: 'Fax Tag Line',
			name: 'faxTagLine',
			type: 'string',
			default: '',
			description: 'Tag line displayed on sent faxes',
			displayOptions,
		},
		{
			displayName: 'From Email',
			name: 'fromEmail',
			type: 'string',
			default: '',
			description: 'Email address used as sender',
			displayOptions,
		},
		{
			displayName: 'From Name',
			name: 'fromName',
			type: 'string',
			default: '',
			description: 'Name used as sender',
			displayOptions,
		},
		{
			displayName: 'Redirection Email',
			name: 'redirectionEmail',
			type: 'string',
			default: '',
			description: 'Email address for fax redirection (comma-separated for multiple)',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Freefax Service operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };

	const body: IDataObject = {};

	const faxMaxCall = this.getNodeParameter('faxMaxCall', 0, '') as string | number;
	const faxQuality = this.getNodeParameter('faxQuality', 0, '') as string;
	const faxTagLine = this.getNodeParameter('faxTagLine', 0, '') as string;
	const fromEmail = this.getNodeParameter('fromEmail', 0, '') as string;
	const fromName = this.getNodeParameter('fromName', 0, '') as string;
	const redirectionEmail = this.getNodeParameter('redirectionEmail', 0, '') as string;

	if (faxMaxCall !== '' && faxMaxCall !== undefined) body.faxMaxCall = Number(faxMaxCall);
	if (faxQuality) body.faxQuality = faxQuality;
	if (faxTagLine) body.faxTagLine = faxTagLine;
	if (fromEmail) body.fromEmail = fromEmail;
	if (fromName) body.fromName = fromName;
	if (redirectionEmail) {
		body.redirectionEmail = redirectionEmail.split(',').map((e: string) => e.trim());
	}

	const data = (await client.httpPut(`/freefax/${serviceName}`, { body })) as IDataObject;
	return [{ json: data }];
}
