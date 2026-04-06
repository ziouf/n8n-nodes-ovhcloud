import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Update DNS Zone Service Infos operation
 *
 * Updates service information for a DNS zone.
 *
 * HTTP method: PUT
 * Endpoint: /domain/zone/{zoneName}/serviceInfos
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DNS zone',
			displayOptions,
		},
	];
}

/**
 * Executes the Update DNS Zone Service Infos operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;

	const data = (await client.httpPut(`/domain/zone/${zoneName}/serviceInfos`)) as IDataObject;
	return [{ json: data }];
}
