import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List licenses of a specific type for an IP block.
 *
 * Retrieves all licenses of the given type associated with an IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/license/{licenseType}
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the List License operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'IP Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP block identifier',
			displayOptions,
		},
		{
			displayName: 'License Type',
			name: 'licenseType',
			type: 'options',
			options: [
				{ name: 'CloudLinux', value: 'cloudLinux' },
				{ name: 'Cpanel', value: 'cpanel' },
				{ name: 'DirectAdmin', value: 'directadmin' },
				{ name: 'Plesk', value: 'plesk' },
				{ name: 'SQL Server', value: 'sqlserver' },
				{ name: 'Virtuozzo', value: 'virtuozzo' },
				{ name: 'Windows', value: 'windows' },
				{ name: 'WorkLight', value: 'worklight' },
			],
			default: 'windows',
			required: true,
			description: 'The type of license',
			displayOptions,
		},
	];
}

/**
 * Executes the List License operation.
 *
 * Retrieves all licenses of the given type associated with an IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/license/{licenseType}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing license IDs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const licenseType = this.getNodeParameter('licenseType', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/license/${licenseType}`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
