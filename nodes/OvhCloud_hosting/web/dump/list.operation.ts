import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Dumps linked to your hosting operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/dump` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Creation Date.From',
			name: 'creationDate.from',
			type: 'string',
			default: '',
			description: 'Filter the value of creationDate property (>=)',
			displayOptions,
		},
		{
			displayName: 'Creation Date.To',
			name: 'creationDate.to',
			type: 'string',
			default: '',
			description: 'Filter the value of creationDate property (<=)',
			displayOptions,
		},
		{
			displayName: 'Database Name',
			name: 'databaseName',
			type: 'string',
			default: '',
			description: 'Filter the value of databaseName property (=)',
			displayOptions,
		},
		{
			displayName: 'Deletion Date.From',
			name: 'deletionDate.from',
			type: 'string',
			default: '',
			description: 'Filter the value of deletionDate property (>=)',
			displayOptions,
		},
		{
			displayName: 'Deletion Date.To',
			name: 'deletionDate.to',
			type: 'string',
			default: '',
			description: 'Filter the value of deletionDate property (<=)',
			displayOptions,
		},
		{
			displayName: 'Orphan',
			name: 'orphan',
			type: 'string',
			default: '',
			description: 'Filter the value of orphan property (=)',
			displayOptions,
		},
	];
}

/**
 * Executes the Dumps linked to your hosting operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/dump
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const creationDateFrom = this.getNodeParameter('creationDate.from', 0) as string;
	const creationDateTo = this.getNodeParameter('creationDate.to', 0) as string;
	const databaseName = this.getNodeParameter('databaseName', 0) as string;
	const deletionDateFrom = this.getNodeParameter('deletionDate.from', 0) as string;
	const deletionDateTo = this.getNodeParameter('deletionDate.to', 0) as string;
	const orphan = this.getNodeParameter('orphan', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/dump`, {
		qs: {
			'creationDate.from': creationDateFrom,
			'creationDate.to': creationDateTo,
			databaseName,
			'deletionDate.from': deletionDateFrom,
			'deletionDate.to': deletionDateTo,
			orphan,
		},
	})) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
