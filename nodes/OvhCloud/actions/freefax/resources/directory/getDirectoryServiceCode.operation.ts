import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get Directory Service Code for Freefax operation.
 *
 * HTTP method: GET
 * Endpoint: /freefax/{serviceName}/directory/getDirectoryServiceCode
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
			displayName: 'APE Code',
			name: 'apeCode',
			type: 'string',
			default: '',
			required: true,
			description: 'The APE code to look up',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Directory Service Code operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };

	const apeCode = this.getNodeParameter('apeCode', 0) as string;

	const data = (await client.httpGet(`/freefax/${serviceName}/directory/getDirectoryServiceCode`, {
		qs: { apeCode },
	})) as IDataObject;
	return [{ json: data }];
}
