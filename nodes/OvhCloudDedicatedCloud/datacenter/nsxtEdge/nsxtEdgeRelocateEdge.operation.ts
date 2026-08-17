import { SERVICE_NAME } from '../../serviceName';
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
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Datacenter ID',
			name: 'datacenterId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the Datacenter',
			displayOptions,
		},
		{
			displayName: 'NSX-T Edge ID',
			name: 'nsxtEdgeId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the NSX-T Edge',
			displayOptions,
		},
		{
			displayName: 'Datastore',
			name: 'datastore',
			type: 'string',
			default: '',
			description: 'Datastore ID where you want to relocate NSX-T Edge disks',
			displayOptions,
		},
		{
			displayName: 'Host ID',
			name: 'hostId',
			type: 'number',
			default: 0,
			description: 'Host ID where you want to relocate NSX-T Edge compute resources',
			displayOptions,
		},
	];
}

/**
 * Executes the Relocate NSX-T Edge operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}/relocateEdge
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const nsxtEdgeId = this.getNodeParameter('nsxtEdgeId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const datastore = this.getNodeParameter('datastore', _itemIndex, '') as string; if (datastore !== '') { body.datastore = datastore; }
	const hostId = this.getNodeParameter('hostId', _itemIndex) as number; if (hostId) { body.hostId = hostId; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/nsxtEdge/${nsxtEdgeId}/relocateEdge`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
