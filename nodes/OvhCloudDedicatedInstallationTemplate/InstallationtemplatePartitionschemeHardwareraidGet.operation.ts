import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [
		{
			displayName: 'Schemename',
			name: 'schemeName',
			type: 'string',
			default: '',
			required: true,
			description: 'This partitioning scheme name',
		},
		{
			displayName: 'Templatename',
			name: 'templateName',
			type: 'string',
			default: '',
			required: true,
			description: 'This template name',
		},
	];
}

/**
 * Hardware RAIDs defined in this partitioning scheme
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const schemeName = this.getNodeParameter('schemeName', itemIndex) as string;
	const templateName = this.getNodeParameter('templateName', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/installationTemplate/' + encodeURIComponent(templateName) + '/partitionScheme/' + encodeURIComponent(schemeName) + '/hardwareRaid')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
