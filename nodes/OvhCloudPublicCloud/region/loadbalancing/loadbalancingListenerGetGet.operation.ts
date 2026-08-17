import { projectIdLocator } from '../../../../shared/nodes/locators';
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
			displayName: 'Region Name',
			name: 'regionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The region name (e.g. GRA63, BHS62)',
			displayOptions,
		},
		{
			displayName: 'Listener ID',
			name: 'listenerId',
			type: 'string',
			default: '',
			required: true,
			description: 'The listener UUID',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing Listener Get Get operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/listener/${listenerIdVal}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const qs = {} as IDataObject;
	const listenerIdVal = this.getNodeParameter('listenerId', _itemIndex ?? 0) as string;
	if (listenerIdVal !== '') {
		qs.listenerId = listenerIdVal;
	}

	const data = (await client.httpGet(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/listener/${listenerIdVal}`,
		qs,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
