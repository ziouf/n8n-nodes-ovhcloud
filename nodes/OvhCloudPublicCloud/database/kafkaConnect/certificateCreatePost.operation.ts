import { projectIdLocator } from '../../../../shared/nodes/locators';
import { SERVICE_NAME } from '../../serviceName';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
	{
		...projectIdLocator(),
		displayOptions,
	},
	{
			...SERVICE_NAME,
			displayOptions,
		},
	];
}


/**
 * Executes the Create Kafka Connect Certificate operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/cloud/database/kafkaConnect/{serviceName}/certificate
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('projectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;

	const body = {} as IDataObject;
	const data = (await client.httpPost(`/publicCloud/project/${projectId}/cloud/database/kafkaConnect/${serviceName}/certificate`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
