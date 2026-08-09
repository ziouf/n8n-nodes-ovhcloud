import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'DefaultFarmId',
			name: 'defaultFarmId',
			type: 'string',
			default: '',
			description: 'The defaultfarmid parameter',
			displayOptions,
		},
		{
			displayName: 'Port',
			name: 'port',
			type: 'string',
			default: '',
			description: 'The port parameter',
			displayOptions,
		},
		{
			displayName: 'Zone',
			name: 'zone',
			type: 'string',
			default: '',
			description: 'The zone parameter',
			displayOptions,
		},
	];
}

/**
 * UDP frontends for this iplb
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/udp/frontend
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const defaultFarmId = this.getNodeParameter('defaultFarmId', _itemIndex) as string;
	const port = this.getNodeParameter('port', _itemIndex) as string;
	const zone = this.getNodeParameter('zone', _itemIndex) as string;


const qs: IDataObject = {
    defaultFarmId: defaultFarmId,
    port: port,
    zone: zone
  };



	const client = new ApiClient(this);
	const data = (await client.httpGet('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'udp' + '/' + 'frontend', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

